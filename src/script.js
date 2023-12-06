import {addToCart} from "./modules/addToCart";
import {changeLink, changeSearch, changeViewsAll} from "./modules/changeGoods";
import {getData} from "./modules/getData";
import { getPriceCard } from "./modules/getPriceCard";
import { localstorageCheck } from "./modules/localstorageCheck";
import { modal } from "./modules/modal";
import { renderCart } from "./modules/renderCart";

modal()
getData('db/db.json').then(data => (data));
localstorageCheck()
changeLink()
changeSearch()
changeViewsAll()
getPriceCard()
