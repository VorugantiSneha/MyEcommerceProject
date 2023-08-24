package com.edubridge.onlinetoy.controller;

import com.edubridge.onlinetoy.dto.Purchase;
import com.edubridge.onlinetoy.dto.PurchaseResponse;
import com.edubridge.onlinetoy.service.CheckoutService;

import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {

    private CheckoutService checkoutService;

    public CheckoutController(CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }

    @PostMapping("/purchase")
    public PurchaseResponse placeOrder(@RequestBody Purchase purchase) {

        PurchaseResponse purchaseResponse = checkoutService.placeOrder(purchase);

        return purchaseResponse;
    }

}