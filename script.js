const moodSelector = document.getElementById("mood-selector");
const resultSection = document.getElementById("result-section");
const recipeTitle = document.getElementById("recipe-title");
const recipeDesc = document.getElementById("recipe-desc");
const musicEmbed = document.getElementById("music-embed");

const moodData = {
  happy: {
    recipe: {
      title: "Lemon Sunshine Cupcakes",
      desc: "Tangy lemon zest, soft sponge, and a burst of joy in every bite. Can dessert brighten your whole day?",
    },
    music: "https://open.spotify.com/embed/track/60nZcImufyMA1MKQY3dcCH", // Justin Timberlake – Can't Stop The Feeling!
  },
  romantic: {
    recipe: {
      title: "Strawberry Rose Crepes",
      desc: "Delicate and fragrant like a handwritten love letter—curious what makes these crepes feel like romance?",
    },
    music: "https://open.spotify.com/embed/track/29lYuO2AHuZX1DEvc3y6vB", // Nyasha David – Ta Ta Ta
  },
  sad: {
    recipe: {
      title: "Comfort Mac & Cheese",
      desc: "Creamy, golden, and warm — just the dish to melt away a heavy heart. Want to know what makes it unforgettable?",
    },
    music: "https://open.spotify.com/embed/track/5hnGrTBaEsdukpDF6aZg8a", // Dean Lewis – How Do I Say Goodbye
  },
  chill: {
    recipe: {
      title: "Avocado Toast Deluxe",
      desc: "Smooth, crisp, and totally unbothered. Ever wondered how toast can feel like self-care?",
    },
    music: "https://open.spotify.com/embed/track/7nnAsH5hFbaHqkiCMzFUD8", // Holy Ten ft. Feli Nandi – Ndiri Ndega
  },
  energized: {
    recipe: {
      title: "Protein Power Bowl",
      desc: "Packed with color and crunch — this bowl isn’t just a meal, it’s momentum. Curious about the fuel behind the flavor?",
    },
    music: "https://open.spotify.com/embed/track/1rfofaqEpACxVEHIZBJe6W", // Dua Lipa – Don't Start Now
  },
  adventurous: {
    recipe: {
      title: "Spicy Thai Noodle Adventure",
      desc: "A burst of heat, a splash of lime — each bite a passport stamp. Ready to taste the thrill?",
    },
    music: "https://open.spotify.com/embed/track/2gMXnyrvIjhVBUZwvLZDMP", // Imagine Dragons – Thunder
  },
  nostalgic: {
    recipe: {
      title: "Mom's Classic Apple Pie",
      desc: "Golden crust, cinnamon warmth, and a slice of yesterday. Wonder what memories are baked in?",
    },
    music: "https://open.spotify.com/embed/track/3AJwUDP919kvQ9QcozQPxg", // Journey – Don't Stop Believin'
  },
  focused: {
    recipe: {
      title: "Green Tea Smoothie Bowl",
      desc: "Clean, calm, and energizing — like clarity in a bowl. What powers this focused fuel?",
    },
    music: "https://open.spotify.com/embed/track/0nbXyq5TXYPCO7pr3N8S4I", // Lo-Fi Chill Beats
  },
  lazy: {
    recipe: {
      title: "No-Cook Overnight Oats",
      desc: "Effortless indulgence you make while doing nothing. Tempted to see what magic happens overnight?",
    },
    music: "https://open.spotify.com/embed/track/1z6WtY7X4HQJvzxC4UgkSf", // Billie Eilish – idontwannabeyouanymore
  },
  inspired: {
    recipe: {
      title: "Rainbow Veggie Stir Fry",
      desc: "A swirl of colors and crunch — every bite a creative spark. Want to know what brings it all together?",
    },
    music: "https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b", // The Weeknd – Blinding Lights
  },
};

moodSelector.addEventListener("change", () => {
  const mood = moodSelector.value;
  if (moodData[mood]) {
    resultSection.classList.remove("hidden");
    recipeTitle.textContent = moodData[mood].recipe.title;
    recipeDesc.textContent = moodData[mood].recipe.desc;

    musicEmbed.innerHTML = `
      <iframe style="border-radius:12px" src="${moodData[mood].music}" width="100%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `;
  }
});
