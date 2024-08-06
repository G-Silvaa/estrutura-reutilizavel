import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";




const routes: Routes = [
  // {
  //   path: "",
  //   children: [
  //     {
  //       path: "",
  //       loadChildren: () =>
  //         import("./features/1-proj/portfolio.module").then(
  //           (m) => m.estruturaModule
  //         ),
  //     },
  //   ],
  // },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
