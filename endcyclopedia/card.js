/** @format */
const organisms = [
  {
    id: "ecoli",
    name: "Escherichia coli",
    description:
      "A Gram-negative bacterium commonly found in the intestinal tract.",
    image: "../imgs/organism/ecoli.jpeg",
    type: "gram negative",
    danger: "Low Risk",
    habitat: "Intestinal tract",
  },
  {
    id: "salmonella",
    name: "Salmonella enterica",
    description:
      "A Gram-negative bacterium associated with foodborne infections.",
    image: "../imgs/organism/salmonela.jpeg",
    type: "gram negativ",
    danger: "Pathogenic",
    habitat: "Intestinal tract",
  },
  {
    id: "salmonella",
    name: "Salmonella enterica",
    description:
      "A Gram-negative bacterium associated with foodborne infections.",
    image: "../imgs/organism/salmonela.jpeg",
    type: "gram negativ",
    danger: "Pathogenic",
    habitat: "Intestinal tract",
  },

  {
    id: "volvox",
    name: "Volvox",
    description: "A colonial green alga that lives in freshwater environments.",
    image: "../imgs/organism/volvox.jpeg",
    type: "Algae",
    danger: "Non-pathogenic",
    habitat: "Freshwater",
  },
  {
    id: "lion",
    name: "penthera leo",
    description: "A colonial green alga that lives in freshwater environments.",
    image: "../imgs/organism/lion.jpeg",
    type: "animalia",
    danger: "pretetor",
    habitat: "savannah",
  },
  {
    id: "volvox",
    name: "Volvox",
    description: "A colonial green alga that lives in freshwater environments.",
    image: "../imgs/organism/volvox.jpeg",
    type: "Algae",
    danger: "Non-pathogenic",
    habitat: "Freshwater",
  },
  {
    id: "lion",
    name: "penthera leo",
    description: "A colonial green alga that lives in freshwater environments.",
    image: "../imgs/organism/lion.jpeg",
    type: "animalia",
    danger: "pretetor",
    habitat: "savannah",
  },
  {
    id: "lion",
    name: "penthera leo",
    description: "A colonial green alga that lives in freshwater environments.",
    image: "../imgs/organism/lion.jpeg",
    type: "animalia",
    danger: "pretetor",
    habitat: "savannah",
  },
  {
    id: "salmonella",
    name: "Salmonella enterica",
    description:
      "A Gram-negative bacterium associated with foodborne infections.",
    image: "../imgs/organism/salmonela.jpeg",
    type: "gram negativ",
    danger: "Pathogenic",
    habitat: "Intestinal tract",
  },
  {
    id: "volvox",
    name: "Volvox",
    description: "A colonial green alga that lives in freshwater environments.",
    image: "../imgs/organism/volvox.jpeg",
    type: "Algae",
    danger: "Non-pathogenic",
    habitat: "Freshwater",
  },

  {
    id: "volvox",
    name: "Volvox",
    description: "A colonial green alga that lives in freshwater environments.",
    image: "../imgs/organism/volvox.jpeg",
    type: "Algae",
    danger: "Non-pathogenic",
    habitat: "Freshwater",
  },
  {
    id: "volvox",
    name: "Volvox",
    description: "A colonial green alga that lives in freshwater environments.",
    image: "../imgs/organism/volvox.jpeg",
    type: "Algae",
    danger: "Non-pathogenic",
    habitat: "Freshwater",
  },
  {
    id: "volvox",
    name: "Volvox",
    description: "A colonial green alga that lives in freshwater environments.",
    image: "../imgs/organism/volvox.jpeg",
    type: "Algae",
    danger: "Non-pathogenic",
    habitat: "Freshwater",
  },
  {
    id: "volvox",
    name: "Volvox",
    description: "A colonial green alga that lives in freshwater environments.",
    image: "../imgs/organism/volvox.jpeg",
    type: "Algae",
    danger: "Non-pathogenic",
    habitat: "Freshwater",
  },
];
const container = document.querySelector(".container_2");

organisms.forEach((organism) => {
  container.innerHTML += `
    
        <a class="organism_card"
           href="../organism/organism.html?id=${organism.id}">

            <div class="i_1">

               
                 <img src="${organism.image}" alt="" />
               

                <div class="details">

                    <div>
                        <h2>${organism.name}</h2>
                        <p>${organism.description}</p>
                    </div>

                    <div class="organism_state">

                        <div class="type">
                            ${organism.type}
                        </div>

                        <div class="danger">
                            ${organism.danger}
                        </div>

                        <div class="habitate">
                            ${organism.habitat}
                        </div>

                    </div>

                </div>

            </div>

        </a>

    `;
});
