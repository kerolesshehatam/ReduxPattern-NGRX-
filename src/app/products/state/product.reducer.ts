import { on, createReducer } from "@ngrx/store";
import * as ProductActions from './product.actions';
import { initialState, ProductState } from "./product.models";



export const productReducer = createReducer<ProductState>(
    initialState,
    on(ProductActions.toggleProductCode, (state): ProductState => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        };
    }),
    on(ProductActions.setCurrentProduct, (state, action): ProductState => {
        return {
            ...state,
            currentProductId: action.currentProductId
        };
    }),
    on(ProductActions.initializeCurrentProduct, (state) => {
        return {
            ...state,
            currentProductId: 0
        }
    }),
    on(ProductActions.loadProductSuccess, (state, actions): ProductState => {
        return {
            ...state,
            products: actions.products,
            error: ''
        }
    }),
    on(ProductActions.loadProductFailure, (state, actions): ProductState => {
        return {
            ...state,
            products: [],
            error: actions.error
        }
    }),
    on(ProductActions.updateProductSuccess, (state, actions): ProductState => {
        const updatedProducts = state.products.map(item => actions.product.id == item.id ? actions.product : item);
        return {
            ...state,
            products: updatedProducts,
            currentProductId: actions.product.id,
            error: ''
        }
    }),
    on(ProductActions.updateProductFailure, (state, actions): ProductState => {
        return {
            ...state,
            products: [],
            error: actions.error
        }
    })
)