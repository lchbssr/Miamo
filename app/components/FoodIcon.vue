<script setup lang="ts">
import type { IconKind } from '~/data/menu'

defineProps<{ kind: IconKind; tint?: string }>()
</script>

<template>
  <svg class="food-icon" viewBox="0 0 64 64" aria-hidden="true">
    <g v-if="kind === 'burger' || kind === 'burger-classic'">
      <path d="M9 29c0-11 10-18 23-18s23 7 23 18z" fill="#f5a83f" />
      <path d="M15 22c3-4 8-6 12-6" stroke="#fff" stroke-opacity=".6" stroke-width="3" stroke-linecap="round" fill="none" />
      <ellipse cx="25" cy="20" rx="1.8" ry="1.1" fill="#fff4d6" />
      <ellipse cx="33" cy="16" rx="1.8" ry="1.1" fill="#fff4d6" />
      <ellipse cx="40" cy="21" rx="1.8" ry="1.1" fill="#fff4d6" />
      <ellipse cx="31" cy="24" rx="1.8" ry="1.1" fill="#fff4d6" />
      <path d="M8 31q3-3 6 0t6 0 6 0 6 0 6 0 6 0 6 0 6 0v3H8z" fill="#7cc84a" />
      <rect x="9" y="34" width="46" height="10" rx="5" fill="#7a4128" />
      <path d="M10 34h44l-5 6-4-3-5 4-4-4-5 4-4-4-5 4-4-4-4 3z" fill="#ffcf2e" />
      <path d="M10 44h44v3a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6z" fill="#e8963a" />
    </g>

    <g v-else-if="kind === 'burger-double'">
      <path d="M9 24c0-10 10-16 23-16s23 6 23 16z" fill="#f5a83f" />
      <ellipse cx="25" cy="16" rx="1.8" ry="1.1" fill="#fff4d6" />
      <ellipse cx="38" cy="16" rx="1.8" ry="1.1" fill="#fff4d6" />
      <ellipse cx="31" cy="20" rx="1.8" ry="1.1" fill="#fff4d6" />
      <path d="M8 26q3-3 6 0t6 0 6 0 6 0 6 0 6 0 6 0 6 0v3H8z" fill="#7cc84a" />
      <rect x="9" y="29" width="46" height="8" rx="4" fill="#7a4128" />
      <path d="M10 29h44l-5 5-4-3-5 3-4-3-5 3-4-3-5 3-4-3z" fill="#ffcf2e" />
      <rect x="9" y="37" width="46" height="8" rx="4" fill="#6b3a23" />
      <path d="M10 37h44l-5 5-4-3-5 3-4-3-5 3-4-3-5 3-4-3z" fill="#ffcf2e" />
      <path d="M10 45h44v3a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6z" fill="#e8963a" />
    </g>

    <g v-else-if="kind === 'burger-crispy'">
      <path d="M9 29c0-11 10-18 23-18s23 7 23 18z" fill="#f5a83f" />
      <ellipse cx="25" cy="20" rx="1.8" ry="1.1" fill="#fff4d6" />
      <ellipse cx="40" cy="21" rx="1.8" ry="1.1" fill="#fff4d6" />
      <path d="M8 31q3-3 6 0t6 0 6 0 6 0 6 0 6 0 6 0 6 0v3H8z" fill="#7cc84a" />
      <rect x="9" y="34" width="46" height="10" rx="4.5" fill="#e8b25a" stroke="#c4873a" stroke-width="1" />
      <g fill="#c4873a" opacity=".6">
        <circle cx="17" cy="37" r="1.4" />
        <circle cx="24" cy="40" r="1.4" />
        <circle cx="32" cy="37" r="1.4" />
        <circle cx="40" cy="40" r="1.4" />
        <circle cx="47" cy="37" r="1.4" />
        <circle cx="28" cy="41" r="1.2" />
        <circle cx="36" cy="41" r="1.2" />
      </g>
      <path d="M10 44h44v3a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6z" fill="#e8963a" />
    </g>

    <g v-else-if="kind === 'burger-veggie'">
      <path d="M9 29c0-11 10-18 23-18s23 7 23 18z" fill="#f5a83f" />
      <ellipse cx="25" cy="20" rx="1.8" ry="1.1" fill="#fff4d6" />
      <ellipse cx="40" cy="21" rx="1.8" ry="1.1" fill="#fff4d6" />
      <path d="M8 31q3-3 6 0t6 0 6 0 6 0 6 0 6 0 6 0 6 0v3H8z" fill="#7cc84a" />
      <path d="M12 34h40l-3 4H15z" fill="#e8483b" />
      <rect x="9" y="38" width="46" height="9" rx="4.5" fill="#d9a85c" stroke="#b9843a" stroke-width="1" />
      <g fill="#b9843a" opacity=".7">
        <circle cx="17" cy="41" r="1.4" />
        <circle cx="24" cy="44" r="1.4" />
        <circle cx="32" cy="41" r="1.4" />
        <circle cx="40" cy="44" r="1.4" />
        <circle cx="47" cy="41" r="1.4" />
        <circle cx="28" cy="45" r="1.2" />
        <circle cx="36" cy="45" r="1.2" />
      </g>
      <path d="M10 47h44v3a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6z" fill="#e8963a" />
    </g>

    <g v-else-if="kind === 'burger-mountain'">
      <path d="M9 29c0-11 10-18 23-18s23 7 23 18z" fill="#f5a83f" />
      <ellipse cx="25" cy="20" rx="1.8" ry="1.1" fill="#fff4d6" />
      <ellipse cx="40" cy="21" rx="1.8" ry="1.1" fill="#fff4d6" />
      <rect x="9" y="29" width="46" height="9" rx="4" fill="#7a4128" />
      <rect x="9" y="37" width="46" height="7" rx="3.5" fill="#fbe27a" />
      <g fill="#c4453b" stroke="#a8362d" stroke-width=".8">
        <rect x="12" y="38" width="14" height="4" rx="2" transform="rotate(-6 19 40)" />
        <rect x="27" y="39" width="14" height="4" rx="2" transform="rotate(5 34 41)" />
        <rect x="41" y="38" width="12" height="4" rx="2" transform="rotate(-4 47 40)" />
      </g>
      <g fill="#5f9e3a">
        <circle cx="18" cy="43" r="1.5" />
        <circle cx="32" cy="43.5" r="1.5" />
        <circle cx="45" cy="43" r="1.5" />
      </g>
      <path d="M10 44h44v3a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6z" fill="#e8963a" />
    </g>

    <g v-else-if="kind === 'burger-teriyaki'">
      <path d="M9 29c0-11 10-18 23-18s23 7 23 18z" fill="#f5a83f" />
      <ellipse cx="25" cy="20" rx="1.8" ry="1.1" fill="#fff4d6" />
      <ellipse cx="33" cy="16" rx="1.8" ry="1.1" fill="#fff4d6" />
      <ellipse cx="40" cy="21" rx="1.8" ry="1.1" fill="#fff4d6" />
      <path d="M8 31q3-3 6 0t6 0 6 0 6 0 6 0 6 0 6 0 6 0v3H8z" fill="#7cc84a" />
      <rect x="9" y="34" width="46" height="10" rx="5" fill="#6b3a1a" />
      <path d="M11 36c6 3 36 3 42 0" stroke="#d98a3a" stroke-opacity=".8" stroke-width="2.2" stroke-linecap="round" fill="none" />
      <path d="M14 40c6 2 30 2 36 0" stroke="#e8a94a" stroke-opacity=".7" stroke-width="1.8" stroke-linecap="round" fill="none" />
      <path d="M10 44h44v3a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6z" fill="#e8963a" />
    </g>

    <g v-else-if="kind === 'burger-mushroom'">
      <path d="M9 29c0-11 10-18 23-18s23 7 23 18z" fill="#f5a83f" />
      <ellipse cx="25" cy="20" rx="1.8" ry="1.1" fill="#fff4d6" />
      <ellipse cx="40" cy="21" rx="1.8" ry="1.1" fill="#fff4d6" />
      <path d="M8 31q3-3 6 0t6 0 6 0 6 0 6 0 6 0 6 0 6 0v3H8z" fill="#7cc84a" />
      <rect x="9" y="34" width="46" height="9" rx="4" fill="#7a4128" />
      <g fill="#a87b55" stroke="#8a6040" stroke-width="1">
        <ellipse cx="18" cy="39" rx="5" ry="3.2" />
        <ellipse cx="30" cy="40" rx="5.5" ry="3.4" />
        <ellipse cx="42" cy="38" rx="5" ry="3.2" />
      </g>
      <path d="M12 42h40l-4 4-4-2-4 3-4-3-4 3-4-3-4 2z" fill="#ffcf2e" />
      <path d="M10 46h44v3a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6z" fill="#e8963a" />
    </g>

    <g v-else-if="kind === 'burger-inferno'">
      <path d="M9 29c0-11 10-18 23-18s23 7 23 18z" fill="#f5a83f" />
      <ellipse cx="25" cy="20" rx="1.8" ry="1.1" fill="#fff4d6" />
      <ellipse cx="40" cy="21" rx="1.8" ry="1.1" fill="#fff4d6" />
      <path d="M8 31q3-3 6 0t6 0 6 0 6 0 6 0 6 0 6 0 6 0v3H8z" fill="#7cc84a" />
      <rect x="9" y="34" width="46" height="9" rx="4" fill="#7a4128" />
      <g fill="#4f9a3a" stroke="#3c7a2b" stroke-width="1">
        <circle cx="20" cy="38" r="3.4" />
        <circle cx="34" cy="39" r="3.4" />
        <circle cx="44" cy="37" r="3" />
      </g>
      <g fill="#c0271a" opacity=".85">
        <circle cx="20" cy="38" r="1" />
        <circle cx="34" cy="39" r="1" />
      </g>
      <path d="M12 43c6 2 34 2 40 0" stroke="#ff8a3d" stroke-width="2.4" stroke-linecap="round" fill="none" />
      <path d="M10 45h44v3a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6z" fill="#e8963a" />
      <path d="M36 15c5-1 9 1 11 5" stroke="#d62d1f" stroke-width="4" stroke-linecap="round" fill="none" />
      <path d="M37 14.5c3-.5 5 0 7 1.5" stroke="#fff" stroke-opacity=".5" stroke-width="1.2" stroke-linecap="round" fill="none" />
      <path d="M35 15l-3-2" stroke="#4f9a3a" stroke-width="2" stroke-linecap="round" />
    </g>

    <g v-else-if="kind === 'burger-shrimp'">
      <path d="M9 29c0-11 10-18 23-18s23 7 23 18z" fill="#f5a83f" />
      <ellipse cx="25" cy="20" rx="1.8" ry="1.1" fill="#fff4d6" />
      <ellipse cx="40" cy="21" rx="1.8" ry="1.1" fill="#fff4d6" />
      <path d="M8 31q3-3 6 0t6 0 6 0 6 0 6 0 6 0 6 0 6 0v3H8z" fill="#7cc84a" />
      <g fill="#f2897a" stroke="#d96a58" stroke-width="1">
        <path d="M12.5 35c-3-2-4-5-2.5-7.5 2 1 3.5 4 2.5 7.5z" />
        <path d="M51.5 35c3-2 4-5 2.5-7.5-2 1-3.5 4-2.5 7.5z" />
      </g>
      <g fill="#eb9d81" stroke="#c97a4a" stroke-width="1">
        <ellipse cx="18" cy="38" rx="8.5" ry="6" />
        <ellipse cx="46" cy="38" rx="8.5" ry="6" />
        <ellipse cx="32" cy="37.5" rx="9" ry="6.5" />
      </g>
      <g fill="#c97a4a" opacity=".4">
        <circle cx="15" cy="36" r="1.1" />
        <circle cx="21" cy="40" r="1.1" />
        <circle cx="30" cy="35" r="1.1" />
        <circle cx="35" cy="40" r="1.1" />
        <circle cx="45" cy="36" r="1.1" />
        <circle cx="49" cy="40" r="1.1" />
      </g>
      <path d="M12 44c6 2 34 2 40 0" stroke="#f7b8a8" stroke-width="2.4" stroke-linecap="round" fill="none" />
      <path d="M10 45h44v3a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6z" fill="#e8963a" />
    </g>

    <g v-else-if="kind === 'burger-camembert'">
      <path d="M9 29c0-11 10-18 23-18s23 7 23 18z" fill="#f5a83f" />
      <ellipse cx="25" cy="20" rx="1.8" ry="1.1" fill="#fff4d6" />
      <ellipse cx="40" cy="21" rx="1.8" ry="1.1" fill="#fff4d6" />
      <rect x="9" y="29" width="46" height="9" rx="4" fill="#7a4128" />
      <path d="M11 40c4-1 9-2 21-2s17 1 21 2c0 4-3 7-7 7H18c-4 0-7-3-7-7z" fill="#8a4a2a" />
      <polygon points="17,33 32,30 47,33 43,43 21,43" fill="#fbead0" stroke="#d4a94a" stroke-width="1.6" stroke-linejoin="round" />
      <g fill="#d4a94a">
        <circle cx="21" cy="36" r="1.2" />
        <circle cx="27" cy="39" r="1.2" />
        <circle cx="32" cy="35" r="1.2" />
        <circle cx="37" cy="39" r="1.2" />
        <circle cx="43" cy="36" r="1.2" />
        <circle cx="30" cy="42" r="1.2" />
      </g>
      <path d="M10 47h44v3a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6z" fill="#e8963a" />
    </g>

    <g v-else-if="kind === 'burger-colossus'">
      <path d="M32 3v14" stroke="#e8e2d8" stroke-width="1.6" stroke-linecap="round" />
      <path d="M32 3l9 3.5-9 3.5z" fill="#e2572b" />
      <g transform="translate(4.5 9) scale(.86)">
        <path d="M7 20c0-9 11-14 25-14s25 5 25 14z" fill="#f5a83f" />
        <ellipse cx="22" cy="13" rx="1.8" ry="1.1" fill="#fff4d6" />
        <ellipse cx="32" cy="10" rx="1.8" ry="1.1" fill="#fff4d6" />
        <ellipse cx="42" cy="13" rx="1.8" ry="1.1" fill="#fff4d6" />
        <path d="M6 22q3-3 6 0t6 0 6 0 6 0 6 0 6 0 6 0 6 0 6 0v3H6z" fill="#7cc84a" />
        <rect x="7" y="25" width="50" height="5" rx="2.5" fill="#7a4128" />
        <path d="M8 29h48l-3 3-4-2-4 2-4-2-4 2-4-2-4 2-4-2-4 2-3-3z" fill="#ffcf2e" />
        <rect x="7" y="32" width="50" height="5" rx="2.5" fill="#6b3a23" />
        <path d="M8 36h48l-3 3-4-2-4 2-4-2-4 2-4-2-4 2-4-2-4 2-3-3z" fill="#ffcf2e" />
        <rect x="7" y="39" width="50" height="5" rx="2.5" fill="#7a4128" />
        <path d="M8 43h48l-3 3-4-2-4 2-4-2-4 2-4-2-4 2-4-2-4 2-3-3z" fill="#ffcf2e" />
        <rect x="7" y="46" width="50" height="5" rx="2.5" fill="#6b3a23" />
        <path d="M9 51h46v3a6 6 0 0 1-6 6H15a6 6 0 0 1-6-6z" fill="#e8963a" />
      </g>
    </g>

    <g v-else-if="kind === 'burger-wildwest'">
      <path d="M9 29c0-11 10-18 23-18s23 7 23 18z" fill="#f5a83f" />
      <ellipse cx="25" cy="20" rx="1.8" ry="1.1" fill="#fff4d6" />
      <ellipse cx="40" cy="21" rx="1.8" ry="1.1" fill="#fff4d6" />
      <path d="M8 31q3-3 6 0t6 0 6 0 6 0 6 0 6 0 6 0 6 0v3H8z" fill="#7cc84a" />
      <rect x="9" y="34" width="46" height="9" rx="4" fill="#7a4128" />
      <g fill="#c4453b" stroke="#a8362d" stroke-width=".8">
        <rect x="12" y="35" width="14" height="4" rx="2" transform="rotate(-5 19 37)" />
        <rect x="27" y="36" width="14" height="4" rx="2" transform="rotate(4 34 38)" />
        <rect x="41" y="35" width="12" height="4" rx="2" transform="rotate(-3 47 37)" />
      </g>
      <g fill="#f0cf6a" stroke="#d9ab4a" stroke-width=".8" opacity=".9">
        <circle cx="18" cy="42" r="2.2" />
        <circle cx="30" cy="43" r="2.2" />
        <circle cx="42" cy="42" r="2.2" />
      </g>
      <path d="M12 43c6 2 34 2 40 0" stroke="#8a4a2a" stroke-width="2.2" stroke-linecap="round" fill="none" />
      <path d="M10 45h44v3a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6z" fill="#e8963a" />
    </g>

    <g v-else-if="kind === 'builder'">
      <path d="M11 27c0-9 9-14 21-14s21 5 21 14z" fill="#f5a83f" />
      <ellipse cx="26" cy="19" rx="1.8" ry="1.1" fill="#fff4d6" />
      <ellipse cx="36" cy="21" rx="1.8" ry="1.1" fill="#fff4d6" />
      <rect x="12" y="27" width="40" height="7" rx="3.5" fill="#e8483b" />
      <ellipse cx="23" cy="30.5" rx="5" ry="1.4" fill="#ff8a7d" />
      <ellipse cx="41" cy="30.5" rx="5" ry="1.4" fill="#ff8a7d" />
      <rect x="11" y="33" width="42" height="9" rx="4.5" fill="#7a4128" />
      <path d="M12 33h40l-4 5-4-3-4 4-4-4-4 4-4-4-4 4-4-4-4 3z" fill="#ffcf2e" />
      <path d="M12 42h40v3a6 6 0 0 1-6 6H18a6 6 0 0 1-6-6z" fill="#e8963a" />
      <path d="M53 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#34bedb" />
    </g>

    <g v-else-if="kind === 'fries'">
      <g fill="#ffd23f" stroke="#e8a92a" stroke-width="1">
        <rect x="15" y="14" width="5" height="22" rx="2" transform="rotate(-14 17 25)" />
        <rect x="21" y="9" width="5" height="26" rx="2" transform="rotate(-7 23 22)" />
        <rect x="28" y="6" width="5" height="28" rx="2" />
        <rect x="35" y="9" width="5" height="27" rx="2" transform="rotate(6 37 22)" />
        <rect x="42" y="12" width="5" height="24" rx="2" transform="rotate(13 44 24)" />
      </g>
      <path d="M13 27q19 8 38 0l-5 29H18z" fill="#ef4b4b" />
      <path d="M16 31q16 6 32 0" stroke="#fff" stroke-opacity=".35" stroke-width="2" fill="none" />
      <circle cx="32" cy="44" r="6.5" fill="#fff" />
      <text x="32" y="47.6" text-anchor="middle" font-size="10" font-weight="900" fill="#ef4b4b" font-family="Nunito, sans-serif">M</text>
    </g>

    <g v-else-if="kind === 'potatoes'">
      <g fill="#f6ecd3" stroke="#dcc693" stroke-width="1">
        <rect x="13" y="14" width="9" height="26" rx="3" transform="rotate(-12 17.5 27)" />
        <rect x="22" y="8" width="9" height="30" rx="3" transform="rotate(-5 26.5 23)" />
        <rect x="31" y="8" width="9" height="30" rx="3" transform="rotate(5 35.5 23)" />
        <rect x="40" y="14" width="9" height="26" rx="3" transform="rotate(12 44.5 27)" />
      </g>
      <g fill="#b5703a">
        <rect x="13" y="14" width="9" height="9" rx="3" transform="rotate(-12 17.5 27)" />
        <rect x="22" y="8" width="9" height="9" rx="3" transform="rotate(-5 26.5 23)" />
        <rect x="31" y="8" width="9" height="9" rx="3" transform="rotate(5 35.5 23)" />
        <rect x="40" y="14" width="9" height="9" rx="3" transform="rotate(12 44.5 27)" />
      </g>
      <path d="M13 27q19 8 38 0l-5 29H18z" fill="#ef4b4b" />
      <path d="M16 31q16 6 32 0" stroke="#fff" stroke-opacity=".35" stroke-width="2" fill="none" />
      <circle cx="32" cy="44" r="6.5" fill="#fff" />
      <text x="32" y="47.6" text-anchor="middle" font-size="10" font-weight="900" fill="#ef4b4b" font-family="Nunito, sans-serif">M</text>
    </g>

    <g v-else-if="kind === 'nuggets'">
      <ellipse cx="21" cy="41" rx="13" ry="9.5" transform="rotate(-12 21 41)" fill="#e9a33c" />
      <ellipse cx="43" cy="42" rx="13" ry="9.5" transform="rotate(10 43 42)" fill="#f2b44c" />
      <ellipse cx="32" cy="27" rx="13" ry="9.5" fill="#f7c55e" />
      <g fill="#d98f2b" opacity=".7">
        <circle cx="27" cy="25" r="1.2" />
        <circle cx="36" cy="29" r="1.2" />
        <circle cx="17" cy="40" r="1.2" />
        <circle cx="46" cy="44" r="1.2" />
        <circle cx="40" cy="39" r="1.2" />
      </g>
      <path d="M24 22c3-3 8-3 11-2" stroke="#fff" stroke-opacity=".6" stroke-width="2.5" stroke-linecap="round" fill="none" />
    </g>

    <g v-else-if="kind === 'rings'">
      <ellipse cx="24" cy="38" rx="15" ry="11" fill="none" stroke="#e9a840" stroke-width="7" />
      <ellipse cx="40" cy="27" rx="14" ry="10" fill="none" stroke="#f7c463" stroke-width="7" />
      <path d="M31 20c3-2 7-3 10-2" stroke="#fff" stroke-opacity=".6" stroke-width="2" stroke-linecap="round" fill="none" />
    </g>

    <g v-else-if="kind === 'mozzarella'">
      <g fill="#e3b24a" stroke="#c4903a" stroke-width="1.2">
        <rect x="12" y="18" width="10" height="30" rx="4" transform="rotate(-6 17 33)" />
        <rect x="24" y="14" width="10" height="34" rx="4" />
        <rect x="36" y="18" width="10" height="30" rx="4" transform="rotate(6 41 33)" />
      </g>
      <g fill="#fdf6e8" stroke="#e3d7c1" stroke-width="1">
        <ellipse cx="17" cy="18" rx="5" ry="3" transform="rotate(-6 17 18)" />
        <ellipse cx="29" cy="14" rx="5" ry="3" />
        <ellipse cx="41" cy="18" rx="5" ry="3" transform="rotate(6 41 18)" />
      </g>
      <path d="M28 16c1 5 1 9-1 13" stroke="#fff" stroke-width="2.6" stroke-linecap="round" fill="none" opacity=".85" />
      <g fill="#c4903a" opacity=".5">
        <circle cx="15" cy="30" r="1" />
        <circle cx="20" cy="41" r="1" />
        <circle cx="27" cy="25" r="1" />
        <circle cx="27" cy="41" r="1" />
        <circle cx="39" cy="30" r="1" />
        <circle cx="44" cy="41" r="1" />
      </g>
    </g>

    <g v-else-if="kind === 'wings'">
      <g transform="rotate(-14 18 30)">
        <rect x="15" y="2" width="6" height="18" rx="3" fill="#fdf6e8" stroke="#ddd0b8" stroke-width="1" />
        <circle cx="18" cy="3" r="3.5" fill="#fdf6e8" stroke="#ddd0b8" stroke-width="1" />
        <ellipse cx="18" cy="34" rx="9" ry="15" fill="#e3a24a" stroke="#c4873a" stroke-width="1" />
      </g>
      <g transform="rotate(14 46 30)">
        <rect x="43" y="2" width="6" height="18" rx="3" fill="#fdf6e8" stroke="#ddd0b8" stroke-width="1" />
        <circle cx="46" cy="3" r="3.5" fill="#fdf6e8" stroke="#ddd0b8" stroke-width="1" />
        <ellipse cx="46" cy="34" rx="9" ry="15" fill="#eb9a3e" stroke="#c4873a" stroke-width="1" />
      </g>
      <g fill="#c0271a" opacity=".5">
        <circle cx="13" cy="32" r="1.2" />
        <circle cx="23" cy="40" r="1.2" />
        <circle cx="41" cy="32" r="1.2" />
        <circle cx="51" cy="40" r="1.2" />
      </g>
    </g>

    <g v-else-if="kind === 'shrimp-bites'">
      <g fill="#f3c988" stroke="#d9a662" stroke-width="1">
        <ellipse cx="20" cy="22" rx="7" ry="5.2" transform="rotate(-10 20 22)" />
        <ellipse cx="32" cy="17" rx="7" ry="5.2" />
        <ellipse cx="44" cy="22" rx="7" ry="5.2" transform="rotate(10 44 22)" />
      </g>
      <g fill="#f2897a" opacity=".85">
        <path d="M18 22c1-2 3-2 3 0s-1 3-3 1z" />
        <path d="M30 17c1-2 3-2 3 0s-1 3-3 1z" />
        <path d="M42 22c1-2 3-2 3 0s-1 3-3 1z" />
      </g>
      <path d="M13 27q19 8 38 0l-5 29H18z" fill="#ef4b4b" />
      <path d="M16 31q16 6 32 0" stroke="#fff" stroke-opacity=".35" stroke-width="2" fill="none" />
      <circle cx="32" cy="44" r="6.5" fill="#fff" />
      <text x="32" y="47.6" text-anchor="middle" font-size="10" font-weight="900" fill="#ef4b4b" font-family="Nunito, sans-serif">M</text>
    </g>

    <g v-else-if="kind === 'cheese-fries'">
      <g fill="#ffd23f" stroke="#e8a92a" stroke-width="1">
        <rect x="15" y="14" width="5" height="22" rx="2" transform="rotate(-14 17 25)" />
        <rect x="21" y="9" width="5" height="26" rx="2" transform="rotate(-7 23 22)" />
        <rect x="28" y="6" width="5" height="28" rx="2" />
        <rect x="35" y="9" width="5" height="27" rx="2" transform="rotate(6 37 22)" />
        <rect x="42" y="12" width="5" height="24" rx="2" transform="rotate(13 44 24)" />
      </g>
      <path d="M13 27q19 8 38 0l-5 29H18z" fill="#ef4b4b" />
      <path d="M16 31q16 6 32 0" stroke="#fff" stroke-opacity=".35" stroke-width="2" fill="none" />
      <circle cx="32" cy="44" r="6.5" fill="#fff" />
      <text x="32" y="47.6" text-anchor="middle" font-size="10" font-weight="900" fill="#ef4b4b" font-family="Nunito, sans-serif">M</text>
      <path
        d="M14 26c3 6 2 8 7 8s4-5 9-5 4 5 9 5 4-2 7-8c2 4-1 9-4 10-6 2-6-3-12-3s-6 5-12 3c-3-1-6-6-4-10z"
        fill="#f5b942"
        stroke="#e09a2e"
        stroke-width="1"
      />
      <path d="M18 28c3 3 4 4 8 4s5-3 9-3 5 3 9 3" stroke="#fde08a" stroke-width="1.6" stroke-linecap="round" fill="none" opacity=".9" />
    </g>

    <g v-else-if="kind === 'hash-browns'">
      <g fill="#e3a24a" stroke="#c4873a" stroke-width="1">
        <ellipse cx="22" cy="36" rx="14" ry="8" transform="rotate(-6 22 36)" />
        <ellipse cx="42" cy="40" rx="13" ry="7.5" transform="rotate(5 42 40)" />
      </g>
      <g fill="#c4873a" opacity=".5">
        <circle cx="16" cy="33" r="1" />
        <circle cx="24" cy="39" r="1" />
        <circle cx="30" cy="32" r="1" />
        <circle cx="38" cy="43" r="1" />
        <circle cx="46" cy="37" r="1" />
      </g>
      <path d="M12 36c2-2 5-2 6 0M34 40c2-2 5-2 6 0" stroke="#fff" stroke-opacity=".6" stroke-width="1.6" stroke-linecap="round" fill="none" />
    </g>

    <g v-else-if="kind === 'inferno-bites'">
      <ellipse cx="18" cy="42" rx="11" ry="8.5" transform="rotate(-10 18 42)" fill="#e2572b" />
      <ellipse cx="38" cy="44" rx="11" ry="8.5" transform="rotate(8 38 44)" fill="#eb6a37" />
      <ellipse cx="30" cy="30" rx="11" ry="8.5" fill="#f2814a" />
      <g fill="#8a1f10" opacity=".6">
        <circle cx="26" cy="28" r="1.1" />
        <circle cx="34" cy="32" r="1.1" />
        <circle cx="14" cy="41" r="1.1" />
        <circle cx="42" cy="45" r="1.1" />
      </g>
      <g>
        <path d="M22 13c3 4 3 9-1 12-1-4-3-5-4-3-2 3 0 6 2 7-6 1-9-5-6-10 2-3 5-4 5-7 2 0 3 0 4 1z" fill="#ffc72c" />
        <path d="M33 9c3 5 4 10-1 14-1-5-3-6-5-4-2 3 0 7 3 8-7 1-10-6-7-12 2-4 6-5 6-8 2 0 3 1 4 2z" fill="#e2572b" />
        <path d="M44 14c2 4 3 7-1 10-1-3-2-4-3-3-2 2 0 5 2 5-5 1-7-4-5-8 1-2 4-3 4-6 1 1 2 1 3 2z" fill="#ffc72c" />
      </g>
    </g>

    <g v-else-if="kind === 'cup'">
      <path d="M37 3l-4 15" stroke="#34bedb" stroke-width="3.5" stroke-linecap="round" />
      <rect x="15" y="15" width="34" height="7" rx="3.5" fill="#e9eef2" stroke="#cfd7df" />
      <path d="M18 22h28l-3.6 33.4A3 3 0 0 1 39.4 58H24.6a3 3 0 0 1-3-2.6z" :fill="tint ?? '#ef4b4b'" />
      <path d="M19.4 33h25.2l-1.2 12H20.6z" fill="#fff" opacity=".9" />
      <circle cx="32" cy="39" r="3.5" :fill="tint ?? '#ef4b4b'" />
      <path d="M22 25l1.5 25" stroke="#fff" stroke-opacity=".45" stroke-width="2.5" stroke-linecap="round" />
    </g>

    <g v-else-if="kind === 'shake'">
      <path d="M41 9l-3 16" stroke="#34bedb" stroke-width="3" stroke-linecap="round" />
      <path d="M19 24h26l-4 31.4A3 3 0 0 1 38 58H26a3 3 0 0 1-3-2.6z" :fill="tint ?? '#fff1c9'" stroke="#e3d7c1" />
      <path d="M17 25c0-6 5-9 8-9 1-5 13-5 14 0 3 0 8 3 8 9z" fill="#fff" stroke="#e3e8ed" />
      <circle cx="31" cy="11" r="4" fill="#e8383d" />
      <path d="M31 7c1-3 3-4 5-4" stroke="#5a8f3c" stroke-width="1.5" fill="none" />
      <path d="M23 29l2 22" stroke="#fff" stroke-opacity=".6" stroke-width="2.5" stroke-linecap="round" />
    </g>

    <g v-else-if="kind === 'mug'">
      <path d="M16 20h28l-2.6 30A5 5 0 0 1 36.4 54H23.6a5 5 0 0 1-5-4.6z" :fill="tint ?? '#e9c9a0'" stroke="#c4a87a" />
      <path d="M44 26h3a6 6 0 0 1 0 12h-4" fill="none" stroke="#c4a87a" stroke-width="3.4" />
      <path d="M19 23h22l-.6 7H19.6z" fill="#fff" opacity=".55" />
      <g stroke="#fff" stroke-opacity=".7" stroke-width="2" stroke-linecap="round" fill="none">
        <path d="M24 12c-2 2-2 4 0 6" />
        <path d="M31 10c-2 2-2 4 0 6" />
      </g>
    </g>

    <g v-else-if="kind === 'latte'">
      <path d="M20 16h20l-2 36a4 4 0 0 1-4 3.6H26a4 4 0 0 1-4-3.6z" fill="#eef4f7" stroke="#cfd7df" />
      <path d="M21.6 27h17.8l-2 25.4A4 4 0 0 1 33.4 56h-6.8a4 4 0 0 1-4-3.6z" :fill="tint ?? '#8bc34a'" />
      <path d="M22.1 22h17l-.5 6H22.6z" fill="#fff" opacity=".85" />
      <g fill="#fff" opacity=".85">
        <rect x="25" y="31" width="4" height="4" rx="1" />
        <rect x="34" y="35" width="4" height="4" rx="1" />
      </g>
      <path d="M36 10l-2 9" stroke="#34bedb" stroke-width="3" stroke-linecap="round" />
    </g>

    <g v-else-if="kind === 'sundae'">
      <path d="M17 35c0-8 5-12 9-12 1-7 12-8 13-1 5 0 9 5 8 13z" fill="#fff6e6" />
      <path d="M20 31c4 3 6-2 10 1s7-2 11 1 4 2 5 1" stroke="#d9862b" stroke-width="3" fill="none" stroke-linecap="round" />
      <circle cx="33" cy="16" r="4" fill="#e8383d" />
      <path d="M14 34h36c0 10-8 16-18 16S14 44 14 34z" fill="#bfe7f2" />
      <path d="M18 38c2 5 6 8 11 9" stroke="#fff" stroke-opacity=".7" stroke-width="2.5" stroke-linecap="round" fill="none" />
      <rect x="29" y="49" width="6" height="6" fill="#bfe7f2" />
      <rect x="22" y="54" width="20" height="4" rx="2" fill="#a6dbe9" />
    </g>

    <g v-else-if="kind === 'cookie'">
      <circle cx="32" cy="33" r="23" fill="#dca468" stroke="#c4874d" stroke-width="2" />
      <g fill="#5b3420">
        <circle cx="23" cy="25" r="3" />
        <circle cx="38" cy="22" r="2.5" />
        <circle cx="43" cy="37" r="3" />
        <circle cx="28" cy="43" r="2.5" />
        <circle cx="34" cy="33" r="2" />
        <circle cx="19" cy="36" r="2" />
      </g>
      <path d="M17 20c3-4 8-7 13-7" stroke="#fff" stroke-opacity=".45" stroke-width="2.5" stroke-linecap="round" fill="none" />
    </g>

    <g v-else-if="kind === 'donut'">
      <circle cx="32" cy="34" r="15" fill="none" stroke="#e9a65a" stroke-width="15" />
      <circle cx="32" cy="33" r="15" fill="none" stroke="#f78fb3" stroke-width="11" />
      <g stroke-width="2.4" stroke-linecap="round">
        <path d="M21 25l3 1" stroke="#fff" />
        <path d="M38 20l2-2" stroke="#ffd84d" />
        <path d="M45 30l1 3" stroke="#6fdcf2" />
        <path d="M40 44l3-1" stroke="#fff" />
        <path d="M24 44l-2-2" stroke="#9be15d" />
        <path d="M18 34l1 3" stroke="#ffd84d" />
        <path d="M30 19l3 0" stroke="#6fdcf2" />
      </g>
    </g>

    <g v-else-if="kind === 'churros'">
      <g transform="rotate(-12 26 24)">
        <rect x="21" y="5" width="9" height="34" rx="4.5" fill="#d98b3a" />
        <path d="M25.5 8v28" stroke="#b86d24" stroke-width="1.6" stroke-dasharray="3 3" />
      </g>
      <g transform="rotate(10 39 24)">
        <rect x="34" y="7" width="9" height="32" rx="4.5" fill="#e39a48" />
        <path d="M38.5 10v26" stroke="#b86d24" stroke-width="1.6" stroke-dasharray="3 3" />
      </g>
      <path d="M17 33h30l-6 25H23z" fill="#fff" stroke="#e3e8ed" />
      <path d="M22 33l4 25M32 33v25M42 33l-4 25" stroke="#ef4b4b" stroke-width="3" />
    </g>

    <g v-else-if="kind === 'matcha-tart'">
      <path d="M10 48l22-30 22 30z" fill="#e3b779" stroke="#c99a5c" stroke-width="1" stroke-linejoin="round" />
      <path d="M14 47l18-25 18 25z" fill="#8bc34a" />
      <path d="M22 47l10-15 10 15z" fill="#a7d968" opacity=".85" />
      <g fill="#e3b779" stroke="#c99a5c" stroke-width="1">
        <circle cx="14" cy="47" r="3.2" />
        <circle cx="21" cy="39" r="3.2" />
        <circle cx="28" cy="32" r="3.2" />
        <circle cx="36" cy="32" r="3.2" />
        <circle cx="43" cy="39" r="3.2" />
        <circle cx="50" cy="47" r="3.2" />
      </g>
      <circle cx="29" cy="38" r="3" fill="#fff" />
      <circle cx="36" cy="33" r="1.6" fill="#fff" opacity=".8" />
      <rect x="8" y="47" width="48" height="6" rx="3" fill="#d9a85c" />
    </g>

    <g v-else-if="kind === 'mochi'">
      <g fill="#fbeaf0" stroke="#e8c9d4" stroke-width="1">
        <circle cx="21" cy="38" r="12" />
        <circle cx="43" cy="38" r="12" />
        <circle cx="32" cy="22" r="12" />
      </g>
      <g fill="#f78fb3" opacity=".35">
        <circle cx="21" cy="38" r="12" />
      </g>
      <path d="M26 20a6 6 0 0 1 12 0c0 3-3 5-6 5s-6-2-6-5z" fill="#fff6e6" />
      <g fill="#e8c9d4" opacity=".6">
        <circle cx="16" cy="33" r="1.1" />
        <circle cx="47" cy="33" r="1.1" />
        <circle cx="27" cy="18" r="1.1" />
      </g>
    </g>

    <g v-else-if="kind === 'parfait'">
      <path d="M20 16h24l-3 38a4 4 0 0 1-4 3.6H27a4 4 0 0 1-4-3.6z" fill="#eef4f7" stroke="#cfd7df" />
      <path d="M21.3 42h21.4l-1 11.6A4 4 0 0 1 37.7 57H26.3a4 4 0 0 1-4-3.4z" fill="#e8483b" />
      <path d="M22.2 32h19.6l-.7 8H22.9z" fill="#fff6e6" />
      <path d="M23 24h18l-.5 6H23.5z" fill="#f78fb3" />
      <circle cx="40" cy="14" r="5" fill="#e8383d" />
      <path d="M38 10c0-3 2-5 4-5" stroke="#5a8f3c" stroke-width="1.6" fill="none" />
    </g>

    <g v-else-if="kind === 'sweet-potato'">
      <g transform="rotate(-10 24 32)">
        <path d="M14 22c6-4 14-2 14 8s-8 20-14 16-6-20 0-24z" fill="#e3a24a" stroke="#c4873a" stroke-width="1" />
        <path d="M18 22c3 6 3 16 0 22" stroke="#c4873a" stroke-width="1.4" stroke-dasharray="2 3" fill="none" />
      </g>
      <g transform="rotate(8 42 34)">
        <path d="M34 24c6-4 14-2 14 8s-8 20-14 16-6-20 0-24z" fill="#d98b3a" stroke="#b8752e" stroke-width="1" />
        <path d="M38 24c3 6 3 16 0 22" stroke="#b8752e" stroke-width="1.4" stroke-dasharray="2 3" fill="none" />
      </g>
      <g fill="#7a3a68" opacity=".55">
        <path d="M14 23c2 1 3 3 2 5" />
        <path d="M46 44c-2-1-3-3-2-5" />
      </g>
      <g fill="#fdf1e6">
        <circle cx="20" cy="27" r="1.3" />
        <circle cx="26" cy="38" r="1.3" />
        <circle cx="39" cy="29" r="1.3" />
        <circle cx="45" cy="40" r="1.3" />
        <circle cx="31" cy="33" r="1.1" />
      </g>
    </g>

    <g v-else-if="kind === 'bag'">
      <path d="M25 15c0-7 14-7 14 0" stroke="#8a5a2b" stroke-width="3" fill="none" />
      <path d="M13 21h38l-3 35H16z" :fill="tint ?? '#c98a4b'" />
      <path d="M13 21h38l-1.4 7H14.4z" fill="#000" opacity=".16" />
      <circle cx="32" cy="40" r="9" fill="#fff" />
      <text x="32" y="45" text-anchor="middle" font-size="13" font-weight="900" fill="#ef4b4b" font-family="Nunito, sans-serif">M</text>
      <path d="M17 31l1.8 20" stroke="#fff" stroke-opacity=".35" stroke-width="2.5" stroke-linecap="round" />
    </g>

    <g v-else-if="kind === 'info'">
      <circle cx="32" cy="32" r="23" fill="#7d8ff2" />
      <circle cx="32" cy="20" r="4" fill="#fff" />
      <rect x="28" y="28" width="8" height="20" rx="4" fill="#fff" />
      <path d="M17 24c2-5 6-9 11-10" stroke="#fff" stroke-opacity=".45" stroke-width="2.5" stroke-linecap="round" fill="none" />
    </g>
  </svg>
</template>

<style scoped>
.food-icon {
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
}
</style>
