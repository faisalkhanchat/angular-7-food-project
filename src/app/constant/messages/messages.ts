
export const VALIDATION_MESSAGES = {
    "confirm password": {
        matchPassword: "Confirm password is not matched with password"
    }
}
export const POPUP_MESSAGES = {
    ok: 'Ok',
    close: 'Close',
    confrim: 'Confirmation',
    no: 'No',
    yes: 'Yes',
    passwordResetTitle: 'Reset Password',
    passwordResetLink: 'Password reset link has been sent to registered email id . Please follow the link to reset password .',
    profileEdited: 'Profile has been Edited successfully.',
    passwordChanged: 'Password has been changed successfully.',
    passwordChangedTitle: 'Change Password',
    invalidResetPasswordLink: 'Reset password link is expired',
    logout: 'Logout',
    logoutConfirmation: 'Do you wish to logout?',
    forgotPasswordTitle: "Forgot Your Password? Don't worry send us your registered email address and we will send yousteps to reset your password."
};

export const TABLE_MESSAGES = {
    OOPS: 'Oops something went wrong',
    NO_INTERNET: 'No Internet Connection.',
    NOT_CONNECT_SERVER: 'Could not connect to the server. Please try again later',
    DELETE: 'Delete Confirmation',
    ACTIVE: 'Activate',
    INACTIVE: 'Deactivate',
    DELETE_LIST: 'Are you sure you want to delete ?',
    ACTIVE_LIST: 'Are you sure you want to active ?',
    INACTIVE_LIST: 'Are you sure you want to deactivate ?',
}

export const invalidImageError = (format = 'jpeg/png') => `Only ${format} images are allowed`;

export const invalidFileSize = (size = 4) => `File size can not be more than ${size} MB`;

export const COMMON_MESSAGES = {
    ADDED: (type) => toTitleCase(type) + " has been added successfully",
    UPDATED: (type) => toTitleCase(type) + " has been updated successfully",
    BLOCKED: {
        confirm: (type) => `Do you want to block this ${type.toLowerCase()}?`,
        success: (type) => `${toTitleCase(type)} has been blocked successfully`
    },
    ACTIVE: {
        confirm: (type) => `Do you want to unblock this ${type.toLowerCase()}?`,
        success: (type) => `${toTitleCase(type)} has been unblocked successfully`
    },
    DELETED: {
        confirm: (type) => `Do you want to delete this ${type.toLowerCase()}?`,
        success: (type) => `${toTitleCase(type)} has been deleted successfully`
    }
};

export const SOMETHING_WENT_WRONG = 'Something went wrong , Please try again later.';

export const toTitleCase = (str) => {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}