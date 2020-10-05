declare namespace User {

    export interface UserList {
        _id: string;
        location: Common.Location;
        profilePicture: string;
        emailVerified: boolean;
        phoneVerified?: boolean;
        isActive: boolean;
        badgeType?: number;
        interests?: string[];
        email: string;
        createdOn: Date;
        countryCode?: string;
        phoneNo?: string;
        fullName: string;
        plan?: Common.Plan;
    }

}

