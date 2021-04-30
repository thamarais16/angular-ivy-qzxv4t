import { Component, VERSION, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  name = "Angular " + VERSION.major;
}
