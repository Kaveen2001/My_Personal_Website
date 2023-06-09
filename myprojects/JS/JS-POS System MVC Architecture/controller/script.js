/** Save Customer */
$('#btnSaveCustomer').click(function () {
    let cusId = $("#txtCustomerId").val();
    let cusName = $("#txtCustomerName").val();
    let cusAddress = $("#txtCustomerAddress").val();
    let cusMobileNo = $("#txtCustomerMobileNo").val();

    var cusObject = {
        id:cusId,
        name:cusName,
        address:cusAddress,
        mobileNo:cusMobileNo
    }

    customerArray.push(cusObject);
    loadAllCustomers();
    bindRowClickEvents();
    loadAllCustomersForOption();

    Swal.fire({
        position: 'top',
        icon: 'success',
        text:'Saved Customer Successfully...!',
        title: 'Succsess',
        showConfirmButton: false,
        timer: 1500
    })
});

function doubleClickEvent() {
    $('#cusTable>tr').on('dblclick', function () {
        $(this).remove();
    })
}

function loadAllCustomers() {
    $('#cusTable').empty();
    for (var customer of customerArray) {
        let row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.mobileNo}</td></tr>`;
        $("#cusTable").append(row);
    }
}

function bindRowClickEvents() {
    $('#cusTable>tr').click(function () {
        let cusId = $(this).children().eq(0).text();
        let cusName = $(this).children().eq(1).text();
        let cusAddress = $(this).children().eq(2).text();
        let cusMobileNo = $(this).children().eq(3).text();

        $("#txtCustomerId").val(cusId);
        $("#txtCustomerName").val(cusName);
        $("#txtCustomerAddress").val(cusAddress);
        $("#txtCustomerMobileNo").val(cusMobileNo);
    });
}

/** Search Customer */
$('#txtCustomerId').on('keyup',function (event) {
    if (event.code == 'Enter') {
        let typedId = $('#txtCustomerId').val();
        let customer = searchCustomer(typedId);
        if (customer != null) {
            setTextFieldValues(customer.id,customer.name,customer.address,customer.mobileNo);
        }else {
            alert("There is no customer available for that "+typedId);
            setTextFieldValues("","","","");
        }
    }
});

function setTextFieldValues(id,name,address,mobileNo) {
    $('#txtCustomerId').val(id);
    $('#txtCustomerName').val(name);
    $('#txtCustomerAddress').val(address);
    $('#txtCustomerMobileNo').val(mobileNo);
}

function searchCustomer(cusId) {
    for (let customer of customerArray) {
        if (customer.id == cusId) {
            return customer;
        }
    }
    return null;
}

/** Update Customer */
$('#btnUpdateCustomer').click(function () {
    let cusId = $('#txtCustomerId').val();
    let response = updateCustomer(cusId);
    if (response) {
        alert("Customer Updated Successfully..!");
        setTextFieldValues("","","","");
    }else {
        alert("Customer Updated Failed..!");
    }
});

function updateCustomer(cusId) {
    let customer = searchCustomer(cusId);
    if (customer != null) {
        customer.id = $('#txtCustomerId').val();
        customer.name = $('#txtCustomerName').val();
        customer.address = $('#txtCustomerAddress').val();
        customer.mobileNo = $('#txtCustomerMobileNo').val();
        loadAllCustomers();
        return true;
    }else {
        return false;
    }
}

/** Delete Customer */
$('#btnDeleteCustomer').click(function () {
    let deleteId = $('#txtCustomerId').val();
    let option = confirm("Do you really want to delete this customer ? "+deleteId);
    if (option) {
        if (deleteCustomer(deleteId)) {
            alert("Customer Successfully Deleted..!");
            setTextFieldValues("","","","");
            bindRowClickEvents();
        }else {
            alert("No such customer to delete. Please check the Customer ID.");
        }
    }
});

function deleteCustomer(cusId) {
    let customer = searchCustomer(cusId);
    if (customer != null) {
        let indexNumber = customerArray.indexOf(customer);
        customerArray.splice(indexNumber,1);
        loadAllCustomers();
        return true;
    }else {
        return false;
    }
}

/*
$('#cusTable>tr').on('dblclick', function () {
    $(this).remove();
});*/

/*
function loadAllCustomersForOption() {
    $('#cmbCustomerIDS').empty();
    for (let cusElement of customerArray) {
        $('#cmbCustomerIDS').append("<option>${customerArray.id}</option>");
    }
}*/


import {Customer} from "controller/CustomerController";

export class CustomerController {
    constructor() {
        $("#btnSaveCustomer").click(this.handleSaveCustomerValidation.bind(this));
        $("#btnUpdateCustomer").click(this.handleUpdateCustomer.bind(this));
        $("#btnDeleteCustomer").click(this.handleDeleteCustomer.bind(this));
        this.handleSaveCustomer().bind(this);
        this.handleLoadCustomers();
    }

    handleSaveCustomer(){
        console.log("Handle Save Customer..!");
    }

    handleUpdateCustomer(){
        console.log("Handle Update Customer..!");
    }

    handleDeleteCustomer(){
        console.log("Handle Delete Customer..!");
    }
}

new CustomerController();

handleLoadCustomers() {
    var cusId = $('#txtCustomerId').val();
    var cusName = $('#txtCustomerName').val();
    var cusAddress = $('#txtCustomerAddress').val();
    var cusMobileNo = $('#txtCustomerMobileNo').val();

    const regexNumber = /^\d+$/;
    if (!regexNumber.test(cusId)) {
        alert("Incorrect ID");
    }

    let pre_data = localStorage.getItem(data);
    let cus_arr = [];

    if (pre_data) {
        data_arr = JSON.parse(pre_data);
    }

    let new_customer = new Customer {
        cusId;
    }
}

handleSaveCustomerValidation() {
    var cusId = $('#txtCustomerId').val();
    var cusName = $('#txtCustomerName').val();
    var cusAddress = $('#txtCustomerAddress').val();
    var cusMobileNo = $('#txtCustomerMobileNo').val();

    const regexNumber = /^\d+$/;
    if (!regexNumber.test(cusId)) {
        alert("Invalid Customer ID");
    } else if (!cusName) {
        alert("Invalid Customer Name");
    }
    } else if (!cusName) {
        alert("Invalid Customer Name");
    }
}
