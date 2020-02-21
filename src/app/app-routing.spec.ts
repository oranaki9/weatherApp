import { routes } from "./app-routing.module";
import { HomeComponent } from "./weather/home/home.component";
describe("app routes", () => {
  it("should have home component", () => {
    expect(routes).toContain({ path: "weather", component: HomeComponent });
  });
});
