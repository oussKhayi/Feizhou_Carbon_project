// // Db fach kanclicker ela login kayexecuter l function
// export class LoginComponent {
//   loginObj: any = {
//     emailId: "",
//     password: "",
//   };

//   masterService = inject(MasterService);
//   router = inject(Router);

//   onLogin() {
//     debugger;
//     this.masterService.login(this.loginObj).subscribe((res: any) => {
//       debugger;
//       if (res.result) {
//         localStorage.setItem("ticketUser", JSON.stringify(res.data));
//         this.router.navigateByUrl("dashboard");
//       } else {
//         alert(res.message);
//       }
//     });
//   }
// }
// // li hiya hdi w kaydoz l service li kaykon fih l api dyalk

// export class MasterService {
//   apiUrl: string = "http://localhost:4000/TickectsNew/";

//   constructor(private http: HttpClient) {}

//   login(obj: any) {
//     debugger;
//     return this.http.post(this.apiUrl + "Login", obj);
//   }
// }

// // ms dik la partie dyal ytstora f local storage w y redirectini l dashboard makadozch 7it kaytl3 liya error 404
