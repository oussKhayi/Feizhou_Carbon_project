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
<section
  className="
        bg-[#f4f7fa] flex flex-col gap-6 gap-y-8 w-full p-6
        md:bg-green-4000 md:grid md:grid-cols-1 lg:grid-cols-2 md:px-20 md:py-14 md:gap-8
        lg:bg-violet-4000 lg:px-36 lg:gap-x-8
         xl:bg-yellow-4000 xl:px-44 xl:grid xl:grid-cols-3"
>
  {services.map((card, index) => {
    return (
      // <Card key={index} card={card} />
      <div
        key={index}
        className="card w-full min-h-fit min-w-64 h-64 rounded-lg bg-red-400"
      >
        <div className="front min-h-fit">
          <div className="content min-h-fit h-auto">
            {/* <div className="p-1 w-16">{card?.icon}</div> */}
            <p className="text-xl font-semibold">{card.content1.title}</p>
            <p className="min-h-fit bg-green-400 bg-opacity-25">
              {card.content1.description}
            </p>
            <p className="min-h-fit bg-green-400 bg-opacity-25">
              {card.content1.description}
            </p>
            <p className="min-h-fit bg-green-400 bg-opacity-25">
              {card.content1.description}
            </p>
            <p className="min-h-fit bg-green-400 bg-opacity-25">
              {card.content1.description}
            </p>
            <p className="min-h-fit bg-green-400 bg-opacity-25">
              {card.content1.description}
            </p>
          </div>
        </div>
        <div className="back hidden">
          <div className="content">
            <div className="p-1 w-16">{card?.icon}</div>
            <p className="text-xl font-semibold">{card.content1.title}</p>
            <p className="min-h-fit bg-green-400 bg-opacity-25">
              {card.content1.description}
            </p>
          </div>
        </div>
      </div>
    );
  })}
</section>;