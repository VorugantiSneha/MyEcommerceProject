package com.edubridge.onlinetoy.service;

import com.edubridge.onlinetoy.dto.Purchase;
import com.edubridge.onlinetoy.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}