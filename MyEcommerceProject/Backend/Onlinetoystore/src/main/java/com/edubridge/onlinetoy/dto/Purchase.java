package com.edubridge.onlinetoy.dto;

import lombok.Data;

import java.util.Set;

import com.edubridge.onlinetoy.entity.Address;
import com.edubridge.onlinetoy.entity.Customer;
import com.edubridge.onlinetoy.entity.Order;
import com.edubridge.onlinetoy.entity.OrderItem;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}