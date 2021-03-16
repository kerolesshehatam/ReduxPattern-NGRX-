import { Product } from "../product";
import * as AppState from '../../state/app.state'

export interface State extends AppState.State {
    products: ProductState;
}

export interface ProductState {
    showProductCode: boolean,
    currentProductId: number | null,
    products: Product[]
    error:string
}

export const initialState: ProductState = {
    showProductCode: true,
    currentProductId: null,
    products: [],
    error:''
}