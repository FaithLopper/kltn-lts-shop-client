import { put, select, takeLatest } from 'redux-saga/effects';
import { addProduct, updateCart, updateLocalCart } from '@store/actions/cart';
import { appCart, appUserCarts } from '@constants';
import { getData, setData } from '@utils/localStorage';
import { showAppCartModal } from '@store/actions/app';
import { compare2Obj } from '@utils';

const getCart = (state) => state.cart;
const getAccount = (state) => state.account;

function* _updateLocalCart({ userId = null }) {
    const cart = yield select(getCart);
    const account = yield select(getAccount);
    //set current cart
    setData(appCart, cart.currentCart);

    //set user cart
    let currentUserId = null;
    account.profile ? (currentUserId = account.profile.id) : (currentUserId = userId);
    if (currentUserId) {
        let usersCartData = getData(appUserCarts) || [];
        let foundedCart = usersCartData.findIndex((userCart) => userCart.userId === currentUserId);
        if (foundedCart >= 0) usersCartData[foundedCart].cart = JSON.parse(JSON.stringify(cart.currentCart));
        else usersCartData.push({ userId: currentUserId, cart: JSON.parse(JSON.stringify(cart.currentCart)) });
        setData(appUserCarts, usersCartData);
    }
}

function* _addProduct({ payload: { product, quantity, price, image, onCompleted, onError } }) {
    const cart = yield select(getCart);
    try {
        let updatedCart = JSON.parse(JSON.stringify(cart.currentCart));
        let foundedProduct = updatedCart.findIndex((productInCart) => compare2Obj(productInCart.product, product));

        if (foundedProduct >= 0) {
            updatedCart[foundedProduct].quantity += quantity;
        } else updatedCart.push(JSON.parse(JSON.stringify({ product, quantity, price, image })));

        yield put({
            type: addProduct.success.type,
            updatedCart,
        });
        yield put({
            type: updateLocalCart.type,
        });
        yield put({
            type: showAppCartModal.type,
            product: { ...product },
            quantity,
            price,
            image,
        });
        onCompleted();
    } catch (error) {
        onError(error);
    }
}

function* _updateCart({ payload: { type = '', updateData = {} } }) {
    const { userId } = updateData;
    const cart = yield select(getCart);
    try {
        let updatedCart = JSON.parse(JSON.stringify(cart.currentCart));
        switch (type) {
                        case 'UPDATE_QUANTITY':
                            {
                                updatedCart[updateData.indexInCart].quantity = updateData.newQuantity;
                                //set to local
                            }
                            break;
                        case 'UPDATE_CONFIG':
                            // do thís later
                            break;
                        case 'REMOVE_ITEM':
                            {
                                updatedCart.splice(parseInt(updateData.indexInCart), 1);
                                //set to local
                            }
                            break;
                        case 'EMPTY_CART':
                            {
                                updatedCart = [];
                            }
                            break;
                        case 'GET_USER_CART':
                            {
                                if (userId) {
                                    let usersCartData = getData(appUserCarts) || [];
                                    const { cart: foundedCart } = usersCartData.find((cart) => (cart.userId = userId));
                                    if (foundedCart && foundedCart.length) {
                                        for (let x = 0; x < updatedCart.length; x++) {
                                            for (let y = 0; y < foundedCart.length; y++) {
                                                if (compare2Obj(updatedCart[x].product, foundedCart[y].product)) {
                                                    updatedCart[x].quantity += foundedCart[y].quantity;
                                                    foundedCart.splice(y, 1);
                                                    break;
                                                }
                                            }
                                        }
                                        updatedCart.push(...foundedCart);
                                    }
                                }
                            }
                            break;
                        default:
                            console.log('not found update type');
        }
        yield put({
            type: updateCart.success.type,
            updatedCart,
        });
        yield put({
            type: updateLocalCart.type,
            userId,
        });
    } catch (error) {
        console.log(error);
    }
}

const sagas = [
    takeLatest(addProduct.type, _addProduct),
    takeLatest(updateCart.type, _updateCart),
    takeLatest(updateLocalCart.type, _updateLocalCart),
];

export default sagas;
