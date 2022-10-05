import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../hooks/dispatch-selector.hooks";
import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import {
  AuthUserState,
  selectAuthUser,
} from "../features/shared/presentation/slices/auth-user.slice";
import { selectRegisterUser, RegisterClientState} from "../features/shared/presentation/slices/register-user.slice";
import { selectCompleteDetailsUser ,completeDetailsState } from "../features/shared/presentation/slices/complete-details";
import {SigninPages} from '../pages/signin.pages'
export const LoadingPage: React.FC = (): JSX.Element => {
  const AuthUserSignin: any = useAppSelector(selectAuthUser);
  const RegisterUserSignup: any = useAppSelector(selectRegisterUser);
  const CompleteDetailsUser: any = useAppSelector(selectCompleteDetailsUser);
  const [openLoginChooserModal ,setOpenLoginChooserModal] = useState<boolean>(false)
  const [openBackdropLoading, setOpenBackdropLoading] = useState(false);
  

  const [successAlert, setSuccessAlert] = useState<{
    status: boolean;
    message?: string;
  }>({
    status: false,
  });

  const [failsAlert, setFailsAlert] = useState<{
    status: boolean;
    message?: string;
  }>({
    status: false,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    switch (AuthUserSignin.status) {
      case AuthUserState.inProgress:
        setOpenBackdropLoading(true);
        break;
      case AuthUserState.initial:
        setOpenBackdropLoading(false);
        break;
      case AuthUserState.success:
        if (!AuthUserSignin.data.success) {
          showAlert(setFailsAlert, AuthUserSignin.data.message);
          setOpenBackdropLoading(false);
          return;
        }
        showAlert(setSuccessAlert, AuthUserSignin.data.message);
        window.location.href = '/dashboard';
        setOpenBackdropLoading(false);
        break;
      case AuthUserState.fail:
        showAlert(setFailsAlert, AuthUserSignin.data.message);
        setOpenBackdropLoading(false);
        break;
    }
  }, [AuthUserSignin, dispatch]);

  useEffect(() => {
    switch (RegisterUserSignup.status) {
      case RegisterClientState.inProgress:
        setOpenBackdropLoading(true);
        break;
      case RegisterClientState.initial:
        setOpenBackdropLoading(false);
        break;
      case RegisterClientState.success:
        if (!RegisterUserSignup.data.success) {
          showAlert(setFailsAlert, RegisterUserSignup.data.message);
          setOpenBackdropLoading(false);
          return;
        }
        showAlert(setSuccessAlert, RegisterUserSignup.data.message);
        setOpenLoginChooserModal(true)
        setOpenBackdropLoading(false);
        break;
      case RegisterClientState.fail:
        showAlert(setFailsAlert, RegisterUserSignup.data.message);
        setOpenBackdropLoading(false);
        break;
    }
  }, [RegisterUserSignup, dispatch]);


  useEffect(() => {
    switch (CompleteDetailsUser.status) {
      case completeDetailsState.inProgress:
        setOpenBackdropLoading(true);
        break;
      case completeDetailsState.initial:
        setOpenBackdropLoading(false);
        break;
      case completeDetailsState.success:
   
        showAlert(setSuccessAlert, CompleteDetailsUser.data.message);
        setTimeout(()=>{
          window.location.reload()
        },1000) 
        setOpenBackdropLoading(false);
        break;
      case completeDetailsState.fail:
        showAlert(setFailsAlert, CompleteDetailsUser.data.message);
        setOpenBackdropLoading(false);
        break;
    }
  }, [CompleteDetailsUser, dispatch]);

  return (
    <div>
      <Outlet />
      <SnackbarAlert
        open={successAlert.status}
        severity="success"
        message={successAlert.message}
      />
      <SnackbarAlert
        open={failsAlert.status}
        severity="error"
        message={failsAlert.message}
      />
      <BackdropLoading open={openBackdropLoading} />
      <SigninPages
        whatForm={openLoginChooserModal  ? 'signin' : ''}
        open={openLoginChooserModal}
        onClose={() => {
          window.location.href ='/'
          setOpenLoginChooserModal(false);
        }}
      />
    </div>
  );
};

export function showAlert(
  toggleStateAction: Dispatch<
    SetStateAction<{ status: boolean; message?: string | undefined }>
  >,
  message: string
) {
  toggleStateAction({
    status: true,
    message: message,
  });

  setTimeout(() => {
    toggleStateAction({
      status: false,
      message: message,
    });
  }, 3000);
}

interface SnackbarAlertProps {
  open: boolean;
  severity: "success" | "error";
  message: string | undefined;
}

export function SnackbarAlert(props: SnackbarAlertProps) {
  return (
    <>
      <div className="hidden lg:block">
        <Snackbar
          open={props.open}
          autoHideDuration={10000}
          sx={{ zIndex: 2004 }}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          TransitionComponent={Slide}
        >
          <MuiAlert severity={props.severity} variant="filled">
            {props.message}
          </MuiAlert>
        </Snackbar>
      </div>
      <div className="lg:hidden">
        <Snackbar
          open={props.open}
          autoHideDuration={10000}
          sx={{ zIndex: 2004, marginBottom: 7 }}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          TransitionComponent={Slide}
        >
          <MuiAlert severity={props.severity} variant="filled">
            {props.message}
          </MuiAlert>
        </Snackbar>
      </div>
    </>
  );
}

interface BackdropLoadingProps {
  open: boolean;
}

export function BackdropLoading(props: BackdropLoadingProps) {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={props.open}
      >
        <CircularProgress color="success" />
      </Backdrop>
    </div>
  );
}

interface BackdropLoadingPopClubProps {
  open: boolean;
}

export function BackdropLoadingPopClub(props: BackdropLoadingPopClubProps) {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={props.open}
      >
        <img src="dance.gif" alt="Poppy Dancing" width={300} />
      </Backdrop>
    </div>
  );
}
