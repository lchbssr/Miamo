<script setup lang="ts">
import type { IngredientId } from '~/data/ingredients'

defineProps<{ id: IngredientId | 'bun-top' | 'bun-bottom' }>()
</script>

<template>
  <div class="layer" :class="`layer--${id}`" />
</template>

<style scoped>
.layer {
  --w: 220px;
  width: var(--w);
  margin: 0 auto;
  flex: none;
}

.layer--bun-top {
  height: 70px;
  border-radius: 50% 50% 12px 12px / 100% 100% 12px 12px;
  background:
    radial-gradient(ellipse 4px 2.5px at 30% 35%, #fff4d6 98%, transparent),
    radial-gradient(ellipse 4px 2.5px at 50% 22%, #fff4d6 98%, transparent),
    radial-gradient(ellipse 4px 2.5px at 68% 38%, #fff4d6 98%, transparent),
    radial-gradient(ellipse 4px 2.5px at 42% 55%, #fff4d6 98%, transparent),
    radial-gradient(ellipse 4px 2.5px at 60% 60%, #fff4d6 98%, transparent),
    radial-gradient(ellipse 4px 2.5px at 22% 62%, #fff4d6 98%, transparent),
    radial-gradient(ellipse 4px 2.5px at 80% 58%, #fff4d6 98%, transparent),
    radial-gradient(circle at 30% 25%, rgb(255 255 255 / 0.45), transparent 40%),
    linear-gradient(#f8b553, #e9952f);
  box-shadow: inset 0 -6px 0 rgb(0 0 0 / 0.08);
}

.layer--bun-bottom {
  height: 30px;
  border-radius: 8px 8px 22px 22px;
  background: linear-gradient(#f3a646, #de8a2d);
  box-shadow: inset 0 4px 0 rgb(255 255 255 / 0.25);
}

.layer--steak {
  height: 26px;
  --w: 228px;
  border-radius: 14px;
  background:
    radial-gradient(circle at 20% 40%, #8a4a30 2px, transparent 3px) 0 0 / 22px 13px,
    linear-gradient(#80442a, #5f3220);
}

.layer--poulet {
  height: 28px;
  --w: 232px;
  border-radius: 16px 10px 16px 12px;
  background:
    radial-gradient(circle at 50% 50%, #f2b75f 2px, transparent 3px) 0 0 / 14px 10px,
    linear-gradient(#e8a24a, #c97b2a);
}

.layer--cheddar {
  height: 16px;
  --w: 236px;
  background: #ffcd2e;
  clip-path: polygon(0 0, 100% 0, 100% 40%, 88% 40%, 84% 100%, 78% 40%, 52% 40%, 46% 90%, 40% 40%, 18% 40%, 13% 100%, 8% 40%, 0 40%);
  margin-bottom: -8px;
  position: relative;
}

.layer--salade {
  height: 14px;
  --w: 244px;
  background: radial-gradient(circle at 50% 100%, #7cc84a 9px, transparent 10px) 0 0 / 18px 14px repeat-x;
  border-bottom: 5px solid #7cc84a;
  margin-bottom: -2px;
}

.layer--tomate {
  height: 12px;
  --w: 212px;
  border-radius: 6px;
  background:
    radial-gradient(ellipse 18px 3px at 25% 50%, #ff8a7d 98%, transparent),
    radial-gradient(ellipse 18px 3px at 75% 50%, #ff8a7d 98%, transparent),
    #e8483b;
}

.layer--oignons {
  height: 9px;
  --w: 204px;
  border-radius: 6px;
  background: repeating-linear-gradient(90deg, #f3e6f6 0 18px, #d9b8e3 18px 22px);
}

.layer--bacon {
  height: 11px;
  --w: 236px;
  border-radius: 6px;
  background: repeating-linear-gradient(100deg, #c4453b 0 12px, #f2a1a1 12px 16px, #a8352d 16px 26px);
}

.layer--cornichons {
  height: 9px;
  --w: 200px;
  background: radial-gradient(ellipse 12px 4.5px at 50% 50%, #5f9e3a 95%, transparent) 0 0 / 34px 9px repeat-x;
}

.layer--sauce {
  height: 7px;
  --w: 224px;
  border-radius: 6px;
  background: #fbe4b3;
}
</style>
