/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
setShadowDOM(true);
navigateTo("https://signin.ft.cayuse.com/login?tenant_id=8f9cdc53-2d86-426f-85e0-37151b982a72&redirect_uri=https%3A%2F%2Ffsqa.ft.cayuse.com%2F&response_type=TOKEN&state&nonce&auth_error=false");
setValue(fallback(`byXPath('//*[@id="username"]')`,
   `textbox("form-control inputField-customizable")`,
   `byXPath('//*[@name="username"]')`,
   `textbox("username")`,
   `textbox("username")`,
   `byXPath("//input[@id='username']")`,
   `byXPath('//*[@class="form-control inputField-customizable"]')`,
   `byXPath('/html/body/div/div/div/div[2]/div/form/div/input')`,
   `byXPath("id('username')")`,
   `textbox({'type':'text'})`,
   `byJQuery('input[class="form-control inputField-customizable"]')`,
   `byJQuery('#username')`,
   `byJQuery('input[name="username"]')`,
   `byJQuery('input[value=""]')`),"0_test");
setValue(fallback(`byXPath('//*[@id="password"]')`,
   `password("form-control inputField-customizable")`,
   `byXPath('//*[@name="password"]')`,
   `password("password")`,
   `password("password")`,
   `byXPath("//input[@id='password']")`,
   `byXPath('/html/body/div/div/div/div[2]/div/form/div[2]/input')`,
   `byXPath("id('password')")`,
   `password({'type':'password'})`,
   `byJQuery('#password')`,
   `byJQuery('input[name="password"]')`),"cayuse@999");
click(fallback(`submit("btn btn-primary submitButton-customizable")`,
   `byXPath('//*[@name="signInSubmitButton"]')`,
   `submit("signInSubmitButton")`,
   `submit("Sign in")`,
   `byXPath('//div/div/div/div[2]/div/form/input[2]')`,
   `byXPath('//*[@class="btn btn-primary submitButton-customizable"]')`,
   `byXPath('/html/body/div/div/div/div[2]/div/form/input[2]')`,
   `byXPath("/html[1]/body[1]/div[@class='container']/div[@class='modal-dialog']/div[@class='modal-content background-customizable modal-content-mobile']/div[@class='modal-body']/div[1]/form[@class='cognito-asf']/input[@class='btn btn-primary submitButton-customizable']")`,
   `submit({'type':'Submit'})`,
   `byJQuery('form[class="cognito-asf"] > input[class="btn btn-primary submitButton-customizable"]')`,
   `byJQuery('.cognito-asf > .btn.btn-primary.submitButton-customizable')`,
   `byJQuery('form[name="cognitoSignInForm"] > input[name="signInSubmitButton"]')`,
   `byJQuery('input[value="Sign in"]')`));
click(fallback(`span(1, _in(custom("cayuse-dropdown", "products")))`,
   `span(1, _in(custom("cayuse-dropdown", {'id':'products'})))`,
   `span("Products")`,
   `span({'slot':'label'})`));
click(fallback(`span(0, _in(link("/admin-web")))`,
   `span(0, _in(link({'id':'/admin-web'})))`,
   `span("Admin")`));
selectWindow("Admin");
setValue(fallback(`textbox(0, _in(div("view-list-people")))`,
   `textbox(0, _in(div({'id':'view-list-people'})))`,
   `textbox("node_modules-@bit-cayuse-react-components-form-inputs-text-dist-styles___invisible node_modules-@bit-cayuse-react-components-form-inputs-text-dist-styles___text src-components-SearchBarNav-styles___firstFacetSearch")`,
   `byXPath("//div[@id='view-list-people']/div/div/div/div[1]/div/div/input")`,
   `byXPath('//*[@class="node_modules-@bit-cayuse-react-components-form-inputs-text-dist-styles___text node_modules-@bit-cayuse-react-components-form-inputs-text-dist-styles___invisible src-components-SearchBarNav-styles___firstFacetSearch"]')`,
   `byXPath('/html/body/div/div[2]/main/div/div[2]/div[2]/section/section/div/div/div/div/div/div/div/input')`,
   `byXPath("id('view-list-people')/div[@class='styles.baseMargin undefined']/div[@class='src-components-BasePadding-styles___desktop src-components-BasePadding-styles___mobile']/div[@class='src-components-FeedTable-styles___container']/div[@class='node_modules-@bit-cayuse-react-components-padded-cell-dist-styles___cell node_modules-@bit-cayuse-react-components-padded-cell-dist-styles___radiusTopLeft node_modules-@bit-cayuse-react-components-padded-cell-dist-styles___radiusTopRight node_modules-@bit-cayuse-react-components-padded-cell-dist-styles___radiusBottomLeft node_modules-@bit-cayuse-react-components-padded-cell-dist-styles___borderTop node_modules-@bit-cayuse-react-components-padded-cell-dist-styles___borderRight node_modules-@bit-cayuse-react-components-padded-cell-dist-styles___borderBottom node_modules-@bit-cayuse-react-components-padded-cell-dist-styles___borderLeft']/div[@class='src-components-SearchBarNav-styles___facetedSearchBar']/div[@class='src-components-SearchBarNav-styles___inputWrapper']/input[@class='node_modules-@bit-cayuse-react-components-form-inputs-text-dist-styles___text node_modules-@bit-cayuse-react-components-form-inputs-text-dist-styles___invisible src-components-SearchBarNav-styles___firstFacetSearch']")`,
   `textbox({'type':'text'})`,
   `byJQuery('div[class="src-components-FeedTable-styles___container"] > div[class="node_modules-@bit-cayuse-react-components-padded-cell-dist-styles___cell node_modules-@bit-cayuse-react-components-padded-cell-dist-styles___radiusTopLeft node_modules-@bit-cayuse-react-components-padded-cell-dist-styles___radiusTopRight node_modules-@bit-cayuse-react-components-padded-cell-dist-styles___radiusBottomLeft node_modules-@bit-cayuse-react-components-padded-cell-dist-styles___borderTop node_modules-@bit-cayuse-react-components-padded-cell-dist-styles___borderRight node_modules-@bit-cayuse-react-components-padded-cell-dist-styles___borderBottom node_modules-@bit-cayuse-react-components-padded-cell-dist-styles___borderLeft"] > div[class="src-components-SearchBarNav-styles___facetedSearchBar"] > div[class="src-components-SearchBarNav-styles___inputWrapper"] > input[class="node_modules-@bit-cayuse-react-components-form-inputs-text-dist-styles___text node_modules-@bit-cayuse-react-components-form-inputs-text-dist-styles___invisible src-components-SearchBarNav-styles___firstFacetSearch"]')`,
   `byJQuery('input[value="t"]')`),"test");
click(fallback(`div("xOfYWrapper")`,
   `div("Showing 1 - 25 / 200 items")`,
   `byXPath("//div[@id='view-list-people']/div/div/div/div[2]/div[2]/div/div[2]")`,
   `byXPath('//*[@class="xOfYWrapper"]')`,
   `byXPath('//*[text()="Showing 1 - 25 / 200 items"]')`,
   `byXPath('/html/body/div/div[2]/main/div/div[2]/div[2]/section/section/div/div/div/div/div[2]/div[2]/div/div[2]')`,
   `byXPath("id('view-list-people')/div[@class='styles.baseMargin undefined']/div[@class='src-components-BasePadding-styles___desktop src-components-BasePadding-styles___mobile']/div[@class='src-components-FeedTable-styles___container']/div[@class='styles.baseMargin ']/div[@class='src-components-FeedTable-styles___pagingControls']/div[@class='paging']/div[@class='xOfYWrapper']")`,
   `byJQuery('div[class="src-components-FeedTable-styles___container"] > div[class="styles.baseMargin "] > div[class="src-components-FeedTable-styles___pagingControls"] > div[class="paging"] > div[class="xOfYWrapper"]')`));
click(fallback(`span(0, _in(div("view-list-people")))`,
   `span(0, _in(div({'id':'view-list-people'})))`,
   `span("0_TEST, 0_TEST (TEST)")`,
   `byXPath("//div[@id='view-list-people']/div/div/div/div[2]/div[1]/div/table/tbody/tr[1]/td[1]/a/span")`,
   `byXPath('/html/body/div/div[2]/main/div/div[2]/div[2]/section/section/div/div/div/div/div[2]/div/div/table/tbody/tr/td/a/span')`,
   `byXPath("id('view-list-people')/div[@class='styles.baseMargin undefined']/div[@class='src-components-BasePadding-styles___desktop src-components-BasePadding-styles___mobile']/div[@class='src-components-FeedTable-styles___container']/div[@class='styles.baseMargin ']/div[@class='styles.baseMargin ']/div[@class='src-components-FeedTable-styles___feedTableWrapper']/table[@class='ui selectable table classes  src-components-FeedTable-styles___feedTable']/tbody[1]/tr[1]/td[1]/a[1]/span[1]")`));
click(fallback(`div(34, _in(custom("main", "content-main")))`,
   `div(34, _in(custom("main", {'id':'content-main'})))`,
   `div("src-components-Forms-FormControl-styles___FormControl src-containers-People-Forms-PeopleProfile-DegreesForm-styles___degree")`,
   `div("Degree")`,
   `byXPath("//main[@id='content-main']/div/div[2]/div/div/div[2]/div/form/div[1]")`,
   `byXPath('//*[@class="src-containers-People-Forms-PeopleProfile-DegreesForm-styles___degree src-components-Forms-FormControl-styles___FormControl"]')`,
   `byXPath('/html/body/div/div[2]/main/div/div[2]/div/div/div[2]/div/form/div')`,
   `byXPath("id('content-main')/div[@class='src-containers-PageLayout-styles___Page']/div[@class='src-containers-PageLayout-styles___Content']/div[@class='src-containers-PageLayout-styles___ContentWrapper']/div[@class='src-containers-PageLayout-styles___PageContent']/div[@class='src-containers-People-Forms-PeopleProfile-DegreesForm-styles___DegreesForm']/div[@class='undefined src-components-Forms-SectionFormHeader-styles___Container']/form[1]/div[@class='src-containers-People-Forms-PeopleProfile-DegreesForm-styles___degree src-components-Forms-FormControl-styles___FormControl']")`,
   `byJQuery('div[class="src-containers-People-Forms-PeopleProfile-DegreesForm-styles___degree src-components-Forms-FormControl-styles___FormControl"]')`,
   `byJQuery('.src-containers-People-Forms-PeopleProfile-DegreesForm-styles___degree.src-components-Forms-FormControl-styles___FormControl')`));
var oldvalue=getTextValue("src-components-Forms-Inputs-Text-styles___text undefined[7]");
log("oldvalue"+ oldvalue);
var random=Math.floor(Math.random() * 10);
log("newvalue"+ random);
setValue(fallback(`textbox("src-components-Forms-Inputs-Text-styles___text undefined[7]")`,
   `textbox("description")`,
   `byXPath("//main[@id='content-main']/div/div[2]/div/div/div[2]/div/form/div[1]/input")`,
   `byXPath('/html/body/div/div[2]/main/div/div[2]/div/div/div[2]/div/form/div/input')`,
   `byXPath("id('content-main')/div[@class='src-containers-PageLayout-styles___Page']/div[@class='src-containers-PageLayout-styles___Content']/div[@class='src-containers-PageLayout-styles___ContentWrapper']/div[@class='src-containers-PageLayout-styles___PageContent']/div[@class='src-containers-People-Forms-PeopleProfile-DegreesForm-styles___DegreesForm']/div[@class='undefined src-components-Forms-SectionFormHeader-styles___Container']/form[1]/div[@class='src-containers-People-Forms-PeopleProfile-DegreesForm-styles___degree src-components-Forms-FormControl-styles___FormControl src-components-Forms-FormControl-styles___Touched']/input[@class='src-components-Forms-Inputs-Text-styles___text undefined']")`,
   `textbox({'aria-label':'Degree'})`,
   `byJQuery('div[class="src-containers-People-Forms-PeopleProfile-DegreesForm-styles___degree src-components-Forms-FormControl-styles___FormControl src-components-Forms-FormControl-styles___Touched"] > input[class="src-components-Forms-Inputs-Text-styles___text undefined"]')`,
   `byJQuery('.src-containers-People-Forms-PeopleProfile-DegreesForm-styles___degree.src-components-Forms-FormControl-styles___FormControl.src-components-Forms-FormControl-styles___Touched > .src-components-Forms-Inputs-Text-styles___text.undefined')`,
   `byJQuery('input[name="description"]')`,
   `byJQuery('input[value="1234"]')`),random);
click(fallback(`submit("src-components-Button-styles___button")`,
   `submit("Save")`,
   `byXPath("//main[@id='content-main']/div/div[2]/div/div/div[2]/div/div/div/button[2]")`,
   `byXPath('//*[@class="src-components-Button-styles___button"]')`,
   `byXPath('/html/body/div/div[2]/main/div/div[2]/div/div/div[2]/div/div/div/button[2]')`,
   `byXPath("id('content-main')/div[@class='src-containers-PageLayout-styles___Page']/div[@class='src-containers-PageLayout-styles___Content']/div[@class='src-containers-PageLayout-styles___ContentWrapper']/div[@class='src-containers-PageLayout-styles___PageContent']/div[@class='src-containers-People-Forms-PeopleProfile-DegreesForm-styles___DegreesForm']/div[@class='undefined src-components-Forms-SectionFormHeader-styles___Container']/div[@class='src-components-Forms-SectionFormHeader-styles___Top']/div[1]/button[@class='src-components-Button-styles___button']")`,
   `submit({'aria-label':'Save Degrees & Qualifications'})`,
   `byJQuery('button[class="src-components-Button-styles___button"]')`));
