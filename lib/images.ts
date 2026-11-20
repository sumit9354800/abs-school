/**
 * Images: Unsplash photo IDs. Apni school ki photos use karni ho to
 * /public mein daalo aur IMG ki value ko "/photo.jpg" jaise path se replace karo.
 */
export const IMG: Record<string, string> = {
  hero: "photo-1503676260728-1c00da094a0b",
  classroom: "photo-1509062522246-3755977927d7",
  play: "photo-1472162072942-cd5147eb3902",
  read: "photo-1503454537195-1dcabb73ffb9",
  art: "photo-1596464716127-f2a82984de30",
  sport: "photo-1544717305-2782549b5136",
  safe: "photo-1427504494785-3a9ca7044f45",
  kids: "photo-1587654780291-39c9404d746b",
  story: "photo-1577896851231-70ef18881754",
  event: "photo-1522202176988-66273c2fd55f",
  bus: "photo-1570125909232-eb263c188f7e",
  teacher: "photo-1580894732444-8ecded7900cd",
};

export const imgUrl = (k: string, w = 800) => {
  const v = IMG[k] ?? k;
  if (v.startsWith("/") || v.startsWith("http")) return v;
  return `https://images.unsplash.com/${v}?auto=format&fit=crop&w=${w}&q=70`;
};

/* Fallback illustrations — shown if a photo fails to load */
const IL: Record<string, [string, string, string]> = {
  hero: ["🧒", "#38BDF8", "#2563EB"],
  classroom: ["🏫", "#34D399", "#2563EB"],
  play: ["🛝", "#FACC15", "#FB923C"],
  read: ["📚", "#818CF8", "#2563EB"],
  art: ["🎨", "#FB923C", "#EC4899"],
  sport: ["⚽", "#34D399", "#0EA5E9"],
  safe: ["🛡️", "#38BDF8", "#34D399"],
  kids: ["🧒", "#FACC15", "#34D399"],
  story: ["📖", "#A78BFA", "#FB923C"],
  event: ["🎉", "#F472B6", "#FACC15"],
  bus: ["🚌", "#FACC15", "#FB923C"],
  teacher: ["👩‍🏫", "#38BDF8", "#818CF8"],
};

export const ill = (k: string) => {
  const [e, a, b] = IL[k] ?? ["🙂", "#FACC15", "#FB923C"];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="400" height="300" fill="url(#g)"/><circle cx="335" cy="60" r="34" fill="#FACC15"/><circle cx="55" cy="255" r="95" fill="#fff" opacity=".15"/><circle cx="365" cy="275" r="70" fill="#fff" opacity=".18"/><text x="200" y="190" font-size="110" text-anchor="middle">${e}</text></svg>`;
  return "data:image/svg+xml," + encodeURIComponent(svg);
};
