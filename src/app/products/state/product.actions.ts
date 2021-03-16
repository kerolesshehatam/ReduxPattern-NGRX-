import { createAction, props } from "@ngrx/store";
import { Product } from "../product";

export const toggleProductCode = createAction(
    '[Product] Toggle Product Code'
);

export const setCurrentProduct = createAction(
    '[Product] set Current Product',
    props<{ currentProductId: number }>()
);

export const initializeCurrentProduct = createAction(
    '[Product] initialize Current Product'
);

export const clearCurrentProduct = createAction(
    '[Product] clear Current Product'
);


export const loadProducts = createAction(
    '[Product] Load'
);

export const loadProductSuccess = createAction(
    '[Product] Load Success',
    props<{ products: Product[] }>()
);

export const loadProductFailure = createAction(
    '[Product] Load Fail',
    props<{ error: string }>()
);

export const updateProduct = createAction(
    '[Product] update',
    props<{ product: Product }>()
);

export const updateProductSuccess = createAction(
    '[Product] update Success',
    props<{ product: Product }>()
);

export const updateProductFailure = createAction(
    '[Product] update Fail',
    props<{ error: string }>()
);