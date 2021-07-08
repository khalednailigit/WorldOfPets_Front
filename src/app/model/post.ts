export class Post {
  activity_id:          number;
  experience_id:        number;
  start:                Date;
  finish:               Date;
  location_id:          number | null;
  country_code:         null | string;
  country:              null | string;
  tags:                 Array<null | string>;
  custom_tags:          string[];
  type_id:              number;
  location_type_id:     number;
  online_type_id:       number | null;
  language_id:          number;
  language:             Language;
  language_native:      Language;
  time_zone_name:       string;
  title:                string;
  description:          string;
  restriction:          any[];
  provide:              any[];
  bring:                any[];
  files:                File[];
  occasions:            Occasion[];
  address:              Address | null;
  limitation:           Limitation;
  price:                number;
  currency:             Currency;
  currency_id:          number;
  exchange_price:       number;
  exchange_currency:    Currency;
  exchange_currency_id: number;
  refund_days:          number;
  updated:              Date;
  created:              Date;
  creator_id:           number;
  a_status:             AStatus;
}

export enum AStatus {
  Awaiting = "awaiting",
}

export interface Address {
  city:            string;
  office:          string;
  street:          string;
  country:         string;
  latitude:        number;
  longitude:       number;
  country_code:    string;
  address_details: string;
}

export class Currency {
  Usd = "USD"
}

export class File {
  url:         string;
  type:        Type;
  fileName:    string;
  isMainImage: boolean;
  isUploading: boolean;
}

export enum Type {
  Photo = "photo",
}

export enum Language {
  English = "English",
}

export class Limitation {
  min_age:             number | null;
  size_max:            number;
  size_min:            number;
  is_infants_allowed:  boolean;
  is_children_allowed: boolean;
}

export class Occasion {
  start:           Date;
  finish:          Date;
  repeatable:      boolean;
  time_slots:      string[];
  repeat_days?:    number[];
  repeat_type?:    string;
  repeat_every?:   number;
  repeat_monthly?: string;
}
