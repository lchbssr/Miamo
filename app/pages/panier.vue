<script setup lang="ts">
import { Minus, Plus } from 'lucide-vue-next'

useHead({ title: 'Panier' })

type DiningMode = 'sur-place' | 'a-emporter'
type PaymentMethod = 'carte' | 'especes'
type Step = 'cart' | 'payment'

const cart = useCart()
const { lines, count, total } = cart
const loyalty = useLoyalty()
const play = useSound()
const { show } = useToast()

const step = ref<Step>('cart')
const mode = ref<DiningMode>('sur-place')
const paymentMethod = ref<PaymentMethod>('carte')
const promoCode = ref('')
const appliedPromo = ref(false)
const cardNumber = ref('')
const cardExpiry = ref('')
const cardCvc = ref('')
const placed = ref<{ number: number; mode: DiningMode; minutes: number; earned: number } | null>(null)

const modes: { id: DiningMode; label: string }[] = [
  { id: 'sur-place', label: 'Sur place' },
  { id: 'a-emporter', label: 'À emporter' },
]

const paymentMethods: { id: PaymentMethod; label: string }[] = [
  { id: 'carte', label: 'Carte bancaire' },
  { id: 'especes', label: 'Espèces sur place' },
]

const discount = computed(() => (appliedPromo.value ? Math.round(total.value * 0.1) : 0))
const payable = computed(() => total.value - discount.value)

const cardDigits = computed(() => cardNumber.value.replace(/\D/g, ''))
// Format only (MM/AA, 3-digit CVC) — nothing is sent anywhere.
const cardValid = computed(
  () => cardDigits.value.length === 16 && /^(0[1-9]|1[0-2])\/\d{2}$/.test(cardExpiry.value) && /^\d{3}$/.test(cardCvc.value),
)
const canPay = computed(() => paymentMethod.value === 'especes' || cardValid.value)

function change(id: string, qty: number) {
  const before = count.value
  cart.setQty(id, qty)
  play(count.value > before ? 'add' : 'remove')
}

function chooseMode(next: DiningMode) {
  mode.value = next
  play('select')
}

function choosePaymentMethod(next: PaymentMethod) {
  paymentMethod.value = next
  play('select')
}

// Writes the formatted text back into the input too: when a typed letter is stripped, the model value doesn't
// change, so Vue wouldn't re-render the field and the letter would stay on screen.
function formatInput(event: Event, max: number, format: (digits: string) => string) {
  const input = event.target as HTMLInputElement
  input.value = format(input.value.replace(/\D/g, '').slice(0, max))
  return input.value
}

function formatCardNumber(event: Event) {
  cardNumber.value = formatInput(event, 16, (digits) => digits.replace(/(.{4})/g, '$1 ').trim())
}

function formatCardExpiry(event: Event) {
  cardExpiry.value = formatInput(event, 4, (digits) => (digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits))
}

function formatCardCvc(event: Event) {
  cardCvc.value = formatInput(event, 3, (digits) => digits)
}

function applyPromo() {
  if (promoCode.value.trim().toUpperCase() === 'MIAMO10') {
    appliedPromo.value = true
    show('Code promo appliqué : -10 %')
    play('add')
  } else {
    appliedPromo.value = false
    show('Code promo invalide')
    play('remove')
  }
}

function goToPayment() {
  step.value = 'payment'
  play('select')
}

function backToCart() {
  step.value = 'cart'
  play('back')
}

function pay() {
  if (!canPay.value) {
    show('Vérifie les informations de paiement')
    play('remove')
    return
  }
  const earned = pointsForTotal(payable.value)
  loyalty.add(earned)
  placed.value = {
    number: 100 + Math.floor(Math.random() * 900),
    mode: mode.value,
    minutes: Math.min(5 + count.value * 2, 25),
    earned,
  }
  cart.clear()
  step.value = 'cart'
  play('order')
}
</script>

<template>
  <div class="page">
    <PageHeader
      title="Panier"
      :subtitle="placed ? 'Commande envoyée en cuisine !' : 'Vérifie ta commande avant de la valider.'"
      icon="bag"
      :colors="['#6fdcf2', '#2fa9d8']"
    />

    <Transition name="swap" mode="out-in">
      <section v-if="placed" key="done" class="done panel">
        <svg class="done__check" viewBox="0 0 80 80" aria-hidden="true">
          <circle cx="40" cy="40" r="34" />
          <path d="M24 41l11 11 21-23" />
        </svg>
        <h2>Merci !</h2>
        <p class="done__number">Commande n° {{ placed.number }}</p>
        <p>
          {{ placed.mode === 'sur-place' ? 'Installe-toi, on te l’apporte' : 'Elle t’attend au comptoir' }}
          dans environ {{ placed.minutes }} minutes.
        </p>
        <p class="done__points">+{{ placed.earned }} points fidélité gagnés</p>
        <p class="done__note">Miamo est un restaurant fictif : rien ne sera vraiment cuisiné, dommage.</p>
        <NuxtLink to="/" class="pill pill--accent" @click="play('back')">Retour au menu</NuxtLink>
      </section>

      <section v-else-if="!lines.length" key="empty" class="empty panel">
        <div class="empty__icon"><FoodIcon kind="bag" /></div>
        <h2>Ton panier est vide</h2>
        <p>Un petit burger pour commencer ?</p>
        <NuxtLink to="/chaine/burgers" class="pill pill--accent" @click="play('select')">Voir les burgers</NuxtLink>
      </section>

      <section v-else-if="step === 'payment'" key="payment" class="payment panel">
        <h2>Paiement</h2>

        <div class="checkout__row">
          <span>{{ count }} article{{ count > 1 ? 's' : '' }}</span>
          <strong>{{ formatPrice(total) }}</strong>
        </div>

        <div class="promo">
          <input v-model="promoCode" type="text" placeholder="Code promo" aria-label="Code promo" />
          <button class="pill pill--small" @click="applyPromo">Appliquer</button>
        </div>
        <p v-if="appliedPromo" class="promo__applied">Code appliqué : -{{ formatPrice(discount) }}</p>

        <div class="modes" role="radiogroup" aria-label="Mode de paiement">
          <button
            v-for="m in paymentMethods"
            :key="m.id"
            role="radio"
            :aria-checked="paymentMethod === m.id"
            class="modes__option"
            @click="choosePaymentMethod(m.id)"
          >
            {{ m.label }}
          </button>
        </div>

        <div v-if="paymentMethod === 'carte'" class="card-fields">
          <label class="card-field">
            Numéro de carte
            <input :value="cardNumber" inputmode="numeric" placeholder="1234 5678 9012 3456" @input="formatCardNumber" />
          </label>
          <div class="card-fields__row">
            <label class="card-field">
              Expiration
              <input :value="cardExpiry" inputmode="numeric" placeholder="MM/AA" @input="formatCardExpiry" />
            </label>
            <label class="card-field">
              CVC
              <input :value="cardCvc" inputmode="numeric" placeholder="123" @input="formatCardCvc" />
            </label>
          </div>
        </div>
        <p v-else class="cash-note">Tu paieras directement en caisse à la récupération.</p>

        <div class="checkout__row checkout__row--total">
          <span>Total à payer</span>
          <strong>{{ formatPrice(payable) }}</strong>
        </div>

        <div class="payment__actions">
          <button class="pill" @click="backToCart">Retour au panier</button>
          <button class="pill pill--accent" :disabled="!canPay" @click="pay">Payer {{ formatPrice(payable) }}</button>
        </div>
        <p class="payment__disclaimer">Aucun paiement réel n’est effectué — Miamo est un site de démonstration.</p>
      </section>

      <div v-else key="cart" class="cart">
        <ul class="lines panel">
          <li v-for="line in lines" :key="line.id" class="line">
            <div class="line__icon"><FoodIcon :kind="line.icon" :tint="line.tint" /></div>
            <div class="line__text">
              <h2>{{ line.name }}</h2>
              <p v-if="line.details">{{ line.details }}</p>
              <p>{{ formatPrice(line.price) }} l’unité</p>
            </div>
            <div class="stepper">
              <button :aria-label="`Retirer un ${line.name}`" @click="change(line.id, line.qty - 1)">
                <Minus :size="18" :stroke-width="3" />
              </button>
              <span>{{ line.qty }}</span>
              <button
                :aria-label="`Ajouter un ${line.name}`"
                :disabled="line.qty >= MAX_QTY"
                @click="change(line.id, line.qty + 1)"
              >
                <Plus :size="18" :stroke-width="3" />
              </button>
            </div>
            <p class="line__total">{{ formatPrice(line.price * line.qty) }}</p>
          </li>
        </ul>

        <aside class="checkout panel">
          <div class="modes" role="radiogroup" aria-label="Où manger">
            <button
              v-for="m in modes"
              :key="m.id"
              role="radio"
              :aria-checked="mode === m.id"
              class="modes__option"
              @click="chooseMode(m.id)"
            >
              {{ m.label }}
            </button>
          </div>
          <div class="checkout__row">
            <span>{{ count }} article{{ count > 1 ? 's' : '' }}</span>
            <strong>{{ formatPrice(total) }}</strong>
          </div>
          <button class="pill pill--accent" @click="goToPayment">Passer au paiement</button>
        </aside>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.cart {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 24px;
  align-items: start;
}

.lines {
  margin: 0;
  padding: 8px 20px;
  list-style: none;
}

.line {
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr) auto auto;
  align-items: center;
  gap: 16px;
  padding: 14px 0;
}

.line + .line {
  border-top: 2px dashed var(--line);
}

.line__icon {
  width: 64px;
  height: 64px;
  padding: 6px;
  border-radius: 18px;
  background: var(--tint);
}

.line__text h2 {
  font-size: 1.1rem;
  font-weight: 900;
}

.line__text p {
  color: var(--ink-soft);
  font-size: 0.9rem;
  font-weight: 600;
}

.line__total {
  min-width: 80px;
  font-weight: 900;
  text-align: right;
}

.stepper {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--white);
}

.stepper span {
  min-width: 24px;
  font-weight: 900;
  text-align: center;
}

.stepper button {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: none;
  border-radius: 50%;
  background: var(--tint);
  cursor: pointer;
}

.stepper button:hover:not(:disabled) {
  background: var(--accent);
  color: var(--white);
}

.stepper button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.checkout {
  position: sticky;
  top: calc(var(--header-height) + 20px);
  display: grid;
  gap: 18px;
  padding: 20px;
}

.payment {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 16px;
  max-width: 480px;
  margin: 0 auto;
  padding: 28px;
}

.payment h2 {
  font-size: 1.3rem;
}

.checkout__row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-weight: 800;
}

.checkout__row strong {
  font-size: 1.8rem;
  font-weight: 900;
}

.checkout__row--total strong {
  color: var(--accent-deep);
}

.promo {
  display: flex;
  gap: 8px;
}

.promo input {
  flex: 1;
  min-width: 0;
  height: 46px;
  padding: 0 16px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--white);
  color: var(--ink);
  font-size: 0.9rem;
}

.promo__applied {
  margin: -8px 0 0;
  color: #3c7a2b;
  font-weight: 700;
  font-size: 0.88rem;
}

.card-fields {
  display: grid;
  gap: 12px;
}

.card-fields__row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.card-field {
  display: grid;
  gap: 6px;
  color: var(--ink-soft);
  font-size: 0.82rem;
  font-weight: 700;
}

.card-field input {
  width: 100%;
  min-width: 0;
  height: 46px;
  padding: 0 14px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--white);
  color: var(--ink);
  font-size: 0.95rem;
  font-variant-numeric: tabular-nums;
}

.cash-note {
  color: var(--ink-soft);
  font-weight: 600;
  font-size: 0.9rem;
}

.payment__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.payment__actions .pill {
  flex: 1 1 180px;
  padding: 0 18px;
  white-space: nowrap;
}

.payment__disclaimer {
  margin: 0;
  color: var(--ink-soft);
  font-size: 0.78rem;
  font-weight: 600;
  text-align: center;
}

.modes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 4px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--tint);
}

.modes__option {
  padding: 10px 6px;
  border: none;
  border-radius: 999px;
  background: transparent;
  font-weight: 800;
  color: var(--ink-soft);
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
}

.modes__option[aria-checked='true'] {
  background: var(--white);
  color: var(--accent-deep);
  box-shadow: var(--shadow-sm);
}

.empty,
.done {
  display: grid;
  justify-items: center;
  gap: 12px;
  padding: 40px 20px;
  text-align: center;
}

.empty__icon {
  width: 110px;
  height: 110px;
  animation: bob 3s ease-in-out infinite;
}

.empty h2,
.done h2 {
  font-size: 1.8rem;
  font-weight: 900;
}

.empty p,
.done p {
  font-weight: 700;
}

.empty .pill,
.done .pill {
  margin-top: 10px;
}

.done__number {
  font-size: 1.4rem;
  color: var(--accent-deep);
}

.done__points {
  padding: 4px 14px;
  border-radius: 999px;
  background: var(--tint);
  color: var(--accent-deep);
  font-weight: 800;
}

.done .done__note {
  max-width: 40ch;
  color: var(--ink-soft);
  font-size: 0.9rem;
  font-weight: 600;
}

.done__check {
  width: 96px;
  height: 96px;
}

.done__check circle {
  fill: var(--accent);
  animation: pop 0.5s ease-out;
}

.done__check path {
  fill: none;
  stroke: var(--white);
  stroke-width: 8;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 60;
  stroke-dashoffset: 60;
  animation: tick 0.4s 0.25s ease-out forwards;
}

.swap-enter-active,
.swap-leave-active {
  transition:
    opacity 0.2s,
    transform 0.2s;
}

.swap-enter-from,
.swap-leave-to {
  opacity: 0;
  transform: scale(0.97);
}

@keyframes tick {
  to {
    stroke-dashoffset: 0;
  }
}

@media (max-width: 860px) {
  .cart {
    grid-template-columns: 1fr;
  }

  .checkout {
    position: static;
  }
}

@media (max-width: 560px) {
  .line {
    grid-template-columns: 52px minmax(0, 1fr) auto;
    gap: 10px 12px;
  }

  .line__icon {
    width: 52px;
    height: 52px;
  }

  .stepper {
    grid-column: 2;
    justify-self: start;
  }

  .line__total {
    grid-column: 3;
    grid-row: 1 / span 2;
  }

  .card-fields__row {
    grid-template-columns: 1fr;
  }
}
</style>
