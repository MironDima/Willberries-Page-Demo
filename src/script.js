import {changeLink, changeSearch, changeViewsAll} from "./modules/changeGoods";
import {getData} from "./modules/getData";
import { localstorageCheck } from "./modules/localstorageCheck";
import { modal } from "./modules/modal";
import { viewAll } from "./modules/viewAll";


modal()
getData('db/db.json').then(data => (data));
localstorageCheck()
changeLink()
changeSearch()
changeViewsAll()
