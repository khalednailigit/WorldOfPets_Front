import { AuthModel } from './auth.model';
import { AddressModel } from './address.model';
import { SocialNetworksModel } from './social-networks.model';

export class UserModel extends AuthModel {
  id: number;
  prenom: string;
  password: string;
  nom: string;
  sexe:string;
  email: string;
  login: string;
  // roles: number[];
  // occupation: string;
  // companyName: string;
  // phone: string;
  // address?: AddressModel;
  // socialNetworks?: SocialNetworksModel;
  // personal information
  // firstname: string;
  // lastname: string;
  // website: string;
  // // account information
  // language: string;
  // timeZone: string;
  // communication: {
  //   email: boolean,
  //   sms: boolean,
  //   phone: boolean
  // };
  // email settings
  emailSettings: {
    emailNotification: boolean,
    sendCopyToPersonalEmail: boolean,
    activityRelatesEmail: {
      youHaveNewNotifications: boolean,
      youAreSentADirectMessage: boolean,
      someoneAddsYouAsAsAConnection: boolean,
      uponNewOrder: boolean,
      newMembershipApproval: boolean,
      memberRegistration: boolean
    },
    updatesFromKeenthemes: {
      newsAboutKeenthemesProductsAndFeatureUpdates: boolean,
      tipsOnGettingMoreOutOfKeen: boolean,
      thingsYouMissedSindeYouLastLoggedIntoKeen: boolean,
      newsAboutMetronicOnPartnerProductsAndOtherServices: boolean,
      tipsOnMetronicBusinessProducts: boolean
    }
  };

  setUser(user: any) {
    this.id = user.id;
    this.nom = user.nom || '';
    this.sexe = user.sexe || '';
    this.password = user.password || '';
    this.prenom = user.prenom || '';
    this.email = user.email || '';
    this.login = user.login || './assets/media/users/default.jpg';
  
  }
}
