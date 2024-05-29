import { View, Text, StyleSheet, VirtualizedList } from 'react-native'
import React from 'react'
import HeightSpacer from '../Reusable/HeightSpacer'
import { SIZES } from '../../constants/theme'
import Country from '../Tiles/Country/Country'

const Places = () => {
/*this countries JSON data will be replaced with that of national parks */
    const countries =  [
        {
         _id: "64c62bfc65af9f8c969a8d04",
         country: "Gonarezhou",
         description:
           "Gonarezhou National Park is Zimbabwe’s second largest park and lies in the South Eastern corner of Zimbabwe bordering Kruger National Park in South Africa and Limpopo National Park in Zimbabwe.It forms part of the Great Limpopo Trans-frontier Conservation Area and covers 5 000 kilometers. The park is home to all of the big 5: elephant, buffalo, rhino, lion and leopard and in addition to these hosts over 100 mammal species, 400 bird species and 50 fish species including Zambezi shark and small-tooth sawfish at the confluence of the Save and Runde; which also happens to be the lowest point in Zimbabwe at 162m above sea level.",
         imageUrl:
           "https://www.zimparks.org.zw/wp-content/uploads/2024/05/Hwange-copy-scaled.webp",
         region: "South East, Zimbabwe",
       },
       {
         _id: "64cf2c565d14628d0ac0a2b7",
         country: "Mana Pools",
         description:
           "Mana Pools is remote and remains one of the few real wilderness areas left in the world. The name “Mana” means “four” in Shona (the local language) and applies to the four pools; Green Pool, Chisasiko, Chine and Long Pool.  The latter is the largest of the four, stretching over six kilometers with a large permanent population hippos, crocodiles and drawing large herds of elephant and various aquatic birds. The park is home to the big four (lion, elephant, buffalo, leopard), painted dogs, various antelope and about 380 bird species. The alluvial soils in the floodplain area support mature riverine woodlands of natal mahogany, rain tree and apple ring acacia while the areas further from the Zambezi River are covered with mopane, thick jesse bush and towering baobab trees.  ",
         imageUrl:
           "https://www.zimparks.org.zw/wp-content/uploads/2024/05/Mana-Pools-copy-scaled.webp",
         region: "Mid Zambezi, Zimbabwe",
       },
       {
         _id: "64cf2c935d14628d0ac0a2b9",
         country: "Hwange",
         description:
           "The iconic Hwange National Parkis Zimbabwe’s largest national parklocated in the northwestern part of Zimbabwe. It covers 14,650 square kilometers. It is home to the largest population of elephants in Zimbabwe and Africa’s largest population of the endangered wild dog and one may find rare species such as roan and sable. In addition to four of the big 5: elephant, lion, leopard and buffalo; Hwange has 100 mammal species and nearly 400 bird species. The area is mostly covered with savanna grasslands and teak and mopane woodlands.",
         imageUrl:
           "https://www.zimparks.org.zw/wp-content/uploads/2024/05/HwangeOG-copy-scaled.webp",
         region: "Hwange, Zimbabwe",
       },
       {
         _id: "64cf2d095d14628d0ac0a2bd",
         country: "Nyanga",
         description:
           "Nyanga National Park lies in the north of Zimbabwe’s Eastern Highlands. In its centre is Mt. Nyangani, the highest point in Zimbabwe at 2,592m (8,504ft) and Mutarazi Falls (762m), Zimbabwe’s highest waterfall is in the south of the park. The terrain is characterized by green hills covered in dense pine and wattle forests, also including flat-top acacias and dwarf msasa trees. The cool valleys are home to species of proteas, everlastings and sprawling orchards filled with fresh fruit. In addition to an abundance of plant-life, the bird watching is prolific; with over 300 species including migratory birds that fly in between November and April. The perennial streams are stocked with rainbow trout, providing the finest fly fishing experience in Mare, Rhodes, Gulliver and Purdon lake. Udu is the only lake where bream fishing takes place. Nyanga is also home to zebra and several species of antelope, including the waterbuck, wildebeest, klipspringer, kudu and eland. The main predators include leopards, hyenas and the occasional lion from the Mozambican lowlands.",
         imageUrl:
           "https://www.zimparks.org.zw/wp-content/uploads/2024/05/Nyanga-Home-copy-scaled.webp",
         region: "Eastern Highlands, Zimbabwe",
       },
       {
         _id: "64cf2d4d5d14628d0ac0a2bf",
         country: "Victoria Falls",
         description:
           "Victoria Falls National Park is located in the northwestern part of Zimbabwe and is home to the world’s largest waterfall at a height of 108 meters (355 feet), stretching across 1,708 meters (5,604 feet). Due to its remarkable natural beauty and cultural significance, the Victoria Falls was added to the list of UNESCO World Heritage Sites in 1989 and is one of the seven natural wonders of the world. The park covers an area of about 23.4 square kilometers and has a dense rainforest which is watered by the spray from the Falls. The source of the mighty Falls is the Zambezi River that flows 2,700 kilometers through six countries on its journey from its source in north-western Zambia to the Indian Ocean. On the very odd occasion, one may spot a leopard but the area is mainly populated by baboons, warthogs and monkeys. The vegetation includes ferns, palms, liana vines and mahogany.  ",
         imageUrl:
           "https://www.zimparks.org.zw/wp-content/uploads/2024/01/Victoria-Falls.jpg",
         region: "Zambezi, Zimbabwe",
       },
   ]
  return (
    <View>
        <HeightSpacer height={20}/>

        <VirtualizedList
        
        data={countries}
        horizontal
        keyExtractor={(item) => item._id}
        showsHorizontalScrollIndicator={false}
        getItemCount={(data) => data.length}
        getItem={(data, index) => data[index]}
        renderItem={({item, index}) => (
            <View style={{marginRight:SIZES.medium}}>

               <Country item={item}/>
            </View>
        )}
        />
    </View>
  )
}

export default Places

const styles = StyleSheet.create({})