"use strict";

/* ստեղծում եք մեկ հատ Object 10 հատ property-ներով, 5 property-Ն պետք ա լինեն object, ու for in-ով անում եք այնպես, որ կոնսոլում տպվեն համ առաջին մակարդակի 
property-ները իրենց value-ներով, համ 2րդ մակարդակի (Օբյեկտի մեջի Օբյեկտների) */
const obj = {
    country: "Հայաստան",
    capCity: "Երևան",
    population: 3046100,
    pres: "Վահագն Խաչատրյան",
    callCode: "+374",

    states: {
        state1: "Գեղարքունիքի մարզ",
        state2: "Լոռու մարզ",
        state3: "Շիրակի մարզ",
        state4: "Արարատի մարզ",
        state5: "Սյունիքի մարզ",
        state6: "Տավուշի մարզ",
        state7: "Արմավիրի մարզ",
        state8: "Կոտայքի մարզ",
        state9: "Վայոց Ձորի մարզ",
        state10: "Արագածոտնի մարզ",
    },
    cities: {
        city1: "Գավառ",
        city2: "Վանաձոր",
        city3: "Գյումրի",
        city4: "Արտաշատ",
        city5: "Կապան",
        city6: "Իջևան",
        city7: "Արմավիր",
        city8: "Հրազդան",
        city9: "Եղեգնաձոր",
        city10: "Աշտարակ",
    },
    languages: {
        basic: "Armenian",
        firtsLang: "Russian",
        secondLang: "English",
    },
    neighbors: {
        west: "Թուրքիա",
        north: "Վրաստան",
        east: "Ադր",
        south: "Իրան"
    },
    ethnicGroups: {
        arm: "98% հայեր",
        yazid: "1.2% եզդիներ",
        russ: "0.4% ռուսներ",
        other: "0.3% այլ"
    }

};
for (let key in obj) {
    if (typeof (obj[key]) === "object") {
        for (let nkey in obj[key]) {
            console.log(`property ${key}, value ${obj[key][nkey]}`);
        }
    }
    console.log(`property: ${key}, value: ${obj[key]}`);

}

/*ստեղծում եք մեկ հատ Array, 10 հատ item-ներով, 5 item-ը պետք ա լինեն Array-ներ, ու for in-ով ու for of-ով անում եք այնպես, որ 
կոնսոլում տպվեն համ առաջին մակարդակի item-ները համ 2րդ մակարդակի (Զանգվածի մեջ զանգված) */
const myArray = [15, 30, [25, 65],
    [56, 102], 36, [80, 90],
    [33.5, 87], 110, 520, [115, 300]
];
for (let index in myArray) {
    console.log(myArray[index]); // եթե գրենք console.log(index) ; կստանանք ինդեքսները
}
for (let item of myArray) {
    console.log(item);
}

/* ստեղծում եք առանձին Object ու Array, որոնց մեջ ստեղծում եք function-ներ, ու փորձում եք ստանալ destructuring անելով, այսինքն առանց կետի կանչելով,
 ուղղակի գրեք ֆունկցիայի անունը ու կանչեք */
 
 //... array....
const arr = [25, function someFunction(a, b) {
    console.log(Math.pow(a, b));
}, 18, 36];
const [item1, item2] = arr;
item2(10, 2); // 100

//... object...
const shop = {
    name: "Lina",
    address: "Արտաշիսյան 59",
    tel: "+374 96 99 99 99",
    open: true, 
    forSale:{
        shoes: "Կոշիկներ",
        shirt:"Վերնաշապիկներ",
        trousers: "Տաբատներ",
        forKids: "Մանկական հագուստ"
    },
    myShop(){
        const {open} = shop;
        if(open === true){
            console.log(shop);
        } else {
            console.log("Մեր խանութը փակ է!!!");
        }
    }
};
const {myShop} = shop;
myShop();
 




