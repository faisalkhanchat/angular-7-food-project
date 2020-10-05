/******************************PRODUCT LIST INTERFACE ******************/
export interface Mobile {
  isVerified: boolean;
  countryCode: string;
  mobileNo: string;
  fullMobileNo: string;
}

export interface PharmacyCategory {
  categoryMedicineCount: number;
  status: string;
  _id: string;
  categoryId: string;
  categoryName: string;
}

export interface RegQualification {
  pharName: string;
  regCouncil: string;
  regNumber: string;
  regYear: number;
}

export interface PharAddress {
  type: string;
  address: string;
  coordinates: number[];
}

export interface PharDetails {
  locality: string;
  medLicence: string;
  pharAddress: PharAddress;
  pharType: string;
}

export interface OperDetails {
  operTimeFrom: string;
  operTimeTo: string;
  pickTimeFrom: string;
  pickTimeTo: string;
  serviceType: string;
}

export interface BankDetails {
  accountHolder: string;
  accountNumber: string;
  rountingNumber: string;
}

export interface IProductListResponse {
  _id: string;
  mobile: Mobile;
  profileStep: number;
  email: string;
  pharmacyImage: string;
  pharmacyDescription: string;
  isProfileCompleted: boolean;
  isRead: boolean;
  isApproved: string;
  totalOrders: number;
  status: string;
  fullName: string;
  pharmacyCategories: PharmacyCategory[];
  regQualification: RegQualification;
  pharDetails: PharDetails;
  operDetails: OperDetails;
  bankDetails: BankDetails;
}

export interface IProductList {
  statusCode: number;
  message: string;
  data: IProductListResponse;
}

/******************************PRODUCT LIST INTERFACE ******************/

/******************************PRODUCT DETAIL INTERFACE ******************/

export interface IProductDetailResponse {
  _id: string;
  status: string;
  medicineId: string;
  medicineName: string;
  price: number;
  createdAt: Date;
  salt: string[];
  medicineType: string;
  categoryId: string;
  categoryUniqueId: string;
  categoryName: string;
  categoryImage: string;
  medicineImage: string;
  manufacturerName: string;
  medicineQuantity: string;
}

export interface IProductDetail {
  statusCode: number;
  message: string;
  data: IProductDetailResponse;
}

/******************************PRODUCT DETAIL INTERFACE ******************/

/******************************PRODUCT ADD INTERFACE ******************/

/*******Product Add Interface **********/
export interface IProductAddResponse {
  statusCode: number;
  message: string;
}
/*******Product Add Interface **********/

/*******Product Edit Interface **********/

export interface IProductEditResponse {
  _id: string;
  status: string;
  medicineId: string;
  medicineName: string;
  price: number;
  createdAt: Date;
  salt: string[];
  medicineType: string;
  categoryId: string;
  categoryUniqueId: string;
  categoryName: string;
  categoryImage: string;
  medicineImage: string;
  manufacturerName: string;
  medicineQuantity: string;
}

export interface IProductEdit {
  statusCode: number;
  message: string;
  data: IProductEditResponse;
}

/*******Product Edit Interface **********/

/**@summary  it is the INTERFACE of MEDICINE LIST in searching at time of add*/



  export interface IProductMedicineListing {
      _id: string;
      medicineQuantity: string;
      salt: string[];
      medicineType: string;
      medicineName: string;
      categoryId: string;
      categoryUniqueId: string;
      categoryName: string;
      medicineImage: string;
      manufacturerName: string;
      medicineUniqueId: string;
  }

  export interface IProductListMedicineResponse {
      result: IProductMedicineListing[];
      totalRecord: number;
      page: number;
      total_page: number;
      next_hit: number;
      limit: number;
  }

  export interface IProductListMedicine {
      statusCode: number;
      message: string;
      data: IProductListMedicineResponse;
  }


/******************************PRODUCT ADD INTERFACE ******************/



/*******************PRODUCT DELETE INTERFACE ***********************/
export interface IProductCommonResponse {
    statusCode: number;
    message: string;
}


/*******************PRODUCT DELETE INTERFACE ***********************/