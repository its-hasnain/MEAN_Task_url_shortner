import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UrlShortnerService } from './service/url-shortner.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChangeDetectorRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'task';
  arr: string = '';
  att: string = '';
  formShorter!: FormGroup;
  loading = false;
  reg =
    '((http|https)://)(www.)?' +
    '[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]' +
    '{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)';
  constructor(
    public fb: FormBuilder,
    private urlService: UrlShortnerService,
    private cdr: ChangeDetectorRef,
    private _snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.formShorter = this.fb.group({
      longUrl: ['', [Validators.required, Validators.pattern(this.reg)]],
      shortUrl: new FormControl({ value: null, disabled: true }),
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.loading = true;
      this.urlService.shortenUrl(form.value['longUrl']).subscribe(
        (res) => {
          let shortUrl = res.shortUrl;
          this.arr = shortUrl;

          this.urlService.getUrl(shortUrl).subscribe((res: any) => {
            console.log('res', res);
            this.att = res.data;
          });
        },
        (error: any) => {
          this._snackbar.open(error.massage, `Error`);
          this.loading = false;
        }
      );
    } else {
      this._snackbar.open(`Invalid URL!`, `Error`);
    }
  }
}
