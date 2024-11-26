import React from "react";
import { useState } from "react";
import { ValidateSpecialCharacters, StringContainsNumber } from "../Validators/Validators";
import { useSelector } from "react-redux";




export const CheckoutValidator = () => {
    let [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        shippingAddress:'',
        shippingCity: 'xlccxclkx',
        shippingState :'',
        shippingZip: '',
        shippingCountry: '',
        saveShippingDetails: false,
        billingAddress: '',
        billingCity: '',
        billingState: '',
        billingZip: '',
        billingCountry: '',
        saveBillingDetails: false,
        hasError: false,
        isTouched: false,
        hasError1: false,
        isTouched1: false,
        hasError2: false,
        isTouched2: false,
        hasError3: false,
        isTouched3: false,
        hasError4: false,
        isTouched4: false,
        hasError5: false,
        isTouched5: false,
        hasError6: false,
        isTouched6: false,
        hasError7: false,
        isTouched7: false,
        hasError8: false,
        isTouched8: false,
        hasError9: false,
        isTouched9: false,
        hasError10: false,
        isTouched10: false,
        hasError11: false,
        isTouched11: false,
        hasError12: false,
        isTouched12: false,

    });

    const ShippingAddressHandler = (e) => {
        const shippingAddress = e.target.value;
        let hasError = false
        let isTouched = false;

        if (shippingAddress.length > 50) {
            hasError = true;
            isTouched = true;

        }
        else {
            hasError = false;
            isTouched = true;
        }

        setFormData(currentValue => ({
            ...currentValue,
            shippingAddress: e.target.value,
            hasError,
            isTouched
        }))
    }


    
    const ShippingCityHandler = (e) => {
        const shippingCity = e.target.value;
        let hasError1 = false
        let isTouched1 = false;

        if (StringContainsNumber(shippingCity) || ValidateSpecialCharacters(shippingCity)) {
            hasError1 = true;
            isTouched1 = true;

        }
        else if(shippingCity.length > 50){
            hasError1 = true;
            isTouched1 = true;
        }
        else {
            hasError1 = false;
            isTouched1 = true;
        }

        setFormData(currentValue => ({
            ...currentValue,
            shippingCity: e.target.value,
            hasError1,
            isTouched1
        }))
    }




    const ShippingZipHandler = (e) => {
        const shippingZip = e.target.value;
        let hasError2 = false
        let isTouched2 = false;

        if (!Number.isFinite(Number(shippingZip)) || !StringContainsNumber(shippingZip) | ValidateSpecialCharacters(shippingZip)) {
            hasError2 = true;
            isTouched2 = true;
        } 
        else if(shippingZip.length > 50){
            hasError2 = true;
            isTouched2 = true;
        }
        else {
            hasError2 = false;
            isTouched2 = true;
        }

        setFormData(currentValue => ({
            ...currentValue,
            shippingZip: e.target.value,
            hasError2,
            isTouched2
        }))
    }



    const ShippingCountryHandler = (e) => {
        const shippingCountry = e.target.value;
        let hasError3 = false
        let isTouched3 = false;

        if (StringContainsNumber(shippingCountry) | ValidateSpecialCharacters(shippingCountry)) {
            hasError3 = true;
            isTouched3 = true;

        }
        else if(shippingCountry.length > 50){
            hasError3 = true;
            isTouched3 = true;
        }
        else {
            hasError3 = false;
            isTouched3 = true;
        }

        setFormData(currentValue => ({
            ...currentValue,
            shippingCountry: e.target.value,
            hasError3,
            isTouched3
        }))
    }


    const ShippingStateHandler = (e) => {
        const shippingState = e.target.value;
        let hasError4 = false
        let isTouched4 = false;

        if (StringContainsNumber(shippingState) | ValidateSpecialCharacters(shippingState)) {
            hasError4 = true;
            isTouched4 = true;

        }
        else if(shippingState.length > 50){
            hasError4 = true;
            isTouched4 = true;
        }
        else {
            hasError4 = false;
            isTouched4 = true;
        }

        setFormData(currentValue => ({
            ...currentValue,
            shippingState: e.target.value,
            hasError4,
            isTouched4
        }))
    }


    const BillingAddressHandler = (e) => {
        const billingAddress = e.target.value;
        let hasError5 = false
        let isTouched5 = false;

        if (billingAddress.length > 50) {
            hasError5 = true;
            isTouched5 = true;

        }
        else {
            hasError5 = false;
            isTouched5 = true;
        }

        setFormData(currentValue => ({
            ...currentValue,
            billingAddress: e.target.value,
            hasError5,
            isTouched5
        }))
    }


    
    const BillingCityHandler = (e) => {
        const billingCity = e.target.value;
        let hasError6 = false
        let isTouched6 = false;

        if (StringContainsNumber(billingCity) | ValidateSpecialCharacters(billingCity)) {
            hasError6 = true;
            isTouched6 = true;

        }
        else if(billingCity.length > 50){
            hasError6 = true;
            isTouched6 = true;
        }
        else {
            hasError6 = false;
            isTouched6 = true;
        }

        setFormData(currentValue => ({
            ...currentValue,
            billingCity: e.target.value,
            hasError6,
            isTouched6
        }))
    }




    const BillingZipHandler = (e) => {
        const billingZip = e.target.value;
        let hasError7 = false
        let isTouched7 = false;

        if (!Number.isFinite(Number(billingZip))) {
            hasError7 = true;
            isTouched7 = true;
        }
        else if(billingZip.length > 50){
            hasError7 = true;
            isTouched7 = true;
        }
        else {
            hasError7 = false;
            isTouched7 = true;
        }

        setFormData(currentValue => ({
            ...currentValue,
            billingZip: e.target.value,
            hasError7,
            isTouched7
        }))
    }



    const BillingCountryHandler = (e) => {
        const billingCountry = e.target.value;
        let hasError8 = false
        let isTouched8  = false;

        if (StringContainsNumber(billingCountry) | ValidateSpecialCharacters(billingCountry)) {
            hasError8 = true;
            isTouched8 = true;

        }
        else if(billingCountry.length > 50){
            hasError8 = true;
            isTouched8 = true;
        }
        else {
            hasError8 = false;
            isTouched8 = true;
        }

        setFormData(currentValue => ({
            ...currentValue,
            billingCountry: e.target.value,
            hasError8,
            isTouched8
        }))
    }


    const BillingStateHandler = (e) => {
        const billingState = e.target.value;
        let hasError9 = false
        let isTouched9 = false;

        if (StringContainsNumber(billingState) | ValidateSpecialCharacters(billingState)) {
            hasError9 = true;
            isTouched9 = true;
        }
        else if(billingState.length > 50){
            hasError9 = true;
            isTouched9 = true;
        }
        else {
            hasError9 = false;
            isTouched9 = true;
        }

        setFormData(currentValue => ({
            ...currentValue,
            billingState: e.target.value,
            hasError9,
            isTouched9
        }))
    }



    return { formData, setFormData, ShippingAddressHandler,ShippingCityHandler,ShippingCountryHandler,ShippingStateHandler,ShippingZipHandler,
           BillingAddressHandler,BillingCityHandler,BillingCountryHandler,BillingStateHandler,BillingZipHandler }
}


