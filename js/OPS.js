var headtext = document.getElementById("HeadText");
var inText = document.getElementById("inText")
const links = document.querySelectorAll('#navBar a');
var element = document.getElementById("panel");
var IMGelement = document.getElementById("image");
var EIelement = document.getElementById("ExtraInfo");
var Helement = document.getElementById("smallH");
var btn = document.getElementById("btn");


links[0].addEventListener('click', function() {
    element.style.display = "none";
    headtext.textContent = "Impacts of Bushfires"
    Helement.textContent = "Impacts of Bushfires"
    inText.textContent = "Here we are considering the adverse effects of high intensity wildfires on the community and the environment. It should be remembered that it is not just intensity of a bushfire that matters. The extent of a bushfire is also very important. A large bushfire can cause multiple direct impacts: on life and property, on the survival of fauna populations, on water resources, and indirectly on government budgets and insurance costs. A large bushfire will also generate huge amounts of smoke."
    IMGelement.src = 'assets/impact_tem.png';
    btn.textContent = "more info on statical impacts";
    btn.href = "https://www.architecture.com.au/wp-content/uploads/Development-in-Australian-bushfire-prone-areas-Australian-Institute-of-Architects.pdf";
    EIelement.textContent = "The changing weather patterns resulting from climate change have led to a significant increase in the Fire Danger Index (FDI) across Australia, particularly accelerating since the late 1990s, as indicated by studies (The Climate Institute, 2016). Projections suggest that by 2050, in comparison to the weather conditions between 1980 and 1999, the number of extreme fire weather days is expected to increase by 10 to 50 percent with low greenhouse gas emissions growth, and by 100 to 300 percent if a higher greenhouse gas emission scenario persists (The Climate Institute, 2016). This indicates a growing risk of bushfires due to climate change.";
});
links[1].addEventListener('click', function() {
    element.style.display = "none";
    headtext.textContent = "Community Impacts"
    Helement.textContent = "Community Impacts"
    inText.textContent = "Australia's bushfire disasters carry substantial economic, social, and environmental burdens. Prominent incidents like the 2003 Canberra fire and the 2009 Victorian bushfires led to significant financial losses, loss of life, and trauma. Furthermore, these events had enduring effects on communities, including long-term impacts, increased insurance premiums, and the strain on public infrastructure."
    IMGelement.src = 'assets/impactHealth.jpg';
    btn.textContent = "more info on health tips";
    btn.href = "https://nceph.anu.edu.au/phxchange/communicating-science/how-protect-yourself-and-others-bushfire-smoke";
    EIelement.textContent = "Bushfire smoke is composed of various substances, including ash, visible particles, and gases. Particularly concerning are the tiny, invisible particles (PM2.5) that can deeply penetrate the lungs when inhaled. While most people away from the firefront recover quickly, some may experience symptoms like eye irritation, a runny nose, sore throat, or respiratory issues. Prolonged exposure, spanning weeks or months, can elevate the risk of lung disease, and bushfire smoke can also lead to anxiety and distress.";
});
links[2].addEventListener('click', function() {
    element.style.display = "none";
    headtext.textContent = "Firefighters"
    Helement.textContent = "Firefighters"
    inText.textContent = "Firefighting is inherently a dangerous business, especially when confronted with a fire like that shown below. While good training can minimise the risks, under “blow up” conditions like that in Victoria in February 2009, even experienced firefighters are at very high risk. We should not forget that most people fighting rural fires are volunteers, who take on these tasks out of a sense of community spirit. Why should we expose them to the huge risks entailed in fighting fires in heavy fuels. Don’t we owe it to them to make their job as safe as we can? Fuel reduction burning is the only practical way to do that."
    IMGelement.src = 'assets/firefighter.jpg';
    btn.textContent = "more info on Volunteer Firefighters";
    btn.href = "https://www.nytimes.com/2020/02/02/world/australia/volunteer-firefighters.html";
    EIelement.textContent = "Australian volunteer bushfire firefighters play a vital role in managing and responding to bushfires, which are a frequent and significant natural disaster in Australia. These dedicated individuals are an integral part of the country's firefighting efforts, working alongside professional firefighters and emergency services to protect lives, property, and the environment.";
});
links[3].addEventListener('click', function() {
    element.style.display = "none";
    headtext.textContent = "Impacts on Forests"
    Helement.textContent = "Impacts on Forests"
    inText.textContent = "Certain forest types, such as ash-type eucalypt forests, can be killed by high-intensity fires, but the forest cover is generally not entirely removed. However, these fires can result in the death of a large number of trees, causing damage to the forest environment and affecting biodiversity. Eucalypts have specialized features that allow for recovery from intense fires, but surviving trees are often damaged in various ways, including cambium death, insect infestation, and rot. Pine and blue gum plantations, critical for timber supplies, are also vulnerable to high-intensity fires, with the potential to disrupt future timber supplies and impact local employment."
    IMGelement.src = 'assets/plants.jpg';
    btn.textContent = "more info on impact on Australian plants";
    btn.href = "https://www.csiro.au/en/news/all/articles/2020/january/bushfire-impact-on-australian-plants";
    EIelement.textContent = "In Australia, where wildfires, also known as bushfires, are a recurrent and natural part of the ecosystem, many plant species have evolved various strategies to adapt and cope with fire. These strategies have developed over time as an essential part of the Australian flora's life cycle and survival mechanisms.";
});
links[4].addEventListener('click', function() {
    element.style.display = "none";
    headtext.textContent = "Wildlife"
    Helement.textContent = "Wildlife"
    inText.textContent = "Intense bushfires result in the death of numerous native animals and insects, either through incineration or smoke suffocation, particularly those unable to escape the flames. These fires also incinerate microsites that remain unburned during low-intensity burns, eliminating refugial areas for fire-sensitive flora and fauna, hindering post-fire recolonization. Mild fuel reduction burns, with the objective of burning only around 70% of an area, create a patchwork of unburned areas where insects, animals, and plants find refuge, promoting recolonization and seed dispersion. Severe bushfires, in contrast, lead to significant and widespread fauna losses, including the risk of endangering rare species. Even larger native fauna can be overwhelmed by wildfires at times. Additionally, the impact extends to aquatic fauna in catchments affected by extensive bushfires, as demonstrated in a study by Batini and Barrett."
    IMGelement.src = 'assets/carrot.jpg';
    btn.textContent = "more info on helping wild animals";
    btn.href = "https://www.dailymail.co.uk/news/article-7877213/Food-supply-thousands-animals-trapped-Mallacoota-flown-planes-help-wombats-koalas.html";
    EIelement.textContent = "The New South Wales government has initiated 'Operation Rock Wallaby' to aid the state's marsupial population. Food drops involving thousands of kilograms of carrots and sweet potatoes have been conducted from aircraft to support colonies of brush-tailed rock wallabies. These animals, already under stress due to drought, face food scarcity following the fires. The initiative, which delivered over 2,200kg of fresh vegetables, aims to help these creatures recover. The World Wildlife Fund estimates that around 1.25 billion animals, including koalas, kangaroos, and wallabies, have been lost due to the fires.";
});
links[5].addEventListener('click', function() {
    element.style.display = "none";
    headtext.textContent = "Impacts on Water Catchments"
    Helement.textContent = "Impacts on Water Catchments"
    inText.textContent = "High-intensity wildfires have severe adverse effects on water supply catchments. These fires result in increased runoff after rain due to the absence of tree and understorey foliage to intercept water. However, this increased runoff comes with significant downsides, including soil erosion and the transport of silt and ash into water storage facilities, which negatively impact water quality and can even lead to the removal of dams from the supply system. High-intensity fires can also deposit large quantities of silt and ash into streams and water reservoirs, impair aquatic diversity, and damage vital monitoring stations. These fires can lead to the death of millions of trees and significant forest degradation. In contrast, controlled fuel reduction burns have been shown to have a more positive impact on stream flow and water quality, excluding high-intensity wildfires from water catchment areas to safeguard metropolitan water supplies."
    IMGelement.src = 'assets/WCM.jpg';
    btn.textContent = "more info on Water Catchments";
    btn.href = "https://www.marine.nsw.gov.au/knowledge-centre/newsroom/news/pre-2023/responding-to-the-impacts-of-recent-storms-on-bushfire-affected-catchments";
    EIelement.textContent = "A more visualised way of presenting how bushfires can impact water quality.";
});

$(document).ready(function(){
    $("#CT").click(function(){
      IMGelement.style.display = "block";
      EIelement.style.display = "block";
      $("#panel").slideDown("slow");
    });
  });

