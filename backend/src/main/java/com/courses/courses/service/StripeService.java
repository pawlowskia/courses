package com.courses.courses.service;
// src/main/java/com/courses/courses/service/StripeService.java

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class StripeService {

    @Value("${stripe.secretKey}")
    private String secretKey;

    public String createCheckoutSession(String courseId, String userId) throws StripeException {
        Stripe.apiKey = secretKey;

        Map<String, Object> params = new HashMap<>();
        params.put("payment_method_types", List.of("card"));
        params.put("line_items", List.of(
                Map.of(
                        "price_data", Map.of(
                                "currency", "usd",
                                "product_data", Map.of(
                                        "name", "Course Name",
                                        "description", "Course Description"
                                ),
                                "unit_amount", 2000
                        ),
                        "quantity", 1
                )
        ));
        params.put("mode", "payment");
        params.put("success_url", "http://localhost:3000/success");
        params.put("cancel_url", "http://localhost:3000/cancel");

        Session session = Session.create(params);

        return session.getId();
    }
}
