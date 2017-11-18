if(typeof ShoveEIMS3 == "undefined") ShoveEIMS3={};
if(typeof ShoveEIMS3.Ajax == "undefined") ShoveEIMS3.Ajax={};
if(typeof ShoveEIMS3.Ajax.Ajax_class == "undefined") ShoveEIMS3.Ajax.Ajax_class={};
ShoveEIMS3.Ajax.Ajax_class = function() {};
Object.extend(ShoveEIMS3.Ajax.Ajax_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	EIMS3_GetDataTable: function(tbname, columns, condition, order, startindex, endindex) {
		return this.invoke("EIMS3_GetDataTable", {"tbname":tbname, "columns":columns, "condition":condition, "order":order, "startindex":startindex, "endindex":endindex}, this.EIMS3_GetDataTable.getArguments().slice(6));
	},
	EIMS3_DataUpdate: function(tbname, columns, values, condition) {
		return this.invoke("EIMS3_DataUpdate", {"tbname":tbname, "columns":columns, "values":values, "condition":condition}, this.EIMS3_DataUpdate.getArguments().slice(4));
	},
	EIMS3_GetCheckCode: function(type, charSet, key) {
		return this.invoke("EIMS3_GetCheckCode", {"type":type, "charSet":charSet, "key":key}, this.EIMS3_GetCheckCode.getArguments().slice(3));
	},
	GetCheckUserIP: function(IsVoteIPs, VoteBack, ProductId, VoteIPDates) {
		return this.invoke("GetCheckUserIP", {"IsVoteIPs":IsVoteIPs, "VoteBack":VoteBack, "ProductId":ProductId, "VoteIPDates":VoteIPDates}, this.GetCheckUserIP.getArguments().slice(4));
	},
	CheckUserExist: function(userName) {
		return this.invoke("CheckUserExist", {"userName":userName}, this.CheckUserExist.getArguments().slice(1));
	},
	CheckHtmls: function(urls) {
		return this.invoke("CheckHtmls", {"urls":urls}, this.CheckHtmls.getArguments().slice(1));
	},
	UpdateUserMobile: function(Mobile, Code) {
		return this.invoke("UpdateUserMobile", {"Mobile":Mobile, "Code":Code}, this.UpdateUserMobile.getArguments().slice(2));
	},
	GetMobileCode: function(Message, Mobile) {
		return this.invoke("GetMobileCode", {"Message":Message, "Mobile":Mobile}, this.GetMobileCode.getArguments().slice(2));
	},
	SendEmail: function(Email, Hour, PageName, Subject, Content) {
		return this.invoke("SendEmail", {"Email":Email, "Hour":Hour, "PageName":PageName, "Subject":Subject, "Content":Content}, this.SendEmail.getArguments().slice(5));
	},
	DelUserBank: function(bankId) {
		return this.invoke("DelUserBank", {"bankId":bankId}, this.DelUserBank.getArguments().slice(1));
	},
	UserLogout: function() {
		return this.invoke("UserLogout", {}, this.UserLogout.getArguments().slice(0));
	},
	AddFavorites: function(ProductId, Content) {
		return this.invoke("AddFavorites", {"ProductId":ProductId, "Content":Content}, this.AddFavorites.getArguments().slice(2));
	},
	DeleteFavorites: function(Id) {
		return this.invoke("DeleteFavorites", {"Id":Id}, this.DeleteFavorites.getArguments().slice(1));
	},
	UpdateOrder: function(orderId, state) {
		return this.invoke("UpdateOrder", {"orderId":orderId, "state":state}, this.UpdateOrder.getArguments().slice(2));
	},
	GetProductsStore: function(productIds) {
		return this.invoke("GetProductsStore", {"productIds":productIds}, this.GetProductsStore.getArguments().slice(1));
	},
	GetProductInfo: function(pId, quantity) {
		return this.invoke("GetProductInfo", {"pId":pId, "quantity":quantity}, this.GetProductInfo.getArguments().slice(2));
	},
	GetCarriageWay: function() {
		return this.invoke("GetCarriageWay", {}, this.GetCarriageWay.getArguments().slice(0));
	},
	GetDeliveryAddress: function() {
		return this.invoke("GetDeliveryAddress", {}, this.GetDeliveryAddress.getArguments().slice(0));
	},
	SetDefaultDeliveryAddress: function(Id) {
		return this.invoke("SetDefaultDeliveryAddress", {"Id":Id}, this.SetDefaultDeliveryAddress.getArguments().slice(1));
	},
	EditDeliveryAddress: function(id, contacter, telephone, mobile, postCode, address, countryId, provinceId, cityId, areaId, isDefault, companyName, lastName, callTitle, email, foreignProvinceId, foreignCityName, foreignAreaName, extend1) {
		return this.invoke("EditDeliveryAddress", {"id":id, "contacter":contacter, "telephone":telephone, "mobile":mobile, "postCode":postCode, "address":address, "countryId":countryId, "provinceId":provinceId, "cityId":cityId, "areaId":areaId, "isDefault":isDefault, "companyName":companyName, "lastName":lastName, "callTitle":callTitle, "email":email, "foreignProvinceId":foreignProvinceId, "foreignCityName":foreignCityName, "foreignAreaName":foreignAreaName, "extend1":extend1}, this.EditDeliveryAddress.getArguments().slice(19));
	},
	DeleteDeliveryAddress: function(Id) {
		return this.invoke("DeleteDeliveryAddress", {"Id":Id}, this.DeleteDeliveryAddress.getArguments().slice(1));
	},
	GetDepartmentsTypes: function(parentId) {
		return this.invoke("GetDepartmentsTypes", {"parentId":parentId}, this.GetDepartmentsTypes.getArguments().slice(1));
	},
	GetDepartments: function(typeId) {
		return this.invoke("GetDepartments", {"typeId":typeId}, this.GetDepartments.getArguments().slice(1));
	},
	GetDepartmentInfo: function(id) {
		return this.invoke("GetDepartmentInfo", {"id":id}, this.GetDepartmentInfo.getArguments().slice(1));
	},
	GetShopCartInfo: function(orderType, buyType) {
		return this.invoke("GetShopCartInfo", {"orderType":orderType, "buyType":buyType}, this.GetShopCartInfo.getArguments().slice(2));
	},
	GetCartData: function(orderType, buyType, fieldsColumn) {
		return this.invoke("GetCartData", {"orderType":orderType, "buyType":buyType, "fieldsColumn":fieldsColumn}, this.GetCartData.getArguments().slice(3));
	},
	IntoShopCart: function(productID, quantity, param, paramsIds, description, origPriceDescription, orderType, buyType) {
		return this.invoke("IntoShopCart", {"productID":productID, "quantity":quantity, "param":param, "paramsIds":paramsIds, "description":description, "origPriceDescription":origPriceDescription, "orderType":orderType, "buyType":buyType}, this.IntoShopCart.getArguments().slice(8));
	},
	IntoShopCart2: function(productID, quantity, param, paramsIds, description, origPriceDescription, orderType, buyType, customizedDesc, departmentTypeId) {
		return this.invoke("IntoShopCart2", {"productID":productID, "quantity":quantity, "param":param, "paramsIds":paramsIds, "description":description, "origPriceDescription":origPriceDescription, "orderType":orderType, "buyType":buyType, "customizedDesc":customizedDesc, "departmentTypeId":departmentTypeId}, this.IntoShopCart2.getArguments().slice(10));
	},
	ShopCartUpdate: function(productID, quantity, param, orderType, buyType) {
		return this.invoke("ShopCartUpdate", {"productID":productID, "quantity":quantity, "param":param, "orderType":orderType, "buyType":buyType}, this.ShopCartUpdate.getArguments().slice(5));
	},
	ShopCartUpdate2: function(productID, quantity, param, orderType, buyType) {
		return this.invoke("ShopCartUpdate2", {"productID":productID, "quantity":quantity, "param":param, "orderType":orderType, "buyType":buyType}, this.ShopCartUpdate2.getArguments().slice(5));
	},
	UpdateShopCartDetail: function(productID, param, description, orderType, buyType) {
		return this.invoke("UpdateShopCartDetail", {"productID":productID, "param":param, "description":description, "orderType":orderType, "buyType":buyType}, this.UpdateShopCartDetail.getArguments().slice(5));
	},
	GetFreight: function(CarriageCompanyId, CountryId, ProvinceId, CityId, AreaId, SumWeight) {
		return this.invoke("GetFreight", {"CarriageCompanyId":CarriageCompanyId, "CountryId":CountryId, "ProvinceId":ProvinceId, "CityId":CityId, "AreaId":AreaId, "SumWeight":SumWeight}, this.GetFreight.getArguments().slice(6));
	},
	GetFreightInArea: function(country, province) {
		return this.invoke("GetFreightInArea", {"country":country, "province":province}, this.GetFreightInArea.getArguments().slice(2));
	},
	AddOrder: function(orderType, isDivided, deliveryAddressId, carriageWayId, carriageCompanyId, departmentId, receiver, receiverMobile, payType, useIntegral, couponIds, isInvoice, invoiceTitle, description, deliveryTime, giftCouponIds, isUseBanlance, taxinvoiceId) {
		return this.invoke("AddOrder", {"orderType":orderType, "isDivided":isDivided, "deliveryAddressId":deliveryAddressId, "carriageWayId":carriageWayId, "carriageCompanyId":carriageCompanyId, "departmentId":departmentId, "receiver":receiver, "receiverMobile":receiverMobile, "payType":payType, "useIntegral":useIntegral, "couponIds":couponIds, "isInvoice":isInvoice, "invoiceTitle":invoiceTitle, "description":description, "deliveryTime":deliveryTime, "giftCouponIds":giftCouponIds, "isUseBanlance":isUseBanlance, "taxinvoiceId":taxinvoiceId}, this.AddOrder.getArguments().slice(18));
	},
	CancelOrder: function(orderNo) {
		return this.invoke("CancelOrder", {"orderNo":orderNo}, this.CancelOrder.getArguments().slice(1));
	},
	CheckOrderGoodsStatus: function(orderId) {
		return this.invoke("CheckOrderGoodsStatus", {"orderId":orderId}, this.CheckOrderGoodsStatus.getArguments().slice(1));
	},
	GetIntegralToMoney: function(useIntegral) {
		return this.invoke("GetIntegralToMoney", {"useIntegral":useIntegral}, this.GetIntegralToMoney.getArguments().slice(1));
	},
	GetCouponMony: function(coupons) {
		return this.invoke("GetCouponMony", {"coupons":coupons}, this.GetCouponMony.getArguments().slice(1));
	},
	CheckGiftCoupon: function(giftCoupons) {
		return this.invoke("CheckGiftCoupon", {"giftCoupons":giftCoupons}, this.CheckGiftCoupon.getArguments().slice(1));
	},
	ClearCart: function(orderType, buyType) {
		return this.invoke("ClearCart", {"orderType":orderType, "buyType":buyType}, this.ClearCart.getArguments().slice(2));
	},
	CreateRedPacketUrl: function(money, urlPage) {
		return this.invoke("CreateRedPacketUrl", {"money":money, "urlPage":urlPage}, this.CreateRedPacketUrl.getArguments().slice(2));
	},
	DeleteRedPacket: function(url) {
		return this.invoke("DeleteRedPacket", {"url":url}, this.DeleteRedPacket.getArguments().slice(1));
	},
	GetInnerLetter: function(username, isSystem, beginIndex, pageSize, isRead, isReplay) {
		return this.invoke("GetInnerLetter", {"username":username, "isSystem":isSystem, "beginIndex":beginIndex, "pageSize":pageSize, "isRead":isRead, "isReplay":isReplay}, this.GetInnerLetter.getArguments().slice(6));
	},
	RecordBrowsedGoods: function(key, goodsId, recordCount) {
		return this.invoke("RecordBrowsedGoods", {"key":key, "goodsId":goodsId, "recordCount":recordCount}, this.RecordBrowsedGoods.getArguments().slice(3));
	},
	AddExChangeOrder: function(orderId, detailId, exchangeProducts, exchangeReason, deliveryAddressId, payType) {
		return this.invoke("AddExChangeOrder", {"orderId":orderId, "detailId":detailId, "exchangeProducts":exchangeProducts, "exchangeReason":exchangeReason, "deliveryAddressId":deliveryAddressId, "payType":payType}, this.AddExChangeOrder.getArguments().slice(6));
	},
	PayExchangeMoney: function(exchangeId, payType) {
		return this.invoke("PayExchangeMoney", {"exchangeId":exchangeId, "payType":payType}, this.PayExchangeMoney.getArguments().slice(2));
	},
	InsertOrUploadTaxInvoice: function(id, fields, values) {
		return this.invoke("InsertOrUploadTaxInvoice", {"id":id, "fields":fields, "values":values}, this.InsertOrUploadTaxInvoice.getArguments().slice(3));
	},
	GetTaxInvoiceDataById: function(id) {
		return this.invoke("GetTaxInvoiceDataById", {"id":id}, this.GetTaxInvoiceDataById.getArguments().slice(1));
	},
	ServerTime: function() {
		return this.invoke("ServerTime", {}, this.ServerTime.getArguments().slice(0));
	},
	SaveCookice: function(name, value) {
		return this.invoke("SaveCookice", {"name":name, "value":value}, this.SaveCookice.getArguments().slice(2));
	},
	DelCookie: function(name) {
		return this.invoke("DelCookie", {"name":name}, this.DelCookie.getArguments().slice(1));
	},
	GetCookice: function(name) {
		return this.invoke("GetCookice", {"name":name}, this.GetCookice.getArguments().slice(1));
	},
	GetSiteId: function() {
		return this.invoke("GetSiteId", {}, this.GetSiteId.getArguments().slice(0));
	},
	GetOptionConfig: function(configId) {
		return this.invoke("GetOptionConfig", {"configId":configId}, this.GetOptionConfig.getArguments().slice(1));
	},
	VisitStatis: function(nId, dataId, openPageTime, country, province, city, area) {
		return this.invoke("VisitStatis", {"nId":nId, "dataId":dataId, "openPageTime":openPageTime, "country":country, "province":province, "city":city, "area":area}, this.VisitStatis.getArguments().slice(7));
	},
	GetCustomerData: function(tableId, returnFields, condition, order, beginIndex, pageSize) {
		return this.invoke("GetCustomerData", {"tableId":tableId, "returnFields":returnFields, "condition":condition, "order":order, "beginIndex":beginIndex, "pageSize":pageSize}, this.GetCustomerData.getArguments().slice(6));
	},
	IsCustomerData: function(tableId, condition) {
		return this.invoke("IsCustomerData", {"tableId":tableId, "condition":condition}, this.IsCustomerData.getArguments().slice(2));
	},
	UpdateCustomerData: function(tableId, fields, values, condition) {
		return this.invoke("UpdateCustomerData", {"tableId":tableId, "fields":fields, "values":values, "condition":condition}, this.UpdateCustomerData.getArguments().slice(4));
	},
	InsertCustomerData: function(tableId, fields, values) {
		return this.invoke("InsertCustomerData", {"tableId":tableId, "fields":fields, "values":values}, this.InsertCustomerData.getArguments().slice(3));
	},
	DeleteCustomerData: function(tableId, condition) {
		return this.invoke("DeleteCustomerData", {"tableId":tableId, "condition":condition}, this.DeleteCustomerData.getArguments().slice(2));
	},
	ConvertWordToImage: function(returnType, str, fontName, fontSize, fontStyle, color, savePath, returnSize, isDele) {
		return this.invoke("ConvertWordToImage", {"returnType":returnType, "str":str, "fontName":fontName, "fontSize":fontSize, "fontStyle":fontStyle, "color":color, "savePath":savePath, "returnSize":returnSize, "isDele":isDele}, this.ConvertWordToImage.getArguments().slice(9));
	},
	url: '/ajaxpro/ShoveEIMS3.Ajax.Ajax,ShoveEIMS3.Ajax.ashx'
}));
ShoveEIMS3.Ajax.Ajax = new ShoveEIMS3.Ajax.Ajax_class();

