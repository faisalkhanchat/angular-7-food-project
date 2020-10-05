import { AccountGuard } from '../../guards/account/account.guard';
import { HomeGuard } from '../../guards/home/home.guard';

export const ACCOUNT_GUARD = { canLoad: [AccountGuard], canActivate: [AccountGuard] };

export const HOME_GUARD = {canLoad: [HomeGuard], canActivate: [HomeGuard] };
