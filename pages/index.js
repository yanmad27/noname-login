import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Login</title>
      </Head>

      <main className={"main"}>
        <div className={"login-page"}>
          <div className={"thumbnail"}/>
          <div className="login-form-wrapper">
            <div className={"login-form"}>
              <div className="logo">LOGO</div>
              <div className="title">Login</div>
              <div className={"input-wrapper"}>
                <div className={"icon"}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M16.8 5.59686C16.8 8.24633 14.6512 10.3937 12 10.3937C9.3488 10.3937 7.2 8.24633 7.2 5.59686C7.2 2.94739 9.3488 0.799988 12 0.799988C14.6512 0.799988 16.8 2.94739 16.8 5.59686Z"
                          stroke="white" strokeLinecap="square"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M20 23.1854H4C4 22.0493 4 20.9685 4 19.9898C4 17.3388 6.14903 15.1906 8.8 15.1906H15.2C17.851 15.1906 20 17.3388 20 19.9898C20 20.9685 20 22.0493 20 23.1854Z"
                          stroke="white" strokeLinecap="square"/>
                  </svg>
                </div>
                <input className={"input"} type="text" placeholder={"Email/Username"}/>
              </div>
              <div className={"input-wrapper"}>
                <div className="icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.20002 10.4V5.59999C7.20002 2.94902 9.34906 0.799988 12 0.799988C14.651 0.799988 16.8 2.94902 16.8 5.59999V10.4M4.00002 10.4H20C20.8837 10.4 21.6 11.1163 21.6 12V21.6C21.6 22.4836 20.8837 23.2 20 23.2H4.00002C3.11637 23.2 2.40002 22.4836 2.40002 21.6V12C2.40002 11.1163 3.11637 10.4 4.00002 10.4Z"
                      stroke="white"/>
                  </svg>

                </div>
                <input className={"input"} type="password" placeholder={"Password"}/>
              </div>
              <div className={"kmsn-fp"}>
                <label className="checkbox-container">
                  <input type="checkbox"/>
                  <span className="checkmark"/>
                  <span>Keep me sign in</span>
                </label>
                <a href="">Forgot Password</a>

              </div>
              <button className={"btn-login"}>LOGIN</button>
              <div className={"divider"}>
                <svg width="111" height="1" viewBox="0 0 111 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="0.75" x2="111" y2="0.75" stroke="white" strokeWidth="0.5"/>
                </svg>
                <span>Or</span>
                <svg width="111" height="1" viewBox="0 0 111 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="0.75" x2="111" y2="0.75" stroke="white" strokeWidth="0.5"/>
                </svg>

              </div>
              <div className={"login-method"}>
                <div className={"btn-facebook"}>
                  <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="56" height="56" rx="28" fill="white"/>
                    <g clipPath="url(#clip0_0:243)">
                      <path
                        d="M46.5 27.9998C46.5 18.0587 38.4411 9.99979 28.5 9.99979C18.5589 9.99979 10.5 18.0587 10.5 27.9998C10.5 36.9841 17.0823 44.4308 25.6875 45.7811V33.2029H21.1172V27.9998H25.6875V24.0342C25.6875 19.5229 28.3748 17.031 32.4864 17.031C34.4557 17.031 36.5156 17.3826 36.5156 17.3826V21.8123H34.2459C32.0098 21.8123 31.3125 23.1998 31.3125 24.6233V27.9998H36.3047L35.5066 33.2029H31.3125V45.7811C39.9177 44.4308 46.5 36.9841 46.5 27.9998Z"
                        fill="#1877F2"/>
                      <path
                        d="M35.5066 33.2031L36.3047 28H31.3125V24.6235C31.3125 23.2 32.0098 21.8125 34.2459 21.8125H36.5156V17.3828C36.5156 17.3828 34.4557 17.0312 32.4864 17.0312C28.3748 17.0312 25.6875 19.5231 25.6875 24.0344V28H21.1172V33.2031H25.6875V45.7813C26.6039 45.9251 27.5432 46 28.5 46C29.4568 46 30.3961 45.9251 31.3125 45.7813V33.2031H35.5066Z"
                        fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_0:243">
                        <rect width="36" height="36" fill="white" transform="translate(10.5 10)"/>
                      </clipPath>
                    </defs>
                  </svg>

                </div>
                <div className={"btn-google"}>
                  <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="56" height="56" rx="28" fill="white"/>
                    <g clipPath="url(#clip0_0:249)">
                      <path
                        d="M44.4849 28.2995C44.4849 26.9885 44.376 26.0318 44.1404 25.0397H28.8189V30.957H37.8123C37.631 32.4275 36.6519 34.6421 34.476 36.1302L34.4455 36.3283L39.2899 39.9953L39.6255 40.028C42.7079 37.2464 44.4849 33.1539 44.4849 28.2995Z"
                        fill="#4285F4"/>
                      <path
                        d="M28.8187 43.8904C33.2247 43.8904 36.9236 42.473 39.6254 40.0282L34.4759 36.1304C33.0979 37.0694 31.2484 37.7249 28.8187 37.7249C24.5034 37.7249 20.8407 34.9435 19.5351 31.0989L19.3437 31.1148L14.3065 34.9239L14.2406 35.1028C16.9241 40.3115 22.4362 43.8904 28.8187 43.8904Z"
                        fill="#34A853"/>
                      <path
                        d="M19.5351 31.0984C19.1906 30.1063 18.9913 29.0432 18.9913 27.9448C18.9913 26.8463 19.1906 25.7834 19.517 24.7912L19.5079 24.5799L14.4075 20.7097L14.2406 20.7872C13.1346 22.9487 12.5 25.3759 12.5 27.9448C12.5 30.5137 13.1346 32.9409 14.2406 35.1023L19.5351 31.0984Z"
                        fill="#FBBC05"/>
                      <path
                        d="M28.8187 18.1654C31.883 18.1654 33.95 19.4587 35.1286 20.5395L39.7341 16.1457C36.9056 13.5768 33.2247 12 28.8187 12C22.4362 12 16.9241 15.5787 14.2406 20.7874L19.517 24.7915C20.8407 20.9469 24.5034 18.1654 28.8187 18.1654Z"
                        fill="#EB4335"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_0:249">
                        <rect width="32" height="32" fill="white" transform="translate(12.5 12)"/>
                      </clipPath>
                    </defs>
                  </svg>

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>


      <style jsx>{`
        .container, .main, .login-page {
          width: 100%;
          height: 100%;
        }

        .login-page {
          display: flex;
        }

        .thumbnail, .login-form-wrapper {
          width: 50%;
          height: 100%;
        }

        .login-form-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          background: #000000;

        }

        .thumbnail {
          background: #161616;
        }

        .login-form {
          width: 100%;
          height: 100%;
          background: #000000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          row-gap: 24px;
          max-width: 491px;
        }

        .logo {

          font-style: normal;
          font-weight: bold;
          font-size: 32px;
          line-height: 48px;
          /* identical to box height, or 150% */

          display: flex;
          align-items: center;
          text-align: center;

          /* Primary/Brand */

          color: #10D0D0;

        }

        .title {
          font-style: normal;
          font-weight: normal;
          font-size: 28px;
          line-height: 36px;

          display: flex;
          align-items: center;
          text-align: center;

          color: #FFFFFF;
        }

        .input-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
        }

        .icon {
          position: absolute;
          margin: 14px;
          z-index: 100;
        }

        .input {
          height: 72px;
          width: 100%;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 26px;
          display: flex;
          align-items: center;
          color: #FFFFFF;
          border: 1px solid #FFFFFF;
          padding: 24px 24px 24px 48px;
          background-color: black !important;
        }

        .input:focus-visible {
          box-shadow: none;
          outline: none;
        }

        /* The container */
        .checkbox-container {
          display: block;
          position: relative;
          padding-left: 35px;
          cursor: pointer;
          font-size: 22px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          color: #FFFFFF
        }

        .checkbox-container input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        /* Create a custom checkbox */
        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 26px;
          width: 26px;
          border: 1px solid #FFFFFF
        }

        /* Create the checkmark/indicator (hidden when not checked) */
        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }

        /* Show the checkmark when checked */
        .checkbox-container input:checked ~ .checkmark:after {
          display: block;
        }

        /* Style the checkmark/indicator */
        .checkbox-container .checkmark:after {
          left: 8px;
          top: 4px;
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 3px 3px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }

        .kmsn-fp {
          width: 100%;
          display: flex;
          align-items: baseline;
          justify-content: space-between;
        }

        .kmsn-fp span {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 20px;
          color: #FFFFFF;
        }

        .kmsn-fp a {
          color: #10D0D0;
          text-decoration: unset;
        }

        .btn-login {
          width: 100%;
          height: 56px;
          background: #10D0D0;
          border: 0.5px solid rgba(252, 252, 252, 0.25);
          box-sizing: border-box;
          border-radius: 72px;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 28px;
          text-align: center;
          color: #FFFFFF;
          cursor: pointer;

        }

        .divider {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
          /* identical to box height, or 150% */

          display: flex;
          align-items: center;
          text-align: center;

          color: #FFFFFF;
        }

        .divider span {
          margin: 16px
        }

        .login-method {
          display: flex;
          column-gap: 32px;
        }

        .login-method .btn-facebook, .login-method .btn-google {
          cursor: pointer;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          width: 100%;
          height: 100%;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;
          font-family: Roboto, serif;
        }

        #__next {
          width: 100%;
          height: 100%;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
