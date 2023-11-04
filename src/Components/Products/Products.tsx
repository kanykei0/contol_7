import HamCheese from '../../assets/HamCheese.webp';
import Carbonara from '../../assets/Carbonara.webp';
import Pepperoni from '../../assets/Pepperoni.webp';
import CheeseHoney from '../../assets/CheeseHoney.webp';
import VegaMashrooms from '../../assets/VeganMashrooms.webp';
import Pesto from '../../assets/Pesto.webp';

interface Product {
    name: string;
    image: string;
    price: number;
    description: string;
}

const PRODUCTS: Product[] = [
    {name: 'Ветчина и сыр', image: HamCheese, price: 445, description: 'Ветчина из цыпленка, увеличенная порция моцареллы, соус альфредо'},
    {name: 'Карбонара', image: Carbonara, price: 445, description: 'Ветчина из цыпленка, моцарелла, смесь сыров чеддер и пармезан, томаты, красный лук, чеснок сухой, итальянские травы, соус альфредо'},
    {name: 'Пепперони', image: Pepperoni, price: 445, description: 'Пепперони из цыпленка, увеличенная порция моцареллы, томатный соус'},
    {name: 'Четыре сыра с медом', image: CheeseHoney, price: 475, description: 'Моцарелла, смесь сыров чеддер и пармезан, сыр блю чиз, соус альфредо'},
    {name: 'Овощи и грибы', image: VegaMashrooms, price: 445, description: 'Моцарелла, кубики брынзы, томаты, маслины, шампиньоны, сладкий перец, красный лук, итальянские травы, томатный соус'},
    {name: 'Песто', image: Pesto, price: 475, description: 'Цыпленок, моцарелла, кубики брынзы, томаты, соус песто, соус альфредо'},
];

export default PRODUCTS;