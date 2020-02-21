import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "day_date"
})
export class DatePipe implements PipeTransform {
  transform(value: Date, ...args: any[]): any {
    const date = new Date(value);
    const day = date.getDay();
    switch (day) {
      case 0:
        return "Sun";
      case 1:
        return "Mon";
      case 2:
        return "Tue";
      case 3:
        return "Wed";
      case 4:
        return "Thu";
      case 5:
        return "Fri";
      case 6:
        return "Sat";
    }
    return null;
  }
}
