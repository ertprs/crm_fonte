Type.registerNamespace("Mscrm");
Mscrm.DynamicMenuReturnValue = function() {};
Mscrm.EntityReference = function() {};
Mscrm.Message = function() {};
Mscrm.ReportMenuReturnInformation = function() {};
Mscrm.ReportInformation = function() {};
Mscrm.ClientTabInfo = function() {};
Mscrm.RibbonDataInformation = function() {};
Mscrm.RibbonDataTabInformation = function() {};
Mscrm.RuleDefinition = function() {};
Mscrm.RulePart = function()
{
    this.DefaultValue = true;
    this.InvertResult = false
};
Mscrm.OrBlockRulePart = function() {};
Mscrm.OrGroup = function() {};
Mscrm.EntityRulePart = function() {};
Mscrm.EntityPropertyRulePart = function() {};
Mscrm.FormEntityContextRulePart = function() {};
Mscrm.PrivilegeRulePart = function() {};
Mscrm.MiscellaneousPrivilegeRulePart = function() {};
Mscrm.FormStateRulePart = function() {};
Mscrm.FormTypeRulePart = function() {};
Mscrm.OrganizationSettingRulePart = function() {};
Mscrm.ReferencingAttributeRequiredRulePart = function() {};
Mscrm.ValueRulePart = function() {};
Mscrm.ClientRulePart = function() {};
Mscrm.CommandClientType = function() {};
Mscrm.CommandClientType.prototype = {
    none: 0,
    modern: 1,
    refresh: 2,
    legacy: 3
};
Mscrm.CommandClientType.registerEnum("Mscrm.CommandClientType", false);
Mscrm.CommandClientTypeRulePart = function() {};
Mscrm.OutlookClientRulePart = function() {};
Mscrm.OutlookVersionRulePart = function() {};
Mscrm.CrmOutlookClientVersionRulePart = function() {};
Mscrm.OfflineAccessStateRulePart = function() {};
Mscrm.OutlookRenderTypeRulePart = function() {};
Mscrm.OutlookItemTrackingRulePart = function() {};
Mscrm.RelationshipTypeRulePart = function() {};
Mscrm.SkuRulePart = function() {};
Mscrm.SelectionCountRulePart = function() {};
Mscrm.JavaScriptRulePart = function() {};
Mscrm.PageRulePart = function() {};
Mscrm.OptionSetRulePart = function() {};
Mscrm.RibbonActionHandler = function() {};
Mscrm.UrlActionAttributes = function() {};
Mscrm.JavaScriptActionAttributes = function() {};
Mscrm.JavaScriptFunctionAttributes = function() {};
Mscrm.OutlookActionAttributes = function() {};
Mscrm.RibbonParameter = function() {};
Mscrm.NavigationAction = function() {};
Mscrm.NavigationNode = function() {};
Mscrm.LookupItemInfo = function(id, type, name)
{
    this.Id = id;
    this.Type = type;
    this.Name = name
};
Mscrm.IManagedBrowserShell = function() {};
Mscrm.IManagedBrowserShell.registerInterface("Mscrm.IManagedBrowserShell");
Mscrm.NameValuePair = function(key, value)
{
    this.Key = key;
    this.Value = value
};
Mscrm.Notification = function(id, severity, source, text, order, plaintext)
{
    this.Id = id;
    this.Severity = severity;
    this.Source = source;
    this.Text = text;
    this.Order = order;
    this.Plaintext = plaintext;
    this.IsBusinessNotification = false
};
Mscrm.PageHeaderData = function() {};
Mscrm.MetricObject = function() {};
Mscrm.MetricsPageType = function() {};
Mscrm.MetricsPageType.prototype = {
    unknown: 0,
    grid: 1,
    record: 2,
    dashboard: 3
};
Mscrm.MetricsPageType.registerEnum("Mscrm.MetricsPageType", false);
Mscrm.IconType = function() {};
Mscrm.IconType.prototype = {
    gridIcon: 0,
    dbGridIcon: 1,
    navigationIcon: 2,
    outlookShortcutIcon: 3,
    largeEntityIcon: 4,
    ribbon16: 5,
    ribbon32: 6,
    formHeaderEntityIcon: 7
};
Mscrm.IconType.registerEnum("Mscrm.IconType", false);
Mscrm.PerformanceMarkerAggregateType = function() {};
Mscrm.PerformanceMarkerAggregateType.prototype = {
    lastValue: 0,
    count: 1,
    average: 2,
    min: 3,
    max: 4,
    sum: 5
};
Mscrm.PerformanceMarkerAggregateType.registerEnum("Mscrm.PerformanceMarkerAggregateType", false);
Mscrm.IPerformanceMarkerVisitor = function() {};
Mscrm.IPerformanceMarkerVisitor.registerInterface("Mscrm.IPerformanceMarkerVisitor");
Mscrm.ClientApiCollectionType = function() {};
Mscrm.ClientApiCollectionType.prototype = {
    others: 0,
    attribute: 1
};
Mscrm.ClientApiCollectionType.registerEnum("Mscrm.ClientApiCollectionType", false);
Mscrm.IClientApiCollectionItem = function() {};
Mscrm.IClientApiCollectionItem.registerInterface("Mscrm.IClientApiCollectionItem");
Mscrm.IUIControl = function() {};
Mscrm.IUIControl.registerInterface("Mscrm.IUIControl");
Mscrm.IFormUIControl = function() {};
Mscrm.IFormUIControl.registerInterface("Mscrm.IFormUIControl");
Mscrm.FormFieldType = function() {};
Mscrm.FormFieldType.prototype = {
    FIELD_NOT_REQUIRED: 0,
    FIELD_REQUIRED: 2,
    FIELD_RECOMMENDED: 3
};
Mscrm.FormFieldType.registerEnum("Mscrm.FormFieldType", false);
Mscrm.KeyCode = function() {};
Mscrm.KeyCode.prototype = {
    KEY_6: 54,
    KEY_COMMA: 188,
    KEY_PERIOD: 190,
    KEY_BACKSPACE: 8,
    KEY_TAB: 9,
    KEY_VERTICAL_TAB: 11,
    KEY_ENTER: 13,
    KEY_SHIFT: 16,
    KEY_CTRL: 17,
    KEY_ALT: 18,
    KEY_ESC: 27,
    KEY_SPACE: 32,
    KEY_END: 35,
    KEY_HOME: 36,
    KEY_LEFT: 37,
    KEY_UP: 38,
    KEY_RIGHT: 39,
    KEY_DOWN: 40,
    KEY_DELETE: 46,
    KEY_DEL: 127,
    KEY_D: 68,
    KEY_F: 70,
    KEY_K: 75,
    KEY_P: 80,
    KEY_S: 83,
    KEY_U: 85,
    KEY_PLUS: 107,
    KEY_MINUS: 109,
    KEY_F2: 113,
    KEY_F4: 115,
    KEY_F9: 120,
    KEY_F10: 121,
    KEY_F12: 123
};
Mscrm.KeyCode.registerEnum("Mscrm.KeyCode", false);
Mscrm.SdkFormType = function() {};
Mscrm.SdkFormType.prototype = {
    undefinedFormType: 0,
    createForm: 1,
    updateForm: 2,
    readOnlyForm: 3,
    disabledForm: 4,
    bulkEditForm: 6
};
Mscrm.SdkFormType.registerEnum("Mscrm.SdkFormType", false);
Mscrm.XmlError = function() {};
Mscrm.XmlError.prototype = {
    ERROR_STOP: 0,
    ERROR_NONE: 1,
    ERROR_CONTINUE: 2
};
Mscrm.XmlError.registerEnum("Mscrm.XmlError", false);
Mscrm.IMenuItem = function() {};
Mscrm.IMenuItem.registerInterface("Mscrm.IMenuItem");
Mscrm.BrowserType = function() {};
Mscrm.BrowserType.prototype = {
    undefined: 0,
    IE: 1,
    firefox: 2,
    chrome: 3,
    safari: 4,
    opera: 5
};
Mscrm.BrowserType.registerEnum("Mscrm.BrowserType", false);
Mscrm.ICrmEventableComponent = function() {};
Mscrm.ICrmEventableComponent.registerInterface("Mscrm.ICrmEventableComponent");
Mscrm.ICrmDeferredActionHandler = function() {};
Mscrm.ICrmDeferredActionHandler.registerInterface("Mscrm.ICrmDeferredActionHandler");
Mscrm.ICrmResizeableControl = function() {};
Mscrm.ICrmResizeableControl.registerInterface("Mscrm.ICrmResizeableControl");
Mscrm.IRibbonSelectionControl = function() {};
Mscrm.IRibbonSelectionControl.registerInterface("Mscrm.IRibbonSelectionControl");
Mscrm.IRibbonSelectionControlProxy = function() {};
Mscrm.IRibbonSelectionControlProxy.registerInterface("Mscrm.IRibbonSelectionControlProxy");
Mscrm.IDataControl = function() {};
Mscrm.IDataControl.registerInterface("Mscrm.IDataControl");
Mscrm.IGridControl = function() {};
Mscrm.IGridControl.registerInterface("Mscrm.IGridControl");
Mscrm.EvalOperator = function() {};
Mscrm.EvalOperator.prototype = {
    none: 0,
    equals: 1,
    greater: 2,
    greaterEquals: 3,
    lower: 4,
    lowerEquals: 5
};
Mscrm.EvalOperator.registerEnum("Mscrm.EvalOperator", false);
Mscrm.PortNumber = function() {};
Mscrm.PortNumber.prototype = {
    invalid: -1,
    none: 0,
    ftp: 21,
    http: 80,
    https: 443,
    ftps: 990
};
Mscrm.PortNumber.registerEnum("Mscrm.PortNumber", false);
Mscrm.ICrmUIFormDataComponent = function() {};
Mscrm.ICrmUIFormDataComponent.registerInterface("Mscrm.ICrmUIFormDataComponent");
Mscrm.IValidationResult = function() {};
Mscrm.IValidationResult.registerInterface("Mscrm.IValidationResult");
Mscrm.ImageInfo = function() {};
Mscrm.ICommandData = function() {};
Mscrm.ICommandData.registerInterface("Mscrm.ICommandData");
Mscrm.IDebugTracer = function() {};
Mscrm.IDebugTracer.registerInterface("Mscrm.IDebugTracer");
Mscrm.TraceEntry = function(id, message, timestamp, url)
{
    this.id = id;
    this.message = message;
    this.timestamp = timestamp;
    this.url = url
};
Mscrm.CommandBarMode = function() {};
Mscrm.CommandBarMode.prototype = {
    chartPane: 0,
    chartDesigner: 1,
    normal: 2,
    all: 3,
    none: 4
};
Mscrm.CommandBarMode.registerEnum("Mscrm.CommandBarMode", false);
Mscrm.RibbonKeyPressParameters = function() {};
Mscrm.ReportingPreference = function() {};
Mscrm.ReportingPreference.prototype = {
    None: 0,
    PromptBeforeReport: 1,
    AutoReport: 2,
    NeverReport: 3
};
Mscrm.ReportingPreference.registerEnum("Mscrm.ReportingPreference", false);
Mscrm.CrashData = function() {};
Mscrm.ILocalStorage = function() {};
Mscrm.ILocalStorage.registerInterface("Mscrm.ILocalStorage");
Mscrm.IFeatureControlChecks = function() {};
Mscrm.IFeatureControlChecks.registerInterface("Mscrm.IFeatureControlChecks");
Mscrm.MobileExpressPage = function() {};
Mscrm.MobileExpressPage.prototype = {
    mobileExpressHome: 0,
    entityHome: 1,
    entityForm: 2,
    relatedEntity: 3,
    deleteForm: 4,
    signIn: 5,
    error: 6,
    editRecord: 7,
    createRecord: 8
};
Mscrm.MobileExpressPage.registerEnum("Mscrm.MobileExpressPage", false);
Mscrm.OnLoadDeferredExecutionType = function() {};
Mscrm.OnLoadDeferredExecutionType.prototype = {
    asap: 0,
    postViewportInitialization: 1,
    postInitialization: 2,
    postScriptLoad: 3
};
Mscrm.OnLoadDeferredExecutionType.registerEnum("Mscrm.OnLoadDeferredExecutionType", false);
Mscrm.ImageStripData = function() {};
Mscrm.ImageStripData.$9L = function()
{
    var $v_0 = {};
    $v_0["/_IMGS/AREA/18_HOME.GIF"] = "ms-crm-ImageStrip-18_home";
    $v_0["/_IMGS/ICO_18_4200.GIF"] = "ms-crm-ImageStrip-ico_18_4200";
    $v_0["/_IMGS/AREA/18_CALENDAR.GIF"] = "ms-crm-ImageStrip-18_calendar";
    $v_0["/_IMGS/AREA/18_IMPORT.GIF"] = "ms-crm-ImageStrip-18_import";
    $v_0["/_IMGS/DATA_MANAGEMENT.GIF"] = "ms-crm-ImageStrip-data_management";
    $v_0["/_IMGS/ICO_18_2020.GIF"] = "ms-crm-ImageStrip-ico_18_2020";
    $v_0["/_IMGS/ICO_18_127.GIF"] = "ms-crm-ImageStrip-ico_18_127";
    $v_0["/_IMGS/ICO_18_9100.GIF"] = "ms-crm-ImageStrip-ico_18_9100";
    $v_0["/_IMGS/ICO_18_132.GIF"] = "ms-crm-ImageStrip-ico_18_132";
    $v_0["/_IMGS/ICO_16_1082.GIF"] = "ms-crm-ImageStrip-ico_16_1082";
    $v_0["/_IMGS/ICO_16_4003.GIF"] = "ms-crm-ImageStrip-ico_16_4003";
    $v_0["/_IMGS/ICO_18_4.GIF"] = "ms-crm-ImageStrip-ico_18_4";
    $v_0["/_IMGS/ICO_18_3.GIF"] = "ms-crm-ImageStrip-ico_18_3";
    $v_0["/_IMGS/ICO_18_1.GIF"] = "ms-crm-ImageStrip-ico_18_1";
    $v_0["/_IMGS/ICO_18_2.GIF"] = "ms-crm-ImageStrip-ico_18_2";
    $v_0["/_IMGS/ICO_18_123.GIF"] = "ms-crm-ImageStrip-ico_18_123";
    $v_0["/_IMGS/ICO_18_1038.GIF"] = "ms-crm-ImageStrip-ico_18_1038";
    $v_0["/_IMGS/ICO_18_1084.GIF"] = "ms-crm-ImageStrip-ico_18_1084";
    $v_0["/_IMGS/ICO_18_1088.GIF"] = "ms-crm-ImageStrip-ico_18_1088";
    $v_0["/_IMGS/ICO_18_1090.GIF"] = "ms-crm-ImageStrip-ico_18_1090";
    $v_0["/_IMGS/ICO_18_4206.GIF"] = "ms-crm-ImageStrip-ico_18_4206";
    $v_0["/_IMGS/ICO_16_1024_PRODUCT.PNG"] = "ms-crm-ImageStrip-ico_16_1024_Product";
    $v_0["/_IMGS/ICO_16_1024_BUNDLE.PNG"] = "ms-crm-ImageStrip-ico_16_1024_Bundle";
    $v_0["/_IMGS/ICO_16_1024_PRODUCTFAMILY.PNG"] = "ms-crm-ImageStrip-ico_16_1024_ProductFamily";
    $v_0["/_IMGS/ICO_16_1024_KIT.GIF"] = "ms-crm-ImageStrip-ico_16_1024_Kit";
    $v_0["/_IMGS/ICO_32_1024_KIT.GIF"] = "ms-crm-ImageStrip-ico_32_1024_Kit";
    $v_0["/_IMGS/ICO_16_1048.GIF"] = "ms-crm-ImageStrip-ico_16_1048";
    $v_0["/_IMGS/ICO_16_1049.GIF"] = "ms-crm-ImageStrip-ico_16_1049";
    $v_0["/_IMGS/ICO_16_1333.GIF"] = "ms-crm-ImageStrip-ico_16_1333";
    $v_0["/_IMGS/ICO_16_1235.GIF"] = "ms-crm-ImageStrip-ico_16_1235";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1048.PNG"] = "ms-crm-ImageStrip-ico_fhe_1048";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1049.PNG"] = "ms-crm-ImageStrip-ico_fhe_1049";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1235.PNG"] = "ms-crm-ImageStrip-ico_fhe_1235";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1333.PNG"] = "ms-crm-ImageStrip-ico_fhe_1333";
    $v_0["/_IMGS/ICO_16_1048_INHERITED.PNG"] = "ms-crm-ImageStrip-ico_16_1048_inherited";
    $v_0["/_IMGS/ICO_32_1048_INHERITED.PNG"] = "ms-crm-ImageStrip-ico_32_1048_inherited";
    $v_0["/_IMGS/ICO_16_1048_OVERRIDDEN.PNG"] = "ms-crm-ImageStrip-ico_16_1048_overridden";
    $v_0["/_IMGS/ICO_32_1048_OVERRIDDEN.PNG"] = "ms-crm-ImageStrip-ico_32_1048_overridden";
    $v_0["/_IMGS/CUSTOMIZEPROPERTY_CUSTOMIZE_16.PNG"] = "ms-crm-ImageStrip-CustomizeProperty_Customize_16";
    $v_0["/_IMGS/ICO_16_1025.GIF"] = "ms-crm-ImageStrip-ico_16_1025";
    $v_0["/_IMGS/ICO_18_4300.GIF"] = "ms-crm-ImageStrip-ico_18_4300";
    $v_0["/_IMGS/ICO_18_4400.GIF"] = "ms-crm-ImageStrip-ico_18_4400";
    $v_0["/_IMGS/ICO_18_1024.GIF"] = "ms-crm-ImageStrip-ico_18_1024";
    $v_0["/_IMGS/ICO_16_4406.PNG"] = "ms-crm-ImageStrip-ico_16_4406";
    $v_0["/_IMGS/ICO_18_MINICAMPS.GIF"] = "ms-crm-ImageStrip-ico_18_minicamps";
    $v_0["/_IMGS/ICO_18_SERVICECAL.GIF"] = "ms-crm-ImageStrip-ico_18_servicecal";
    $v_0["/_IMGS/ICO_16_99.GIF"] = "ms-crm-ImageStrip-ico_16_99";
    $v_0["/_IMGS/ICO_18_112.GIF"] = "ms-crm-ImageStrip-ico_18_112";
    $v_0["/_IMGS/ICO_18_126.GIF"] = "ms-crm-ImageStrip-ico_18_126";
    $v_0["/_IMGS/ICO_18_1010.GIF"] = "ms-crm-ImageStrip-ico_18_1010";
    $v_0["/_IMGS/ICO_18_4001.GIF"] = "ms-crm-ImageStrip-ico_18_4001";
    $v_0["/_IMGS/ICO_16_4216.GIF"] = "ms-crm-ImageStrip-ico_16_4216";
    $v_0["/_IMGS/ICO_24_CAL_EXPAND.GIF"] = "ms-crm-ImageStrip-ico_24_cal_expand";
    $v_0["/_IMGS/ICO_24_CAL_COLLAPSE.GIF"] = "ms-crm-ImageStrip-ico_24_cal_collapse";
    $v_0["/_IMGS/ICO_16_CALDAY.GIF"] = "ms-crm-ImageStrip-ico_16_calday";
    $v_0["/_IMGS/ICO_16_CALWEEK.GIF"] = "ms-crm-ImageStrip-ico_16_calweek";
    $v_0["/_IMGS/ICO_16_CALMONTH.GIF"] = "ms-crm-ImageStrip-ico_16_calmonth";
    $v_0["/_IMGS/ICO_24_CALTODAY_MENU.GIF"] = "ms-crm-ImageStrip-ico_24_caltoday_menu";
    $v_0["/_IMGS/ICO_16_CALTODAY.GIF"] = "ms-crm-ImageStrip-ico_16_caltoday";
    $v_0["/_IMGS/APPTBOOK/UP.GIF"] = "ms-crm-ImageStrip-apptBookUp";
    $v_0["/_IMGS/APPTBOOK/DOWN.GIF"] = "ms-crm-ImageStrip-apptBookDown";
    $v_0["/_IMGS/APPTBOOK/PLUS.GIF"] = "ms-crm-ImageStrip-apptBookPlus";
    $v_0["/_IMGS/APPTBOOK/MINUS.GIF"] = "ms-crm-ImageStrip-apptBookMinus";
    $v_0["/_IMGS/ICO_16_4000.GIF"] = "ms-crm-ImageStrip-ico_16_4000";
    $v_0["/_IMGS/ZOOM/ZOOMPLUSOVER.GIF"] = "ms-crm-ImageStrip-zoomPlusOver";
    $v_0["/_IMGS/ZOOM/ZOOMPLUS.GIF"] = "ms-crm-ImageStrip-zoomPlus";
    $v_0["/_IMGS/ZOOM/ZOOMMINUSOVER.GIF"] = "ms-crm-ImageStrip-zoomMinusOver";
    $v_0["/_IMGS/ZOOM/ZOOMMINUS.GIF"] = "ms-crm-ImageStrip-zoomMinus";
    $v_0["/_IMGS/ZOOM/DOTSELECTED.GIF"] = "ms-crm-ImageStrip-dotSelected";
    $v_0["/_IMGS/ZOOM/DOTUNSELECTED.GIF"] = "ms-crm-ImageStrip-dotUnselected";
    $v_0["/_IMGS/ICO_16_4212.GIF"] = "ms-crm-ImageStrip-ico_16_4212";
    $v_0["/_IMGS/ICO_16_4204.GIF"] = "ms-crm-ImageStrip-ico_16_4204";
    $v_0["/_IMGS/ICO_16_4210.GIF"] = "ms-crm-ImageStrip-ico_16_4210";
    $v_0["/_IMGS/ICO_16_4202.GIF"] = "ms-crm-ImageStrip-ico_16_4202";
    $v_0["/_IMGS/ICO_16_4207.GIF"] = "ms-crm-ImageStrip-ico_16_4207";
    $v_0["/_IMGS/ICO_16_4201.GIF"] = "ms-crm-ImageStrip-ico_16_4201";
    $v_0["/_IMGS/ICO_16_4214.GIF"] = "ms-crm-ImageStrip-ico_16_4214";
    $v_0["/_IMGS/ICO_16_4401.GIF"] = "ms-crm-ImageStrip-ico_16_4401";
    $v_0["/_IMGS/ICO_16_1120.GIF"] = "ms-crm-ImageStrip-ico_16_1120";
    $v_0["/_IMGS/ICO_16_1130.GIF"] = "ms-crm-ImageStrip-ico_16_1130";
    $v_0["/_IMGS/ICO_18_129.GIF"] = "ms-crm-ImageStrip-ico_18_129";
    $v_0["/_IMGS/ICO_16_SALES.GIF"] = "ms-crm-ImageStrip-ico_16_sales";
    $v_0["/_IMGS/ICO_16_MARKETING.GIF"] = "ms-crm-ImageStrip-ico_16_marketing";
    $v_0["/_IMGS/AREA/18_SERVICE.GIF"] = "ms-crm-ImageStrip-18_service";
    $v_0["/_IMGS/AREA/18_SETTINGS.GIF"] = "ms-crm-ImageStrip-18_settings";
    $v_0["/_IMGS/ICO_18_ADMINISTRATION.GIF"] = "ms-crm-ImageStrip-ico_18_administration";
    $v_0["/_IMGS/ICO_18_BUSMANAGEMENT.GIF"] = "ms-crm-ImageStrip-ico_18_busmanagement";
    $v_0["/_IMGS/AREA/18_SYSCUST.GIF"] = "ms-crm-ImageStrip-18_syscust";
    $v_0["/_IMGS/SYSTEMCUSTOMIZATION/ICO_18_MARKETPLACE.PNG"] = "ms-crm-ImageStrip-ico_18_marketplace";
    $v_0["/_IMGS/ICO_INTERNET_LEADS.GIF"] = "ms-crm-ImageStrip-ico_internet_leads";
    $v_0["/_IMGS/ICO_LANDING_PAGES.GIF"] = "ms-crm-ImageStrip-ico_landing_pages";
    $v_0["/_IMGS/ICO_18_TEMPLATES.GIF"] = "ms-crm-ImageStrip-ico_18_templates";
    $v_0["/_IMGS/ICO_18_PRODUCTCATALOG.GIF"] = "ms-crm-ImageStrip-ico_18_productcatalog";
    $v_0["/_IMGS/ICO_18_4703.PNG"] = "ms-crm-ImageStrip-ico_18_4703";
    $v_0["/_IMGS/ICO_18_4703.GIF"] = "ms-crm-ImageStrip-ico_18_4703_g";
    $v_0["/_IMGS/ICO_18_DATAMANAGEMENT.GIF"] = "ms-crm-ImageStrip-ico_18_datamanagement";
    $v_0["/_IMGS/ICO_18_4700.GIF"] = "ms-crm-ImageStrip-ico_18_4700";
    $v_0["/_IMGS/ICO_16_1200.PNG"] = "ms-crm-ImageStrip-ico_16_1200";
    $v_0["/_IMGS/ICO_16_1201.PNG"] = "ms-crm-ImageStrip-ico_16_1201";
    $v_0["/_IMGS/ICO_18_1200.PNG"] = "ms-crm-ImageStrip-ico_18_1200";
    $v_0["/_IMGS/ICO_18_1201.PNG"] = "ms-crm-ImageStrip-ico_18_1201";
    $v_0["/_IMGS/ICO_18_1200.GIF"] = "ms-crm-ImageStrip-ico_18_1200_g";
    $v_0["/_IMGS/ICO_18_1201.GIF"] = "ms-crm-ImageStrip-ico_18_1201_g";
    $v_0["/_IMGS/ICO_16_9605.GIF"] = "ms-crm-ImageStrip-ico_16_9605";
    $v_0["/_IMGS/ICO_16_9606.GIF"] = "ms-crm-ImageStrip-ico_16_9606";
    $v_0["/_IMGS/ICO_18_9605.GIF"] = "ms-crm-ImageStrip-ico_18_9605";
    $v_0["/_IMGS/ICO_18_9606.GIF"] = "ms-crm-ImageStrip-ico_18_9606";
    $v_0["/_IMGS/ICO_16_ADVANCEDFIND.GIF"] = "ms-crm-ImageStrip-ico_16_AdvancedFind";
    $v_0["/_IMGS/ICO/16_HELP.GIF"] = "ms-crm-ImageStrip-16_help";
    $v_0["/_IMGS/ICO/17_HELP.PNG"] = "ms-crm-ImageStrip-17_help";
    $v_0["/_IMGS/ICO/17_HELP_RTL.PNG"] = "ms-crm-ImageStrip-17_help_rtl";
    $v_0["/_IMGS/PLACEHOLDERS/PLACEHOLDER_24.GIF"] = "ms-crm-ImageStrip-placeholder_24";
    $v_0["/_IMGS/PLACEHOLDERS/FORMHEADER_PLACEHOLDER_35X26.PNG"] = "ms-crm-ImageStrip-formheader_placeholder_35x26";
    $v_0["/_IMGS/ICO_16_1111.PNG"] = "ms-crm-ImageStrip-ico_16_1111";
    $v_0["/_IMGS/ICO_16_1112.PNG"] = "ms-crm-ImageStrip-ico_16_1112";
    $v_0["/_IMGS/ICO_18_1071.GIF"] = "ms-crm-ImageStrip-ico_18_1071";
    $v_0["/_IMGS/ICO_18_3234.GIF"] = "ms-crm-ImageStrip-ico_18_3234";
    $v_0["/_IMGS/ICO_18_9005.GIF"] = "ms-crm-ImageStrip-ico_18_9005";
    $v_0["/_IMGS/ICO_18_4567.GIF"] = "ms-crm-ImageStrip-ico_18_4567";
    $v_0["/_IMGS/ICO_18_4710.PNG"] = "ms-crm-ImageStrip-ico_18_4710";
    $v_0["/_IMGS/ICO_18_4710.GIF"] = "ms-crm-ImageStrip-ico_18_4710_g";
    $v_0["/_IMGS/ICO_16_9105.GIF"] = "ms-crm-ImageStrip-ico_16_9105";
    $v_0["/_IMGS/ICO_18_4502.GIF"] = "ms-crm-ImageStrip-ico_18_4502";
    $v_0["/_IMGS/ICO_16_1.GIF"] = "ms-crm-ImageStrip-ico_16_1";
    $v_0["/_IMGS/ICO_16_2.GIF"] = "ms-crm-ImageStrip-ico_16_2";
    $v_0["/_IMGS/ICO_16_3.GIF"] = "ms-crm-ImageStrip-ico_16_3";
    $v_0["/_IMGS/ICO_16_8.GIF"] = "ms-crm-ImageStrip-ico_16_8";
    $v_0["/_IMGS/ICO_18_ACT.GIF"] = "ms-crm-ImageStrip-ico_18_act";
    $v_0["/_IMGS/ICO_18_9700.GIF"] = "ms-crm-ImageStrip-ico_18_9700";
    $v_0["/_IMGS/ICO_18_99.GIF"] = "ms-crm-ImageStrip-ico_18_99";
    $v_0["/_IMGS/ICO_18_HISTORY.GIF"] = "ms-crm-ImageStrip-ico_18_history";
    $v_0["/_IMGS/AREA/18_SUBACCOUNTS.GIF"] = "ms-crm-ImageStrip-18_subAccounts";
    $v_0["/_IMGS/ICO_LRG_1.GIF"] = "ms-crm-ImageStrip-ico_lrg_1";
    $v_0["/_IMGS/ICO_16_4230.GIF"] = "ms-crm-ImageStrip-ico_16_4230";
    $v_0["/_IMGS/VERTICALGRIPPER.GIF"] = "ms-crm-ImageStrip-verticalGripper";
    $v_0["/_IMGS/HORIZONTALGRIPPER.GIF"] = "ms-crm-ImageStrip-horizontalGripper";
    $v_0["/_IMGS/NAVUP.PNG"] = "ms-crm-ImageStrip-navup";
    $v_0["/_IMGS/NAVDOWN.PNG"] = "ms-crm-ImageStrip-navdown";
    $v_0["/_IMGS/NAVLEFT.PNG"] = "ms-crm-ImageStrip-navLeft";
    $v_0["/_IMGS/NAVRIGHT.PNG"] = "ms-crm-ImageStrip-navRight";
    $v_0["/_IMGS/MESSAGEBAR/MSGBAR_BORDER.PNG"] = "ms-crm-ImageStrip-msgbar_border";
    $v_0["/_IMGS/MESSAGEBAR/MSGBAR_ICN_INFO.PNG"] = "ms-crm-ImageStrip-msgbar_icn_info";
    $v_0["/_IMGS/MESSAGEBAR/MSGBAR_CLOSE_BUTTON_CLICK.PNG"] = "ms-crm-ImageStrip-msgbar_close_button_click";
    $v_0["/_IMGS/MESSAGEBAR/MSGBAR_CLOSE_BUTTON_COLD.PNG"] = "ms-crm-ImageStrip-msgbar_close_button_cold";
    $v_0["/_IMGS/MESSAGEBAR/MSGBAR_CLOSE_BUTTON_HOVER.PNG"] = "ms-crm-ImageStrip-msgbar_close_button_hover";
    $v_0["/_IMGS/MNUDOWN.GIF"] = "ms-crm-ImageStrip-mnuDown";
    $v_0["/_IMGS/MNU_RARROW.GIF"] = "ms-crm-ImageStrip-mnu_rArrow";
    $v_0["/_IMGS/MNU_HSPACERGRID.GIF"] = "ms-crm-ImageStrip-mnu_hSpacerGrid";
    $v_0["/_IMGS/THEME/OUTLOOK12BLACK/MNU_HSPACERGRID.PNG"] = "ms-crm-ImageStrip-Outlook12Black_mnu_hSpacerGrid";
    $v_0["/_IMGS/THEME/OUTLOOK12BLUE/MNU_HSPACERGRID.PNG"] = "ms-crm-ImageStrip-Outlook12Blue_mnu_hSpacerGrid";
    $v_0["/_IMGS/THEME/OUTLOOK12SILVER/MNU_HSPACERGRID.PNG"] = "ms-crm-ImageStrip-Outlook12Silver_mnu_hSpacerGrid";
    $v_0["/_IMGS/THEME/OUTLOOK14BLACK/MNU_HSPACERGRID.PNG"] = "ms-crm-ImageStrip-Outlook14Black_mnu_hSpacerGrid";
    $v_0["/_IMGS/THEME/OUTLOOK14BLUE/MNU_HSPACERGRID.PNG"] = "ms-crm-ImageStrip-Outlook14Blue_mnu_hSpacerGrid";
    $v_0["/_IMGS/THEME/OUTLOOK14SILVER/MNU_HSPACERGRID.PNG"] = "ms-crm-ImageStrip-Outlook14Silver_mnu_hSpacerGrid";
    $v_0["/_IMGS/THEME/OUTLOOK15BLACK/MNU_HSPACERGRID.PNG"] = "ms-crm-ImageStrip-Outlook15Black_mnu_hSpacerGrid";
    $v_0["/_IMGS/THEME/OUTLOOK15BLUE/MNU_HSPACERGRID.PNG"] = "ms-crm-ImageStrip-Outlook15Blue_mnu_hSpacerGrid";
    $v_0["/_IMGS/THEME/OUTLOOK15SILVER/MNU_HSPACERGRID.PNG"] = "ms-crm-ImageStrip-Outlook15Silver_mnu_hSpacerGrid";
    $v_0["/_IMGS/MNU_HSPACER.GIF"] = "ms-crm-ImageStrip-mnu_hSpacer";
    $v_0["/_IMGS/THEME/OUTLOOK12BLACK/MNU_HSPACER.PNG"] = "ms-crm-ImageStrip-Outlook12Black_mnu_hSpacer";
    $v_0["/_IMGS/THEME/OUTLOOK12BLUE/MNU_HSPACER.PNG"] = "ms-crm-ImageStrip-Outlook12Blue_mnu_hSpacer";
    $v_0["/_IMGS/THEME/OUTLOOK12SILVER/MNU_HSPACER.PNG"] = "ms-crm-ImageStrip-Outlook12Silver_mnu_hSpacer";
    $v_0["/_IMGS/THEME/OUTLOOK14BLACK/MNU_HSPACER.PNG"] = "ms-crm-ImageStrip-Outlook14Black_mnu_hSpacer";
    $v_0["/_IMGS/THEME/OUTLOOK14BLUE/MNU_HSPACER.PNG"] = "ms-crm-ImageStrip-Outlook14Blue_mnu_hSpacer";
    $v_0["/_IMGS/THEME/OUTLOOK14SILVER/MNU_HSPACER.PNG"] = "ms-crm-ImageStrip-Outlook14Silver_mnu_hSpacer";
    $v_0["/_IMGS/THEME/OUTLOOK15BLACK/MNU_HSPACER.PNG"] = "ms-crm-ImageStrip-Outlook15Black_mnu_hSpacer";
    $v_0["/_IMGS/THEME/OUTLOOK15BLUE/MNU_HSPACER.PNG"] = "ms-crm-ImageStrip-Outlook15Blue_mnu_hSpacer";
    $v_0["/_IMGS/THEME/OUTLOOK15SILVER/MNU_HSPACER.PNG"] = "ms-crm-ImageStrip-Outlook15Silver_mnu_hSpacer";
    $v_0["/_IMGS/RECENTLYVIEWED/HOME.PNG"] = "ms-crm-ImageStrip-Home";
    $v_0["/_IMGS/RECENTLYVIEWED/RECENT.PNG"] = "ms-crm-ImageStrip-Recent";
    $v_0["/_IMGS/DEFAULTSITEMAPAREA_24X24.GIF"] = "ms-crm-ImageStrip-DefaultSitemapArea_24x24";
    $v_0["/_IMGS/WORKPLACE_24X24.GIF"] = "ms-crm-ImageStrip-workplace_24x24";
    $v_0["/_IMGS/SALES_24X24.GIF"] = "ms-crm-ImageStrip-sales_24x24";
    $v_0["/_IMGS/MARKETING_24X24.GIF"] = "ms-crm-ImageStrip-marketing_24x24";
    $v_0["/_IMGS/SERVICES_24X24.GIF"] = "ms-crm-ImageStrip-services_24x24";
    $v_0["/_IMGS/SETTINGS_24X24.GIF"] = "ms-crm-ImageStrip-settings_24x24";
    $v_0["/_IMGS/RESOURCECENTER_24X24.GIF"] = "ms-crm-ImageStrip-resourcecenter_24x24";
    $v_0["/_IMGS/RIBBON/ARROW_RIBBONCOLLAPSE.PNG"] = "ms-crm-ImageStrip-arrow_ribboncollapse";
    $v_0["/_IMGS/RIBBON/ARROW_RIBBONEXPAND.PNG"] = "ms-crm-ImageStrip-arrow_ribbonexpand";
    $v_0["/_IMGS/QFIND.GIF"] = "ms-crm-ImageStrip-qfind";
    $v_0["/_IMGS/SEARCH.GIF"] = "ms-crm-ImageStrip-search";
    $v_0["/_IMGS/SEARCHHOVER.GIF"] = "ms-crm-ImageStrip-searchhover";
    $v_0["/_IMGS/SEARCHDOWN.GIF"] = "ms-crm-ImageStrip-searchdown";
    $v_0["/_IMGS/SEARCHCLEAR.GIF"] = "ms-crm-ImageStrip-searchclear";
    $v_0["/_IMGS/SEARCHCLEARHOVER.GIF"] = "ms-crm-ImageStrip-searchclearhover";
    $v_0["/_IMGS/SEARCHCLEARDOWN.GIF"] = "ms-crm-ImageStrip-searchcleardown";
    $v_0["/_IMGS/HELPVISOR/VISOROPEN.PNG"] = "ms-crm-ImageStrip-visoropen";
    $v_0["/_IMGS/HELPVISOR/VISORCLOSE.PNG"] = "ms-crm-ImageStrip-visorclose";
    $v_0["/_IMGS/HELPVISOR/VISORCLOSEHOVER.PNG"] = "ms-crm-ImageStrip-visorclosehover";
    $v_0["/_IMGS/HELPVISOR/VISOROPENHOVER.PNG"] = "ms-crm-ImageStrip-visoropenhover";
    $v_0["/_IMGS/BTN_DIS_LOOKUP.PNG"] = "ms-crm-ImageStrip-btn_dis_lookup";
    $v_0["/_IMGS/BTN_OFF_LOOKUP.PNG"] = "ms-crm-ImageStrip-btn_off_lookup";
    $v_0["/_IMGS/SEARCH_DISABLE.PNG"] = "ms-crm-ImageStrip-search_disable";
    $v_0["/_IMGS/SEARCH_NORMAL.GIF"] = "ms-crm-ImageStrip-search_normal";
    $v_0["/_IMGS/ERROR/NOTIF_ICN_INFO16.PNG"] = "ms-crm-ImageStrip-notif_icn_info16";
    $v_0["/_IMGS/ERROR/NOTIF_ICN_WARN16.PNG"] = "ms-crm-ImageStrip-notif_icn_warn16";
    $v_0["/_IMGS/ERROR/NOTIF_ICN_CRIT16.PNG"] = "ms-crm-ImageStrip-notif_icn_crit16";
    $v_0["/_IMGS/ERROR/NOTIF_ICN_ALERT16.PNG"] = "ms-crm-ImageStrip-notif_icn_alert16";
    $v_0["/_IMGS/FRM_REQUIRED.GIF"] = "ms-crm-ImageStrip-frm_required";
    $v_0["/_IMGS/FRM_RECOMMENDED.GIF"] = "ms-crm-ImageStrip-frm_recommended";
    $v_0["/_IMGS/RIGHT.GIF"] = "ms-crm-ImageStrip-right";
    $v_0["/_IMGS/DOWN.GIF"] = "ms-crm-ImageStrip-down";
    $v_0["/_IMGS/TAB_SECTION_RIGHT.PNG"] = "ms-crm-ImageStrip-tab_right";
    $v_0["/_IMGS/TAB_SECTION_DOWN.PNG"] = "ms-crm-ImageStrip-tab_down";
    $v_0["/_IMGS/TAB_SECTION_LEFT_RTL.PNG"] = "ms-crm-ImageStrip-tab_rightRTL";
    $v_0["/_IMGS/TAB_SECTION_DOWN_RTL.PNG"] = "ms-crm-ImageStrip-tab_downRTL";
    $v_0["/_IMGS/BTN_DIS_CAL.GIF"] = "ms-crm-ImageStrip-btn_dis_cal";
    $v_0["/_IMGS/BTN_OFF_CAL.GIF"] = "ms-crm-ImageStrip-btn_off_cal";
    $v_0["/_IMGS/RECNAV/VERTICAL_LINE_TRANSPARENT.PNG"] = "ms-crm-ImageStrip-vertical_line_transparent";
    $v_0["/_IMGS/RECNAV/DEFAULT_LEFTCAP.PNG"] = "ms-crm-ImageStrip-default_leftcap";
    $v_0["/_IMGS/RECNAV/RIGHTCAP.PNG"] = "ms-crm-ImageStrip-rightcap";
    $v_0["/_IMGS/RECNAV/UP_DISABLED.PNG"] = "ms-crm-ImageStrip-Up_Disabled";
    $v_0["/_IMGS/RECNAV/DOWN_DISABLED.PNG"] = "ms-crm-ImageStrip-Down_Disabled";
    $v_0["/_IMGS/RECNAV/UP_DISABLED_PROXY.PNG"] = "ms-crm-ImageStrip-Up_Disabled_proxy";
    $v_0["/_IMGS/RECNAV/DOWN_DISABLED_PROXY.PNG"] = "ms-crm-ImageStrip-Down_Disabled_proxy";
    $v_0["/_IMGS/RECNAV/DISABLED_ARROW.PNG"] = "ms-crm-ImageStrip-disabled_arrow";
    $v_0["/_IMGS/RECNAV/UP_ENABLED.PNG"] = "ms-crm-ImageStrip-Up_Enabled";
    $v_0["/_IMGS/RECNAV/DOWN_ENABLED.PNG"] = "ms-crm-ImageStrip-Down_Enabled";
    $v_0["/_IMGS/RECNAV/UP_ENABLED_PROXY.PNG"] = "ms-crm-ImageStrip-Up_Enabled_proxy";
    $v_0["/_IMGS/RECNAV/DOWN_ENABLED_PROXY.PNG"] = "ms-crm-ImageStrip-Down_Enabled_proxy";
    $v_0["/_IMGS/RECNAV/ENABLED_ARROW.PNG"] = "ms-crm-ImageStrip-enabled_arrow";
    $v_0["/_IMGS/RECNAV/HOVER_LEFTCAP.PNG"] = "ms-crm-ImageStrip-hover_leftcap";
    $v_0["/_IMGS/RECNAV/HOVER_RIGHTCAP.PNG"] = "ms-crm-ImageStrip-hover_rightcap";
    $v_0["/_IMGS/RECNAV/SELECTED_LEFTCAP.PNG"] = "ms-crm-ImageStrip-selected_leftcap";
    $v_0["/_IMGS/ENLARGE.PNG"] = "ms-crm-ImageStrip-enlarge";
    $v_0["/_IMGS/POPOUT.PNG"] = "ms-crm-ImageStrip-popout";
    $v_0["/_IMGS/HIERARCHY.PNG"] = "ms-crm-ImageStrip-hierarchy";
    $v_0["/_IMGS/HIERARCHYTOOLBAR.PNG"] = "ms-crm-ImageStrip-hierarchytoolbar";
    $v_0["/_IMGS/HIERACHY_HOVER_16.PNG"] = "ms-crm-ImageStrip-Hierachy_Hover_16";
    $v_0["/_IMGS/OPENVIEW.PNG"] = "ms-crm-ImageStrip-openview";
    $v_0["/_IMGS/REFRESH.PNG"] = "ms-crm-ImageStrip-refresh";
    $v_0["/_IMGS/CLOSE.PNG"] = "ms-crm-ImageStrip-close";
    $v_0["/_IMGS/MULTISELECT/MULTISELECT_CHECKED.PNG"] = "ms-crm-ImageStrip-multiselect_checked";
    $v_0["/_IMGS/MULTISELECT/MULTISELECT_UNCHECKED.PNG"] = "ms-crm-ImageStrip-multiselect_unchecked";
    $v_0["/_IMGS/MULTISELECT/MULTISELECT_BTN_ON.GIF"] = "ms-crm-ImageStrip-multiselect_btn_on";
    $v_0["/_IMGS/MULTISELECT/MULTISELECT_BTN_DIS.GIF"] = "ms-crm-ImageStrip-multiselect_btn_dis";
    $v_0["/_IMGS/YAMMER/YAMMER.PNG"] = "ms-crm-ImageStrip-yammer";
    $v_0["/_IMGS/TIMERCONTROL/TIMER_EXPIRED_16.PNG"] = "ms-crm-ImageStrip-timercontrol_expired";
    $v_0["/_IMGS/TIMERCONTROL/TIMER_NEARING_EXPIRATION_16.PNG"] = "ms-crm-ImageStrip-timercontrol_near_expiration";
    $v_0["/_IMGS/TIMERCONTROL/TIMER_SUCCESS_16.PNG"] = "ms-crm-ImageStrip-timercontrol_success";
    $v_0["/_IMGS/TIMERCONTROL/TIMER_32.PNG"] = "ms-crm-ImageStrip-Timer_32";
    $v_0["/_IMGS/TIMERCONTROL/TIMER_16.PNG"] = "ms-crm-ImageStrip-Timer_16";
    $v_0["/_IMGS/TILEVIEW/MORE_UP.PNG"] = "ms-crm-ImageStrip-more_up";
    $v_0["/_IMGS/TILEVIEW/MORE_RIGHT.PNG"] = "ms-crm-ImageStrip-more_right";
    $v_0["/_IMGS/TILEVIEW/MORE_DOWN.PNG"] = "ms-crm-ImageStrip-more_down";
    $v_0["/_IMGS/TILEVIEW/MORE_LEFT.PNG"] = "ms-crm-ImageStrip-more_left";
    $v_0["/_IMGS/TILEVIEW/MORE_UP_HOVER.PNG"] = "ms-crm-ImageStrip-more_up_hover";
    $v_0["/_IMGS/TILEVIEW/MORE_RIGHT_HOVER.PNG"] = "ms-crm-ImageStrip-more_right_hover";
    $v_0["/_IMGS/TILEVIEW/MORE_DOWN_HOVER.PNG"] = "ms-crm-ImageStrip-more_down_hover";
    $v_0["/_IMGS/TILEVIEW/MORE_LEFT_HOVER.PNG"] = "ms-crm-ImageStrip-more_left_hover";
    $v_0["/_IMGS/TILEVIEW/MORE_UP_HC.PNG"] = "ms-crm-ImageStrip-more_up_HC";
    $v_0["/_IMGS/TILEVIEW/MORE_RIGHT_HC.PNG"] = "ms-crm-ImageStrip-more_right_HC";
    $v_0["/_IMGS/TILEVIEW/MORE_DOWN_HC.PNG"] = "ms-crm-ImageStrip-more_down_HC";
    $v_0["/_IMGS/TILEVIEW/MORE_LEFT_HC.PNG"] = "ms-crm-ImageStrip-more_left_HC";
    $v_0["/_IMGS/HIERARCHYSPLITTERGRIPPER.GIF"] = "ms-crm-ImageStrip-hierarchySplitterGripper";
    $v_0["/_IMGS/TREEVIEWCONTROL/UP_ARROW.PNG"] = "ms-crm-ImageStrip-up_arrow";
    $v_0["/_IMGS/TREEVIEWCONTROL/UP_ARROW_HC.PNG"] = "ms-crm-ImageStrip-up_arrow_HC";
    $v_0["/_IMGS/TREEVIEWCONTROL/UP_ARROW_HOVER.PNG"] = "ms-crm-ImageStrip-up_arrow_hover";
    $v_0["/_IMGS/TREEVIEWCONTROL/TREE_HOME.PNG"] = "ms-crm-ImageStrip-tree_home";
    $v_0["/_IMGS/TREEVIEWCONTROL/TREE_HOME_HC.PNG"] = "ms-crm-ImageStrip-tree_home_HC";
    $v_0["/_IMGS/TREEVIEWCONTROL/TREE_HOME_HOVER.PNG"] = "ms-crm-ImageStrip-tree_home_hover";
    $v_0["/_IMGS/TREEVIEWCONTROL/DRILL_DOWN_FOR_TREE_CONTROL.PNG"] = "ms-crm-ImageStrip-drill_down_for_tree_control";
    $v_0["/_IMGS/TREEVIEWCONTROL/DRILL_DOWN_FOR_TREE_CONTROL_HC.PNG"] = "ms-crm-ImageStrip-drill_down_for_tree_control_HC";
    $v_0["/_IMGS/TREEVIEWCONTROL/DRILL_DOWN_FOR_TREE_CONTROL_HOVER.PNG"] = "ms-crm-ImageStrip-drill_down_for_tree_control_hover";
    $v_0["/_IMGS/MORE_16.PNG"] = "ms-crm-ImageStrip-More_16";
    $v_0["/_IMGS/GRID/GRID_REFRESH.GIF"] = "ms-crm-ImageStrip-grid_refresh";
    $v_0["/_IMGS/GRID/GRID_REFRESH_HOVER.GIF"] = "ms-crm-ImageStrip-grid_refresh_hover";
    $v_0["/_IMGS/GRID/GRID_FILTER.PNG"] = "ms-crm-ImageStrip-grid_filter";
    $v_0["/_IMGS/GRID/PINNED_16.PNG"] = "ms-crm-ImageStrip-pinned_16";
    $v_0["/_IMGS/GRID/PIN_HOVER_16.PNG"] = "ms-crm-ImageStrip-pin_hover_16";
    $v_0["/_IMGS/GRID/PIN_16.PNG"] = "ms-crm-ImageStrip-pin_16";
    $v_0["/_IMGS/GRID/PINNED_16_RTL.PNG"] = "ms-crm-ImageStrip-pinned_16_RTL";
    $v_0["/_IMGS/GRID/PIN_HOVER_16_RTL.PNG"] = "ms-crm-ImageStrip-pin_hover_16_RTL";
    $v_0["/_IMGS/GRID/PIN_16_RTL.PNG"] = "ms-crm-ImageStrip-pin_16_RTL";
    $v_0["/_IMGS/GRID/GRID_FILTER_HOVER.PNG"] = "ms-crm-ImageStrip-grid_filter_hover";
    $v_0["/_IMGS/GRID/BAR_LINE.GIF"] = "ms-crm-ImageStrip-bar_line";
    $v_0["/_IMGS/GRID/BAR_UP.GIF"] = "ms-crm-ImageStrip-bar_up";
    $v_0["/_IMGS/GRID/SORTING_UP.PNG"] = "ms-crm-ImageStrip-sorting_up";
    $v_0["/_IMGS/GRID/SORTING_DOWN.PNG"] = "ms-crm-ImageStrip-sorting_down";
    $v_0["/_IMGS/GRID/RESIZE.GIF"] = "ms-crm-ImageStrip-resize";
    $v_0["/_IMGS/GRID/PAGE_FL0.GIF"] = "ms-crm-ImageStrip-page_FL0";
    $v_0["/_IMGS/GRID/PAGE_L0.GIF"] = "ms-crm-ImageStrip-page_L0";
    $v_0["/_IMGS/GRID/PAGE_R0.GIF"] = "ms-crm-ImageStrip-page_R0";
    $v_0["/_IMGS/ICO/16_EXCEL.GIF"] = "ms-crm-ImageStrip-16_excel";
    $v_0["/_IMGS/ICO/16_PRINT.GIF"] = "ms-crm-ImageStrip-16_print";
    $v_0["/_IMGS/ICO_16_ASSIGN.GIF"] = "ms-crm-ImageStrip-ico_16_assign";
    $v_0["/_IMGS/ICO_16_DELETE.GIF"] = "ms-crm-ImageStrip-ico_16_delete";
    $v_0["/_IMGS/GRID/RESET.PNG"] = "ms-crm-ImageStrip-reset";
    $v_0["/_IMGS/GRID/DISABLERESET.PNG"] = "ms-crm-ImageStrip-disablereset";
    $v_0["/_IMGS/GRID/ASC.PNG"] = "ms-crm-ImageStrip-asc";
    $v_0["/_IMGS/GRID/DESC.PNG"] = "ms-crm-ImageStrip-desc";
    $v_0["/_IMGS/GRID/R.GIF"] = "ms-crm-ImageStrip-r";
    $v_0["/_IMGS/GRID/D.GIF"] = "ms-crm-ImageStrip-d";
    $v_0["/_IMGS/GRID/ROW_SELECTED.GIF"] = "ms-crm-ImageStrip-row_selected";
    $v_0["/_IMGS/DROPDOWN.PNG"] = "ms-crm-ImageStrip-dropdown";
    $v_0["/_IMGS/DROPDOWN_WFILTER.PNG"] = "ms-crm-ImageStrip-dropdown_wfilter";
    $v_0["/_IMGS/GRID/STRIPDIVIDER.GIF"] = "ms-crm-ImageStrip-stripDivider";
    $v_0["/_IMGS/GRID/DROPDOWN_ARROW.PNG"] = "ms-crm-ImageStrip-Dropdown_Arrow";
    $v_0["/_IMGS/GRID/EDITRULE_16.PNG"] = "ms-crm-ImageStrip-editrulebutton";
    $v_0["/_IMGS/GRID/PAGE_FL1.GIF"] = "ms-crm-ImageStrip-page_FL1";
    $v_0["/_IMGS/GRID/PAGE_L1.GIF"] = "ms-crm-ImageStrip-page_L1";
    $v_0["/_IMGS/GRID/PAGE_R1.GIF"] = "ms-crm-ImageStrip-page_R1";
    $v_0["/_IMGS/GRID/ADD_16_NEW.PNG"] = "ms-crm-ImageStrip-addButton";
    $v_0["/_IMGS/GRID/ADD_DISABLE_16.PNG"] = "ms-crm-ImageStrip-addButtonDisable";
    $v_0["/_IMGS/GRID/ADD_HOVER_16_NEW.PNG"] = "ms-crm-ImageStrip-addButtonHover";
    $v_0["/_IMGS/GRID/OPENASSOCIATEDGRIDVIEW_HOVER_16_NEW.PNG"] = "ms-crm-ImageStrip-openassociatedgridviewhover";
    $v_0["/_IMGS/GRID/ACTIONS_DELETE_16.PNG"] = "ms-crm-ImageStrip-deleteButton";
    $v_0["/_IMGS/GRID/ACTIONS_DELETE_BIN_16.PNG"] = "ms-crm-ImageStrip-deleteButtonBin";
    $v_0["/_IMGS/GRID/ACTIVATE_16.PNG"] = "ms-crm-ImageStrip-activateButton";
    $v_0["/_IMGS/GRID/ACTIONS_HOVER_DELETE_16.PNG"] = "ms-crm-ImageStrip-deleteButtonHover";
    $v_0["/_IMGS/GRID/CHECKBOX.PNG"] = "ms-crm-ImageStrip-checkbox";
    $v_0["/_IMGS/GRID/CHECKBOX_LIGHT.PNG"] = "ms-crm-ImageStrip-checkbox_light";
    $v_0["/_IMGS/GRID/UP_ENABLED.PNG"] = "ms-crm-ImageStrip-moveUpButton";
    $v_0["/_IMGS/GRID/DOWN_ENABLED.PNG"] = "ms-crm-ImageStrip-moveDownButton";
    $v_0["/_IMGS/GRID/UP_HOVER.PNG"] = "ms-crm-ImageStrip-moveUpButtonHover";
    $v_0["/_IMGS/GRID/DOWN_HOVER.PNG"] = "ms-crm-ImageStrip-moveDownButtonHover";
    $v_0["/_IMGS/GRID/UP_DISABLED.PNG"] = "ms-crm-ImageStrip-moveUpButtonDisabled";
    $v_0["/_IMGS/GRID/DOWN_DISABLED.PNG"] = "ms-crm-ImageStrip-moveDownButtonDisabled";
    $v_0["/_IMGS/GRID/HORZPRELOADER_5X55.GIF"] = "ms-crm-ImageStrip-horizontalPreLoader";
    $v_0["/_IMGS/GRID/LOCK_16.PNG"] = "ms-crm-ImageStrip-lockButton";
    $v_0["/_IMGS/GRID/UNLOCK_16.PNG"] = "ms-crm-ImageStrip-unlockButton";
    $v_0["/_IMGS/GRID/LOCK_HOVER_16.PNG"] = "ms-crm-ImageStrip-lockButtonHover";
    $v_0["/_IMGS/GRID/UNLOCK_HOVER_16.PNG"] = "ms-crm-ImageStrip-unlockButtonHover";
    $v_0["/_IMGS/GRID/OPENASSOCIATEDGRIDVIEW_16_NEW.PNG"] = "ms-crm-ImageStrip-openassociatedgridview";
    $v_0["/_IMGS/VISUALIZATION/CHARTSIDE.PNG"] = "ms-crm-ImageStrip-chartside";
    $v_0["/_IMGS/VISUALIZATION/CHARTSIDELITE.PNG"] = "ms-crm-ImageStrip-chartsidelite";
    $v_0["/_IMGS/VISUALIZATION/CHARTSIDELITETOPBOTTOM.PNG"] = "ms-crm-ImageStrip-chartsideliteTopBottom";
    $v_0["/_IMGS/NAVLITELEFT.PNG"] = "ms-crm-ImageStrip-navliteleft";
    $v_0["/_IMGS/NAVLITERIGHT.PNG"] = "ms-crm-ImageStrip-navliteright";
    $v_0["/_IMGS/FORMSELECTORDROPDOWN.PNG"] = "ms-crm-ImageStrip-formSelectorDropdown";
    $v_0["/_IMGS/FORMNAVTREELINE.PNG"] = "ms-crm-ImageStrip-formNavTreeLine";
    $v_0["/_IMGS/FORMNAVTREELINEBOTTOM.PNG"] = "ms-crm-ImageStrip-formNavTreeLineBottom";
    $v_0["/_IMGS/FORMNAVTREELINE_RTL.PNG"] = "ms-crm-ImageStrip-formNavTreeLineRTL";
    $v_0["/_IMGS/FORMNAVTREELINEBOTTOM_RTL.PNG"] = "ms-crm-ImageStrip-formNavTreeLineBottomRTL";
    $v_0["/_IMGS/ADVFIND/BUTTON.GIF"] = "ms-crm-ImageStrip-AdvFindDownArrow";
    $v_0["/_IMGS/ADVFIND/PROGRESS.GIF"] = "ms-crm-ImageStrip-progress";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/AREACHART.PNG"] = "ms-crm-ImageStrip-areaChart";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/AREACHART/AREACHART_ARROW.PNG"] = "ms-crm-ImageStrip-areaChart_arrow";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/AREACHART/AREACHART_ARROW_DIS.PNG"] = "ms-crm-ImageStrip-areaChart_arrow_dis";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/AREACHART/AREACHART_ARROW_SEL.PNG"] = "ms-crm-ImageStrip-areaChart_arrow_sel";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/AREACHART/AREACHART_DIS.PNG"] = "ms-crm-ImageStrip-areaChart_dis";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/AREACHART/AREACHART_SEL.PNG"] = "ms-crm-ImageStrip-areaChart_sel";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/BARCHART/BARCHART.PNG"] = "ms-crm-ImageStrip-barChart";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/BARCHART/BARCHART_ARROW.PNG"] = "ms-crm-ImageStrip-barChart_arrow";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/BARCHART/BARCHART_ARROW_DIS.PNG"] = "ms-crm-ImageStrip-barChart_arrow_dis";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/BARCHART/BARCHART_ARROW_SEL.PNG"] = "ms-crm-ImageStrip-barChart_arrow_sel";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/BARCHART/BARCHART_DIS.PNG"] = "ms-crm-ImageStrip-barChart_dis";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/BARCHART/BARCHART_SEL.PNG"] = "ms-crm-ImageStrip-barChart_sel";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/COLUMNCHART/COLUMNCHART.PNG"] = "ms-crm-ImageStrip-columnChart";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/COLUMNCHART/COLUMNCHART_ARROW.PNG"] = "ms-crm-ImageStrip-columnChart_arrow";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/COLUMNCHART/COLUMNCHART_ARROW_DIS.PNG"] = "ms-crm-ImageStrip-columnChart_arrow_dis";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/COLUMNCHART/COLUMNCHART_ARROW_SEL.PNG"] = "ms-crm-ImageStrip-columnChart_arrow_sel";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/COLUMNCHART/COLUMNCHART_DIS.PNG"] = "ms-crm-ImageStrip-columnChart_dis";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/COLUMNCHART/COLUMNCHART_SEL.PNG"] = "ms-crm-ImageStrip-columnChart_sel";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/FUNNELCHART/FUNNELCHART.PNG"] = "ms-crm-ImageStrip-funnelChart";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/FUNNELCHART/FUNNELCHART_DIS.PNG"] = "ms-crm-ImageStrip-funnelChart_dis";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/FUNNELCHART/FUNNELCHART_SEL.PNG"] = "ms-crm-ImageStrip-funnelChart_sel";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/LINECHART/LINECHART.PNG"] = "ms-crm-ImageStrip-lineChart";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/LINECHART/LINECHART_DIS.PNG"] = "ms-crm-ImageStrip-lineChart_dis";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/LINECHART/LINECHART_SEL.PNG"] = "ms-crm-ImageStrip-lineChart_sel";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/PIECHART/PIECHART.PNG"] = "ms-crm-ImageStrip-pieChart";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/PIECHART/PIECHART_DIS.PNG"] = "ms-crm-ImageStrip-pieChart_dis";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/PIECHART/PIECHART_SEL.PNG"] = "ms-crm-ImageStrip-pieChart_sel";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/TOPBOTTOM/BOTTOMRULES.PNG"] = "ms-crm-ImageStrip-bottomRules";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/TOPBOTTOM/BOTTOMRULES_ARROW.PNG"] = "ms-crm-ImageStrip-bottomRules_arrow";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/TOPBOTTOM/BOTTOMRULES_ARROW_SEL.PNG"] = "ms-crm-ImageStrip-bottomRules_arrow_sel";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/TOPBOTTOM/BOTTOMRULES_SEL.PNG"] = "ms-crm-ImageStrip-bottomRules_sel";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/TOPBOTTOM/CLEARRULES.PNG"] = "ms-crm-ImageStrip-clearRules";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/TOPBOTTOM/CLEARRULES_SEL.PNG"] = "ms-crm-ImageStrip-clearRules_sel";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/TOPBOTTOM/TOPBOTTOMRULES.PNG"] = "ms-crm-ImageStrip-topBottomRules";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/TOPBOTTOM/TOPBOTTOMRULES_DIS.PNG"] = "ms-crm-ImageStrip-topBottomRules_dis";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/TOPBOTTOM/TOPBOTTOMRULES_SEL.PNG"] = "ms-crm-ImageStrip-topBottomRules_sel";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/TOPBOTTOM/TOPRULES.PNG"] = "ms-crm-ImageStrip-topRules";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/TOPBOTTOM/TOPRULES_ARROW.PNG"] = "ms-crm-ImageStrip-topRules_arrow";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/TOPBOTTOM/TOPRULES_ARROW_SEL.PNG"] = "ms-crm-ImageStrip-topRules_arrow_sel";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/TOPBOTTOM/TOPRULES_SEL.PNG"] = "ms-crm-ImageStrip-topRules_sel";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/ADD.PNG"] = "ms-crm-ImageStrip-add";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/ADD_DIS.PNG"] = "ms-crm-ImageStrip-add_dis";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/DELETECHART.PNG"] = "ms-crm-ImageStrip-deleteChart";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/DELETECHART_DIS.PNG"] = "ms-crm-ImageStrip-deleteChart_dis";
    $v_0["/_IMGS/VISUALIZATION/DESIGNER/DELETECHART_SEL.PNG"] = "ms-crm-ImageStrip-deleteChart_sel";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1.PNG"] = "ms-crm-ImageStrip-ico_fhe_1";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_2.PNG"] = "ms-crm-ImageStrip-ico_fhe_2";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_3.PNG"] = "ms-crm-ImageStrip-ico_fhe_3";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4.PNG"] = "ms-crm-ImageStrip-ico_fhe_4";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_5.PNG"] = "ms-crm-ImageStrip-ico_fhe_5";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_8.PNG"] = "ms-crm-ImageStrip-ico_fhe_8";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_9.PNG"] = "ms-crm-ImageStrip-ico_fhe_9";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_99.PNG"] = "ms-crm-ImageStrip-ico_fhe_99";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_112.PNG"] = "ms-crm-ImageStrip-ico_fhe_112";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_123.PNG"] = "ms-crm-ImageStrip-ico_fhe_123";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_127.PNG"] = "ms-crm-ImageStrip-ico_fhe_127";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_132.PNG"] = "ms-crm-ImageStrip-ico_fhe_132";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1010.PNG"] = "ms-crm-ImageStrip-ico_fhe_1010";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1011.PNG"] = "ms-crm-ImageStrip-ico_fhe_1011";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1013.PNG"] = "ms-crm-ImageStrip-ico_fhe_1013";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1016.PNG"] = "ms-crm-ImageStrip-ico_fhe_1016";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1022.PNG"] = "ms-crm-ImageStrip-ico_fhe_1022";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1024.PNG"] = "ms-crm-ImageStrip-ico_fhe_1024";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1026.PNG"] = "ms-crm-ImageStrip-ico_fhe_1026";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1028.PNG"] = "ms-crm-ImageStrip-ico_fhe_1028";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1030.PNG"] = "ms-crm-ImageStrip-ico_fhe_1030";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1036.PNG"] = "ms-crm-ImageStrip-ico_fhe_1036";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1038.PNG"] = "ms-crm-ImageStrip-ico_fhe_1038";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1055.PNG"] = "ms-crm-ImageStrip-ico_fhe_1055";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1056.PNG"] = "ms-crm-ImageStrip-ico_fhe_1056";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1070.PNG"] = "ms-crm-ImageStrip-ico_fhe_1070";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1071.PNG"] = "ms-crm-ImageStrip-ico_fhe_1071";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1080.PNG"] = "ms-crm-ImageStrip-ico_fhe_1080";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1083.PNG"] = "ms-crm-ImageStrip-ico_fhe_1083";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1084.PNG"] = "ms-crm-ImageStrip-ico_fhe_1084";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1085.PNG"] = "ms-crm-ImageStrip-ico_fhe_1085";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1088.PNG"] = "ms-crm-ImageStrip-ico_fhe_1088";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1089.PNG"] = "ms-crm-ImageStrip-ico_fhe_1089";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1090.PNG"] = "ms-crm-ImageStrip-ico_fhe_1090";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1091.PNG"] = "ms-crm-ImageStrip-ico_fhe_1091";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1111.PNG"] = "ms-crm-ImageStrip-ico_fhe_1111";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1112.PNG"] = "ms-crm-ImageStrip-ico_fhe_1112";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_1200.PNG"] = "ms-crm-ImageStrip-ico_fhe_1200";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_2010.PNG"] = "ms-crm-ImageStrip-ico_fhe_2010";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_2011.PNG"] = "ms-crm-ImageStrip-ico_fhe_2011";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_2013.PNG"] = "ms-crm-ImageStrip-ico_fhe_2013";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_2020.PNG"] = "ms-crm-ImageStrip-ico_fhe_2020";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_2029.PNG"] = "ms-crm-ImageStrip-ico_fhe_2029";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4000.PNG"] = "ms-crm-ImageStrip-ico_fhe_4000";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4001.PNG"] = "ms-crm-ImageStrip-ico_fhe_4001";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4002.PNG"] = "ms-crm-ImageStrip-ico_fhe_4002";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4007.PNG"] = "ms-crm-ImageStrip-ico_fhe_4007";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4009.PNG"] = "ms-crm-ImageStrip-ico_fhe_4009";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4200.PNG"] = "ms-crm-ImageStrip-ico_fhe_4200";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4201.PNG"] = "ms-crm-ImageStrip-ico_fhe_4201";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4202.PNG"] = "ms-crm-ImageStrip-ico_fhe_4202";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4204.PNG"] = "ms-crm-ImageStrip-ico_fhe_4204";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4206.PNG"] = "ms-crm-ImageStrip-ico_fhe_4206";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4206_RTL.PNG"] = "ms-crm-ImageStrip-ico_fhe_4206_rtl";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4207.PNG"] = "ms-crm-ImageStrip-ico_fhe_4207";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4208.PNG"] = "ms-crm-ImageStrip-ico_fhe_4208";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4209.PNG"] = "ms-crm-ImageStrip-ico_fhe_4209";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4210.PNG"] = "ms-crm-ImageStrip-ico_fhe_4210";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4211.PNG"] = "ms-crm-ImageStrip-ico_fhe_4211";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4212.PNG"] = "ms-crm-ImageStrip-ico_fhe_4212";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4214.PNG"] = "ms-crm-ImageStrip-ico_fhe_4214";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4216.PNG"] = "ms-crm-ImageStrip-ico_fhe_4216";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4251.PNG"] = "ms-crm-ImageStrip-ico_fhe_4251";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4300.PNG"] = "ms-crm-ImageStrip-ico_fhe_4300";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4400.PNG"] = "ms-crm-ImageStrip-ico_fhe_4400";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4401.PNG"] = "ms-crm-ImageStrip-ico_fhe_4401";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4401_RTL.PNG"] = "ms-crm-ImageStrip-ico_fhe_4401_rtl";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4402.PNG"] = "ms-crm-ImageStrip-ico_fhe_4402";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4406.PNG"] = "ms-crm-ImageStrip-ico_fhe_4406";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4411.PNG"] = "ms-crm-ImageStrip-ico_fhe_4411";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4412.PNG"] = "ms-crm-ImageStrip-ico_fhe_4412";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4414.PNG"] = "ms-crm-ImageStrip-ico_fhe_4414";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4503.PNG"] = "ms-crm-ImageStrip-ico_fhe_4503";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4700.PNG"] = "ms-crm-ImageStrip-ico_fhe_4700";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4703.PNG"] = "ms-crm-ImageStrip-ico_fhe_4703";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_4710.PNG"] = "ms-crm-ImageStrip-ico_fhe_4710";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_7100.PNG"] = "ms-crm-ImageStrip-ico_fhe_7100";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_9100.PNG"] = "ms-crm-ImageStrip-ico_fhe_9100";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_9102.PNG"] = "ms-crm-ImageStrip-ico_fhe_9102";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_9105.PNG"] = "ms-crm-ImageStrip-ico_fhe_9105";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_9106.PNG"] = "ms-crm-ImageStrip-ico_fhe_9106";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_9600.PNG"] = "ms-crm-ImageStrip-ico_fhe_9600";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_9602.PNG"] = "ms-crm-ImageStrip-ico_fhe_9602";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_9603.PNG"] = "ms-crm-ImageStrip-ico_fhe_9603";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_9605.PNG"] = "ms-crm-ImageStrip-ico_fhe_9605";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_9606.PNG"] = "ms-crm-ImageStrip-ico_fhe_9606";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_9750.PNG"] = "ms-crm-ImageStrip-ico_fhe_9750";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_9751.PNG"] = "ms-crm-ImageStrip-ico_fhe_9751";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_8181.PNG"] = "ms-crm-ImageStrip-ico_fhe_8181";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_9301.PNG"] = "ms-crm-ImageStrip-ico_fhe_9301";
    $v_0["/_IMGS/FORMENTITY/ICO_FHE_SYSTEMENTITY.PNG"] = "ms-crm-ImageStrip-ico_fhe_systemEntity";
    $v_0["/_IMGS/INLINEEDIT/CONFIRM.PNG"] = "ms-crm-ImageStrip-inlineedit_confirm";
    $v_0["/_IMGS/INLINEEDIT/CANCEL.PNG"] = "ms-crm-ImageStrip-inlineedit_cancel";
    $v_0["/_IMGS/INLINEEDIT/LOCKED.PNG"] = "ms-crm-ImageStrip-inlineedit_locked";
    $v_0["/_IMGS/INLINEEDIT/LOCKED_BLACK.PNG"] = "ms-crm-ImageStrip-inlineedit_locked_black";
    $v_0["/_IMGS/INLINEEDIT/WARNING.PNG"] = "ms-crm-ImageStrip-inlineedit_warning";
    $v_0["/_IMGS/INLINEEDIT/ARROW.PNG"] = "ms-crm-ImageStrip-inlineedit_arrow";
    $v_0["/_IMGS/INLINEEDIT/TIME_ICON.PNG"] = "ms-crm-ImageStrip-inlineedit_time_icon";
    $v_0["/_IMGS/INLINEEDIT/TIME_ICON_DISABLED.PNG"] = "ms-crm-ImageStrip-inlineedit_time_icon_disabled";
    $v_0["/_IMGS/INLINEEDIT/CALENDAR_ICON.PNG"] = "ms-crm-ImageStrip-inlineedit_calendar_icon";
    $v_0["/_IMGS/ICO/16_PROGRESS.GIF"] = "ms-crm-ImageStrip-16_progress";
    $v_0["/_IMGS/INLINEEDIT/ALERT.PNG"] = "ms-crm-ImageStrip-inlineedit_alert";
    $v_0["/_IMGS/INLINEEDIT/SAVE.PNG"] = "ms-crm-ImageStrip-inlineedit_save";
    $v_0["/_IMGS/INLINEEDIT/SAVEHOVER.PNG"] = "ms-crm-ImageStrip-inlineedit_save_hover";
    $v_0["/_IMGS/INLINEEDIT/INLINE_EDIT_ICON.PNG"] = "ms-crm-ImageStrip-inlineedit_edit_icon";
    $v_0["/_IMGS/INLINEEDIT/LOCKED_WHITE.PNG"] = "ms-crm-ImageStrip-inlineedit_locked_white";
    $v_0["/_IMGS/SFA/RECALCULATE_16.PNG"] = "ms-crm-ImageStrip-Recalculate_16";
    $v_0["/_IMGS/SFA/RECALCULATE_HOVER_16.PNG"] = "ms-crm-ImageStrip-Recalculate_hover_16";
    $v_0["/_IMGS/SFA/RECALCULATE_32.PNG"] = "ms-crm-ImageStrip-Recalculate_32";
    $v_0["/_IMGS/SFA/ROLLUP_REFRESH.PNG"] = "ms-crm-ImageStrip-rollup_refresh";
    $v_0["/_IMGS/SFA/REFRESH_HIGH_CONTRAST_16.PNG"] = "ms-crm-ImageStrip-Refresh_high_contrast_16";
    $v_0["/_IMGS/PROCESSCONTROL/PROCESS_CONTROL_DARK_LEFT.PNG"] = "ms-crm-ImageStrip-process_control_dark_left";
    $v_0["/_IMGS/PROCESSCONTROL/PROCESS_CONTROL_DARK_RIGHT.PNG"] = "ms-crm-ImageStrip-process_control_dark_right";
    $v_0["/_IMGS/PROCESSCONTROL/PROCESS_CONTROL_LIGHT_LEFT.PNG"] = "ms-crm-ImageStrip-process_control_light_left";
    $v_0["/_IMGS/PROCESSCONTROL/PROCESS_CONTROL_LIGHT_RIGHT.PNG"] = "ms-crm-ImageStrip-process_control_light_right";
    $v_0["/_IMGS/PROCESSCONTROL/PROCESS_CONTROL_DARK_CHECK.PNG"] = "ms-crm-ImageStrip-process_control_dark_check";
    $v_0["/_IMGS/PROCESSCONTROL/PROCESS_CONTROL_LIGHT_CHECK.PNG"] = "ms-crm-ImageStrip-process_control_light_check";
    $v_0["/_IMGS/PROCESSCONTROL/PROCESS_CONTROL_DARK_SQUARE.PNG"] = "ms-crm-ImageStrip-process_control_dark_square";
    $v_0["/_IMGS/PROCESSCONTROL/PROCESS_CONTROL_LIGHT_SQUARE.PNG"] = "ms-crm-ImageStrip-process_control_light_square";
    $v_0["/_IMGS/PROCESSCONTROL/PROCESS_CONTROL_UP.PNG"] = "ms-crm-ImageStrip-process_control_up";
    $v_0["/_IMGS/PROCESSCONTROL/PROCESS_CONTROL_DOWN.PNG"] = "ms-crm-ImageStrip-process_control_down";
    $v_0["/_IMGS/PROCESSCONTROL/PROCESS_CONTROL_DARK_LOCK.PNG"] = "ms-crm-ImageStrip-process_control_dark_lock";
    $v_0["/_IMGS/PROCESSCONTROL/PROCESS_CONTROL_LIGHT_LOCK.PNG"] = "ms-crm-ImageStrip-process_control_light_lock";
    $v_0["/_IMGS/PROCESSCONTROL/PROCESS_CONTROL_WARNING.PNG"] = "ms-crm-ImageStrip-process_control_warning";
    $v_0["/_IMGS/PROCESSCONTROL/PROCESS_CONTROL_COMPLETED.PNG"] = "ms-crm-ImageStrip-process_control_completed";
    $v_0["/_IMGS/PROCESSCONTROL/BAR_WARN_16.PNG"] = "ms-crm-ImageStrip-process_control_bar_warning";
    $v_0["/_IMGS/PROCESSCONTROL/BAR_ERROR_16.PNG"] = "ms-crm-ImageStrip-process_control_bar_error";
    $v_0["/_IMGS/PROCESSCONTROL/8X6_COLLAPSE_ICON.PNG"] = "ms-crm-ImageStrip-8x6_Collapse_Icon";
    $v_0["/_IMGS/PROCESSCONTROL/10_STAGE_SCROLL_ARROW_LEFT.PNG"] = "ms-crm-ImageStrip-10_Stage_scroll_arrow_left";
    $v_0["/_IMGS/PROCESSCONTROL/10_STAGE_SCROLL_ARROW_RIGHT.PNG"] = "ms-crm-ImageStrip-10_Stage_scroll_arrow_right";
    $v_0["/_IMGS/PROCESSCONTROL/12_STAGE_COMPLETE_ICON.PNG"] = "ms-crm-ImageStrip-12_Stage_complete_icon";
    $v_0["/_IMGS/PROCESSCONTROL/15_ADVANCE_ARROW_ICON.PNG"] = "ms-crm-ImageStrip-15_Advance_arrow_icon";
    $v_0["/_IMGS/PROCESSCONTROL/15_BACK_ARROW_ICON.PNG"] = "ms-crm-ImageStrip-15_Back_arrow_icon";
    $v_0["/_IMGS/PROCESSCONTROL/8_INFO_ICON.PNG"] = "ms-crm-ImageStrip-8_info_icon";
    $v_0["/_IMGS/PROCESSCONTROL/12_STAGE_LOCK_ICON.PNG"] = "ms-crm-ImageStrip-12_Stage_Lock_Icon";
    $v_0["/_IMGS/PROCESSCONTROL/CREATE_ICON.PNG"] = "ms-crm-ImageStrip-create_icon";
    $v_0["/_IMGS/PROCESSCONTROL/21_ORANGEPLUS.PNG"] = "ms-crm-ImageStrip-pcc_add";
    $v_0["/_IMGS/PROCESSCONTROL/6X8_BREADCRUMB_CONFIG.PNG"] = "ms-crm-ImageStrip-6x8_breadcrumb_config";
    $v_0["/_IMGS/PROCESSCONTROL/21_INACTIVEPLUS.PNG"] = "ms-crm-ImageStrip-21_InactivePlus";
    $v_0["/_IMGS/PROCESSCONTROL/12_ACTIVE_CONFIG_DELETE.PNG"] = "ms-crm-ImageStrip-12_active_config_delete";
    $v_0["/_IMGS/PROCESSCONTROL/12_INACTIVE_CONFIG_DELETE.PNG"] = "ms-crm-ImageStrip-12_inactive_config_delete";
    $v_0["/_IMGS/PROCESSCONTROL/12_CHECKBOX_OFF.PNG"] = "ms-crm-ImageStrip-12_checkbox_off";
    $v_0["/_IMGS/PROCESSCONTROL/12_CHECKBOX_ON.PNG"] = "ms-crm-ImageStrip-12_checkbox_on";
    $v_0["/_IMGS/PROCESSCONTROL/23_ADDMINUS_CONFIG.PNG"] = "ms-crm-ImageStrip-23_addminus_config";
    $v_0["/_IMGS/PROCESSCONTROL/DROPDOWN.PNG"] = "ms-crm-ImageStrip-pcc_dropdown";
    $v_0["/_IMGS/PROCESSCONTROL/ANIMATEDPRELOADER_36.PNG"] = "ms-crm-ImageStrip-AnimatedPreloader_36";
    $v_0["/_IMGS/PROCESSCONTROL/WARNING_31.PNG"] = "ms-crm-ImageStrip-warning_31";
    $v_0["/_IMGS/PROCESSCONTROL/30_ENABLED_MOVE_UP.PNG"] = "ms-crm-ImageStrip-30_enabled_move_up";
    $v_0["/_IMGS/PROCESSCONTROL/30_ENABLED_MOVE_DOWN.PNG"] = "ms-crm-ImageStrip-30_enabled_move_down";
    $v_0["/_IMGS/PROCESSCONTROL/30_MOVEUPHOVER.PNG"] = "ms-crm-ImageStrip-30_moveuphover";
    $v_0["/_IMGS/PROCESSCONTROL/30_MOVEDOWNHOVER.PNG"] = "ms-crm-ImageStrip-30_movedownhover";
    $v_0["/_IMGS/PROCESSCONTROL/30_DISABLED_MOVE_UP.PNG"] = "ms-crm-ImageStrip-30_disabled_move_up";
    $v_0["/_IMGS/PROCESSCONTROL/30_DISABLED_MOVE_DOWN.PNG"] = "ms-crm-ImageStrip-30_disabled_move_down";
    $v_0["/_IMGS/PROCESSCONTROL/10_COLLAPSED.PNG"] = "ms-crm-ImageStrip-10_collapsed";
    $v_0["/_IMGS/PROCESSCONTROL/10_EXPANDED.PNG"] = "ms-crm-ImageStrip-10_expanded";
    $v_0["/_IMGS/PROCESSCONTROL/ADD_BRANCH_16.PNG"] = "ms-crm-ImageStrip-add_branch_16";
    $v_0["/_IMGS/PROCESSCONTROL/GREEN_PLUS_16.PNG"] = "ms-crm-ImageStrip-green_plus_16";
    $v_0["/_IMGS/PROCESSCONTROL/GREY_PLUS_16.PNG"] = "ms-crm-ImageStrip-grey_plus_16";
    $v_0["/_IMGS/PROCESSCONTROL/WHITE_PLUS_16.PNG"] = "ms-crm-ImageStrip-white_plus_16";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/CONDITIONBUTTON_OK_DEFAULT_24.PNG"] = "ms-crm-ImageStrip-conditiondoneimage";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/CONDITIONBUTTON_OK_HOVER_24.PNG"] = "ms-crm-ImageStrip-conditionhoverdoneimage";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/CONDITIONBUTTON_OK_SELECT_24.PNG"] = "ms-crm-ImageStrip-conditionselectdoneimage";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/CONDITIONBUTTON_CANCEL_DEFAULT_24.PNG"] = "ms-crm-ImageStrip-conditioncloseimage";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/CONDITIONBUTTON_CANCEL_HOVER_24.PNG"] = "ms-crm-ImageStrip-conditionhovercloseimage";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/CONDITIONBUTTON_CANCEL_SELECT_24.PNG"] = "ms-crm-ImageStrip-conditionselectcloseimage";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/ACTIONBUTTON_OK_DEFAULT_24.PNG"] = "ms-crm-ImageStrip-actiondoneimage";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/ACTIONBUTTON_OK_HOVER_24.PNG"] = "ms-crm-ImageStrip-actionhoverdoneimage";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/ACTIONBUTTON_OK_SELECT_24.PNG"] = "ms-crm-ImageStrip-actionselectdoneimage";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/ACTIONBUTTON_CANCEL_DEFAULT_24.PNG"] = "ms-crm-ImageStrip-actioncloseimage";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/ACTIONBUTTON_CANCEL_HOVER_24.PNG"] = "ms-crm-ImageStrip-actionhovercloseimage";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/ACTIONBUTTON_CANCEL_SELECT_24.PNG"] = "ms-crm-ImageStrip-actionselectcloseimage";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/PLUSSIGN.PNG"] = "ms-crm-ImageStrip-plussign";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/HOVERPLUSSIGN.PNG"] = "ms-crm-ImageStrip-hoverplussign";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/ERRORICON.PNG"] = "ms-crm-ImageStrip-erroricon";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/DELETE.PNG"] = "ms-crm-ImageStrip-deleteicon";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/HOVERDELETE.PNG"] = "ms-crm-ImageStrip-hoverdeleteicon";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/MOVEUP.PNG"] = "ms-crm-ImageStrip-moveupicon";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/HOVERMOVEUP.PNG"] = "ms-crm-ImageStrip-hovermoveupicon";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/MOVEDOWN.PNG"] = "ms-crm-ImageStrip-movedownicon";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/HOVERMOVEDOWN.PNG"] = "ms-crm-ImageStrip-hovermovedownicon";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/SECTION_DOWN.PNG"] = "ms-crm-ImageStrip-arrowdown";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/SECTION_RIGHT.PNG"] = "ms-crm-ImageStrip-arrowright";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/ABOUTBUTTON_16.PNG"] = "ms-crm-ImageStrip-AboutButton_16";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/SAVEAS_16.PNG"] = "ms-crm-ImageStrip-pbl_SaveAs_16";
    $v_0["/_IMGS/BUSINESSRULEEDITOR/SAVEANDCLOSE_16.PNG"] = "ms-crm-ImageStrip-pbl_SaveAndClose_16";
    $v_0["/_IMGS/REFRESHCOMMANDBAR/ADDTOQUEUE_16.PNG"] = "ms-crm-ImageStrip-refresh_commandbar_AddToQueue";
    $v_0["/_IMGS/REFRESHCOMMANDBAR/CASECANCEL_16.PNG"] = "ms-crm-ImageStrip-refresh_commandbar_CaseCancel";
    $v_0["/_IMGS/REFRESHCOMMANDBAR/CLOSE_16.PNG"] = "ms-crm-ImageStrip-refresh_commandbar_Close";
    $v_0["/_IMGS/REFRESHCOMMANDBAR/CLOSEASLOST_16.PNG"] = "ms-crm-ImageStrip-refresh_commandbar_CloseAsLost";
    $v_0["/_IMGS/REFRESHCOMMANDBAR/CLOSEASWON_16.PNG"] = "ms-crm-ImageStrip-refresh_commandbar_CloseAsWon";
    $v_0["/_IMGS/REFRESHCOMMANDBAR/CREATE_16.PNG"] = "ms-crm-ImageStrip-refresh_commandbar_Create";
    $v_0["/_IMGS/REFRESHCOMMANDBAR/DEACTIVATE_16.PNG"] = "ms-crm-ImageStrip-refresh_commandbar_Deactivate";
    $v_0["/_IMGS/REFRESHCOMMANDBAR/DELETE_16.PNG"] = "ms-crm-ImageStrip-refresh_commandbar_Delete";
    $v_0["/_IMGS/REFRESHCOMMANDBAR/DISQUALIFY_16.PNG"] = "ms-crm-ImageStrip-refresh_commandbar_Disqualify";
    $v_0["/_IMGS/REFRESHCOMMANDBAR/EMAILLINK_16.PNG"] = "ms-crm-ImageStrip-refresh_commandbar_EmailLink";
    $v_0["/_IMGS/REFRESHCOMMANDBAR/FOLLOW_16.PNG"] = "ms-crm-ImageStrip-refresh_commandbar_Follow";
    $v_0["/_IMGS/REFRESHCOMMANDBAR/FORMEDITOR_16.PNG"] = "ms-crm-ImageStrip-refresh_commandbar_FormEditor";
    $v_0["/_IMGS/REFRESHCOMMANDBAR/HELP_16.PNG"] = "ms-crm-ImageStrip-refresh_commandbar_Help";
    $v_0["/_IMGS/REFRESHCOMMANDBAR/NEW_16.PNG"] = "ms-crm-ImageStrip-refresh_commandbar_New";
    $v_0["/_IMGS/REFRESHCOMMANDBAR/OPENLEGACYFORM_16.PNG"] = "ms-crm-ImageStrip-refresh_commandbar_OpenLegacyForm";
    $v_0["/_IMGS/REFRESHCOMMANDBAR/QUALIFY_16.PNG"] = "ms-crm-ImageStrip-refresh_commandbar_Qualify";
    $v_0["/_IMGS/REFRESHCOMMANDBAR/REACTIVATECASE_16.PNG"] = "ms-crm-ImageStrip-refresh_commandbar_ReactivateCase";
    $v_0["/_IMGS/REFRESHCOMMANDBAR/RESOLVECASE_16.PNG"] = "ms-crm-ImageStrip-refresh_commandbar_ResolveCase";
    $v_0["/_IMGS/REFRESHCOMMANDBAR/SAVE_16.PNG"] = "ms-crm-ImageStrip-refresh_commandbar_Save";
    $v_0["/_IMGS/REFRESHCOMMANDBAR/SETTINGS_16.PNG"] = "ms-crm-ImageStrip-refresh_commandbar_Settings";
    $v_0["/_IMGS/REFRESHCOMMANDBAR/SHARING_16.PNG"] = "ms-crm-ImageStrip-refresh_commandbar_Sharing";
    $v_0["/_IMGS/REFRESHCOMMANDBAR/UNFOLLOW_16.PNG"] = "ms-crm-ImageStrip-refresh_commandbar_UnFollow";
    $v_0["/_IMGS/EDIT_POST_16.PNG"] = "ms-crm-ImageStrip-activitieswall_EditPost";
    $v_0["/_IMGS/EDIT_POST_HOVER_16.PNG"] = "ms-crm-ImageStrip-activitieswall_EditPostHover";
    $v_0["/_IMGS/SEPARATOR.PNG"] = "ms-crm-ImageStrip-activitieswall_Seperator";
    $v_0["/_IMGS/EXPAND_16.PNG"] = "ms-crm-ImageStrip-activitieswall_Expand_16";
    $v_0["/_IMGS/EXPAND_HOVER_16.PNG"] = "ms-crm-ImageStrip-activitieswall_Expand_Hover_16";
    $v_0["/_IMGS/COLLAPSE_16.PNG"] = "ms-crm-ImageStrip-activitieswall_Collapse_16";
    $v_0["/_IMGS/COLLAPSE_HOVER_16.PNG"] = "ms-crm-ImageStrip-activitieswall_Collapse_Hover_16";
    $v_0["/_IMGS/ACTIVITYWALL_WARNING.PNG"] = "ms-crm-ImageStrip-activitieswall_Warning";
    $v_0["/_IMGS/SEEMOREARROWS.PNG"] = "ms-crm-ImageStrip-activitieswall_SeeMoreArrow";
    $v_0["/_IMGS/PROGRESSBAR.GIF"] = "ms-crm-ImageStrip-activitieswall_Progressbar";
    $v_0["/_IMGS/THEME/TABLET/OPEN_WHITE_20X20.PNG"] = "ms-crm-ImageStrip-masthead_Open_White_20x20";
    $v_0["/_IMGS/THEME/TABLET/HELP_WHITE_20X20.PNG"] = "ms-crm-ImageStrip-masthead_Help_White_20x20";
    $v_0["/_IMGS/THEME/TABLET/HELP_WHITE_20X20_RTL.PNG"] = "ms-crm-ImageStrip-masthead_Help_White_20x20_rtl";
    $v_0["/_IMGS/THEME/TABLET/LOGIN_DOWNARROW_WHITE_7X4.PNG"] = "ms-crm-ImageStrip-masthead_Login_DownArrow_White_7x4";
    $v_0["/_IMGS/SOCIALINSIGHT/NBDELETEICON.PNG"] = "ms-crm-ImageStrip-nbdeleteicon";
    $v_0["/_IMGS/SOCIALINSIGHT/NBEDITICON.PNG"] = "ms-crm-ImageStrip-nbediticon";
    $v_0["/_IMGS/SOCIALINSIGHT/NBHOVERDELETEICON.PNG"] = "ms-crm-ImageStrip-nbhoverdeleteicon";
    $v_0["/_IMGS/SOCIALINSIGHT/NBHOVEREDITICON.PNG"] = "ms-crm-ImageStrip-nbhoverediticon";
    $v_0["/_IMGS/SOCIALINSIGHT/NBEDITVISUALIZATIONICON.PNG"] = "ms-crm-ImageStrip-nbeditvisualizationicon";
    $v_0["/_IMGS/SOCIALINSIGHT/NBHOVEREDITVISUALIZATIONICON.PNG"] = "ms-crm-ImageStrip-nbhovereditvisualizationicon";
    $v_0["/_IMGS/SOCIALINSIGHT/ADD_20.PNG"] = "ms-crm-ImageStrip-add_20";
    $v_0["/_IMGS/SOCIALINSIGHT/ADD_INACTIVE_20.PNG"] = "ms-crm-ImageStrip-add_inactive_20";
    $v_0["/_IMGS/SOCIALINSIGHT/ADD_HOVER_20.PNG"] = "ms-crm-ImageStrip-add_hover_20";
    $v_0["/_IMGS/SOCIALINSIGHT/ARROW_DOWN_ACTIVE_30.PNG"] = "ms-crm-ImageStrip-Arrow_Down_active_30";
    $v_0["/_IMGS/SOCIALINSIGHT/ARROW_DOWN_ACTIVE_HOVER_30.PNG"] = "ms-crm-ImageStrip-Arrow_Down_active_hover_30";
    $v_0["/_IMGS/SOCIALINSIGHT/ARROW_DOWN_INACTIVE_30.PNG"] = "ms-crm-ImageStrip-Arrow_Down_inactive_30";
    $v_0["/_IMGS/SOCIALINSIGHT/ARROW_UP_ACTIVE_30.PNG"] = "ms-crm-ImageStrip-Arrow_Up_active_30";
    $v_0["/_IMGS/SOCIALINSIGHT/ARROW_UP_ACTIVE_HOVER_30.PNG"] = "ms-crm-ImageStrip-Arrow_Up_active_hover_30";
    $v_0["/_IMGS/SOCIALINSIGHT/ARROW_UP_INACTIVE_30.PNG"] = "ms-crm-ImageStrip-Arrow_Up_inactive_30";
    $v_0["/_IMGS/SOCIALINSIGHT/DELETE_VISUALIZATION_12.PNG"] = "ms-crm-ImageStrip-Delete_visualization_12";
    $v_0["/_IMGS/SOCIALINSIGHT/DELETE_VISUALIZATION_HOVER_12.PNG"] = "ms-crm-ImageStrip-Delete_visualization_hover_12";
    return $v_0
};
Mscrm.AdvancedFindConstants = function() {};
Mscrm.AdvancedFindConstants.$$cctor = function()
{
    Mscrm.AdvancedFindConstants.$4j = ["//condition[@entityname]"]
};
Mscrm.AdvancedFindConstants.GetAdvancedFetchFeaturesList = function()
{
    return Mscrm.AdvancedFindConstants.$4j
};
Mscrm.SfaTabsConstants = function() {};
Mscrm.RibbonCommandDefinition = function() {};
Mscrm.RibbonCommandDefinition.prototype = {
    Id: null,
    EnableRules: null,
    DisplayRules: null,
    Actions: null
};
Mscrm.ActionAttributes = function() {};
Mscrm.RibbonSelectionDataType = function() {};
Mscrm.NavigationMode = function() {};
Mscrm.NotificationSeverity = function() {};
Mscrm.NotificationSource = function() {};
Mscrm.RecordSetNavigation = function() {};
Mscrm.ScriptEvents = function() {};
Mscrm.InlineCommands = function() {};
Mscrm.InlineDataFormatTagName = function() {};
Mscrm.RecordPrivilegeType = function() {};
Mscrm.RefreshCommandBarVisibilityRule = function() {};
Mscrm.RefreshFormMarker = function() {};
Mscrm.IconUtil = function() {};
Mscrm.IconUtil.createUri = function(format, encodedSuffix)
{
    return Mscrm.CrmUri.create(String.format(format, encodedSuffix))
};
Mscrm.IconUtil.getIconPath = function(objectTypeCode, iconType, cache, suffix)
{
    var $v_0 = null;
    if(IsNull(suffix)) suffix = Mscrm.IconUtil.$9R(objectTypeCode.toString(), objectTypeCode, iconType);
    cache = IsNull(cache) ? true : cache;
    if(objectTypeCode >= 1e4) $v_0 = Mscrm.IconUtil.$9C(objectTypeCode, iconType, cache);
    else
    {
        var $v_1 = CrmEncodeDecode.CrmUrlEncode(suffix);
        switch(iconType)
        {
            case 0:
                $v_0 = Mscrm.IconUtil.createUri("/_imgs/ico_16_{0}", $v_1);
                break;
            case 1:
                $v_0 = Mscrm.IconUtil.createUri("/_imgs/ico_16_{0}", $v_1);
                break;
            case 2:
                $v_0 = Mscrm.IconUtil.createUri("/_imgs/ico_18_{0}", $v_1);
                break;
            case 3:
                $v_0 = Mscrm.IconUtil.createUri("/_imgs/olk_{0}", $v_1);
                break;
            case 4:
                $v_0 = Mscrm.IconUtil.createUri("/_imgs/ico_lrg_{0}", $v_1);
                break;
            case 7:
                $v_0 = Mscrm.IconUtil.createUri("/_imgs/formentity/ico_fhe_{0}", $v_1);
                break;
            case 5:
                $v_0 = Mscrm.IconUtil.createUri("/_imgs/ribbon/entity16_{0}", $v_1);
                break;
            case 6:
                $v_0 = Mscrm.IconUtil.createUri("/_imgs/ribbon/entity32_{0}", $v_1);
                break;
            default:
                $v_0 = Mscrm.CrmUri.create("");
                break
        }
    }
    return $v_0
};
Mscrm.IconUtil.hasSeparateRightToLeftImage = function(objectTypeCode, iconType)
{
    switch(iconType)
    {
        case 7:
            switch(objectTypeCode)
            {
                case 4401:
                case 4206:
                    return true
            }
            break
    }
    return false
};
Mscrm.IconUtil.$9C = function($p0, $p1, $p2)
{
    var $v_0;
    switch($p1)
    {
        case 5:
            $v_0 = Mscrm.IconUtil.createUri("/_imgs/ribbon/entity16_{0}", "Custom.png");
            break;
        case 6:
            $v_0 = Mscrm.IconUtil.createUri("/_imgs/ribbon/entity32_{0}", "Custom.png");
            break;
        default:
            $v_0 = Mscrm.IconUtil.$9K($p0, $p1, $p2);
            break
    }
    return $v_0
};
Mscrm.IconUtil.$9K = function($p0, $p1, $p2)
{
    var $v_0 = Mscrm.CrmUri.create("/_Common/icon.aspx");
    $v_0.get_query()["objectTypeCode"] = $p0.toString();
    $v_0.get_query()["iconType"] = Mscrm.IconType.toString($p1);
    $v_0.get_query()["cache"] = $p2 ? "1" : "0";
    return $v_0
};
Mscrm.IconUtil.getFileExtension = function(objectTypeCode, iconType)
{
    if(typeof objectTypeCode === "string") objectTypeCode = parseInt(objectTypeCode);
    switch(iconType)
    {
        case 0:
        case 1:
            switch(objectTypeCode)
            {
                case 4709:
                case 3231:
                case 9804:
                case 4608:
                case 4618:
                case 4605:
                case 7101:
                case 9600:
                case 1001:
                case 5:
                case 9602:
                case 9603:
                case 9604:
                case 4710:
                case 4703:
                case 1111:
                case 1112:
                case 1201:
                case 1200:
                case 9502:
                case 9508:
                case 7105:
                case 4406:
                case 8006:
                case 8003:
                case 8e3:
                case 9507:
                    return ".png";
                default:
                    return ".gif"
            }
        case 2:
            switch(objectTypeCode)
            {
                case 3234:
                case 3231:
                case 9333:
                case 9804:
                case 7101:
                case 1201:
                case 1200:
                case 9603:
                case 9600:
                case 9602:
                    return ".png";
                default:
                    return ".gif"
            }
        case 4:
            switch(objectTypeCode)
            {
                case 2029:
                case 3234:
                case 3231:
                case 9333:
                case 9804:
                case 7100:
                case 7101:
                case 4710:
                case 4703:
                case 1201:
                case 1200:
                    return ".png";
                default:
                    return ".gif"
            }
        case 3:
            return ".ico";
        case 5:
        case 6:
        case 7:
            return ".png";
        default:
            return ".gif"
    }
};
Mscrm.IconUtil.$9R = function($p0, $p1, $p2)
{
    var $v_0 = false;
    switch($p1)
    {
        case 135:
        case 1003:
        case 1004:
        case 1017:
        case 1019:
        case 1021:
        case 1023:
        case 1037:
        case 1086:
        case 150:
        case 2012:
        case 2027:
        case 3e3:
        case 4004:
        case 4007:
        case 4102:
        case 33:
        case 4600:
        case 4601:
        case 4602:
        case 4603:
        case 4110:
        case 6:
        case 4101:
        case 29:
        case 30:
        case 1072:
        case 4417:
        case 34:
        case 4415:
        case 4416:
        case 4023:
        case 4413:
        case 4423:
        case 4705:
        case 4419:
        case 4420:
        case 4418:
        case 4606:
        case 4607:
        case 4613:
        case 4615:
        case 4609:
        case 4614:
        case 4610:
        case 4611:
        case 4426:
        case 4702:
        case 14:
        case 4704:
        case 0:
        case 4427:
        case 4707:
        case 31:
        case 4501:
        case 4425:
        case 36:
        case 4708:
        case 4010:
        case 4011:
        case 4616:
        case 4810:
        case 4812:
        case 4811:
        case 4800:
        case 4803:
        case 4802:
        case 9107:
            $p0 = "systemEntity";
            break;
        case 4212:
        case 4401:
        case 4206:
        case 4208:
            if($p2 === 4 && Mscrm.IconUtil.isIconFlipped($p1, 4)) $v_0 = true;
            break
    }
    if($p0.length <= 0) $p0 = "systemEntity";
    var $v_1 = window.LOCID_UI_DIR === "RTL";
    if($v_0 || $v_1 && Mscrm.IconUtil.hasSeparateRightToLeftImage($p1, $p2)) $p0 += "_rtl";
    return $p0 + Mscrm.IconUtil.getFileExtension($p1, $p2)
};
Mscrm.IconUtil.isIconFlipped = function(objectTypeCode, iconType)
{
    if(IsNull(objectTypeCode)) return window.LOCID_UI_DIR === "RTL";
    var $v_0 = false;
    switch(iconType)
    {
        case 0:
        case 2:
        case 3:
            break;
        case 7:
        case 4:
            switch(objectTypeCode)
            {
                case 135:
                case 5:
                case 10:
                case 132:
                case 1003:
                case 1004:
                case 3234:
                case 3231:
                case 4502:
                case 1201:
                case 1017:
                case 1019:
                case 1021:
                case 9804:
                case 1023:
                case 1037:
                case 1036:
                case 1086:
                case 150:
                case 2012:
                case 2027:
                case 2029:
                case 3e3:
                case 4004:
                case 4007:
                case 4102:
                case 33:
                case 4600:
                case 4602:
                case 4603:
                case 4110:
                case 6:
                case 4101:
                case 29:
                case 30:
                case 1072:
                case 4417:
                case 4415:
                case 4416:
                case 4023:
                case 4413:
                case 4423:
                case 4705:
                case 4419:
                case 4420:
                case 4418:
                case 4605:
                case 4500:
                case 4606:
                case 4607:
                case 4613:
                case 4608:
                case 4615:
                case 4609:
                case 4614:
                case 4610:
                case 4611:
                case 4426:
                case 4702:
                case 14:
                case 4703:
                case 4704:
                case 0:
                case 4427:
                case 4707:
                case 31:
                case 4501:
                case 4425:
                case 36:
                case 4708:
                case 4010:
                case 4011:
                case 4616:
                case 7100:
                case 4810:
                case 4812:
                case 4811:
                case 4800:
                case 4803:
                case 4802:
                case 9107:
                case 4212:
                case 4401:
                case 1116:
                case 1115:
                case 1117:
                case 1113:
                case 1130:
                case 9100:
                case 4230:
                case 9333:
                    break;
                default:
                    $v_0 = Mscrm.IconUtil.isIconFlipped();
                    break
            }
            break
    }
    return $v_0
};
Mscrm.InlineEditConstants = function() {};
Mscrm.NavBarSharedConstants = function() {};
Mscrm.RibbonConstants = function() {};
Mscrm.RuleAppliesTo = function() {};
Mscrm.RibbonRuleRelationshipType = function() {};
Mscrm.RibbonContexts = function() {};
Mscrm.BaseJsonResponse = function() {};
Mscrm.BaseJsonResponse.prototype = {
    Header: null,
    Markup: null
};
Mscrm.ControlJsonResponse = function()
{
    Mscrm.ControlJsonResponse.initializeBase(this)
};
Mscrm.PageJsonResponse = function()
{
    Mscrm.PageJsonResponse.initializeBase(this)
};
Mscrm.HeaderJsonObject = function() {};
Mscrm.HeaderJsonObject.prototype = {
    Title: null,
    ScriptList: null,
    StyleList: null,
    ScriptListIndex: 0,
    State: null
};
Mscrm.ScriptJsonObject = function() {};
Mscrm.ScriptJsonObject.prototype = {
    Script: null,
    Type: null,
    Id: null,
    AlwaysProcess: false
};
Mscrm.StyleJsonObject = function() {};
Mscrm.StyleJsonObject.prototype = {
    Style: null,
    Type: null,
    Id: null
};
Mscrm.TypeOfResource = function() {};
Mscrm.AggregatePerformanceMarkers = function()
{
    this.$o_0 = {}
};
Mscrm.AggregatePerformanceMarkers.get_aggregateMarkers = function()
{
    if(!Mscrm.AggregatePerformanceMarkers.$3R) Mscrm.AggregatePerformanceMarkers.$3R = new Mscrm.AggregatePerformanceMarkers;
    return Mscrm.AggregatePerformanceMarkers.$3R
};
Mscrm.AggregatePerformanceMarkers.beginMarker = function(name)
{
    if(!(name in Mscrm.AggregatePerformanceMarkers.get_aggregateMarkers().$o_0)) Mscrm.AggregatePerformanceMarkers.get_aggregateMarkers().$o_0[name] = new Mscrm.AggregateMarker;
    Mscrm.AggregatePerformanceMarkers.get_aggregateMarkers().$o_0[name].beginMarker()
};
Mscrm.AggregatePerformanceMarkers.endMarker = function(name)
{
    if(!(name in Mscrm.AggregatePerformanceMarkers.get_aggregateMarkers().$o_0)) return;
    Mscrm.AggregatePerformanceMarkers.get_aggregateMarkers().$o_0[name].endMarker();
    setAttributeInWindow(name, Mscrm.AggregatePerformanceMarkers.get_aggregateMarkers().$o_0[name].$2m_0.toString())
};
Mscrm.AggregatePerformanceMarkers.getMarkerByName = function(name)
{
    return Mscrm.AggregatePerformanceMarkers.get_aggregateMarkers().$o_0[name]
};
Mscrm.AggregatePerformanceMarkers.resetMarker = function(name)
{
    var $v_0 = Mscrm.AggregatePerformanceMarkers.get_aggregateMarkers().$o_0[name];
    if(IsNull($v_0)) return;
    $v_0.reset()
};
Mscrm.AggregatePerformanceMarkers.getMarkerValue = function(name, type)
{
    var $v_0 = Mscrm.AggregatePerformanceMarkers.get_aggregateMarkers().$o_0[name];
    if(IsNull($v_0)) return 0;
    switch(type)
    {
        case 2:
            return $v_0.$2m_0;
        case 1:
            return $v_0.$2r_0;
        case 5:
            return $v_0.$2c_0;
        case 4:
            return $v_0.$2O_0;
        case 3:
            return $v_0.$2S_0;
        case 0:
            return $v_0.$1E_0;
        default:
            return Number.NaN
    }
};
Mscrm.AggregatePerformanceMarkers.prototype = {
    $o_0: null,
    get_markers: function()
    {
        return this.$o_0
    },
    accept: function(visitor)
    {
        visitor.visit(Mscrm.AggregatePerformanceMarkers.get_aggregateMarkers())
    }
};
Mscrm.AggregateMarker = function()
{
    this.$2S_0 = Number.MAX_VALUE;
    this.$2O_0 = -1;
    this.$1n_0 = -1
};
Mscrm.AggregateMarker.prototype = {
    $1E_0: 0,
    $6Q_0: 0,
    $2r_0: 0,
    $2c_0: 0,
    $2m_0: 0,
    get_min: function()
    {
        return this.$2S_0
    },
    get_max: function()
    {
        return this.$2O_0
    },
    get_lastDuration: function()
    {
        return this.$1E_0
    },
    get_lastTime: function()
    {
        return this.$6Q_0
    },
    get_count: function()
    {
        return this.$2r_0
    },
    get_sum: function()
    {
        return this.$2c_0
    },
    get_average: function()
    {
        return this.$2m_0
    },
    beginMarker: function(currentValueMethod)
    {
        if(IsNull(currentValueMethod)) this.$1n_0 = (new Date).getTime();
        else this.$1n_0 = currentValueMethod()
    },
    endMarker: function(currentValueMethod)
    {
        var $v_0;
        if(IsNull(currentValueMethod)) $v_0 = (new Date).getTime();
        else $v_0 = currentValueMethod();
        if(this.$1n_0 <= 0) return;
        this.$2r_0++;
        this.$1E_0 = $v_0 - this.$1n_0;
        if(this.$1E_0 > this.$2O_0) this.$2O_0 = this.$1E_0;
        if(this.$1E_0 < this.$2S_0) this.$2S_0 = this.$1E_0;
        this.$6Q_0 = $v_0;
        this.$2c_0 = this.$2c_0 + this.$1E_0;
        this.$2m_0 = Math.round(this.$2c_0 / this.$2r_0);
        this.$1n_0 = -1
    },
    reset: function()
    {
        this.$2S_0 = Number.MAX_VALUE;
        this.$1E_0 = 0;
        this.$2O_0 = -1;
        this.$2r_0 = 0;
        this.$2c_0 = 0;
        this.$2m_0 = 0;
        this.$1n_0 = -1
    }
};
Mscrm.ClientApiCollection = function()
{
    this.$3X_0 = 0;
    this.$8_0 = []
};
Mscrm.ClientApiCollection.prototype = {
    $8_0: null,
    $3E_0: false,
    dispose: function()
    {
        Array.clear(this.$8_0)
    },
    get_wrapItems: function()
    {
        return this.$3E_0
    },
    set_wrapItems: function(value)
    {
        this.$3E_0 = value;
        return value
    },
    get_collectionType: function()
    {
        return this.$3X_0
    },
    set_collectionType: function(value)
    {
        this.$3X_0 = value;
        return value
    },
    forEach: function(actions, filter)
    {
        var $v_0 = false;
        if(IsNull(filter)) $v_0 = true;
        for(var $v_1 = 0; $v_1 < this.$8_0.length; $v_1++)
        {
            var $v_2 = this.$3K_0($v_1);
            ($v_0 || filter($v_2, $v_1)) && actions($v_2, $v_1)
        }
    },
    "get": function(filter)
    {
        if(IsNull(filter))
        {
            Mscrm.Utilities.syncInitAllControls();
            return this.$85_0()
        }
        switch(typeof filter)
        {
            case "function":
                Mscrm.Utilities.syncInitAllControls();
                return this.$99_0(filter);
            case "string":
                Mscrm.Utilities.tryInitOnDemandControl(filter);
                for(var $v_1 = 0; $v_1 < this.$8_0.length; $v_1++)
                    if(this.$8_0[$v_1].getKey() === filter) return this.$3K_0($v_1);
                if(this.$3X_0 === 1) return this.$AH_0(filter);
                return null;
            case "number":
                var $v_0 = parseInt(filter, 10);
                Mscrm.Utilities.syncInitAllControls();
                return this.$3K_0($v_0);
            default:
                Mscrm.Utilities.syncInitAllControls();
                return this.$85_0()
        }
    },
    getFirst: function(filter)
    {
        for(var $v_0 = 0; $v_0 < this.$8_0.length; $v_0++)
        {
            var $v_1 = this.$3K_0($v_0);
            if(filter($v_1, $v_0)) return $v_1
        }
        return null
    },
    getLength: function()
    {
        return this.$8_0.length
    },
    add: function(item)
    {
        Array.add(this.$8_0, item)
    },
    getWrapperCollection: function()
    {
        var $v_0 = new Mscrm.ClientApiCollection;
        $v_0.$8_0 = this.$8_0;
        $v_0.$3E_0 = true;
        return $v_0
    },
    remove: function(item)
    {
        Array.remove(this.$8_0, item)
    },
    $99_0: function($p0)
    {
        for(var $v_0 = [], $v_1 = 0; $v_1 < this.$8_0.length; $v_1++)
        {
            var $v_2 = this.$3K_0($v_1);
            $p0($v_2, $v_1) && Array.add($v_0, $v_2)
        }
        return $v_0
    },
    $A2_0: function($p0)
    {
        if(Mscrm.Utilities.isRefreshForm())
        {
            var $v_0 = Mscrm.InlineControlViewBase.isInstanceOfType($p0);
            if($v_0) !$p0.get_isEditControlInitialized() && $p0.initializeAndRenderEditView()
        }
    },
    $AH_0: function($p0)
    {
        var $v_0 = $p0,
            $v_1 = typeof ProcessControl !== "undefined" && typeof ProcessControl.ClientApi !== "undefined";
        if($v_1)
        {
            var $v_2 = ProcessControl.ClientApi.LightWeightAttributeManager.get_instance();
            if(!IsNull($v_2)) return $v_2.getWrapper($v_0)
        }
        return null
    },
    $3K_0: function($p0)
    {
        var $v_0 = this.$8_0[$p0];
        if($v_0)
        {
            this.$A2_0($v_0);
            return this.$3E_0 ? $v_0.getWrapper() : $v_0
        }
        return null
    },
    $9V_0: function($p0)
    {
        for(var $v_0 = [], $v_1 = 0; $v_1 < $p0.length; $v_1++) Array.add($v_0, $p0[$v_1].getWrapper());
        return $v_0
    },
    $85_0: function()
    {
        if(this.$3E_0) return this.$9V_0(this.$8_0);
        return this.$8_0
    }
};
Mscrm.GlobalContext = function()
{
    this.client = new Mscrm.XrmPageContextClient
};
Mscrm.GlobalContext.prototype = {
    getOrgLcid: function()
    {
        return window.ORG_LANGUAGE_CODE
    },
    getOrgUniqueName: function()
    {
        return window.ORG_UNIQUE_NAME
    },
    getQueryStringParameters: function()
    {
        var $v_0 = Mscrm.CrmUri.create(window.location.href);
        if(Mscrm.Utilities.isRefreshForm())
        {
            var $v_1 = $v_0.get_query()["extraqs"];
            if(!IsNull($v_1))
            {
                var $v_2 = Mscrm.CrmUri.create($v_1);
                return $v_2.get_query()
            }
            else return $v_0.get_query()
        }
        else return $v_0.get_query()
    },
    getClientUrl: function()
    {
        var $v_0 = window.location.href.indexOf(window.location.pathname),
            $v_1 = Mscrm.CrmUri.create(window.location.href.substring(0, $v_0)),
            $v_2 = window.IS_PATHBASEDURLS;
        if(IsNull($v_2)) $v_2 = window.top.IS_PATHBASEDURLS;
        $v_2 && (!window.IS_OUTLOOK_CLIENT || window.IS_ONLINE) && $v_1.set_useOrganizationName(true);
        var $v_3 = $v_1.toString(),
            $v_4 = $v_3.length - 1;
        if($v_3.indexOf("/", $v_4) !== -1) $v_3 = $v_3.substring(0, $v_4);
        return $v_3
    },
    getUserId: function()
    {
        return window.USER_GUID
    },
    getUserName: function()
    {
        return window.USER_NAME
    },
    getUserLcid: function()
    {
        return window.USER_LANGUAGE_CODE
    },
    getUserRoles: function()
    {
        return window.USER_ROLES
    },
    isCrmOnline: function()
    {
        return window.IS_LIVE
    },
    isOffice365: function()
    {
        return window._bIsOsdpOrg
    },
    prependOrgName: function(url)
    {
        return prependOrgName(url)
    },
    getCurrentTheme: function()
    {
        if(window.IS_OUTLOOK_CLIENT) return window.CURRENT_THEME_TYPE;
        else return window.CURRENT_WEB_THEME
    },
    saveMode: 0,
    getIsAutoSaveEnabled: function()
    {
        return window.AUTO_SAVE_ENABLED
    }
};
Mscrm.XrmPage = function() {};
Mscrm.XrmPage.getAttribute = function(name)
{
    if(!IsNull(Xrm.Page.data)) return Xrm.Page.data.entity.attributes.get(name);
    return null
};
Mscrm.XrmPage.getControl = function(id)
{
    return Xrm.Page.ui.controls.get(id)
};
Mscrm.XrmSdkMessages = function() {};
Mscrm.XrmSdkMessages.prototype = {
    $6b_0: null,
    get_$2_0: function()
    {
        return this.$6b_0 || (this.$6b_0 = new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService(Xrm.Page.context.getClientUrl()))
    },
    addDynamicProperty: function(regardingObject, dynamicProperty)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AddDynamicPropertyRequest(regardingObject, dynamicProperty);
        return this.get_$2_0().execute($v_0)
    },
    addRecurrence: function(entity, appointmentId)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AddRecurrenceRequest(entity, appointmentId);
        return this.get_$2_0().execute($v_0)
    },
    assign: function(targetEntityName, targetEntityId, assigneeEntityName, assigneeEntityId)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference(targetEntityName, new Microsoft.Dynamics.Client.Core.Framework.Guid(targetEntityId)),
            $v_1 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference(assigneeEntityName, new Microsoft.Dynamics.Client.Core.Framework.Guid(assigneeEntityId)),
            $v_2 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AssignRequest($v_0, $v_1);
        return this.get_$2_0().execute($v_2)
    },
    associate: function(target, relationshipName, relatedEntities)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship(relationshipName);
        target.LogicalName === relatedEntities[0].LogicalName && $v_0.set_primaryEntityRole(1);
        var $v_1 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AssociateRequest(target, $v_0, relatedEntities);
        return this.get_$2_0().execute($v_1)
    },
    book: function(entity)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.BookRequest(entity, true, true);
        return this.get_$2_0().execute($v_0)
    },
    cloneProduct: function(source)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CloneProductRequest(source);
        return this.get_$2_0().execute($v_0)
    },
    convertActivity: function(activityId, activityEntityName, targetEntity, targetEntityName, createCampaignResponse)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ConvertActivityRequest(new Microsoft.Dynamics.Client.Core.Framework.Guid(activityId), activityEntityName, targetEntity, targetEntityName, createCampaignResponse);
        return this.get_$2_0().execute($v_0)
    },
    create: function(entity)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateRequest(entity);
        return this.get_$2_0().execute($v_0)
    },
    createEntityFrom: function(parentEntity, targetEntityName, targetFieldType)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.InitializeFromRequest(parentEntity, targetEntityName, targetFieldType);
        return this.get_$2_0().execute($v_0)
    },
    createProducts: function(entities, parentEntity)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateProductsRequest(entities, parentEntity);
        return this.get_$2_0().execute($v_0)
    },
    deleteEntity: function(targetEntityName, targetEntityId)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference(targetEntityName, new Microsoft.Dynamics.Client.Core.Framework.Guid(targetEntityId)),
            $v_1 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DeleteRequest($v_0);
        return this.get_$2_0().execute($v_1)
    },
    disassociate: function(target, relationship, relatedEntities)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DisassociateRequest(target, relationship, relatedEntities);
        return this.get_$2_0().execute($v_0)
    },
    executeQuickFind: function(searchText, entityGroupName, entityNames)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ExecuteQuickFindRequest(searchText, entityGroupName, entityNames);
        return this.get_$2_0().execute($v_0)
    },
    getDefaultPriceLevel: function(entityName)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.GetDefaultPriceLevelRequest(entityName);
        return this.get_$2_0().execute($v_0)
    },
    inviteUser: function(userId)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.InviteUserRequest(new Microsoft.Dynamics.Client.Core.Framework.Guid(userId));
        return this.get_$2_0().execute($v_0)
    },
    loseOpportunity: function(opportunityClose, statusCode)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.LoseOpportunityRequest(opportunityClose, statusCode);
        return this.get_$2_0().execute($v_0)
    },
    overrideDynamicProperty: function(regardingObject, dynamicProperty)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.OverrideDynamicPropertyRequest(regardingObject, dynamicProperty);
        return this.get_$2_0().execute($v_0)
    },
    overwriteDynamicProperty: function(regardingObject, dynamicProperty)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.OverwriteDynamicPropertyRequest(regardingObject, dynamicProperty);
        return this.get_$2_0().execute($v_0)
    },
    overrideDynamicProperties: function(regardingObject, propertiesList)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.OverrideDynamicPropertiesRequest(regardingObject, propertiesList);
        return this.get_$2_0().execute($v_0)
    },
    qualifyLead: function(leadId, createAccount, createContact, createOpportunity, opportunityCurrencyId, opportunityCustomerId, sourceCampaignId, status, suppressDuplicateDetection)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.QualifyLeadRequest(leadId, createAccount, createContact, createOpportunity, opportunityCurrencyId, opportunityCustomerId, sourceCampaignId, status, suppressDuplicateDetection);
        return this.get_$2_0().execute($v_0)
    },
    removeDynamicProperty: function(regardingObject, dynamicProperty)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RemoveDynamicPropertyRequest(regardingObject, dynamicProperty);
        return this.get_$2_0().execute($v_0)
    },
    reschedule: function(entity)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RescheduleRequest(entity, true, true);
        return this.get_$2_0().execute($v_0)
    },
    retrieve: function(targetEntityName, targetEntityId, columnNames)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference(targetEntityName, new Microsoft.Dynamics.Client.Core.Framework.Guid(targetEntityId)),
            $v_1 = new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(columnNames),
            $v_2 = false,
            $v_3 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveRequest($v_0, $v_1, null, $v_2);
        return this.get_$2_0().execute($v_3)
    },
    retrieveAncestors: function(targetEntityName, targetEntityId, columnNames)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference(targetEntityName, new Microsoft.Dynamics.Client.Core.Framework.Guid(targetEntityId)),
            $v_1 = new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(columnNames),
            $v_2 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveAncestorsRequest($v_0, $v_1);
        return this.get_$2_0().execute($v_2)
    },
    retrieveProductProperties: function(parentObject)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveProductPropertiesRequest(parentObject);
        return this.get_$2_0().execute($v_0)
    },
    retrieveEntityDynamicPropertyDefinitions: function(regardingObject, forDraftRegarding)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveEntityDynamicPropertyDefinitionsRequest(regardingObject, forDraftRegarding);
        return this.get_$2_0().execute($v_0)
    },
    revertProduct: function(target)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RevertProductRequest(target);
        return this.get_$2_0().execute($v_0)
    },
    retrieveMultiple: function(fetchXml)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveMultipleRequest(fetchXml);
        return this.get_$2_0().execute($v_0)
    },
    setState: function(targetEntityName, targetEntityId, state, status)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference(targetEntityName, new Microsoft.Dynamics.Client.Core.Framework.Guid(targetEntityId)),
            $v_1 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.SetStateRequest($v_0, state, status, true);
        return this.get_$2_0().execute($v_1)
    },
    update: function(entity)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpdateRequest(entity);
        return this.get_$2_0().execute($v_0)
    },
    updateProductProperties: function(propertyInstanceList)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpdateProductPropertiesRequest(propertyInstanceList);
        return this.get_$2_0().execute($v_0)
    },
    whoAmI: function()
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.WhoAmIRequest;
        return this.get_$2_0().execute($v_0)
    },
    winOpportunity: function(opportunityClose, statusCode)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.WinOpportunityRequest(opportunityClose, statusCode);
        return this.get_$2_0().execute($v_0)
    },
    closeIncident: function(incidentResolution, statusCode)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CloseIncidentRequest(incidentResolution, statusCode);
        return this.get_$2_0().execute($v_0)
    },
    getValidStatusTransition: function(incidentId, statusCode)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.GetValidStatusTransitionRequest(incidentId, statusCode);
        return this.get_$2_0().execute($v_0)
    },
    checkoutFiles: function(documentRecord)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CheckoutDocumentRequest(documentRecord);
        return this.get_$2_0().execute($v_0)
    },
    checkInFiles: function(documentRecord, checkInComments, retainCheckout)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CheckInDocumentRequest(documentRecord, checkInComments, retainCheckout);
        return this.get_$2_0().execute($v_0)
    },
    deleteDocument: function(documentRecords)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DeleteDocumentRequest(documentRecords);
        return this.get_$2_0().execute($v_0)
    },
    discardCheckoutFiles: function(documentRecord)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DiscardDocumentCheckoutRequest(documentRecord);
        return this.get_$2_0().execute($v_0)
    },
    editDocumentProperties: function(documentRecord)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.EditDocumentPropertiesRequest(documentRecord);
        return this.get_$2_0().execute($v_0)
    },
    createFolder: function(folderName, objType, objId)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateFolderRequest(folderName, objType, objId);
        return this.get_$2_0().execute($v_0)
    },
    searchDocument: function(objType, objId, docId)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.SearchDocumentRequest(objType, objId, docId);
        return this.get_$2_0().execute($v_0)
    },
    addOrEditLocation: function(locationName, absPath, regardingObjectId, relativePath, regardingObjType, parentType, parentId, isAddOrEditMode, isCreateFolder, documentId)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AddOrEditLocationRequest(locationName, absPath, regardingObjectId, relativePath, regardingObjType, parentType, parentId, isAddOrEditMode, isCreateFolder, documentId);
        return this.get_$2_0().execute($v_0)
    },
    newDocument: function(fileName, regardingObjectId, regardingObjectTypeCode, locationId)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.NewDocumentRequest(fileName, regardingObjectId, regardingObjectTypeCode, locationId);
        return this.get_$2_0().execute($v_0)
    },
    fetchSiteUrl: function(documentId, regardingObjectId, regardingObjType)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.FetchSiteUrlRequest(documentId, regardingObjectId, regardingObjType);
        return this.get_$2_0().execute($v_0)
    },
    createDocumentLibraries: function(documentLibraryNames, siteLoc)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateDocumentLibrariesRequest(documentLibraryNames, siteLoc);
        return this.get_$2_0().execute($v_0)
    },
    updateDocumentManagementSettings: function(siteCollection, folderStructureEntity, entityDocXml, validateStatus, validateStatusReason)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpdateDocumentManagementSettingsRequest(siteCollection, folderStructureEntity, entityDocXml, validateStatus, validateStatusReason);
        return this.get_$2_0().execute($v_0)
    },
    validateUrl: function(siteLoc)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ValidateUrlRequest(siteLoc);
        return this.get_$2_0().execute($v_0)
    },
    migrateToS2S: function(siteLoc)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.MigrateToS2SRequest(siteLoc);
        return this.get_$2_0().execute($v_0)
    },
    upgradeToS2S: function()
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpgradeToS2SRequest;
        return this.get_$2_0().execute($v_0)
    },
    publishProductHierarchy: function(target)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.PublishProductHierarchyRequest(target);
        return this.get_$2_0().execute($v_0)
    },
    retrieveFilteredProcesses: function(entityTypeName)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveFilteredProcessesRequest(entityTypeName);
        return this.get_$2_0().execute($v_0)
    },
    retrieveSharedPrincipalsAndAccess: function(target)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveSharedPrincipalsAndAccessRequest(target);
        return this.get_$2_0().execute($v_0)
    },
    retrievePrincipalAccess: function(target, principal)
    {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrievePrincipalAccessRequest(target, principal);
        return this.get_$2_0().execute($v_0)
    }
};
Mscrm.XrmPageContextClient = function() {};
Mscrm.XrmPageContextClient.prototype = {
    getClient: function()
    {
        if(window.IS_OUTLOOK_CLIENT) return Xrm.ClientNames.outlook;
        else if(Mscrm.Utilities.isUsdClient()) return Xrm.ClientNames.unifiedServiceDesk;
        return Xrm.ClientNames.web
    },
    getClientState: function()
    {
        if(window.IS_ONLINE) return "Online";
        return "Offline"
    }
};
Mscrm.XrmUtility = function() {};
Mscrm.XrmUtility.openEntityForm = function(name, id, parameters)
{
    if(IsNull(name)) throw Error.create("name must not be null.");
    var $v_0 = Mscrm.EntityPropUtil.EntityTypeName2CodeMap[name];
    if($v_0 === 1011 && IsNull(id))
    {
        var $v_1 = _guidContractId,
            $v_2 = "?_CreateFromType=" + CrmEncodeDecode.CrmUrlEncode("1010") + "&_CreateFromId=" + CrmEncodeDecode.CrmUrlEncode($v_1);
        return openFrmObj($v_2, buildWinName(null), 1011, null, Mscrm.NavigationMode.DefaultNavigationMode, null)
    }
    else
    {
        var $v_3 = Mscrm.CrmUri.create("temp"),
            $$dict_7 = parameters;
        for(var $$key_8 in $$dict_7)
        {
            var $v_5 = {
                key: $$key_8,
                value: $$dict_7[$$key_8]
            };
            $v_3.get_query()[$v_5.key] = $v_5.value
        }
        var $v_4 = $v_3.get_queryString();
        if(!$v_4.length) $v_4 = null;
        return openObjEtn(name, id, $v_4)
    }
};
Mscrm.XrmUtility.openWebResource = function(webResourceName, webResourceData, width, height)
{
    if(IsNull(webResourceName)) throw Error.create("webResourceName must not be null.");
    var $v_0 = Mscrm.CrmUri.create(String.format("$webresource:{0}", webResourceName));
    !isNullOrEmptyString(webResourceData) && $v_0.appendToQuery(String.format("Data={0}", webResourceData));
    return openStdWin($v_0, null, width, height, "scrollbars=1,toolbar=1,menubar=1,location=1")
};
Mscrm.XrmUtility.alertDialog = function(message, onCloseCallback)
{
    alert(message);
    !IsNull(onCloseCallback) && onCloseCallback()
};
Mscrm.XrmUtility.confirmDialog = function(message, yesCloseCallback, noCloseCallback)
{
    var $v_0 = confirm(message);
    if($v_0) !IsNull(yesCloseCallback) && yesCloseCallback();
    else !IsNull(noCloseCallback) && noCloseCallback()
};
Mscrm.XrmUtility.isActivityType = function(entityName)
{
    return Mscrm.EntityPropUtil.isActivityType(entityName)
};
Mscrm.XrmInternal = function() {};
Mscrm.XrmInternal.getResourceString = function(key)
{
    switch(key)
    {
        case "Error_Message_Action_NoItemSelected":
            return window.LOCID_ACTION_NOITEMSELECTED;
        case "Grid_Apply_Rule_Heterogenous_Activity_Type_Records_Selected":
            return window.LOCID_HETROGENEOUS_ACTIVITY;
        case "Grid_Apply_Rule_Selected_Emails":
            return window.LOCID_INCOM_TYPE_EMAIL;
        case "Grid_Apply_Rule_Selected_Records":
            return window.LOCID_INCOM_TYPE_CAMP;
        case "MenuItem_Delete_Equipment_Confirm_Part1":
            return window.LOCID_DELETE_CONFIRM_ONE;
        case "MenuItem_Delete_Equipment_Confirm_Part2":
            return window.LOCID_DELETE_CONFIRM_TWO;
        case "Message.SolutionHomePage.OnlySelectOne":
            return window.LOCID_ONLYSELECTONE_WARN;
        case "Audit.LogManagement.InUsePartition":
            return window.LOCID_ERROR_IN_USE_PARTITION;
        case "Audit.LogManagement.SelectOldest":
            return window.LOCID_ERROR_NOT_OLDEST;
        default:
            var $v_0 = window[key];
            if(!isNullOrEmptyString($v_0)) return $v_0;
            else return key
    }
};
Mscrm.XrmInternal.getEntityCode = function(entityName)
{
    if(isNullOrEmptyString(entityName)) throw Error.create("entityName must not be null or empty.");
    if(IsNull(Mscrm.EntityPropUtil.EntityTypeName2CodeMap)) throw Error.create("EntityPropUtil.EntityTypeName2CodeMap is empty.");
    if(entityName in Mscrm.EntityPropUtil.EntityTypeName2CodeMap) return Number.parseInvariant(Mscrm.EntityPropUtil.EntityTypeName2CodeMap[entityName].toString());
    return -1
};
Mscrm.XrmInternal.raiseRecordsDeletedEvent = function(itemIds)
{
    if(IsNull(itemIds) || !itemIds.length) return;
    try
    {
        if(!IsNull(window.top))
        {
            var $v_0 = $find("crmPageManager");
            if(!IsNull($v_0))
            {
                var $v_1 = {};
                $v_1["objectIds"] = itemIds;
                $v_0.raiseEvent(103, $v_1)
            }
        }
    }
    catch($$e_3)
    {}
};
Mscrm.XrmInternal.getEntityName = function(entityCode)
{
    if(entityCode < 0) throw Error.create("objectTypeCode must be bigger than 0");
    if(IsNull(Mscrm.EntityPropUtil.EntityTypeName2CodeMap)) throw Error.create("EntityPropUtil.EntityTypeName2CodeMap is empty.");
    var $$dict_1 = Mscrm.EntityPropUtil.EntityTypeName2CodeMap;
    for(var $$key_2 in $$dict_1)
    {
        var $v_0 = {
            key: $$key_2,
            value: $$dict_1[$$key_2]
        };
        if(Number.parseInvariant($v_0.value.toString()) === entityCode) return $v_0.key
    }
    return null
};
Mscrm.XrmInternal.parseDate = function(dateTimeRaw)
{
    return Mscrm.DateTimeUtility.parseDate(dateTimeRaw)
};
Mscrm.XrmInternal.openDialog = function(url, dialogOptions, dialogArguments, initFunctionName, returnFunction)
{
    var $v_0 = new Mscrm.CrmDialog(Mscrm.CrmUri.create(url), dialogArguments, dialogOptions.width, dialogOptions.height, null);
    if(!IsNull(returnFunction))
    {
        var $v_1 = {};
        $v_1.context = {};
        $v_1.callback = returnFunction;
        $v_0.setCallbackReference($v_1)
    }
    $v_0.setInitFunctionName(initFunctionName);
    $v_0.setPosition(dialogOptions.left, dialogOptions.top);
    $v_0.show()
};
Mscrm.XrmInternal.refreshParentGrid = function(entityTypeCode, displayName, entityId)
{
    Mscrm.Utilities.refreshParentGrid(entityTypeCode, displayName, entityId)
};
Mscrm.XrmInternal.getErrorMessage = function(errorCode)
{
    if(!IsNull(errorCode))
    {
        var $v_0 = Mscrm.XrmInternal.$9J(errorCode),
            $v_1 = window.errorTable,
            $v_2 = $v_1[$v_0];
        if(isNullOrEmptyString($v_2)) $v_2 = errorCode.toString();
        return $v_2
    }
    return null
};
Mscrm.XrmInternal.$9J = function($p0)
{
    var $v_0 = $p0;
    if($v_0 < 0) $v_0 = $v_0 + 4294967295 + 1;
    var $v_1 = "Error_Message_0x" + $v_0.toString(16);
    return $v_1
};
Mscrm.XrmInternal.reportToWatson = function(message, url, line, sendReportToWatson, caller, exceptionNumber, reportFunctionBody)
{
    catchError(message, url, line, sendReportToWatson, caller, exceptionNumber, reportFunctionBody)
};
Mscrm.XrmInternal.openUrl = function(link)
{
    var $v_0;
    $v_0 = document.createElement("IFrame");
    $v_0.style.display = "none";
    $v_0.src = link;
    document.documentElement.appendChild($v_0);
    window.setTimeout(function()
    {
        document.documentElement.removeChild($v_0);
        $v_0 = null
    }, 50)
};
Mscrm.XrmInternal.openErrorDialog = function(errorCode, message, serializedException)
{
    var $v_0 = "0x" + (errorCode < 0 ? 4294967295 + errorCode + 1 : errorCode).toString(16).toUpperCase();
    if(IsNull(serializedException)) openErrorDlg($v_0, message, null, 0, 0);
    else openErrorDlgWithDetailedInfo($v_0, message, serializedException, 0, 0)
};
Mscrm.XrmInternal.getStatusOptionsFromStateCode = function(entityName, stateCode)
{
    var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Array, Object);
    if(IsNull(entityName) || IsNull(stateCode))
    {
        $v_0.resolve(null);
        return $v_0
    }
    if(!IsNull(Xrm.Page.data) && !IsNull(Xrm.Page.data.entity) && Xrm.Page.data.entity.getEntityName() === entityName)
        if(!IsNull(window.RecordData) && !IsNull(window.RecordData["statuscode"]))
            if(!IsNull(window.RecordData["statuscode"].options))
            {
                var $v_1 = window.RecordData["statuscode"].options;
                $v_0.resolve($v_1[stateCode.toString()]);
                return $v_0
            }
    $v_0.resolve(null);
    return $v_0
};
Mscrm.XrmInternal.getStateCodeFromStatusOption = function(entityName, statusOptionId)
{
    var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Number, Object);
    if(IsNull(entityName) || IsNull(statusOptionId))
    {
        $v_0.resolve(-1);
        return $v_0
    }
    if(!IsNull(Xrm.Page.data) && !IsNull(Xrm.Page.data.entity) && Xrm.Page.data.entity.getEntityName() === entityName)
        if(!IsNull(window.RecordData) && !IsNull(window.RecordData["statuscode"]))
            if(!IsNull(window.RecordData["statuscode"].options))
            {
                var $v_1 = window.RecordData["statuscode"].options,
                    $$dict_4 = $v_1;
                for(var $$key_5 in $$dict_4)
                {
                    var $v_2 = {
                            key: $$key_5,
                            value: $$dict_4[$$key_5]
                        },
                        $v_3 = $v_2.value;
                    if(Array.contains($v_3, statusOptionId))
                    {
                        $v_0.resolve(Number.parseInvariant($v_2.key));
                        return $v_0
                    }
                }
            }
    $v_0.resolve(-1);
    return $v_0
};
Mscrm.ClientApiEventHandlerList = function(systemEvents)
{
    this.$39_0 = systemEvents
};
Mscrm.ClientApiEventHandlerList.prototype = {
    $39_0: null,
    $2e_0: null,
    addHandler: function(id, handler, system)
    {
        if(system) this.$39_0.addHandler(id, handler);
        else
        {
            var $v_0 = this.$5i_0(id, true);
            Array.add($v_0, handler)
        }
    },
    getHandler: function(id)
    {
        var $v_0 = this.$39_0.getHandler(id),
            $v_1 = this.$5i_0(id, false);
        if(!$v_1 || !$v_1.length) return $v_0 ? $v_0 : null;
        $v_1 = Array.clone($v_1);
        var $$t_8 = this;
        return function($p1_0, $p1_1)
        {
            $v_0 && $v_0($p1_0, $p1_1);
            for(var $v_2 = 0; $v_2 < $v_1.length; $v_2++)
            {
                var $v_3 = Mscrm.ClientApiEventHandlerListUtility.constructExecutionObject($p1_0, 0, $p1_1, null),
                    $v_4 = $v_1[$v_2];
                $v_4($v_3)
            }
        }
    },
    removeHandler: function(id, handler)
    {
        this.$39_0.removeHandler(id, handler);
        var $v_0 = this.$5i_0(id, false);
        $v_0 && Array.remove($v_0, handler)
    },
    $5i_0: function($p0, $p1)
    {
        if(!this.$2e_0)
            if($p1) this.$2e_0 = {};
            else return null;
        if(!this.$2e_0[$p0] && $p1) this.$2e_0[$p0] = [];
        return this.$2e_0[$p0]
    },
    clearAllHandler: function()
    {
        Mscrm.Utilities.destroyObject(this.$39_0);
        Mscrm.Utilities.destroyObject(this.$2e_0)
    }
};
Mscrm.ClientApiEventHandlerListUtility = function() {};
Mscrm.ClientApiEventHandlerListUtility.constructExecutionObject = function(eventSource, depth, eventArgs, eContext)
{
    var $v_0 = new Mscrm.ExecutionContext(eventSource, Xrm.Page.context, depth, eventArgs, eContext);
    return $v_0
};
Mscrm.ExecutionContext = function($p0, $p1, $p2, $p3, $p4)
{
    this.$6B_0 = $p0;
    this.$67_0 = $p2;
    this.$63_0 = $p1;
    this.$6A_0 = $p3;
    if($p4 && $p4.$2a_0) this.$2a_0 = $p4.$2a_0;
    else this.$2a_0 = {}
};
Mscrm.ExecutionContext.prototype = {
    $6A_0: null,
    $6B_0: null,
    $67_0: 0,
    $63_0: null,
    $2a_0: null,
    getEventArgs: function()
    {
        return this.$6A_0
    },
    getEventSource: function()
    {
        return this.$6B_0
    },
    getContext: function()
    {
        return this.$63_0
    },
    getDepth: function()
    {
        return this.$67_0
    },
    setSharedVariable: function(key, value)
    {
        this.$2a_0[key] = value
    },
    getSharedVariable: function(key)
    {
        return this.$2a_0[key]
    }
};
Mscrm.DialogSize = function() {};
Mscrm.EntityTypeCode = function() {};
Mscrm.EtcUtil = function() {};
Mscrm.EtcUtil.isUserDefinedEntityObjectTypeCode = function(objectTypeCode)
{
    return objectTypeCode >= 1e4
};

function IsActivityTypeCode(objectTypeCode)
{
    return Mscrm.EntityPropUtil.isActivityTypeCode(objectTypeCode)
}

function IsUserDefinedEntityObjectTypeCode(objectTypeCode)
{
    return Mscrm.EtcUtil.isUserDefinedEntityObjectTypeCode(objectTypeCode)
}
Mscrm.ProductStructure = function() {};
Mscrm.DynamicPropertyDataType = function() {};
Mscrm.DynamicPropertyIsReadOnly = function() {};
Mscrm.DynamicPropertyIsRequired = function() {};
Mscrm.DynamicPropertyIsHidden = function() {};
Mscrm.ProductStatusCode = function() {};
Mscrm.ProductStateCode = function() {};
Mscrm.ProductStateCodeDescription = function() {};
Mscrm.EventKeys = function() {};
Mscrm.LocaleIds = function() {};
Mscrm.NavBarStatusConstant = function() {};
Mscrm.SolutionComponentType = function() {};
Mscrm.WebResourceConstants = function() {};
Mscrm.DialogsControl = function()
{
    this.$$d_messageHandler = Function.createDelegate(this, this.messageHandler);
    this.$$d_$9X_2 = Function.createDelegate(this, this.$9X_2);
    Mscrm.DialogsControl.initializeBase(this)
};
Mscrm.DialogsControl.IsValid = function()
{
    for(var $v_0 = document.body.getElementsByTagName("*"), $v_1 = 0; $v_1 < $v_0.length; $v_1++)
    {
        var $v_2 = $v_0[$v_1];
        switch($v_2.tagName)
        {
            case "INPUT":
            case "SELECT":
            case "TEXTAREA":
            case "TABLE":
            case "DIV":
            case "SPAN":
            case "IMG":
            case "IFRAME":
                var $v_3 = Mscrm.FormControlInputBehavior.GetElementBehavior($v_2);
                if(IsNull($v_3)) $v_3 = $find($v_2.id);
                if(!IsNull($v_3))
                    if(!IsNull($v_3.IsValid) && !$v_3.IsValid())
                    {
                        $v_2.focus();
                        return false
                    }
                break
        }
    }
    return true
};
Mscrm.DialogsControl.prototype = {
    initialize: function()
    {
        Mscrm.CrmUIComponent.prototype.initialize.call(this);
        $addHandler(document, "keydown", this.$$d_$9X_2);
        $addHandler(window, "message", this.$$d_messageHandler)
    },
    dispose: function()
    {
        if(this._disposed) return;
        $removeHandler(document, "keydown", this.$$d_$9X_2);
        Mscrm.CrmUIComponent.prototype.dispose.call(this)
    },
    messageHandler: function(domEvent)
    {
        var $v_0 = window.isMobileClient;
        if(!IsNull($v_0) && $v_0)
        {
            var $v_1 = domEvent.rawEvent.origin,
                $v_2 = window.location.hostname,
                $v_3 = window.location.port,
                $v_4 = window.location.protocol,
                $v_5 = isNullOrEmptyString($v_3) ? String.format("{0}//{1}", $v_4, $v_2) : String.format("{0}//{1}:{2}", $v_4, $v_2, $v_3);
            if($v_1 !== $v_5) return;
            var $v_6 = "",
                $v_7 = null,
                $v_8 = Sys.Serialization.JavaScriptSerializer.deserialize(domEvent.rawEvent.data);
            if(!IsNull($v_8))
            {
                $v_6 = $v_8.command;
                if(!IsNull($v_6))
                {
                    $v_7 = $v_8.params;
                    window.self[$v_6]($v_7)
                }
            }
        }
    },
    $9X_2: function($p0)
    {
        switch(Mscrm.Utilities.getDomEventKeyCode($p0))
        {
            case 27:
                closeWindow();
                break;
            case 13:
                this.$9W_2($p0);
                break
        }
    },
    $9W_2: function($p0)
    {
        var $v_0 = $p0.target;
        if(IsNull($v_0._events) || IsNull($v_0._events["keyup"]) && IsNull($v_0._events["keydown"]) && IsNull($v_0._events["keypress"])) switch($v_0.tagName)
        {
            case "SPAN":
                switch($v_0.className)
                {
                    case "ms-crm-Tab":
                    case "ms-crm-Menu":
                        this.$25_2($p0);
                        return
                }
                break;
            case "BUTTON":
            case "IMG":
            case "SELECT":
            case "TEXTAREA":
                this.$25_2($p0);
                return;
            case "DIV":
                switch($v_0.className)
                {
                    case "ms-crm-Lookup":
                        this.$25_2($p0);
                        return
                }
                break;
            case "INPUT":
                switch($v_0.className)
                {
                    case "ms-crm-Dialog-Lookup-QuickFind":
                        this.$25_2($p0);
                        return
                }
                var $v_1 = $v_0.getAttribute("type");
                switch($v_1)
                {
                    case "text":
                        $p0.preventDefault();
                        return
                }
                break;
            case "A":
                switch($v_0.className)
                {
                    case "ms-crm-FindButton":
                    case "wizText":
                    case "default-link":
                        this.$25_2($p0);
                        return;
                    case "ms-crm-RefreshDialog-FirstTopButton":
                    case "ms-crm-RefreshDialog-SecondTopButton":
                        XUI.Html.DispatchDomEvent($v_0.children[0], XUI.Html.CreateDomEvent("click"));
                        return
                }
                var $v_2 = $v_0.getAttribute("selectEnable");
                if(!IsNull($v_2) && $v_2 === "true")
                {
                    this.$25_2($p0);
                    return
                }
                break;
            case "TH":
                switch($v_0.className)
                {
                    case "ms-crm-List-Sortable":
                        this.$25_2($p0);
                        return
                }
                break
        }
        if($v_0.id === "butBegin" || $v_0.id === "cmdDialogApply" || $v_0.id === "butDialogYes")
        {
            var $v_3 = $get("butBegin"),
                $v_4 = $get("cmdDialogApply"),
                $v_5 = $get("butDialogYes");
            if(!IsNull($v_3)) XUI.Html.DispatchDomEvent($v_3, XUI.Html.CreateDomEvent("click"));
            else if(!IsNull($v_4)) XUI.Html.DispatchDomEvent($v_4, XUI.Html.CreateDomEvent("click"));
            else !IsNull($v_5) && XUI.Html.DispatchDomEvent($v_5, XUI.Html.CreateDomEvent("click"))
        }
    },
    $25_2: function($p0)
    {
        if(IsNull($p0.rawEvent)) return;
        if("returnValue" in $p0.rawEvent) $p0.rawEvent.returnValue = "true";
        else if("defaultPrevented" in $p0.rawEvent) $p0.rawEvent.defaultPrevented = "false"
    }
};
Mscrm.CrmHeader = function() {};
Mscrm.CrmHeader.get_scriptLoader = function()
{
    if(IsNull(Mscrm.CrmHeader.$1J)) Mscrm.CrmHeader.$1J = new Mscrm.ScriptLoader;
    return Mscrm.CrmHeader.$1J
};
Mscrm.CrmHeader.get_styleLoader = function()
{
    if(IsNull(Mscrm.CrmHeader.$1d)) Mscrm.CrmHeader.$1d = new Mscrm.StyleLoader;
    return Mscrm.CrmHeader.$1d
};
Mscrm.CrmHeader.setScriptFile = function(uri, useInlineScripts, scriptLoaded)
{
    if(Mscrm.CrmHeader.$9o(uri)) return;
    if(uri.get_path().toUpperCase() === "/_STATIC/_COMMON/SCRIPTS/GLOBAL.JS") return;
    if(useInlineScripts) Mscrm.CrmHeader.get_scriptLoader().addIncludeExternalSync(null, uri);
    else Mscrm.CrmHeader.get_scriptLoader().addIncludeExternalCallback(null, uri, scriptLoaded)
};
Mscrm.CrmHeader.$9o = function($p0)
{
    if(Mscrm.Utilities.isRefreshForm())
    {
        var $v_0 = $p0.get_path().toLowerCase();
        return Mscrm.CrmHeader.$9n($v_0) || isFileIncludedInJSProvider($v_0)
    }
    return false
};
Mscrm.CrmHeader.$9n = function($p0)
{
    var $v_0 = _pageAspxScriptReferences[$p0];
    if($v_0) return true;
    return false
};
Mscrm.CrmHeader.setStyleSheet = function(uri, useInlineStyle)
{
    if(!IsNull(useInlineStyle) && useInlineStyle) Mscrm.CrmHeader.get_styleLoader().addIncludeExternalSync(null, uri);
    else Mscrm.CrmHeader.get_styleLoader().addIncludeExternal(null, uri)
};
Mscrm.CrmHeader.setStyleSheetString = function(value)
{
    Mscrm.CrmHeader.get_styleLoader().addIncludeExternalString(null, value)
};
Mscrm.CrmHeader.loadTitle = function(title)
{
    document.title = title
};
Mscrm.IncludeLoader = function() {};
Mscrm.IncludeLoader.prototype = {
    get_headElement: function()
    {
        var $v_0 = document.getElementsByTagName("HEAD");
        return $v_0[0]
    },
    addIncludeExternalSync: function(container, uri) {},
    addIncludeExternal: function(container, uri) {},
    addIncludeInline: function(container, content, id) {},
    fetchExternalFile: function(rawUrl)
    {
        var $v_0 = new XMLHttpRequest;
        $v_0.open("GET", rawUrl, false);
        $v_0.send(null);
        if($v_0.status !== 200);
        return $v_0.responseText
    }
};
Mscrm.ScriptLoader = function()
{
    Mscrm.ScriptLoader.initializeBase(this)
};
Mscrm.ScriptLoader.$9Y = function($p0, $p1)
{
    if(!IsNull($p0.readyState)) $addHandler($p0, "readystatechange", function($p1_0)
    {
        var $v_0 = $p0.readyState;
        if($v_0 === "loaded" || $v_0 === "complete")
        {
            $clearHandlers($p0);
            $p1()
        }
    });
    else $addHandler($p0, "load", function($p1_0)
    {
        $clearHandlers($p0);
        $p1()
    })
};
Mscrm.ScriptLoader.prototype = {
    addIncludeExternalSync: function(container, scriptFile)
    {
        var $v_0 = scriptFile.toString();
        if(this.$5j_1($v_0)) return;
        var $v_1 = this.fetchExternalFile($v_0);
        this.addIncludeInline(container, $v_1, $v_0)
    },
    loadScriptAsync: function(scriptFile, scriptLoaded)
    {
        if(Mscrm.Utilities.isIE8OrLower())
        {
            var $v_0 = scriptFile.toString();
            if(this.$5j_1($v_0))
            {
                !IsNull(scriptLoaded) && scriptLoaded();
                return
            }
            var $v_1 = new XMLHttpRequest;
            $v_1.open("GET", $v_0, true);
            var $$t_6 = this;
            $v_1.onreadystatechange = function()
            {
                if($v_1.readyState === 4)
                {
                    $v_1.onreadystatechange = null;
                    if($v_1.status === 200)
                    {
                        $$t_6.addIncludeInline(null, $v_1.responseText, $v_0);
                        scriptLoaded()
                    }
                    else
                    {
                        var $v_2 = $v_1.statusText,
                            $v_3 = String.format("{0} : {1}", $v_2, $v_0);
                        catchError($v_3, window.location.href, 0, true)
                    }
                }
            };
            $v_1.send(null)
        }
        else this.addIncludeExternalCallback(null, scriptFile, scriptLoaded)
    },
    addIncludeExternal: function(container, scriptFile)
    {
        this.addIncludeExternalCallback(container, scriptFile, null)
    },
    addIncludeExternalCallback: function(container, scriptFile, scriptLoaded)
    {
        this.$6g_1(container, scriptFile, null, scriptLoaded)
    },
    addIncludeExternalCallbackWithAttributes: function(container, scriptFile, attributes, scriptLoaded)
    {
        this.$6g_1(container, scriptFile, attributes, scriptLoaded)
    },
    $6g_1: function($p0, $p1, $p2, $p3)
    {
        var $v_0 = $p1.toString();
        if(!IsNull($get($v_0.toLowerCase())))
        {
            !IsNull($p3) && $p3();
            return
        }
        if(IsNull($p0)) $p0 = this.get_headElement();
        var $v_1 = $p0.ownerDocument.createElement("script");
        $p0.appendChild($v_1);
        $v_1.setAttribute("type", "text/javascript");
        $v_1.setAttribute("src", $v_0);
        $v_1.setAttribute("id", $v_0.toLowerCase());
        if(!IsNull($p2))
        {
            var $$dict_6 = $p2;
            for(var $$key_7 in $$dict_6)
            {
                var $v_2 = {
                    key: $$key_7,
                    value: $$dict_6[$$key_7]
                };
                $v_2.key !== "type" && $v_2.key !== "src" && $v_2.key !== "id" && $v_1.setAttribute($v_2.key, $v_2.value)
            }
        }!IsNull($p3) && Mscrm.ScriptLoader.$9Y($v_1, $p3)
    },
    addIncludeInline: function(container, scriptContent, id)
    {
        if(IsNull(container)) container = this.get_headElement();
        var $v_0 = container.ownerDocument.createElement("script");
        container.appendChild($v_0);
        !isNullOrEmptyString(id) && $v_0.setAttribute("id", id.toLowerCase());
        $v_0.setAttribute("type", "text/javascript");
        $v_0.text = scriptContent
    },
    $5j_1: function($p0)
    {
        var $v_0 = $get($p0.toLowerCase());
        if(!IsNull($v_0))
        {
            var $v_1 = $v_0.attributes.getNamedItem("loadState");
            if(!$v_1 || $v_1.value === "complete") return true
        }
        return false
    },
    $8S_1: function($p0, $p1)
    {
        if($p0.AlwaysProcess) return false;
        if(isNullOrEmptyString($p0.Id)) return false;
        var $v_0 = $get($p0.Id.toLowerCase());
        if(!IsNull($v_0))
        {
            var $v_1 = $v_0.attributes.getNamedItem("loadState");
            if($v_1 && $v_1.value !== "complete") return false;
            $v_0.parentNode === $p1 && $v_0.removeAttribute("delete");
            return true
        }
        return false
    },
    markAllScriptsForDelete: function(container)
    {
        for(var $v_0 = container.getElementsByTagName("script"), $v_1 = 0; $v_1 < $v_0.length; $v_1++) $v_0[$v_1].setAttribute("delete", "true")
    },
    cleanupMarkedScripts: function(container, forceCleanAllScripts)
    {
        var $$t_5 = this;
        window.setTimeout(function()
        {
            for(var $v_0 = container.getElementsByTagName("script"), $v_1 = 0; $v_1 < $v_0.length; $v_1++)
            {
                var $v_2 = $v_0[$v_1];
                if(forceCleanAllScripts || !isNullOrEmptyString($v_2.getAttribute("delete")))
                {
                    $v_2.parentNode.removeChild($v_2);
                    Mscrm.Utilities.destroyObject($v_2)
                }
            }
        }, 10)
    },
    loadScripts: function(container, headerJsonObject, async, clean)
    {
        var $v_0 = headerJsonObject.State;
        if(!isNullOrEmptyString($v_0) && $v_0 !== "loadingAsync") return;
        if(IsNull(headerJsonObject.ScriptList)) return;
        var $v_1 = headerJsonObject.ScriptList;
        this.$5M_1 = false;
        this.$61_1 = clean;
        clean && this.markAllScriptsForDelete(container);
        if(!async)
        {
            headerJsonObject.State = "loadingSync";
            var $v_2 = headerJsonObject.ScriptListIndex;
            if(IsNull($v_2)) $v_2 = 0;
            else
            {
                var $v_3 = $v_1[$v_2];
                if(this.$5j_1($v_3.Id)) $v_2++
            }
            for(; $v_2 < $v_1.length; $v_2++)
            {
                var $v_4 = $v_1[$v_2];
                if(typeof $v_4.Script == "function") $v_4.Script.apply(
                {});
                else if($v_4.Type === "inline") this.addIncludeInline(container, $v_4.Script);
                else this.addIncludeExternalSync(container, $v_4.Script)
            }
            headerJsonObject.State = "complete"
        }
        else
        {
            headerJsonObject.State = "loadingAsync";
            if(IsNull(headerJsonObject.ScriptListIndex)) headerJsonObject.ScriptListIndex = 0;
            this.$83_1(container, headerJsonObject)
        }
    },
    $5M_1: false,
    $61_1: false,
    ContinueProcessing: function(container, headerJsonObject)
    {
        headerJsonObject.ScriptListIndex++;
        this.$83_1(container, headerJsonObject)
    },
    $83_1: function($p0, $p1)
    {
        for(var $v_0 = $p1.ScriptList; $p1.ScriptListIndex < $v_0.length; $p1.ScriptListIndex++)
        {
            var $v_1 = $v_0[$p1.ScriptListIndex];
            if(typeof $v_1.Script == "function")
            {
                $v_1.Script.apply(
                {});
                continue
            }
            if(this.$8S_1($v_1, $p0)) continue;
            var $v_2 = $p0.ownerDocument.createElement("script");
            $v_2.type = "text/javascript";
            if(!isNullOrEmptyString($v_1.Id)) $v_2.id = $v_1.Id.toLowerCase();
            if($v_1.Type === "inline")
            {
                var $v_3 = $v_1.Script;
                $v_2.text = $v_3;
                $p0.appendChild($v_2)
            }
            else
            {
                var $v_4 = $get($v_1.Id.toLowerCase());
                if(!IsNull($v_4)) $v_2 = $v_4;
                else
                {
                    $v_2.src = $v_1.Script;
                    $v_2.setAttribute("loadState", "loading");
                    $p0.appendChild($v_2)
                }
                this.$8L_1($v_2, $p0, $p1, this);
                break
            }
        }
        if($p1.ScriptListIndex >= $v_0.length)
        {
            $p1.State = "complete";
            this.$61_1 && this.cleanupMarkedScripts($p0, false)
        }
    },
    $8L_1: function($p0, $p1, $p2, $p3)
    {
        var loadCallback = {
                Container: $p1,
                HeaderJsonObject: $p2,
                Context: $p3
            },
            stop = this.$5M_1;
        if($p0._loadHandler) $p0._loadHandler.push(loadCallback);
        else
        {
            $p0._loadHandler = [];
            $p0._loadHandler.push(loadCallback);
            var callback = this.ContinueProcessing;
            if($p0.readyState) $p0.onreadystatechange = function()
            {
                if(stop)
                {
                    $p0.onreadystatechange = null;
                    cleanLoadHandler($p0);
                    return
                }
                if($p0.readyState == "loaded" || $p0.readyState == "complete")
                {
                    $p0.onreadystatechange = null;
                    $p0.setAttribute("loadState", "complete");
                    for(var i = 0, len = $p0._loadHandler.length; i < len; i++)
                    {
                        var obj = $p0._loadHandler[i];
                        if(obj.HeaderJsonObject.CancelAsync) continue;
                        callback.call(obj.Context, obj.Container, obj.HeaderJsonObject)
                    }
                    cleanLoadHandler($p0)
                }
            };
            else $p0.onload = function()
            {
                $p0.onload = null;
                $p0.setAttribute("loadState", "complete");
                if(stop)
                {
                    cleanLoadHandler($p0);
                    return
                }
                for(var i = 0, len = $p0._loadHandler.length; i < len; i++)
                {
                    var obj = $p0._loadHandler[i];
                    if(obj.HeaderJsonObject.CancelAsync) continue;
                    callback.call(obj.Context, obj.Container, obj.HeaderJsonObject)
                }
                cleanLoadHandler($p0)
            }
        }

        function cleanLoadHandler(scriptElement)
        {
            delete scriptElement._loadHandler;
            scriptElement._loadHandler = null
        }
    },
    cancelAnyCurrentProcessing: function()
    {
        this.$5M_1 = true
    }
};
Mscrm.StyleLoader = function()
{
    Mscrm.StyleLoader.initializeBase(this)
};
Mscrm.StyleLoader.prototype = {
    addIncludeExternalSync: function(container, styleSheet)
    {
        var $v_0 = styleSheet.toString();
        if(!IsNull($get($v_0.toLowerCase()))) return;
        var $v_1 = this.fetchExternalFile($v_0);
        this.addIncludeInline(container, $v_1, $v_0)
    },
    addIncludeExternal: function(container, styleSheet)
    {
        this.addIncludeExternalString(container, styleSheet.toString())
    },
    addIncludeExternalString: function(container, styleSheet)
    {
        if(!IsNull($get(styleSheet.toLowerCase()))) return;
        if(IsNull(container)) container = this.get_headElement();
        container.appendChild(this.$9M_1(container, styleSheet))
    },
    $9M_1: function($p0, $p1)
    {
        var $v_0 = $p1.toString(),
            $v_1 = $p0.ownerDocument.createElement("link");
        $v_1.href = $v_0;
        $v_1.setAttribute("rel", "stylesheet");
        $v_1.id = $v_0;
        return $v_1
    },
    addIncludeInline: function(container, styleContent)
    {
        if(IsNull(container)) container = this.get_headElement();
        container.appendChild(this.$9Q_1(container, styleContent))
    },
    $9Q_1: function($p0, $p1)
    {
        var $v_0 = $p0.ownerDocument.createElement("style");
        $v_0.type = "text/css";
        if($v_0.styleSheet) $v_0.styleSheet.cssText = $p1;
        else $v_0.appendChild($p0.ownerDocument.createTextNode($p1));
        return $v_0
    },
    loadStyles: function(container, headerJsonObject)
    {
        var $v_0 = headerJsonObject.State;
        if(!isNullOrEmptyString($v_0) || IsNull(headerJsonObject.StyleList)) return;
        for(var $v_1 = headerJsonObject.StyleList, $v_2 = 0; $v_2 < $v_1.length; $v_2++)
        {
            var $v_3 = $v_1[$v_2],
                $v_4 = $v_3.Type,
                $v_5 = $v_3.Style;
            switch($v_4)
            {
                case "inline":
                    this.addIncludeInline(container, $v_5);
                    break;
                case "external":
                    this.addIncludeExternal(container, Mscrm.CrmUri.create($v_5));
                    break
            }
        }
    }
};
Mscrm.Dialog = function(container)
{
    this.$$d_$7p_2 = Function.createDelegate(this, this.$7p_2);
    this.$$d_$9z_2 = Function.createDelegate(this, this.$9z_2);
    this.$$d_$A6_2 = Function.createDelegate(this, this.$A6_2);
    this.$$d_$7g_2 = Function.createDelegate(this, this.$7g_2);
    this.$$d_$5p_2 = Function.createDelegate(this, this.$5p_2);
    this.$$d_$A9_2 = Function.createDelegate(this, this.$A9_2);
    this.$$d_$A8_2 = Function.createDelegate(this, this.$A8_2);
    this.$$d_$A1_2 = Function.createDelegate(this, this.$A1_2);
    this.$1v_2 = Mscrm.Dialog.$7d++;
    this.$A_2 = Mscrm.Dialog.auto;
    this.$C_2 = 300;
    this.$d_2 = Mscrm.Dialog.auto;
    this.$X_2 = Mscrm.Dialog.auto;
    this.$3a_2 = "ms-crm-modalDialog";
    this.$3z_2 = "ms-crm-Floating-Div";
    this.$3v_2 = window.LOCID_PAGELOADING_MSG;
    Mscrm.Dialog.initializeBase(this);
    if(IsNull(container))
    {
        container = document.createElement("div");
        document.body.appendChild(container)
    }
    this.$1_2 = container;
    this.$1_2.style.display = "none";
    if(Mscrm.Utilities.isIE7()) this.$2y_2 = this.$$d_$A1_2
};
Mscrm.Dialog.createDialog = function(container)
{
    return $create(Mscrm.Dialog, null, null, null, container)
};
Mscrm.Dialog.$7F = function($p0)
{
    try
    {
        $p0.focus()
    }
    catch($$e_1)
    {}
};
Mscrm.Dialog.prototype = {
    get_dialogId: function()
    {
        if(!IsNull(this.$1_2)) return this.$1_2.id;
        return ""
    },
    set_dialogId: function(value)
    {
        if(Mscrm.Utilities.get_isStandardsMode())
            if(!isNullOrEmptyString(value)) this.$1_2.id = "Dialog_" + value;
            else this.$1_2.id = "Dialog_" + this.$1v_2.toString();
        else if(!isNullOrEmptyString(value)) this.$1_2.setAttribute("name", "Dialog_" + value);
        else this.$1_2.setAttribute("name", "Dialog_" + this.$1v_2.toString());
        return value
    },
    get_container: function()
    {
        return this.$1_2
    },
    $1_2: null,
    $H_2: null,
    $4G_2: 0,
    $5Q_2: 0,
    $4H_2: 0,
    $6d_2: 0,
    $56_2: 0,
    $57_2: 0,
    $4l_2: 0,
    $1q_2: false,
    $1o_2: true,
    $4s_2: true,
    $6M_2: false,
    get_$3L_2: function()
    {
        return this.$6M_2
    },
    set_$3L_2: function($p0)
    {
        this.$5t_2("rendering", $p0.toString());
        this.$6M_2 = $p0;
        return $p0
    },
    $G_2: false,
    $M_2: 0,
    $R_2: 0,
    $1X_2: null,
    $J_2: null,
    $D_2: null,
    $I_2: null,
    $l_2: null,
    $m_2: null,
    $1G_2: true,
    $1F_2: true,
    $1c_2: true,
    $1z_2: true,
    $2L_2: false,
    $38_2: null,
    $1A_2: null,
    $4A_2: null,
    $40_2: null,
    $5R_2: null,
    $6H_2: null,
    $6I_2: null,
    $2K_2: null,
    $2y_2: null,
    $1C_2: false,
    $1H_2: "ms-crm-LoadingContainer",
    $L_2: null,
    $6R_2: "/_imgs/AdvFind/progress.gif",
    $j_2: null,
    $3C_2: null,
    $1I_2: null,
    $2w_2: 0,
    $2x_2: 0,
    $2G_2: true,
    $p_2: false,
    $O_2: null,
    $8J_2: "ms-crm-modalDialog-shadow",
    $U_2: null,
    $3b_2: 0,
    $h_2: null,
    $11_2: null,
    $1r_2: true,
    $1s_2: true,
    get_loadingClassName: function()
    {
        return this.$1H_2
    },
    set_loadingClassName: function(value)
    {
        this.$1H_2 = value;
        if(!IsNull(this.$L_2)) this.$L_2.className = value;
        return value
    },
    get_enableShadow: function()
    {
        return this.$4s_2
    },
    set_enableShadow: function(value)
    {
        this.$4s_2 = value;
        return value
    },
    get_focusOutCheck: function()
    {
        return this.$2G_2
    },
    set_focusOutCheck: function(value)
    {
        this.$2G_2 = value;
        return value
    },
    get_neverGrabFocus: function()
    {
        return this.$p_2
    },
    set_neverGrabFocus: function(value)
    {
        this.$p_2 = value;
        return value
    },
    get_reference: function()
    {
        return this.$1I_2
    },
    set_reference: function(value)
    {
        this.$1I_2 = value;
        return value
    },
    get_hideCallback: function()
    {
        return this.$3C_2
    },
    set_hideCallback: function(value)
    {
        this.$3C_2 = value;
        return value
    },
    get_top: function()
    {
        return this.$M_2
    },
    set_top: function(value)
    {
        if(this.$M_2 === value) return value;
        this.$K_2();
        this.$M_2 = IsNull(value) ? 0 : value;
        this.$G_2 = true;
        return value
    },
    get_left: function()
    {
        return this.$R_2
    },
    set_left: function(value)
    {
        if(this.$R_2 === value) return value;
        this.$K_2();
        this.$R_2 = IsNull(value) ? 0 : value;
        this.$G_2 = true;
        return value
    },
    get_height: function()
    {
        return this.$A_2
    },
    set_height: function(value)
    {
        if(this.$A_2 === value) return value;
        this.$K_2();
        this.$A_2 = IsNull(value) ? Mscrm.Dialog.auto : value;
        this.$G_2 = true;
        return value
    },
    get_width: function()
    {
        return this.$C_2
    },
    set_width: function(value)
    {
        if(this.$C_2 === value) return value;
        this.$K_2();
        this.$C_2 = IsNull(value) ? 0 : value;
        this.$G_2 = true;
        return value
    },
    get_minHeight: function()
    {
        return this.$d_2
    },
    set_minHeight: function(value)
    {
        if(this.$d_2 === value) return value;
        this.$K_2();
        this.$d_2 = IsNull(value) ? Mscrm.Dialog.auto : value;
        this.$G_2 = true;
        this.$8G_2();
        return value
    },
    get_maxHeight: function()
    {
        return this.$X_2
    },
    set_maxHeight: function(value)
    {
        if(this.$X_2 === value) return value;
        this.$K_2();
        this.$X_2 = IsNull(value) ? Mscrm.Dialog.auto : value;
        this.$G_2 = true;
        this.$8G_2();
        return value
    },
    get_header: function()
    {
        return this.$J_2
    },
    set_header: function(value)
    {
        if(this.$J_2 === value) return value;
        this.$K_2();
        if(this.$1q_2)
            if(!IsNull(this.$J_2))
                if(IsNull(value)) this.$J_2.parentNode.removeChild(this.$J_2);
                else this.$J_2.parentNode.replaceChild(value, this.$J_2);
        else !IsNull(value) && this.$D_2.insertBefore(value);
        this.$J_2 = value;
        this.$1o_2 = true;
        this.$G_2 = true;
        return value
    },
    get_body: function()
    {
        return this.$j_2
    },
    set_body: function(value)
    {
        if(value === this.$j_2) return value;
        if(IsNull(value)) value = document.createElement("div");
        if(!this.$1C_2)
        {
            this.$K_2();
            if(this.$1q_2)
            {
                this.$D_2.parentNode.replaceChild(value, this.$D_2);
                this.$1o_2 = true;
                this.$G_2 = true
            }
            this.$D_2 = value
        }
        this.$j_2 = value;
        return value
    },
    get_footer: function()
    {
        return this.$I_2
    },
    set_footer: function(value)
    {
        if(this.$I_2 === value) return value;
        this.$K_2();
        if(this.$1q_2)
            if(!IsNull(this.$I_2))
                if(IsNull(value)) this.$I_2.parentNode.removeChild(this.$I_2);
                else this.$I_2.parentNode.replaceChild(value, this.$I_2);
        else !IsNull(value) && this.$1_2.appendChild(value);
        this.$I_2 = value;
        this.$1o_2 = true;
        this.$G_2 = true;
        return value
    },
    get_focusElementOnHide: function()
    {
        return this.$l_2
    },
    set_focusElementOnHide: function(value)
    {
        this.$K_2();
        this.$l_2 = value;
        return value
    },
    get_focusElementOnShow: function()
    {
        return this.$m_2
    },
    set_focusElementOnShow: function(value)
    {
        this.$K_2();
        this.$m_2 = value;
        return value
    },
    get_launchesRight: function()
    {
        return this.$1G_2
    },
    set_launchesRight: function(value)
    {
        if(this.$1G_2 === value) return value;
        this.$K_2();
        this.$1G_2 = value;
        this.$G_2 = true;
        return value
    },
    get_launchesDown: function()
    {
        return this.$1F_2
    },
    set_launchesDown: function(value)
    {
        if(this.$1F_2 === value) return value;
        this.$K_2();
        this.$1F_2 = value;
        this.$G_2 = true;
        return value
    },
    get_shiftVertical: function()
    {
        return this.$1c_2
    },
    set_shiftVertical: function(value)
    {
        if(this.$1c_2 === value) return value;
        this.$K_2();
        this.$1c_2 = value;
        this.$G_2 = true;
        return value
    },
    get_showingCallback: function()
    {
        return this.$4A_2
    },
    set_showingCallback: function(value)
    {
        this.$4A_2 = value;
        return value
    },
    get_shiftHorizontal: function()
    {
        return this.$1z_2
    },
    set_shiftHorizontal: function(value)
    {
        if(this.$1z_2 === value) return value;
        this.$K_2();
        this.$1z_2 = value;
        this.$G_2 = true;
        return value
    },
    get_isModal: function()
    {
        return this.$2L_2
    },
    set_isModal: function(value)
    {
        this.$K_2();
        this.$2L_2 = value;
        return value
    },
    get_zIndex: function()
    {
        return this.get_$7i_2()
    },
    get_overlayClickCallback: function()
    {
        return this.$40_2
    },
    set_overlayClickCallback: function(value)
    {
        this.$K_2();
        this.$40_2 = value;
        return value
    },
    get_containerClassName: function()
    {
        return this.$3a_2
    },
    set_containerClassName: function(value)
    {
        this.$3a_2 = IsNull(value) ? "" : value;
        return value
    },
    get_overlayClassName: function()
    {
        return this.$3z_2
    },
    set_overlayClassName: function(value)
    {
        this.$3z_2 = IsNull(value) ? "" : value;
        return value
    },
    get_enforceHorizontalOffset: function()
    {
        return this.$1r_2
    },
    set_enforceHorizontalOffset: function(value)
    {
        this.$1r_2 = value;
        return value
    },
    get_enforceVerticalOffset: function()
    {
        return this.$1s_2
    },
    set_enforceVerticalOffset: function(value)
    {
        this.$1s_2 = value;
        return value
    },
    get_isLoading: function()
    {
        return this.$1C_2
    },
    set_isLoading: function(value)
    {
        if(this.$1C_2 === value) return value;
        this.$1C_2 = value;
        this.$G_2 = true;
        if(!this.$1q_2) return value;
        if(value)
        {
            this.$L_2.style.height = this.$D_2.style.height;
            this.$L_2.style.width = this.$C_2 + "px";
            this.$D_2.parentNode.replaceChild(this.$L_2, this.$D_2);
            this.$D_2 = this.$L_2
        }
        else
        {
            this.$D_2.parentNode.replaceChild(this.$j_2, this.$D_2);
            this.$D_2 = this.$j_2
        }
        return value
    },
    get_isVisible: function()
    {
        return XUI.Html.GetComputedStyle(this.$1_2, "display") === "block"
    },
    get_bodyHeight: function()
    {
        if(IsNull(this.$D_2)) return 0;
        var $v_0 = this.$4l_2 - Mscrm.Utilities.getVerticalBoxPadding(this.$D_2),
            $v_1 = this.$D_2.offsetHeight - Mscrm.Utilities.getVerticalBoxPadding(this.$D_2);
        return $v_0 < $v_1 ? $v_1 : $v_0
    },
    $AK_2: function()
    {
        var $v_0 = !!this.$j_2 && this.$j_2.scrollHeight > this.$j_2.clientHeight;
        if(this.$7Z_2() || $v_0)
        {
            var $v_1 = this.$C_2 + this.$8Q_2();
            Mscrm.Utilities.setOuterWidth(this.$1_2, $v_1);
            Mscrm.Utilities.setInnerWidth(this.$O_2, $v_1)
        }
    },
    $AJ_2: function()
    {
        if(window.UseTabletExperience)
            if(this.$7Z_2() || this.$j_2.scrollHeight > this.$j_2.clientHeight)
            {
                if(this.$2K_2)
                {
                    $removeHandler(this.$1_2, "touchmove", this.$2K_2);
                    this.$2K_2 = null
                }
            }
            else if(!this.$2K_2)
        {
            this.$2K_2 = this.$$d_$A8_2;
            $addHandler(this.$1_2, "touchmove", this.$2K_2)
        }
    },
    $6j_2: function($p0, $p1)
    {
        if(!IsNull($p0.offsetParent))
        {
            $p1[0] += $p0.offsetParent.offsetTop;
            this.$6j_2($p0.offsetParent, $p1)
        }
        else $p1[1] = $p0.offsetHeight;
        return $p1
    },
    $6k_2: function()
    {
        var $v_0;
        if(this.$1c_2) $v_0 = this.$4G_2;
        else if(this.$1F_2)
        {
            this.$1_2.style.display = "block";
            var $v_1 = [this.$M_2, 0];
            $v_1 = this.$6j_2(this.$1_2, $v_1);
            $v_0 = Math.round($v_1[1] * .98) + this.$4H_2 - $v_1[0]
        }
        else $v_0 = this.$M_2 - (this.$4H_2 - 1);
        return $v_0
    },
    $7Z_2: function()
    {
        var $v_0;
        $v_0 = this.$6k_2();
        var $v_1 = this.$6l_2($v_0),
            $v_2 = $v_1 - Mscrm.Utilities.getVerticalBoxPadding(this.$1_2),
            $v_3 = $v_2 - this.$2x_2 - this.$2w_2,
            $v_4 = XUI.Html.GetComputedStyle(this.$D_2, "overflow"),
            $v_5 = XUI.Html.GetComputedStyle(this.$D_2, "overflowY"),
            $v_6 = $v_4 === "scroll" || $v_5 === "scroll",
            $v_7 = this.$4l_2 > $v_3 && ($v_4 === "auto" || $v_5 === "auto");
        if($v_6 || $v_7) return true;
        return false
    },
    get_bodyWidth: function()
    {
        if(IsNull(this.$1_2) || IsNull(this.$D_2)) return 0;
        var $v_0 = this.$C_2 - Mscrm.Utilities.getHorizontalBoxPadding(this.$1_2) - Mscrm.Utilities.getHorizontalBoxPadding(this.$D_2);
        return $v_0
    },
    $8Q_2: function()
    {
        var $v_0 = document.createElement("div"),
            $v_1 = document.createElement("p");
        $v_0.style.position = "absolute";
        $v_0.style.top = "0px";
        $v_0.style.left = "0px";
        $v_0.style.visibility = "hidden";
        $v_0.style.width = "300px";
        $v_0.style.height = "150px";
        $v_0.style.overflow = "hidden";
        $v_1.style.height = "300px";
        $v_0.appendChild($v_1);
        document.body.appendChild($v_0);
        var $v_2 = $v_1.offsetWidth;
        $v_0.style.overflow = "scroll";
        var $v_3 = $v_1.offsetWidth;
        if($v_3 === $v_2) $v_3 = $v_0.clientWidth;
        document.body.removeChild($v_0);
        return $v_2 - $v_3
    },
    get_$7i_2: function()
    {
        return 2e3 + this.$1v_2 * 4
    },
    get_$8M_2: function()
    {
        return 2e3 + this.$1v_2 * 4 + 1
    },
    get_$AY_2: function()
    {
        return 2e3 + this.$1v_2 * 4 + 2
    },
    get_$8i_2: function()
    {
        return 2e3 + this.$1v_2 * 4 + 3
    },
    initialize: function()
    {
        Mscrm.CrmHeader.setStyleSheet(Mscrm.CrmUri.create("/_common/styles/menucore.css.aspx"), true);
        Mscrm.CrmHeader.setStyleSheet(Mscrm.CrmUri.create("/_nav/menu.css.aspx"), true);
        this.$7u_2();
        this.$5R_2 = this.$$d_$A9_2;
        $addHandler(window, "resize", this.$5R_2);
        Mscrm.CrmUIComponent.prototype.initialize.call(this)
    },
    show: function(callback)
    {
        if(!this.$8F_2()) return;
        this.$6p_2();
        this.$K_2();
        this.$38_2 = callback;
        !this.$1q_2 && this.$8m_2();
        this.$H_2.style.height = document.documentElement.offsetHeight.toString() + "px";
        this.$H_2.style.width = document.documentElement.offsetWidth.toString() + "px";
        !IsNull(this.$2y_2) && $addHandler(document.body, "click", this.$2y_2);
        this.set_$3L_2(true);
        var $$t_1 = this;
        window.setTimeout(function()
        {
            if($$t_1.$1o_2) $$t_1.$8P_2();
            else if($$t_1.$G_2) $$t_1.$89_2();
            else $$t_1.$70_2()
        }, 1)
    },
    hide: function(callback)
    {
        if(!this.get_isVisible()) return;
        this.$6p_2();
        this.$K_2();
        this.$H_2.style.display = "none";
        this.$1_2.style.display = "none";
        this.$O_2.style.display = "none";
        this.$5t_2("displayed", "false");
        this.$8r_2();
        !IsNull(this.$2y_2) && $removeHandler(document.body, "click", this.$2y_2);
        this.$1A_2 = callback;
        if(!IsNull(this.$1A_2) || !IsNull(this.$3C_2)) this.$7p_2();
        else
        {
            this.set_$3L_2(false);
            if(!IsNull(this.$l_2) && !this.$p_2) try
            {
                this.$l_2.parentNode && this.$l_2.focus()
            }
            catch($$e_1)
            {}
        }
    },
    refresh: function(callback)
    {
        this.$G_2 = true;
        this.$1o_2 = true;
        if(this.get_isVisible()) this.show(callback);
        else !IsNull(callback) && callback(this)
    },
    addForbiddenElement: function(element)
    {
        if(IsNull(this.$1X_2)) this.$1X_2 = [];
        this.$1X_2[this.$1X_2.length] = element
    },
    dispose: function()
    {
        if(this._disposed) return;
        $removeHandler(window, "resize", this.$5R_2);
        !IsNull(this.$O_2) && !IsNull(this.$O_2.parentNode) && this.$O_2.parentNode.removeChild(this.$O_2);
        if(this.$1q_2)
        {
            $clearHandlers(this.$H_2);
            $clearHandlers(this.$1_2);
            this.$1_2.innerHTML = "";
            !IsNull(this.$H_2) && !IsNull(this.$H_2.parentNode) && this.$H_2.parentNode.removeChild(this.$H_2)
        }
        this.$1_2 = null;
        this.$H_2 = null;
        this.$J_2 = null;
        this.$D_2 = null;
        this.$I_2 = null;
        Mscrm.CrmUIComponent.prototype.dispose.call(this)
    },
    $7u_2: function()
    {
        var $v_0 = document.documentElement;
        this.$56_2 = $v_0.offsetHeight;
        this.$57_2 = $v_0.offsetWidth;
        this.$4G_2 = Math.round($v_0.offsetHeight * .98);
        this.$5Q_2 = Math.round($v_0.offsetWidth * .98);
        this.$4H_2 = Math.round(($v_0.offsetHeight - this.$4G_2) / 2);
        this.$6d_2 = Math.round(($v_0.offsetWidth - this.$5Q_2) / 2)
    },
    $8m_2: function()
    {
        if(Mscrm.Utilities.get_isStandardsMode()) this.$1_2.className = this.$3a_2;
        this.$1_2.style.position = "absolute";
        this.$1_2.style.zIndex = this.get_$8i_2();
        this.$1_2.style.display = "none";
        $addHandler(this.$1_2, "keydown", this.$$d_$5p_2);
        this.$O_2 = document.createElement("div");
        this.$O_2.className = this.$8J_2;
        this.$O_2.style.display = "none";
        this.$O_2.style.position = "absolute";
        this.$O_2.style.zIndex = this.get_$AY_2();
        this.$1_2.parentNode.appendChild(this.$O_2);
        this.$H_2 = document.createElement("div");
        this.$H_2.className = this.$3z_2;
        XUI.Html.SetOpacity(this.$H_2, 0);
        this.$H_2.style.zIndex = this.get_$7i_2();
        this.$H_2.style.display = "none";
        this.$H_2.tabIndex = 0;
        if(!Mscrm.Utilities.get_isStandardsMode()) this.$H_2.style.position = "absolute";
        if(Mscrm.Utilities.get_isStandardsMode()) this.$1_2.parentNode.appendChild(this.$H_2);
        else
        {
            var $v_0 = document.createElement("div");
            this.$1_2.parentNode.appendChild($v_0);
            $v_0.appendChild(this.$H_2)
        }
        this.$6H_2 = this.$$d_$7g_2;
        $addHandler(this.$H_2, "click", this.$6H_2);
        if(window.UseTabletExperience)
        {
            this.$6I_2 = this.$$d_$A8_2;
            $addHandler(this.$H_2, "touchmove", this.$6I_2)
        }
        $addHandler(this.$H_2, "focus", this.$$d_$A6_2);
        this.$L_2 = document.createElement("div");
        this.$L_2.className = this.$1H_2;
        this.$L_2.id = "LoadingContainer";
        this.$L_2.innerHTML = String.format("<table class='{1}'><tr class='{1}'><td style='vertical-align: middle' align='center'><IMG id='loading' alt='' src='{2}'><br>{0}</td></tr></table>", CrmEncodeDecode.CrmHtmlEncode(this.$3v_2), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1H_2), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$6R_2));
        if(this.$1C_2) this.$D_2 = this.$L_2;
        !IsNull(this.$J_2) && this.$1_2.appendChild(this.$J_2);
        if(IsNull(this.$D_2)) this.$D_2 = document.createElement("div");
        this.$1_2.appendChild(this.$D_2);
        !IsNull(this.$I_2) && this.$1_2.appendChild(this.$I_2);
        this.$1q_2 = true
    },
    $8P_2: function()
    {
        if(Mscrm.Utilities.get_isLeftToRight()) this.$1_2.style.left = "-" + (this.$C_2 + 1e3) + "px";
        else this.$1_2.style.left = document.body.offsetWidth + 1e3 + "px";
        this.$1_2.style.top = "0px";
        this.$1_2.style.height = "auto";
        Mscrm.Utilities.setOuterWidth(this.$1_2, this.$C_2);
        this.$1_2.style.display = "block";
        this.$D_2.style.height = "auto";
        window.setTimeout(this.$$d_$9z_2, 1)
    },
    $9z_2: function()
    {
        if(!this.$8F_2()) return;
        this.$2w_2 = 0;
        if(!IsNull(this.$I_2)) this.$2w_2 = this.$I_2.offsetHeight;
        this.$2x_2 = 0;
        if(!IsNull(this.$J_2)) this.$2x_2 = this.$J_2.offsetHeight;
        this.$3b_2 = 0;
        if(!IsNull(this.$1_2) && !IsNull(this.$j_2))
        {
            if(this.$1_2.style.display === "none") this.$1_2.style.display = "block";
            this.$3b_2 = this.$1_2.offsetHeight
        }
        this.$4l_2 = this.$3b_2 - Mscrm.Utilities.getVerticalBoxPadding(this.$1_2) - this.$2x_2 - this.$2w_2;
        this.$89_2();
        this.$1o_2 = false
    },
    $89_2: function()
    {
        var $v_0;
        $v_0 = this.$6k_2();
        var $v_1 = this.$6l_2($v_0),
            $v_2 = this.$6m_2(this.$M_2, $v_1 - 1, this.$1s_2 ? this.$4H_2 : 0, this.$1s_2 ? this.$4G_2 : document.documentElement.offsetHeight, this.$1c_2, this.$1F_2, this.$1F_2),
            $v_3 = this.$6m_2(this.$R_2, this.$C_2 - 1, this.$1r_2 ? this.$6d_2 : 0, this.$1r_2 ? this.$5Q_2 : document.documentElement.offsetWidth, this.$1z_2, Mscrm.Utilities.get_isLeftToRight() ? this.$1G_2 : !this.$1G_2, this.$1G_2);
        if(!IsNull(this.$1X_2) && this.$1X_2.length > 0)
            for(var $v_8 = 0; $v_8 < this.$1X_2.length; $v_8++)
            {
                var $v_9 = this.$1X_2[$v_8],
                    $v_A = Mscrm.Utilities.getXYPos($v_9, !Mscrm.Utilities.get_isLeftToRight()),
                    $v_B = $v_A["x"],
                    $v_C = $v_A["y"],
                    $v_D = $v_9.offsetWidth,
                    $v_E = $v_9.offsetHeight;
                if($v_B + $v_D > $v_3 && $v_C + $v_E > $v_2 && $v_B < $v_3 + this.$C_2 && $v_C < $v_2 + $v_1)
                {
                    var $v_F = $v_C - $v_1 - 5;
                    if($v_F >= 0) $v_2 = $v_F
                }
            }
        var $v_4 = $v_1 - Mscrm.Utilities.getVerticalBoxPadding(this.$1_2),
            $v_5 = $v_4 - this.$2x_2 - this.$2w_2,
            $v_6 = this.$C_2 - Mscrm.Utilities.getHorizontalBoxPadding(this.$1_2),
            $v_7 = $v_5 - Mscrm.Utilities.getVerticalBoxPadding(this.$D_2);
        this.$h_2 = this.$7D_2(this.$1_2);
        this.$11_2 = this.$7E_2(this.$1_2);
        this.$AE_2($v_2, $v_3, $v_4, $v_6, $v_7);
        this.$70_2();
        this.$G_2 = false
    },
    $AE_2: function($p0, $p1, $p2, $p3, $p4)
    {
        Mscrm.Utilities.setInnerHeight(this.$1_2, $p2);
        Mscrm.Utilities.setInnerWidth(this.$1_2, $p3);
        this.$1_2.style.top = $p0 + "px";
        this.$1_2.style.left = $p1 + "px";
        Mscrm.Utilities.setInnerHeight(this.$O_2, $p2);
        Mscrm.Utilities.setInnerWidth(this.$O_2, $p3);
        this.$O_2.style.top = $p0 + 1 + "px";
        this.$O_2.style.left = $p1 + (Mscrm.Utilities.get_isLeftToRight() ? 1 : -1) + "px";
        Mscrm.Utilities.setInnerHeight(this.$D_2, $p4)
    },
    $70_2: function()
    {
        !IsNull(this.$4A_2) && this.$4A_2(this);
        this.$AK_2();
        this.$AJ_2();
        this.$H_2.style.display = "block";
        this.$1_2.style.display = "block";
        if(this.$4s_2) this.$O_2.style.display = "block";
        this.$8t_2();
        if(!IsNull(this.$38_2)) window.setTimeout(this.$$d_$7p_2, 1);
        else
        {
            this.set_$3L_2(false);
            if(!IsNull(this.$m_2) && !this.$p_2)
            {
                var $$t_1 = this;
                window.setTimeout(function()
                {
                    try
                    {
                        $$t_1.$m_2.focus()
                    }
                    catch($$e_0)
                    {}
                }, 0)
            }
        }
        this.$5t_2("displayed", "true")
    },
    $5t_2: function($p0, $p1)
    {
        var $v_0 = this.$1_2.attributes.getNamedItem($p0);
        if(IsNull($v_0))
        {
            $v_0 = document.createAttribute($p0);
            this.$1_2.attributes.setNamedItem($v_0)
        }
        $v_0.value = $p1.toString()
    },
    $8t_2: function()
    {
        if(!IsNull(this.$U_2))
        {
            (this.$1o_2 || this.$G_2) && this.$7m_2();
            return
        }
        this.$U_2 = document.createElement("iframe");
        this.$U_2.style.position = "absolute";
        this.$7m_2();
        this.$U_2.style.zIndex = this.get_$8M_2();
        XUI.Html.SetOpacity(this.$U_2, 0);
        this.$1_2.parentNode.appendChild(this.$U_2)
    },
    $7m_2: function()
    {
        this.$U_2.style.top = this.$1_2.style.top;
        this.$U_2.style.left = Mscrm.Utilities.get_isLeftToRight() ? this.$1_2.style.left : Mscrm.Utilities.parseInt(this.$1_2.style.left) - 1 + "px";
        this.$U_2.style.width = Mscrm.Utilities.parseInt(this.$1_2.style.width) + 1 + "px";
        this.$U_2.style.height = Mscrm.Utilities.parseInt(this.$1_2.style.height) + 1 + "px"
    },
    $8r_2: function()
    {
        if(IsNull(this.$U_2) || IsNull(this.$U_2.parentNode)) return;
        this.$U_2.parentNode.removeChild(this.$U_2);
        this.$U_2 = null
    },
    $7p_2: function()
    {
        this.set_$3L_2(false);
        if(!IsNull(this.$38_2))
        {
            !this.$p_2 && Mscrm.Dialog.$7F(this.$m_2);
            this.$38_2(this);
            this.$38_2 = null
        }
        else
        {
            !IsNull(this.$l_2) && !this.$p_2 && Mscrm.Dialog.$7F(this.$l_2);
            !IsNull(this.$3C_2) && this.$3C_2(this);
            if(!IsNull(this.$1A_2))
            {
                this.$1A_2(this);
                this.$1A_2 = null
            }
        }
    },
    $6l_2: function($p0)
    {
        if(this.$A_2 !== Mscrm.Dialog.auto && this.$A_2 > $p0) this.$A_2 = Mscrm.Dialog.auto;
        var $v_0;
        if(this.$A_2 === Mscrm.Dialog.auto)
        {
            $v_0 = this.$3b_2;
            if(this.$X_2 !== Mscrm.Dialog.auto && this.$X_2 < $v_0) $v_0 = this.$X_2;
            if(this.$d_2 !== Mscrm.Dialog.auto && this.$d_2 > $v_0) $v_0 = this.$d_2
        }
        else $v_0 = this.$A_2;
        if($v_0 > $p0) $v_0 = $p0;
        return $v_0
    },
    $6m_2: function($p0, $p1, $p2, $p3, $p4, $p5, $p6)
    {
        var $v_0;
        if(!$p4) $v_0 = $p5 ? $p0 : $p0 - $p1;
        else if($p5)
            if($p0 + $p1 >= $p2 + $p3)
            {
                $v_0 = $p2 + $p3 - ($p1 + 1);
                if($v_0 < $p2 && $p6) $v_0 = $p2
            }
            else if($p0 < $p2) $v_0 = $p2;
        else $v_0 = $p0;
        else if($p0 - $p1 < $p2)
        {
            $v_0 = $p2;
            if($p3 < $p1 + 1 && $p6) $v_0 = $p2 + $p3 - ($p1 + 1)
        }
        else if($p0 >= $p2 + $p3) $v_0 = $p2 + $p3 - ($p1 + 1);
        else $v_0 = $p0 - $p1;
        return $v_0
    },
    $8F_2: function()
    {
        var $v_0 = true;
        if(IsNull(this.$1_2)) $v_0 = false;
        return $v_0
    },
    $K_2: function()
    {
        this.get_$3L_2() && Error.create("Changing properties or calling methods while the dialog is rendering is not allowed.")
    },
    $6p_2: function()
    {
        this._disposed && Error.create("You cannot call methods on a dialog that has been disposed.")
    },
    $8G_2: function()
    {
        if(this.$X_2 !== Mscrm.Dialog.auto && this.$d_2 !== Mscrm.Dialog.auto && this.$X_2 < this.$d_2) this.$X_2 = Mscrm.Dialog.auto
    },
    $7g_2: function($p0)
    {
        !this.$2L_2 && this.hide();
        !IsNull(this.$40_2) && this.$40_2(this);
        $p0.stopPropagation();
        $p0.preventDefault()
    },
    $A8_2: function($p0)
    {
        $p0.stopPropagation();
        $p0.preventDefault()
    },
    $A1_2: function($p0)
    {
        if(!IsNull(this.$1_2) && this.get_isVisible())
        {
            if(!$p0.rawEvent.returnValue) return;
            $p0.rawEvent.returnValue = false;
            $p0.target !== this.$H_2 && !XUI.Html.DomUtils.Contains(this.$1_2, $p0.target) && this.$7g_2($p0)
        }
    },
    $A9_2: function($p0)
    {
        var $v_0 = document.documentElement;
        if($v_0.offsetHeight !== this.$56_2 || $v_0.offsetWidth !== this.$57_2)
        {
            this.$G_2 = true;
            (Math.abs($v_0.offsetHeight - this.$56_2) > 20 || Math.abs($v_0.offsetWidth - this.$57_2) > 20) && this.hide();
            this.$7u_2()
        }
    },
    $7D_2: function($p0)
    {
        var $v_0 = IsNull($p0.attributes) ? null : $p0.getAttribute("tabindex", 2),
            $v_1 = IsNull($v_0) || $v_0 === 32768 ? null : $p0;
        if(XUI.Html.DomUtils.HasChildElements($p0))
        {
            var $$t_5 = this,
                $v_2 = function($p1_0)
                {
                    if(!IsNull($v_1)) return true;
                    else
                    {
                        $v_1 = $$t_5.$7D_2($p1_0);
                        return false
                    }
                };
            XUI.Html.DomUtils.ForEachChild($p0, $v_2)
        }
        return $v_1
    },
    $7E_2: function($p0)
    {
        var $v_0 = null;
        if(XUI.Html.DomUtils.HasChildElements($p0))
        {
            var $$t_6 = this,
                $v_1 = function($p1_0)
                {
                    var $v_2 = $$t_6.$7E_2($p1_0);
                    if(!IsNull($v_2)) $v_0 = $v_2;
                    return false
                };
            XUI.Html.DomUtils.ForEachChild($p0, $v_1)
        }
        if(IsNull($v_0))
        {
            var $v_3 = IsNull($p0.attributes) ? null : $p0.getAttribute("tabindex", 2);
            $v_0 = IsNull($v_3) || $v_3 === 32768 ? null : $p0
        }
        return $v_0
    },
    $A6_2: function($p0)
    {
        if(!IsNull(this.$m_2)) try
        {
            this.$m_2.focus()
        }
        catch($$e_1)
        {}
    },
    $5p_2: function($p0)
    {
        if($p0.target === this.$h_2 && $p0.keyCode === 9 && $p0.shiftKey)
        {
            $p0.stopPropagation();
            $p0.preventDefault();
            !IsNull(this.$11_2) && this.$11_2.focus()
        }
        else if($p0.target === this.$11_2 && $p0.keyCode === 9 && !$p0.shiftKey)
        {
            $p0.stopPropagation();
            $p0.preventDefault();
            !IsNull(this.$h_2) && this.$h_2.focus()
        }
    }
};
Mscrm.InlineMenuItem = function()
{
    Mscrm.InlineMenuItem.initializeBase(this)
};
Mscrm.InlineMenuItem.createInlineMenuItem = function(title)
{
    var $v_0 = $create(Mscrm.InlineMenuItem);
    $v_0.set_title(title);
    return $v_0
};
Mscrm.InlineMenuItem.prototype = {
    $Z_3: null,
    $a_3: null,
    $6U_3: null,
    $5D_3: "ms-crm-IL-MenuItem-MoreInfoItem",
    $6V_3: null,
    $6W_3: null,
    $3r_3: false,
    $2z_3: false,
    get_isNotFound: function()
    {
        return this.$2z_3
    },
    set_isNotFound: function(value)
    {
        this.$2z_3 = value;
        return value
    },
    get_isSearchMore: function()
    {
        return this.$3r_3
    },
    set_isSearchMore: function(value)
    {
        this.$3r_3 = value;
        return value
    },
    get_moreInfo: function()
    {
        return this.$Z_3
    },
    set_moreInfo: function(value)
    {
        this.$Z_3 = value;
        return value
    },
    get_moreInfoRecords: function()
    {
        return this.$a_3
    },
    set_moreInfoRecords: function(value)
    {
        this.$a_3 = value;
        return value
    },
    createElements: function()
    {
        Mscrm.MenuItem.prototype.createElements.call(this);
        if(!IsNull(this.$a_3) && this.$a_3.length)
        {
            this.$Z_3 = document.createElement("DIV");
            var $v_0 = document.createElement("DIV"),
                $v_1 = this.$a_3[0].$2p_0,
                $v_2 = this.$a_3[0].$2f_0;
            !isNullOrEmptyString($v_1) && $v_0.setAttribute("colName", $v_1);
            if(!isNullOrEmptyString($v_2))
            {
                XUI.Html.SetText($v_0, $v_2);
                $v_0.title = $v_2
            }
            else $v_0.innerHTML = "&nbsp;";
            Sys.UI.DomElement.addCssClass($v_0, this.$5D_3);
            this.$Z_3.appendChild($v_0);
            var $v_3 = document.createElement("DIV");
            $v_3.style.width = "10%";
            Sys.UI.DomElement.addCssClass($v_3, this.$5D_3);
            $v_3.innerHTML = "&nbsp;";
            this.$Z_3.appendChild($v_3);
            var $v_4 = document.createElement("DIV"),
                $v_5 = null,
                $v_6 = null;
            if(this.$a_3.length !== 1)
            {
                $v_5 = this.$a_3[1].$2p_0;
                $v_6 = this.$a_3[1].$2f_0
            }!isNullOrEmptyString($v_5) && $v_4.setAttribute("colName", $v_5);
            if(!isNullOrEmptyString($v_6))
            {
                XUI.Html.SetText($v_4, $v_6);
                $v_4.title = $v_6
            }
            else $v_4.innerHTML = "&nbsp;";
            Sys.UI.DomElement.addCssClass($v_4, this.$5D_3);
            var $v_7 = this.$a_3[0].$3Y_0;
            if(!IsNull($v_7))
            {
                var $v_8 = 0;
                if(this.$a_3.length !== 1) $v_8 = this.$a_3[1].$3Y_0;
                if(!IsNull($v_8))
                {
                    var $v_9 = $v_7 + $v_8;
                    $v_0.style.width = ($v_7 * 90 / $v_9).toString() + "%";
                    $v_4.style.width = ($v_8 * 90 / $v_9).toString() + "%"
                }
                else $v_0.style.width = "80%"
            }
            this.$Z_3.appendChild($v_4);
            this._text.appendChild(this.$Z_3)
        }
    },
    dispose: function()
    {
        if(this._disposed) return;
        !IsNull(this._anchor) && $clearHandlers(this._anchor);
        this.$Z_3 = null;
        Mscrm.MenuItem.prototype.dispose.call(this)
    },
    setElementStyles: function(value)
    {
        Mscrm.InlineMenuItem.$6["moreInfoClassName"] = String.format("ms-crm-{0}MenuItem-MoreInfo ms-crm-{0}MenuItem-MoreInfo-Rest", value);
        Mscrm.InlineMenuItem.$6["moreInfoHoverClassName"] = String.format("ms-crm-{0}MenuItem-MoreInfo ms-crm-{0}MenuItem-MoreInfo-Hover", value);
        Mscrm.InlineMenuItem.$6["moreInfoSelectedClassName"] = String.format("ms-crm-{0}MenuItem-MoreInfo ms-crm-{0}MenuItem-MoreInfo-Selected", value);
        Mscrm.InlineMenuItem.$6["textLookupmoreClassName"] = String.format("ms-crm-{0}MenuItem-Title-Lookupmore ms-crm-{0}MenuItem-Title-Lookupmore-Rest", value);
        Mscrm.InlineMenuItem.$6["textHoverLookupmoreClassName"] = String.format("ms-crm-{0}MenuItem-Title-Lookupmore ms-crm-{0}MenuItem-Title-Lookupmore-Hover", value);
        Mscrm.InlineMenuItem.$6["textSelectedLookupmoreClassName"] = String.format("ms-crm-{0}MenuItem-Title-Lookupmore ms-crm-{0}MenuItem-Title-Lookupmore-Selected", value);
        Mscrm.InlineMenuItem.$6["iconSpanLookupmoreClassName"] = String.format("ms-crm-{0}MenuItem-Icon-Lookupmore ms-crm-{0}MenuItem-Icon-Lookupmore-Rest", value);
        Mscrm.InlineMenuItem.$6["iconSpanHoverLookupmoreClassName"] = String.format("ms-crm-{0}MenuItem-Icon-Lookupmore ms-crm-{0}MenuItem-Icon-Lookupmore-Hover", value);
        Mscrm.InlineMenuItem.$6["iconSpanSelectedLookupmoreClassName"] = String.format("ms-crm-{0}MenuItem-Icon-Lookupmore ms-crm-{0}MenuItem-Icon-Lookupmore-Selected", value);
        Mscrm.InlineMenuItem.$6["separatorLookupmoreClassName"] = String.format("ms-crm-{0}MenuItem-Sep-Lookupmore ms-crm-{0}MenuItem-Sep-Lookupmore-Rest", value);
        Mscrm.InlineMenuItem.$6["separatorHoverLookupmoreClassName"] = String.format("ms-crm-{0}MenuItem-Sep-Lookupmore ms-crm-{0}MenuItem-Sep-Lookupmore-Hover", value);
        Mscrm.InlineMenuItem.$6["separatorSelectedLookupmoreClassName"] = String.format("ms-crm-{0}MenuItem-Sep-Lookupmore ms-crm-{0}MenuItem-Sep-Lookupmore-Selected", value);
        Mscrm.InlineMenuItem.$6["anchorLookupmoreClassName"] = String.format("ms-crm-{0}MenuItem-Anchor-Lookupmore ms-crm-{0}MenuItem-Anchor-Lookupmore-Rest", value);
        Mscrm.InlineMenuItem.$6["anchorLookupmoreHoverClassName"] = String.format("ms-crm-{0}MenuItem-Anchor-Lookupmore ms-crm-{0}MenuItem-Anchor-Lookupmore-Hover", value);
        Mscrm.InlineMenuItem.$6["anchorLookupmoreSelectedClassName"] = String.format("ms-crm-{0}MenuItem-Anchor-Lookupmore ms-crm-{0}MenuItem-Anchor-Lookupmore-Selected", value);
        Mscrm.InlineMenuItem.$6["itemLookupmoreClassName"] = String.format("ms-crm-{0}MenuItem-Lookupmore ms-crm-{0}MenuItem-Lookupmore-Rest", value);
        Mscrm.InlineMenuItem.$6["itemLookupmoreHoverClassName"] = String.format("ms-crm-{0}MenuItem-Lookupmore ms-crm-{0}MenuItem-Lookupmore-Hover", value);
        Mscrm.InlineMenuItem.$6["itemLookupmoreSelectedClassName"] = String.format("ms-crm-{0}MenuItem-Lookupmore ms-crm{0}MenuItem-Lookupmore-Selected", value);
        Mscrm.InlineMenuItem.$6["textSpanNotFoundClassName"] = String.format("ms-crm-{0}MenuItem-Title-Span-NotFound ms-crm-{0}MenuItem-Title-Span-NotFound-Rest", value);
        Mscrm.InlineMenuItem.$6["textSpanNotFoundHoverClassName"] = String.format("ms-crm-{0}MenuItem-Title-Span-NotFound ms-crm-{0}MenuItem-Title-Span-NotFound-Hover", value);
        Mscrm.InlineMenuItem.$6["textSpanNotFoundSelectedClassName"] = String.format("ms-crm-{0}MenuItem-Title-Span-NotFound ms-crm-{0}MenuItem-Title-Span-NotFound-Selected", value);
        Mscrm.MenuItem.prototype.setElementStyles.call(this, value)
    },
    assignElementStyles: function(styles)
    {
        this.$6U_3 = Mscrm.InlineMenuItem.$6["moreInfoClassName"];
        this.$6V_3 = Mscrm.InlineMenuItem.$6["moreInfoHoverClassName"];
        this.$6W_3 = Mscrm.InlineMenuItem.$6["moreInfoSelectedClassName"];
        Mscrm.MenuItem.prototype.assignElementStyles.call(this, styles);
        if(this.$3r_3)
        {
            this.$r_2 = Mscrm.InlineMenuItem.$6["textLookupmoreClassName"];
            this.$1f_2 = Mscrm.InlineMenuItem.$6["textHoverLookupmoreClassName"];
            this.$20_2 = Mscrm.InlineMenuItem.$6["textSelectedLookupmoreClassName"];
            this.$4C_2 = Mscrm.InlineMenuItem.$6["textSpanNotFoundClassName"];
            this.$4D_2 = Mscrm.InlineMenuItem.$6["textSpanNotFoundHoverClassName"];
            this.$4E_2 = Mscrm.InlineMenuItem.$6["textSpanNotFoundSelectedClassName"];
            this.$1B_2 = Mscrm.InlineMenuItem.$6["iconSpanLookupmoreClassName"];
            this.$1t_2 = Mscrm.InlineMenuItem.$6["iconSpanHoverLookupmoreClassName"];
            this.$1u_2 = Mscrm.InlineMenuItem.$6["iconSpanSelectedLookupmoreClassName"];
            this.$1K_2 = Mscrm.InlineMenuItem.$6["separatorLookupmoreClassName"];
            this.$2X_2 = Mscrm.InlineMenuItem.$6["separatorHoverLookupmoreClassName"];
            this.$2Y_2 = Mscrm.InlineMenuItem.$6["separatorSelectedLookupmoreClassName"];
            this.$27_2 = Mscrm.InlineMenuItem.$6["anchorLookupmoreClassName"];
            this.$28_2 = Mscrm.InlineMenuItem.$6["anchorLookupmoreHoverClassName"];
            this.$29_2 = Mscrm.InlineMenuItem.$6["anchorLookupmoreSelectedClassName"];
            this.$Q_2 = Mscrm.InlineMenuItem.$6["itemLookupmoreClassName"];
            this.$2M_2 = Mscrm.InlineMenuItem.$6["itemLookupmoreHoverClassName"];
            this.$2N_2 = Mscrm.InlineMenuItem.$6["itemLookupmoreSelectedClassName"]
        }
        else if(this.$2z_3)
        {
            this.$1f_2 = this.$20_2 = this.$r_2;
            this.$4D_2 = this.$4E_2 = this.$4C_2;
            this.$1t_2 = this.$1u_2 = this.$1B_2;
            this.$2X_2 = this.$2Y_2 = this.$1K_2;
            this.$28_2 = this.$29_2 = this.$27_2;
            this.$2M_2 = this.$2N_2 = this.$Q_2;
            this._iconSpan.style.display = "none"
        }
    },
    displayRestStyle: function()
    {
        if(IsNull(this._itemContents)) return;
        Mscrm.MenuItem.prototype.displayRestStyle.call(this);
        !IsNull(this.$Z_3) && Sys.UI.DomElement.addCssClass(this.$Z_3, this.$6U_3)
    },
    displayHoverStyle: function()
    {
        if(IsNull(this._itemContents)) return;
        Mscrm.MenuItem.prototype.displayHoverStyle.call(this);
        !IsNull(this.$Z_3) && Sys.UI.DomElement.addCssClass(this.$Z_3, this.$6V_3)
    },
    displaySelectedStyle: function()
    {
        if(IsNull(this._itemContents)) return;
        Mscrm.MenuItem.prototype.displaySelectedStyle.call(this);
        !IsNull(this.$Z_3) && Sys.UI.DomElement.addCssClass(this.$Z_3, this.$6W_3)
    }
};
Mscrm.Menu = function($p0)
{
    this.$$d_$A3_2 = Function.createDelegate(this, this.$A3_2);
    this.$$d_$9v_2 = Function.createDelegate(this, this.$9v_2);
    this.$$d_$9c_2 = Function.createDelegate(this, this.$9c_2);
    this.$$d_$5p_2 = Function.createDelegate(this, this.$5p_2);
    this.$A_2 = Mscrm.Dialog.auto;
    this.$d_2 = Mscrm.Dialog.auto;
    this.$X_2 = Mscrm.Dialog.auto;
    this.$4_2 = new Array(0);
    this.$3v_2 = window.LOCID_PAGELOADING_MSG;
    Mscrm.Menu.initializeBase(this);
    this.$1_2 = $p0;
    this.set_stylePrefix("");
    this.$54_2 = this.$$d_$5p_2
};
Mscrm.Menu.createMenu = function(container)
{
    if(IsNull(container))
    {
        var $v_0 = $get("contentDiv");
        if(IsNull($v_0)) $v_0 = document.body;
        container = document.createElement("div");
        $v_0.appendChild(container)
    }
    return $create(Mscrm.Menu, null, null, null, container)
};
Mscrm.Menu.createMenuForParentElement = function(parentElement)
{
    var $v_0 = document.createElement("div");
    parentElement.appendChild($v_0);
    return $create(Mscrm.Menu, null, null, null, $v_0)
};
Mscrm.Menu.hideOpenedMenu = function()
{
    !IsNull(Mscrm.Menu.$3x) && Mscrm.Menu.$3x.hide()
};
Mscrm.Menu.prototype = {
    $C_2: 300,
    $M_2: 0,
    $R_2: 0,
    $J_2: null,
    $D_2: null,
    $I_2: null,
    $m_2: null,
    $l_2: null,
    $1G_2: true,
    $1F_2: true,
    $1c_2: true,
    $1z_2: true,
    $8I_2: null,
    $E_2: null,
    $1_2: null,
    $5_2: null,
    $8_2: null,
    $1D_2: true,
    $G_2: false,
    $21_2: null,
    $10_2: null,
    $5O_2: "/_imgs/viewpicker_arrow_default.png",
    $5C_2: "",
    $2Q_2: "",
    $4y_2: "/_imgs/imagestrips/transparent_spacer.gif",
    $5z_2: "",
    $Q_2: null,
    $g_2: null,
    $1B_2: null,
    $1K_2: null,
    $r_2: null,
    $2o_2: null,
    $n_2: false,
    $2L_2: false,
    $2H_2: true,
    $19_2: 0,
    $1I_2: null,
    $2d_2: null,
    $1R_2: null,
    $64_2: null,
    $1Y_2: true,
    $1C_2: false,
    $1L_2: null,
    $2q_2: null,
    $1A_2: null,
    $5P_2: null,
    $6O_2: false,
    $2B_2: null,
    $54_2: null,
    $3t_2: false,
    $2G_2: true,
    $44_2: true,
    $L_2: null,
    $6R_2: "/_imgs/AdvFind/progress.gif",
    $1H_2: "ms-crm-LoadingContainer",
    $B_2: null,
    $60_2: null,
    $2I_2: false,
    $4v_2: true,
    $1S_2: true,
    $1r_2: true,
    $1s_2: true,
    get_loadingClassName: function()
    {
        return this.$1H_2
    },
    set_loadingClassName: function(value)
    {
        this.$1H_2 = value;
        if(!IsNull(this.$5_2)) this.$5_2.set_loadingClassName(value);
        else if(!IsNull(this.$L_2)) this.$L_2.className = value;
        return value
    },
    get_auxIconTooltip: function()
    {
        return this.$60_2
    },
    set_auxIconTooltip: function(value)
    {
        this.$60_2 = value;
        return value
    },
    get_hideOnAuxAction: function()
    {
        return this.$2I_2
    },
    set_hideOnAuxAction: function(value)
    {
        this.$2I_2 = value;
        return value
    },
    get_propagateStyle: function()
    {
        return this.$44_2
    },
    set_propagateStyle: function(value)
    {
        this.$44_2 = value;
        return value
    },
    get_submenuIconPath: function()
    {
        return this.$5O_2
    },
    set_submenuIconPath: function(value)
    {
        this.$5O_2 = value;
        return value
    },
    get_hasItems: function()
    {
        return !IsNull(this.$4_2) && this.$4_2.length > 0
    },
    get_selectedItem: function()
    {
        return this.$8I_2
    },
    get_enforceHorizontalOffset: function()
    {
        return this.$1r_2
    },
    set_enforceHorizontalOffset: function(value)
    {
        this.$1r_2 = value;
        return value
    },
    get_enforceVerticalOffset: function()
    {
        return this.$1s_2
    },
    set_enforceVerticalOffset: function(value)
    {
        this.$1s_2 = value;
        return value
    },
    get_focusOutCheck: function()
    {
        return this.$2G_2
    },
    set_focusOutCheck: function(value)
    {
        this.$2G_2 = value;
        !IsNull(this.$5_2) && this.$5_2.set_focusOutCheck(this.$2G_2);
        !IsNull(this.get_parentMenu()) && this.get_parentMenu().set_focusOutCheck(value);
        return value
    },
    $p_2: false,
    get_neverGrabFocus: function()
    {
        return this.$p_2
    },
    set_neverGrabFocus: function(value)
    {
        this.$p_2 = value;
        return value
    },
    get_zIndex: function()
    {
        this.$3G_2();
        return this.$5_2.get_zIndex()
    },
    get_parentMenu: function()
    {
        return this.$E_2
    },
    set_parentMenu: function(value)
    {
        this.$E_2 = value;
        this.$5u_2();
        return value
    },
    get_top: function()
    {
        return this.$M_2
    },
    set_top: function(value)
    {
        this.$M_2 = value;
        return value
    },
    get_left: function()
    {
        return this.$R_2
    },
    set_left: function(value)
    {
        this.$R_2 = value;
        return value
    },
    get_height: function()
    {
        return this.$A_2
    },
    set_height: function(value)
    {
        this.$A_2 = value;
        return value
    },
    get_width: function()
    {
        return this.$C_2
    },
    set_width: function(value)
    {
        this.$C_2 = value;
        return value
    },
    get_minHeight: function()
    {
        return this.$d_2
    },
    set_minHeight: function(value)
    {
        this.$d_2 = value;
        return value
    },
    get_maxHeight: function()
    {
        return this.$X_2
    },
    set_maxHeight: function(value)
    {
        this.$X_2 = value;
        return value
    },
    get_header: function()
    {
        return this.$J_2
    },
    set_header: function(value)
    {
        this.$J_2 = value;
        return value
    },
    get_body: function()
    {
        return this.$D_2
    },
    set_body: function(value)
    {
        this.$D_2 = value;
        return value
    },
    get_footer: function()
    {
        return this.$I_2
    },
    set_footer: function(value)
    {
        this.$I_2 = value;
        return value
    },
    get_focusElementOnHide: function()
    {
        return this.$l_2
    },
    set_focusElementOnHide: function(value)
    {
        this.$l_2 = value;
        return value
    },
    updateDialogFocusElementOnHide: function(value)
    {
        this.$5_2.set_focusElementOnHide(value)
    },
    get_focusElementOnShow: function()
    {
        if(!IsNull(this.$m_2)) return this.$m_2;
        else if(this.$4_2.length > 0 && this.$4v_2)
        {
            for(var $v_0 = 0; $v_0 < this.$4_2.length; $v_0++)
            {
                var $v_1 = this.$4_2[$v_0];
                if($v_1.get_isFocusable())
                    if($v_1.get_isMenu() && $v_1.get_isSelected()) return $v_1.get_focusElementOnShow();
                    else return $v_1.get_focusElement()
            }
            return this.$8_2
        }
        else
        {
            this.set_activeItemIndex(Mscrm.Menu.$1O);
            return this.$8_2
        }
    },
    set_focusElementOnShow: function(value)
    {
        this.$m_2 = value;
        this.$4v_2 = false;
        return value
    },
    get_launchesRight: function()
    {
        return this.$1G_2
    },
    set_launchesRight: function(value)
    {
        this.$1G_2 = value;
        return value
    },
    get_launchesDown: function()
    {
        return this.$1F_2
    },
    set_launchesDown: function(value)
    {
        this.$1F_2 = value;
        return value
    },
    get_shiftVertical: function()
    {
        return this.$1c_2
    },
    set_shiftVertical: function(value)
    {
        this.$1c_2 = value;
        return value
    },
    get_shiftHorizontal: function()
    {
        return this.$1z_2
    },
    set_shiftHorizontal: function(value)
    {
        this.$1z_2 = value;
        return value
    },
    get_isVertical: function()
    {
        return this.$1D_2
    },
    set_isVertical: function(value)
    {
        this.$1D_2 = value;
        return value
    },
    get_itemContents: function()
    {
        this.$3G_2();
        this.$3O_2();
        return this.$10_2
    },
    set_itemContents: function(value)
    {
        this.$10_2 = value;
        return value
    },
    get_className: function()
    {
        return this.$2o_2
    },
    set_className: function(value)
    {
        this.$2o_2 = value;
        return value
    },
    get_title: function()
    {
        return this.$21_2
    },
    set_title: function(value)
    {
        this.$21_2 = value;
        return value
    },
    get_menuItemId: function()
    {
        return this.$5C_2
    },
    set_menuItemId: function(value)
    {
        this.$5C_2 = value;
        return value
    },
    get_menuId: function()
    {
        return this.$2Q_2
    },
    set_menuId: function(value)
    {
        this.$2Q_2 = value;
        return value
    },
    get_iconPath: function()
    {
        return this.$4y_2
    },
    set_iconPath: function(value)
    {
        this.$4y_2 = value;
        return value
    },
    get_auxIconPath: function()
    {
        return this.$5z_2
    },
    set_auxIconPath: function(value)
    {
        this.$5z_2 = value;
        return value
    },
    get_itemClassName: function()
    {
        return this.$Q_2
    },
    set_itemClassName: function(value)
    {
        this.$Q_2 = value;
        return value
    },
    get_auxIconClassName: function()
    {
        return this.$g_2
    },
    set_auxIconClassName: function(value)
    {
        this.$g_2 = value;
        return value
    },
    get_iconClassName: function()
    {
        return this.$1B_2
    },
    set_iconClassName: function(value)
    {
        this.$Q_2 = value;
        return value
    },
    get_separatorClassName: function()
    {
        return this.$1K_2
    },
    set_separatorClassName: function(value)
    {
        this.$1K_2 = value;
        return value
    },
    get_textClassName: function()
    {
        return this.$r_2
    },
    set_textClassName: function(value)
    {
        this.$r_2 = value;
        return value
    },
    get_isInline: function()
    {
        return this.$n_2
    },
    set_isInline: function(value)
    {
        this.$n_2 = value;
        this.$5u_2();
        return value
    },
    get_isModal: function()
    {
        return this.$2L_2
    },
    set_isModal: function(value)
    {
        this.$2L_2 = value;
        !IsNull(this.$5_2) && this.$5_2.set_isModal(value);
        return value
    },
    get_hideOnAction: function()
    {
        return this.$2H_2
    },
    set_hideOnAction: function(value)
    {
        this.$2H_2 = value;
        return value
    },
    get_actionCallback: function()
    {
        return !IsNull(this.$B_2) ? this.$B_2.get_actionCallback() : null
    },
    set_actionCallback: function(value)
    {
        return value
    },
    get_auxActionCallback: function()
    {
        return null
    },
    set_auxActionCallback: function(value)
    {
        return value
    },
    get_reference: function()
    {
        return this.$1I_2
    },
    set_reference: function(value)
    {
        this.$1I_2 = value;
        return value
    },
    get_contextMenu: function()
    {
        return this.$64_2
    },
    set_contextMenu: function(value)
    {
        this.$64_2 = value;
        return value
    },
    get_hideParentOnContextItemAction: function()
    {
        return this.$1Y_2
    },
    set_hideParentOnContextItemAction: function(value)
    {
        this.$1Y_2 = value;
        return value
    },
    get_activeItemIndex: function()
    {
        return this.$19_2
    },
    set_activeItemIndex: function(value)
    {
        this.$19_2 = value;
        value !== Mscrm.Menu.$1O && !IsNull(this.$E_2) && this.$E_2.set_activeItemIndex(parseInt(this.get_itemContents().attributes.getNamedItem("itemIndex").value, 10));
        return value
    },
    get_accessKey: function()
    {
        return this.$1R_2
    },
    set_accessKey: function(value)
    {
        this.$1R_2 = value;
        return value
    },
    get_tooltip: function()
    {
        return IsNull(this.$2d_2) ? this.$21_2 : this.$2d_2
    },
    set_tooltip: function(value)
    {
        this.$2d_2 = value;
        return value
    },
    get_isLoading: function()
    {
        return this.$1C_2
    },
    set_isLoading: function(value)
    {
        this.$1C_2 = value;
        if(!IsNull(this.$5_2)) this.$5_2.set_isLoading(value);
        else if(this.$n_2)
            if(value) this.$72_2();
            else this.$71_2();
        return value
    },
    get_stylePrefix: function()
    {
        return this.$1L_2
    },
    set_stylePrefix: function(value)
    {
        this.$1L_2 = !IsNull(value) ? value : "";
        this.$5u_2();
        return value
    },
    get_activeItem: function()
    {
        return this.$19_2 !== Mscrm.Menu.$1O ? this.$4_2[this.$19_2] : null
    },
    set_activeItem: function(value)
    {
        var $v_0 = value.get_itemContents().attributes.getNamedItem("itemIndex");
        if(IsNull($v_0)) return value;
        var $v_1 = parseInt($v_0.value, 10);
        this.set_activeItemIndex(isNaN($v_1) ? 0 : $v_1);
        return value
    },
    get_contextItem: function()
    {
        return this.$2q_2
    },
    set_contextItem: function(value)
    {
        this.$2q_2 = value;
        return value
    },
    get_hideCallback: function()
    {
        return this.$1A_2
    },
    set_hideCallback: function(value)
    {
        this.$1A_2 = value;
        return value
    },
    get_subMenuShowCallback: function()
    {
        return this.$5P_2
    },
    set_subMenuShowCallback: function(value)
    {
        this.$5P_2 = value;
        return value
    },
    get_isSelected: function()
    {
        return this.$6O_2
    },
    set_isSelected: function(value)
    {
        this.$6O_2 = value;
        return value
    },
    get_isFocusable: function()
    {
        for(var $v_0 = 0; $v_0 < this.$4_2.length; $v_0++)
            if(this.$4_2[0].get_isFocusable()) return true;
        return false
    },
    set_isFocusable: function(value)
    {
        return value
    },
    get_auxIconMatchesItem: function()
    {
        return this.$1S_2
    },
    set_auxIconMatchesItem: function(value)
    {
        this.$1S_2 = value;
        !IsNull(this.$B_2) && this.$B_2.set_auxIconMatchesItem(value);
        return value
    },
    get_isVisible: function()
    {
        if(IsNull(this.$8_2)) return false;
        return this.$n_2 ? this.$E_2.get_isVisible() : this.$5_2.get_isVisible()
    },
    get_focusElement: function()
    {
        this.$3G_2();
        this.$3O_2();
        if(this.$n_2 || this.get_isVisible())
        {
            var $v_0 = 0;
            while($v_0 < this.$4_2.length && IsNull(this.$4_2[$v_0].get_actionCallback())) $v_0++;
            return $v_0 < this.$4_2.length ? this.$4_2[$v_0].get_focusElement() : null
        }
        else return IsNull(this.$B_2) ? null : this.$B_2.get_focusElement()
    },
    get_isMenu: function()
    {
        return true
    },
    get_hasNextItem: function()
    {
        return !IsNull(this.$5g_2(true))
    },
    get_hasPreviousItem: function()
    {
        return !IsNull(this.$5g_2(false))
    },
    get_menuItems: function()
    {
        return this.$4_2
    },
    get_inlineItem: function()
    {
        return this.$B_2
    },
    show: function(callback)
    {
        this.$3G_2();
        this.$3O_2();
        this.$5x_2();
        if(!this.get_isLoading() && (IsNull(this.$4_2) || !this.$4_2.length)) return;
        if(!this.$3t_2 && (IsNull(this.$E_2) || !this.$n_2))
        {
            $addHandler(this.$8_2, "keydown", this.$54_2);
            this.$3t_2 = true
        }
        if(IsNull(callback)) this.$5_2.show();
        else
        {
            var $$t_2 = this;
            this.$5_2.show(function($p1_0)
            {
                callback($$t_2)
            })
        }
        Mscrm.Menu.$3x = this
    },
    hide: function(callback)
    {
        if(this.$3t_2)
        {
            $removeHandler(this.$8_2, "keydown", this.$54_2);
            this.$3t_2 = false
        }
        if(!this.get_isVisible()) return;
        if(this.$n_2) this.$E_2.hide();
        else if(IsNull(callback)) this.$5_2.hide();
        else
        {
            var $$t_2 = this;
            this.$5_2.hide(function($p1_0)
            {
                callback($$t_2)
            })
        }
    },
    hideAll: function(hideParentOnContextItem)
    {
        this.hide();
        !IsNull(this.$E_2) && this.$E_2.hideAll(hideParentOnContextItem);
        !IsNull(this.$2q_2) && !IsNull(this.$2q_2.get_parentMenu()) && hideParentOnContextItem && this.$2q_2.get_parentMenu().hideAll(hideParentOnContextItem)
    },
    refresh: function(callback)
    {
        this.$G_2 = true;
        this.$3G_2();
        this.$3O_2();
        this.$5x_2();
        if(IsNull(callback)) this.$5_2.refresh();
        else
        {
            var $$t_2 = this;
            this.$5_2.refresh(function($p1_0)
            {
                callback($$t_2)
            })
        }
    },
    dispose: function()
    {
        if(this._disposed) return;
        if(!IsNull(this.$5_2))
        {
            this.$5_2.dispose();
            this.$5_2 = null
        }
        if(!IsNull(this.$1_2) && XUI.Html.DomUtils.Contains(window.document.body, this.$1_2))
        {
            this.$1_2.parentNode.removeChild(this.$1_2);
            this.$1_2 = null
        }
        Mscrm.CrmUIComponent.prototype.dispose.call(this)
    },
    addItem: function(item)
    {
        this.$4_2[this.$4_2.length] = item;
        item.set_parentMenu(this);
        this.$G_2 = true
    },
    insertItem: function(item, position)
    {
        var $v_0 = position;
        if($v_0 > this.$4_2.length) $v_0 = this.$4_2.length;
        if($v_0 < 0) $v_0 = 0;
        for(var $v_1 = this.$4_2.length; $v_1 > $v_0; $v_1--) this.$4_2[$v_1] = this.$4_2[$v_1 - 1];
        this.$4_2[$v_0] = item;
        item.set_parentMenu(this);
        this.$G_2 = true
    },
    clear: function()
    {
        if(!IsNull(this.$4_2))
            for(var $v_0 = 0; $v_0 < this.$4_2.length; $v_0++)
            {
                var $v_1 = this.$4_2[$v_0];
                $v_1.dispose()
            }
        this.clearDOM()
    },
    clearDOM: function()
    {
        this.$4_2 = new Array(0);
        this.$G_2 = true;
        this.$3O_2()
    },
    selectPreviousItem: function()
    {
        this.selectItem(false)
    },
    selectNextItem: function()
    {
        this.selectItem(true)
    },
    displayRestStyle: function()
    {
        if(!this.get_isInline() && !IsNull(this.get_parentMenu()) && this.get_isVisible()) return;
        !IsNull(this.$B_2) && this.$B_2.displayRestStyle()
    },
    displayHoverStyle: function()
    {
        !IsNull(this.$B_2) && this.$B_2.displayHoverStyle()
    },
    displaySelectedStyle: function()
    {
        !IsNull(this.$B_2) && this.$B_2.displaySelectedStyle()
    },
    selectItem: function(down)
    {
        var $v_0 = this.$5g_2(down);
        if(IsNull($v_0)) return;
        if($v_0.get_isMenu() && $v_0.get_isInline())
        {
            $v_0 !== this.$4_2[this.$19_2] && $v_0.set_activeItemIndex(Mscrm.Menu.$1O);
            if(down) $v_0.selectNextItem();
            else $v_0.selectPreviousItem()
        }
        else
        {
            $v_0.displaySelectedStyle();
            !this.$p_2 && $v_0.get_focusElement().focus()
        }
    },
    $5g_2: function($p0)
    {
        var $v_0 = null;
        if(this.$19_2 !== Mscrm.Menu.$1O)
        {
            $v_0 = this.$4_2[this.$19_2];
            if($v_0.get_isMenu() && $v_0.get_isInline() && ($p0 && $v_0.get_hasNextItem() || !$p0 && $v_0.get_hasPreviousItem())) return $v_0
        }
        var $v_1 = $p0 ? 1 : -1,
            $v_2 = $p0 ? this.$4_2.length : -1,
            $v_3 = this.$19_2 === Mscrm.Menu.$1O && !$p0 ? this.$4_2.length : this.$19_2;
        if($v_3 === Mscrm.Menu.$1O && !this.$4_2.length || $p0 && $v_3 + $v_1 >= $v_2 || !$p0 && $v_3 + $v_1 <= $v_2) return null;
        var $v_4 = false,
            $v_5 = true;
        do {
            $v_3 += $v_1;
            $v_5 = $p0 && $v_3 + $v_1 < $v_2 || !$p0 && $v_3 + $v_1 > $v_2;
            $v_0 = this.$4_2[$v_3];
            if(!XUI.Html.DomUtils.Contains(this.$8_2, $v_0.get_itemContents())) continue;
            $v_4 = false;
            if($v_0.get_isMenu() && $v_0.get_isInline())
            {
                var $v_6 = $v_0;
                if($v_6.get_menuItems().length > 0)
                {
                    $v_6.set_activeItemIndex(Mscrm.Menu.$1O);
                    $v_4 = $p0 && $v_6.get_hasNextItem() || !$p0 && $v_6.get_hasPreviousItem()
                }
            }
        } while ($v_5 && !$v_4 && IsNull($v_0.get_actionCallback()));
        return $v_5 || $v_4 || !IsNull($v_0.get_actionCallback()) ? $v_0 : null
    },
    setHeight: function(height)
    {
        Mscrm.Utilities.setOuterHeight(this.get_itemContents(), height)
    },
    $3G_2: function()
    {
        if(!IsNull(this.$8_2)) return;
        this.$8_2 = document.createElement("ul");
        this.$8_2.className = this.$2o_2;
        if(!isNullOrEmptyString(this.$2Q_2)) this.$8_2.id = this.$2Q_2;
        if(!this.$4v_2 && IsNull(this.$m_2)) this.$8_2.tabIndex = 0;
        if(!IsNull(this.$E_2))
            if(this.$n_2)
            {
                this.$10_2 = document.createElement("li");
                this.$L_2 = document.createElement("div");
                this.$L_2.className = this.$1H_2;
                this.$L_2.innerHTML = String.format("<table class='{1}'><tr class='{1}'><td style='vertical-align: middle' align='center'><IMG id='loading' alt='' src='{2}'><br>{0}</td></tr></table>", CrmEncodeDecode.CrmHtmlEncode(this.$3v_2), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1H_2), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$6R_2));
                this.$8_2.style.width = this.$C_2 + "px";
                if(this.$1C_2) this.$72_2();
                else this.$71_2()
            }
            else
            {
                this.$B_2 = Mscrm.MenuItem.createMenuItem(this.$21_2);
                this.$B_2.set_menuItemId(this.$5C_2);
                this.$B_2.set_tooltip(this.get_tooltip());
                this.$B_2.set_iconPath(this.$4y_2);
                this.$10_2 = this.$B_2.get_itemContents();
                this.$B_2.set_actionCallback(this.$$d_$9c_2);
                this.$B_2.set_auxActionCallback(this.$$d_$9c_2);
                this.$B_2.set_parentMenu(this.$E_2);
                this.$B_2.set_stylePrefix(this.$1L_2);
                this.$B_2.set_hideOnAction(false);
                this.$B_2.set_hideOnAuxAction(false);
                this.$B_2.set_auxIconPath(this.$5O_2);
                this.$B_2.set_auxIconMatchesItem(this.$1S_2)
            }
        if(!this.$n_2)
        {
            this.$5_2 = Mscrm.Dialog.createDialog(this.$1_2);
            this.$5_2.set_showingCallback(this.$$d_$9v_2);
            this.$5_2.set_isModal(this.$2L_2);
            this.$2B_2 = document.createElement("div");
            this.$2B_2.className = this.$2o_2;
            this.$2B_2.appendChild(this.$8_2);
            this.$5x_2()
        }
    },
    $9v_2: function($p0)
    {
        Mscrm.Utilities.setOuterWidth(this.$8_2, $p0.get_bodyWidth());
        if(!this.$1D_2)
            for(var $v_0 = $p0.get_bodyHeight() - Mscrm.Utilities.getVerticalBoxPadding(this.$8_2), $v_1 = 0; $v_1 < this.$4_2.length; $v_1++) this.$4_2[$v_1].setHeight($v_0);
        else
            for(var $v_2 = $p0.get_bodyWidth() - Mscrm.Utilities.getHorizontalBoxPadding(this.$8_2), $v_3 = 0; $v_3 < this.$4_2.length; $v_3++)
            {
                var $v_4 = this.$4_2[$v_3].get_itemContents();
                Mscrm.Utilities.setOuterWidth($v_4, $v_2)
            }
        if(!Mscrm.Utilities.get_isLeftToRight() && (Mscrm.Utilities.get_ieBrowserVersion() === 10 || Mscrm.Utilities.get_ieBrowserVersion() === 9))
        {
            this.$2B_2.style.paddingBottom = "1px";
            this.$2B_2.style.paddingTop = "1px"
        }
    },
    $72_2: function()
    {
        if(IsNull(this.$L_2)) return;
        this.$10_2.innerHTML = "";
        this.$10_2.appendChild(this.$L_2)
    },
    $71_2: function()
    {
        if(IsNull(this.$8_2)) return;
        this.$10_2.innerHTML = "";
        !IsNull(this.$J_2) && this.$10_2.appendChild(this.$J_2);
        this.$10_2.appendChild(this.$8_2);
        !IsNull(this.$I_2) && this.$10_2.appendChild(this.$I_2)
    },
    $5x_2: function()
    {
        if(!IsNull(this.$5_2))
        {
            this.$5_2.set_top(this.$M_2);
            this.$5_2.set_left(this.$R_2);
            this.$5_2.set_height(this.$A_2);
            this.$5_2.set_minHeight(this.$d_2);
            this.$5_2.set_maxHeight(this.$X_2);
            this.$5_2.set_width(this.$C_2);
            this.$5_2.set_header(this.$J_2);
            this.$5_2.set_isLoading(this.$1C_2);
            this.$5_2.set_body(this.$2B_2);
            this.$5_2.set_footer(this.$I_2);
            this.$5_2.set_dialogId(this.$2Q_2);
            this.$5_2.set_focusElementOnShow(this.get_focusElementOnShow());
            this.$5_2.set_focusElementOnHide(this.$l_2);
            this.$5_2.set_launchesRight(this.$1G_2);
            this.$5_2.set_launchesDown(this.$1F_2);
            this.$5_2.set_shiftHorizontal(this.$1z_2);
            this.$5_2.set_shiftVertical(this.$1c_2);
            this.$5_2.set_hideCallback(this.$$d_$A3_2);
            this.$5_2.set_focusOutCheck(this.$2G_2);
            this.$5_2.set_loadingClassName(this.$1H_2);
            this.$5_2.set_enforceHorizontalOffset(this.$1r_2);
            this.$5_2.set_enforceVerticalOffset(this.$1s_2);
            this.$5_2.set_neverGrabFocus(this.$p_2)
        }
    },
    $5u_2: function()
    {
        var $v_0 = this.$1L_2;
        if($v_0 !== "") $v_0 = String.format("{0}-", $v_0);
        this.$Q_2 = String.format("ms-crm-{0}MenuItem ms-crm-{0}MenuItem-Rest", $v_0);
        this.$g_2 = String.format("ms-crm-{0}MenuItem-Aux", $v_0);
        this.$1B_2 = String.format("ms-crm-{0}MenuItem-Icon", $v_0);
        this.$1K_2 = String.format("ms-crm-{0}MenuItem-Sep", $v_0);
        this.$r_2 = String.format("ms-crm-{0}MenuItem-Title", $v_0);
        this.$2o_2 = String.format("ms-crm-{1}{0}Menu", $v_0, this.$n_2 ? "in-" : "");
        !IsNull(this.$B_2) && this.$B_2.set_stylePrefix(String.format("{0}sub", this.$1L_2));
        if(this.$44_2 && !IsNull(this.$4_2))
            for(var $v_1 = 0; $v_1 < this.$4_2.length; $v_1++)
            {
                this.$4_2[$v_1].set_stylePrefix(this.$1L_2);
                var $v_2 = this.$4_2[$v_1].get_isMenu() ? this.$4_2[$v_1] : null;
                !IsNull($v_2) && !$v_2.get_isInline() && !IsNull($v_2.get_inlineItem()) && $v_2.get_inlineItem().set_stylePrefix(this.$1L_2)
            }
    },
    $3O_2: function()
    {
        if(!this.$G_2 || IsNull(this.$8_2)) return;
        if(IsNull(this.$8_2)) return;
        for(var $v_0 = this.$8_2.children, $v_1 = $v_0.length, $v_2 = 0; $v_2 < $v_1; $v_2++) $v_0[0].parentNode.removeChild($v_0[0]);
        for(var $v_3 = 0; $v_3 < this.$4_2.length; $v_3++)
        {
            var $v_4 = this.$4_2[$v_3].get_itemContents();
            if(this.$4_2[$v_3].get_isMenu())
            {
                var $v_6 = this.$4_2[$v_3];
                if($v_6.get_isInline() && !$v_6.get_hasItems() && IsNull($v_6.get_header()) && IsNull($v_6.get_footer()) && !$v_6.get_isLoading()) continue
            }
            if(this.$1D_2) XUI.Html.SetFloat($v_4, "none");
            else XUI.Html.SetFloat($v_4, Mscrm.Utilities.get_isLeftToRight() ? "left" : "right");
            var $v_5 = document.createAttribute("itemIndex");
            $v_5.value = $v_3.toString();
            $v_4.attributes.setNamedItem($v_5);
            this.$44_2 && this.$1L_2 !== "" && this.$4_2[$v_3].set_stylePrefix(this.$1L_2);
            this.$8_2.appendChild($v_4)
        }
        this.$G_2 = false
    },
    $5p_2: function($p0)
    {
        switch($p0.keyCode)
        {
            case 40:
                this.selectNextItem();
                $p0.stopPropagation();
                $p0.preventDefault();
                break;
            case 38:
                this.selectPreviousItem();
                $p0.stopPropagation();
                $p0.preventDefault();
                break;
            case 27:
            case 37:
            case 39:
                if(this.$9l_2($p0.keyCode))
                {
                    this.hide();
                    $p0.stopPropagation();
                    $p0.preventDefault()
                }
                break
        }
    },
    $9l_2: function($p0)
    {
        switch($p0)
        {
            case 27:
                return true;
            case 37:
                return Mscrm.Utilities.get_isLeftToRight();
            case 39:
                return !Mscrm.Utilities.get_isLeftToRight();
            default:
                return false
        }
    },
    $A3_2: function($p0)
    {
        !IsNull(this.$1A_2) && this.$1A_2(this);
        if(!IsNull(this.$E_2) && !this.$n_2)
        {
            this.$B_2.set_isSelected(false);
            this.$E_2.set_focusOutCheck(true);
            try
            {
                this.$E_2.get_isVisible() && this.$B_2.get_focusElement().focus()
            }
            catch($$e_1)
            {}
        }
    },
    $9c_2: function($p0)
    {
        this.$E_2.set_focusOutCheck(false);
        var $v_0 = Mscrm.Utilities.getXYPos(this.$B_2.get_itemContents(), !Mscrm.Utilities.get_isLeftToRight(), $get("crmContentPanel")),
            $v_1 = parseInt($v_0["y"], 10);
        this.$M_2 = $v_1;
        this.$R_2 = Mscrm.Utilities.get_isLeftToRight() ? this.$E_2.get_left() + this.$E_2.get_width() : this.$E_2.get_left() - this.$E_2.get_width();
        this.$B_2.set_isSelected(true);
        this.show(this.$5P_2)
    }
};
Mscrm.MenuItem = function()
{
    this.$$d_onMouseOut = Function.createDelegate(this, this.onMouseOut);
    this.$$d_onMouseOver = Function.createDelegate(this, this.onMouseOver);
    this.$$d_onClick = Function.createDelegate(this, this.onClick);
    this.$$d_onAuxMouseOut = Function.createDelegate(this, this.onAuxMouseOut);
    this.$$d_onAuxMouseOver = Function.createDelegate(this, this.onAuxMouseOver);
    this.$$d_onAuxClick = Function.createDelegate(this, this.onAuxClick);
    this.$$d_onContextMenu = Function.createDelegate(this, this.onContextMenu);
    this.$$d_onKeyDown = Function.createDelegate(this, this.onKeyDown);
    this.$$d_onBlur = Function.createDelegate(this, this.onBlur);
    this.$$d_onFocus = Function.createDelegate(this, this.onFocus);
    this._renderFormat = Mscrm.MenuItem.formaT_IMAGE_SEP_TITLE_AUX;
    Mscrm.MenuItem.initializeBase(this);
    this.set_stylePrefix("");
    this._menuItemId = String.format("item{0}", Mscrm.MenuItem.$5m.toString());
    Mscrm.MenuItem.$5m++
};
Mscrm.MenuItem.createMenuItem = function(title)
{
    var $v_0 = $create(Mscrm.MenuItem);
    $v_0.set_title(title);
    return $v_0
};
Mscrm.MenuItem.prototype = {
    _isSpacer: false,
    _stylePrefix: null,
    _itemContents: null,
    $E_2: null,
    _auxAnchor: null,
    _auxIcon: null,
    _anchor: null,
    _icon: null,
    _iconSpan: null,
    _separator: null,
    _text: null,
    _menuItemId: "",
    _iconPath: "/_imgs/imagestrips/transparent_spacer.gif",
    _auxIconPath: "",
    $Q_2: null,
    $2M_2: null,
    $2N_2: null,
    $27_2: null,
    $29_2: null,
    $28_2: null,
    $1B_2: null,
    $1t_2: null,
    $1u_2: null,
    $g_2: null,
    $1m_2: null,
    $3U_2: null,
    $1K_2: null,
    $2X_2: null,
    $2Y_2: null,
    $r_2: null,
    $1f_2: null,
    $20_2: null,
    $4C_2: null,
    $4D_2: null,
    $4E_2: null,
    $2t_2: false,
    $1R_2: null,
    _title: null,
    _actionCallback: null,
    _auxActionCallback: null,
    $1I_2: null,
    _contextMenu: null,
    $2d_2: null,
    _selected: false,
    $4w_2: true,
    $3T_2: true,
    $2H_2: true,
    $2I_2: true,
    $1Y_2: true,
    _auxIconTooltip: null,
    $1S_2: false,
    get_menuItemId: function()
    {
        return this._menuItemId
    },
    set_menuItemId: function(value)
    {
        this._menuItemId = value;
        return value
    },
    get_anchor: function()
    {
        return this._anchor
    },
    set_anchor: function(value)
    {
        this._anchor = value;
        return value
    },
    get_auxIconTooltip: function()
    {
        return this._auxIconTooltip
    },
    set_auxIconTooltip: function(value)
    {
        this._auxIconTooltip = value;
        if(!IsNull(this._auxIcon))
        {
            this._auxIcon.setAttribute("alt", value);
            this._auxIcon.setAttribute("title", value)
        }
        return value
    },
    get_hideOnAction: function()
    {
        return this.$2H_2
    },
    set_hideOnAction: function(value)
    {
        this.$2H_2 = value;
        return value
    },
    get_hideOnAuxAction: function()
    {
        return this.$2I_2
    },
    set_hideOnAuxAction: function(value)
    {
        this.$2I_2 = value;
        return value
    },
    get_hideParentOnContextItemAction: function()
    {
        return this.$1Y_2
    },
    set_hideParentOnContextItemAction: function(value)
    {
        this.$1Y_2 = value;
        return value
    },
    get_auxIconMatchesItem: function()
    {
        return this.$1S_2
    },
    set_auxIconMatchesItem: function(value)
    {
        this.$1S_2 = value;
        return value
    },
    get_renderFormat: function()
    {
        return this._renderFormat
    },
    set_renderFormat: function(value)
    {
        this._renderFormat = value;
        return value
    },
    get_disabled: function()
    {
        return this.$2t_2
    },
    set_disabled: function(value)
    {
        this.$2t_2 = value;
        return value
    },
    get_parentMenu: function()
    {
        return this.$E_2
    },
    set_parentMenu: function(value)
    {
        this.$E_2 = value;
        return value
    },
    get_iconPath: function()
    {
        return this._iconPath
    },
    set_iconPath: function(value)
    {
        this._iconPath = value;
        !IsNull(this._itemContents) && this._icon.setAttribute("src", value);
        return value
    },
    get_auxIconPath: function()
    {
        return this._auxIconPath
    },
    set_auxIconPath: function(value)
    {
        this._auxIconPath = value;
        if(!IsNull(this._itemContents))
        {
            this._auxIcon.setAttribute("src", value);
            this._auxAnchor.style.display = "inline"
        }
        return value
    },
    get_itemClassName: function()
    {
        return this.$Q_2
    },
    set_itemClassName: function(value)
    {
        this.$Q_2 = value;
        return value
    },
    get_itemSelectedClassName: function()
    {
        return this.$2N_2
    },
    set_itemSelectedClassName: function(value)
    {
        this.$2N_2 = value;
        return value
    },
    get_itemHoverClassName: function()
    {
        return this.$2M_2
    },
    set_itemHoverClassName: function(value)
    {
        this.$2M_2 = value;
        return value
    },
    get_auxIconClassName: function()
    {
        return this.$g_2
    },
    set_auxIconClassName: function(value)
    {
        this.$g_2 = value;
        return value
    },
    get_anchorClassName: function()
    {
        return this.$27_2
    },
    set_anchorClassName: function(value)
    {
        this.$27_2 = value;
        return value
    },
    get_anchorHoverClassName: function()
    {
        return this.$28_2
    },
    set_anchorHoverClassName: function(value)
    {
        this.$28_2 = value;
        return value
    },
    get_anchorSelectedClassName: function()
    {
        return this.$29_2
    },
    set_anchorSelectedClassName: function(value)
    {
        this.$29_2 = value;
        return value
    },
    get_iconClassName: function()
    {
        return this.$1B_2
    },
    set_iconClassName: function(value)
    {
        this.$1B_2 = value;
        return value
    },
    get_iconHoverClassName: function()
    {
        return this.$1t_2
    },
    set_iconHoverClassName: function(value)
    {
        this.$1t_2 = value;
        return value
    },
    get_iconSelectedClassName: function()
    {
        return this.$1u_2
    },
    set_iconSelectedClassName: function(value)
    {
        this.$1u_2 = value;
        return value
    },
    get_separatorClassName: function()
    {
        return this.$1K_2
    },
    set_separatorClassName: function(value)
    {
        this.$1K_2 = value;
        return value
    },
    get_separatorHoverClassName: function()
    {
        return this.$2X_2
    },
    set_separatorHoverClassName: function(value)
    {
        this.$2X_2 = value;
        return value
    },
    get_separatorSelectedClassName: function()
    {
        return this.$2Y_2
    },
    set_separatorSelectedClassName: function(value)
    {
        this.$2Y_2 = value;
        return value
    },
    get_textClassName: function()
    {
        return this.$r_2
    },
    set_textClassName: function(value)
    {
        this.$r_2 = value;
        return value
    },
    get_textHoverClassName: function()
    {
        return this.$1f_2
    },
    set_textHoverClassName: function(value)
    {
        this.$1f_2 = value;
        return value
    },
    get_textSelectedClassName: function()
    {
        return this.$20_2
    },
    set_textSelectedClassName: function(value)
    {
        this.$20_2 = value;
        return value
    },
    get_textSpanClassName: function()
    {
        return this.$4C_2
    },
    set_textSpanClassName: function(value)
    {
        this.$4C_2 = value;
        return value
    },
    get_textSpanHoverClassName: function()
    {
        return this.$4D_2
    },
    set_textSpanHoverClassName: function(value)
    {
        this.$4D_2 = value;
        return value
    },
    get_textSpanSelectedClassName: function()
    {
        return this.$4E_2
    },
    set_textSpanSelectedClassName: function(value)
    {
        this.$4E_2 = value;
        return value
    },
    get_itemContents: function()
    {
        IsNull(this._itemContents) && this.createElements();
        return this._itemContents
    },
    set_itemContents: function(value)
    {
        this._itemContents = value;
        return value
    },
    get_title: function()
    {
        return this._title
    },
    set_title: function(value)
    {
        this._title = value;
        !IsNull(this._text) && XUI.Html.SetText(XUI.Html.DomUtils.GetFirstChild(this._text), this._title);
        return value
    },
    get_tooltip: function()
    {
        return IsNull(this.$2d_2) ? this._title : this.$2d_2
    },
    set_tooltip: function(value)
    {
        this.$2d_2 = value;
        return value
    },
    get_accessKey: function()
    {
        return this.$1R_2
    },
    set_accessKey: function(value)
    {
        this.$1R_2 = value;
        return value
    },
    get_actionCallback: function()
    {
        return this._actionCallback
    },
    set_actionCallback: function(value)
    {
        this._actionCallback = value;
        if(!IsNull(this._anchor)) this._itemContents.tabIndex = IsNull(value) ? null : 0;
        return value
    },
    get_auxActionCallback: function()
    {
        return this._auxActionCallback
    },
    set_auxActionCallback: function(value)
    {
        this._auxActionCallback = value;
        if(!IsNull(this._auxAnchor)) this._auxAnchor.tabIndex = this.$3T_2 ? 0 : -1;
        return value
    },
    get_reference: function()
    {
        return this.$1I_2
    },
    set_reference: function(value)
    {
        this.$1I_2 = value;
        return value
    },
    get_contextMenu: function()
    {
        return this._contextMenu
    },
    set_contextMenu: function(value)
    {
        this._contextMenu = value;
        return value
    },
    get_stylePrefix: function()
    {
        return this._stylePrefix
    },
    set_stylePrefix: function(value)
    {
        if(this._stylePrefix === value) return value;
        if(!isNullOrEmptyString(value))
        {
            this._stylePrefix = value;
            value = String.format("{0}-", value)
        }
        else if(IsNull(value))
        {
            value = "";
            this._stylePrefix = value
        }
        this.setElementStyles(value);
        if(this._selected) this.displaySelectedStyle();
        else this.displayRestStyle();
        return value
    },
    setElementStyles: function(value)
    {
        var $v_0 = Mscrm.MenuItem.$5Z[value];
        if(IsNull($v_0))
        {
            $v_0 = this.buildNewStylesCache(value);
            Mscrm.MenuItem.$5Z[value] = $v_0
        }
        this.assignElementStyles($v_0)
    },
    assignElementStyles: function(styles)
    {
        this.$Q_2 = styles["itemClassName"].toString();
        this.$2M_2 = styles["itemHoverClassName"].toString();
        this.$2N_2 = styles["itemSelectedClassName"].toString();
        this.$27_2 = styles["anchorClassName"].toString();
        this.$28_2 = styles["anchorHoverClassName"].toString();
        this.$29_2 = styles["anchorSelectedClassName"].toString();
        this.$1B_2 = styles["iconClassName"].toString();
        this.$1t_2 = styles["iconHoverClassName"].toString();
        this.$1u_2 = styles["iconSelectedClassName"].toString();
        this.$g_2 = styles["auxIconClassName"].toString();
        this.$1m_2 = styles["auxIconHoverClassName"].toString();
        this.$3U_2 = styles["auxIconSelectedClassName"].toString();
        this.$1K_2 = styles["separatorClassName"].toString();
        this.$2X_2 = styles["separatorHoverClassName"].toString();
        this.$2Y_2 = styles["separatorSelectedClassName"].toString();
        this.$r_2 = styles["textClassName"].toString();
        this.$1f_2 = styles["textHoverClassName"].toString();
        this.$20_2 = styles["textSelectedClassName"].toString()
    },
    buildNewStylesCache: function(value)
    {
        var $v_0 = {};
        $v_0["itemClassName"] = String.format("ms-crm-MenuItem-NoOutline ms-crm-{0}MenuItem ms-crm-{0}MenuItem-Rest", value);
        $v_0["itemHoverClassName"] = String.format("ms-crm-MenuItem-NoOutline ms-crm-{0}MenuItem ms-crm-{0}MenuItem-Hover", value);
        $v_0["itemSelectedClassName"] = String.format("ms-crm-MenuItem-NoOutline ms-crm-{0}MenuItem ms-crm{0}MenuItem-Selected", value);
        $v_0["anchorClassName"] = String.format("ms-crm-{0}MenuItem-Anchor ms-crm-{0}MenuItem-Anchor-Rest", value);
        $v_0["anchorHoverClassName"] = String.format("ms-crm-{0}MenuItem-Anchor ms-crm-{0}MenuItem-Anchor-Hover", value);
        $v_0["anchorSelectedClassName"] = String.format("ms-crm-{0}MenuItem-Anchor ms-crm-{0}MenuItem-Anchor-Selected", value);
        $v_0["iconClassName"] = String.format("ms-crm-{0}MenuItem-Icon ms-crm-{0}MenuItem-Icon-Rest", value);
        $v_0["iconHoverClassName"] = String.format("ms-crm-{0}MenuItem-Icon ms-crm-{0}MenuItem-Icon-Hover", value);
        $v_0["iconSelectedClassName"] = String.format("ms-crm-{0}MenuItem-Icon ms-crm-{0}MenuItem-Icon-Selected", value);
        $v_0["auxIconClassName"] = String.format("ms-crm-{0}MenuItem-Aux ms-crm-{0}MenuItem-Aux-Rest", value);
        $v_0["auxIconHoverClassName"] = String.format("ms-crm-{0}MenuItem-Aux ms-crm-{0}MenuItem-Aux-Hover", value);
        $v_0["auxIconSelectedClassName"] = String.format("ms-crm-{0}MenuItem-Aux ms-crm-{0}MenuItem-Aux-Selected", value);
        $v_0["separatorClassName"] = String.format("ms-crm-{0}MenuItem-Sep ms-crm-{0}MenuItem-Sep-Rest", value);
        $v_0["separatorHoverClassName"] = String.format("ms-crm-{0}MenuItem-Sep ms-crm-{0}MenuItem-Sep-Hover", value);
        $v_0["separatorSelectedClassName"] = String.format("ms-crm-{0}MenuItem-Sep ms-crm-{0}MenuItem-Sep-Selected", value);
        $v_0["textClassName"] = String.format("ms-crm-{0}MenuItem-Title ms-crm-{0}MenuItem-Title-Rest", value);
        $v_0["textHoverClassName"] = String.format("ms-crm-{0}MenuItem-Title ms-crm-{0}MenuItem-Title-Hover", value);
        $v_0["textSelectedClassName"] = String.format("ms-crm-{0}MenuItem-Title ms-crm-{0}MenuItem-Title-Selected", value);
        return $v_0
    },
    get_isSelected: function()
    {
        return this._selected
    },
    set_isSelected: function(value)
    {
        this._selected = value;
        if(value) this.displaySelectedStyle();
        else this.displayRestStyle();
        return value
    },
    get_isFocusable: function()
    {
        return this.$4w_2
    },
    set_isFocusable: function(value)
    {
        this.$4w_2 = value;
        return value
    },
    get_isAuxAnchorFocusable: function()
    {
        return this.$3T_2
    },
    set_isAuxAnchorFocusable: function(value)
    {
        this.$3T_2 = value;
        if(!IsNull(this._auxAnchor)) this._auxAnchor.tabIndex = value ? 0 : -1;
        return value
    },
    get_focusElement: function()
    {
        return this.get_itemContents()
    },
    get_isMenu: function()
    {
        return false
    },
    displayRestStyle: function()
    {
        if(IsNull(this._itemContents)) return;
        this._itemContents.className = this.$Q_2;
        this._anchor.className = this.$27_2;
        this._icon.className = this.$1B_2;
        this._iconSpan.className = this.$1B_2;
        this._auxAnchor.className = this.$g_2;
        XUI.Html.DomUtils.GetFirstChild(this._auxAnchor).className = this.$g_2;
        this._auxIcon.className = this.$g_2;
        this._separator.className = this.$1K_2;
        if(this.$2t_2) this._text.className = this.$r_2 + " ms-crm-MenuItem-Disabled";
        else this._text.className = this.$r_2;
        XUI.Html.DomUtils.GetFirstChild(this._text).className = this.$r_2
    },
    displayHoverStyle: function()
    {
        if(IsNull(this._itemContents)) return;
        this._itemContents.className = this.$2M_2;
        this._anchor.className = this.$28_2;
        this._icon.className = this.$1t_2;
        this._iconSpan.className = this.$1t_2;
        this._separator.className = this.$2X_2;
        if(this.$2t_2) this._text.className = this.$1f_2 + " ms-crm-MenuItem-Disabled";
        else this._text.className = this.$1f_2;
        XUI.Html.DomUtils.GetFirstChild(this._text).className = this.$1f_2;
        if(this.$1S_2)
        {
            this._auxAnchor.className = this.$1m_2;
            XUI.Html.DomUtils.GetFirstChild(this._auxAnchor).className = this.$1m_2;
            this._auxIcon.className = this.$1m_2
        }
    },
    displaySelectedStyle: function()
    {
        if(IsNull(this._itemContents)) return;
        this._itemContents.className = this.$2N_2;
        this._anchor.className = this.$29_2;
        this._icon.className = this.$1u_2;
        this._iconSpan.className = this.$1u_2;
        this._auxAnchor.className = this.$3U_2;
        XUI.Html.DomUtils.GetFirstChild(this._auxAnchor).className = this.$3U_2;
        this._auxIcon.className = this.$3U_2;
        this._separator.className = this.$2Y_2;
        this._text.className = this.$20_2;
        XUI.Html.DomUtils.GetFirstChild(this._text).className = this.$20_2
    },
    setHeight: function(height)
    {
        Mscrm.Utilities.setOuterHeight(this.get_itemContents(), height)
    },
    $5N_2: false,
    get_stopPropagationOnClick: function()
    {
        return this.$5N_2
    },
    set_stopPropagationOnClick: function(value)
    {
        this.$5N_2 = value;
        return value
    },
    createElements: function()
    {
        this._itemContents = document.createElement("li");
        this._itemContents.setAttribute("id", this._menuItemId);
        this._itemContents.setAttribute("role", "menuitem");
        var $v_0 = {
            focus: this.$$d_onFocus,
            blur: this.$$d_onBlur,
            keydown: this.$$d_onKeyDown
        };
        if(!IsNull(this._contextMenu)) $v_0["contextmenu"] = this.$$d_onContextMenu;
        $addHandlers(this._itemContents, $v_0);
        if(!IsNull(this._actionCallback)) this._itemContents.tabIndex = 0;
        this._auxAnchor = document.createElement("a");
        this._auxAnchor.setAttribute("href", "#");
        if(this._renderFormat === Mscrm.MenuItem.formaT_AUX_IMAGE_SEP_TITLE) XUI.Html.SetFloat(this._auxAnchor, Mscrm.Utilities.get_isLeftToRight() ? "left" : "right");
        else XUI.Html.SetFloat(this._auxAnchor, Mscrm.Utilities.get_isLeftToRight() ? "right" : "left");
        $addHandlers(this._auxAnchor,
        {
            click: this.$$d_onAuxClick,
            mouseover: this.$$d_onAuxMouseOver,
            mouseout: this.$$d_onAuxMouseOut,
            focus: this.$$d_onAuxMouseOver,
            blur: this.$$d_onAuxMouseOut,
            keydown: this.$$d_onKeyDown
        });
        if(!IsNull(this._auxActionCallback)) this._auxAnchor.tabIndex = this.$3T_2 ? 0 : -1;
        if(this._auxIconPath === "") this._auxAnchor.style.display = "none";
        this._auxIcon = document.createElement("img");
        this._auxIcon.setAttribute("title", IsNull(this._auxIconTooltip) ? "" : this._auxIconTooltip);
        this._auxIcon.setAttribute("alt", IsNull(this._auxIconTooltip) ? "" : this._auxIconTooltip);
        !isNullOrEmptyString(this._auxIconPath) && this._auxIcon.setAttribute("src", this._auxIconPath);
        this._anchor = document.createElement("a");
        this._anchor.setAttribute("title", this.get_tooltip());
        if(!isNullOrEmptyString(this.$1R_2)) this._anchor.accessKey = this.$1R_2;
        $addHandlers(this._anchor,
        {
            click: this.$$d_onClick,
            mouseover: this.$$d_onMouseOver,
            mouseout: this.$$d_onMouseOut
        });
        if(IsNull(this._actionCallback)) this._anchor.style.cursor = "default";
        this._icon = document.createElement("img");
        this._icon.setAttribute("src", this._iconPath);
        this._iconSpan = document.createElement("span");
        this._iconSpan.appendChild(this._icon);
        this._separator = document.createElement("span");
        this._text = document.createElement("nobr");
        var $v_1 = document.createElement("span");
        this._text.appendChild($v_1);
        if(!isNullOrEmptyString(this._title))
            if(!isNullOrEmptyString(this.$1R_2)) $v_1.innerHTML = Mscrm.Utilities.stringInjector(CrmEncodeDecode.CrmHtmlEncode(this._title), CrmEncodeDecode.CrmHtmlEncode(this.$1R_2), "<u>", "</u>");
            else XUI.Html.SetText($v_1, this._title);
        else $v_1.innerHTML = "&nbsp;";
        this._itemContents.appendChild(this._auxAnchor);
        this._auxAnchor.appendChild(document.createElement("span"));
        XUI.Html.DomUtils.GetFirstChild(this._auxAnchor).appendChild(this._auxIcon);
        this._itemContents.appendChild(this._anchor);
        this._anchor.appendChild(document.createElement("span"));
        var $v_2 = XUI.Html.DomUtils.GetFirstChild(this._anchor);
        $v_2.appendChild(this._iconSpan);
        $v_2.appendChild(this._separator);
        $v_2.appendChild(this._text);
        if(this._selected) this.displaySelectedStyle();
        else this.displayRestStyle()
    },
    onFocus: function(e)
    {
        !this._selected && this.displayHoverStyle();
        this.$E_2.set_activeItem(this)
    },
    onBlur: function(e)
    {
        !this._selected && this.displayRestStyle()
    },
    onClick: function(e)
    {
        this.$5N_2 && e.stopPropagation();
        this.$4I_2(this._actionCallback, this.$2H_2, this.$1Y_2)
    },
    onMouseOver: function(e)
    {
        !this._selected && this.displayHoverStyle();
        if(this._stylePrefix === "CM" || this._stylePrefix === "in-CM")
        {
            var $v_0 = this.$E_2;
            while(!IsNull($v_0.get_parentMenu())) $v_0 = $v_0.get_parentMenu();
            if(IsNull($v_0.get_activeItem())) return;
            var $v_1 = $v_0.get_activeItem().get_isMenu() && $v_0.get_activeItem().get_inlineItem() === this;
            $v_0.get_activeItem() !== this && !$v_1 && $v_0.get_activeItem().displayRestStyle()
        }
    },
    onMouseOut: function(e)
    {
        !this._selected && this.displayRestStyle()
    },
    onAuxMouseOver: function(e)
    {
        if(!this._selected)
            if(this.$1S_2) this.displayHoverStyle();
            else
            {
                this._auxAnchor.className = this.$1m_2;
                XUI.Html.DomUtils.GetFirstChild(this._auxAnchor).className = this.$1m_2;
                this._auxIcon.className = this.$1m_2
            }
    },
    onAuxMouseOut: function(e)
    {
        if(!this._selected)
            if(this.$1S_2) this.displayRestStyle();
            else
            {
                this._auxAnchor.className = this.$g_2;
                XUI.Html.DomUtils.GetFirstChild(this._auxAnchor).className = this.$g_2;
                this._auxIcon.className = this.$g_2
            }
    },
    onKeyDown: function(e)
    {
        switch(e.keyCode)
        {
            case 37:
            case 39:
                if(this.$9q_2(e.keyCode))
                    if(this.$E_2.get_activeItem().get_isMenu()) this.$6e_2(e);
                    else this.$E_2.hideAll(true);
                break;
            case 13:
            case 32:
                this.$6e_2(e);
                break
        }
    },
    $9q_2: function($p0)
    {
        if(Mscrm.Utilities.get_isLeftToRight()) return $p0 === 39;
        else return $p0 === 37
    },
    $6e_2: function($p0)
    {
        if($p0.target === this._itemContents)
        {
            $p0.stopPropagation();
            $p0.preventDefault();
            this.$4I_2(this._actionCallback, this.$2H_2, this.$1Y_2)
        }
        else if($p0.target === this._auxAnchor)
        {
            $p0.stopPropagation();
            $p0.preventDefault();
            this.$4I_2(this._auxActionCallback, this.$2I_2, this.$1Y_2)
        }
    },
    onAuxClick: function(e)
    {
        this.$4I_2(this._auxActionCallback, this.$2I_2, this.$1Y_2)
    },
    $4I_2: function($p0, $p1, $p2)
    {
        if(!IsNull($p0) && !this.$2t_2)
        {
            $p1 && this.$E_2.hideAll($p2);
            $p0(this)
        }
    },
    onContextMenu: function(e)
    {
        e.stopPropagation();
        e.preventDefault();
        this.$E_2.set_focusOutCheck(false);
        var $$t_3 = this;
        this._contextMenu.set_hideCallback(function($p1_0)
        {
            $$t_3.$E_2.set_focusOutCheck(true);
            try
            {
                $$t_3.$E_2.get_isVisible() && $$t_3.get_focusElement().focus()
            }
            catch($$e_2)
            {}
        });
        this._contextMenu.set_contextItem(this);
        this._contextMenu.set_left(e.clientX);
        this._contextMenu.set_top(e.clientY);
        this._contextMenu.show()
    },
    dispose: function()
    {
        if(this._disposed) return;
        !IsNull(this._itemContents) && $clearHandlers(this._itemContents);
        !IsNull(this._auxAnchor) && $clearHandlers(this._auxAnchor);
        !IsNull(this._anchor) && $clearHandlers(this._anchor);
        this._actionCallback = null;
        this._auxActionCallback = null;
        this._auxAnchor = null;
        this._itemContents = null;
        this._auxIcon = null;
        this._anchor = null;
        this._icon = null;
        this._iconSpan = null;
        this._separator = null;
        this._text = null;
        Mscrm.CrmUIComponent.prototype.dispose.call(this)
    }
};
Mscrm.MenuItemSeparator = function()
{
    Mscrm.MenuItemSeparator.initializeBase(this);
    this._isSpacer = true
};
Mscrm.MenuItemSeparator.createSeparator = function(isVertical)
{
    var $v_0 = $create(Mscrm.MenuItemSeparator);
    $v_0.$Q_2 = "Separator";
    $v_0.$1D_3 = isVertical;
    return $v_0
};
Mscrm.MenuItemSeparator.createSpacer = function(isVertical)
{
    var $v_0 = $create(Mscrm.MenuItemSeparator);
    $v_0.$Q_2 = "Spacer";
    $v_0.$1D_3 = isVertical;
    return $v_0
};
Mscrm.MenuItemSeparator.prototype = {
    $4u_3: null,
    $2R_3: null,
    $55_3: null,
    $1D_3: false,
    get_isVertical: function()
    {
        return this.$1D_3
    },
    set_isVertical: function(value)
    {
        this.$1D_3 = value;
        return value
    },
    get_stylePrefix: function()
    {
        return this._stylePrefix
    },
    set_stylePrefix: function(value)
    {
        if(this._stylePrefix === value) return value;
        IsNull(this._itemContents) && this.createElements();
        if(!isNullOrEmptyString(value))
        {
            this._stylePrefix = value;
            value = String.format("{0}-", value)
        }
        else if(IsNull(value))
        {
            value = "";
            this._stylePrefix = value
        }
        var $v_0 = this.$1D_3 ? "v" : "h";
        this._itemContents.className = String.format("ms-crm-{0}MenuItem-{2}-{1}", value, $v_0, this.$Q_2);
        this.$4u_3.className = String.format("ms-crm-{0}MenuItem-{2}-{1}f", value, $v_0, this.$Q_2);
        this.$2R_3.className = String.format("ms-crm-{0}MenuItem-{2}-{1}m", value, $v_0, this.$Q_2);
        this.$55_3.className = String.format("ms-crm-{0}MenuItem-{2}-{1}l", value, $v_0, this.$Q_2);
        return value
    },
    createElements: function()
    {
        if(IsNull(this._itemContents))
        {
            this._itemContents = document.createElement("LI");
            this.$4u_3 = document.createElement("SPAN");
            this._itemContents.appendChild(this.$4u_3);
            this.$2R_3 = document.createElement("SPAN");
            this._itemContents.appendChild(this.$2R_3);
            this.$55_3 = document.createElement("SPAN");
            this._itemContents.appendChild(this.$55_3)
        }
    },
    setHeight: function(height)
    {
        Mscrm.Utilities.setOuterHeight(this.get_itemContents(), height);
        var $v_0 = Mscrm.Utilities.parseInt(XUI.Html.GetComputedStyle(this.$2R_3, "marginTop")),
            $v_1 = Mscrm.Utilities.parseInt(XUI.Html.GetComputedStyle(this.$2R_3, "marginBottom")),
            $v_2 = $v_0 + $v_1;
        Mscrm.Utilities.setOuterHeight(this.$2R_3, height - $v_2)
    }
};
Mscrm.MenuStyles = function() {};
Mscrm.MenuStyles.get_modeSuffix = function()
{
    return Mscrm.Utilities.get_isStandardsMode() ? "" : "-qrk"
};
Mscrm.AddActivity = function() {};
Mscrm.AddActivity.addActivityToForm = function(activityType, contentId)
{
    var $v_0 = Xrm.Page.data.entity,
        $v_1 = $v_0.getId(),
        $v_2 = $v_0.getEntityName(),
        $v_3 = Xrm.Internal.getEntityCode($v_2),
        $v_4 = $v_0.getPrimaryAttributeValue();
    Mscrm.AddActivity.$6f(activityType, contentId, $v_1, $v_3, $v_4)
};
Mscrm.AddActivity.addActivityFromRefreshForm = function(activityType, contentId)
{
    var $v_0 = Xrm.Page.data.entity;
    if(!IsNull($v_0))
    {
        var $v_1 = $v_0.getId(),
            $v_2 = "",
            $v_3 = $v_0.attributes;
        if(!IsNull($v_3))
        {
            var $v_5 = $v_3.get("title");
            if(!IsNull($v_5)) $v_2 = $v_5.getValue()
        }
        var $v_4 = _etc;
        Mscrm.AddActivity.$5f(activityType, contentId, $v_1, $v_4, $v_2)
    }
};
Mscrm.AddActivity.addActivityToFormFromsubgrid = function(activityType, parentId, parentType)
{
    var $v_0 = "";
    Mscrm.AddActivity.$5f(activityType, null, parentId, parentType, $v_0)
};
Mscrm.AddActivity.addActivityToSelectedObject = function(activityType, contentId, entityReference)
{
    Mscrm.AddActivity.$6f(activityType, contentId, entityReference.Id, entityReference.TypeCode, entityReference.Name)
};
Mscrm.AddActivity.addActivityToObject = function(activityType, contentId, entityReference)
{
    var $v_0 = entityReference.Id,
        $v_1 = entityReference.TypeCode;
    if(typeof activityType !== "number") activityType = parseInt(activityType, 10);
    if(typeof entityReference.TypeCode !== "number") $v_1 = parseInt(entityReference.TypeCode, 10);
    var $v_2 = "";
    if(!IsNull($v_0) && !IsNull($v_1))
    {
        $v_2 += "&_CreateFromId=" + CrmEncodeDecode.CrmUrlEncode($v_0);
        $v_2 += "&_CreateFromType=" + CrmEncodeDecode.CrmUrlEncode($v_1)
    }
    if($v_2.substr(0, 1) === "&") $v_2 = "?" + $v_2.substr(1);
    openFrmObj($v_2, "", activityType, null, 0, null)
};
Mscrm.AddActivity.addActivityTo = function(typeCode, id, type, name, partyId, partyType, partyName, location, contentId)
{
    if(typeof type !== "number") type = parseInt(type, 10);
    if(typeof partyType !== "number") partyType = parseInt(partyType, 10);
    var $v_0 = "",
        $v_1 = "";
    if(!IsNull(id) && !IsNull(type) && typeCode !== 4401)
    {
        $v_1 = type;
        $v_0 += "&pId=" + CrmEncodeDecode.CrmUrlEncode(id);
        $v_0 += "&pType=" + CrmEncodeDecode.CrmUrlEncode($v_1);
        $v_0 += "&pName=" + CrmEncodeDecode.CrmUrlEncode(name)
    }
    if(!IsNull(partyId))
    {
        $v_0 += "&partyid=" + CrmEncodeDecode.CrmUrlEncode(partyId);
        $v_0 += "&partytype=" + CrmEncodeDecode.CrmUrlEncode(partyType);
        $v_0 += "&partyname=" + CrmEncodeDecode.CrmUrlEncode(partyName);
        $v_0 += "&partyaddressused=";
        if(IsNull(location)) location = "";
        $v_0 += "&contactInfo=" + CrmEncodeDecode.CrmUrlEncode(location)
    }
    if(!isNullOrEmptyString(contentId)) $v_0 += "&contentId=" + CrmEncodeDecode.CrmUrlEncode(contentId);
    if(!IsNull(id) && !IsNull(type))
    {
        $v_0 += "&_CreateFromId=" + CrmEncodeDecode.CrmUrlEncode(id);
        $v_0 += "&_CreateFromType=" + CrmEncodeDecode.CrmUrlEncode($v_1)
    }
    if($v_0.substr(0, 1) === "&") $v_0 = "?" + $v_0.substr(1);
    openFrmObj($v_0, "", typeCode, null, 0, null)
};
Mscrm.AddActivity.$6f = function($p0, $p1, $p2, $p3, $p4)
{
    Mscrm.AddActivity.$5f($p0, $p1, $p2, $p3, $p4)
};
Mscrm.AddActivity.$5f = function($p0, $p1, $p2, $p3, $p4)
{
    if(typeof $p3 !== "number") $p3 = parseInt($p3, 10);
    if(typeof $p0 !== "number") $p0 = parseInt($p0, 10);
    var $v_0 = null,
        $v_1 = 0,
        $v_2 = null,
        $v_3 = null;
    if($p0 === 4210)
    {
        var $v_4 = Mscrm.AddActivity.$9O($p3, $p4, $p2);
        if(isArray($v_4) && $v_4.length > 0)
            if(!isNullOrEmptyString($v_4[0].id) && !isNullOrEmptyString($v_4[0].name) && !isNullOrEmptyString($v_4[0].type))
            {
                $v_0 = $v_4[0].id;
                $v_2 = $v_4[0].name;
                $v_1 = parseInt($v_4[0].type, 10)
            }
        if($p3 === 1 || $p3 === 2 || $p3 === 4)
        {
            var $v_5 = Xrm.Page.getAttribute("telephone1");
            if($v_5) $v_3 = $v_5.getValue();
            else $v_3 = window.LEAD_PARTY_LOCATION_FOR_PHONE
        }
        else $v_3 = ""
    }
    else if($p0 !== 4212) switch($p3)
    {
        case 1:
        case 2:
        case 4:
            $v_0 = $p2;
            $v_1 = $p3;
            $v_2 = $p4;
            var $v_6;
            switch($p0)
            {
                case 4204:
                    if(Xrm.Page.data)
                    {
                        $v_6 = Xrm.Page.getAttribute("fax");
                        var $v_8 = Xrm.Page.getAttribute("address1_fax");
                        if($v_6) $v_3 = $v_6.getValue();
                        else $v_3 = "";
                        $v_3 += ";";
                        if($v_8) $v_3 += $v_8.getValue()
                    }
                    else $v_3 = window.LEAD_PARTY_LOCATION_FOR_FAX;
                    break;
                case 4207:
                    if(Xrm.Page.data)
                    {
                        $v_6 = Xrm.Page.getAttribute("address1_name");
                        if($v_6) $v_3 = $v_6.getValue()
                    }
                    else $v_3 = window.LEAD_PARTY_LOCATION_FOR_LETTER;
                    break;
                default:
                    $v_3 = "";
                    break
            }
            break;
        case 112:
        case 3:
        case 1084:
        case 1090:
        case 1088:
        case 1010:
            var $v_7 = Mscrm.AddActivity.getPartyDetailsForRefreshForm($p3);
            if(!IsNull($v_7))
            {
                $v_0 = $v_7[0].id;
                $v_1 = $v_7[0].type;
                $v_2 = $v_7[0].name
            }
            $v_3 = "";
            break;
        default:
            if($p0 === 4202 && $p3 >= 1e4)
            {
                $v_0 = $p2;
                $v_1 = $p3;
                $v_2 = $p4
            }
            break
    }
    Mscrm.AddActivity.addActivityTo($p0, $p2, $p3, $p4, $v_0, $v_1, $v_2, $v_3, $p1)
};
Mscrm.AddActivity.$9O = function($p0, $p1, $p2)
{
    var $v_0 = null;
    switch($p0)
    {
        case 112:
            var $v_1 = Xrm.Page.getAttribute("customerid");
            $v_0 = !IsNull($v_1) ? $v_1.getValue() : null;
            break;
        case 1:
            var $v_2 = Xrm.Page.getAttribute("primarycontactid");
            if(!IsNull($v_2) && !IsNull($v_2.getValue())) $v_0 = $v_2.getValue();
            else if(!isNullOrEmptyString($p2) && !isNullOrEmptyString($p1)) $v_0 = Mscrm.AddActivity.$5b($p1, $p2, 1, "account");
            break;
        case 2:
            if(!isNullOrEmptyString($p2) && !isNullOrEmptyString($p1)) $v_0 = Mscrm.AddActivity.$5b($p1, $p2, 2, "contact");
            break;
        case 3:
            var $v_3 = Xrm.Page.getAttribute("parentcontactid");
            if(!IsNull($v_3)) $v_0 = $v_3.getValue();
            var $v_4 = Xrm.Page.getAttribute("parentaccountid");
            if(!IsNull($v_4))
                if(IsNull($v_0)) $v_0 = $v_4.getValue();
            break;
        case 4:
            $v_3 = Xrm.Page.getAttribute("parentcontactid");
            if(!IsNull($v_3) && !IsNull($v_3.getValue())) $v_0 = $v_3.getValue();
            else if(!isNullOrEmptyString($p2) && !IsNull($p1)) $v_0 = Mscrm.AddActivity.$5b($p1, $p2, 4, "lead");
            break;
        default:
            break
    }
    return $v_0
};
Mscrm.AddActivity.$5b = function($p0, $p1, $p2, $p3)
{
    var $v_0 = new Array(1);
    $v_0[0] = new LookupItem;
    $v_0[0].name = $p0;
    $v_0[0].id = $p1;
    $v_0[0].type = $p2.toString();
    $v_0[0].typename = $p3;
    return $v_0
};
Mscrm.AddActivity.getPartyDetailsForRefreshForm = function(entityTypeCode)
{
    var $v_0 = null,
        $v_1 = Xrm.Page.data.entity;
    if(!IsNull($v_1)) switch(entityTypeCode)
    {
        case 112:
            $v_0 = Mscrm.AddActivity.$9D();
            break;
        case 3:
            $v_0 = Mscrm.AddActivity.$9E();
            break;
        default:
            var $v_2 = $v_1.attributes;
            if(!IsNull($v_2))
            {
                var $v_3 = $v_2.get("customerid");
                if(!IsNull($v_3)) $v_0 = $v_3.getValue()
            }
            break
    }
    return $v_0
};
Mscrm.AddActivity.$9E = function()
{
    var $v_0 = null,
        $v_1 = null;
    if(!IsNull(Xrm.Page.getAttribute("parentcontactid"))) $v_0 = Xrm.Page.getAttribute("parentcontactid");
    else if(!IsNull(Xrm.Page.getAttribute("parentaccountid"))) $v_0 = Xrm.Page.getAttribute("parentaccountid");
    else if(!IsNull(Xrm.Page.getAttribute("customerid"))) $v_0 = Xrm.Page.getAttribute("customerid");
    if(!IsNull($v_0)) $v_1 = $v_0.getValue();
    return $v_1
};
Mscrm.AddActivity.$9D = function()
{
    var $v_0 = null,
        $v_1 = null,
        $v_2 = null,
        $v_3 = null;
    $v_0 = Xrm.Page.getAttribute("customerid");
    $v_2 = Xrm.Page.getAttribute("primarycontactid");
    if(!IsNull($v_0)) $v_1 = $v_0.getValue();
    if(!IsNull($v_2)) $v_3 = $v_2.getValue();
    if(!IsNull($v_1) && IsNull($v_3)) return $v_1;
    else if(!IsNull($v_1) && !IsNull($v_3) && $v_1[0].entityType === "account") return $v_3;
    return $v_1
};
Mscrm.CrmBrowser = function() {};
Mscrm.CrmBrowser.$98 = function($p0)
{
    return Mscrm.CrmBrowser.$97($p0.userAgent, $p0.appName, $p0.appVersion, document.documentMode)
};
Mscrm.CrmBrowser.$97 = function($p0, $p1, $p2, $p3)
{
    var $v_0 = new Mscrm.CrmBrowser;
    $v_0.$f_0 = 0;
    $v_0.$3j_0 = false;
    $v_0.$30_0 = false;
    $v_0.$2U_0 = $p1;
    $v_0.$1g_0 = parseFloat($p2);
    $v_0.$2u_0 = IsNull($p3) ? 0 : $p3;
    $v_0.$6E_0 = !IsNull(window.XPathEvaluator);
    if($p0.indexOf(" MSIE ") > -1)
    {
        $v_0.$f_0 = 1;
        $v_0.$2U_0 = "IE";
        var $v_1 = new RegExp("MSIE (\\d+\\.\\d+)");
        $v_0.$1g_0 = parseFloat($v_1.exec($p0)[1]);
        if($v_0.$1g_0 >= 7)
            if(!IsNull($p3) && $p3 >= 7) $v_0.$2u_0 = $p3;
        $v_0.$3j_0 = true;
        if($p0.indexOf("IEMobile") !== -1 || $p0.indexOf("Windows Phone") !== -1) $v_0.$52_0 = true;
        if(!IsNull(window.navigator.msMaxTouchPoints) && window.navigator.msMaxTouchPoints > 0) $v_0.$30_0 = true
    }
    else if($p0.indexOf(" Firefox/") > -1)
    {
        var $v_2 = new RegExp(" Firefox\\/(\\d+\\.\\d+)");
        $v_0.$1g_0 = parseFloat($v_2.exec($p0)[1]);
        $v_0.$f_0 = 2;
        $v_0.$2U_0 = "Firefox";
        $v_0.$3j_0 = true
    }
    else if($p0.indexOf(" Chrome/") > -1)
    {
        var $v_3 = new RegExp(" Chrome\\/(\\d+(\\.\\d+)?)");
        $v_0.$1g_0 = parseFloat($v_3.exec($p0)[1]);
        $v_0.$f_0 = 3;
        $v_0.$2U_0 = "Chrome";
        if($p0.indexOf("Nexus") !== -1) $v_0.$30_0 = true
    }
    else if($p0.indexOf(" AppleWebKit/") > -1)
    {
        var $v_4 = new RegExp(" AppleWebKit\\/(\\d+(\\.\\d+)?)");
        $v_0.$1g_0 = parseFloat($v_4.exec($p0)[1]);
        $v_0.$f_0 = 4;
        $v_0.$2U_0 = "Safari";
        if($p0.indexOf("iPhone") !== -1 || $p0.indexOf("iPad") !== -1 || $p0.indexOf("iPod") !== -1)
        {
            $v_0.$52_0 = true;
            $v_0.$30_0 = true;
            $v_0.$53_0 = true
        }
    }
    else if($p0.indexOf("Opera/") > -1) $v_0.$f_0 = 5;
    if($p0.indexOf(" Android ") > -1)
    {
        $v_0.$6J_0 = true;
        if($p0.indexOf(" Android 2.") > -1) $v_0.$6K_0 = true
    }
    return $v_0
};
Mscrm.CrmBrowser.get_currentBrowser = function()
{
    if(IsNull(Mscrm.CrmBrowser.$3W)) Mscrm.CrmBrowser.$3W = Mscrm.CrmBrowser.$98(window.navigator);
    return Mscrm.CrmBrowser.$3W
};
Mscrm.CrmBrowser.prototype = {
    $f_0: 0,
    $2U_0: null,
    $1g_0: 0,
    $3j_0: false,
    $6E_0: false,
    $2u_0: 0,
    $52_0: false,
    $53_0: false,
    $30_0: false,
    $6J_0: false,
    $6K_0: false,
    get_agent: function()
    {
        return this.$f_0
    },
    get_name: function()
    {
        return this.$2U_0
    },
    get_version: function()
    {
        return this.$1g_0
    },
    get_isMobile: function()
    {
        return this.$52_0
    },
    get_isAndroid: function()
    {
        return this.$6J_0
    },
    get_isAndroidV2: function()
    {
        return this.$6K_0
    },
    get_isMobileSafari: function()
    {
        return this.$53_0
    },
    get_isTouchEnabled: function()
    {
        return this.$30_0
    },
    get_isIE7: function()
    {
        return this.$f_0 === 1 && this.$1g_0 <= 7 && this.$2u_0 <= 7
    },
    get_isIE8: function()
    {
        return this.$f_0 === 1 && this.$2u_0 === 8
    },
    get_hasDebuggerStatement: function()
    {
        return this.$3j_0
    },
    get_hasXPathEvaluator: function()
    {
        return this.$6E_0
    },
    get_documentMode: function()
    {
        return this.$2u_0
    }
};
Mscrm.BpfConfiguratorUtils = function() {};
Mscrm.BpfConfiguratorUtils.launchConfigurator = function(objectId)
{
    var $v_0 = window.screen.availWidth - 10,
        $v_1 = window.screen.availHeight,
        $v_2 = Mscrm.CrmUri.create("/Tools/ProcessControl/bpfConfigurator.aspx?id=" + CrmEncodeDecode.CrmUrlEncode(objectId));
    $v_2 = Mscrm.CrmUri.updateCrmUriHostAndScheme($v_2);
    openStdWin($v_2, buildWinName(objectId), $v_0, $v_1, "left=0")
};
Mscrm.RecentlyViewedItem = function() {};
Mscrm.RecentlyViewedItem.prototype = {
    Name: null,
    Id: null,
    TypeName: null,
    DisplayName: null,
    TypeCode: 0,
    Action: null
};
Mscrm.CrmUIComponent = function()
{
    Mscrm.CrmUIComponent.initializeBase(this)
};
Mscrm.CrmUIComponent.$$cctor = function()
{
    crmCreate = Mscrm.CrmUIComponent.crmCreate
};
Mscrm.CrmUIComponent.crmCreate = function(type, properties, events, references, element)
{
    try
    {
        if(!Mscrm.PageManager.$1x) return $create(type, properties, events, references, element)
    }
    catch($v_0)
    {
        if(!element) return null;
        var $v_1 = String.format("Error initializing component with element id='{0}' and with type='{1}': {2}", !element ? "null" : element.id, !type ? "null" : type.getName(), $v_0.message);
        catchError($v_1, window.location.href, 0, true)
    }
    return null
};
Mscrm.CrmUIComponent.prototype = {
    handleEvent: function(eventCode, parameters, sourceComponent)
    {
        return null
    },
    raiseEvent: function(eventCode, parameters)
    {
        return this.$9_1.raiseEvent(eventCode, parameters, this)
    },
    raiseEventWithCheck: function(eventCode, parameters)
    {
        var $v_0 = this.$9_1;
        if($v_0) return $v_0.raiseEvent(eventCode, parameters, this);
        else return []
    },
    $Y_1: null,
    get_subscribedEvents: function()
    {
        return this.$Y_1
    },
    set_subscribedEvents: function(value)
    {
        this.$Y_1 = value;
        return value
    },
    _disposed: false,
    get_isDisposed: function()
    {
        return this._disposed
    },
    dispose: function()
    {
        if(this._disposed) return;
        this._disposed = true;
        Sys.Component.prototype.dispose.call(this);
        Mscrm.Utilities.destroyObject(this)
    },
    initialize: function()
    {
        Sys.Component.prototype.initialize.call(this);
        if(!IsNull(this.$9_1))
            if(!IsNull(this.$Y_1))
                for(var $v_0 = 0; $v_0 < this.$Y_1.length; $v_0++) this.$9_1.subscribeEvent(this.$Y_1[$v_0], this.get_id())
    },
    $2W_1: null,
    get_rootManager: function()
    {
        return this.$2W_1
    },
    set_rootManager: function(value)
    {
        this.$2W_1 = value;
        return value
    },
    $9_1: null,
    get_eventManager: function()
    {
        return this.$9_1
    },
    set_eventManager: function(value)
    {
        this.$9_1 = value;
        return value
    }
};
Mscrm.CrmUIControl = function(element)
{
    Mscrm.CrmUIControl.initializeBase(this, [element])
};
Mscrm.CrmUIControl.prototype = {
    fireControlEvent: function(eventName, args)
    {
        var $v_0 = this.get_events().getHandler(eventName);
        if($v_0)
        {
            $v_0(this, args);
            return true
        }
        return false
    },
    handleEvent: function(eventCode, parameters, sourceComponent)
    {
        return null
    },
    raiseEvent: function(eventCode, parameters)
    {
        return this.$9_2.raiseEvent(eventCode, parameters, this)
    },
    raiseEventWithCheck: function(eventCode, parameters)
    {
        var $v_0 = this.$9_2;
        if($v_0) return $v_0.raiseEvent(eventCode, parameters, this);
        else return []
    },
    $Y_2: null,
    get_subscribedEvents: function()
    {
        return this.$Y_2
    },
    set_subscribedEvents: function(value)
    {
        this.$Y_2 = value;
        return value
    },
    initialize: function()
    {
        Sys.Component.prototype.initialize.call(this);
        if(!IsNull(this.$9_2))
            if(!IsNull(this.$Y_2))
                for(var $v_0 = 0; $v_0 < this.$Y_2.length; $v_0++) this.$9_2.subscribeEvent(this.$Y_2[$v_0], this.get_id())
    },
    _disposed: false,
    get_isDisposed: function()
    {
        return this._disposed
    },
    dispose: function()
    {
        if(this._disposed) return;
        this._disposed = true;
        try
        {
            Mscrm.CrmUIControl.callBaseMethod(this, "dispose")
        }
        catch($$e_0)
        {
            Sys.Component.prototype.dispose.call(this)
        }
        Mscrm.Utilities.destroyObject(this)
    },
    $2W_2: null,
    get_rootManager: function()
    {
        return this.$2W_2
    },
    set_rootManager: function(value)
    {
        this.$2W_2 = value;
        return value
    },
    $9_2: null,
    get_eventManager: function()
    {
        return this.$9_2
    },
    set_eventManager: function(value)
    {
        this.$9_2 = value;
        return value
    },
    get_height: function()
    {
        return this.get_element().offsetHeight
    },
    set_height: function(value)
    {
        if(value < 0) this.get_element().style.height = "0px";
        else this.get_element().style.height = value.toString() + "px";
        return value
    },
    get_width: function()
    {
        return this.get_element().offsetWidth
    },
    set_width: function(value)
    {
        if(value < 0) this.get_element().style.width = "0px";
        else this.get_element().style.width = value.toString() + "px";
        return value
    },
    get_left: function()
    {
        return this.get_element().offsetLeft
    },
    set_left: function(value)
    {
        this.get_element().style.left = value.toString() + "px";
        return value
    },
    get_top: function()
    {
        return this.get_element().offsetTop
    },
    set_top: function(value)
    {
        this.get_element().style.top = value.toString() + "px";
        return value
    }
};
Mscrm.UIControl = function(innerControl)
{
    Mscrm.UIControl.initializeBase(this, [innerControl])
};
Mscrm.UIControl.prototype = {
    setVisible: function(isVisible)
    {
        Sys.UI.DomElement.setVisible(this.get_element(), isVisible)
    },
    getVisible: function()
    {
        return Sys.UI.DomElement.getVisible(this.get_element())
    },
    setFocus: function()
    {
        Mscrm.FormControlInputBehavior.GetElementBehavior(this.get_element()).setFocus()
    },
    get_disabled: function()
    {
        return Mscrm.FormControlInputBehavior.GetElementBehavior(this.get_element()).get_disabled()
    },
    set_disabled: function(value)
    {
        Mscrm.FormControlInputBehavior.GetElementBehavior(this.get_element()).set_disabled(value);
        return value
    },
    dispose: function()
    {
        if(this._disposed) return;
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.CrmUIBehavior = function(element)
{
    Mscrm.CrmUIBehavior.initializeBase(this, [element])
};
Mscrm.CrmUIBehavior.getBehaviorByName = function(element, name)
{
    return Sys.UI.Behavior.getBehaviorByName(element, name)
};
Mscrm.CrmUIBehavior.prototype = {
    handleEvent: function(eventCode, parameters, sourceComponent)
    {
        return null
    },
    fireControlEvent: function(eventName, args)
    {
        var $v_0 = this.get_events().getHandler(eventName);
        if(!IsNull($v_0))
        {
            $v_0(this, args);
            return true
        }
        return false
    },
    raiseEvent: function(eventCode, parameters)
    {
        return this.$9_2.raiseEvent(eventCode, parameters, this)
    },
    raiseEventWithCheck: function(eventCode, parameters)
    {
        var $v_0 = this.$9_2;
        if($v_0) return $v_0.raiseEvent(eventCode, parameters, this);
        else return []
    },
    $Y_2: null,
    get_subscribedEvents: function()
    {
        return this.$Y_2
    },
    set_subscribedEvents: function(value)
    {
        this.$Y_2 = value;
        return value
    },
    _disposed: false,
    get_isDisposed: function()
    {
        return this._disposed
    },
    dispose: function()
    {
        if(this._disposed) return;
        this._disposed = true;
        Sys.UI.Behavior.prototype.dispose.call(this);
        Mscrm.Utilities.destroyObject(this)
    },
    initialize: function()
    {
        Sys.UI.Behavior.prototype.initialize.call(this);
        if(!IsNull(this.$9_2))
            if(!IsNull(this.$Y_2))
                for(var $v_0 = 0; $v_0 < this.$Y_2.length; $v_0++) this.$9_2.subscribeEvent(this.$Y_2[$v_0], this.get_id())
    },
    $2W_2: null,
    get_rootManager: function()
    {
        return this.$2W_2
    },
    set_rootManager: function(value)
    {
        this.$2W_2 = value;
        return value
    },
    $9_2: null,
    get_eventManager: function()
    {
        return this.$9_2
    },
    set_eventManager: function(value)
    {
        this.$9_2 = value;
        return value
    }
};
Mscrm.CurrencyValidator = function() {};
Mscrm.CurrencyValidator.IsValidCurrencyCode = function(input)
{
    var $v_0 = new RegExp("^[a-zA-Z]{3}$");
    return $v_0.test(input)
};
Mscrm.CurrencyValidator.IsValidCurrencySymbol = function(input)
{
    if(input.length >= Mscrm.CurrencyValidator.$8E && input.length <= Mscrm.CurrencyValidator.$8D) return true;
    return false
};
Mscrm.CurrencyValidator.IsValidCurrencyName = function(input)
{
    if(input.length >= Mscrm.CurrencyValidator.$8C && input.length <= Mscrm.CurrencyValidator.$8B) return true;
    return false
};
Mscrm.CurrencyValidator.IsValidCurrencyPrecision = function(input)
{
    var $v_0 = new RegExp("^[0-4]{1}$");
    return $v_0.test(input.toString())
};
Mscrm.CurrencyValidator.InitializeDomElements = function(builtInCurrencyDiv, customCurrencyDiv, builtInCurrencyInput, customCurrencyInput, customCurrencyCode, customCurrencySymbol, customCurrencyName, requiredInputNote, errorLabel, precisionDropDown, currencyList, regionDropDown, specifyCustomCurrencyLink, customCurrencyHeader)
{
    Mscrm.CurrencyValidator.$4L = $get(builtInCurrencyDiv);
    Mscrm.CurrencyValidator.$3H = $get(customCurrencyDiv);
    Mscrm.CurrencyValidator.$4M = $get(builtInCurrencyInput);
    Mscrm.CurrencyValidator.$4Q = $get(customCurrencyInput);
    Mscrm.CurrencyValidator.$14 = $get(customCurrencyCode);
    Mscrm.CurrencyValidator.$16 = $get(customCurrencySymbol);
    Mscrm.CurrencyValidator.$15 = $get(customCurrencyName);
    Mscrm.CurrencyValidator.$4c = $get(requiredInputNote);
    Mscrm.CurrencyValidator.$4S = $get(errorLabel);
    Mscrm.CurrencyValidator.$2h = $get(precisionDropDown);
    Mscrm.CurrencyValidator.$4P = $get(currencyList);
    Mscrm.CurrencyValidator.$4b = $get(regionDropDown);
    Mscrm.CurrencyValidator.$4e = $get(specifyCustomCurrencyLink);
    Mscrm.CurrencyValidator.$5d = $get(customCurrencyHeader);
    $addHandler(window, "unload", Mscrm.CurrencyValidator.$74);
    $addHandler(Mscrm.CurrencyValidator.$4e, "click", Mscrm.CurrencyValidator.$Ag)
};
Mscrm.CurrencyValidator.DisableBuiltInEnableCustomDiv = function()
{
    Mscrm.CurrencyValidator.$4M.checked = false;
    Mscrm.CurrencyValidator.$4Q.checked = true;
    Mscrm.CurrencyValidator.$4L.disabled = true;
    Mscrm.CurrencyValidator.$3H.disabled = false;
    Mscrm.CurrencyValidator.$4c.disabled = false;
    Mscrm.CurrencyValidator.$14.disabled = false;
    Mscrm.CurrencyValidator.$16.disabled = false;
    Mscrm.CurrencyValidator.$15.disabled = false;
    Mscrm.CurrencyValidator.$2h.disabled = false;
    Mscrm.CurrencyValidator.$4b.disabled = true;
    Mscrm.CurrencyValidator.$4P.disabled = true;
    WatermarkTextBox_OnEnable(Mscrm.CurrencyValidator.$14);
    WatermarkTextBox_OnEnable(Mscrm.CurrencyValidator.$16);
    WatermarkTextBox_OnEnable(Mscrm.CurrencyValidator.$15);
    WatermarkTextBox_OnBlur(Mscrm.CurrencyValidator.$14);
    WatermarkTextBox_OnBlur(Mscrm.CurrencyValidator.$16);
    WatermarkTextBox_OnBlur(Mscrm.CurrencyValidator.$15);
    Mscrm.CurrencyValidator.ClearErrorText()
};
Mscrm.CurrencyValidator.EnableBuiltInDisableCustomDiv = function()
{
    Mscrm.CurrencyValidator.$4M.checked = true;
    Mscrm.CurrencyValidator.$4Q.checked = false;
    Mscrm.CurrencyValidator.$4L.disabled = false;
    Mscrm.CurrencyValidator.$3H.disabled = true;
    Mscrm.CurrencyValidator.$4c.disabled = true;
    Mscrm.CurrencyValidator.$14.disabled = true;
    Mscrm.CurrencyValidator.$16.disabled = true;
    Mscrm.CurrencyValidator.$15.disabled = true;
    Mscrm.CurrencyValidator.$2h.disabled = true;
    Mscrm.CurrencyValidator.$4b.disabled = false;
    Mscrm.CurrencyValidator.$4P.disabled = false;
    WatermarkTextBox_OnDisable(Mscrm.CurrencyValidator.$14);
    WatermarkTextBox_OnDisable(Mscrm.CurrencyValidator.$16);
    WatermarkTextBox_OnDisable(Mscrm.CurrencyValidator.$15);
    Mscrm.CurrencyValidator.ClearErrorText()
};
Mscrm.CurrencyValidator.InitializeCurrencyPicker = function(isCustom)
{
    if(isCustom === 1)
    {
        Mscrm.CurrencyValidator.$81();
        Mscrm.CurrencyValidator.DisableBuiltInEnableCustomDiv()
    }
    else Mscrm.CurrencyValidator.EnableBuiltInDisableCustomDiv()
};
Mscrm.CurrencyValidator.ValidateCurrencyCodeInput = function()
{
    var $v_0 = Mscrm.CurrencyValidator.$14.value,
        $v_1 = Mscrm.CurrencyValidator.IsValidCurrencyCode($v_0);
    $v_0 !== LOCID_CURRENCY_CODE_WATERMARK && WatermarkTextBox_OnInvalidData(Mscrm.CurrencyValidator.$14);
    if(!$v_1 || $v_0 === LOCID_CURRENCY_CODE_WATERMARK)
    {
        Mscrm.CurrencyValidator.SetErrorText(LOCID_INVALID_CURRENCY_CODE);
        return false
    }
    Mscrm.CurrencyValidator.ClearErrorText();
    WatermarkTextBox_OnValidData(Mscrm.CurrencyValidator.$14);
    return true
};
Mscrm.CurrencyValidator.ValidateCurrencySymbolInput = function()
{
    var $v_0 = Mscrm.CurrencyValidator.$16.value,
        $v_1 = Mscrm.CurrencyValidator.IsValidCurrencySymbol($v_0);
    $v_0 !== LOCID_CURRENCY_SYMBOL_WATERMARK && WatermarkTextBox_OnInvalidData(Mscrm.CurrencyValidator.$16);
    if(!$v_1 || $v_0 === LOCID_CURRENCY_SYMBOL_WATERMARK)
    {
        Mscrm.CurrencyValidator.SetErrorText(LOCID_INVALID_CURRENCY_SYMBOL);
        return false
    }
    Mscrm.CurrencyValidator.ClearErrorText();
    WatermarkTextBox_OnValidData(Mscrm.CurrencyValidator.$16);
    return true
};
Mscrm.CurrencyValidator.ValidateCurrencyNameInput = function()
{
    var $v_0 = Mscrm.CurrencyValidator.$15.value,
        $v_1 = Mscrm.CurrencyValidator.IsValidCurrencyName($v_0);
    $v_0 !== LOCID_CURRENCY_NAME_WATERMARK && WatermarkTextBox_OnInvalidData(Mscrm.CurrencyValidator.$15);
    if(!$v_1 || $v_0 === LOCID_CURRENCY_NAME_WATERMARK)
    {
        Mscrm.CurrencyValidator.SetErrorText(LOCID_INVALID_CURRENCY_NAME);
        return false
    }
    Mscrm.CurrencyValidator.ClearErrorText();
    WatermarkTextBox_OnValidData(Mscrm.CurrencyValidator.$15);
    return true
};
Mscrm.CurrencyValidator.ValidatePrecisionInput = function()
{
    var $v_0 = Mscrm.CurrencyValidator.$2h.options[Mscrm.CurrencyValidator.$2h.selectedIndex],
        $v_1 = parseInt($v_0.value, 10),
        $v_2 = Mscrm.CurrencyValidator.IsValidCurrencyPrecision($v_1);
    if(!$v_2)
    {
        Mscrm.CurrencyValidator.SetErrorText(LOCID_INVALID_CURRENCY_PRECISION);
        return false
    }
    Mscrm.CurrencyValidator.ClearErrorText();
    return true
};
Mscrm.CurrencyValidator.ValidateInput = function()
{
    if(Mscrm.CurrencyValidator.ValidateCurrencyCodeInput() && Mscrm.CurrencyValidator.ValidateCurrencySymbolInput() && Mscrm.CurrencyValidator.ValidateCurrencyNameInput() && Mscrm.CurrencyValidator.ValidatePrecisionInput()) return true;
    else return false
};
Mscrm.CurrencyValidator.SetErrorText = function($p0)
{
    Mscrm.CurrencyValidator.$4S.innerHTML = CrmEncodeDecode.CrmHtmlEncode($p0)
};
Mscrm.CurrencyValidator.ClearErrorText = function()
{
    Mscrm.CurrencyValidator.$4S.innerHTML = ""
};
Mscrm.CurrencyValidator.$Ag = function($p0)
{
    Mscrm.CurrencyValidator.$81()
};
Mscrm.CurrencyValidator.$81 = function()
{
    Mscrm.CurrencyValidator.$5d.className = "CustomCurrencyVisible";
    Mscrm.CurrencyValidator.$3H.className = "CustomCurrencyVisible"
};
Mscrm.CurrencyValidator.$74 = function($p0)
{
    $clearHandlers(Mscrm.CurrencyValidator.$4e);
    $removeHandler(window, "unload", Mscrm.CurrencyValidator.$74)
};
Mscrm.CrmEventArgs = function()
{
    Mscrm.CrmEventArgs.initializeBase(this)
};
Mscrm.CrmEventArgs.prototype = {
    $6L_1: false,
    returnValue: null,
    preventDefault: function()
    {
        this.$6L_1 = true
    },
    get_isDefaultPrevented: function()
    {
        return this.$6L_1
    }
};

function prependOrgName(sUrl)
{
    var $v_0 = sUrl;
    if(window.IS_PATHBASEDURLS && window.ORG_UNIQUE_NAME.length > 0) $v_0 = "/" + CrmEncodeDecode.CrmUrlEncode(window.ORG_UNIQUE_NAME) + sUrl;
    return $v_0
}
Mscrm.CrmOneNoteUri = function($p0, $p1)
{
    Mscrm.CrmOneNoteUri.initializeBase(this, [$p0, $p1]);
    this.set_useOrganizationName(false);
    this.set_useVersionStamp(false);
    this.set_useCssLcid(false)
};
Mscrm.CrmOneNoteUri.prototype = {
    parse: function($p0)
    {
        var $v_0 = $p0.indexOf(":"),
            $v_1;
        $v_1 = $v_0 + 1;
        while($p0.charAt($v_1) === "/") $v_1++;
        this.set_scheme($p0.substr(0, $v_1));
        this.set_host("");
        this.set_port(-1);
        var $v_2 = $p0.substr($v_1);
        this.parsePath($v_2)
    },
    get_isLocalServer: function()
    {
        return false
    },
    toString: function()
    {
        return Mscrm.CrmUri.prototype.toString.call(this)
    }
};
Mscrm.CrmUri = function(uri, organizationName, baseUri)
{
    this.$23_0 = IsNull(organizationName) ? "" : CrmEncodeDecode.CrmUrlEncode(organizationName);
    this.$5Y_0 = baseUri;
    if(IsNull(uri)) uri = "";
    this.parse(uri);
    this.$4T_0 = uri;
    this.$P_0 = this.$T_0;
    if(uri.length > 0)
    {
        this.$AV_0();
        this.$AU_0();
        this.$AS_0();
        this.$AW_0()
    }
};
Mscrm.CrmUri.$7H = function($p0)
{
    var $v_0 = -1;
    if(!isNullOrEmptyString($p0)) switch($p0.toLowerCase())
    {
        case "http:":
            $v_0 = 80;
            break;
        case "https:":
            $v_0 = 443;
            break;
        case "ftp:":
            $v_0 = 21;
            break;
        case "ftps:":
            $v_0 = 990;
            break
    }
    return $v_0
};
Mscrm.CrmUri.create = function(uri, baseUri)
{
    if(!isNullOrEmptyString(uri) && uri.toLowerCase().startsWith("onenote:")) return new Mscrm.CrmOneNoteUri(uri, window.ORG_UNIQUE_NAME);
    if(!isNullOrEmptyString(uri) && uri.toLowerCase().startsWith("$webresource:"))
        if(!isNullOrEmptyString(window.WEB_RESOURCE_ORG_VERSION_NUMBER)) return new Mscrm.CrmUri("/" + window.WEB_RESOURCE_ORG_VERSION_NUMBER + "/WebResources/" + uri.substr(13), window.ORG_UNIQUE_NAME);
        else return new Mscrm.CrmUri("/WebResources/" + uri.substr(13), window.ORG_UNIQUE_NAME);
    return new Mscrm.CrmUri(uri, window.ORG_UNIQUE_NAME, baseUri)
};
Mscrm.CrmUri.createForOrganization = function(uri, organizationName)
{
    if(!isNullOrEmptyString(uri) && uri.toLowerCase().startsWith("onenote:")) return new Mscrm.CrmOneNoteUri(uri, organizationName);
    return new Mscrm.CrmUri(uri, organizationName)
};
Mscrm.CrmUri.isSameDomain = function(uriA, uriB)
{
    if(uriA.startsWith("/") && uriB.startsWith("/")) return true;
    var $v_0 = Mscrm.CrmUri.$7N(uriA),
        $v_1 = Mscrm.CrmUri.$7N(uriB);
    return $v_0.get_scheme() === $v_1.get_scheme() && $v_0.get_host() === $v_1.get_host() && $v_0.get_port() === $v_1.get_port()
};
Mscrm.CrmUri.$7N = function($p0)
{
    var $v_0 = Mscrm.CrmUri.create($p0.toUpperCase());
    Mscrm.CrmUri.$Ab($v_0.get_host(), window.top.WEB_SERVER_HOST.toUpperCase(), window.top.location.hostname.toUpperCase()) && Mscrm.CrmUri.$9y($v_0);
    return $v_0
};
Mscrm.CrmUri.$Ab = function($p0, $p1, $p2)
{
    return isNullOrEmptyString($p0) || $p0 === $p1 || $p0 === $p2
};
Mscrm.CrmUri.$9y = function($p0)
{
    $p0.set_host(window.top.WEB_SERVER_HOST.toUpperCase());
    var $v_0 = window.top.WEB_SERVER_PORT,
        $v_1 = Number.NaN;
    if(!isNullOrEmptyString($v_0)) $v_1 = Number.parseInvariant($v_0.toString());
    if(isNaN($v_1)) $v_1 = -1;
    $p0.set_port($v_1);
    $p0.set_scheme(window.top.SERVER_URL.toUpperCase().split(":")[0])
};
Mscrm.CrmUri.updateCrmUriHostAndScheme = function(uri)
{
    if(Mscrm.SessionInfo.$2j)
    {
        var $v_0 = Mscrm.CrmUri.create(window.location.href);
        uri.set_scheme($v_0.get_scheme());
        uri.set_host($v_0.get_host());
        uri.set_port($v_0.get_port());
        Mscrm.SessionInfo.$2j = false
    }
    return uri
};
Mscrm.CrmUri.prototype = {
    $23_0: null,
    $3P_0: false,
    $4h_0: false,
    $4g_0: false,
    $5W_0: true,
    $4T_0: null,
    $v_0: null,
    $26_0: null,
    $17_0: null,
    $1P_0: 0,
    $P_0: null,
    $T_0: null,
    $u_0: null,
    $2i_0: null,
    $1N_0: null,
    $5Y_0: null,
    checkParamsNoEqual: false,
    get_useOrganizationName: function()
    {
        return this.$3P_0
    },
    set_useOrganizationName: function(value)
    {
        if(IsNull(value)) return value;
        this.$3P_0 = value;
        return value
    },
    get_useVersionStamp: function()
    {
        return this.$4h_0
    },
    set_useVersionStamp: function(value)
    {
        if(IsNull(value)) return value;
        if(this.$4h_0 !== value)
        {
            this.$4h_0 = value;
            if(this.$4h_0) this.setQueryParameter("ver", this.get_$An_0().toString(10));
            else this.removeQueryParameter("ver")
        }
        return value
    },
    get_useCssLcid: function()
    {
        return this.$4g_0
    },
    set_useCssLcid: function(value)
    {
        if(this.$4g_0 !== value)
        {
            this.$4g_0 = value;
            if(this.$4g_0) this.setQueryParameter("lcid", window.USER_LANGUAGE_CODE.toString(10));
            else this.removeQueryParameter("lcid")
        }
        return value
    },
    get_appendSolutionId: function()
    {
        return this.$5W_0
    },
    set_appendSolutionId: function(value)
    {
        if(IsNull(value)) return value;
        this.$5W_0 = value;
        return value
    },
    get_path: function()
    {
        return this.$P_0
    },
    set_path: function(value)
    {
        this.$P_0 = IsNull(value) ? "" : value;
        return value
    },
    get_isWebResource: function()
    {
        return Mscrm.Utilities.$4i.test(this.$P_0.toUpperCase()) && this.get_isLocalServer()
    },
    get_isSocialInsightsConfigWizard: function()
    {
        return Mscrm.Utilities.$82.test(this.$4T_0.toUpperCase())
    },
    get_pageType: function()
    {
        var $v_0 = "none";
        if(this.get_path().endsWith("/areas.aspx")) return "entityrelatedlist";
        switch(this.get_path())
        {
            case "/sfa/accts/edit.aspx":
            case "/sfa/conts/edit.aspx":
            case "/sfa/leads/edit.aspx":
            case "/sfa/opps/edit.aspx":
            case "/cs/cases/edit.aspx":
            case "/userdefined/edit.aspx":
            case "/ma/camps/edit.aspx":
            case "/sm/sites/edit.aspx":
            case "/biz/teams/edit.aspx":
            case "/routingruleitem/edit.aspx":
            case "/convertruleitem/edit.aspx":
            case "/slaitem/edit.aspx":
                $v_0 = "entityrecord";
                break;
            case "/_root/homepage.aspx":
            case "/CS/home_cases.aspx":
            case "/workplace/home_workplace.aspx":
                $v_0 = "entitylist";
                break;
            case "/tools/formEditor/formeditor.aspx":
                $v_0 = "formeditor";
                break;
            case "/tools/dashboardEditor/dashboardeditor.aspx":
                $v_0 = "dashboardeditor";
                break;
            case "/tools/visualizationdesigner/visualizationdesigner.aspx":
                $v_0 = "vizdesigner";
                break;
            case "/advancedfind/advfind.aspx":
                $v_0 = "advancedfind";
                break;
            case "/main.aspx":
                $v_0 = this.get_query()["pagetype"];
                break;
            default:
                $v_0 = "none";
                break
        }
        if(IsNull($v_0) || !$v_0.length) $v_0 = "none";
        return $v_0
    },
    get_fragment: function()
    {
        return "#" + this.$1N_0
    },
    set_fragment: function(value)
    {
        this.$1N_0 = IsNull(value) ? "" : value;
        if(this.$1N_0.startsWith("#")) this.$1N_0 = this.$1N_0.substr(1);
        return value
    },
    get_host: function()
    {
        return this.$17_0
    },
    set_host: function(value)
    {
        this.$17_0 = IsNull(value) ? "" : value;
        return value
    },
    get_port: function()
    {
        return this.$1P_0
    },
    set_port: function(value)
    {
        this.$1P_0 = IsNull(value) ? -1 : value;
        return value
    },
    get_scheme: function()
    {
        return this.$v_0
    },
    set_scheme: function(value)
    {
        if(IsNull(value) || !value.length) this.$v_0 = "";
        else
        {
            var $v_0 = value.indexOf(":");
            if($v_0 === -1)
            {
                this.$v_0 = value;
                this.$26_0 = value === "mailto" || value === "news" ? ":" : "://"
            }
            else
            {
                this.$v_0 = value.substr(0, $v_0);
                this.$26_0 = value.substr($v_0)
            }
        }
        return value
    },
    get_query: function()
    {
        if(!this.$2i_0) this.$2i_0 = this.$6i_0(this.$u_0);
        return this.$2i_0
    },
    get_queryString: function()
    {
        this.$8A_0();
        return this.$u_0
    },
    get_$An_0: function()
    {
        if(!IsNull(window.VERSION_STAMP)) return window.VERSION_STAMP;
        else return 0
    },
    get_isLocalServer: function()
    {
        var $v_0;
        if(this.$9m_0()) $v_0 = window.parent;
        else $v_0 = window.top;
        if(!this.$17_0.length || this.$17_0.toUpperCase() === "LOCALHOST") return true;
        if(this.$17_0.toUpperCase() === $v_0.location.hostname.toUpperCase() || this.$9h_0())
        {
            var $v_1 = -1,
                $v_2 = $v_0.location.port,
                $v_3 = $v_0.location.protocol;
            if(!isNullOrEmptyString($v_2)) $v_1 = Number.parseInvariant($v_2);
            if($v_1 < 0) $v_1 = Mscrm.CrmUri.$7H($v_3);
            var $v_4 = this.get_port();
            if(isNaN($v_4) || $v_4 < 0) $v_4 = Mscrm.CrmUri.$7H($v_3);
            return $v_4 === $v_1
        }
        return false
    },
    $9h_0: function()
    {
        var $v_0 = window.WEB_SERVER_HOST;
        if(IsNull($v_0))
        {
            $v_0 = window.top.WEB_SERVER_HOST;
            if(IsNull($v_0)) $v_0 = ""
        }
        return this.$17_0.toUpperCase() === $v_0.toUpperCase()
    },
    clone: function()
    {
        var $v_0 = Mscrm.CrmUri.create(this.toString());
        $v_0.set_appendSolutionId(this.get_appendSolutionId());
        $v_0.set_useOrganizationName(this.get_useOrganizationName());
        $v_0.set_useCssLcid(this.get_useCssLcid());
        $v_0.set_useVersionStamp(this.get_useVersionStamp());
        return $v_0
    },
    toString: function()
    {
        this.$8O_0();
        return this.$4T_0
    },
    toNormalizedString: function()
    {
        var $v_0 = true,
            $v_1 = this.get_useOrganizationName(),
            $v_2 = this.get_port(),
            $v_3 = this.get_scheme(),
            $v_4 = this.get_host();
        if(!IsNull(this.get_host()) && this.get_host().length > 0) $v_0 = this.get_host().toUpperCase() === window.WEB_SERVER_HOST.toUpperCase();
        if($v_0)
        {
            this.get_port() === -1 && this.set_port(window.WEB_SERVER_PORT);
            (IsNull(this.get_scheme()) || !this.get_scheme().length) && this.set_scheme(window.SERVER_URL.split(":")[0]);
            this.set_host(window.WEB_SERVER_HOST);
            this.set_useOrganizationName(true)
        }
        var $v_5 = this.toString();
        if($v_0)
        {
            this.set_port($v_2);
            this.set_scheme($v_3);
            this.set_useOrganizationName($v_1);
            this.set_host($v_4)
        }
        return $v_5
    },
    compare: function(uri, ignoreCase, op)
    {
        if(op === 2) return uri.compare(this, ignoreCase, 5);
        if(op === 3) return uri.compare(this, ignoreCase, 4);
        var $v_0 = this.toNormalizedString().toUpperCase().split("?")[0],
            $v_1 = uri.toNormalizedString().toUpperCase().split("?")[0];
        if($v_0 !== $v_1) return false;
        var $v_2 = this.get_queryString().split("=").length - 1,
            $v_3 = uri.get_queryString().split("=").length - 1,
            $v_4 = true;
        switch(op)
        {
            case 1:
                $v_4 = $v_2 === $v_3;
                break;
            case 4:
                $v_4 = $v_2 < $v_3;
                break;
            case 5:
                $v_4 = $v_2 <= $v_3;
                break;
            default:
                return true
        }
        if(!$v_4) return false;
        var $$dict_8 = this.get_query();
        for(var $$key_9 in $$dict_8)
        {
            var $v_5 = {
                    key: $$key_9,
                    value: $$dict_8[$$key_9]
                },
                $v_6 = $v_5.value,
                $v_7 = uri.get_query()[$v_5.key];
            if(ignoreCase)
            {
                if(!IsNull($v_6)) $v_6 = $v_6.toUpperCase();
                if(!IsNull($v_7)) $v_7 = $v_7.toUpperCase()
            }
            if($v_6 !== $v_7) return false
        }
        return true
    },
    subsetOf: function(uri, ignoreCase)
    {
        return this.compare(uri, ignoreCase, 5)
    },
    equals: function(uri, ignoreCase)
    {
        return this.compare(uri, ignoreCase, 1)
    },
    isEmpty: function()
    {
        return !this.toString().length
    },
    $9m_0: function()
    {
        return this.get_query()["client_type"] === "MobileClient" || this.get_query()["dType"] === "2"
    },
    appendToQuery: function(appendQuery)
    {
        if(appendQuery.startsWith("&")) appendQuery = "?" + appendQuery.substr(1);
        else if(!appendQuery.startsWith("?")) appendQuery = "?" + appendQuery;
        var $v_0 = this.$6i_0(appendQuery),
            $$dict_2 = $v_0;
        for(var $$key_3 in $$dict_2)
        {
            var $v_1 = {
                key: $$key_3,
                value: $$dict_2[$$key_3]
            };
            this.get_query()[$v_1.key] = $v_1.value
        }
    },
    clearQuery: function()
    {
        this.$u_0 = "";
        this.$2i_0 = {}
    },
    parse: function(uri)
    {
        var $v_0 = -1;
        $v_0 = uri.indexOf("?");
        var $v_1 = uri.indexOf(":"),
            $v_2;
        if($v_1 > $v_0 && $v_0 !== -1) $v_1 = -1;
        if($v_1 === -1)
        {
            this.$v_0 = "";
            this.$26_0 = "";
            this.$17_0 = "";
            this.$1P_0 = -1;
            this.parsePath(uri);
            return
        }
        $v_2 = $v_1 + 1;
        while(uri.charAt($v_2) === "/") $v_2++;
        this.$v_0 = uri.substr(0, $v_1).toLowerCase();
        this.$26_0 = uri.substr($v_1, $v_2 - $v_1);
        if(!isNullOrEmptyString(this.$v_0)) switch(this.$v_0.toLowerCase())
        {
            case "http":
            case "https":
            case "ftp":
            case "ftps":
                if(this.$26_0 !== "://")
                {
                    this.$v_0 = "";
                    this.$26_0 = "";
                    $v_2 = 0;
                    $v_1 = -1
                }
                break
        }
        for(var $v_3 = -1, $v_4 = -1, $v_6 = $v_2; $v_6 < uri.length && $v_3 === -1; $v_6++) switch(uri.charAt($v_6))
        {
            case "/":
                $v_3 = $v_6;
                break;
            case ":":
                $v_4 = $v_6;
                break
        }
        if($v_3 === -1) $v_3 = uri.length;
        if($v_4 === -1) $v_4 = $v_3;
        this.$17_0 = uri.substr($v_2, $v_4 - $v_2);
        if($v_3 === $v_4) this.$1P_0 = -1;
        else
        {
            this.$1P_0 = Number.parseInvariant(uri.substr($v_4 + 1, $v_3 - $v_4 - 1));
            if(isNaN(this.$1P_0)) this.$1P_0 = -1
        }
        var $v_5 = $v_3 < uri.length ? uri.substr($v_3) : "";
        this.parsePath($v_5)
    },
    parsePath: function(uriPath)
    {
        this.$T_0 = uriPath;
        this.$u_0 = "";
        this.$1N_0 = "";
        var $v_0 = this.$T_0.indexOf("?"),
            $v_1 = this.$T_0.indexOf("#"),
            $v_2 = -1;
        if($v_0 !== -1)
        {
            var $v_3 = $v_1 > $v_0 ? $v_1 : this.$T_0.length;
            this.$u_0 = this.$T_0.substr($v_0, $v_3 - $v_0);
            $v_2 = $v_0
        }
        if($v_1 !== -1)
        {
            this.$1N_0 = CrmEncodeDecode.CrmUrlDecode(this.$T_0.substr($v_1 + 1));
            if($v_2 === -1 || $v_1 < $v_2) $v_2 = $v_1;
            if($v_0 > $v_1) this.$u_0 = ""
        }
        if($v_2 !== -1) this.$T_0 = this.$T_0.substr(0, $v_2);
        if(!isNullOrEmptyString(this.$5Y_0))
        {
            var $v_4 = Mscrm.CrmUri.create(this.$5Y_0),
                $v_5 = $v_4.get_path(),
                $v_6 = $v_5.split("/");
            $v_6.pop();
            this.$T_0 = $v_6.join("/") + "/" + this.$T_0
        }
    },
    $AV_0: function()
    {
        if(!this.$23_0.length)
        {
            this.$3P_0 = false;
            return
        }
        var $v_0 = this.$23_0 + "/",
            $v_1 = this.$P_0.startsWith("/");
        if($v_1) $v_0 = "/" + $v_0;
        $v_0 = $v_0.toUpperCase();
        if(this.$P_0.toUpperCase().startsWith($v_0) && this.get_isLocalServer())
        {
            this.$P_0 = this.$P_0.substr($v_0.length);
            if($v_1) this.$P_0 = "/" + this.$P_0
        }
        var $v_2 = window.IS_PATHBASEDURLS;
        if(IsNull($v_2)) $v_2 = window.top.IS_PATHBASEDURLS;
        this.$3P_0 = $v_2 && this.$Af_0()
    },
    $AW_0: function()
    {
        this.set_useVersionStamp(this.$80_0())
    },
    $AU_0: function()
    {
        this.set_useCssLcid(this.$Ad_0())
    },
    $AS_0: function()
    {
        if(this.$8R_0() && !this.$80_0())
            if(this.$5W_0) Mscrm.SolutionDecorater.setSolutionIdInQuerystring(this);
            else if(this.get_query()[Mscrm.SolutionDecorater.solutionId]) delete this.get_query()[Mscrm.SolutionDecorater.solutionId]
    },
    $8O_0: function()
    {
        this.$Al_0();
        this.$8A_0();
        var $v_0 = new Sys.StringBuilder;
        if(this.$v_0.length > 0)
        {
            $v_0.append(this.$v_0);
            $v_0.append(this.$26_0)
        }
        if(this.$17_0.length > 0)
        {
            $v_0.append(this.$17_0);
            if(this.$1P_0 !== -1)
            {
                $v_0.append(":");
                $v_0.append(this.$1P_0.toString(10))
            }
        }
        this.$T_0.length > 0 && !this.$T_0.startsWith("/") && !$v_0.isEmpty() && $v_0.append("/");
        $v_0.append(this.$T_0);
        $v_0.append(this.$u_0);
        if(this.$1N_0.length > 0)
        {
            $v_0.append("#");
            $v_0.append(this.$1N_0)
        }
        this.$4T_0 = $v_0.toString()
    },
    $Al_0: function()
    {
        if(this.$3P_0 && this.$23_0 && this.$23_0.length > 0)
        {
            var $v_0 = this.$P_0.startsWith("/");
            this.$T_0 = ($v_0 ? "/" + this.$23_0 : this.$23_0 + "/") + this.$P_0
        }
        else this.$T_0 = this.$P_0
    },
    $8A_0: function()
    {
        var $v_0 = this.get_query(),
            $v_1 = new Sys.StringBuilder,
            $v_2 = [],
            $v_3 = 0,
            $$dict_4 = $v_0;
        for(var $$key_5 in $$dict_4)
        {
            var $v_5 = {
                key: $$key_5,
                value: $$dict_4[$$key_5]
            };
            $v_2[$v_3++] = $v_5.key
        }
        $v_2.sort();
        for(var $v_4 = true, $v_6 = 0; $v_6 < $v_3; $v_6++)
        {
            if($v_4)
            {
                $v_4 = false;
                $v_1.append("?")
            }
            else $v_1.append("&");
            $v_1.append(CrmEncodeDecode.CrmUrlEncode($v_2[$v_6]));
            if(!this.checkParamsNoEqual || !IsNull($v_0[$v_2[$v_6]]))
            {
                $v_1.append("=");
                $v_1.append(CrmEncodeDecode.CrmUrlEncode($v_0[$v_2[$v_6]]))
            }
        }
        this.$u_0 = $v_1.toString()
    },
    $6i_0: function($p0)
    {
        var $v_0 = {};
        if(!$p0 || !$p0.length) return $v_0;
        var $v_1 = 1,
            $v_2, $v_3;
        while($v_1 < $p0.length)
        {
            $v_2 = $p0.indexOf("&", $v_1);
            if($v_2 === -1) $v_2 = $p0.length;
            $v_3 = $p0.indexOf("=", $v_1);
            if($v_3 > $v_2) $v_3 = -1;
            if($v_3 !== -1 && $v_3 < $v_2)
            {
                var $v_4 = $p0.substr($v_1, $v_3 - $v_1),
                    $v_5 = $p0.substr($v_3 + 1, $v_2 - $v_3 - 1);
                $v_0[CrmEncodeDecode.CrmUrlDecode($v_4)] = CrmEncodeDecode.CrmUrlDecode($v_5)
            }
            else if(this.checkParamsNoEqual && $v_3 === -1)
            {
                var $v_6 = $p0.substr($v_1, $v_2 - $v_1);
                $v_0[CrmEncodeDecode.CrmUrlDecode($v_6)] = null
            }
            $v_1 = $v_2 + 1
        }
        return $v_0
    },
    setQueryParameter: function(name, value)
    {
        if(!value) value = "";
        if(!this.$2i_0 && this.$u_0.length <= 1) this.$u_0 = "?" + CrmEncodeDecode.CrmUrlEncode(name) + "=" + CrmEncodeDecode.CrmUrlEncode(value);
        else this.get_query()[name] = value
    },
    removeQueryParameter: function(name)
    {
        if(!this.$2i_0 && this.$u_0.length <= 1) return;
        else if(name in this.get_query()) delete this.get_query()[name]
    },
    $Af_0: function()
    {
        var $v_0 = this.$P_0.toUpperCase();
        return($v_0.endsWith(".ASPX") || $v_0.endsWith(".ASMX") || $v_0.endsWith(".ASHX") || Mscrm.Utilities.$4i.test($v_0)) && $v_0.startsWith("/") && !$v_0.startsWith("/HELP/") && this.get_isLocalServer()
    },
    $8R_0: function()
    {
        var $v_0 = this.$P_0.toUpperCase();
        return $v_0.endsWith(".ASPX") && $v_0.startsWith("/") && !$v_0.startsWith("/HELP/") && this.get_isLocalServer()
    },
    $80_0: function()
    {
        return Mscrm.CrmUri.$8H.test(this.$P_0)
    },
    $Ad_0: function()
    {
        return this.$P_0.toUpperCase().endsWith(".CSS.ASPX")
    }
};
Mscrm.CallbackFunctionObject = function() {};
Mscrm.CallbackFunctionObject.prototype = {
    callback: null,
    parameters: null
};
Mscrm.CrmWindow = function() {};
Mscrm.CrmWindow.get_entityFormModeMapping = function()
{
    return Mscrm.CrmWindow.$3e
};
Mscrm.CrmWindow.get_openedFormsCache = function()
{
    return Mscrm.CrmWindow.$1a
};
Mscrm.CrmWindow.get_windowOpenTimes = function()
{
    return Mscrm.CrmWindow.$1M
};
Mscrm.CrmWindow.get_trimFeatures = function()
{
    return Mscrm.CrmWindow.$3A
};
Mscrm.CrmWindow.set_trimFeatures = function(value)
{
    Mscrm.CrmWindow.$3A = value;
    return value
};

function safeWindowOpen(url, name, features, replace, disablePopupWarning)
{
    var $v_0 = null;
    if(!IsNull(url)) $v_0 = url.toString();
    else $v_0 = "";
    if(IsNull(features)) features = "";
    Mscrm.PerformanceTracing.write("Navigate", $v_0);
    var $v_1 = null;
    try
    {
        if(Mscrm.CrmWindow.$3A && Mscrm.Utilities.isChrome()) features = $7n(features, "status=1");
        Mscrm.CrmWindow.$3A = true;
        var $v_2 = new Date;
        if(window.name === name) $v_1 = masterWindow().open($v_0, name, features, replace);
        else $v_1 = window.open($v_0, name, features, replace);
        try
        {
            $v_1.focus()
        }
        catch(e)
        {}
        var $v_3 = new Date;
        $7y($v_1, $v_2.getTime(), $v_3.getTime());
        $v_1._masterWindow = masterWindow()
    }
    catch($$e_9)
    {}
    IsNull($v_1) && !disablePopupWarning && handlePopupBlockerError($v_0);
    return $v_1
}

function $7y($p0, $p1, $p2)
{
    var $v_0 = $p0.name;
    Mscrm.CrmWindow.$1M[$v_0] = {
        BeforeWindowOpenTimestamp: $p1,
        AfterWindowOpenTimestamp: $p2
    };
    $p0.BeforeWindowOpenTimestamp = $p1;
    $p0.AfterWindowOpenTimestamp = $p2;
    var $v_1 = (new Date).getTime(),
        $$dict_5 = Mscrm.CrmWindow.$1M;
    for(var $$key_6 in $$dict_5)
    {
        var $v_2 = {
                key: $$key_6,
                value: $$dict_5[$$key_6]
            },
            $v_3 = Mscrm.CrmWindow.$1M[$v_2.key];
        if(!IsNull($v_3) && $v_3["AfterWindowOpenTimestamp"] <= $v_1 - 3e4) delete Mscrm.CrmWindow.$1M[$v_2.key]
    }
}

function $9U($p0, $p1, $p2)
{
    var $v_0 = $p0.name,
        $v_1 = Mscrm.CrmWindow.$1M[$v_0];
    if(!IsNull($v_1))
    {
        $p1.val = $v_1["BeforeWindowOpenTimestamp"];
        $p2.val = $v_1["AfterWindowOpenTimestamp"];
        return
    }
    $p1.val = $p0.BeforeWindowOpenTimestamp;
    $p2.val = $p0.AfterWindowOpenTimestamp
}

function getWindowOpenTimeJson(windowName, remove)
{
    var $v_0 = Mscrm.CrmWindow.$1M[windowName];
    if(remove) delete Mscrm.CrmWindow.$1M[windowName];
    if(!IsNull($v_0)) return Sys.Serialization.JavaScriptSerializer.serialize($v_0);
    return null
}

function $7n($p0, $p1)
{
    for(var $v_0 = new Sys.StringBuilder, $v_1 = ",", $v_2 = {}, $$arr_5 = $p0.split($v_1), $$len_6 = $$arr_5.length, $$idx_7 = 0; $$idx_7 < $$len_6; ++$$idx_7)
    {
        var $v_3 = $$arr_5[$$idx_7];
        if(!isNullOrEmptyString($v_3)) $v_2[$v_3] = null
    }
    for(var $$arr_9 = $p1.split($v_1), $$len_A = $$arr_9.length, $$idx_B = 0; $$idx_B < $$len_A; ++$$idx_B)
    {
        var $v_4 = $$arr_9[$$idx_B];
        if($v_4 in $v_2) delete $v_2[$v_4]
    }
    var $$dict_D = $v_2;
    for(var $$key_E in $$dict_D)
    {
        var $v_5 = {
            key: $$key_E,
            value: $$dict_D[$$key_E]
        };
        $v_0.append($v_5.key)
    }
    return $v_0.toString($v_1)
}

function masterWindow(forPreload)
{
    if(!IsNull(forPreload) && forPreload && !Mscrm.Utilities.isIE() && !Mscrm.Utilities.isFirefox())
        if(!IsNull(window.dialogArguments)) return window.self;
    var $v_0 = window.self._masterWindow;
    if(isValidWindowInstance($v_0)) return $v_0;
    if(isValidWindowInstance(window.top) && !IsNull(window.top.masterWindow) && window.top !== window.self)
    {
        $v_0 = window.top.masterWindow();
        if(isValidWindowInstance($v_0)) return $v_0
    }
    if($9Z(window.self) && isValidWindowInstance(window.opener))
    {
        if(isValidWindowInstance(window.opener.top) && !IsNull(window.opener.top.masterWindow) && window.opener.top !== window.self)
        {
            $v_0 = window.opener.top.masterWindow();
            if(isValidWindowInstance($v_0)) return $v_0
        }
        if(!IsNull(window.opener.masterWindow)) return window.opener
    }
    return window.self
}

function setFormMode(etc, mode)
{
    Mscrm.CrmWindow.$3e[etc] = mode
}

function getFormMode(etc)
{
    var $v_0 = Mscrm.CrmWindow.$3e[etc];
    if(IsNull($v_0) && Mscrm.EtcUtil.isUserDefinedEntityObjectTypeCode(Number.parseInvariant(etc.toString()))) $v_0 = "RO";
    return $v_0
}

function isValidWindowInstance($sn_window)
{
    try
    {
        if(IsNull($sn_window) || IsNull($sn_window.location)) return false;
        $sn_window.document
    }
    catch($$e_1)
    {
        return false
    }
    return true
}

function $9Z($p0)
{
    try
    {
        if(IsNull($p0) || IsNull($p0.opener)) return false
    }
    catch($$e_1)
    {
        return false
    }
    return true
}

function attachWindowOnBeforeUnload(handler, windowInstance)
{
    if(isOutlookHostedWindow())
        if(window.top.initActionQueue != null && typeof window.top.initActionQueue != "undefined") window.top.initActionQueue.push(function()
        {
            window.top.Mscrm.CrmWindow.onBeforeUnloadHandler = function(rawEvent)
            {
                handler(new Sys.UI.DomEvent(rawEvent))
            }
        });
        else window.top.Mscrm.CrmWindow.onBeforeUnloadHandler = function(rawEvent)
        {
            handler(new Sys.UI.DomEvent(rawEvent))
        };
    else windowInstance = $4K(handler, windowInstance, "beforeunload", false)
}

function detachWindowOnBeforeUnload(handler, windowInstance)
{
    if(isOutlookHostedWindow()) window.top.Mscrm.CrmWindow.onBeforeUnloadHandler = null;
    else windowInstance = $4K(handler, windowInstance, "beforeunload", true)
}

function attachWindowOnUnload(handler, windowInstance)
{
    if(isOutlookHostedWindow())
        if(window.top.initActionQueue != null && typeof window.top.initActionQueue != "undefined") window.top.initActionQueue.push(function()
        {
            window.top.Mscrm.CrmWindow.onUnloadHandler = function(rawEvent)
            {
                handler(new Sys.UI.DomEvent(rawEvent))
            }
        });
        else window.top.Mscrm.CrmWindow.onUnloadHandler = function(rawEvent)
        {
            handler(new Sys.UI.DomEvent(rawEvent))
        };
    else windowInstance = $4K(handler, windowInstance, "unload", false)
}

function detachWindowOnUnload(handler, windowInstance)
{
    if(isOutlookHostedWindow()) window.top.Mscrm.CrmWindow.onUnloadHandler = null;
    else windowInstance = $4K(handler, windowInstance, "unload", true)
}

function currentLocationHash()
{
    return window.location.hash.substr(1)
}

function $4K($p0, $p1, $p2, $p3)
{
    if(!$p1) $p1 = window.self;
    var $v_0 = $p1;
    if($p3) $removeHandler($v_0, $p2, $p0);
    else $addHandler($v_0, $p2, $p0);
    return $p1
}

function executeOnUnloadHandlers()
{
    return $79(Mscrm.CrmWindow.onUnloadHandler)
}

function executeOnBeforeUnloadHandlers()
{
    return $79(Mscrm.CrmWindow.onBeforeUnloadHandler)
}

function $79($p0)
{
    var $v_0 = "",
        $v_1 = false;
    if($p0)
    {
        var $v_2 = window.document.createEventObject();
        try
        {
            $p0($v_2);
            if(!IsNull($v_2.returnValue))
            {
                $v_0 += $v_2.returnValue;
                $v_1 = true
            }
        }
        catch($$e_4)
        {}
    }
    return $v_1 ? $v_0 : null
}

function safeEmailWindowOpen(url, name, features, replace)
{
    var $v_0 = null;
    if(IsNull(features)) features = "";
    try
    {
        if(Mscrm.Utilities.isChrome()) features = $7n(features, "status=1");
        $v_0 = window.open(url.toString(), name, features, replace)
    }
    catch($$e_5)
    {
        handlePopupBlockerError(url.toString())
    }
    return $v_0
}

function safeWindowShowModalDialog(url, winArguments, features, useModalDialog)
{
    var $v_0 = url.toString(),
        $v_1 = 0,
        $v_2 = 0;
    Mscrm.PerformanceTracing.write("Navigate", $v_0);
    if(IsNull(winArguments)) winArguments = {};
    if(IsNull(useModalDialog)) useModalDialog = true;
    if(!Mscrm.Utilities.isModalDialogSupported())
    {
        useModalDialog = false;
        if(Mscrm.FloatingDialog.isFloatingDialogSupported(url.get_path()))
        {
            var $v_4 = $9G(features);
            $8n(url, winArguments, $v_4.x, $v_4.y, url.get_path());
            return null
        }
    }
    try
    {
        if(Mscrm.Utilities.get_ieBrowserVersion() < 9) winArguments["window"] = window
    }
    catch($$e_8)
    {}
    if(!features) features = "";
    var $v_3 = null;
    if(!useModalDialog)
    {
        safeWindowShowModelessDialog(url, winArguments, features);
        return $v_3
    }
    try
    {
        $v_1 = (new Date).getTime();
        do $v_3 = window.showModalDialog($v_0, winArguments, features); while ($v_3 === "___RETRY___");
        $v_3 = $6y($v_3);
        $v_2 = (new Date).getTime()
    }
    catch($$e_A)
    {}
    IsNull($v_3) && $v_2 - $v_1 < 10 && handlePopupBlockerError($v_0);
    return $v_3
}

function $9G($p0)
{
    var $v_0 = new Sys.UI.Point(500, 270);
    if(!isNullOrEmptyString($p0))
        for(var $v_1 = $p0.split(";"), $v_2 = 0; $v_2 < $v_1.length; $v_2++)
        {
            var $v_3 = $v_1[$v_2].split(":");
            if($v_3.length === 2)
            {
                if($v_3[0] === "dialogWidth") $v_0.x = parseInt($v_3[1].substr(0, $v_3[1].length - 2), 10);
                if($v_3[0] === "dialogHeight") $v_0.y = parseInt($v_3[1].substr(0, $v_3[1].length - 2), 10)
            }
        }
    return $v_0
}

function $8n($p0, $p1, $p2, $p3, $p4)
{
    var $v_0 = Mscrm.FloatingDialog.generateNextFloatingDialogId("FloatingDialog");
    if(IsNull($p1) || isNullOrEmptyString($p1.toString())) $p1 = {};
    $p1.FloatingDialogId = $v_0;
    Mscrm.FloatingDialog.getHostingElement($v_0, $p0, $p2, $p3);
    if(!IsNull(window.isMobileClient)) window.parent[$v_0 + "_childDialogArguments"] = $p1;
    else
    {
        var $v_3 = window.parent,
            $v_4 = $v_3.parent;
        while($v_4 !== $v_3)
        {
            $v_3 = $v_4;
            $v_4 = $v_3.parent
        }
        $v_4[$v_0 + "_childDialogArguments"] = $p1
    }
    var $v_1 = Mscrm.FloatingDialog.getHostingIFrameId($v_0),
        $v_2 = Mscrm.FloatingDialog.getPollingElementForDialog($p4);
    window.setTimeout(function()
    {
        $7w($p1, $v_1, $v_2)
    }, 100)
}

function $7w($p0, $p1, $p2)
{
    var $v_0 = window.top.frames[$p1];
    if(!IsNull($v_0))
    {
        var $v_1 = $v_0.document.getElementById($p2);
        if(!IsNull($v_1))
        {
            $v_0.dialogArguments = $p0;
            return
        }
    }
    window.setTimeout(function()
    {
        $7w($p0, $p1, $p2)
    }, 100)
}

function $6y($p0)
{
    var $v_0 = $p0;
    if(typeof $p0 === "string") try
    {
        $v_0 = Sys.Serialization.JavaScriptSerializer.deserialize($p0)
    }
    catch($$e_2)
    {}
    return $v_0
}

function safeWindowShowModelessDialog(url, winArguments, features)
{
    var $v_0 = url.toString();
    Mscrm.PerformanceTracing.write("Navigate", $v_0);
    if(IsNull(features)) features = "";
    var $v_1 = null;
    try
    {
        if(Mscrm.Utilities.isModelessDialogSupported()) $v_1 = window.showModelessDialog($v_0, winArguments, features);
        else throw Error.create("showModelessDialog is not a supported API.")
    }
    catch($$e_5)
    {
        var $v_2 = new RegExp(";", "g");
        features = features.replace($v_2, ",");
        $v_2 = new RegExp(":", "g");
        features = features.replace($v_2, "=");
        features = features.replace("dialogwidth", "width").replace("dialogWidth", "width").replace("dialogheight", "height").replace("dialogHeight", "height").replace("dialogleft", "left").replace("dialogLeft", "left").replace("dialogtop", "top").replace("dialogTop", "top");
        if(!isNullOrEmptyString(features)) features = "dialog=yes,dependent=yes,location=no,menubar=no,toolbar=no,personalbar=no," + features;
        else features = "dialog=yes,dependent=yes,location=no,menubar=no,toolbar=no,personalbar=no";
        $v_1 = safeWindowOpen(url, buildWinName(), features);
        $v_1.dialogArguments = winArguments
    }
    if(IsNull($v_1)) handlePopupBlockerError($v_0);
    else if(!Mscrm.Utilities.isModalDialogSupported()) $v_1.opener = window.self;
    return $v_1
}

function openErrorDlgWithDetailedInfo(errorCode, message, serializedException, width, height)
{
    return openErrorDlg(errorCode, message, Mscrm.ErrorInformation.createErrorInfo(errorCode.toString(), message, serializedException), width, height)
}

function openErrorDlg(errorCode, message, errorInfo, width, height, callbackReference)
{
    if(Mscrm.Utilities.isMobileRefresh()) width = window.innerWidth;
    if(IsNull(width) || width <= 0) width = parseInt(window.LOCID_ERROR_DIALOG_WIDTH, 10);
    if(IsNull(height) || height <= 0) height = parseInt(window.LOCID_ERROR_DIALOG_HEIGHT, 10);
    var $v_0 = Mscrm.CrmUri.create("/_common/error/dlg_error.aspx");
    $v_0.get_query()["hresult"] = !IsNull(errorCode) ? errorCode : "";
    var $v_1 = {};
    $v_1["errMessage"] = message;
    $v_1["errInfo"] = errorInfo;
    var $v_2 = new Mscrm.CrmDialog($v_0, $v_1, width, height, null);
    !IsNull(callbackReference) && $v_2.setCallbackReference(callbackReference);
    return $v_2.show()
}

function openStdWinWithUrlPreload(url, name, width, height, customWinFeatures)
{
    var $v_0 = masterWindow().getPreloadInfo(url.toString());
    if(IsNull($v_0) || window.UseTabletExperience) return openStdWin(url, name, width, height, customWinFeatures);
    var $v_1 = openStdWin(Mscrm.CrmUri.create("/_static/loading.htm"), name, width, height, customWinFeatures),
        $v_2, $v_3, $$t_A, $$t_B;
    $9U($v_1, $$t_A = {
        val: $v_2
    }, $$t_B = {
        val: $v_3
    }), $v_2 = $$t_A.val, $v_3 = $$t_B.val;
    masterWindow().setPreloadPageParameters(url, $v_1, $v_2, $v_3);
    var $v_4 = masterWindow().isPreloadComplete(url.toString());
    !IsNull($v_4) && !IsNull($v_0) && finishPreload($v_4, $v_0);
    return $v_1
}

function openStdWin(url, name, width, height, customWinFeatures)
{
    var $v_0 = buildWindowFeatures(width, height, customWinFeatures);
    return openStdWinWithFeatures(url, name, $v_0, true)
}

function openStdWinWithFeatures(url, name, features, replace)
{
    if(shouldLaunchPageInOutlookHostedWindow(url))
    {
        var $v_0 = getOutlookHostedWindow(),
            $v_1 = null;
        if(!IsNull(url)) $v_1 = $v_0.openWindow(url.toString(), name, features);
        else $v_1 = $v_0.openWindow(null, name, features);
        $v_1.opener = window.self;
        return $v_1
    }
    else return safeWindowOpen(url, name, features, replace)
}

function buildWindowFeatures(windowWidth, windowHeight, customWinFeatures)
{
    var $v_0 = new Mscrm.Display(windowWidth, windowHeight);
    customWinFeatures = IsNull(customWinFeatures) || !customWinFeatures.length ? "" : "," + customWinFeatures;
    return "width=" + $v_0.get_width() + ",height=" + $v_0.get_height() + ",status=1,resizable=1,left=" + $v_0.get_left() + ",top=" + $v_0.get_top() + customWinFeatures
}

function openStdDlgWithCallback(url, winArguments, width, height, functionReference, resizable, modeless, customWinParams)
{
    return openStdDlg(url, winArguments, width, height, resizable, modeless, customWinParams, functionReference)
}

function openStdDlg(url, winArguments, width, height, resizable, modeless, customWinParams, functionReference)
{
    if(IsNull(customWinParams)) customWinParams = "";
    if(IsNull(winArguments)) winArguments = "";
    var $v_0 = winArguments;
    if(!IsNull(functionReference))
    {
        $v_0 = {};
        $v_0.passedArguments = winArguments;
        $v_0.callbackFunction = functionReference
    }
    if(IsNull(resizable)) resizable = true;
    if(IsNull(modeless)) modeless = false;
    if(typeof height !== "number") height = parseInt(height.toString(), 10);
    if(typeof width !== "number") width = parseInt(width.toString(), 10);
    if(resizable)
    {
        width += parseInt(window.LOCID_DIALOG_OFFSET_WIDTH, 10);
        height += parseInt(window.LOCID_DIALOG_OFFSET_HEIGHT, 10)
    }
    var $v_1 = new Mscrm.Display(width, height);
    width = $v_1.get_width();
    height = $v_1.get_height();
    var $v_2 = $v_1.get_left(),
        $v_3 = $v_1.get_top();
    if(window.LOCID_UI_DIR === "RTL") $v_2 = window.screen.availWidth - $v_2 - width;
    var $v_4 = "";
    if(modeless || Mscrm.Utilities.isFirefox()) $v_4 = "dialogLeft:" + $v_2 + "px;dialogTop:" + $v_3 + "px;";
    customWinParams = "dialogWidth:" + width + "px;dialogHeight:" + height + "px;" + $v_4 + "help:no;status:yes;scroll:no;center:yes;resizable:" + (resizable ? "yes" : "no") + ";" + customWinParams;
    if(isOutlookHostedWindow())
    {
        var $v_5 = getOutlookHostedWindow();
        if(!modeless) return $v_5.showModalDialog(url.toString(), $v_0, customWinParams);
        else
        {
            var $v_6 = $v_5.showModelessDialog(url.toString(), $v_0, customWinParams);
            $v_6.opener = window.self;
            return $v_6
        }
    }
    else if(!modeless) return safeWindowShowModalDialog(url, $v_0, customWinParams, IsNull(functionReference));
    else return safeWindowShowModelessDialog(url, $v_0, customWinParams)
}

function getPageManager()
{
    var $v_0 = Mscrm.PageManager.get_instance();
    if(!IsNull($v_0)) return $v_0;
    var $v_1 = window.parent;
    while(!IsNull($v_1) && IsNull($v_0))
    {
        var $v_2 = $v_1.Mscrm.PageManager;
        if(!IsNull($v_2)) $v_0 = $v_2.get_instance();
        var $v_3 = $v_1.parent;
        $v_1 = $v_3 === $v_1 ? null : $v_3
    }
    return $v_0
}

function getDialogArguments()
{
    var $v_0 = window.dialogArguments;
    if(isOutlookHostedWindow())
    {
        if(IsNull($v_0))
        {
            $v_0 = getOutlookHostedWindow().getDialogArguments();
            window.dialogArguments = $v_0
        }
    }
    else $v_0 = $7A($v_0);
    if(!IsNull($v_0))
    {
        var $v_1 = $v_0.initFunctionName;
        if(!IsNull($v_0.passedArguments)) $v_0 = $v_0.passedArguments;
        if(!IsNull($v_1))
        {
            (eval($v_1)).apply(null, $v_0);
            if(!IsNull(window.inlineDialogArguments)) delete window.inlineDialogArguments.initFunctionName;
            else if(!IsNull(window.dialogArguments)) delete window.dialogArguments.initFunctionName;
            delete $v_0.initFunctionName
        }
    }
    return $v_0
}

function $9d($p0)
{
    if(!IsNull($p0))
    {
        var $v_0 = $p0.initFunctionName;
        if(!IsNull($p0.passedArguments)) $p0 = $p0.passedArguments;
        if(!IsNull($v_0))
        {
            (eval($v_0)).apply(null, $p0);
            if(!IsNull(window.inlineDialogArguments)) delete window.inlineDialogArguments.initFunctionName;
            else if(!IsNull(window.dialogArguments)) delete window.dialogArguments.initFunctionName;
            delete $p0.initFunctionName
        }
    }
    return $p0
}

function $7A($p0)
{
    var $v_0 = window.parent,
        $v_1 = window.frameElement;
    if($v_0 && $v_1)
    {
        $p0 = window.inlineDialogArguments;
        if(IsNull($p0))
        {
            var $v_2 = $v_1.parentNode.id;
            if(!IsNull($v_2))
            {
                $p0 = $v_0[$v_2 + "_childDialogArguments"];
                if(!IsNull($p0))
                {
                    window.inlineDialogArguments = $p0;
                    if((eval("parent.Xrm.Page.context.client.getClient()")).toString() !== Xrm.ClientNames.mobile) $v_0[$v_2 + "_childDialogArguments"] = null;
                    var $v_3 = $p0.opener,
                        $v_4 = $p0.isMobileClient;
                    window.inlineDialogId = $v_2;
                    window.opener = $v_3;
                    window.isInlined = true;
                    if(!IsNull($v_4)) window.isMobileClient = $v_4
                }
            }
        }
    }
    return $p0
}

function getInlineDialogArguments()
{
    var $v_0 = window.dialogArguments;
    if(IsNull($v_0))
    {
        $v_0 = $7A($v_0);
        $v_0 = $9d($v_0)
    }
    return $v_0
}

function getDialogReturnValue()
{
    return $6y(window.returnValue)
}

function isOutlookHostedWindow()
{
    if(Mscrm.SessionInfo.isOutlookClient())
    {
        var $v_0 = getOutlookHostedWindow();
        if(!IsNull($v_0)) return $v_0.HostEnabled
    }
    return false
}

function isRichClient()
{
    if(isOutlookHostedWindow())
    {
        var $v_0 = getOutlookHostedWindow();
        return $v_0.ParentFrameAvailable
    }
    return false
}

function shouldLaunchPageInOutlookHostedWindow(uri)
{
    if(!isOutlookHostedWindow()) return false;
    if(!IsNull(uri.get_path) && uri.get_path().toUpperCase() === "/CRMREPORTS/VIEWER/VIEWER.ASPX" && !Mscrm.SessionInfo.isOnline()) return false;
    return true
}

function getOutlookHostedWindow()
{
    return window.external
}

function isInlinedDialog()
{
    var $v_0 = window.isInlined,
        $v_1 = window.isMobileClient;
    if(IsNull($v_0) && IsNull($v_1))
    {
        getDialogArguments();
        $v_0 = window.isInlined;
        $v_1 = window.isMobileClient
    }
    if(!IsNull($v_0)) return $v_0;
    if(!IsNull($v_1)) return $v_1;
    return false
}

function closeWindow(focus)
{
    if(Mscrm.Utilities.resetValidationFailedElement()) return;
    if(isInlinedDialog())
    {
        var $v_0 = "",
            $v_1 = window.isMobileClient,
            $v_2 = Mscrm.CrmUri.create(window.self.location.href),
            $v_3 = "dType" in $v_2.get_query() ? $v_2.get_query()["dType"] : null;
        if(!IsNull($v_1) && $v_1 && $v_3 === "2")
        {
            var $v_4 = window.dialogArguments;
            if(!IsNull($v_4)) $v_0 = $v_4.InlineDialogId;
            if(!isNullOrEmptyString($v_0))
            {
                var $v_5 = window.location.hostname,
                    $v_6 = window.location.port,
                    $v_7 = window.location.protocol,
                    $v_8 = isNullOrEmptyString($v_6) ? String.format("{0}//{1}", $v_7, $v_5) : String.format("{0}//{1}:{2}", $v_7, $v_5, $v_6),
                    $v_9 = new Mscrm.CrmDialogReturnObject("closeDialog", $v_0, window.returnValue);
                window.parent.postMessage(Sys.Serialization.JavaScriptSerializer.serialize($v_9.get_commandObject()), $v_8)
            }
            return
        }
        else
        {
            $v_0 = window.inlineDialogId;
            if(!isNullOrEmptyString($v_0))
            {
                Mscrm.InlineDialogUtility.close($v_0);
                return
            }
        }
    }
    if(!Mscrm.Utilities.isModalDialogSupported())
        if(!IsNull(document.URL) && Mscrm.FloatingDialog.isFloatingDialogSupported(Mscrm.CrmUri.create(document.URL).get_path()))
        {
            var $v_A = window.dialogArguments;
            if(!IsNull($v_A))
            {
                var $v_B = $v_A.FloatingDialogId;
                if(!IsNull($v_B))
                {
                    Mscrm.FloatingDialog.close($v_B);
                    return
                }
            }
        }
    if(isOutlookHostedWindow()) window.setTimeout(closeOutlookWindow, 0);
    else try
    {
        focus && window.focus();
        !Mscrm.Utilities.isIE() && window.top.open("", "_self", "");
        window.top.close()
    }
    catch($v_C)
    {
        window.close()
    }
}

function closeOutlookWindow()
{
    getOutlookHostedWindow().closeWindow()
}

function resizeWindow(width, height)
{
    if(isOutlookHostedWindow()) getOutlookHostedWindow().resizeWindow(width, height);
    else if(isInlinedDialog())
    {
        var $v_0 = window.dialogArguments;
        if(!IsNull($v_0))
        {
            var $v_1 = $v_0.InlineDialogId;
            if(!IsNull($v_1))
            {
                Mscrm.InlineDialog.resize($v_1, width, height);
                return
            }
        }
    }
    else
    {
        var $v_2 = window.dialogWidth;
        if(typeof $v_2 !== "undefined")
        {
            window.dialogWidth = width + "px";
            window.dialogHeight = height + "px"
        }
        else window.resizeTo(width, height)
    }
}

function openIsvWin(url, passParams, mode, parameters, dialogArgs)
{
    if(passParams) url = addIsvParameters(url);
    if(IsNull(mode)) mode = 0;
    if(IsNull(dialogArgs)) dialogArgs = {};
    if(dialogArgs.self !== window.self) dialogArgs["window"] = window;
    switch(mode)
    {
        case 1:
            safeWindowShowModalDialog(url, dialogArgs, parameters);
            break;
        case 2:
            safeWindowShowModelessDialog(url, dialogArgs, parameters);
            break;
        default:
            safeWindowOpen(url, buildWinName(null), parameters, true);
            break
    }
}

function addIsvParameters(url)
{
    url.get_query()["orgname"] = window.ORG_UNIQUE_NAME;
    url.get_query()["userlcid"] = window.USER_LANGUAGE_CODE;
    url.get_query()["orglcid"] = window.ORG_LANGUAGE_CODE;
    var $v_0 = $get("crmFormSubmit");
    if(typeof $v_0 !== "undefined" && !IsNull($v_0))
    {
        url.get_query()["type"] = $v_0.crmFormSubmitObjectType.value;
        url.get_query()["typename"] = $v_0.crmFormSubmitObjectTypeName.value;
        url.get_query()["id"] = $v_0.crmFormSubmitId.value
    }
    return url
}

function addPassiveAuthParameters(url)
{
    if(!isNullOrEmptyString(window.ISV_ADDITIONAL_AUTH))
    {
        var $v_0 = window.ISV_ADDITIONAL_AUTH.split("=");
        url.get_query()[$v_0[0]] = $v_0[1]
    }
    return url
}

function isOutlookInstance()
{
    try
    {
        var $v_0 = Mscrm.CrmUri.create(window.top.location.href);
        return $v_0.get_scheme().toUpperCase() === "OUTLOOK"
    }
    catch($$e_1)
    {
        return false
    }
}

function isComingFromReport()
{
    try
    {
        var $v_0 = Mscrm.CrmUri.create(window.top.location.href);
        return $v_0.get_path().toLowerCase().endsWith("drillopen.aspx")
    }
    catch($$e_1)
    {
        return false
    }
}

function setPageTitle(title)
{
    if(isNullOrEmptyString(title))
        if(!isNullOrEmptyString(window.top.document.title)) title = window.top.document.title;
        else if(!isNullOrEmptyString(document.title)) title = document.title;
    else title = window.LOCID_BRANDNAME;
    try
    {
        var $v_0 = title;
        if(title !== window.LOCID_BRANDNAME) $v_0 = String.format(window.LOCID_WINDOW_TITLE_FORMAT, title, window.LOCID_BRANDNAME);
        try
        {
            window.top.document.title = $v_0
        }
        catch($$e_2)
        {
            document.title = $v_0
        }
    }
    catch($$e_3)
    {}
}

function openUrl(url, relative)
{
    if(isOutlookInstance() || (IsNull(Mscrm.PageManager) && IsNull(Mscrm.PageManager.get_instance()) || !Mscrm.PageManager.isFlatUIPage()))
    {
        window.location.href = url;
        return
    }
    if(IsNull(relative)) relative = true;
    if(relative)
    {
        var $v_2 = Mscrm.CrmUri.create(window.location.href).get_path().split("/");
        $v_2[$v_2.length - 1] = url;
        url = "";
        var $v_3 = 0;
        while($v_3 < $v_2.length)
        {
            if(IsNull($v_2[$v_3]) || !$v_2[$v_3].length)
            {
                $v_3++;
                continue
            }
            url += "/" + $v_2[$v_3];
            $v_3++
        }
    }
    var $v_0 = getStickyViewIdForSubAreaPage(Mscrm.CrmUri.create(url)),
        $v_1 = {};
    $v_1["uri"] = $v_0.toString();
    Mscrm.PageManager.get_instance().raiseEvent(21, $v_1);
    return
}

function openUrlByCrmUrl(url, parameters)
{
    if(isOutlookInstance() || (IsNull(Mscrm.PageManager) && IsNull(Mscrm.PageManager.get_instance()) || !Mscrm.PageManager.isFlatUIPage()))
    {
        window.location.href = url.toString();
        return
    }
    if(IsNull(parameters)) parameters = {};
    parameters["uri"] = url.toString();
    Mscrm.PageManager.get_instance().raiseEvent(21, parameters)
}

function getStickyViewIdForSubAreaPage(url)
{
    if(isNullOrEmptyString(url.get_query()["pid"])) return url;
    try
    {
        var $v_0 = {};
        $v_0["pid"] = url.get_query()["pid"];
        var $v_1 = Mscrm.PageManager.get_instance().raiseEvent(48, $v_0);
        if(!IsNull($v_1))
        {
            var $v_2 = $v_1[0];
            if(!IsNull($v_2))
            {
                url.get_query()["viewId"] = $v_2.get_query()["viewId"];
                url.get_query()["viewType"] = $v_2.get_query()["viewType"]
            }
        }
    }
    catch($$e_4)
    {}
    return url
}

function getRecordUrl(type, id)
{
    var $v_0 = {};
    $v_0["returnUrl"] = true;
    var $v_1 = null;
    if(!IsNull(id) && id.length > 0) $v_1 = "?id=" + CrmEncodeDecode.CrmUrlEncode(id);
    if(openFrmObj($v_1, null, type, null, Mscrm.NavigationMode.DefaultNavigationMode, $v_0)) return $v_0["uri"];
    return Mscrm.CrmUri.create("")
}

function openFrmObj(queryString, name, type, urlPrefix, mode, parameters)
{
    var $v_0 = openFrmObject(queryString, name, type, urlPrefix, mode, parameters);
    if($v_0 || !$v_0) return $v_0;
    return !IsNull($v_0)
}

function isInlineShell()
{
    if(IsNull(window.top._IsInlineShell)) return false;
    else return window.top._IsInlineShell
}

function getNavigationMode(type, mode)
{
    var $v_0 = 0;
    if(IsNull(mode) || mode === 1)
    {
        var $v_1 = masterWindow().isEditMode(type.toString()),
            $v_2 = isInlineShell(),
            $v_3 = isOutlookInstance(),
            $v_4 = isComingFromReport();
        if(!$v_4 && ($v_1 || $v_3 || !$v_2)) $v_0 = 0;
        else $v_0 = 1
    }
    return $v_0
}

function openFrmObject(queryString, name, type, urlPrefix, mode, parameters)
{
    mode = getNavigationMode(type, mode);
    var $v_0 = mode === 1;
    if($v_0) masterWindow(false).StartInPageNavigationTimestamp = (new Date).getTime();
    if(IsNull(queryString)) queryString = "";
    if(typeof type === "string") type = parseInt(type, 10);
    switch(type)
    {
        case 9002:
        case 4425:
        case 4405:
        case 4423:
        case 0:
        case 4605:
        case 4602:
        case 4603:
        case 8e3:
        case 1120:
        case 4606:
        case 4607:
        case 4608:
        case 4615:
        case 4616:
        case 4618:
        case 4709:
        case 29:
        case 4410:
        case 1112:
        case 8050:
            return null;
        case 9100:
            if(!queryString.length)
            {
                if(Mscrm.Utilities.isIosDevice())
                {
                    alert(window.LOCID_UNSUPPORTED_RIBBONACTION);
                    return true
                }
                type = 9099
            }
            break;
        case 127:
            if(!queryString.length) type = 9202;
            break
    }
    var $v_1 = getWindowInformation(type),
        $v_2 = $v_1["windowInfo"],
        $v_3 = $v_2.Url,
        $v_4 = $v_1["windowWidth"],
        $v_5 = $v_1["windowHeight"],
        $v_6 = null,
        $v_7 = null;
    if(!IsNull($v_3))
    {
        if(queryString.length > 0 && queryString.charAt(0) === "?" || queryString.charAt(0) === "&") queryString = queryString.substr(1);
        if(IsNull(urlPrefix)) urlPrefix = "";
        var $v_8 = $v_3.toString();
        $v_3 = Mscrm.CrmUri.create(urlPrefix + $v_8 + ($v_8.indexOf("?") === -1 ? "?" : "&") + queryString);
        var $v_9 = $v_3.get_query()["id"],
            $v_A;
        try
        {
            $v_A = window.top
        }
        catch($$e_H)
        {
            $v_A = window.self
        }
        var $v_B = null;
        switch(type)
        {
            case 1070:
                $v_0 = false;
                break;
            case 126:
                name += "Viewer";
                break;
            case 1080:
                if(!queryString.length || queryString.indexOf("_CreateFromId") !== -1 && queryString.indexOf("_CreateFromType") !== -1)
                {
                    var $v_O = Mscrm.CrmUri.create("/Tools/ProductCatalog/dlg_create.aspx");
                    $v_O.get_query()["ObjType"] = 1080;
                    var $v_P = [queryString, name, type, parameters, $v_3, $v_4, $v_5, $v_0, $v_9];
                    $v_7 = Mscrm.Utilities.createCallbackFunctionObject("performActionAfterSwitch", Mscrm.CrmWindowMethods, $v_P);
                    $v_6 = openStdDlgWithCallback($v_O, null, 650, 650, $v_7, true, false, null);
                    if(Mscrm.Utilities.isModalDialogSupported()) return performActionAfterSwitch($v_6, queryString, name, type, parameters, $v_3, $v_4, $v_5, $v_0)
                }
                break;
            case 1056:
                if(!queryString.length)
                {
                    var $v_Q = Mscrm.CrmUri.create("/Tools/ProductCatalog/dlg_create.aspx");
                    $v_Q.get_query()["ObjType"] = 1056;
                    var $v_R = [queryString, name, type, parameters, $v_3, $v_4, $v_5, $v_0, $v_9];
                    $v_7 = Mscrm.Utilities.createCallbackFunctionObject("performActionAfterSwitch", Mscrm.CrmWindowMethods, $v_R);
                    $v_6 = openStdDlgWithCallback($v_Q, null, 500, 250, $v_7, true, false, null);
                    if(Mscrm.Utilities.isModalDialogSupported()) return performActionAfterSwitch($v_6, queryString, name, type, parameters, $v_3, $v_4, $v_5, $v_0)
                }
                break;
            case 1082:
                $v_B = new Mscrm.CrmDialog($v_3, window.self, $v_4, $v_5, null);
                return !IsNull($v_B.show());
            case 5003:
                OpenServiceAvailabilityDialog($v_3.toString());
                return true;
            case 129:
                if(window.UseTabletExperience)
                {
                    $v_4 = 500;
                    $v_5 = 330
                }
                $v_B = new Mscrm.CrmDialog(Mscrm.CrmUri.create("/Tools/SubjectManager/dialogs/edit.aspx?" + queryString + "&readOnly=1"), null, $v_4, $v_5, null);
                return !IsNull($v_B.show());
            case 5004:
                $v_3.get_query()["calendarId"] = $get("calendarId").value;
                $v_3.get_query()["resourceId"] = $get("oId").value;
                $v_3.get_query()["name"] = "Time off";
                $v_3.get_query()["mode"] = "Edit";
                return !IsNull(openStdDlg($v_3, $v_A.window, $v_4, $v_5, true, false, null));
            case 5006:
            case 5007:
                $v_3.get_query()["calendarId"] = $get("calendarId").value;
                $v_3.get_query()["innerCalendarId"] = $get("oId").value;
                $v_3.get_query()["name"] = "Working Hours";
                $v_3.get_query()["mode"] = "Edit";
                return !IsNull(openStdDlg($v_3, $v_A.window, $v_4, $v_5, true, false, null));
            case 5005:
                $v_3.get_query()["mode"] = "Edit";
                $v_3.get_query()["cType"] = $get("calendartype").value;
                $v_3.get_query()["holidayCalendarId"] = $get("calendarid").value;
                if(!IsNull(openStdDlg($v_3, $v_A.window, $v_4, $v_5, true, false, null)))
                {
                    Mscrm.Grid.auto(4004, null);
                    return true
                }
                else return false;
            case 5008:
                $v_3.get_query()["calendarId"] = $get("calendarId").value;
                $v_3.get_query()["resourceId"] = $get("oId").value;
                $v_3.get_query()["selecteddates"] = XUI.DomUtilities.GetFirstChild(XUI.DomUtilities.GetFirstChild(crmGrid.InnerGrid.SelectedRecords[0][3].cells[crmGrid.InnerGrid.FindColumnIndex("starttime")])).nodeValue;
                $v_3.get_query()["mode"] = $get("mode").value;
                return !IsNull(openStdDlg($v_3, null, $v_4, $v_5, true, false, null));
            case 5009:
            case 5010:
                $v_3.get_query()["calendarId"] = $get("calendarId").value;
                $v_3.get_query()["resourceId"] = $get("oId").value;
                $v_3.get_query()["name"] = "Working Hours";
                $v_3.get_query()["mode"] = $get("mode").value;
                break;
            case 4003:
                var $v_C = $find("crmGrid"),
                    $v_D = null;
                if(!IsNull($v_C)) $v_D = $v_C.GetParameter("viewid").toString();
                if(typeof $v_9 !== "undefined")
                {
                    if($v_D === "{06453A1D-9288-4F0E-9351-819D619ECB5F}" || $v_D === "{5037144D-3F7C-4B90-8E05-0F6FAD0C6E99}")
                    {
                        var $v_S = Mscrm.CrmUri.create("/Tools/business/home_bc.aspx");
                        $v_S.get_query()["cType"] = "hs";
                        $v_S.get_query()["oType"] = 8;
                        $v_S.get_query()["calendarId"] = $v_9;
                        var $v_T = Mscrm.WindowInformation.getWindowInformation(9099);
                        openUrlByCrmUrl($v_S, null);
                        return true
                    }
                    else if($v_D === "{F4D446E0-3749-4BA4-9C85-EAB861EAFDFC}" || $v_D === "A3CC2D8E-9768-DD11-B1B0-00155D869F00" || isNullOrEmptyString($v_D))
                    {
                        $v_3.get_query()["id"] = "";
                        $v_3.get_query()["mode"] = "edit";
                        $v_3.get_query()["calendarType"] = "1";
                        $v_3.get_query()["oType"] = 8;
                        $v_3.get_query()["resourceId"] = Xrm.Page.context.getUserId();
                        $v_3.get_query()["calendarId"] = $v_9;
                        if(!IsNull(openStdWin($v_3, "Calendar", 550, 700, null)))
                        {
                            !isNullOrEmptyString($v_D) && Mscrm.Utilities.refreshCurrentGrid(4003);
                            return true
                        }
                        else return false
                    }
                }
                else
                {
                    var $v_U = Mscrm.CrmUri.create("/SM/Workplans/Dialogs/dlg_create.aspx");
                    if($v_D === "{F4D446E0-3749-4BA4-9C85-EAB861EAFDFC}") $v_U.get_query()["serviceCalendarType"] = 1;
                    else if($v_D === "{06453A1D-9288-4F0E-9351-819D619ECB5F}" || $v_D === "{349EFD53-C081-487A-9A9F-680D0B36C36B}") $v_U.get_query()["serviceCalendarType"] = 2;
                    else if($v_3.get_query()["serviceCalendarType"]) $v_U.get_query()["serviceCalendarType"] = $v_3.get_query()["serviceCalendarType"];
                    $v_U.get_query()["oType"] = 4003;
                    var $v_V = {};
                    $v_V["opener"] = window.self;
                    var $v_W = new Mscrm.CrmDialog($v_U, $v_V, 650, 250, null);
                    if(!IsNull($v_W.show())) return true;
                    else return false
                }
                break;
            case 4230:
                return false;
            case 9004:
                if(name && name.length === 32) $v_3.get_query()["QueryId"] = name;
                var $v_E = openStdDlg($v_3, $v_A.window, $v_4, $v_5, true, false, null);
                Mscrm.Utilities.refreshCurrentGrid(4230);
                return !IsNull($v_E);
            case 9100:
                var $v_F = Mscrm.CrmUri.create(window.location.href);
                if(!$v_F.get_path().toUpperCase().endsWith("TOOLS/SOLUTION/AREAS.ASPX"))
                {
                    name = buildWinName(null);
                    break
                }
                else
                {
                    var $v_X = $v_3.get_query()["id"].toString(),
                        $v_Y = Mscrm.WindowInformation.getWindowInformation(9099),
                        $v_Z = Mscrm.CrmUri.create("/CRMReports/reportproperty.aspx");
                    $v_Z.get_query()["disablePersonal"] = true;
                    $v_Z.get_query()["id"] = $v_X;
                    return !IsNull(openStdWin($v_Z, buildWinName(null), $v_Y.Width, $v_Y.Height, null))
                }
            case 4703:
                if(queryString.indexOf("id") > -1) break;
                var $v_G = $v_3.toString(),
                    $v_H = $v_G.lastIndexOf("/"),
                    $v_I = "";
                if($v_H > 0) $v_I = $v_G.substring(0, $v_H + 1);
                var $v_J = Mscrm.CrmUri.create($v_I + "workflowTemplate/workflowTemplatePage.aspx");
                $v_J = Mscrm.CrmUri.updateCrmUriHostAndScheme($v_J);
                var $v_K = openStdDlg($v_J, name, 640, 480, true, false, null);
                if(IsNull($v_K) || !$v_K.Success) return true;
                if(Mscrm.Utilities.parseInt($v_K.Category) === 4)
                {
                    $v_3 = Mscrm.CrmUri.create("/Tools/ProcessControl/bpfConfigurator.aspx");
                    $v_3 = Mscrm.CrmUri.updateCrmUriHostAndScheme($v_3);
                    $v_5 = window.screen.availHeight;
                    $v_4 = window.screen.availWidth - 10
                }
                else $v_3 = $v_2.Url;
                var $v_L = $v_K.Id;
                $v_3.get_query()["id"] = $v_L;
                Mscrm.Grid.auto(4703, $v_K.Name);
                break;
            case 1010:
                if(!queryString.length)
                {
                    $v_B = new Mscrm.CrmDialog(Mscrm.CrmUri.create("/cs/contracts/lookup_template.aspx"), window, 370, 370, null);
                    return !IsNull($v_B.show())
                }
                break;
            case 2010:
                if(!$v_9 || !$v_9.length)
                {
                    var $v_a = Mscrm.CrmUri.create("/Tools/EmailTemplateEditor/Dialogs/emailtemplateproperties.aspx");
                    $v_a.get_query()["isPersonal"] = "0";
                    openStdDlg($v_a, window, 400, 200, true, false, null);
                    return true
                }
                break;
            case 4200:
            case 9202:
                return !IsNull(openStdDlg($v_3, window, $v_4, $v_5, true, false, null));
            case 1030:
            case 1031:
                var $v_M = Mscrm.CrmUri.create(window.location.href);
                if(!$v_M.get_path().toUpperCase().endsWith("TOOLS/SOLUTION/AREAS.ASPX"))
                {
                    delete $v_3.get_query().id;
                    $v_3.get_query()["dashboardId"] = $v_9;
                    openUrl($v_3.toString(), false)
                }
                else
                {
                    var $v_b = Mscrm.CrmUri.create("/main.aspx?pagetype=dashboardeditor"),
                        $v_c = "&formId=" + $v_9 + "&dashboardType=" + type;
                    $v_b.get_query()["extraqs"] = $v_c;
                    openStdWin($v_b, buildWinName(null), window.screen.availWidth * .9, window.screen.availHeight * .9, null)
                }
                return true;
            case 1111:
                var $v_N = Mscrm.CrmUri.create("/main.aspx?pagetype=vizdesigner");
                $v_N.get_query()["extraqs"] = "id=" + $v_9;
                openStdWin($v_N, buildWinName($v_9), $v_2.Width, $v_2.Height, "resizable=0");
                return true;
            case 8:
                if(Xrm.Page.context.isCrmOnline() && (!queryString.length || queryString.indexOf("_CreateFromId") !== -1 && queryString.indexOf("_CreateFromType") !== -1))
                {
                    if(queryString.indexOf("id") > -1) break;
                    var $v_d = 800,
                        $v_e = 530,
                        $v_f = "2631659F-A668-4A48-833B-D20E187B5A89",
                        $v_g = Mscrm.CrmUri.create("/WebWizard/WizardContainer.aspx");
                    $v_g.get_query()["WizardId"] = $v_f;
                    if(!IsNull(openStdDlg($v_g, null, $v_d, $v_e, true, false, null))) return true;
                    else return false
                }
                break;
            default:
                if(Mscrm.EtcUtil.isUserDefinedEntityObjectTypeCode(type)) $v_3.get_query()["etc"] = type;
                break
        }
        if(Mscrm.Utilities.isModalDialogSupported() || !Mscrm.Utilities.isModalDialogSupported() && IsNull($v_7)) return performActionAfterSwitch($v_6, queryString, name, type, parameters, $v_3, $v_4, $v_5, $v_0)
    }
    return false
}

function $93($p0)
{
    switch($p0)
    {
        case 1:
        case 2:
        case 4:
        case 3:
        case 112:
        case 4703:
            return true
    }
    return false
}

function performActionAfterSwitch(returnValue, queryString, name, type, parameters, url, windowWidth, windowHeight, sameWindow)
{
    switch(type)
    {
        case 1080:
        case 1056:
            if(!queryString.length || queryString.indexOf("_CreateFromId") !== -1 && queryString.indexOf("_CreateFromType") !== -1)
                if(IsNull(returnValue)) return null;
                else url = Mscrm.CrmUri.create(returnValue);
            break
    }
    if(!IsNull(url))
    {
        if(!IsNull(parameters) && !IsNull(parameters["returnUrl"]) && parameters["returnUrl"])
        {
            parameters["uri"] = url;
            return true
        }
        var $v_0 = false;
        if(!IsNull(parameters) && !IsNull(parameters["sameWindow"])) $v_0 = parameters["sameWindow"];
        else $v_0 = sameWindow;
        if(!isOutlookInstance() && Mscrm.PageManager.isFlatUIPage() && Mscrm.PageManager.isFlatUrl(url.toString()) && $v_0)
        {
            if(IsNull(parameters)) parameters = {};
            var $v_1 = masterWindow().isEditMode(type.toString());
            if(!isOutlookInstance() && !$v_1) parameters["uri"] = createMainUrl(url, type, parameters).toString();
            else parameters["uri"] = url.toString();
            parameters["name"] = name;
            parameters["windowWidth"] = windowWidth;
            parameters["windowHeight"] = windowHeight;
            parameters["sameWindow"] = true;
            var $v_2 = getPageManager().$9_1.raiseEvent(21, parameters, null);
            if(!(IsNull($v_2) || !$v_2.length)) return true
        }
        if(!IsNull(url.get_path()) && (url.get_path().toLowerCase() === "/userdefined/edit.aspx" || url.get_path().toLowerCase() === "/routingruleitem/edit.aspx" || url.get_path().toLowerCase() === "/slaitem/edit.aspx" || url.get_path().toLowerCase() === "/convertruleitem/edit.aspx"))
        {
            if(!sameWindow)
            {
                var $v_3 = url.get_query()["pagemode"],
                    $v_4 = url.get_query()["redir"];
                if((IsNull($v_4) || $v_4 !== "0") && (IsNull($v_3) || $v_3 !== "iframe"))
                {
                    delete url.get_query().pagemode;
                    if(IsNull(parameters)) parameters = {};
                    parameters["newWindow"] = true;
                    parameters["histKey"] = Math.floor(Math.random() * 1e9).toString();
                    url = createMainUrl(url, type, parameters)
                }
            }
            else if(!IsNull(url.get_query()["rof"]) && url.get_query()["rof"].toLowerCase() === "true") url = createMainUrl(url, type, parameters)
        }
        else if(!IsNull(url.get_query()["rof"])) delete url.get_query().rof;
        if(shouldLaunchPageInOutlookHostedWindow(url)) switch(type)
        {
            case 9099:
            case 9801:
            case 9802:
            case 9803:
            case 9804:
            case 9805:
            case 9806:
            case 9807:
            case 9808:
            case 9809:
            case 9810:
            case 9811:
                return openStdWin(url, name, windowWidth, windowHeight, null);
            default:
                var $v_5 = getOutlookHostedWindow().openInspector(type, url.toString(), windowHeight, windowWidth);
                if(!IsNull($v_5))
                {
                    $v_5._masterWindow = masterWindow();
                    $v_5.opener = window.self
                }
                return $v_5
        }
        else if(!sameWindow) return openStdWin(url, name, windowWidth, windowHeight, null);
        else
        {
            if("newWindow" in parameters) url.get_query()["newWindow"] = parameters["newWindow"];
            if("histKey" in parameters) url.get_query()["histKey"] = parameters["histKey"];
            openInPlace(url, windowWidth, windowHeight);
            return true
        }
    }
    return false
}

function reloadReadForm(objectTypeCode, entityId, formId, setLastViewed)
{
    if(!isNullOrEmptyString(formId))
    {
        var $v_0 = createReloadReadFormUri(objectTypeCode, entityId, formId, setLastViewed);
        window.location.replace($v_0.toString())
    }
}

function createReloadReadFormUri(objectTypeCode, entityId, formId, setLastViewed)
{
    var $v_0 = Mscrm.CrmUri.create("/_forms/read/page.aspx");
    $v_0.get_query()["formid"] = formId;
    $v_0.get_query()["setlastviewed"] = setLastViewed;
    $v_0.get_query()["rof"] = true;
    $v_0.get_query()["theme"] = window.RefreshFormTheme;
    if(!isNullOrEmptyString(entityId)) $v_0.get_query()["id"] = entityId;
    var $v_1 = Mscrm.CrmUri.create(window.location.href);
    if("rskey" in $v_1.get_query() && !isNullOrEmptyString($v_1.get_query()["rskey"])) $v_0.get_query()["rskey"] = $v_1.get_query()["rskey"];
    var $v_2 = {};
    $v_2["rof"] = true;
    $v_2["pagemode"] = $v_1.get_query()["pagemode"];
    var $v_3 = createMainUrl($v_0, objectTypeCode, $v_2);
    if(!isOutlookHostedWindow()) $v_3.get_query()["pagemode"] = "iframe";
    return $v_3
}

function createMainUrl(editUrl, type, parameters)
{
    var $v_0 = Mscrm.CrmUri.create("/main.aspx");
    $v_0.get_query()["etc"] = type.toString();
    $v_0.get_query()["pagetype"] = "entityrecord";
    if(!IsNull(editUrl))
    {
        var $v_1 = editUrl.get_queryString();
        if(!isNullOrEmptyString($v_1)) $v_0.get_query()["extraqs"] = $v_1;
        if("rskey" in editUrl.get_query() && !isNullOrEmptyString(editUrl.get_query()["rskey"])) $v_0.get_query()["rskey"] = editUrl.get_query()["rskey"]
    }
    if(!IsNull(parameters))
    {
        if(!IsNull(parameters["rof"])) $v_0.get_query()["rof"] = parameters["rof"];
        if(!IsNull(parameters["pagemode"])) $v_0.get_query()["pagemode"] = parameters["pagemode"];
        if(!IsNull(parameters["newWindow"])) $v_0.get_query()["newWindow"] = parameters["newWindow"];
        if(!IsNull(parameters["histKey"])) $v_0.get_query()["histKey"] = parameters["histKey"]
    }
    return $v_0
}

function popOutSourceUrl(url)
{
    var $v_0 = Mscrm.CrmUri.create(url),
        $v_1 = {};
    $v_1["etc"] = $v_0.get_query()["etc"];
    $v_1["id"] = Mscrm.CrmUri.create($v_0.get_query()["extraqs"]).get_query()["id"];
    if(IsNull($v_1["id"]))
    {
        var $v_4 = $get("crmContentPanel"),
            $v_5 = $v_4.attributes.getNamedItem("currentContentId"),
            $v_6 = null;
        if(!IsNull($v_5) && $v_5.specified) $v_6 = $get($v_5.value);
        if(!IsNull($v_6))
        {
            var $v_7 = $v_6.contentWindow;
            $v_1["id"] = $v_7.Xrm.Page.data.entity.getId()
        }
    }
    $v_1["pagetype"] = "entityrecord";
    var $v_2 = parseInt($v_0.get_query()["etc"], 10),
        $v_3 = getWindowInformation($v_2);
    $v_1["windowWidth"] = $v_3["windowWidth"];
    $v_1["windowHeight"] = $v_3["windowHeight"];
    if(Mscrm.Utilities.isChrome())
    {
        $v_1["features"] = "scrollbars=1";
        $v_1["trimStatus"] = false
    }
    if($v_2 === 1048) $v_1["queryString"] = $v_0.get_query()["extraqs"];
    Mscrm.PageManager.get_instance().raiseEvent(21, $v_1);
    if(isOutlookHostedWindow()) $find("crmHistoryManager").navigateBack(1);
    else window.history.back()
}

function isPreloadComplete(contentUrl)
{
    var $v_0 = Mscrm.CrmUri.create(contentUrl),
        $v_1 = contentUrl.indexOf("/userdefined/edit.aspx");
    if($v_1 > 0) $v_0 = Mscrm.CrmUri.createForOrganization(contentUrl, contentUrl.substr(1, $v_1 - 1));
    else
    {
        var $v_3 = contentUrl.indexOf("/main.aspx");
        if($v_3 > 0) $v_0 = Mscrm.CrmUri.createForOrganization(contentUrl, contentUrl.substr(1, $v_1 - 1))
    }
    contentUrl = $v_0.toString();
    var $v_2 = Mscrm.CrmWindow.$1a[contentUrl];
    if($v_2)
    {
        if(!$v_2.get_isLoaded()) return null;
        window.self.PreloadStartTime = $v_2.$37_0;
        window.self.PreloadEndTime = $v_2.$36_0;
        delete Mscrm.CrmWindow.$1a[contentUrl]
    }
    return contentUrl
}

function preloadPage(path, forEditMode, force)
{
    if(!force && isEditMode(path.get_query()["etc"]) !== forEditMode) return false;
    var $v_0 = path.toString(),
        $v_1 = new Mscrm.PagePreloadInfo;
    Mscrm.CrmWindow.$1a[$v_0] = $v_1;
    try
    {
        var $v_2 = new XMLHttpRequest;
        $v_2.onreadystatechange = function()
        {
            if($v_2.readyState !== 4) return;
            $v_2.onreadystatechange = null;
            $v_1.set_isLoaded(true);
            if($v_2.status !== 200);
            if(isValidWindowInstance($v_1.$3D_0))
            {
                delete Mscrm.CrmWindow.$1a[$v_0];
                finishPreload($v_0, $v_1)
            }
            $v_2 = null
        };
        $v_2.open("GET", $v_0, true);
        $v_2.send(null)
    }
    catch($v_3)
    {}
    return true
}

function $AZ($p0)
{
    for(var $$arr_1 = Mscrm.CrmWindow.$6X, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3)
    {
        var $v_0 = $$arr_1[$$idx_3];
        if($p0.toUpperCase().endsWith($v_0.toUpperCase())) return false
    }
    return true
}

function $9w($p0, $p1)
{
    if($AZ($p0.toString())) $p0.href = $p1;
    else $p0.replace($p1)
}

function finishPreload(path, pagePreloadInfo)
{
    var $v_0 = pagePreloadInfo.$3D_0;
    if(isValidWindowInstance($v_0))
    {
        $9w($v_0.location, path);
        $7y($v_0, pagePreloadInfo.$3V_0, pagePreloadInfo.$3Q_0);
        $v_0.StartRefreshPreloadTimestamp = pagePreloadInfo.$37_0;
        $v_0.FinishRefreshPreloadTimestamp = pagePreloadInfo.$36_0;
        $v_0._masterWindow = masterWindow()
    }
}

function setPreloadPageParameters(path, windowInstance, beforeWindowOpenTime, afterWindowOpenTime)
{
    var $v_0 = Mscrm.CrmWindow.$1a[path.toString()];
    if(!IsNull($v_0))
    {
        $v_0.$3D_0 = windowInstance;
        $v_0.$3V_0 = beforeWindowOpenTime;
        $v_0.$3Q_0 = afterWindowOpenTime
    }
}

function getPreloadInfo(path)
{
    return Mscrm.CrmWindow.$1a[path]
}

function isEditMode(etc)
{
    var $v_0 = true;
    if(!isNullOrEmptyString(etc))
    {
        var $v_1 = getFormMode(etc);
        if(!IsNull($v_1) && $v_1.toString() === "RO") $v_0 = false
    }
    return $v_0
}

function openInPlace(path, x, y)
{
    var $v_0 = new Mscrm.Display(x, y);
    x = $v_0.get_width();
    y = $v_0.get_height();
    var $v_1 = $v_0.get_left(),
        $v_2 = $v_0.get_top();
    window.moveTo($v_1, $v_2);
    resizeWindow(x, y);
    window.location.replace(path.toString())
}

function openItem(type, id, mode, extraParams)
{
    if(IsNull(extraParams)) extraParams = {};
    extraParams["sameWindow"] = mode === 1;
    return openObj(type, id, null, null, mode, extraParams)
}

function openObjEtn(name, id, parameters, urlPrefix, mode, extraParameters)
{
    var $v_0 = Mscrm.EntityPropUtil.EntityTypeName2CodeMap[name];
    if(IsNull($v_0))
    {
        alert(formatString(window.LOCID_UNRECOGNIZE_DOTC, name));
        return false
    }
    return openObj($v_0, id, parameters, urlPrefix, mode, extraParameters)
}

function openObj(type, id, parameters, urlPrefix, mode, extraParams)
{
    try
    {
        var $v_0 = false;
        if(typeof window.UseTabletExperience === "undefined")
        {
            if(window.parent !== window.self && !IsNull(window.parent.openObj))
            {
                window.parent.openObj(type, id, parameters, urlPrefix, mode, extraParams);
                return true
            }
            if(!IsNull(window.opener)) try
            {
                if(!IsNull(window.opener.openObj))
                {
                    window.opener.openObj(type, id, parameters, urlPrefix, mode, extraParams);
                    return true
                }
            }
            catch($$e_7)
            {}
            if(Mscrm.Utilities.isIosDevice()) $v_0 = true
        }
        if((window.UseTabletExperience || $v_0) && $AB(type, id)) return true;
        if((Mscrm.Utilities.isGlobalQuickCreateForm() || isInlinedDialog()) && IsNull(mode)) mode = isNullOrEmptyString(id) ? 1 : 0;
        var $v_1 = !!openObject(type, id, parameters, urlPrefix, mode, extraParams, true);
        if($v_1 || !$v_1) return $v_1;
        return !IsNull($v_1)
    }
    catch($$e_9)
    {
        return false
    }
}

function $AB($p0, $p1)
{
    var $v_0 = "";
    if(typeof $p0 === "string") $p0 = parseInt($p0, 10);
    if($p0 === 1070 || $p0 === 1001) return false;
    switch($p0)
    {
        case 9105:
            $v_0 = "transactioncurrency";
            break;
        case 4e3:
            $v_0 = "equipment";
            break;
        case 4001:
            $v_0 = "service";
            break;
        case 9606:
            $v_0 = "mailbox";
            break;
        case 9600:
        case 9602:
        case 4412:
        case 1091:
        case 127:
        case 1085:
        case 9604:
        case 1089:
        case 4214:
        case 9750:
        case 9751:
        case 8181:
        case 8199:
        case 2020:
        case 9300:
        case 9301:
        case 9702:
        case 5005:
        case 4003:
            $73();
            return true;
        default:
            var $v_1 = Mscrm.WindowInformation.getWindowInformation($p0),
                $v_2 = $v_1.Url;
            $v_2.set_useOrganizationName(false);
            if(!$v_2.get_path().toLowerCase().startsWith("/userdefined/edit.aspx"))
            {
                $73();
                return true
            }
            break
    }
    if(!isNullOrEmptyString($v_0))
    {
        var $v_3 = Mscrm.MobileUtility.getMobileUrl(2, $v_0, $p1, true);
        safeWindowOpen($v_3, null, null);
        return true
    }
    return false
}

function $73()
{
    if(typeof window.LOCID_RECORD_NOT_ENABLED_DEVICE === "undefined")
    {
        if(!window.parent) return;
        var $v_0 = window.parent.LOCID_RECORD_NOT_ENABLED_DEVICE;
        window.self.LOCID_RECORD_NOT_ENABLED_DEVICE = $v_0
    }
    alert(window.LOCID_RECORD_NOT_ENABLED_DEVICE)
}

function openObject(type, id, parameters, urlPrefix, mode, extraParams, allChecked)
{
    if(typeof window.UseTabletExperience === "undefined" && !allChecked)
    {
        openObj(type, id, parameters, urlPrefix, mode, extraParams);
        return true
    }
    if(typeof type === "string") type = parseInt(type, 10);
    var $v_0 = "";
    if(id)
    {
        if(type === 1039)
        {
            var $v_1 = new RemoteCommand("SystemCustomization", "CheckSavedQuery", null);
            $v_1.SetParameter("savedQueryId", id);
            if(!$v_1.Execute(null).Success) return null
        }
        $v_0 += "?id=" + CrmEncodeDecode.CrmUrlEncode(id)
    }
    if(!IsNull(parameters))
    {
        $v_0 += !$v_0.length ? "?" : "&";
        if(parameters.length > 0 && (parameters.charAt(0) === "?" || parameters.charAt(0) === "&")) parameters = parameters.substr(1);
        $v_0 += parameters
    }
    return openFrmObject($v_0, buildWinName(id), type, urlPrefix, mode, extraParams)
}

function openObjEx(type, parentType, parentId, parameters, urlPrefix)
{
    try
    {
        var $v_0 = "";
        if(parentId) $v_0 += "?pId=" + CrmEncodeDecode.CrmUrlEncode(parentId) + "&pType=" + CrmEncodeDecode.CrmUrlEncode(parentType.toString());
        if(!IsNull(parameters))
        {
            if(parameters.length > 0 && (parameters.charAt(0) === "?" || parameters.charAt(0) === "&")) parameters = parameters.substr(1);
            $v_0 += "&" + parameters
        }
        var $v_1 = Mscrm.NavigationMode.DefaultNavigationMode;
        if(type === 5 || type === 1070) $v_1 = 0;
        return openFrmObj($v_0, buildWinName(null), type, urlPrefix, $v_1, null)
    }
    catch($$e_7)
    {
        return false
    }
}

function closeWindowScript()
{
    var $v_0 = Mscrm.PageManager.get_instance();
    if(IsNull($v_0)) $v_0 = window.parent.Sys.Application.findComponent("crmPageManager");
    if(!IsNull($v_0))
    {
        var $v_1 = 23;
        if(Mscrm.NavigationMode.DefaultNavigationMode === 1) $v_1 = 18;
        $v_0.raiseEvent($v_1, null);
        return
    }
    closeWindow()
}

function openPopup()
{
    var $v_0 = window.createPopup();
    SetDefaultStyles($v_0);
    return $v_0
}

function SetDefaultStyles(popup)
{
    if(!IsNull(popup))
    {
        var $v_0 = null;
        if(Mscrm.SessionInfo.isHelpContext())
        {
            $v_0 = Mscrm.CrmUri.create("/help/common/fonts.css.aspx");
            $v_0.set_useOrganizationName(false)
        }
        else $v_0 = Mscrm.CrmUri.create("/_common/styles/fonts.css.aspx");
        popup.document.createStyleSheet($v_0.toString())
    }
}

function buildWinName(s)
{
    if(s)
    {
        var $v_0 = new RegExp("[-\\{\\}:]", "g");
        return s.toLowerCase().replace($v_0, "")
    }
    return(new Date).getTime().toString()
}

function $9j()
{
    if(Sys.Browser.agent === Sys.Browser.InternetExplorer)
        if(Sys.Browser.version >= 8) return true;
        else
        {
            var $v_0 = new RegExp("Trident\\/[0-9]+\\.?[0-9]*");
            if(Sys.Browser.version >= 7 && $v_0.test(window.navigator.userAgent)) return true
        }
    return false
}

function handlePopupBlockerError(url)
{
    if(!isNullOrEmptyString(url))
        if($9j() && !Mscrm.CrmUri.isSameDomain(url, window.location.href)) return;
    alert(window.LOCID_POPUP_BLOCKER_ERROR + window.location.hostname)
}

function validateUrlProtocol(url)
{
    var $v_0 = Mscrm.CrmUri.create(url);
    if(isNullOrEmptyString($v_0.get_scheme())) return 0;
    switch($v_0.get_scheme())
    {
        case "http":
        case "https":
        case "ftp":
        case "ftps":
        case "onenote":
        case "tel":
            return 1;
        default:
            return 2
    }
}

function setAttributeInWindow(attributeName, value)
{
    window[attributeName] = value
}

function setPerfMarkerTimestamp(markerName)
{
    window[markerName] = (new Date).getTime()
}

function showTabletExperienceError(url, message)
{
    var $v_0 = window.top.document.body.clientWidth,
        $v_1 = window.top.document.body.clientHeight,
        $v_2 = window.top.document.createElement("div");
    $v_2.id = "inlineError";
    $v_2.style.top = $v_1 / 2 - 92 + "px";
    $v_2.style.left = $v_0 / 2 - 225 + "px";
    $v_2.style.zIndex = 3e3;
    $v_2.style.position = "absolute";
    $v_2.style.overflowY = "auto";
    var $v_3 = window.top.document.createElement("iframe");
    $v_3.src = url.toString();
    $v_3.style.width = 450 + "px";
    $v_3.style.height = 185 + "px";
    $v_3.style.borderWidth = "1px";
    $v_3.style.borderColor = "#D6D6D6";
    $v_3.style.borderStyle = "solid";
    $v_2.appendChild($v_3);
    if(!IsNull(message))
    {
        var $v_5 = window.top.document.createElement("input");
        $v_5.setAttribute("type", "hidden");
        $v_5.id = "hidInlineErrorMessage";
        $v_5.value = message;
        $v_2.appendChild($v_5)
    }
    window.top.document.body.appendChild($v_2);
    var $v_4 = window.top.document.createElement("div");
    $v_4.id = "errorBackDiv";
    $v_4.style.position = "absolute";
    $v_4.style.top = "0";
    $v_4.style.left = "0";
    $v_4.style.zIndex = $v_2.style.zIndex - 1;
    $v_4.style.width = $v_0 + "px";
    $v_4.style.height = $v_1 + "px";
    XUI.Html.SetOpacity($v_4, .5);
    $v_4.style.backgroundColor = "gray";
    window.top.document.body.appendChild($v_4);
    $addHandler($v_4, "orientationchange", $7h);
    $addHandler($v_4, "touchstart", Mscrm.FloatingDialog.stopTouchMoveEvents);
    $addHandler($v_4, "touchmove", Mscrm.FloatingDialog.stopTouchMoveEvents);
    return $v_3.contentWindow
}

function closeTabletExperienceError()
{
    var $v_0 = window.top.document.getElementById("inlineError"),
        $v_1 = window.top.document.getElementById("errorBackDiv");
    if(!IsNull($v_0) && !$v_0.getAttribute("isClosing"))
    {
        if(!IsNull($v_1))
        {
            $removeHandler($v_1, "orientationchange", $7h);
            $removeHandler($v_1, "touchstart", Mscrm.FloatingDialog.stopTouchMoveEvents);
            $removeHandler($v_1, "touchmove", Mscrm.FloatingDialog.stopTouchMoveEvents);
            $v_1.style.display = "none"
        }
        $v_0.style.display = "none";
        $v_0.setAttribute("isClosing", true);
        window.setTimeout(closeTabletExperienceError, 1500);
        return
    }!IsNull($v_1) && window.top.document.body.removeChild($v_1);
    !IsNull($v_0) && window.top.document.body.removeChild($v_0)
}

function $7h($p0)
{
    var $v_0 = window.top.document.body.clientWidth,
        $v_1 = window.top.document.body.clientHeight,
        $v_2 = window.top.document.getElementById("inlineError");
    if(!IsNull($v_2))
    {
        $v_2.style.top = $v_1 / 2 - 92 + "px";
        $v_2.style.left = $v_0 / 2 - 225 + "px"
    }
    var $v_3 = window.top.document.getElementById("errorBackDiv");
    if(!IsNull($v_3))
    {
        $v_3.style.width = $v_0 + "px";
        $v_3.style.height = $v_1 + "px"
    }
}

function getWindowInformation(type)
{
    var $v_0 = Mscrm.WindowInformation.getWindowInformation(type),
        $v_1 = $v_0.Width,
        $v_2 = $v_0.Height;
    if(window.USE_READ_FORM && $93(type))
    {
        $v_1 = Math.min(1400, window.screen.availWidth);
        $v_2 = window.screen.availHeight
    }
    if(isOutlookHostedWindow()) $v_2 -= 70;
    var $v_3 = {};
    $v_3["windowInfo"] = $v_0;
    $v_3["windowWidth"] = $v_1;
    $v_3["windowHeight"] = $v_2;
    return $v_3
}

function executeDialogCloseCallback(value)
{
    var $v_0 = null;
    if(isInlinedDialog()) $v_0 = window.inlineDialogArguments;
    if(IsNull($v_0)) $v_0 = window.dialogArguments;
    var $v_1 = new Mscrm.CallbackFunctionObject;
    if(!IsNull($v_0))
    {
        $v_1.callback = $v_0.callbackFunction;
        $v_1.parameters = $v_0.passedArguments
    }
    if(!IsNull($v_1.callback))
    {
        var $v_2 = $v_1.callback.callback;
        Mscrm.Utilities.executeFunction(IsNull($v_2) ? $v_1 : $v_1.callback, value)
    }
}
Mscrm.CrmDialog = function(url, windowArguments, width, height, customWindowParameters)
{
    this.$s_0 = url;
    this.$2g_0 = windowArguments;
    this.$A_0 = height;
    this.$C_0 = width;
    this.$R_0 = Number.NaN;
    this.$M_0 = Number.NaN;
    this.$5S_0 = Number.NaN;
    this.$3p_0 = false;
    this.$6N_0 = true;
    this.$66_0 = customWindowParameters
};
Mscrm.CrmDialog.prototype = {
    $s_0: null,
    $2g_0: null,
    $A_0: 0,
    $C_0: 0,
    $M_0: 0,
    $R_0: 0,
    $5S_0: 0,
    $3p_0: false,
    $6N_0: false,
    $66_0: null,
    $2C_0: null,
    $2J_0: null,
    $4z_0: null,
    setCallbackInfo: function(name, context, parameters)
    {
        if(!IsNull(name)) this.$2C_0 = Mscrm.Utilities.createCallbackFunctionObject(name, context, parameters, false)
    },
    setCallbackReference: function(callbackReference)
    {
        this.$2C_0 = callbackReference
    },
    setInternalCallbackReference: function(internalCallbackReference)
    {
        this.$2J_0 = internalCallbackReference
    },
    setInitFunctionName: function(initFunctionName)
    {
        this.$4z_0 = initFunctionName
    },
    setPosition: function(left, top)
    {
        this.$R_0 = left;
        this.$M_0 = top
    },
    setZIndex: function(zindex)
    {
        this.$5S_0 = zindex
    },
    show: function()
    {
        if(isOutlookHostedWindow())
        {
            var $v_0 = openStdDlg(this.$s_0, this.$2g_0, this.$C_0, this.$A_0, this.$6N_0, this.$3p_0, this.$66_0);
            if(!IsNull(this.$2C_0)) $v_0 = Mscrm.Utilities.executeFunction(this.$2C_0, $v_0);
            return $v_0
        }
        else return this.showInlineDialog()
    },
    showInlineDialog: function()
    {
        if(IsNull(this.$2g_0)) this.$2g_0 = "";
        var $v_0 = this.$2g_0;
        if(!IsNull(this.$2C_0))
        {
            $v_0 = {};
            $v_0.passedArguments = this.$2g_0;
            $v_0.callbackFunction = this.$2C_0
        }
        if(!IsNull(this.$2J_0))
        {
            $v_0 = {};
            $v_0.internalCallbackReference = this.$2J_0
        }
        if(!IsNull(this.$4z_0))
        {
            if(IsNull($v_0)) $v_0 = {};
            $v_0.initFunctionName = this.$4z_0
        }
        if(!this.$s_0.get_isWebResource())
        {
            var $v_1 = "1",
                $v_2 = Mscrm.CrmUri.create(window.self.location.href),
                $v_3 = "HideMasthead" in $v_2.get_query() ? $v_2.get_query()["HideMasthead"] : null,
                $v_4 = $v_3 === "true";
            if(Mscrm.InlineDialogUtility.isMobileClient() && !$v_4) $v_1 = "2";
            this.$s_0.setQueryParameter("dType", $v_1)
        }
        Mscrm.InlineDialogUtility.createInlineDialog(this.$s_0, $v_0, this.$C_0, this.$A_0, this.$R_0, this.$M_0, this.$5S_0);
        return null
    }
};
Mscrm.ReturnFunctionReference = function() {};
Mscrm.ReturnFunctionReference.prototype = {
    content: null,
    callback: null
};
Mscrm.DateTimeUtility = function() {};
Mscrm.DateTimeUtility.get_$Am = function()
{
    return !!window._useTaiwanCalendar
};
Mscrm.DateTimeUtility.getCalendarYear = function(value)
{
    var $v_0 = new Date(value.getFullYear(), value.getMonth(), value.getDate()),
        $v_1 = Mscrm.Utilities.trimStart(value.localeFormat("yyyy"), ["0"]),
        $v_2 = Mscrm.DateTimeUtility.$7Q(Sys.CultureInfo.CurrentCulture);
    if($v_2.indexOf("g") === -1) return $v_1;
    $v_0.setDate(1);
    var $v_3 = $v_0.localeFormat("gg");
    return String.format(LOCID_YEAR_DISPLAYFORMAT, $v_3, $v_1)
};
Mscrm.DateTimeUtility.formatDate = function(value, format)
{
    var $v_0 = value.localeFormat(isNullOrEmptyString(format) ? "d" : format);
    if(isNullOrEmptyString($v_0))
    {
        alert(LOCID_ALERT_ACTUAL_DATE_FAIL);
        return null
    }
    else if(Mscrm.DateTimeUtility.get_$Am())
    {
        var $v_1 = value.localeFormat("yyyy");
        if($v_0.indexOf($v_1) > -1)
        {
            var $v_2 = $v_1.length - 2,
                $v_3 = 0;
            while($v_3 < $v_2 && $v_1.charAt($v_3) === "0") $v_3++;
            if($v_3 > 0)
            {
                var $v_4 = $v_1.substr($v_3);
                $v_0 = $v_0.replace($v_1, $v_4)
            }
        }
    }
    return $v_0
};
Mscrm.DateTimeUtility.localDateTimeNow = function()
{
    var $v_0 = new Date;
    $v_0.setMinutes($v_0.getMinutes() + $v_0.getTimezoneOffset() + window.ORG_TIMEZONE_OFFSET);
    return $v_0
};
Mscrm.DateTimeUtility.parseDate = function(value, noAlert, dateTimeElement)
{
    if(isNullOrEmptyString(value)) return null;
    var $v_0 = Mscrm.NumberUtility.fullWidthToHalfWidth(value),
        $v_1 = Sys.CultureInfo.CurrentCulture,
        $v_2 = Mscrm.DateTimeUtility.$4a($v_0, $v_1, "d");
    if(!$v_2)
    {
        var $v_3 = Mscrm.DateTimeUtility.$7Q($v_1);
        if($v_3.indexOf("g") > -1)
        {
            var $v_6 = $v_3.replace(new RegExp("\\s*g+\\s*"), "");
            $v_2 = Mscrm.DateTimeUtility.$4a($v_0, $v_1, $v_6)
        }
        var $v_4 = new RegExp("y{4}");
        if(!$v_2 && $v_4.test($v_3))
        {
            var $v_7 = $v_3.replace($v_4, "yy");
            $v_2 = Mscrm.DateTimeUtility.$4a($v_0, $v_1, $v_7)
        }
        var $v_5 = window._fallbackCultureInfo;
        if(!$v_2 && !IsNull($v_5))
        {
            var $v_8 = new RegExp("^[0-9]"),
                $v_9 = new RegExp("[0-9]{4}");
            if($v_8.test($v_0) && $v_9.test($v_0)) $v_2 = Mscrm.DateTimeUtility.$4a($v_0, $v_5, "d")
        }
    }
    if(!$v_2)
    {
        var $v_A = new RemoteCommand("DateTimeService", "GetActualDate");
        $v_A.ErrorHandler = function($p1_0, $p1_1) {};
        $v_A.SetParameter("date", $v_0);
        var $v_B = $v_A.Execute();
        if($v_B.Success && !isNullOrEmptyString($v_B.ReturnValue)) $v_2 = new Date($v_B.ReturnValue)
    }
    if(!$v_2 || $v_2 < Mscrm.DateTimeUtility.$6T || Mscrm.DateTimeUtility.$6S < $v_2)
    {
        if(!noAlert)
        {
            if(!IsNull(dateTimeElement))
            {
                dateTimeElement.setAttribute("ValidationFailed", true);
                window.setTimeout(function()
                {
                    dateTimeElement.removeAttribute("ValidationFailed")
                }, 50)
            }
            alert(String.format(LOCID_ALERT_ENTER_VALID_DATE, window.USER_DATE_FORMATTED_FORMATSTRING))
        }
        return null
    }
    return $v_2
};
Mscrm.DateTimeUtility.today = function()
{
    var $v_0 = Mscrm.DateTimeUtility.localDateTimeNow();
    return new Date($v_0.getFullYear(), $v_0.getMonth(), $v_0.getDate())
};
Mscrm.DateTimeUtility.getDateOnly = function(dateTime)
{
    return new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate())
};
Mscrm.DateTimeUtility.$7Q = function($p0)
{
    return $p0.dateTimeFormat["ShortDatePattern"]
};
Mscrm.DateTimeUtility.$4a = function($p0, $p1, $p2)
{
    if($p1 === Sys.CultureInfo.CurrentCulture) return Date.parseLocale($p0, $p2);
    else if(Date._parse) return Date._parse($p0, $p1, [null, $p2]);
    return null
};
Mscrm.DateTimeUtility.generateForDurationControl = function()
{
    var $v_0 = new Array(0);
    Array.add($v_0, "");
    Array.add($v_0, String.format(window.LOCID_ONE_MINUTE_MASK, Mscrm.NumberUtility.addFormatting(1, 0)));
    Array.add($v_0, String.format(window.LOCID_N_MINUTES_MASK, Mscrm.NumberUtility.addFormatting(15, 0)));
    Array.add($v_0, String.format(window.LOCID_N_MINUTES_MASK, Mscrm.NumberUtility.addFormatting(30, 0)));
    Array.add($v_0, String.format(window.LOCID_N_MINUTES_MASK, Mscrm.NumberUtility.addFormatting(45, 0)));
    Array.add($v_0, String.format(window.LOCID_ONE_HOUR_MASK, Mscrm.NumberUtility.addFormatting(1, 0)));
    Array.add($v_0, String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(1.5, 1)));
    Array.add($v_0, String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(2, 0)));
    Array.add($v_0, String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(2.5, 1)));
    Array.add($v_0, String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(3, 0)));
    Array.add($v_0, String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(3.5, 1)));
    Array.add($v_0, String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(4, 0)));
    Array.add($v_0, String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(4.5, 1)));
    Array.add($v_0, String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(5, 0)));
    Array.add($v_0, String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(5.5, 1)));
    Array.add($v_0, String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(6, 0)));
    Array.add($v_0, String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(6.5, 1)));
    Array.add($v_0, String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(7, 0)));
    Array.add($v_0, String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(7.5, 1)));
    Array.add($v_0, String.format(window.LOCID_N_HOURS_MASK, Mscrm.NumberUtility.addFormatting(8, 0)));
    Array.add($v_0, String.format(window.LOCID_ONE_DAY_MASK, Mscrm.NumberUtility.addFormatting(1, 0)));
    Array.add($v_0, String.format(window.LOCID_N_DAYS_MASK, Mscrm.NumberUtility.addFormatting(2, 0)));
    Array.add($v_0, String.format(window.LOCID_N_DAYS_MASK, Mscrm.NumberUtility.addFormatting(3, 0)));
    return $v_0
};
Mscrm.DateTimeUtility.getUtcValue = function(initialValue)
{
    if(!IsNull(initialValue) && !isNaN(initialValue.getTime()))
    {
        var $v_0 = window.ORG_TIMEZONE_OFFSET * 6e4,
            $v_1 = initialValue.getTimezoneOffset() * 6e4;
        return new Date(initialValue.getTime() - $v_0 - $v_1)
    }
    return null
};

function LocalDateTimeNow()
{
    return Mscrm.DateTimeUtility.localDateTimeNow()
}
Mscrm.CrmDebug = function() {};
Mscrm.CrmDebug.assert = function(condition, errorMessage) {};
Mscrm.CrmDebug.fail = function(errorMessage) {};
Mscrm.DeferredActionHandlerFactory = function() {};
Mscrm.DeferredActionHandlerFactory.create = function(id)
{
    if(IsNull(id)) return Mscrm.DefaultDeferredActionHandler.get_instance();
    var $v_0 = Mscrm.DefaultDeferredActionHandler.get_instance();
    switch(id)
    {
        case "RecordUpdated":
            $v_0 = Mscrm.RecordUpdatedHandler.get_instance();
            break
    }
    return $v_0
};
Mscrm.DefaultDeferredActionHandler = function() {};
Mscrm.DefaultDeferredActionHandler.get_instance = function()
{
    var $v_0 = null;
    if(IsNull($v_0)) $v_0 = new Mscrm.DefaultDeferredActionHandler;
    return $v_0
};
Mscrm.DefaultDeferredActionHandler.prototype = {
    handleDeferredAction: function(parameters, extraParams)
    {
        if(IsNull(parameters["eventCode"])) return;
        if(!IsNull(parameters["uri"]) && !IsNull(extraParams["appendqs"]))
        {
            var $v_1 = Mscrm.CrmUri.create(parameters["uri"]);
            $v_1.appendToQuery(extraParams["appendqs"]);
            parameters["uri"] = $v_1.toString()
        }
        var $v_0 = parameters["eventCode"];
        Mscrm.PageManager.get_instance().raiseEvent($v_0, parameters)
    }
};
Mscrm.RecordUpdatedHandler = function() {};
Mscrm.RecordUpdatedHandler.$7B = function($p0)
{
    var $v_0 = $p0["appendqs"].toString();
    if(!isNullOrEmptyString($v_0))
    {
        $v_0 = $v_0.substr(1);
        var $v_1 = $v_0.split("=");
        return $v_1
    }
    return null
};
Mscrm.RecordUpdatedHandler.get_instance = function()
{
    var $v_0 = null;
    if(IsNull($v_0)) $v_0 = new Mscrm.RecordUpdatedHandler;
    return $v_0
};
Mscrm.RecordUpdatedHandler.prototype = {
    handleDeferredAction: function(parameters, extraParams)
    {
        var $v_0 = parameters["isNew"];
        if($v_0)
        {
            var $v_9 = {};
            $v_9["Id"] = extraParams["newId"];
            $v_9["TypeCode"] = parameters["etc"];
            $v_9["Name"] = parameters["title"];
            $v_9["TypeName"] = extraParams["etn"];
            Mscrm.Utilities.refreshParentLookup($v_9)
        }
        if(Mscrm.NavigationMode.DefaultNavigationMode === 1)
        {
            var $v_A = extraParams["isNew"],
                $v_B = extraParams["newId"];
            if($v_A && !IsNull($v_B) && $v_B.length > 0)
            {
                var $v_C = {};
                $v_C["updateQueryString"] = String.format("id={0}", $v_B);
                Mscrm.PageManager.get_instance().raiseEvent(43, $v_C)
            }
        }
        var $v_1 = parameters["etc"],
            $v_2 = parameters["title"],
            $v_3 = parameters["id"];
        if(parameters["isNew"]) $v_3 = extraParams["newId"];
        Mscrm.Utilities.refreshParentGrid($v_1, $v_2, $v_3);
        var $v_4 = {};
        $v_4["Id"] = $v_3;
        $v_4["otc"] = parameters["etc"];
        $v_4["etn"] = parameters["etn"];
        $v_4["entitydisplayname"] = parameters["entitydisplayname"];
        $v_4["title"] = $v_2;
        Mscrm.PageManager.get_instance().raiseEvent(51, $v_4);
        Mscrm.DefaultDeferredActionHandler.get_instance().handleDeferredAction(parameters, extraParams);
        var $v_5 = parameters["action"];
        switch($v_5)
        {
            case "save":
                var $v_6 = parameters["refreshOnSave"];
                if(!IsNull($v_6) && $v_6)
                {
                    var $v_D = false,
                        $v_E = Mscrm.CrmUri.create(window.top.location.href),
                        $v_F = null;
                    if($v_E.get_path().endsWith("/main.aspx"))
                    {
                        var $v_G = $v_E.get_query()["extraqs"];
                        $v_F = Mscrm.CrmUri.create("");
                        if(!IsNull($v_G))
                        {
                            $v_F.appendToQuery($v_G);
                            delete $v_F.get_query().preloadcache
                        }
                        if(IsNull($v_F.get_query()["id"])) $v_D = true
                    }
                    if($v_D && parameters["isNew"])
                    {
                        $v_F.get_query()["etc"] = $v_1;
                        $v_F.get_query()["pagemode"] = "iframe";
                        $v_F.get_query()["id"] = extraParams["newId"];
                        $v_E.get_query()["extraqs"] = $v_F.toString();
                        var $v_H = extraParams["rof"];
                        if(!isNullOrEmptyString($v_H)) $v_E.get_query()["rof"] = $v_H;
                        window.top.location.replace($v_E.toString());
                        break
                    }
                    else
                    {
                        var $v_I = Mscrm.CrmUri.create(parameters["uri"]);
                        delete $v_I.get_query().preloadcache;
                        var $v_J = parameters["isNew"];
                        if($v_J)
                        {
                            var $v_L = extraParams["newId"];
                            $v_I.get_query()["id"] = $v_L
                        }
                        if(!IsNull($v_3) && IsNull($v_I.get_query()["id"])) $v_I.get_query()["id"] = $v_3;
                        if($v_1 === 1010 && !IsNull($v_3) && !IsNull($v_I.get_query()["id"]))
                            if($v_I.get_query()["id"].toString() !== $v_3) $v_I.get_query()["id"] = $v_3;
                        var $v_K = {};
                        $v_K["uri"] = $v_I.toString();
                        if(Mscrm.PageManager.$3q) Mscrm.PageManager.get_instance().raiseEvent(22, $v_K);
                        else
                        {
                            var $$t_T = this;
                            window.setTimeout(function()
                            {
                                Mscrm.PageManager.get_instance().raiseEvent(22, $v_K)
                            }, 0)
                        }
                    }
                }
                break;
            case "saveandclose":
                closeWindow();
                break;
            case "delete":
                Mscrm.Utilities.closeCurrentWindow();
                break;
            case "saveandnew":
                parameters["sameWindow"] = true;
                var $v_7 = null,
                    $v_8 = Mscrm.CrmUri.create("");
                if(!IsNull(parameters["_CreateFromType"]) && !IsNull(parameters["_CreateFromId"]))
                {
                    $v_8.get_query()["_CreateFromType"] = parameters["_CreateFromType"].toString();
                    $v_8.get_query()["_CreateFromId"] = parameters["_CreateFromId"].toString();
                    if($v_1 === 3234)
                    {
                        if(IsNull(parameters["pId"])) $v_8.get_query()["pId"] = parameters["_CreateFromId"].toString();
                        if(IsNull(parameters["pType"])) $v_8.get_query()["pType"] = parameters["_CreateFromType"].toString()
                    }
                }
                if(!IsNull(parameters["pId"]) && !IsNull(parameters["pType"]))
                {
                    if(!IsNull(parameters["pName"])) $v_8.get_query()["pName"] = parameters["pName"].toString();
                    $v_8.get_query()["pId"] = parameters["pId"].toString();
                    $v_8.get_query()["pType"] = parameters["pType"].toString()
                }
                if(!IsNull(extraParams["partyid"]) && !IsNull(extraParams["partyname"]) && !IsNull(extraParams["partytype"]))
                {
                    $v_8.get_query()["partyid"] = extraParams["partyid"].toString();
                    $v_8.get_query()["partyname"] = extraParams["partyname"].toString();
                    $v_8.get_query()["partytype"] = extraParams["partytype"].toString()
                }
                switch($v_1)
                {
                    case 1071:
                    case 1011:
                    case 1013:
                    case 1089:
                    case 1091:
                    case 1083:
                    case 1085:
                    case 1055:
                        var $$dict_O = extraParams;
                        for(var $$key_P in $$dict_O)
                        {
                            var $v_M = {
                                key: $$key_P,
                                value: $$dict_O[$$key_P]
                            };
                            if($v_M.key !== "etc" && $v_M.key !== "pagemode")
                                if($v_M.key === "appendqs")
                                {
                                    var $v_N = Mscrm.RecordUpdatedHandler.$7B(extraParams);
                                    if($v_N) $v_8.get_query()[$v_N[0]] = $v_N[1]
                                }
                                else $v_8.get_query()[$v_M.key] = extraParams[$v_M.key]
                        }
                        break;
                    case 3234:
                        if(!IsNull(extraParams["connectToMe"])) $v_8.get_query()["connectToMe"] = extraParams["connectToMe"].toString();
                        else if(!IsNull(extraParams["appendqs"]))
                        {
                            var $v_O = Mscrm.RecordUpdatedHandler.$7B(extraParams);
                            if(!!(!IsNull($v_O) & $v_O[0] === "connectToMe")) $v_8.get_query()["connectToMe"] = $v_O[1]
                        }
                        break
                }
                $v_7 = $v_8.get_queryString();
                openObj($v_1, null, $v_7, null, 1, parameters);
                $v_1 === 1010 && IsNull(parameters["_CreateFromType"]) && closeWindow();
                break
        }
    }
};
Mscrm.Display = function(width, height)
{
    this.$A_0 = height;
    this.$C_0 = width
};
Mscrm.Display.prototype = {
    $A_0: 0,
    $C_0: 0,
    get_height: function()
    {
        if(!this.$A_0) return window.screen.availHeight >= 600 ? 560 : 510;
        else if(this.$A_0 === window.screen.availHeight)
            if(Mscrm.Utilities.isChrome()) return this.$A_0 - 64;
            else if(Mscrm.Utilities.isIE10()) return this.$A_0 - 70;
        else if(Mscrm.Utilities.isIE9()) return this.$A_0 - 65;
        else if(Mscrm.Utilities.isIE()) return this.$A_0 - 50;
        return Math.min(this.$A_0, window.screen.availHeight)
    },
    get_width: function()
    {
        if(!this.$C_0) return window.screen.availWidth >= 1e3 ? 820 : 750;
        else if(this.$A_0 === window.screen.availHeight)
            if(Mscrm.Utilities.isChrome() || Mscrm.Utilities.isIE7()) return this.$C_0 - 5;
        return Math.min(this.$C_0, window.screen.availWidth)
    },
    get_top: function()
    {
        var $v_0 = this.get_height() + 40,
            $v_1 = 0;
        if(window.screen.availHeight - $v_0 > 0) $v_1 = (window.screen.availHeight - $v_0) / 2;
        return $v_1
    },
    get_left: function()
    {
        var $v_0 = 0;
        if(window.screen.availWidth - this.get_width() > 0) $v_0 = (window.screen.availWidth - this.get_width()) / 2;
        return $v_0
    }
};
Mscrm.ErrorInformation = function($p0)
{
    this.$2s_0 = "";
    this.$58_0 = "Not available";
    this.$4o_0 = "Not available";
    this.$5G_0 = "";
    this.$5K_0 = "";
    this.$5L_0 = "";
    this.$4q_0 = "";
    this.$4p_0 = "";
    this.$49_0 = "";
    this.$42_0 = "";
    !IsNull($p0) && this.$9t_0($p0)
};
Mscrm.ErrorInformation.createFromDoc = function(node)
{
    return new Mscrm.ErrorInformation(node)
};
Mscrm.ErrorInformation.createErrorInfo = function(code, msg, serializedException)
{
    var $v_0 = new Mscrm.ErrorInformation(null);
    $v_0.$2E_0 = code;
    $v_0.$2s_0 = msg;
    $v_0.$49_0 = serializedException;
    return $v_0
};
Mscrm.ErrorInformation.createExtendedErrorInfo = function(code, msg, serializedException, otherParameters)
{
    var $v_0 = Mscrm.ErrorInformation.createErrorInfo(code, msg, serializedException);
    if(otherParameters && otherParameters.length > 0)
    {
        $v_0.$1b_0 = {};
        for(var $v_1 = 0; $v_1 < otherParameters.length; $v_1++) $v_0.$1b_0[$v_1.toString()] = otherParameters[$v_1]
    }
    return $v_0
};
Mscrm.ErrorInformation.formatMessageWithParameters = function(message, parameters)
{
    if(parameters && message)
    {
        var $v_0 = [],
            $$dict_3 = parameters;
        for(var $$key_4 in $$dict_3)
        {
            var $v_1 = {
                key: $$key_4,
                value: $$dict_3[$$key_4]
            };
            if(!IsNull(parameters[$v_1.key])) $v_0[Number.parseInvariant($v_1.key)] = $v_1.value;
            else break
        }
        if($v_0.length === 2) message = String.format(message, $v_0[0], $v_0[1]);
        else if($v_0.length === 3) message = String.format(message, $v_0[0], $v_0[1], $v_0[2]);
        else if($v_0.length === 4) message = String.format(message, $v_0[0], $v_0[1], $v_0[2], $v_0[3]);
        else if($v_0.length === 5) message = String.format(message, $v_0[0], $v_0[1], $v_0[2], $v_0[3], $v_0[4]);
        else message = String.format(message, $v_0)
    }
    return message
};
Mscrm.ErrorInformation.prototype = {
    $2E_0: null,
    $1b_0: null,
    $9t_0: function($p0)
    {
        var $v_0 = XUI.Xml.SelectSingleNode($p0, "error", null);
        if(!IsNull($v_0))
        {
            this.$2E_0 = Mscrm.XmlUtil.getNodeText($v_0, "code", null);
            this.$2s_0 = CrmEncodeDecode.CrmHtmlEncode(Mscrm.XmlUtil.getNodeText($v_0, "description", ""));
            this.$58_0 = Mscrm.XmlUtil.getNodeText($v_0, "line", "Not available");
            this.$4o_0 = Mscrm.XmlUtil.getNodeText($v_0, "details", "Not available");
            this.$5G_0 = Mscrm.XmlUtil.getNodeText($v_0, "requesturl", "");
            this.$5K_0 = Mscrm.XmlUtil.getNodeText($v_0, "source", "");
            this.$5L_0 = Mscrm.XmlUtil.getNodeText($v_0, "stacktrace", "");
            this.$4q_0 = Mscrm.XmlUtil.getNodeText($v_0, "displaytitle", "");
            this.$4p_0 = Mscrm.XmlUtil.getNodeText($v_0, "displaytext", "");
            this.$49_0 = Mscrm.XmlUtil.getNodeText($v_0, "exception", "");
            this.$42_0 = Mscrm.XmlUtil.getNodeText($v_0, "pathAndQuery", "");
            this.$1b_0 = this.$96_0($v_0, "parameters")
        }
    },
    $96_0: function($p0, $p1)
    {
        var $v_0 = XUI.Xml.SelectSingleNode($p0, $p1, null);
        if(!IsNull($v_0))
        {
            var $v_1 = {},
                $v_2 = 0,
                $$t_7 = this,
                $v_3 = function($p1_0)
                {
                    $v_1[$v_2.toString()] = XUI.Xml.GetText($p1_0);
                    $v_2++;
                    return false
                };
            XUI.Xml.DomUtils.ForEachChild($v_0, $v_3);
            return $v_1
        }
        return null
    },
    get_description: function()
    {
        return this.$2s_0
    },
    get_line: function()
    {
        return this.$58_0
    },
    get_details: function()
    {
        return this.$4o_0
    },
    get_code: function()
    {
        return this.$2E_0
    },
    get_requesturl: function()
    {
        return this.$5G_0
    },
    get_source: function()
    {
        return this.$5K_0
    },
    get_stacktrace: function()
    {
        return this.$5L_0
    },
    get_displaytitle: function()
    {
        return this.$4q_0
    },
    get_displaytext: function()
    {
        return this.$4p_0
    },
    get_pathAndQuery: function()
    {
        return this.$42_0
    },
    get_serializedException: function()
    {
        return this.$49_0
    },
    get_parameters: function()
    {
        return this.$1b_0
    },
    formatMessage: function(message)
    {
        return Mscrm.ErrorInformation.formatMessageWithParameters(message, this.$1b_0)
    }
};
Mscrm.EventManager = function()
{
    this._eventSubscribers = {};
    Mscrm.EventManager.initializeBase(this)
};
Mscrm.EventManager.prototype = {
    $4t_1: 0,
    isEventing: function()
    {
        if(IsNull(this.$b_1)) return !!this.$4t_1;
        else return this.$b_1.isEventing()
    },
    subscribeEvent: function(eventCode, controlId)
    {
        var $v_0 = "SE" + eventCode.toString();
        if(IsNull(this._eventSubscribers[$v_0])) this._eventSubscribers[$v_0] = [];
        var $v_1 = this._eventSubscribers[$v_0];
        $v_1[$v_1.length] = controlId
    },
    $1w_1: false,
    get_isTransient: function()
    {
        return this.$1w_1
    },
    set_isTransient: function(value)
    {
        this.$1w_1 = value;
        return value
    },
    $22_1: null,
    get_transientId: function()
    {
        return this.$22_1
    },
    set_transientId: function(value)
    {
        this.$22_1 = value;
        return value
    },
    $b_1: null,
    get_parentEventManager: function()
    {
        return this.$b_1
    },
    set_parentEventManager: function(value)
    {
        this.$b_1 = value;
        return value
    },
    get_parentEventManagerId: function()
    {
        if(!IsNull(this.$b_1)) return this.$b_1.get_id();
        else return null
    },
    set_parentEventManagerId: function(value)
    {
        this.$b_1 = $find(value);
        return value
    },
    $2n_1: null,
    get_childEventManagerIds: function()
    {
        return this.$2n_1
    },
    set_childEventManagerIds: function(value)
    {
        this.$2n_1 = value;
        return value
    },
    get_eventSubscribers: function()
    {
        return null
    },
    set_eventSubscribers: function(value)
    {
        for(var $v_0 = value, $v_1 = 0; $v_1 < $v_0.length; $v_1++)
        {
            var $v_2 = $v_0[$v_1].split("|"),
                $v_3 = parseInt($v_2[0], 10),
                $v_4 = $v_2[1].split(","),
                $v_5 = "SE" + $v_3.toString();
            this._eventSubscribers[$v_5] = $v_4
        }
        return value
    },
    $5s_1: function($p0, $p1, $p2, $p3, $p4)
    {
        var $v_0 = [],
            $v_1 = "SE" + $p0.toString(),
            $v_2 = this._eventSubscribers[$v_1];
        if(!IsNull($v_2))
            for(var $v_3 = 0; $v_3 < $v_2.length; $v_3++)
            {
                var $v_4 = $v_2[$v_3].trim();
                if($p3 && ($p2 && $v_4 === $p2.get_id())) continue;
                var $v_5 = $find($v_4);
                if($v_5 || !Mscrm.PageManager.$1x) try
                {
                    var $v_6 = $v_5.handleEvent($p0, $p1, $p2);
                    $v_0[$v_0.length] = $v_6
                }
                catch($v_7)
                {
                    catchError($v_7.message, window.location.href, 0, true, $p4, $v_7.number)
                }
            }
        return $v_0
    },
    $5r_1: function($p0, $p1, $p2, $p3, $p4)
    {
        var $v_0 = [];
        if(!IsNull(this.$2n_1))
            for(var $v_1 = 0; $v_1 < this.$2n_1.length; $v_1++)
            {
                var $v_2 = this.$2n_1[$v_1].trim();
                if($p4 && $v_2 === $p3) continue;
                var $v_3 = $find($v_2);
                if($v_3 || !Mscrm.PageManager.$1x)
                {
                    var $v_4 = $v_3.propogateEvent($p0, $p1, $p2, this.get_id());
                    $v_0 = $v_0.concat($v_4)
                }
            }
        if(!IsNull(this.$1Q_1))
        {
            var $$dict_A = this.$1Q_1;
            for(var $$key_B in $$dict_A)
            {
                var $v_5 = {
                        key: $$key_B,
                        value: $$dict_A[$$key_B]
                    },
                    $v_6 = $v_5.key;
                if($p4 && $v_6 === $p3) continue;
                var $v_7 = $v_5.value;
                try
                {
                    var $v_8 = $v_7.propogateEvent($p0, $p1, $p2, this.get_id());
                    $v_0 = $v_0.concat($v_8)
                }
                catch($$e_G)
                {}
            }
        }
        return $v_0
    },
    raiseEvent: function(eventCode, parameters, sourceComponent)
    {
        var $v_0 = false;
        try
        {
            if(window.location.href.toUpperCase().indexOf("OUTLOOK://") >= 0) $v_0 = true
        }
        catch($$e_4)
        {
            return []
        }
        if(IsNull(this.$b_1)) this.$4t_1++;
        var $v_1 = [],
            $v_2;
        try
        {
            switch(eventCode)
            {
                case 0:
                    if(!IsNull(this.$1Q_1))
                    {
                        var $v_4 = this.get_id() + " has tcemid = ",
                            $$dict_8 = this.$1Q_1;
                        for(var $$key_9 in $$dict_8)
                        {
                            var $v_5 = {
                                key: $$key_9,
                                value: $$dict_8[$$key_9]
                            };
                            $v_4 += $v_5.key + ","
                        }
                        alert($v_4)
                    }
                    break
            }
            var $v_3 = arguments.caller;
            $v_2 = this.$5s_1(eventCode, parameters, sourceComponent, true, $v_3);
            $v_1 = $v_1.concat($v_2);
            $v_2 = this.$5r_1(eventCode, parameters, sourceComponent, this.get_id(), false);
            $v_1 = $v_1.concat($v_2);
            if(!$v_0 && !IsNull(this.$b_1))
            {
                $v_2 = this.$b_1.bubbleEvent(eventCode, parameters, sourceComponent, this.$1w_1 ? this.$22_1 : this.get_id(), $v_3);
                $v_1 = $v_1.concat($v_2)
            }
        }
        catch($v_6)
        {
            catchError($v_6.message, window.location.href, 0, true, null, $v_6.number)
        }
        finally
        {
            if(IsNull(this.$b_1)) this.$4t_1--
        }
        return $v_1
    },
    propogateEvent: function(eventCode, parameters, sourceComponent, sourceEventManagerId)
    {
        var $v_0 = [],
            $v_1;
        $v_1 = this.$5s_1(eventCode, parameters, sourceComponent, false, arguments.caller);
        $v_0 = $v_0.concat($v_1);
        $v_1 = this.$5r_1(eventCode, parameters, sourceComponent, sourceEventManagerId, false);
        $v_0 = $v_0.concat($v_1);
        return $v_0
    },
    bubbleEvent: function(eventCode, parameters, sourceComponent, sourceEventManagerId, caller)
    {
        var $v_0 = [],
            $v_1;
        $v_1 = this.$5s_1(eventCode, parameters, sourceComponent, true, caller);
        $v_0 = $v_0.concat($v_1);
        $v_1 = this.$5r_1(eventCode, parameters, sourceComponent, sourceEventManagerId, true);
        $v_0 = $v_0.concat($v_1);
        if(!IsNull(this.$b_1))
        {
            $v_1 = this.$b_1.bubbleEvent(eventCode, parameters, sourceComponent, this.$1w_1 ? this.$22_1 : this.get_id(), caller);
            $v_0 = $v_0.concat($v_1)
        }
        return $v_0
    },
    $86_1: 0,
    $1Q_1: null,
    registerTransientChildEventManager: function(childEventManager)
    {
        if(IsNull(this.$1Q_1)) this.$1Q_1 = {};
        var $v_0 = this.get_id() + "$tcem" + this.$86_1.toString();
        this.$86_1++;
        this.$1Q_1[$v_0] = childEventManager;
        return $v_0
    },
    unregisterTransientChildEventManager: function(uniqueRegisteredId)
    {
        if(IsNull(this.$1Q_1)) return;
        delete this.$1Q_1[uniqueRegisteredId]
    },
    dispose: function()
    {
        Sys.Component.prototype.dispose.call(this)
    }
};
Mscrm.ExceptionInformation = function() {};
Mscrm.ExceptionInformation.prototype = {
    RedirectToEdit: false,
    ErrorCode: 0,
    DisplayText: null
};
Mscrm.FloatingDialog = function() {};
Mscrm.FloatingDialog.getHostingElement = function(hostingElementId, url, width, height)
{
    var $v_0 = window.top.document.getElementById(hostingElementId);
    if(IsNull($v_0)) $v_0 = Mscrm.FloatingDialog.$6w(hostingElementId);
    var $v_1 = Mscrm.FloatingDialog.getHostingIFrameId(hostingElementId),
        $v_2 = window.top.document.getElementById($v_1);
    $v_2.style.height = height + "px";
    $v_2.style.width = width + "px";
    $v_2.setAttribute("src", url.toString());
    $v_0.style.top = "50%";
    $v_0.style.marginTop = -(height / 2) + "px";
    $v_0.style.left = "50%";
    $v_0.style.marginLeft = -(width / 2) + "px";
    return $v_0
};
Mscrm.FloatingDialog.registerMaintainFocusOnFloatingDialog = function()
{
    if(!window.UseTabletExperience) return;
    !Mscrm.FloatingDialog.$3N && $addHandler(window.top, "focus", Mscrm.FloatingDialog.$7a);
    Mscrm.FloatingDialog.$3N++
};
Mscrm.FloatingDialog.unregisterMaintainFocusOnFloatingDialog = function()
{
    if(!window.UseTabletExperience) return;
    Mscrm.FloatingDialog.$3N === 1 && $removeHandler(window.top, "focus", Mscrm.FloatingDialog.$7a);
    Mscrm.FloatingDialog.$3N--
};
Mscrm.FloatingDialog.close = function(hostingElementId)
{
    var $v_0 = Mscrm.FloatingDialog.$7G(hostingElementId),
        $v_1 = window.top.document.getElementById($v_0),
        $v_2 = window.top.document.getElementById(hostingElementId);
    if(window.self !== window.top && !IsNull(window.top.Mscrm.FloatingDialog))
    {
        if(!IsNull($v_1))
        {
            $removeHandler($v_1, "touchstart", Mscrm.FloatingDialog.stopTouchMoveEvents);
            $removeHandler($v_1, "touchmove", Mscrm.FloatingDialog.stopTouchMoveEvents);
            window.top.Mscrm.FloatingDialog.unregisterMaintainFocusOnFloatingDialog();
            $v_1.style.display = "none"
        }
        if(!IsNull($v_2)) $v_2.style.display = "none";
        window.top.setTimeout(function()
        {
            window.top.Mscrm.FloatingDialog.close(hostingElementId)
        }, 1500);
        return
    }!IsNull($v_1) && window.top.document.body.removeChild($v_1);
    !IsNull($v_2) && window.top.document.body.removeChild($v_2)
};
Mscrm.FloatingDialog.$6v = function($p0)
{
    var $v_0 = Mscrm.FloatingDialog.$7G($p0),
        $v_1 = document.createElement("div");
    $v_1.id = $v_0;
    window.top.document.body.appendChild($v_1);
    $v_1.style.position = "absolute";
    var $v_2 = 2e3,
        $v_3 = parseInt(Mscrm.FloatingDialog.$9T());
    if($v_3 > $v_2) $v_2 = $v_3 + 1;
    $v_1.style.zIndex = $v_2;
    $v_1.style.width = "100%";
    $v_1.style.height = "100%";
    $v_1.style.top = "0px";
    XUI.Html.SetOpacity($v_1, .5);
    $v_1.style.backgroundColor = "gray";
    $addHandler($v_1, "touchstart", Mscrm.FloatingDialog.stopTouchMoveEvents);
    $addHandler($v_1, "touchmove", Mscrm.FloatingDialog.stopTouchMoveEvents);
    window.top.Mscrm.FloatingDialog.registerMaintainFocusOnFloatingDialog();
    return $v_1
};
Mscrm.FloatingDialog.$7a = function($p0)
{
    var $v_0 = Mscrm.FloatingDialog.$7T();
    if(!IsNull($v_0))
    {
        var $v_1 = Mscrm.FloatingDialog.getHostingIFrameId($v_0.id);
        window.setTimeout(function()
        {
            var $v_2 = window.top.document.getElementById($v_1);
            !IsNull($v_2) && !IsNull($v_2.contentWindow) && !IsNull($v_2.contentWindow.focus) && $v_2.contentWindow.focus()
        }, 0)
    }
};
Mscrm.FloatingDialog.stopTouchMoveEvents = function(eventArgs)
{
    eventArgs.stopPropagation();
    eventArgs.preventDefault()
};
Mscrm.FloatingDialog.$6w = function($p0)
{
    var $v_0 = Mscrm.FloatingDialog.$6v($p0),
        $v_1 = document.createElement("div");
    $v_1.id = $p0;
    window.top.document.body.appendChild($v_1);
    $v_1.style.position = "absolute";
    $v_1.style.zIndex = parseInt($v_0.style.zIndex) + 1;
    var $v_2 = Mscrm.FloatingDialog.getHostingIFrameId($p0),
        $v_3 = document.createElement("iframe");
    $v_3.id = $v_2;
    $v_3.setAttribute("name", $v_2);
    $v_3.style.borderWidth = "1px";
    $v_3.style.borderStyle = "solid";
    $v_3.style.borderColor = "#D6D6D6";
    $v_1.appendChild($v_3);
    return $v_1
};
Mscrm.FloatingDialog.$9T = function()
{
    var $v_0 = Mscrm.FloatingDialog.$7T();
    return IsNull($v_0) ? 0 : $v_0.style.zIndex
};
Mscrm.FloatingDialog.$7T = function()
{
    var $v_0 = 0,
        $v_1 = null,
        $v_2 = function($p1_0)
        {
            if(!IsNull($p1_0) && !IsNull($p1_0.id) && $p1_0.id.indexOf("FloatingDialog") >= 0)
                if($p1_0.style.zIndex > $v_0)
                {
                    $v_0 = $p1_0.style.zIndex;
                    $v_1 = $p1_0
                }
            return false
        };
    XUI.Html.DomUtils.ForEachChild(window.top.document.body, $v_2);
    return $v_1
};
Mscrm.FloatingDialog.getHostingIFrameId = function(hostingElementId)
{
    var $v_0 = hostingElementId + "_Iframe";
    return $v_0
};
Mscrm.FloatingDialog.$7G = function($p0)
{
    var $v_0 = $p0 + "_Background";
    return $v_0
};
Mscrm.FloatingDialog.$7S = function()
{
    if(IsNull(Mscrm.FloatingDialog.$k))
    {
        Mscrm.FloatingDialog.$k = {};
        Mscrm.FloatingDialog.$k["/_controls/lookup/lookupinfo.aspx"] = "DlgHdContainer";
        Mscrm.FloatingDialog.$k["/_grid/cmds/dlg_delete.aspx"] = "tdDialogHeader";
        Mscrm.FloatingDialog.$k["/_grid/cmds/dlg_delete_contact.aspx"] = "tdDialogHeader";
        Mscrm.FloatingDialog.$k["/_grid/cmds/dlg_delete_account.aspx"] = "tdDialogHeader";
        Mscrm.FloatingDialog.$k["/_grid/cmds/dlg_delete_queue.aspx"] = "tdDialogHeader";
        Mscrm.FloatingDialog.$k["/_grid/cmds/dlg_confirm_delete.aspx"] = "tdDialogHeader";
        Mscrm.FloatingDialog.$k["/tools/subjectmanager/dialogs/edit.aspx"] = "DlgHdContainer"
    }
    return Mscrm.FloatingDialog.$k
};
Mscrm.FloatingDialog.isFloatingDialogSupported = function(dialogPath)
{
    var $v_0 = Mscrm.FloatingDialog.$7S();
    if(dialogPath.toLowerCase() in $v_0) return true;
    return false
};
Mscrm.FloatingDialog.getPollingElementForDialog = function(dialogPath)
{
    var $v_0 = Mscrm.FloatingDialog.$7S();
    if(dialogPath.toLowerCase() in $v_0) return $v_0[dialogPath.toLowerCase()].toString();
    return null
};
Mscrm.FloatingDialog.generateNextFloatingDialogId = function(baseElementId)
{
    var $v_0 = window.top.document.getElementById(baseElementId);
    if(!IsNull($v_0)) return Mscrm.FloatingDialog.generateNextFloatingDialogId(baseElementId + "1");
    else return baseElementId
};
Mscrm.Form = function() {};
Mscrm.Form.resetFormToVisibleArea = function()
{
    var $v_0 = $get("formBodyContainer");
    if($v_0 && $v_0.scrollTop > 0) $v_0.scrollTop = 0
};
Mscrm.Form.setFieldRequiredOrRecommended = function(field, toType, toAlt)
{
    if(IsNull(field) || IsNull(field.className)) return;
    if(IsNull(toAlt)) toAlt = "";
    var $v_0, $v_1, $v_2, $v_3 = null,
        $v_4 = false;
    switch(toType)
    {
        case 2:
            $v_0 = "ms-crm-Field-Normal";
            $v_1 = "ms-crm-Field-Recommended";
            $v_2 = "ms-crm-Field-Required";
            $v_3 = Mscrm.CrmUri.create("/_imgs/frm_required.gif");
            break;
        case 3:
            $v_0 = "ms-crm-Field-Required";
            $v_1 = "ms-crm-Field-Normal";
            $v_2 = "ms-crm-Field-Recommended";
            $v_3 = Mscrm.CrmUri.create("/_imgs/frm_recommended.gif");
            break;
        case 0:
        default:
            $v_0 = "ms-crm-Field-Required";
            $v_1 = "ms-crm-Field-Recommended";
            $v_2 = "ms-crm-Field-Normal";
            $v_4 = true;
            break
    }
    var $v_5 = field.className.replace($v_0, "");
    $v_5 = $v_5.replace($v_1, "");
    if($v_5.indexOf($v_2) < 0) $v_5 += " " + $v_2;
    field.className = $v_5;
    var $v_6 = field.getElementsByTagName("IMG"),
        $v_7 = 0;
    if(!IsNull($v_6)) $v_7 = $v_6.length;
    if($v_4)
    {
        if($v_7 > 0) $v_6[$v_7 - 1].style.display = "none"
    }
    else if($v_7 <= 0)
    {
        var $v_8 = field,
            $v_9 = XUI.Html.DomUtils.GetFirstChild(field);
        if(!IsNull($v_9)) $v_8 = $v_9;
        $v_8.innerHTML += '<img alt="' + CrmEncodeDecode.CrmHtmlAttributeEncode(toAlt) + '" src="' + CrmEncodeDecode.CrmHtmlAttributeEncode($v_3.toString()) + '"/>'
    }
    else
    {
        var $v_A = $v_6[$v_7 - 1];
        $v_A.src = $v_3.toString();
        $v_A.alt = toAlt;
        $v_A.style.display = "inline"
    }
};

function SetFieldRequiredOrRecommended(field, toType, toAlt)
{
    Mscrm.Form.setFieldRequiredOrRecommended(field, toType, toAlt)
}
Mscrm.FormControlInputBehavior = function(element)
{
    Mscrm.FormControlInputBehavior.initializeBase(this, [element])
};
Mscrm.FormControlInputBehavior.GetBehavior = function(id)
{
    if(isNullOrEmptyString(id)) return null;
    var $v_0 = $get(id);
    if(Mscrm.Utilities.isRefreshForm() && IsNull($v_0) && id.endsWith("_i"))
        if(!IsNull($get(id.substr(0, id.length - 2))))
        {
            Xrm.Page.ui.controls.get(id.substr(0, id.length - 2));
            $v_0 = $get(id)
        }
    return Mscrm.FormControlInputBehavior.GetElementBehavior($v_0)
};
Mscrm.FormControlInputBehavior.GetElementBehavior = function(element)
{
    if(IsNull(element)) return null;
    Mscrm.Utilities.tryInitOnDemandControl(element.id);
    var $v_0 = Sys.UI.Behavior.getBehaviorsByType(element, Mscrm.ICrmUIFormDataComponent);
    if(!$v_0.length) return null;
    return $v_0[0]
};
Mscrm.FormControlInputBehavior.GetBehaviorForForm = function(id)
{
    if(isNullOrEmptyString(id)) return null;
    if(!IsNull(Xrm.Page.data))
    {
        var $v_0 = Xrm.Page.data.entity.attributes.get(id);
        !IsNull($v_0) && $v_0.controls.forEach(function($p1_0, $p1_1) {})
    }
    if(Mscrm.Utilities.isRefreshForm()) id = id + "_i";
    return Mscrm.FormControlInputBehavior.GetElementBehavior($get(id))
};
Mscrm.FormControlInputBehavior.isSlugSupportEnabled = function()
{
    var $v_0 = window._MscrmIsSlugSupportEnabled;
    return IsNull($v_0) ? false : $v_0
};
Mscrm.FormControlInputBehavior.createSlugSupportIfNeeded = function(behaviorOwner)
{
    Mscrm.FormControlInputBehavior.isSlugSupportEnabled() && Sys.Application.add_init(function($p1_0, $p1_1)
    {
        $create(Mscrm.SlugSupport, null, null, null, behaviorOwner)
    })
};
Mscrm.FormControlInputBehavior.prototype = {
    initialize: function()
    {
        Mscrm.CrmUIBehavior.prototype.initialize.call(this);
        this.get_isDataSlugSupported() && Mscrm.FormControlInputBehavior.createSlugSupportIfNeeded(this.get_element())
    },
    get_isDataSlugSupported: function()
    {
        return false
    },
    get_dataValue: function()
    {
        return this.get_elementValue()
    },
    set_dataValue: function(value)
    {
        this.set_elementValue(value.toString());
        return value
    },
    add_dataValueChanged: function(value)
    {
        this.get_events().addHandler("OnDataValueChange", value)
    },
    remove_dataValueChanged: function(value)
    {
        this.get_events().removeHandler("OnDataValueChange", value)
    },
    get_dataXml: function()
    {
        return String.format("<{0}>{1}</{0}>", this.get_element().id, CrmEncodeDecode.CrmXmlEncode(this.get_elementValue()))
    },
    get_requiredLevel: function()
    {
        var $v_0 = this.get_element().getAttribute("req");
        if(IsNull($v_0)) return 0;
        else try
        {
            return parseInt($v_0, 10)
        }
        catch($$e_1)
        {
            return 0
        }
    },
    set_requiredLevel: function(value)
    {
        return value
    },
    get_disabled: function()
    {
        return this.get_element().disabled
    },
    set_disabled: function(value)
    {
        this.get_element().disabled = value;
        return value
    },
    get_forceSubmit: function()
    {
        var $v_0 = this.get_element().getAttribute("ForceSubmit");
        return Mscrm.Utilities.parseBoolean($v_0)
    },
    set_forceSubmit: function(value)
    {
        this.get_element().setAttribute("ForceSubmit", value);
        return value
    },
    get_doNotSubmit: function()
    {
        var $v_0 = this.get_element().getAttribute("DoNotSubmit");
        return Mscrm.Utilities.parseBoolean($v_0)
    },
    set_doNotSubmit: function(value)
    {
        this.get_element().setAttribute("DoNotSubmit", value);
        return value
    },
    setFocus: function()
    {
        this.get_element().focus()
    },
    fireOnChange: function() {},
    get_elementValue: function()
    {
        return this.get_element().value
    },
    set_elementValue: function(value)
    {
        this.get_element().value = value.toString();
        return value
    },
    handleDataValueChangedEvent: function(args)
    {
        var $v_0 = this.get_events().getHandler("OnDataValueChange");
        if(!IsNull($v_0))
        {
            $v_0(this, args);
            return true
        }
        return false
    },
    setDisplay: function(visibility)
    {
        var $v_0 = visibility ? "inline" : "none";
        if(!IsNull(this.get_element())) this.get_element().style.display = $v_0
    }
};
Mscrm.ValidationResult = function(isValid, errorText, errorIconPath, overwriteErrorMessage)
{
    this.isValid = isValid;
    this.errorText = errorText;
    this.overwriteErrorMessage = overwriteErrorMessage;
    if(!isNullOrEmptyString(errorIconPath)) this.errorIconPath = errorIconPath
};
Mscrm.ValidationResult.prototype = {
    errorText: null,
    isValid: false,
    errorIconPath: null,
    attributeName: null,
    parentFormDataEntityId: null,
    overwriteErrorMessage: false
};
Mscrm.ButtonUtils = function() {};
Mscrm.ButtonUtils.hoverOn = function(e)
{
    if(!IsNull(e) && !e.disabled) e.className = "ms-crm-Button ms-crm-Button-Hover"
};
Mscrm.ButtonUtils.hoverOff = function(e)
{
    if(!IsNull(e) && !e.disabled) e.className = "ms-crm-Button"
};
Mscrm.FormEditor = function() {};
Mscrm.FormEditor.OpenEditor = function(typeCode, formId, entityId)
{
    var $v_0 = "",
        $v_1 = new RemoteCommand("FormEditorWebService", "GetFormAndEntityType", null);
    $v_1.SetParameter("formId", formId);
    $v_1.SetParameter("entityId", entityId);
    var $v_2 = $v_1.Execute(null);
    if($v_2.Success)
    {
        $v_0 = $v_2.ReturnValue.toString();
        var $v_3 = $v_0.split(":");
        if($v_3.length === 2)
        {
            var $v_4 = parseInt($v_3[0], 10),
                $v_5 = $v_3[1];
            switch($v_4)
            {
                case 2:
                    Mscrm.FormEditor.OpenFormEditor(typeCode, "main", formId, -1);
                    break;
                case 5:
                    Mscrm.FormEditor.OpenMobileFormEditor($v_5, formId);
                    break;
                case 6:
                    Mscrm.FormEditor.OpenFormEditor(typeCode, "quick", formId, -1);
                    break;
                case 7:
                    Mscrm.FormEditor.OpenFormEditor(typeCode, "quickCreate", formId, -1);
                    break
            }
        }
    }
};
Mscrm.FormEditor.OpenFormEditor = function(typeCode, formType, formId, actionType)
{
    var $v_0 = Mscrm.CrmUri.create("/main.aspx?pagetype=formeditor");
    $v_0.get_query()["etc"] = typeCode;
    if(IsNull(actionType)) actionType = -1;
    if(!isNullOrEmptyString(formId))
    {
        formId = formId.replace("{", "");
        formId = formId.replace("}", "");
        $v_0.get_query()["extraqs"] = "formtype=" + CrmEncodeDecode.CrmNameValueEncode(formType) + "&formId=" + CrmEncodeDecode.CrmNameValueEncode(formId) + "&action=" + CrmEncodeDecode.CrmNameValueEncode(actionType.toString())
    }
    else $v_0.get_query()["extraqs"] = "formtype=" + CrmEncodeDecode.CrmNameValueEncode(formType) + "&action=" + CrmEncodeDecode.CrmNameValueEncode(actionType.toString());
    var $v_1 = String.format("{0}Editor", formType);
    openStdWin($v_0, $v_1, 1024, 768, null)
};
Mscrm.FormEditor.OpenMobileFormEditor = function(logicalName, formId)
{
    var $v_0 = Mscrm.CrmUri.create("/m/console/entityconfig.aspx");
    $v_0.get_query()["etn"] = logicalName;
    if(!isNullOrEmptyString(formId))
    {
        formId = formId.replace("{", "");
        formId = formId.replace("}", "");
        $v_0.get_query()["formId"] = formId
    }
    var $v_1 = String.format("{0}Editor", "mobile");
    openStdWin($v_0, $v_1, 1024, 768, null)
};
Mscrm.FormEditor.PublishEntity = function(selEntityTypeCode, primEntityTypeCode)
{
    Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/tools/systemcustomization/scripts/syscustutil.js"), true);
    Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/tools/systemcustomization/entities/scripts/util.js"), true);
    Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/tools/systemcustomization/scripts/syscustvalidation.js"), true);
    Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/tools/formeditor/scripts/util.js"), true);
    var $v_0 = selEntityTypeCode;
    if(!$v_0) $v_0 = primEntityTypeCode;
    var $v_1 = Mscrm.FormEditor.GetPublishXml($v_0);
    publishEntities($v_1, true, null, null)
};
Mscrm.FormEditor.PublishAll = function()
{
    Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/tools/systemcustomization/scripts/syscustutil.js"), true);
    Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/tools/systemcustomization/entities/scripts/util.js"), true);
    Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/tools/systemcustomization/scripts/syscustvalidation.js"), true);
    Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/tools/formeditor/scripts/util.js"), true);
    publishEntitiesAll(null, null)
};
Mscrm.FormEditor.GetPublishXml = function(entityCode)
{
    var $v_0 = createXmlDoc("publish"),
        $v_1 = addXmlNode($v_0, "entities"),
        $v_2 = Mscrm.FormEditor.getEntityId(entityCode);
    addTextXmlNode($v_1, "entity", $v_2);
    return convertXmlDocToString($v_0)
};
Mscrm.FormEditor.getEntityId = function(entityCode)
{
    var $v_0 = "";
    try
    {
        var $v_1 = new RemoteCommand("FormEditorWebService", "GetEntityId", null);
        $v_1.SetParameter("entityCode", entityCode);
        var $v_2 = $v_1.Execute(null);
        if($v_2.Success) $v_0 = $v_2.ReturnValue.toString()
    }
    catch($$e_4)
    {
        $v_0 = ""
    }
    return $v_0
};
Mscrm.Rte = function() {};
Mscrm.Rte.AddImage = function(entityTypeCode)
{
    switch(entityTypeCode)
    {
        case 9333:
            var $v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_AddItem.aspx?type=image"),
                $v_1 = openStdDlg($v_0, null, 700, 280);
            SetItem($v_1);
            break
    }
};
Mscrm.Rte.AddHyperlink = function(entityTypeCode)
{
    switch(entityTypeCode)
    {
        case 9333:
            var $v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_AddItem.aspx?type=hyperlink"),
                $v_1 = openStdDlg($v_0, null, 700, 280);
            SetItem($v_1);
            break
    }
};
Mscrm.WebResourceUtils = function() {};
Mscrm.WebResourceUtils.ShowWebResourceDependencies = function(oid, objectTypecode)
{
    var $v_0 = Mscrm.CrmUri.create("/tools/dependency/dependencyviewdialog.aspx");
    $v_0.get_query()["objectid"] = oid;
    $v_0.get_query()["objecttype"] = objectTypecode;
    $v_0.get_query()["operationtype"] = "showdependency";
    openStdWin($v_0, "ShowDependency", 800, 600, null)
};
Mscrm.ItemObject = function() {};
Mscrm.ItemObject.prototype = {
    type: "",
    name: "",
    serverUrl: "",
    altText: ""
};
Mscrm.GlobalEvents = function() {};
Mscrm.GlobalEvents.$$cctor = function()
{
    $addHandler(document, "keypress", Mscrm.GlobalEvents.$4R);
    $addHandler(document, "keydown", Mscrm.GlobalEvents.$4R);
    $addHandler(document, "selectstart", Mscrm.GlobalEvents.$78);
    $addHandler(document, "dragstart", Mscrm.GlobalEvents.$77);
    $addHandler(document, "unload", Mscrm.GlobalEvents.documentUnload);
    $addHandler(document, "click", Mscrm.GlobalEvents.$75);
    $addHandler(document, "contextmenu", Mscrm.GlobalEvents.$76)
};
Mscrm.GlobalEvents.$4R = function($p0)
{
    var $v_0 = String.fromCharCode(Mscrm.GlobalEvents.processKeyCode($p0.keyCode)).toUpperCase();
    if($p0.ctrlKey && !$p0.altKey)
    {
        switch($v_0)
        {
            case "P":
                $p0.rawEvent.keyCode = 0;
                $p0.rawEvent.returnValue = false;
                $p0.stopPropagation();
                break
        }
        if($v_0 === window.LOCID_JUMP_TO_RIBBON) setFocusOnRibbon($p0.target);
        else if($v_0 === window.LOCID_JUMP_TO_RIBBON_CONTROL)
        {
            if(!IsNull(window.top) && !IsNull(window.top.document))
            {
                var $v_1 = window.top.document.getElementById("crmContentPanel");
                if(!IsNull($v_1))
                {
                    var $v_2 = $v_1.attributes.getNamedItem("currentContentId"),
                        $v_3 = null;
                    if(!IsNull($v_2) && $v_2.specified) $v_3 = window.top.document.getElementById($v_2.value);
                    if(!IsNull($v_3))
                    {
                        var $v_4 = $v_3.contentWindow.document.getElementById("processStagesScrollRegion");
                        if(!IsNull($v_4))
                        {
                            var $v_5 = XUI.Html.DomUtils.GetFirstChild($v_4);
                            !IsNull($v_5) && $v_5.focus()
                        }
                    }
                }
            }
        }
        else if($p0.shiftKey && $v_0 === "7") Mscrm.Utilities.raiseKeyPressEvent(58, $p0.target);
        else if($p0.shiftKey && $v_0 === "#") Mscrm.Utilities.raiseKeyPressEvent(59, $p0.target);
        else if($p0.shiftKey && $v_0 === "5") Mscrm.Utilities.raiseKeyPressEvent(67, $p0.target);
        else $p0.shiftKey && $v_0 === "1" && Mscrm.Utilities.raiseKeyPressEvent(73, $p0.target)
    }
    else if(Mscrm.GlobalEvents.processKeyCode($p0.keyCode) === 8 && !Mscrm.Utilities.isIE7OrIE7CompactMode())
    {
        var $v_6 = null;
        if(!IsNull($p0.srcElement)) $v_6 = $p0.srcElement;
        else $v_6 = $p0.target;
        if(!IsNull($v_6) && Mscrm.GlobalEvents.$7X($v_6)) return;
        $p0.preventDefault()
    }
};
Mscrm.GlobalEvents.processKeyCode = function(value)
{
    if(!Mscrm.GlobalEvents.$W)
    {
        Mscrm.GlobalEvents.$W = {};
        Mscrm.GlobalEvents.$W[219] = 91;
        Mscrm.GlobalEvents.$W[221] = 93;
        Mscrm.GlobalEvents.$W[51] = 35;
        Mscrm.GlobalEvents.$W[186] = 59;
        Mscrm.GlobalEvents.$W[187] = 61;
        Mscrm.GlobalEvents.$W[188] = 44;
        Mscrm.GlobalEvents.$W[189] = 45;
        Mscrm.GlobalEvents.$W[190] = 46;
        Mscrm.GlobalEvents.$W[191] = 47;
        Mscrm.GlobalEvents.$W[222] = 39
    }
    if(Mscrm.GlobalEvents.$W[value]) return Mscrm.GlobalEvents.$W[value];
    return value
};
Mscrm.GlobalEvents.$78 = function($p0)
{
    var $v_0 = $p0.target;
    if(!$v_0.tagName || typeof $v_0.className != "string") return;
    var $v_1 = $v_0.tagName.toUpperCase();
    !Mscrm.GlobalEvents.$9r() && $v_1 !== "INPUT" && $v_1 !== "TEXTAREA" && !($v_1 === "DIV" && Sys.UI.DomElement.containsCssClass($v_0, "ms-crm-Lookup")) && !Sys.UI.DomElement.containsCssClass($v_0, "ms-crm-Field-Data-Print") && !Sys.UI.DomElement.containsCssClass($v_0, "ms-crm-Field-Label-Print") && !Sys.UI.DomElement.containsCssClass($v_0, "ms-crm-Tab-Print") && !Sys.UI.DomElement.containsCssClass($v_0, "ms-crm-Form-Section-Print") && !Sys.UI.DomElement.containsCssClass($v_0, "ms-crm-Form-Print") && !Mscrm.GlobalEvents.$9k($v_0) && $p0.preventDefault()
};
Mscrm.GlobalEvents.$9k = function($p0)
{
    if(Sys.UI.DomElement.containsCssClass($p0, "ms-crm-Inline-Value")) return true;
    var $v_0 = $p0.parentNode;
    if(IsNull($v_0)) return false;
    return Sys.UI.DomElement.containsCssClass($v_0, "ms-crm-Inline-Value")
};
Mscrm.GlobalEvents.$9r = function()
{
    if(typeof _UI_TEXT_SELECTABLE != "undefined" && _UI_TEXT_SELECTABLE === "1") return true;
    return false
};
Mscrm.GlobalEvents.get_globalAllowDrag = function()
{
    return Mscrm.GlobalEvents.$4U
};
Mscrm.GlobalEvents.set_globalAllowDrag = function(value)
{
    Mscrm.GlobalEvents.$4U = value;
    return value
};
Mscrm.GlobalEvents.$77 = function($p0)
{
    !Mscrm.GlobalEvents.$4U && $p0.preventDefault()
};
Mscrm.GlobalEvents.$75 = function($p0)
{
    if(Mscrm.GlobalEvents.$Aa())
    {
        var $v_0 = Mscrm.GlobalEvents.$9P($p0);
        if(!IsNull($v_0) && Mscrm.GlobalEvents.$7X($v_0))
        {
            $v_0.blur();
            $v_0.focus()
        }
    }
};
Mscrm.GlobalEvents.$Aa = function()
{
    var $v_0 = window.isMobileClient,
        $v_1 = window.parent,
        $v_2 = window.frameElement;
    if(!IsNull($v_0) && $v_0 && !IsNull($v_1) && !IsNull($v_2) && (Mscrm.Utilities.isIE10() || Mscrm.Utilities.isIE11StandardOrIE11CompatibleMode())) return true;
    return false
};
Mscrm.GlobalEvents.$9P = function($p0)
{
    var $v_0 = null;
    if(!IsNull($p0.srcElement)) $v_0 = $p0.srcElement;
    else $v_0 = $p0.target;
    return $v_0
};
Mscrm.GlobalEvents.$7X = function($p0)
{
    if(!IsNull($p0))
    {
        var $v_0 = !isNullOrEmptyString($p0.getAttribute("readonly")) ? true : false,
            $v_1 = $p0.disabled;
        if($v_0 || !IsNull($v_1) && $v_1) return false;
        if($p0.tagName.toUpperCase() === "INPUT")
        {
            var $v_2 = $p0.type;
            if(!isNullOrEmptyString($v_2) && ($v_2.toUpperCase() === "TEXT" || $v_2.toUpperCase() === "PASSWORD" || $v_2.toUpperCase() === "FILE")) return true
        }
        else if($p0.tagName.toUpperCase() === "TEXTAREA") return true;
        else
        {
            var $v_3 = $p0.contentEditable;
            if(!IsNull($v_3) && $v_3.toUpperCase() === "TRUE") return true
        }
    }
    return false
};
Mscrm.GlobalEvents.documentUnload = function(domEvent)
{
    $removeHandler(document, "keypress", Mscrm.GlobalEvents.$4R);
    $removeHandler(document, "keydown", Mscrm.GlobalEvents.$4R);
    $removeHandler(document, "selectstart", Mscrm.GlobalEvents.$78);
    $removeHandler(document, "dragstart", Mscrm.GlobalEvents.$77);
    $removeHandler(document, "unload", Mscrm.GlobalEvents.documentUnload);
    $removeHandler(document, "click", Mscrm.GlobalEvents.$75);
    $removeHandler(document, "contextmenu", Mscrm.GlobalEvents.$76)
};
Mscrm.GlobalEvents.$76 = function($p0)
{
    if(!$p0.target.tagName) return;
    var $v_0 = $p0.target.tagName.toUpperCase(),
        $v_1 = null;
    if(!IsNull(document.selection)) $v_1 = document.selection.createRange().text;
    else $v_1 = window.getSelection().toString();
    !(!$p0.target.disabled && (!IsNull($v_1) && $v_1.length > 0 || $v_0 === "TEXTAREA" || $v_0 === "INPUT" && $p0.target.getAttribute("type").toString().toUpperCase() === "TEXT")) && $p0.preventDefault()
};
Mscrm.Grid = function() {};
Mscrm.Grid.auto = function(objectTypeCode, findValue, entityId)
{
    if(String === Object.getType(objectTypeCode)) objectTypeCode = Number.parseInvariant(objectTypeCode);
    var $v_0, $v_1;
    switch(objectTypeCode)
    {
        case 5:
            $v_0 = false;
            $v_1 = false;
            break;
        default:
            $v_0 = Mscrm.EntityPropUtil.isActivityTypeCode(objectTypeCode);
            $v_1 = Mscrm.EntityPropUtil.isQueueItemTypeCode(objectTypeCode);
            break
    }
    if(objectTypeCode === 9004) objectTypeCode = 4230;
    var $v_2 = window.self,
        $v_3 = $v_2.document;
    try
    {
        var $v_7 = window.frameElement;
        if($v_7)
            if($v_7.getAttribute("isArea") === "1")
            {
                $v_2 = window.parent;
                $v_3 = $v_2.document
            }
            else if($v_7.className === "ms-crm-Home-Cal-Workplace")
        {
            $v_3.location.reload();
            return
        }
        else if($v_7.className === "ms-crm-Home-Cal-Month")
        {
            $v_3 = window.parent.document;
            $v_3.location.reload();
            return
        }
    }
    catch($$e_8)
    {}
    for(var $v_4 = null, $v_5 = $v_2.frames, $v_8 = 0; $v_8 < $v_5.length; $v_8++) try
    {
        var $v_9 = $v_5[$v_8],
            $v_A = $v_9.frameElement;
        if($v_A.className === "ms-crm-Home-Cal-Month") !IsNull($v_9.Refresh) && $v_9.Refresh(objectTypeCode);
        else if($v_A.className === "noteData")
        {
            var $v_B = Mscrm.FormControlInputBehavior.GetBehavior($v_A.id);
            $v_B.isParentTabVisible() && (objectTypeCode === 5 || !$v_B.get_isDirty()) && $v_B.refresh()
        }
        else if($v_A.className === "ms-crm-Home-Cal-Workplace")
        {
            $v_9.location.reload();
            return
        }
        else if($v_A.className === "ms-crm-Dialog-Lookup-Results")
        {
            if(objectTypeCode.toString() === $get("selObjects").value.toString())
            {
                window.search(findValue);
                return
            }
        }
        else if($v_A.getAttribute("isArea"))
        {
            var $v_C = $v_9.frames;
            if($v_C && $v_C.length > 0)
            {
                $v_A = $v_C[0].frameElement;
                $v_A.className === "ms-crm-Home-Cal-Month" && !IsNull($v_C[0].Refresh) && $v_C[0].Refresh(objectTypeCode)
            }
            var $v_D = $v_9.document;
            Mscrm.Grid.findAndRefreshGrids($v_D, objectTypeCode, $v_0, $v_1, findValue, entityId)
        }
        else if($v_A.getAttribute("ID") && $v_A.getAttribute("ID").toString().startsWith("contentIFrame"))
        {
            $v_4 = $v_9.window;
            Mscrm.Grid.findAndRefreshGrids($v_4.document, objectTypeCode, $v_0, $v_1, findValue, entityId)
        }
        else if($v_A.getAttribute("name") && $v_A.getAttribute("name").toString().startsWith("contentIFrame"))
        {
            $v_4 = $v_9.window;
            Mscrm.Grid.findAndRefreshGrids($v_4.document, objectTypeCode, $v_0, $v_1, findValue, entityId)
        }
    }
    catch($$e_H)
    {}
    var $v_6 = Mscrm.Grid.findAndRefreshGrids($v_3, objectTypeCode, $v_0, $v_1, findValue, entityId);
    !$v_6 && !IsNull($v_4) && Mscrm.Grid.findAndRefreshGrids($v_4.document, objectTypeCode, $v_0, $v_1, findValue, entityId)
};
Mscrm.Grid.findAndRefreshGrids = function($sn_document, objectTypeCode, isActivity, isQueueable, findValue, entityId)
{
    if(IsNull($sn_document)) return false;
    if(!Mscrm.Grid.$88($sn_document.getElementsByTagName("DIV"), objectTypeCode, isActivity, isQueueable, findValue, entityId)) return Mscrm.Grid.$88($sn_document.getElementsByTagName("TABLE"), objectTypeCode, isActivity, isQueueable, findValue, entityId);
    return false
};
Mscrm.Grid.$88 = function($p0, $p1, $p2, $p3, $p4, $p5)
{
    if(String === Object.getType($p1)) $p1 = Number.parseInvariant($p1);
    if(IsNull($p0)) return false;
    for(var $v_0 = false, $v_1 = 0; $v_1 < $p0.length; $v_1++)
    {
        var $v_2 = $p0[$v_1];
        if($v_2.className.indexOf("ms-crm-ListControl") > -1 && !isNullOrEmptyString($v_2.id))
        {
            $v_0 = true;
            var $v_3 = $v_2.control;
            if(!IsNull($v_3) && $v_3.GetParameter("autorefresh") === "1" && (Number.parseInvariant($v_3.GetParameter("otc")) === $p1 || $p1 === 4251 && Number.parseInvariant($v_3.GetParameter("otc")) === 4201 || $p1 === 9003 && Number.parseInvariant($v_3.GetParameter("otc")) === 8 || $p2 && (Number.parseInvariant($v_3.GetParameter("otc")) === 4200 || $p1 === 4200) || $p3 && (Number.parseInvariant($v_3.GetParameter("otc")) === 2029 || $p1 === 2029) || Number.parseInvariant($v_3.GetParameter("otc")) === 7103 || $v_3.GetParameter("otc") === "0"))
            {
                var $v_4 = $get("crmGrid_findCriteria"),
                    $v_5 = Mscrm.CrmUri.create(window.location.toString().toUpperCase());
                if(!IsNull($p4) && $v_4 && $v_5.get_path().indexOf("LOOKUPINFO.ASPX") > 0)
                {
                    $v_4.value = $p4;
                    window.search($v_5.get_query()["LOOKUPSTYLE"] === "MULTI", $p5);
                    return $v_0
                }
                $v_3.ClearPagingCookie();
                $v_3.refresh()
            }
        }
    }
    Mscrm.PageManager.isOutlookProxyPage() && getOutlookHostedWindow().refreshGrid();
    return $v_0
};
Mscrm.Grid.getGridRecords = function(grid, columns, layoutXml)
{
    var $v_0 = new Array(1),
        $v_1 = null;
    if(!IsNull(columns))
    {
        $v_1 = new Array(0);
        var $v_7 = XUI.Xml.LoadXml(layoutXml).documentElement;
        if(XUI.Xml.DomUtils.HasChildElements($v_7))
        {
            var $v_8 = 0,
                $v_9 = function($p1_0)
                {
                    var $v_A = $p1_0,
                        $v_B = XUI.Xml.GetText($v_A),
                        $v_C = 0;
                    while($v_C < columns.length)
                    {
                        if(columns[$v_C] === $v_B)
                        {
                            var $v_D = $v_1.length;
                            if(IsNull($v_1[$v_D])) $v_1[$v_D] = {};
                            $v_1[$v_D]["fieldname"] = XUI.Xml.GetText($v_A.attributes.getNamedItem("fieldname"));
                            $v_1[$v_D]["index"] = $v_8
                        }++$v_C
                    }++$v_8;
                    return false
                };
            XUI.Xml.DomUtils.ForEachChild($v_7, $v_9)
        }
    }
    var $v_2 = 0,
        $v_3 = grid.getElementsByTagName("COL");
    if(!IsNull($v_3))
    {
        var $v_E;
        if($v_3[1].className === "ms-crm-List-RowIconColumn") $v_E = 3;
        else $v_E = 2;
        if($v_3.length > $v_E)
            for(var $v_F = 0; $v_F < $v_E; $v_F++)
                if($v_3[$v_F].className === "ms-crm-List-PreviewGlyphColumn" || $v_3[$v_F].className === "ms-crm-List-CheckBoxColumn" || $v_3[$v_F].className === "ms-crm-List-RowIconColumn" || $v_3[$v_F].className === "ms-crm-List-NonDataColumn") $v_2++
    }
    var $v_4 = grid.getElementsByTagName("TBODY"),
        $v_5 = null;
    if(!IsNull($v_4)) $v_5 = $v_4[0].getElementsByTagName("TR");
    else $v_5 = grid.getElementsByTagName("TR");
    for(var $v_6 = $v_5.length, $v_G = 0; $v_G < $v_6; $v_G++)
    {
        var $v_H = $v_5[$v_G];
        if(!$v_H.className.startsWith("ms-crm")) continue;
        var $v_I = $v_H.attributes.getNamedItem("oid").value;
        if(!isNullOrEmptyString($v_I))
        {
            var $v_J = {};
            $v_J["oid"] = $v_I;
            var $v_K = $v_H.attributes.getNamedItem("otype").value;
            if(!isNullOrEmptyString($v_K)) $v_J["otype"] = $v_K;
            else $v_J["otype"] = grid.attributes.getNamedItem("oname").value;
            var $v_L = 0;
            while($v_L < $v_1.length)
            {
                var $v_M = $v_1[$v_L]["index"],
                    $v_N = XUI.Html.GetText($v_H.children[$v_M + $v_2]),
                    $v_O = $v_1[$v_L]["fieldname"];
                $v_J[$v_O] = $v_N;
                ++$v_L
            }
            $v_0[$v_G] = $v_J
        }
    }
    return $v_0
};
Mscrm.Grid.openAssociatedGridViewOnLiteGridStandard = function(gridTypeCode, gridControl)
{
    var $v_0 = $get(gridControl.get_id() + "_openAssociatedGridViewImageButton");
    if(!IsNull($v_0.attributes.getNamedItem("nonRelationShipGrid")) && $v_0.attributes.getNamedItem("nonRelationShipGrid").value === "true")
    {
        var $v_1 = Mscrm.CrmUri.create("/main.aspx");
        $v_1.get_query()["etc"] = gridTypeCode;
        if(!isNullOrEmptyString(gridControl.GetParameter("viewid")) && !isNullOrEmptyString(gridControl.GetParameter("viewtype")))
        {
            $v_1.get_query()["viewid"] = gridControl.GetParameter("viewid");
            $v_1.get_query()["viewtype"] = gridControl.GetParameter("viewtype")
        }
        $v_1.get_query()["pagetype"] = "ENTITYLIST";
        openStdWin($v_1, buildWinName(gridControl.get_id()), 1e3, 600, null)
    }
    else
    {
        var $v_2 = $v_0.attributes.getNamedItem("assocView").value,
            $v_3 = $v_2.split("'");
        Mscrm.Details.loadArea($v_0, $v_3[1])
    }
};
Mscrm.Grid.addExistingFromSubGridStandard = function(gridTypeCode, gridControl, parentObjectTypeCode, parentId)
{
    if(!IsNull(gridControl))
    {
        var $v_0 = gridControl.GetParameter("relName"),
            $v_1;
        switch($v_0)
        {
            case "goal_parent_goal":
                $v_1 = locAssocObjGoal;
                break;
            default:
                $v_1 = window.parent.locAssocOneToMany;
                if(IsNull($v_1)) $v_1 = locAssocOneToMany;
                break
        }
        $v_1(gridTypeCode, $v_0, parentId, parentObjectTypeCode)
    }
};
Mscrm.Grid.addExistingFromSubGridAssociated = function(gridTypeCode, gridControl, parentObjectTypeCode, parentId)
{
    if(!IsNull(gridControl))
    {
        var $v_0 = gridControl.GetParameter("relName"),
            $v_1 = gridControl.GetParameter("roleOrd"),
            $v_2 = false;
        switch(gridTypeCode)
        {
            case 4300:
                switch($v_0)
                {
                    case "campaignactivitylist_association":
                        Mscrm.Grid.checkInParentAndInvoke("locAssocObjCampaignActivity", gridTypeCode, "", $v_0, $v_1, parentId, parentObjectTypeCode);
                        break;
                    case "campaignlist_association":
                        Mscrm.Grid.checkInParentAndInvoke("locAssocObjCampaign", gridTypeCode, "subType=targetLists", $v_0, $v_1, parentId, parentObjectTypeCode);
                        break;
                    case "listlead_association":
                        Mscrm.Grid.checkInParentAndInvoke("locAssocObjLead", gridTypeCode, "", $v_0, $v_1, parentId, parentObjectTypeCode);
                        break;
                    case "listcontact_association":
                        Mscrm.Grid.checkInParentAndInvoke("locAssocObjContact", gridTypeCode, "", $v_0, $v_1, parentId, parentObjectTypeCode);
                        break;
                    case "listaccount_association":
                        Mscrm.Grid.checkInParentAndInvoke("locAssocObjAccount", gridTypeCode, "", $v_0, $v_1, parentId, parentObjectTypeCode);
                        break;
                    default:
                        $v_2 = true;
                        break
                }
                break;
            case 4400:
                switch($v_0)
                {
                    case "campaignlist_association":
                        Mscrm.Grid.checkInParentAndInvoke("locAssocObjList", gridTypeCode, "subType=targetLists", $v_0, $v_1, parentId, parentObjectTypeCode);
                        break;
                    case "campaigncampaign_association":
                        Mscrm.Grid.checkInParentAndInvoke("locAssocObjCampaign", gridTypeCode, "", $v_0, $v_1, parentId, parentObjectTypeCode);
                        break;
                    default:
                        $v_2 = true;
                        break
                }
                break;
            case 1024:
                switch($v_0)
                {
                    case "productsubstitute_association":
                        Mscrm.Grid.checkInParentAndInvoke("locAssocObjProduct", gridTypeCode, "", $v_0, $v_1, parentId, parentObjectTypeCode);
                        break;
                    case "productassociation_association":
                        Mscrm.Grid.checkInParentAndInvoke("locAssocObjProduct", gridTypeCode, "", $v_0, $v_1, parentId, parentObjectTypeCode);
                        break;
                    case "campaignproduct_association":
                        Mscrm.Grid.checkInParentAndInvoke("locAssocObjCampaign", gridTypeCode, "", $v_0, $v_1, parentId, parentObjectTypeCode);
                        break;
                    default:
                        $v_2 = true;
                        break
                }
                break;
            case 3:
                switch($v_0)
                {
                    case "opportunitycompetitors_association":
                        Mscrm.Grid.checkInParentAndInvoke("locAssocObjCompetitor", gridTypeCode, "", $v_0, $v_1, parentId, parentObjectTypeCode);
                        break;
                    default:
                        $v_2 = true;
                        break
                }
                break;
            default:
                $v_2 = true;
                break
        }
        if($v_2)
        {
            var $v_3 = window.parent.locAssocObj;
            if(IsNull($v_3)) $v_3 = locAssocObj;
            $v_3(gridTypeCode, "", $v_0, $v_1, "", parentId, parentObjectTypeCode)
        }
    }
};
Mscrm.Grid.checkInParentAndInvoke = function(funcName, gridTypeCode, subtype, relationshipName, role, parentId, parentObjectTypeCode)
{
    var $v_0 = Mscrm.Utilities.createCallbackFunctionObject(funcName, window.parent, null, false),
        $v_1 = $v_0.callback;
    if(IsNull($v_1))
    {
        $v_0 = Mscrm.Utilities.createCallbackFunctionObject(funcName, window, null, false);
        $v_1 = $v_0.callback
    }
    $v_1(gridTypeCode, subtype, relationshipName, role, parentId, parentObjectTypeCode)
};
Mscrm.Grid.deleteRecords = function(gridControl, records, entityTypeCode)
{
    var $v_0 = 570,
        $v_1 = 205,
        $v_2 = null,
        $v_3 = null,
        $v_4 = Mscrm.Grid.generateStandardActionUri("delete", entityTypeCode, records.length);
    switch(entityTypeCode)
    {
        case 1083:
        case 1085:
        case 1089:
        case 1091:
            for(var $v_7 = new Array(records.length), $v_A = 0; $v_A < records.length; $v_A++) $v_7[$v_A] = records[$v_A].Id;
            var $v_8 = [];
            $v_8[0] = window.parent;
            $v_8[1] = $v_7;
            $v_8[2] = window.self;
            $v_2 = $v_8;
            $v_4 = Mscrm.Grid.generateStandardActionUri("deleteqoiproduct", entityTypeCode, records.length);
            $v_4.get_query()["sParentId"] = gridControl.GetParameter("oId");
            var $v_9 = [false, gridControl];
            $v_3 = Mscrm.Utilities.createCallbackFunctionObject("refreshGridAfterMerge", Mscrm.GridRibbonActions, $v_9);
            break;
        case 9802:
        case 9805:
            for(var $v_5 = new Array(records.length), $v_B = 0; $v_B < records.length; $v_B++) $v_5[$v_B] = records[$v_B].Id.split(":")[2];
            $v_2 = $v_5;
            break;
        case 4230:
            var $v_6 = Mscrm.Grid.executeStandardAction($v_4, gridControl, records, 570, 205, null, false, $v_2);
            isOutlookHostedWindow() && getOutlookHostedWindow().refreshViewList();
            return $v_6
    }
    return Mscrm.Grid.executeStandardAction($v_4, gridControl, records, $v_0, $v_1, $v_3, false, $v_2)
};
Mscrm.Grid.changeFormStateRecords = function(gridControl, records, entityTypeCode, formRenderState)
{
    var $v_0 = false,
        $v_1 = null,
        $v_2 = null,
        $v_3 = Mscrm.Grid.generateStandardActionUri("changeformstate", entityTypeCode, records.length);
    switch(entityTypeCode)
    {
        case 1030:
            $v_3.get_query()["sIds"] = records[0].Id;
            $v_3.get_query()["formRenderState"] = formRenderState;
            break
    }
    return Mscrm.Grid.executeStandardAction($v_3, gridControl, records, 570, $v_0 ? 250 : 205, $v_2, false, $v_1)
};
Mscrm.Grid.getSubTypesString = function(records)
{
    for(var $v_0 = new Sys.StringBuilder, $v_1 = 0; $v_1 < records.length; $v_1++)
    {
        $v_1 > 0 && $v_0.append(",");
        $v_0.append(records[$v_1].TypeCode.toString())
    }
    return $v_0.toString()
};
Mscrm.Grid.generateStandardActionUri = function(actionName, entityTypeCode, selectedRecordCount)
{
    return Mscrm.InternalUtilities.GridUtilities.generateStandardActionUri(actionName, entityTypeCode, selectedRecordCount)
};
Mscrm.Grid.executeStandardAction = function(actionUri, gridControl, selectedRecords, dialogWidth, dialogHeight, callback, forceRefresh, dialogArguments)
{
    if(IsNull(forceRefresh)) forceRefresh = false;
    if(IsNull(gridControl))
    {
        alert(window.LOCID_ACTION_NOITEMSELECTED);
        return null
    }
    var $v_0 = null;
    if(!Mscrm.Utilities.isModalDialogSupported())
    {
        var $v_1 = [forceRefresh, gridControl, callback],
            $v_2 = Mscrm.Utilities.createCallbackFunctionObject("refreshGrid", Mscrm.Grid, $v_1, false);
        $v_0 = Mscrm.Grid.executeStandardActionInternal(actionUri, selectedRecords, dialogWidth, dialogHeight, dialogArguments, $v_2)
    }
    else
    {
        $v_0 = Mscrm.Grid.executeStandardActionInternal(actionUri, selectedRecords, dialogWidth, dialogHeight, dialogArguments, callback);
        ($v_0 || forceRefresh) && gridControl.refresh()
    }
    return $v_0
};
Mscrm.Grid.executeStandardActionInternal = function(actionUri, selectedRecords, dialogWidth, dialogHeight, dialogArguments, callback)
{
    if(IsNull(selectedRecords) || !selectedRecords.length)
    {
        alert(window.LOCID_ACTION_NOITEMSELECTED);
        return null
    }
    if(IsNull(dialogWidth)) dialogWidth = 400;
    if(IsNull(dialogHeight)) dialogHeight = 200;
    if(IsNull(dialogArguments))
    {
        for(var $v_0 = new Array(selectedRecords.length), $v_1 = 0; $v_1 < selectedRecords.length; $v_1++) $v_0[$v_1] = selectedRecords[$v_1].Id;
        dialogArguments = $v_0
    }
    if(actionUri.toString().indexOf("dlg_bulkedit.aspx") !== -1 || actionUri.toString().indexOf("/CS/articles/viewer/default.aspx") !== -1)
    {
        if(!IsNull(callback)) return openStdDlgWithCallback(actionUri, dialogArguments, dialogWidth, dialogHeight, callback);
        return openStdDlg(actionUri, dialogArguments, dialogWidth, dialogHeight)
    }
    else
    {
        var $v_2 = new Mscrm.CrmDialog(actionUri, dialogArguments, dialogWidth, dialogHeight, null);
        !IsNull(callback) && $v_2.setCallbackReference(callback);
        return $v_2.show()
    }
};
Mscrm.Grid.refreshGrid = function(returnValue, forceRefresh, gridControl, callbackReference)
{
    var $v_0 = false;
    if(!IsNull(callbackReference)) Mscrm.Utilities.executeFunction(callbackReference, returnValue);
    else if(returnValue) $v_0 = true;
    ($v_0 || forceRefresh) && gridControl.refresh()
};

function auto(objectTypeCode, findValue, entityId)
{
    Mscrm.Grid.auto(objectTypeCode, findValue, entityId);
    !IsNull(Mscrm.PageManager.get_instance()) && Mscrm.PageManager.get_instance().raiseEvent(107, null)
}

function findAndRefreshGrids(doc, objectTypeCode, isActivity, findValue, entityId)
{
    Mscrm.Grid.findAndRefreshGrids(doc, objectTypeCode, isActivity, false, findValue, entityId)
}

function getGridRecords(grid, columns, layoutXml)
{
    return Mscrm.Grid.getGridRecords(grid, columns, layoutXml)
}
Mscrm.Help = function() {};
Mscrm.Help.loadHelp = function(area)
{
    var $v_0 = "",
        $v_1 = 0,
        $v_2 = 0,
        $v_3 = 285,
        $v_4;
    try
    {
        $v_4 = window.top;
        var $v_C = $v_4.location.href
    }
    catch($$e_7)
    {
        $v_4 = window.self
    }
    var $v_5 = $v_4.screenLeft,
        $v_6 = $v_4.screenTop,
        $v_7 = $v_4.screen,
        $v_8 = $v_4.stage;
    if(window.LOCID_UI_DIR === "RTL")
        if($v_5 - $v_3 - 15 < 3) $v_1 = 3;
        else $v_1 = $v_5 - $v_3 - 15;
    else
    {
        if($v_5 + $v_4.document.body.clientWidth < $v_7.width - $v_3) $v_1 = $v_5 + $v_4.document.body.clientWidth + 3;
        else $v_1 = $v_7.width - 300;
        if(area) $v_1 -= 280
    }
    if($v_6 + $v_4.document.body.clientHeight < $v_7.height) $v_2 = $v_6 - 23;
    else $v_2 = $v_7.height - 450;
    var $v_9 = $v_4.document.body.clientHeight - 5;
    if($v_9 < 300) $v_9 = 300;
    var $v_A = "/help/default.aspx";
    if(window.HELP_SERVER_URL.length > 0 && Mscrm.SessionInfo.isOnline()) $v_A = window.HELP_SERVER_URL.toLowerCase().endsWith($v_A) ? window.HELP_SERVER_URL : Mscrm.Help.concatenateUrl(window.HELP_SERVER_URL, $v_A);
    var $v_B = Mscrm.CrmUri.create($v_A);
    if(area)
    {
        $v_B.get_query()["area"] = area;
        $v_3 = 565;
        var $v_D = Number.parseInvariant(window.USER_HELP_LCID + "").toString(16);
        if(area === "SalesProcessConfigurator")
        {
            $v_B = Mscrm.CrmUri.create("http://go.microsoft.com/fwlink/?LinkID=271469&clcid=0x" + $v_D);
            return Mscrm.Help.$5q($v_B, $v_1, $v_2, $v_3, $v_9)
        }
        if(area === "ServiceProcessConfigurator")
        {
            $v_B = Mscrm.CrmUri.create("http://go.microsoft.com/fwlink/?LinkID=271470&clcid=0x" + $v_D);
            return Mscrm.Help.$5q($v_B, $v_1, $v_2, $v_3, $v_9)
        }
    }
    else
    {
        var $v_E = null;
        if(isRichClient())
        {
            var $v_M = getOutlookHostedWindow().getParameter("currentfolderurl");
            if($v_M !== "") $v_E = Mscrm.CrmUri.create($v_M)
        }
        if(!$v_E || $v_E.get_path().toLowerCase() === "/sitemapnavpage.aspx") $v_E = Mscrm.CrmUri.create(window.location.href);
        if(!IsNull(Mscrm.PageManager) && !IsNull(Mscrm.PageManager.get_instance()))
        {
            var $v_N = Mscrm.PageManager.get_instance().raiseEvent(15, null),
                $v_O = $v_N[0];
            if(IsNull($v_O))
            {
                if(isRichClient() && $v_E.get_path().toLowerCase() === "/main.aspx")
                {
                    var $v_P = Number.parseInvariant($v_E.get_query()["etc"]);
                    if(!Mscrm.EtcUtil.isUserDefinedEntityObjectTypeCode($v_P))
                    {
                        $v_E = Mscrm.CrmUri.create("/_root/homepage.aspx");
                        $v_E.get_query()["etc"] = $v_P.toString()
                    }
                    else $v_E = Mscrm.CrmUri.create("/_root/stage.aspx")
                }
            }
            else if($v_O.length > 0) $v_E = Mscrm.CrmUri.create($v_O)
        }
        try
        {
            if(!Mscrm.SessionInfo.isOutlookClient() && $v_E.get_path().toLowerCase() === "/_root/bar_top.aspx" || window.location.protocol === "outlook:") $v_E = Mscrm.CrmUri.create($v_8.location.href)
        }
        catch($$e_L)
        {
            return Mscrm.Help.loadHelp("##WHATSNEW##")
        }
        var $v_F = $v_E.get_path().toLowerCase();
        $v_F === "/userdefined/edit.aspx" && $v_E.set_path($v_F);
        var $v_G = $v_E;
        $v_E = Mscrm.CrmUri.create($v_E.get_path());
        $v_E.set_useOrganizationName(false);
        Mscrm.SolutionDecorater.removeSolutionIdFromQuerystring($v_E);
        $v_F = $v_E.get_path().toLowerCase();
        var $v_H = "";
        switch($v_F)
        {
            case "/userdefined/edit.aspx":
                Mscrm.Help.$5U($v_E, $v_G);
                $v_H = "form";
                break;
            case "/_root/hierarchy.aspx":
                Mscrm.Help.$Ae($v_G) && Mscrm.Help.$5U($v_E, $v_G);
                $v_H = "hierarchychart";
                break;
            case "/tools/systemcustomization/systemcustomization.aspx":
                var $v_I = $v_G.get_query()["pid"];
                if(!IsNull($v_I) && $v_I !== "0") $v_E.get_query()["pid"] = $v_G.get_query()["pid"];
                break;
            case "/_root/homepage.aspx":
                $v_0 = "custom_entity_list";
                $v_E.get_query()["etc"] = $v_G.get_query()["etc"];
                break;
            case "/tools/home_tools.aspx":
            case "/tools/admin/admin.aspx":
            case "/tools/adminsecurity/adminsecurity_area.aspx":
            case "/tools/business/business.aspx":
            case "/tools/templates/templates.aspx":
            case "/tools/datamanagement/datamanagement.aspx":
            case "/tools/productcatalog/productcatalog.aspx":
            case "/tools/social/social_area.aspx":
                if($v_G.get_query()["web"]) delete $v_G.get_query().web;
                if($v_G.get_query()["sitemappath"]) delete $v_G.get_query().sitemappath;
                $v_E.appendToQuery($v_G.get_queryString());
                break;
            case "/tools/formeditor/formeditor.aspx":
                var $v_Q = Mscrm.CrmUri.create($v_4.location.search).get_query()["extraqs"];
                if(!IsNull($v_Q))
                    if($v_Q.search(new RegExp("formtype=main")) !== -1) $v_E.get_query()["formtype"] = "main";
                    else $v_E.get_query()["formtype"] = "preview";
                else $v_E.get_query()["formtype"] = "main";
                break;
            case "/main.aspx":
            case "/_forms/read/page.aspx":
                $v_E = Mscrm.CrmUri.create("/userdefined/edit.aspx");
                $v_E.set_useOrganizationName(false);
                Mscrm.Help.$5U($v_E, $v_G);
                $v_H = "form";
                break;
            case "/tools/importwizard/sampledata.aspx":
                var $v_R = Mscrm.CrmUri.create($v_4.location.search).get_query()["installsoln"];
                if(!IsNull($v_R))
                    if($v_R.length > 0 && $v_R.toLowerCase() === "1") $v_E.get_query()["context"] = "samplesolution";
                break;
            case "/tools/regionaloptions/dialogs/regionaloptions.aspx":
                var $v_S = Mscrm.CrmUri.create($v_4.location.search).get_query()["usersettings"];
                if(!IsNull($v_S))
                    if($v_S.length > 0 && $v_S.toLowerCase() === "true") $v_E.get_query()["context"] = "user";
                    else $v_E.get_query()["context"] = "sys";
                break;
            case "/tools/systemcustomization/relationships/managerelationship.aspx":
                var $v_T = Mscrm.CrmUri.create($v_4.location.search).get_query()["entityrole"];
                if(!IsNull($v_T))
                    if($v_T.length > 0) $v_E.get_query()["entityrole"] = $v_T;
                break;
            case "/tools/solution/edit.aspx":
                var $v_J = Mscrm.TreeNavControl.getHelpContextUri();
                if(!IsNull($v_J))
                {
                    $v_J.set_useOrganizationName(false);
                    $v_E = $v_J
                }
                break;
            case "/crmreports/viewer/viewer.aspx":
                var $v_U = Mscrm.CrmUri.create($v_4.location.search).get_query()["helpID"];
                if(!IsNull($v_U))
                    if($v_U.length > 0) $v_E.get_query()["helpID"] = $v_U;
                $v_0 = "/crmreports/viewer/viewer.aspx";
                break;
            case "/_grid/cmds/dlg_additem.aspx":
                var $v_V = Mscrm.CrmUri.create($v_4.location.search).get_query()["type"];
                switch($v_V)
                {
                    case "image":
                        $v_E.get_query()["helpID"] = "addImageItem";
                        break;
                    case "hyperlink":
                        $v_E.get_query()["helpID"] = "addTextItem";
                        break;
                    default:
                        $v_0 = "/_grid/cmds/dlg_additem.aspx";
                        break
                }
                break;
            case "/workplace/home_dashboards.aspx":
                $v_G.get_query()["sitemappath"] && $v_E.appendToQuery($v_G.get_queryString());
                break;
            case "multientityquickfind/multientityquickfind.aspx":
                $v_E.set_path("##WHATSNEW##");
                break;
            default:
                try
                {
                    var $v_W = window.getHelpContext();
                    typeof $v_W === "string" && $v_E.set_fragment($v_W)
                }
                catch($$e_Y)
                {}
                break
        }
        if(Mscrm.Help.$7W())
        {
            var $v_X = $v_E.get_query()["etn"];
            if(IsNull($v_X))
            {
                var $v_Z = $v_E.get_query()["etc"];
                if(!IsNull($v_Z)) $v_X = Mscrm.XrmInternal.getEntityName(parseInt($v_Z, 10))
            }
            var $v_Y = Mscrm.Utilities.getFinalCustomizedHelpUrl(Mscrm.Help.$7J(), $v_X, Mscrm.Help.$9e(), $v_H);
            if(!IsNull($v_Y)) return Mscrm.Help.$AA($v_Y)
        }
        var $v_K = $v_E.toString(),
            $v_L = $v_K.toUpperCase();
        if(Mscrm.Utilities.$4i.test($v_L))
        {
            var $v_a = $v_L.indexOf("/WEBRESOURCES/");
            if($v_a > 0) $v_K = $v_K.substr($v_a)
        }
        $v_B.get_query()["area"] = $v_K
    }
    $v_B.get_query()["user_lcid"] = window.USER_HELP_LCID;
    if($v_0.length > 0) $v_B.get_query()["defaultHelp"] = $v_0;
    $v_B.get_query()["ver"] = CrmEncodeDecode.CrmUrlEncode(window.APPLICATION_FULL_VERSION);
    if(!Mscrm.Help.$9g()) return Mscrm.Help.$5q($v_B, $v_1, $v_2, $v_3, $v_9);
    else
    {
        Mscrm.Help.$8K($v_B);
        try
        {
            if(!IsNull(safeWindowOpen($v_B, buildWinName(), "", false))) return true
        }
        catch($$e_f)
        {}
        return false
    }
};
Mscrm.Help.$AA = function($p0)
{
    if(IsNull($p0)) return false;
    try
    {
        if(!IsNull(safeWindowOpen($p0, buildWinName(), "", false))) return true
    }
    catch($$e_1)
    {}
    return false
};
Mscrm.Help.$7W = function()
{
    var $v_0 = window.CUSTOMIZED_HELP_ENABLED;
    return !IsNull($v_0) && $v_0
};
Mscrm.Help.$Ae = function($p0)
{
    if(IsNull($p0)) return false;
    var $v_0 = "",
        $v_1 = $p0.get_query()["etn"];
    if(!isNullOrEmptyString($v_1)) $v_0 = $v_1;
    else if(!IsNull($p0.get_query()["etc"]))
    {
        var $v_2 = $p0.get_query()["etc"],
            $v_3 = Number.parseInvariant($v_2);
        $v_0 = Mscrm.XrmInternal.getEntityName($v_3)
    }
    return Mscrm.Help.$7z($v_0)
};
Mscrm.Help.$5U = function($p0, $p1)
{
    if(IsNull($p0) || IsNull($p1)) return;
    if(!IsNull($p1.get_query()["etc"]))
    {
        var $v_0 = $p1.get_query()["etc"],
            $v_1 = Number.parseInvariant($v_0),
            $v_2 = $p1.get_query()["etn"],
            $v_3 = "";
        if(isNullOrEmptyString($v_2)) $v_3 = Mscrm.XrmInternal.getEntityName($v_1);
        else $v_3 = $v_2;
        var $v_4 = Mscrm.Help.$7z($v_3);
        if(!Mscrm.EtcUtil.isUserDefinedEntityObjectTypeCode($v_1) || $v_4)
        {
            $p0.get_query()["etc"] = $v_0;
            if(!IsNull($v_2)) $p0.get_query()["etn"] = $v_2;
            else if($v_4) $p0.get_query()["etn"] = $v_3
        }
    }
};
Mscrm.Help.$7J = function()
{
    var $v_0 = window.CUSTOMIZED_HELP_GLOBAL_URL;
    return IsNull($v_0) ? "" : $v_0
};
Mscrm.Help.$9e = function()
{
    var $v_0 = window.CUSTOMIZED_HELP_PASSPARAMS_ENABLED;
    return !IsNull($v_0) && $v_0
};
Mscrm.Help.$7z = function($p0)
{
    return Mscrm.Help.$7W() && (!isNullOrEmptyString(Mscrm.Help.$7J()) || !isNullOrEmptyString($p0) && !isNullOrEmptyString(Mscrm.EntitiesCustomizedHelpUtility.getEntityCustomizedHelpUrl($p0)))
};
Mscrm.Help.$5q = function($p0, $p1, $p2, $p3, $p4)
{
    try
    {
        var $v_0 = "scrollbars=1,resizable=1,width=" + $p3 + ",height=" + $p4 + ",left=" + $p1 + ",top=" + $p2;
        if(!IsNull(openStdWinWithFeatures($p0, buildWinName(), $v_0, false))) return true
    }
    catch($$e_6)
    {}
    return false
};
Mscrm.Help.concatenateUrl = function(url1, url2)
{
    if(IsNull(url1) || !url1.length) return url2;
    if(IsNull(url2) || !url2.length) return url1;
    if(url1.charAt(url1.length - 1) !== "/" && url2.charAt(0) !== "/") return url1 + "/" + url2;
    if(url1.charAt(url1.length - 1) === "/" && url2.charAt(0) === "/") return url1 + url2.substr(1, url2.length - 1);
    return url1 + url2
};
Mscrm.Help.$9g = function()
{
    return window.HELP_REDIRECT_AVAILABLE
};
Mscrm.Help.$8K = function($p0)
{
    $p0.get_query()["SkuType"] = window.HELP_SKU;
    if(!isNullOrEmptyString(window.ONLINE_TRANSACTION_TYPE)) $p0.get_query()["tt"] = window.ONLINE_TRANSACTION_TYPE
};

function loadHelp(area)
{
    return Mscrm.Help.loadHelp(area)
}

function ConcatenateUrl(url1, url2)
{
    return Mscrm.Help.concatenateUrl(url1, url2)
}
Mscrm.ImageStrip = function() {};
Mscrm.ImageStrip.get_$9a = function()
{
    if(!Mscrm.ImageStrip.$3m) Mscrm.ImageStrip.$3m = Mscrm.ImageStripData.$9L();
    return Mscrm.ImageStrip.$3m
};
Mscrm.ImageStrip.getImage = function(url)
{
    var $v_0 = Mscrm.ImageStrip.getImageInfo(url),
        $v_1 = document.createElement("IMG");
    $v_1.src = $v_0.source;
    $v_1.className = $v_0.cssClass;
    return $v_1
};
Mscrm.ImageStrip.getImageInfo = function(url)
{
    var $v_0 = new Mscrm.ImageInfo,
        $v_1 = Mscrm.ImageStrip.get_$9a()[url.get_path().toUpperCase()];
    if(!$v_1 || !window.IMAGE_STRIPS_ENABLED)
    {
        $v_0.cssClass = "";
        $v_0.source = url.toString()
    }
    else
    {
        $v_0.cssClass = $v_1;
        $v_0.source = "/_imgs/imagestrips/transparent_spacer.gif"
    }
    return $v_0
};
Mscrm.ImageStrip.getImageStripClassName = function(element)
{
    var $v_0 = element.className.match(Mscrm.ImageStrip.$7V);
    if($v_0 && $v_0.length > 2) return $v_0[2];
    else return null
};
Mscrm.ImageStrip.replaceExistingImageStripClass = function(source, newClassValue)
{
    for(var $v_0 = source, $v_1 = $v_0.split(" "), $v_2 = "", $v_3 = "", $v_4 = 0; $v_4 < $v_1.length; $v_4++)
    {
        $v_3 = $v_1[$v_4].trim();
        if($v_3.startsWith("ms-crm-ImageStrip-")) $v_3 = "";
        if($v_3 === "") continue;
        $v_2 += $v_3 + " "
    }
    $v_2 += newClassValue;
    return $v_2
};
Mscrm.ImageStrip.changeImage = function(imageToChange, newUrl)
{
    var $v_0 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(newUrl));
    imageToChange.src = $v_0.source;
    imageToChange.className = Mscrm.ImageStrip.replaceExistingImageStripClass(imageToChange.className, $v_0.cssClass)
};

function IsNull(o)
{
    return typeof o === "undefined" || typeof o === "unknown" || o == null
}

function isArray(item)
{
    return !!item && (Array.isInstanceOfType(item) || typeof item.splice === "function")
}

function isInstanceOfTypeAcrossFrames(item, type)
{
    try
    {
        return IsNull(item) || IsNull(type) ? false : Object.getType(item).getName() === type.getName()
    }
    catch($$e_2)
    {
        return false
    }
}

function isNullOrEmptyString(str)
{
    return IsNull(str) || typeof str === "string" && !str.length
}

function getClass(obj)
{
    return Object.prototype.toString.call(obj).slice(8, -1)
}

function isOfClass(obj, soughtClass)
{
    return getClass(obj) === soughtClass
}
Mscrm.TypeNames = function() {};
Mscrm.ClassNames = function() {};
Mscrm.InlineContentLoader = function() {};
Mscrm.InlineContentLoader.$$cctor = function()
{
    Mscrm.InlineContentLoader.$1J = Mscrm.CrmHeader.get_scriptLoader();
    Mscrm.InlineContentLoader.$1d = Mscrm.CrmHeader.get_styleLoader()
};
Mscrm.InlineContentLoader.$7r = function($p0, $p1, $p2, $p3, $p4)
{
    Mscrm.InlineContentLoader.cancelCurrentRequest();
    Mscrm.InlineContentLoader.$S = new XMLHttpRequest;
    Mscrm.InlineContentLoader.$S.open($p2, $p0.toString(), true);
    $p2.toUpperCase() === "POST" && Mscrm.InlineContentLoader.$S.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    Mscrm.InlineContentLoader.$S.onreadystatechange = function()
    {
        if(Mscrm.InlineContentLoader.$S.readyState === 4)
        {
            Mscrm.InlineContentLoader.$S.onreadystatechange = null;
            if(Mscrm.InlineContentLoader.$S.status === 200 && Mscrm.InlineContentLoader.$S.getResponseHeader("Content-Type").indexOf("application/json") >= 0) $p3(Mscrm.InlineContentLoader.$S);
            else $p4(Mscrm.InlineContentLoader.$S)
        }
    };
    Mscrm.InlineContentLoader.$S.send($p1)
};
Mscrm.InlineContentLoader.requestJsonContentByGet = function(url, onSuccess, onFailure)
{
    Mscrm.InlineContentLoader.$7r(url, null, "GET", onSuccess, onFailure)
};
Mscrm.InlineContentLoader.requestJsonContentByPost = function(url, httpBody, onSuccess, onFailure)
{
    Mscrm.InlineContentLoader.$7r(url, httpBody, "POST", onSuccess, onFailure)
};
Mscrm.InlineContentLoader.cancelCurrentRequest = function()
{
    if(!IsNull(Mscrm.InlineContentLoader.$S))
    {
        Mscrm.InlineContentLoader.$S.onreadystatechange = null;
        Mscrm.InlineContentLoader.$S.abort();
        Mscrm.InlineContentLoader.$S = null
    }
    Mscrm.InlineContentLoader.$1J.cancelAnyCurrentProcessing()
};
Mscrm.InlineContentLoader.$7I = function($p0, $p1)
{
    var $v_0 = $get($p1 + $p0.id);
    if(IsNull($v_0))
    {
        $v_0 = document.createElement("div");
        $p0.parentNode.appendChild($v_0);
        $v_0.id = $p1 + $p0.id;
        $v_0.style.display = "none"
    }
    return $v_0
};
Mscrm.InlineContentLoader.loadJsonResponse = function(jsonResponse, container)
{
    var $v_0 = Mscrm.InlineContentLoader.$7I(container, "styleContainer_"),
        $v_1 = Mscrm.InlineContentLoader.$7I(container, "scriptContainer_");
    if(!IsNull(jsonResponse.Header))
    {
        !IsNull(jsonResponse.Header.Title) && !Mscrm.Utilities.isGlobalQuickCreateForm() && Mscrm.CrmHeader.loadTitle(jsonResponse.Header.Title);
        Mscrm.InlineContentLoader.$1d.loadStyles($v_0, jsonResponse.Header)
    }
    container.innerHTML = jsonResponse.Markup;
    !IsNull(jsonResponse.Header) && Mscrm.InlineContentLoader.$1J.loadScripts($v_1, jsonResponse.Header, true, true)
};
Mscrm.InlineContentLoader.loadHeaderJson = function(headerJson, container, async)
{
    var $v_0 = headerJson.State;
    if($v_0 === "complete") return;
    Mscrm.InlineContentLoader.$1d.loadStyles(container, headerJson);
    Mscrm.InlineContentLoader.$1J.loadScripts(container, headerJson, async, false)
};
Mscrm.NumberUtility = function() {};
Mscrm.NumberUtility.addFormatting = function(value, precision, noTrailingZeroes)
{
    var $v_0 = IsNull(precision) || precision < 0 ? 10 : precision,
        $v_1 = value.localeFormat("n" + $v_0.toString());
    if(IsNull(noTrailingZeroes)) noTrailingZeroes = false;
    if(!noTrailingZeroes) try
    {
        if(value !== Number.parseLocale($v_1))
        {
            var $v_2 = value.toString(10),
                $v_3 = Mscrm.NumberUtility.$7C($v_2, true),
                $v_4 = Mscrm.NumberUtility.$7C($v_1, false),
                $v_5 = "",
                $v_6 = Sys.CultureInfo.CurrentCulture.numberFormat["NumberDecimalSeparator"].toString().charAt(Sys.CultureInfo.CurrentCulture.numberFormat["NumberDecimalSeparator"].toString().length - 1);
            if($v_3 <= $v_4)
            {
                for(var $v_8 = $v_4 - $v_3, $v_7 = 0; $v_7 < $v_1.length; $v_7++)
                {
                    var $v_9 = $v_1.length - 1 - $v_7;
                    if($v_1.charAt($v_9) === $v_6) break;
                    if($v_7 >= $v_8) $v_5 = $v_2.charAt($v_2.length - 1 - $v_7 + $v_8) + $v_5;
                    else $v_5 = "0" + $v_5
                }
                $v_5 = $v_1.substring(0, $v_1.length - $v_7) + $v_5
            }
            if(value === Number.parseLocale($v_5)) $v_1 = $v_5
        }
    }
    catch($$e_D)
    {}
    return $v_1
};
Mscrm.NumberUtility.$7C = function($p0, $p1)
{
    for(var $v_0 = $p1 ? Sys.CultureInfo.InvariantCulture : Sys.CultureInfo.CurrentCulture, $v_1 = $v_0.numberFormat["NumberDecimalSeparator"].toString().charAt($v_0.numberFormat["NumberDecimalSeparator"].toString().length - 1), $v_2 = $p0.length - 1; $v_2 >= 0; $v_2--)
        if($p0.charAt($v_2) === $v_1) return $p0.length - $v_2 - 1;
    return 0
};
Mscrm.NumberUtility.fullWidthToHalfWidth = function(value)
{
    if(!isNullOrEmptyString(value))
        for(var $v_0 = 0; $v_0 < Mscrm.NumberUtility.$4x.length; $v_0++) value.replace(new RegExp(Mscrm.NumberUtility.$4x[$v_0], "g"), Mscrm.NumberUtility.$6D[$v_0]);
    return value
};
Mscrm.NumberUtility.locStringToFloat = function(value)
{
    try
    {
        return Number.parseLocale(Mscrm.NumberUtility.$7e(value))
    }
    catch($$e_1)
    {
        return Number.NaN
    }
};
Mscrm.NumberUtility.locStringToInt = function(value)
{
    try
    {
        return Math.floor(Number.parseLocale(Mscrm.NumberUtility.$7e(value)))
    }
    catch($$e_1)
    {
        return Number.NaN
    }
};
Mscrm.NumberUtility.$7e = function($p0)
{
    if(typeof $p0 !== "string" || isNullOrEmptyString($p0)) return "";
    var $v_0 = Mscrm.NumberUtility.fullWidthToHalfWidth($p0);
    return $v_0.replace(new RegExp("[\\s\u00a0]*", "g"), "")
};
Mscrm.NumberUtility.formatDuration = function(minutes)
{
    var $v_0 = null,
        $v_1 = 1e-8;
    if(minutes < 60)
    {
        var $v_2 = String.localeFormat("{0:N0}", minutes);
        if(IsNull($v_2) || !$v_2.length) return null;
        if(minutes === 1) $v_0 = String.format(window.LOCID_ONE_MINUTE_MASK, $v_2);
        else $v_0 = String.format(window.LOCID_N_MINUTES_MASK, $v_2)
    }
    else if(minutes >= 60 && minutes < 1440)
    {
        var $v_3 = minutes / 60,
            $v_4 = String.localeFormat("{0:N2}", $v_3);
        if(Math.abs($v_3 % 1) <= $v_1 || Math.abs($v_3 % 1 - 1) <= $v_1) $v_4 = String.localeFormat("{0:N0}", $v_3);
        if(IsNull($v_4) || !$v_4.length) return null;
        if($v_3 === 1) $v_0 = String.format(window.LOCID_ONE_HOUR_MASK, $v_4);
        else $v_0 = String.format(window.LOCID_N_HOURS_MASK, $v_4)
    }
    else if(minutes >= 1440)
    {
        var $v_5 = minutes / 60,
            $v_6 = $v_5 / 24,
            $v_7 = String.localeFormat("{0:N2}", $v_6);
        if(Math.abs($v_6 % 1) <= $v_1 || Math.abs($v_6 % 1 - 1) <= $v_1) $v_7 = String.localeFormat("{0:N0}", $v_6);
        if(IsNull($v_7) || !$v_7.length) return null;
        if($v_6 === 1) $v_0 = String.format(window.LOCID_ONE_DAY_MASK, $v_7);
        else $v_0 = String.format(window.LOCID_N_DAYS_MASK, $v_7)
    }
    return $v_0
};
Mscrm.PagePreloadInfo = function()
{
    this.$37_0 = (new Date).getTime()
};
Mscrm.PagePreloadInfo.prototype = {
    $51_0: false,
    $37_0: 0,
    $36_0: 0,
    $3D_0: null,
    $3V_0: 0,
    $3Q_0: 0,
    get_isLoaded: function()
    {
        return this.$51_0
    },
    set_isLoaded: function(value)
    {
        this.$51_0 = value;
        if(this.$51_0) this.$36_0 = (new Date).getTime();
        return value
    },
    get_preloadEndTime: function()
    {
        return this.$36_0
    },
    set_preloadEndTime: function(value)
    {
        this.$36_0 = value;
        return value
    },
    get_preloadStartTime: function()
    {
        return this.$37_0
    },
    set_preloadStartTime: function(value)
    {
        this.$37_0 = value;
        return value
    },
    get_windowInstance: function()
    {
        return this.$3D_0
    },
    set_windowInstance: function(value)
    {
        this.$3D_0 = value;
        return value
    },
    get_beforeWindowOpenedTime: function()
    {
        return this.$3V_0
    },
    set_beforeWindowOpenedTime: function(value)
    {
        this.$3V_0 = value;
        return value
    },
    get_afterWindowOpenedTime: function()
    {
        return this.$3Q_0
    },
    set_afterWindowOpenedTime: function(value)
    {
        this.$3Q_0 = value;
        return value
    }
};
Mscrm.PerformanceTracing = function() {};
Mscrm.PerformanceTracing.get_$8N = function()
{
    return window._perfTraceBuffer
};
Mscrm.PerformanceTracing.get_$8T = function()
{
    return !!Mscrm.PerformanceTracing.get_$6x()
};
Mscrm.PerformanceTracing.get_$6x = function()
{
    if(!Mscrm.PerformanceTracing.$3c)
    {
        var $v_0 = window.self,
            $v_1 = null;
        while($v_0)
        {
            var $v_2 = Mscrm.PerformanceTracing.$9F($v_0);
            if(!$v_2) break;
            $v_1 = $v_2;
            if($v_0.parent !== $v_0.self) $v_0 = $v_0.parent;
            else $v_0 = $v_0.opener
        }
        Mscrm.PerformanceTracing.$3c = $v_1
    }
    return Mscrm.PerformanceTracing.$3c
};
Mscrm.PerformanceTracing.onDocumentReady = function(e)
{
    document.readyState === "complete" && Mscrm.PerformanceTracing.write("ReadyState_Complete")
};
Mscrm.PerformanceTracing.onApplicationLoad = function(sender, e)
{
    window.setTimeout(Mscrm.PerformanceTracing.$A0, 0)
};
Mscrm.PerformanceTracing.write = function(id, url, message)
{
    var $v_0 = Mscrm.PerformanceTracing.get_$8N();
    if($v_0)
    {
        var $v_1 = new Mscrm.TraceEntry(id, message, (new Date).getTime(), url);
        Array.add($v_0, $v_1);
        Mscrm.PerformanceTracing.get_$8T() && Mscrm.PerformanceTracing.$91($v_0)
    }
};
Mscrm.PerformanceTracing.$91 = function($p0)
{
    for(var $v_0 = Mscrm.CrmUri.create(window.location.href), $v_1 = $p0.length, $v_2 = 0; $v_2 < $v_1; $v_2++)
    {
        var $v_3 = $p0[$v_2],
            $v_4 = $v_3.url ? Mscrm.CrmUri.create($v_3.url) : $v_0,
            $v_5 = String.format("{0} {1} {2}{3} {4}", $v_3.timestamp, $v_3.id, $v_4.get_path(), $v_4.get_queryString(), $v_3.message);
        Mscrm.PerformanceTracing.get_$6x().trace($v_5)
    }
    Array.clear($p0)
};
Mscrm.PerformanceTracing.$9F = function($p0)
{
    var $v_0 = null;
    try
    {
        $v_0 = $p0.Sys
    }
    catch($$e_2)
    {
        return null
    }
    if($v_0)
    {
        var $v_1 = $v_0.Debug;
        if($v_1 && $v_1.trace && $p0.document.getElementById("TraceConsole")) return $v_1
    }
    return null
};
Mscrm.PerformanceTracing.$A0 = function()
{
    Mscrm.PerformanceTracing.write("After_ApplicationLoad")
};
Mscrm.OutlookUtil = function() {};
Mscrm.OutlookUtil.get_uiUtil = function()
{
    if(IsNull(Mscrm.OutlookUtil.$4F))
    {
        var $v_0 = $get("crmRcUtil");
        if($v_0) Mscrm.OutlookUtil.$4F = $v_0
    }
    return Mscrm.OutlookUtil.$4F
};

function TryRefreshWebGrid(objectTypeCode, findValue, entityId)
{
    try
    {
        Mscrm.Grid.auto(objectTypeCode, findValue, entityId)
    }
    catch($$e_3)
    {}
}

function RefreshServiceCalendar()
{
    typeof window.refreshApptBook != "undefined" && window.refreshApptBook()
}
Mscrm.CacheScope = function() {};
Mscrm.ResponseType = function() {};
Mscrm.PageManager = function()
{
    this.$$d_$6h_3 = Function.createDelegate(this, this.$6h_3);
    this.$$d_applicationLoadHandler = Function.createDelegate(this, this.applicationLoadHandler);
    Mscrm.PageManager.initializeBase(this)
};
Mscrm.PageManager.get_instance = function()
{
    return $find("crmPageManager")
};
Mscrm.PageManager.get_isPageLoaded = function()
{
    return Mscrm.PageManager.$3q
};
Mscrm.PageManager.get_isUnloading = function()
{
    return Mscrm.PageManager.$1x
};
Mscrm.PageManager.isOutlookProxyPage = function()
{
    try
    {
        var $v_0;
        try
        {
            $v_0 = Mscrm.CrmUri.create(window.top.location.href)
        }
        catch($$e_1)
        {
            $v_0 = Mscrm.CrmUri.create(window.location.href)
        }
        if($v_0.get_path().toLowerCase() === "/_grid/outlookribboncontextgrid.aspx") return true
    }
    catch($$e_2)
    {}
    return false
};
Mscrm.PageManager.isFlatUIPage = function()
{
    try
    {
        var $v_0, $v_1 = false;
        try
        {
            $v_0 = Mscrm.CrmUri.create(window.top.location.href)
        }
        catch($v_4)
        {
            var $v_5 = $v_4.number;
            if($v_5 === -2146828218) $v_1 = true;
            $v_0 = Mscrm.CrmUri.create(window.location.href)
        }
        var $v_2 = Mscrm.CrmUri.create(window.location.href),
            $v_3 = window.parent ? Mscrm.CrmUri.create(window.parent.location.href) : null;
        if($v_0.get_scheme().toUpperCase() === "OUTLOOK" || $v_0.get_path().toUpperCase().endsWith("/STAGE.ASPX") || $v_1)
        {
            var $v_6 = window.self;
            do {
                $v_0 = Mscrm.CrmUri.create($v_6.location.href);
                $v_6 = $v_6.parent
            } while ($v_6 !== $v_6.parent && !$v_0.get_path().endsWith("/main.aspx"))
        }
        if($v_0.get_path().endsWith("main.aspx") && (window.self === window.parent || $v_2.get_query()["pagemode"] === "iframe" || $v_2.toString() === $v_0.toString() || $v_3 && $v_3.get_query()["pagemode"] === "iframe") && (typeof _ISFLATUIPAGE != "undefined" && _ISFLATUIPAGE || typeof window.parent._ISFLATUIPAGE != "undefined" && window.parent._ISFLATUIPAGE)) return true;
        else return false
    }
    catch($$e_7)
    {}
    return false
};
Mscrm.PageManager.isFlatObject = function(etc)
{
    var $v_0 = false;
    switch(etc)
    {
        case 4406:
        case 1:
        case 2:
        case 1080:
        case 1013:
        case 1048:
        case 4:
        case 3:
        case 9600:
        case 9603:
        case 9604:
        case 9602:
        case 112:
        case 4300:
        case 4400:
        case 4402:
        case 4401:
        case 123:
        case 3234:
        case 1010:
        case 1011:
        case 9605:
        case 1022:
        case 1026:
        case 1038:
        case 1083:
        case 1071:
        case 2029:
        case 1084:
        case 1085:
        case 1088:
        case 1089:
        case 8:
        case 1090:
        case 1091:
        case 9606:
        case 9100:
        case 9:
        case 1024:
        case 1025:
        case 1055:
        case 1056:
        case 2013:
        case 4200:
        case 4210:
        case 4201:
        case 4214:
        case 4001:
        case 4212:
        case 4207:
        case 4204:
        case 4202:
        case 9502:
        case 9508:
        case 4216:
        case 99:
        case 9300:
        case 8181:
        case 9750:
        case 9700:
        case 9702:
        case 4412:
        case 50:
        case 2020:
        case 1028:
        case 1049:
            $v_0 = true;
            break;
        default:
            $v_0 = etc >= 1e4;
            break
    }
    return $v_0
};
Mscrm.PageManager.isFlatUrl = function(url)
{
    var $v_0 = Mscrm.CrmUri.create(url);
    switch($v_0.get_path().toLowerCase())
    {
        case "/advancedfind/advfind.aspx":
        case "/advancedfind/fetchdata.aspx":
        case "/import/edit.aspx":
        case "/sfa/accts/edit.aspx":
        case "/sfa/conts/edit.aspx":
        case "/sfa/opps/edit.aspx":
        case "/sfa/comps/edit.aspx":
        case "/sfa/saleslit/edit.aspx":
        case "/sfa/opportunityproduct/edit.aspx":
        case "/sfa/customeraddress/edit.aspx":
        case "/sfa/leads/edit.aspx":
        case "/sfa/quotes/edit.aspx":
        case "/sfa/quotedetail/edit.aspx":
        case "/sfa/salesorder/edit.aspx":
        case "/sfa/salesorderdetail/edit.aspx":
        case "/sfa/invoice/edit.aspx":
        case "/sfa/invoicedetail/edit.aspx":
        case "/cs/cases/edit.aspx":
        case "/cs/contracts/edit.aspx":
        case "/cs/contractdetails/edit.aspx":
        case "/cs/home_managekb.aspx":
        case "/tools/admin/admin.aspx":
        case "/tools/adminsecurity/adminsecurity_area.aspx":
        case "/tools/productcatalog/productcatalog.aspx":
        case "/tools/documentmanagement/documentmanagement.aspx":
        case "/tools/datamanagement/datamanagement.aspx":
        case "/tools/servicemanagement/servicemanagement.aspx":
        case "/tools/business/business.aspx":
        case "/tools/social/social_area.aspx":
        case "/products/pricelevel/edit.aspx":
        case "/products/productpricelevel/edit.aspx":
        case "/products/discounttype/edit.aspx":
        case "/products/discounttypeitem/edit.aspx":
        case "/products/product/edit.aspx":
        case "/products/uom/edit.aspx":
        case "/products/uomschedule/edit.aspx":
        case "ma/camps/edit.aspx":
        case "ma/campaignactivity/edit.aspx":
        case "ma/campaignresponse/edit.aspx":
        case "ma/lists/edit.aspx":
        case "ma/bulkoperations/edit.aspx":
        case "/workplace/home_dashboards.aspx":
        case "/workplace/home_workplace.aspx":
        case "/workplace/home_activities.aspx":
        case "/sm/sites/edit.aspx":
        case "/biz/teams/edit.aspx":
        case "/biz/users/edit.aspx":
        case "/tools/queueitem/edit.aspx":
        case "/activities/phone/edit.aspx":
        case "/activities/appointment/edit.aspx":
        case "/activities/serviceappointment/edit.aspx":
        case "/activities/task/edit.aspx":
        case "/activities/letter/edit.aspx":
        case "/activities/email/edit.aspx":
        case "/activities/fax/edit.aspx":
        case "/userdefined/edit.aspx":
        case "/_root/homepage.aspx":
        case "/main.aspx":
        case "/routingruleitem/edit.aspx":
        case "/slaitem/edit.aspx":
        case "/convertruleitem/edit.aspx":
        case "/_forms/read/page.aspx":
            return true
    }
    return false
};
Mscrm.PageManager.prototype = {
    mode: null,
    $2k_3: null,
    $2l_3: null,
    initialize: function()
    {
        Mscrm.PageManagerBase.prototype.initialize.call(this);
        this.$2k_3 = this.$$d_applicationLoadHandler;
        Sys.Application.add_load(this.$2k_3);
        this.$2l_3 = this.$$d_$6h_3;
        Sys.Application.add_unload(this.$2l_3);
        this.$9_1.subscribeEvent(74, this.get_id())
    },
    applicationLoadHandler: function(sender, args)
    {
        if(!IsNull(this.$2k_3))
        {
            Sys.Application.remove_load(this.$2k_3);
            this.$2k_3 = null
        }
        this.loadHandler()
    },
    $6h_3: function($p0, $p1)
    {
        if(!IsNull(this.$2l_3))
        {
            Sys.Application.remove_unload(this.$2l_3);
            this.$2l_3 = null
        }
        this.unloadHandler()
    },
    handleEvent: function(eventCode, parameters, sourceComponent)
    {
        switch(eventCode)
        {
            case 74:
                Mscrm.Utilities.asyncInitAllControls();
                break
        }
        return Mscrm.CrmUIComponent.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent)
    },
    loadHandler: function()
    {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch("PageManager.LoadHandler");
        $v_0.start();
        this.get_$7Y_3() && Mscrm.PageManager.isFlatUIPage() && Mscrm.PageManager.isFlatUrl(window.parent.location.href) && this.linkParentEventManager(window.parent, "crmPageManager");
        this.raisePageLoadEvents(null);
        this.executePageOnLoadScripts();
        if(!this.$3i_2)
        {
            var $$t_1 = this;
            window.setTimeout(function()
            {
                $$t_1.internalExecuteDeferredActions(null)
            }, 0)
        }
        Mscrm.PageManager.$3q = true;
        $v_0.stop()
    },
    get_$7Y_3: function()
    {
        if(this.mode === "iframe") return true;
        if(window.self !== window.top) return true;
        return false
    },
    unloadHandler: function()
    {
        if(Mscrm.PageManager.$1x) return;
        else Mscrm.PageManager.$1x = true;
        if(this.get_$7Y_3())
            if(!IsNull(this.$i_2) && !this.$i_2._disposed && this.$9_1.$1w_1)
            {
                var $v_1 = this.$i_2.$9_1;
                !IsNull($v_1) && $v_1.unregisterTransientChildEventManager(this.$9_1.$22_1)
            }
        var $v_0 = {};
        $v_0["sourceUri"] = Mscrm.Utilities.getContentUrl(null);
        this.raiseEvent(29, $v_0)
    }
};
Mscrm.PageManagerBase = function()
{
    Mscrm.PageManagerBase.initializeBase(this)
};
Mscrm.PageManagerBase.get_pageLoadedEventCalled = function()
{
    return Mscrm.PageManagerBase.$41
};
Mscrm.PageManagerBase.set_pageLoadedEventCalled = function(value)
{
    Mscrm.PageManagerBase.$41 = value;
    return value
};
Mscrm.PageManagerBase.prototype = {
    initialize: function()
    {
        Mscrm.CrmUIComponent.prototype.initialize.call(this);
        this.$4m_2 = window.location.href
    },
    dispose: function()
    {
        if(this._disposed) return;
        this.$i_2 = null;
        this.$47_2 = null;
        this.$1p_2 = null;
        this.$3d_2 = null;
        this.$1y_2 = null;
        Mscrm.CrmUIComponent.prototype.dispose.call(this)
    },
    $i_2: null,
    get_parentPageManager: function()
    {
        return this.$i_2
    },
    $47_2: null,
    get_rootElement: function()
    {
        return this.$47_2
    },
    set_rootElement: function(value)
    {
        if(isNullOrEmptyString(value.toString())) this.$47_2 = document.body;
        else this.$47_2 = $get(value.toString());
        return value
    },
    get_parentWindowPageManager: function()
    {
        var $v_0 = null;
        try
        {
            $v_0 = window.top.opener.Sys.Application.findComponent("crmPageManager")
        }
        catch($$e_1)
        {}
        return $v_0
    },
    $4m_2: null,
    get_contentUrl: function()
    {
        return this.$4m_2
    },
    set_contentUrl: function(value)
    {
        this.$4m_2 = value;
        return value
    },
    $1p_2: null,
    get_deferredActionList: function()
    {
        return this.$1p_2
    },
    set_deferredActionList: function(value)
    {
        this.$1p_2 = value;
        return value
    },
    $3i_2: false,
    get_executeDeferredActionsOnDemand: function()
    {
        return this.$3i_2
    },
    set_executeDeferredActionsOnDemand: function(value)
    {
        this.$3i_2 = value;
        return value
    },
    $3d_2: null,
    get_deferredActionParameters: function()
    {
        return this.$3d_2
    },
    set_deferredActionParameters: function(value)
    {
        this.$3d_2 = value;
        return value
    },
    $1y_2: null,
    get_pageOnLoadScriptList: function()
    {
        return this.$1y_2
    },
    set_pageOnLoadScriptList: function(value)
    {
        this.$1y_2 = value;
        return value
    },
    executeDeferredActions: function(parameters)
    {
        this.internalExecuteDeferredActions(parameters)
    },
    linkParentEventManager: function(win, pageManagerId)
    {
        try
        {
            this.$i_2 = win.Sys.Application.findComponent(pageManagerId);
            if(IsNull(this.$i_2)) return
        }
        catch($$e_2)
        {
            return
        }
        var $v_0 = this.$i_2.$9_1;
        if(Mscrm.CrmBrowser.get_currentBrowser().$53_0 && $v_0 === this.$9_1) return;
        var $v_1 = $v_0.registerTransientChildEventManager(this.$9_1);
        this.$9_1.$1w_1 = true;
        this.$9_1.$22_1 = $v_1;
        this.$9_1.$b_1 = $v_0
    },
    raisePageLoadEvents: function(uri)
    {
        var $v_0 = {};
        $v_0["uri"] = isNullOrEmptyString(uri) ? window.location.href : uri;
        this.raiseEvent(57, $v_0);
        if(!document.body.offsetHeight || !document.body.offsetWidth) return;
        $v_0["sourceUri"] = Mscrm.Utilities.getContentUrl(null);
        this.raiseEvent(9, $v_0);
        Mscrm.PageManagerBase.$41 = true
    },
    executePageOnLoadScripts: function()
    {
        if(this.$1y_2 && this.$1y_2.length > 0)
        {
            var $v_0 = new Mscrm.Performance.PerformanceStopwatch("ExecutePageOnLoadScripts");
            $v_0.start();
            for(var $v_1 = 0; $v_1 < this.$1y_2.length; $v_1++) eval(this.$1y_2[$v_1]);
            $v_0.stop()
        }
    },
    internalExecuteDeferredActions: function(parameters)
    {
        if(this.$1p_2)
        {
            var $v_0 = Mscrm.CrmUri.create("");
            $v_0.appendToQuery(this.$3d_2.join("&"));
            var $v_1 = $v_0.get_query(),
                $$dict_3 = parameters;
            for(var $$key_4 in $$dict_3)
            {
                var $v_3 = {
                    key: $$key_4,
                    value: $$dict_3[$$key_4]
                };
                $v_1[$v_3.key] = $v_3.value
            }
            for(var $v_2 = this.$1p_2.length, $v_4 = 0; $v_4 < $v_2; $v_4++)
            {
                if(IsNull(this.$1p_2)) break;
                var $v_5 = this.$1p_2[$v_4],
                    $v_6 = {};
                $v_6["key"] = $v_5;
                var $v_7 = this.raiseEvent(10, $v_6);
                if(!$v_7 || !$v_7.length) continue;
                var $v_8 = $v_7[0],
                    $v_9 = Mscrm.DeferredActionHandlerFactory.create($v_8["handlerId"]);
                $v_9.handleDeferredAction($v_8, $v_1)
            }
        }
    },
    loadHandler: function() {},
    unloadHandler: function() {}
};
Mscrm.PerceivedCommandBarHelper = function() {};
Mscrm.PerceivedCommandBarHelper.get_asyncRealCommandBarShowUpHandle = function()
{
    return Mscrm.PerceivedCommandBarHelper.$2A
};
Mscrm.PerceivedCommandBarHelper.set_asyncRealCommandBarShowUpHandle = function(value)
{
    Mscrm.PerceivedCommandBarHelper.$5a();
    Mscrm.PerceivedCommandBarHelper.$2A = value;
    return value
};
Mscrm.PerceivedCommandBarHelper.addPerceivedCommandBar = function(uri)
{
    Mscrm.PerceivedCommandBarHelper.removePerceivedCommandBar();
    Mscrm.PerceivedCommandBarHelper.$5a();
    if(!IsNull(uri) && !uri.get_path().toUpperCase().endsWith("/MAIN.ASPX") && !Mscrm.SessionInfo.isOutlookClient())
    {
        var $v_0 = window.ORG_ID,
            $v_1 = window.USER_GUID,
            $v_2 = window.USER_LANGUAGE_CODE,
            $v_3 = Mscrm.PerceivedCommandBarHelper.$7L(uri),
            $v_4 = Mscrm.PerceivedCommandBarHelper.$7R(uri),
            $v_5 = Mscrm.PerceivedCommandBarHelper.$7P(uri),
            $v_6 = Mscrm.PerceivedCommandBarHelper.$8l($v_0, $v_1, $v_2, $v_3, $v_4, $v_5),
            $v_7 = Mscrm.CrmLocalStorage.getItem($v_6);
        Mscrm.PerceivedCommandBarHelper.$5T($v_7, $v_6)
    }
};
Mscrm.PerceivedCommandBarHelper.addFormPerceivedCommandBar = function(uri, isFromReload)
{
    Mscrm.PerceivedCommandBarHelper.removePerceivedCommandBar();
    Mscrm.PerceivedCommandBarHelper.$5a();
    if(!IsNull(uri) && uri.get_path().toUpperCase().endsWith("/LAYOUT.ASPX"))
    {
        var $v_0 = window.ORG_ID,
            $v_1 = window.USER_GUID,
            $v_2 = window.USER_LANGUAGE_CODE,
            $v_3 = Mscrm.PerceivedCommandBarHelper.$7L(uri),
            $v_4 = uri.get_query()["formid"];
        $v_4 = IsNull($v_4) ? "noformId" : $v_4;
        var $v_5 = Mscrm.PerceivedCommandBarHelper.$9f(),
            $v_6 = $v_5 && (IsNull(isFromReload) || !isFromReload),
            $v_7 = Mscrm.PerceivedCommandBarHelper.$7P(uri),
            $v_8 = Mscrm.PerceivedCommandBarHelper.$8o($v_0, $v_1, $v_2, $v_3, $v_4, $v_7, $v_6),
            $v_9 = Mscrm.CrmLocalStorage.getItem($v_8);
        Mscrm.PerceivedCommandBarHelper.$5T($v_9, $v_8)
    }
};
Mscrm.PerceivedCommandBarHelper.removePerceivedCommandBar = function()
{
    Mscrm.PerceivedCommandBarHelper.removeDesignatedBar(Mscrm.PerceivedCommandBarHelper.$24);
    Mscrm.PerceivedCommandBarHelper.removeDesignatedBar(Mscrm.PerceivedCommandBarHelper.$5w)
};
Mscrm.PerceivedCommandBarHelper.hasPerceivedCommandBar = function()
{
    var $v_0 = window.top.document.getElementById(Mscrm.PerceivedCommandBarHelper.$24);
    return !IsNull($v_0) && !isNullOrEmptyString($v_0.innerHTML)
};
Mscrm.PerceivedCommandBarHelper.switchCommandBars = function()
{
    var $v_0 = window.top.document.getElementById(Mscrm.PerceivedCommandBarHelper.$24),
        $v_1 = "",
        $v_2 = false;
    if(!IsNull($v_0))
    {
        $v_1 = $v_0.getAttribute(Mscrm.PerceivedCommandBarHelper.$5k);
        if(!IsNull($v_0.getAttribute(Mscrm.PerceivedCommandBarHelper.$4V)) && $v_0.getAttribute(Mscrm.PerceivedCommandBarHelper.$4V) === "true") $v_2 = true
    }
    Mscrm.PerceivedCommandBarHelper.removePerceivedCommandBar();
    var $v_3 = window.top.document.getElementById(Mscrm.PerceivedCommandBarHelper.$5c);
    if(!IsNull($v_3) && !$v_2) $v_3.style.visibility = "visible";
    !isNullOrEmptyString($v_1) && !IsNull($v_3) && Mscrm.CrmLocalStorage.setItem($v_1, $v_3.innerHTML)
};
Mscrm.PerceivedCommandBarHelper.$7L = function($p0)
{
    var $v_0 = $p0.get_query()["etc"];
    if(!isNullOrEmptyString($v_0)) return $v_0;
    return "none"
};
Mscrm.PerceivedCommandBarHelper.$7R = function($p0)
{
    var $v_0 = $p0.get_query()["sitemappath"];
    if(!isNullOrEmptyString($v_0)) return $v_0;
    return "nopath"
};
Mscrm.PerceivedCommandBarHelper.$9f = function()
{
    var $v_0 = window.RecordData["_entity"];
    if(!IsNull($v_0) && !IsNull($v_0["Id"]) && !IsNull($v_0["Id"].length) && !$v_0["Id"].length) return true;
    return false
};
Mscrm.PerceivedCommandBarHelper.$7P = function($p0)
{
    var $v_0 = $p0.get_path();
    if(!isNullOrEmptyString($v_0))
    {
        var $v_1 = $v_0.lastIndexOf("/");
        if($v_1 >= 0) return $v_0.substr($v_1 + 1, $v_0.length);
        else return $v_0
    }
    return "nopagename"
};
Mscrm.PerceivedCommandBarHelper.$5T = function($p0, $p1)
{
    var $v_0 = window.top.document.getElementById(Mscrm.PerceivedCommandBarHelper.$5c);
    if(!IsNull($v_0) && $v_0.style.display !== "none")
    {
        var $v_1 = $v_0.parentNode;
        if(!IsNull($v_1))
        {
            var $v_2 = document.createElement("div");
            $v_2.id = Mscrm.PerceivedCommandBarHelper.$24;
            if(IsNull($p1)) $p1 = "";
            $v_2.setAttribute(Mscrm.PerceivedCommandBarHelper.$5k, $p1);
            if(isNullOrEmptyString($p0)) $v_2.style.height = "0px";
            else
            {
                $v_0.style.height = "62px";
                $v_2.style.height = $v_0.style.height;
                try
                {
                    $v_2.innerHTML = $p0
                }
                catch($v_3)
                {
                    $v_2.innerHTML = "";
                    $v_2.style.height = "0px"
                }
            }
            $v_1.insertBefore($v_2, $v_0);
            if($v_2.style.height !== "0px")
            {
                var $v_4 = document.createElement("div");
                $v_4.id = Mscrm.PerceivedCommandBarHelper.$5w;
                var $v_5 = $v_2.style.height;
                $v_4.style.height = $v_5;
                XUI.Html.SetOpacity($v_4, 0);
                $v_4.style.position = "relative";
                $v_4.style.top = "-" + $v_5;
                $v_4.style.zIndex = 1;
                $v_1.insertBefore($v_4, $v_0)
            }
        }
    }
};
Mscrm.PerceivedCommandBarHelper.$8l = function($p0, $p1, $p2, $p3, $p4, $p5)
{
    return $p5 + "--" + $p4 + "--" + $p3 + "--" + $p2 + "--" + $p1 + "--" + $p0
};
Mscrm.PerceivedCommandBarHelper.$8o = function($p0, $p1, $p2, $p3, $p4, $p5, $p6)
{
    if($p6) return "New" + $p5 + "--" + $p3 + "--" + $p4 + "--" + $p2 + "--" + $p1 + "--" + $p0;
    else return "Existing" + $p5 + "--" + $p3 + "--" + $p4 + "--" + $p2 + "--" + $p1 + "--" + $p0
};
Mscrm.PerceivedCommandBarHelper.removeDesignatedBar = function(domId)
{
    var $v_0 = window.top.document.getElementById(domId);
    if(!IsNull($v_0))
    {
        var $v_1 = $v_0.parentNode;
        !IsNull($v_1) && $v_1.removeChild($v_0)
    }
};
Mscrm.PerceivedCommandBarHelper.setPerceivedCommandBarAsHidden = function()
{
    var $v_0 = window.top.document.getElementById(Mscrm.PerceivedCommandBarHelper.$24);
    if(IsNull($v_0))
    {
        var $v_1 = "",
            $v_2 = "";
        Mscrm.PerceivedCommandBarHelper.$5T($v_2, $v_1)
    }
    $v_0 = window.top.document.getElementById(Mscrm.PerceivedCommandBarHelper.$24);
    !IsNull($v_0) && $v_0.setAttribute(Mscrm.PerceivedCommandBarHelper.$4V, "true")
};
Mscrm.PerceivedCommandBarHelper.$5a = function()
{
    if(!IsNull(Mscrm.PerceivedCommandBarHelper.$2A))
    {
        window.clearTimeout(Mscrm.PerceivedCommandBarHelper.$2A);
        Mscrm.PerceivedCommandBarHelper.$2A = null
    }
};
Mscrm.PhoneUriBuilder = function() {};
Mscrm.PhoneUriBuilder.prototype = {
    buildUri: function(phoneNumber, countryCode, useSkypeProtocol)
    {
        var $v_0 = Mscrm.PhoneUriBuilder.DefaultProtocol.toString(0).toLowerCase(),
            $v_1 = new RegExp("[-()\\s]", "g");
        phoneNumber = phoneNumber.replace($v_1, "");
        var $v_2 = new RegExp("live:|skype:", "i");
        phoneNumber = phoneNumber.replace($v_2, "");
        var $v_3 = phoneNumber;
        if(useSkypeProtocol.toLowerCase() === "false") $v_0 = Mscrm.PhoneUriBuilder.DefaultProtocol.toString(1).toLowerCase();
        var $v_4 = new RegExp("^[0-9]", "i");
        if($v_4.test(phoneNumber) && !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(countryCode)) $v_3 = $v_0 + ":" + countryCode + phoneNumber;
        else $v_3 = $v_0 + ":" + phoneNumber;
        if(useSkypeProtocol.toLowerCase() === "true") $v_3 += "?call";
        return $v_3
    }
};
Mscrm.PhoneUriBuilder.DefaultProtocol = function() {};
Mscrm.PhoneUriBuilder.DefaultProtocol.prototype = {
    skype: 0,
    tel: 1
};
Mscrm.PhoneUriBuilder.DefaultProtocol.registerEnum("Mscrm.PhoneUriBuilder.DefaultProtocol", false);
Mscrm.RemoteCommandXml = function(service, command)
{
    this.$1b_0 = {};
    this.$3g_0 = Mscrm.RemoteCommandXml.remoteCommandXmlDefaultErrorHandler;
    this.$2Z_0 = service;
    this.$3Z_0 = command;
    this.$N_0 = new XMLHttpRequest;
    this.$1l_0 = false
};
Mscrm.RemoteCommandXml.getErrorMessage = function(xmlNode)
{
    if(IsNull(xmlNode)) return null;
    var $v_0 = "",
        $v_1 = XUI.Xml.SelectSingleNode(xmlNode, "error/description", null);
    if(IsNull($v_1)) $v_1 = XUI.Xml.SelectSingleNode(xmlNode, "internalservererror/error/description", null);
    if(!IsNull($v_1)) $v_0 = XUI.Xml.GetText($v_1);
    return $v_0
};
Mscrm.RemoteCommandXml.remoteCommandXmlDefaultErrorHandler = function(resultCode, xmlNode)
{
    if(IsNull(resultCode)) resultCode = "Not available";
    var $v_0 = Mscrm.RemoteCommandXml.getErrorMessage(xmlNode),
        $v_1 = Mscrm.ErrorInformation.createFromDoc(xmlNode);
    openErrorDlg(resultCode, $v_0, $v_1, -1, -1)
};
Mscrm.RemoteCommandXml.prototype = {
    $2Z_0: null,
    $3Z_0: null,
    $3y_0: null,
    $1l_0: false,
    $62_0: null,
    $1I_0: null,
    $N_0: null,
    $9s_0: function($p0, $p1)
    {
        return !isNullOrEmptyString($p0) && !isNullOrEmptyString($p1) && ($p0.toUpperCase() === "APPGRIDWEBSERVICE" && ($p1.toUpperCase() === "REFRESH" || $p1.toUpperCase() === "DISASSOCIATEANDREFRESH" || $p1.toUpperCase() === "DELETECONNECTIONANDREFRESH") || $p0.toUpperCase() === "MERGERECORDS" || $p0.toUpperCase() === "SYSTEMCUSTOMIZATION")
    },
    execute: function(funAsyncCallbackFunction)
    {
        var $v_0 = !IsNull(funAsyncCallbackFunction);
        this.$N_0.readyState > 0 && this.$N_0.readyState < 4 && this.abort();
        this.$N_0.onreadystatechange = null;
        if(this.$N_0.readyState === 4 && Mscrm.Utilities.isIE7() && $v_0) this.$N_0 = new XMLHttpRequest;
        var $v_1 = new String,
            $$dict_3 = this.$1b_0;
        for(var $$key_4 in $$dict_3)
        {
            var $v_5 = {
                key: $$key_4,
                value: $$dict_3[$$key_4]
            };
            $v_1 += "&" + CrmEncodeDecode.CrmUrlEncode($v_5.key) + "=" + CrmEncodeDecode.CrmUrlEncode($v_5.value)
        }
        var $v_2 = new Mscrm.MetricsStopwatch("RemoteCommandXml.Execute");
        $v_2.properties = {
            IsAsync: $v_0,
            Service: this.$2Z_0
        };
        $v_2.start();
        this.$3y_0 = Mscrm.CrmUri.create("/AppWebServices/" + CrmEncodeDecode.CrmUrlEncode(this.$2Z_0) + ".ashx?operation=" + CrmEncodeDecode.CrmUrlEncode(this.$3Z_0) + $v_1);
        if($v_0)
        {
            var $v_6 = new Mscrm.AsyncResultHandler(this, this.$N_0, funAsyncCallbackFunction);
            $v_6.metricsStopwatch = $v_2;
            this.$N_0.onreadystatechange = $v_6.$$d_readyStateChanged
        }
        var $v_3, $v_4 = null;
        do {
            $v_3 = false;
            this.$N_0.open("POST", this.$3y_0.toString(), $v_0);
            Mscrm.Utilities.setResponseTypeToMSXml(this.$N_0);
            Mscrm.MetricsReporting.instance().addXMLHttpRequestHeaders(this.$N_0);
            this.$9s_0(this.$2Z_0, this.$3Z_0) && Mscrm.WrpcTokenFuncs.setTokenInHeader(this.$N_0, this.$3y_0);
            this.$1l_0 = false;
            try
            {
                this.$N_0.send(this.$62_0);
                if(!$v_0)
                {
                    $v_4 = new Mscrm.RemoteCommandXmlResult(this, this.$N_0, $v_0);
                    if(!$v_4.$1e_0) $v_3 = $v_4.$5I_0;
                    else
                    {
                        var $v_7 = this.$N_0.getResponseHeader("REQ_ID");
                        if(!isNullOrEmptyString($v_7)) $v_2.properties["ReqId"] = $v_7;
                        $v_2.stop()
                    }
                }
            }
            catch($v_8)
            {
                var $v_9 = LOCID_REMOTECOMMAND_ERROR;
                $v_3 = confirm($v_9)
            }
            if($v_3) this.$N_0 = new XMLHttpRequest
        } while ($v_3);
        return $v_4
    },
    get_reference: function()
    {
        return this.$1I_0
    },
    set_reference: function(value)
    {
        this.$1I_0 = value;
        return value
    },
    get_aborted: function()
    {
        return this.$1l_0
    },
    set_aborted: function(value)
    {
        this.$1l_0 = value;
        return value
    },
    get_errorHandler: function()
    {
        return this.$3g_0
    },
    get_service: function()
    {
        return this.$2Z_0
    },
    get_command: function()
    {
        return this.$3Z_0
    },
    get_oUrl: function()
    {
        return this.$3y_0
    },
    setContent: function(value)
    {
        this.$62_0 = value
    },
    setParameter: function(key, value)
    {
        this.$1b_0[key] = CrmEncodeDecode.CrmUrlDecode(value)
    },
    abort: function()
    {
        if(!this.$1l_0)
        {
            this.$1l_0 = true;
            this.$N_0.abort()
        }
    }
};
Mscrm.AsyncResultHandler = function(remoteCommand, xmlHttp, functionCallback)
{
    this.$$d_readyStateChanged = Function.createDelegate(this, this.readyStateChanged);
    this.$45_0 = remoteCommand;
    this.$1h_0 = xmlHttp;
    this.$6C_0 = functionCallback
};
Mscrm.AsyncResultHandler.prototype = {
    $45_0: null,
    $1h_0: null,
    $6C_0: null,
    metricsStopwatch: null,
    readyStateChanged: function()
    {
        if(this.$1h_0.readyState === 4)
        {
            this.$1h_0.onreadystatechange = null;
            if(!this.$45_0.$1l_0 && this.$1h_0.status)
                if(Mscrm.Utilities.isIE11StandardOrIE11CompatibleMode() && !Mscrm.Utilities.isUsdClient())
                {
                    var $$t_0 = this;
                    window.setTimeout(function()
                    {
                        $$t_0.$7l_0()
                    }, 0)
                }
                else this.$7l_0()
        }
    },
    $7l_0: function()
    {
        this.$Ah_0();
        var $v_0 = new Mscrm.RemoteCommandXmlResult(this.$45_0, this.$1h_0, true);
        this.$6C_0($v_0, this.$45_0);
        this.$1h_0.abort()
    },
    $Ah_0: function()
    {
        if(this.metricsStopwatch)
        {
            if(this.$1h_0)
            {
                var $v_0 = this.$1h_0.getResponseHeader("REQ_ID");
                if(!isNullOrEmptyString($v_0))
                {
                    if(!this.metricsStopwatch.properties) this.metricsStopwatch.properties = {};
                    this.metricsStopwatch.properties["ReqId"] = $v_0
                }
            }
            this.metricsStopwatch.stop()
        }
    }
};
Mscrm.RemoteCommandXmlResult = function(remoteCommand, xmlHttp, asyncRequest)
{
    this.$5F_0 = remoteCommand;
    var $v_0 = new String,
        $v_1;
    if(xmlHttp.status === 500 && xmlHttp.responseText.indexOf("<?xml") > 0) $v_1 = XUI.Xml.LoadXml(xmlHttp.responseText.substr(xmlHttp.responseText.indexOf("<?xml")));
    else $v_1 = xmlHttp.responseXML;
    if(xmlHttp.status === 401) $v_0 = "0x80040277";
    else if(xmlHttp.status === 200)
    {
        this.$6a_0 = xmlHttp.responseText;
        this.$1e_0 = true
    }
    else
    {
        var $v_2 = !IsNull($v_1) ? XUI.Xml.SelectSingleNode($v_1, "error", null) : null;
        if(!IsNull($v_2))
        {
            $v_2 = XUI.Xml.SelectSingleNode($v_1, "error/code", null);
            if(!IsNull($v_2)) $v_0 = XUI.Xml.GetText($v_2)
        }
        else $v_0 = "ServerError"
    }
    if(this.$1e_0)
        if(this.$5F_0.$2Z_0.toUpperCase() === "APPGRIDWEBSERVICE")
        {
            if(xmlHttp.responseText.indexOf("gridXml") < 0)
            {
                $v_0 = "HttpXMLError";
                this.$1e_0 = false
            }
        }
        else if(xmlHttp.responseText.indexOf("internalservererror") > 0)
    {
        var $v_3 = XUI.Xml.SelectSingleNode($v_1, "internalservererror/error/code", null);
        if(!IsNull($v_3)) $v_0 = XUI.Xml.GetText($v_3);
        else $v_0 = "InternalServerError";
        this.$1e_0 = false
    }
    if(!this.$1e_0)
        if($v_0 === ERRORCODE_ETM)
        {
            if(!asyncRequest) this.$5I_0 = confirm(LOCID_ERRMSG_ETM_RETRY)
        }
        else !IsNull(remoteCommand.$3g_0) && remoteCommand.$3g_0($v_0, $v_1);
    if(!this.$1e_0);
};
Mscrm.RemoteCommandXmlResult.prototype = {
    $5I_0: false,
    $1e_0: false,
    $6a_0: null,
    $5F_0: null,
    get_remoteCommandXml: function()
    {
        return this.$5F_0
    },
    get_returnValue: function()
    {
        return this.$6a_0
    },
    get_success: function()
    {
        return this.$1e_0
    },
    get_retry: function()
    {
        return this.$5I_0
    }
};
Mscrm.InlinePageManager = function()
{
    Mscrm.InlinePageManager.initializeBase(this)
};
Mscrm.InlinePageManager.prototype = {
    initialize: function()
    {
        Mscrm.PageManagerBase.prototype.initialize.call(this);
        this.$9_1.subscribeEvent(71, this.get_id())
    },
    $6G_3: null,
    $6F_3: false,
    get_isPageLoaded: function()
    {
        return this.$6F_3
    },
    $3n_3: false,
    get_isUnloading: function()
    {
        return this.$3n_3
    },
    handleEvent: function(eventCode, parameters, sourceComponent)
    {
        switch(eventCode)
        {
            case 71:
                this.$6G_3 = parameters["uri"];
                this.loadHandler();
                break
        }
        return null
    },
    loadHandler: function()
    {
        Mscrm.PageManager.isFlatUIPage() && Mscrm.PageManager.isFlatUrl(window.location.href) && this.linkParentEventManager(window.self, "crmPageManager");
        this.raisePageLoadEvents(this.$6G_3);
        this.executePageOnLoadScripts();
        if(!this.$3i_2)
        {
            var $$t_0 = this;
            window.setTimeout(function()
            {
                $$t_0.internalExecuteDeferredActions(null)
            }, 0)
        }
        this.$6F_3 = true
    },
    unloadHandler: function()
    {
        if(this.$3n_3) return;
        else this.$3n_3 = true;
        if(!IsNull(this.$i_2) && this.$9_1.$1w_1)
        {
            var $v_1 = this.$i_2.$9_1;
            !IsNull($v_1) && $v_1.unregisterTransientChildEventManager(this.$9_1.$22_1)
        }
        var $v_0 = {};
        $v_0["sourceUri"] = Mscrm.Utilities.getContentUrl(null);
        this.raiseEvent(29, $v_0);
        this.$3n_3 = false
    }
};
Mscrm.InlineDialog = function(hostingElementId, url, width, height, isModeless, zindex)
{
    this.$$d_$5p_0 = Function.createDelegate(this, this.$5p_0);
    this.$$d_$A4_0 = Function.createDelegate(this, this.$A4_0);
    this.$$d_$8U_0 = Function.createDelegate(this, this.$8U_0);
    this.$$d_$A5_0 = Function.createDelegate(this, this.$A5_0);
    this.$1Z_0 = hostingElementId;
    this.$s_0 = url;
    this.$C_0 = width;
    this.$A_0 = height;
    this.$3p_0 = isModeless;
    this.$F_0 = null;
    this.$3F_0 = parseInt(zindex.toString(), 10);
    this.$R_0 = Number.NaN;
    this.$M_0 = Number.NaN
};
Mscrm.InlineDialog.get_allInlineDialogs = function()
{
    if(IsNull(Mscrm.InlineDialog.$3S)) Mscrm.InlineDialog.$3S = {};
    return Mscrm.InlineDialog.$3S
};
Mscrm.InlineDialog.resize = function(hostingElementId, width, height)
{
    var $v_0 = window.top.document.getElementById(hostingElementId + "_Iframe");
    $v_0.style.height = height + "px";
    $v_0.style.width = width + "px"
};
Mscrm.InlineDialog.closeDialog = function(hostingElementId)
{
    var $v_0 = hostingElementId + "_Background",
        $v_1 = Mscrm.InlineDialogUtility.get_topWindow().document.getElementById($v_0),
        $v_2 = Mscrm.InlineDialogUtility.get_topWindow().document.getElementById(hostingElementId);
    if(Mscrm.Performance.GlobalObjectTrackingManager.get_trackingEnabled())
    {
        var $v_3 = $v_2.AllInlineDialogs;
        if(!IsNull($v_3) && hostingElementId in $v_3) delete $v_3[hostingElementId]
    }
    if((window.UseTabletExperience || Mscrm.InlineDialogUtility.isMobileClient()) && $v_2.style.display === "none") return;
    Mscrm.InlineDialog.$6r($v_1, $v_2)
};
Mscrm.InlineDialog.$AL = function()
{
    try
    {
        Mscrm.Utilities.isIE10OrHigher() && Mscrm.InlineDialogUtility.get_topWindow().document.queryCommandSupported("ms-clearUndoStack") && Mscrm.InlineDialogUtility.get_topWindow().document.execCommand("ms-clearUndoStack", false, null)
    }
    catch($$e_0)
    {}
};
Mscrm.InlineDialog.$AI = function($p0, $p1)
{
    if(!IsNull($p0))
    {
        if("ontouchstart" in document)
        {
            $removeHandler($p0, "touchstart", Mscrm.InlineDialog.$4f);
            $removeHandler($p0, "touchmove", Mscrm.InlineDialog.$4f)
        }
        $p0.style.display = "none"
    }
    if(!IsNull($p1))
    {
        Mscrm.Utilities.isFirefox() && Mscrm.InlineDialog.$7o($p1);
        $p1.style.display = "none";
        var $v_0 = Mscrm.InlineDialogUtility.get_topWindow().document.getElementById($p1.id + "_Iframe");
        if(!IsNull($v_0))
        {
            $clearHandlers($v_0);
            !IsNull($v_0.contentWindow) && $v_0.contentWindow.location.replace("about:blank");
            var $v_1 = $v_0.contentDocument || $v_0.contentWindow.document;
            if(!IsNull($v_1.body))
            {
                Mscrm.Utilities.isFirefox() && $clearHandlers($v_1.body);
                $v_1.body.innerHTML = ""
            }
        }
    }
    return
};
Mscrm.InlineDialog.$6q = function($p0, $p1)
{
    if(!IsNull($p0))
        if(Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version < 7)
        {
            var $v_0 = window.top.document.getElementById("previousDialogBackGroundElement");
            !IsNull($v_0) && window.top.document.body.removeChild($v_0);
            $p0.id = "previousDialogBackGroundElement"
        }
        else Mscrm.InlineDialogUtility.get_topWindow().document.body.removeChild($p0);
    if(!IsNull($p1))
    {
        var $v_1 = Mscrm.InlineDialogUtility.get_topWindow().document.getElementById($p1.id + "_Iframe");
        if(Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version < 7)
        {
            var $v_2 = window.top.document.getElementById("oldDialogHostElement");
            !IsNull($v_2) && window.top.document.body.removeChild($v_2);
            $v_1.id = " inlineDialog_oldIframe";
            $v_1.setAttribute("name", " inlineDialog_oldIframe");
            $p1.id = "oldDialogHostElement"
        }
        else Mscrm.InlineDialogUtility.get_topWindow().document.body.removeChild($p1)
    }
    return
};
Mscrm.InlineDialog.$6r = function($p0, $p1)
{
    Mscrm.InlineDialog.$AL();
    if(!IsNull($p1))
    {
        var $v_0 = $p1.internalCallbackReference;
        !IsNull($v_0) && Mscrm.Utilities.executeFunction($v_0, null)
    }
    Mscrm.InlineDialog.$AI($p0, $p1);
    if(window.UseTabletExperience || Mscrm.InlineDialogUtility.isMobileClient() && Mscrm.Utilities.isIPad()) window.setTimeout(function()
    {
        Mscrm.InlineDialog.$6q($p0, $p1)
    }, 0);
    else Mscrm.InlineDialog.$6q($p0, $p1);
    return
};
Mscrm.InlineDialog.$7o = function($p0)
{
    if(!IsNull($p0))
    {
        var $v_0 = $p0.keydownHandlerAdded,
            $v_1 = 0;
        if(!IsNull($v_0)) $v_1 = $v_0;
        $v_1 === 1 && $removeHandler($p0, "keydown", Mscrm.InlineDialog.$7f)
    }
};
Mscrm.InlineDialog.$4f = function($p0)
{
    $p0.stopPropagation();
    $p0.preventDefault()
};
Mscrm.InlineDialog.$7f = function($p0)
{
    $p0.keyCode === 27 && Mscrm.InlineDialog.closeDialog($p0.target.id)
};
Mscrm.InlineDialog.prototype = {
    $1Z_0: null,
    $s_0: null,
    $C_0: 0,
    $A_0: 0,
    $3p_0: false,
    $3F_0: 0,
    $R_0: 0,
    $M_0: 0,
    $F_0: null,
    $V_0: null,
    $y_0: null,
    $3l_0: null,
    $2D_0: null,
    $x_0: null,
    $c_0: null,
    $h_0: null,
    $1W_0: null,
    $11_0: null,
    $2J_0: null,
    show: function()
    {
        IsNull(this.$F_0) && this.$6w_0();
        $addHandler(this.$y_0, "load", this.$$d_$A5_0);
        this.$F_0.style.height = this.$A_0 + "px";
        this.$F_0.style.width = this.$C_0 + "px";
        this.$F_0.tabIndex = 1;
        var $v_0 = 0;
        if(!(Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version < 9))
        {
            $addHandler(this.$F_0, "keydown", Mscrm.InlineDialog.$7f);
            $v_0 = 1
        }
        this.$F_0.keydownHandlerAdded = $v_0;
        this.$y_0.style.height = this.$A_0 + "px";
        this.$y_0.style.width = this.$C_0 + "px";
        this.$y_0.style.border = "0px";
        this.$y_0.setAttribute("src", this.$s_0.toString());
        this.$c_0.style.height = this.$A_0 + "px";
        this.$c_0.style.width = this.$C_0 + "px";
        this.$c_0.style.top = "50%";
        this.$c_0.style.left = "50%";
        this.$c_0.style.marginTop = -(this.$A_0 / 2) + "px";
        this.$c_0.style.marginLeft = -(this.$C_0 / 2) + "px";
        this.$c_0.style.zIndex = this.$3F_0 + 2;
        this.$F_0.focus();
        if(Mscrm.Performance.GlobalObjectTrackingManager.get_trackingEnabled())
        {
            if(!(this.$1Z_0 in Mscrm.InlineDialog.get_allInlineDialogs())) Mscrm.InlineDialog.get_allInlineDialogs()[this.$1Z_0] = this;
            this.$F_0.AllInlineDialogs = Mscrm.InlineDialog.get_allInlineDialogs()
        }
    },
    close: function()
    {
        if(Mscrm.Performance.GlobalObjectTrackingManager.get_trackingEnabled() && this.$1Z_0 in Mscrm.InlineDialog.get_allInlineDialogs()) delete Mscrm.InlineDialog.get_allInlineDialogs()[this.$1Z_0];
        Mscrm.InlineDialog.$6r(this.$V_0, this.$F_0);
        !IsNull(this.$x_0) && $clearHandlers(this.$x_0)
    },
    setPosition: function(left, top)
    {
        this.$R_0 = left;
        this.$M_0 = top
    },
    setInternalCallbackReference: function(internalCallbackReference)
    {
        this.$2J_0 = internalCallbackReference
    },
    $6v_0: function()
    {
        var $v_0 = this.$1Z_0 + "_Background";
        this.$V_0 = document.createElement("div");
        this.$V_0.id = $v_0;
        Mscrm.InlineDialogUtility.get_topWindow().document.body.appendChild(this.$V_0);
        this.$V_0.className = "ms-crm-InlineDialogBackground";
        this.$V_0.style.position = "absolute";
        this.$V_0.style.width = "100%";
        this.$V_0.style.height = "100%";
        this.$V_0.style.top = "0px";
        this.$V_0.style.backgroundColor = "grey";
        this.$V_0.style.zIndex = this.$3F_0;
        this.$V_0.tabIndex = 0;
        XUI.Html.SetOpacity(this.$V_0, .5);
        if("ontouchstart" in document)
        {
            $addHandler(this.$V_0, "touchstart", Mscrm.InlineDialog.$4f);
            $addHandler(this.$V_0, "touchmove", Mscrm.InlineDialog.$4f)
        }
    },
    $8q_0: function()
    {
        var $v_0 = Mscrm.Utilities.isMobileRefresh() ? "/_imgs/progressbar.gif" : "/_imgs/AdvFind/progress.gif";
        this.$c_0 = document.createElement("div");
        this.$c_0.id = "DialogLoadingDiv";
        this.$c_0.innerHTML = String.format("<table class='ms-crm-LoadingContainer' style='width:100%;height:100%'>\r\n\t\t\t\t\t<tr class='ms-crm-LoadingContainer'>\r\n\t\t\t\t\t\t<td style='vertical-align: middle' align='center'>\r\n\t\t\t\t\t\t\t<IMG id='DialogLoadingDivImg' alt='' src='{1}'>\r\n\t\t\t\t\t\t\t<br>{0}\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>", CrmEncodeDecode.CrmHtmlEncode(window.LOCID_PAGELOADING_MSG), $v_0);
        this.$c_0.style.position = "absolute";
        this.$c_0.style.backgroundColor = "white"
    },
    $8k_0: function()
    {
        this.$2D_0 = document.createElement("div");
        this.$2D_0.style.zIndex = this.$3F_0 + 3;
        this.$2D_0.style.width = this.$C_0 + "px";
        this.$2D_0.className = "ms-crm-InlineDialogCloseContainer";
        var $v_0 = document.createElement("div");
        $v_0.className = "ms-crm-InlineDialogCloseInnerContainer";
        var $v_1 = document.createElement("img");
        $v_1.className = "ms-crm-InlineDialogCloseImage";
        $v_1.src = Mscrm.CrmUri.create("/_imgs/CloseDialog.png").toString();
        $v_1.alt = window.LOCID_CANCEL_BUTTON_CAPTION;
        this.$x_0 = document.createElement("a");
        this.$x_0.tabIndex = 0;
        this.$x_0.className = "ms-crm-HandCursor";
        this.$x_0.id = "InlineDialogCloseLink";
        this.$x_0.title = window.LOCID_CANCEL_BUTTON_CAPTION;
        this.$x_0.appendChild($v_1);
        $addHandler(this.$x_0, "click", this.$$d_$8U_0);
        $v_0.appendChild(this.$x_0);
        this.$2D_0.appendChild($v_0)
    },
    $8U_0: function($p0)
    {
        this.close()
    },
    $8p_0: function()
    {
        var $v_0 = this.$1Z_0 + "_Iframe";
        this.$y_0 = document.createElement("iframe");
        this.$y_0.id = $v_0;
        this.$y_0.setAttribute("name", $v_0);
        if(Mscrm.InlineDialogUtility.isMobileClient()) this.$y_0.isMobileClient = true
    },
    $6w_0: function()
    {
        !this.$3p_0 && this.$6v_0();
        this.$F_0 = document.createElement("div");
        this.$F_0.id = this.$1Z_0;
        Mscrm.InlineDialogUtility.get_topWindow().document.body.appendChild(this.$F_0);
        this.$F_0.className = "ms-crm-DialogChrome";
        this.$F_0.style.position = "absolute";
        this.$F_0.style.top = "50%";
        this.$F_0.style.left = "50%";
        this.$F_0.style.zIndex = this.$3F_0 + 1;
        if(isNaN(this.$R_0) || isNaN(this.$M_0))
        {
            this.$F_0.style.marginTop = -(this.$A_0 / 2) + "px";
            this.$F_0.style.marginLeft = -(this.$C_0 / 2) + "px"
        }
        else
        {
            this.$F_0.style.top = this.$M_0 + "px";
            this.$F_0.style.left = this.$R_0 + "px"
        }
        this.$8q_0();
        this.$8p_0();
        if(this.$s_0.get_isWebResource())
        {
            this.$8k_0();
            this.$F_0.appendChild(this.$2D_0)
        }
        this.$F_0.appendChild(this.$y_0);
        this.$F_0.appendChild(this.$c_0);
        if(!IsNull(this.$2J_0)) this.$F_0.internalCallbackReference = this.$2J_0
    },
    $5p_0: function($p0)
    {
        $p0.keyCode === 27 && this.close();
        if(!this.$h_0 && !this.$11_0) return;
        if($p0.target === this.$h_0 && $p0.keyCode === 9 && $p0.shiftKey) Mscrm.InlineDialogUtility.overrideFocusOnTab(this.$11_0, $p0);
        else $p0.target === this.$11_0 && $p0.keyCode === 9 && !$p0.shiftKey && Mscrm.InlineDialogUtility.overrideFocusOnTab(this.$h_0, $p0)
    },
    $A5_0: function($p0)
    {
        var $v_0 = $p0.target,
            $v_1 = $v_0.contentDocument || $v_0.contentWindow.document;
        this.$AO_0($v_1);
        if(!Mscrm.Utilities.isFirefox())
        {
            this.$3l_0 = $v_0.contentWindow;
            $addHandler(this.$3l_0, "unload", this.$$d_$A4_0)
        }
        $addHandler($v_1.body, "keydown", this.$$d_$5p_0);
        $removeHandler($v_0, "load", this.$$d_$A5_0);
        if(!this.$s_0.get_isWebResource()) $v_0.parentNode.getElementsByTagName("div")[0].style.display = "none";
        else $v_0.parentNode.getElementsByTagName("div")[2].style.display = "none";
        this.$AN_0($v_0);
        if(this.$s_0.get_isSocialInsightsConfigWizard()) $v_0.contentWindow.getInlineDialogArguments();
        else !this.$s_0.get_isWebResource() && $v_0.contentWindow.getDialogArguments.apply($v_0.contentWindow)
    },
    $A4_0: function($p0)
    {
        !IsNull(this.$F_0) && Mscrm.InlineDialog.$7o(this.$F_0);
        var $v_0 = this.$3l_0,
            $v_1 = null;
        if(Mscrm.Utilities.isIE9OrHigher())
        {
            $v_0 = $p0.target;
            if(!IsNull($v_0) && !IsNull($v_0.document) && !IsNull($v_0.document.body)) $v_1 = $v_0.document.body
        }
        else if(!IsNull($v_0) && !IsNull($v_0.document) && !IsNull($v_0.document.body)) $v_1 = $v_0.document.body;
        !IsNull($v_0) && $removeHandler($v_0, "unload", this.$$d_$A4_0);
        !IsNull($v_1) && $removeHandler($v_1, "keydown", this.$$d_$5p_0);
        this.$3l_0 = null
    },
    $AO_0: function($p0)
    {
        var $v_0 = $p0.body;
        this.$h_0 = $p0.getElementById("btnCross");
        var $v_1 = IsNull($v_0.querySelector) ? Mscrm.Utilities.getChildElementsByClassNameRecursive($v_0, "div.ms-crm-RefreshDialog-Header", true)[0] : $v_0.querySelector("div.ms-crm-RefreshDialog-Header");
        if(!IsNull($v_1))
        {
            var $v_2 = null,
                $v_3 = $v_1.getAttribute("overrideDefaultFocus");
            if(!IsNull($v_3) && Boolean.parse($v_3.toString()))
            {
                this.$1W_0 = $p0.getElementById($v_1.getAttribute("overriddenFirstFocusableOnLoadElementId").toString());
                $v_2 = $p0.getElementById($v_1.getAttribute("overriddenFirstFocusableElementId").toString())
            }
            else
            {
                this.$1W_0 = Mscrm.InlineDialogUtility.findFirstFocusableElement($v_0);
                if(IsNull(this.$1W_0)) this.$1W_0 = $p0.getElementById("butBegin")
            }
            if(IsNull($v_2)) $v_2 = this.$1W_0;
            this.$AT_0($v_1, $v_2)
        }
        this.$11_0 = $p0.getElementById("cmdDialogCancel");
        if(IsNull(this.$11_0)) this.$11_0 = $get("butBegin")
    },
    $AT_0: function($p0, $p1)
    {
        if(!IsNull($p1))
        {
            var $v_0 = IsNull($p1.attributes) ? null : $p1.getAttribute("tabindex", 2);
            if(!IsNull($v_0) && $v_0 !== 32768)
            {
                if(!IsNull(this.$h_0)) this.$h_0.tabIndex = $v_0;
                var $v_1 = $get("btnHelp", $p0);
                if(!IsNull($v_1)) $v_1.tabIndex = $v_0
            }
        }
    },
    $AN_0: function($p0)
    {
        var $$t_3 = this;
        window.setTimeout(function()
        {
            if(IsNull($p0) || $p0.parentNode.style.display === "none") return;
            var $v_0 = $p0.contentDocument || $p0.contentWindow.Document;
            if(IsNull($v_0)) return;
            $p0.focus();
            $v_0.body.focus();
            if(!IsNull($$t_3.$1W_0) && !$$t_3.$1W_0.disabled) try
            {
                $$t_3.$1W_0.focus()
            }
            catch($$e_2)
            {
                !IsNull($$t_3.$h_0) && $$t_3.$h_0.focus()
            }
        }, 0)
    }
};
Mscrm.InlineDialogUtility = function() {};
Mscrm.InlineDialogUtility.close = function(hostingElementId)
{
    Mscrm.InlineDialog.closeDialog(hostingElementId)
};
Mscrm.InlineDialogUtility.createInlineDialog = function(url, args, width, height, left, top, zindex)
{
    var $v_0 = Mscrm.InlineDialogUtility.generateNextInlineDialogId("InlineDialog");
    if(IsNull(args) || isNullOrEmptyString(args.toString())) args = {};
    args.InlineDialogId = $v_0;
    args.opener = window.self;
    if(isNaN(zindex)) zindex = Mscrm.InlineDialogUtility.obtainTopmostInlineDialogZIndex();
    var $v_1 = new Mscrm.InlineDialog($v_0, url, width, height, false, zindex),
        $v_2 = args.internalCallbackReference;
    !IsNull($v_2) && $v_1.setInternalCallbackReference($v_2);
    $v_1.setPosition(left, top);
    $v_1.show();
    if(Mscrm.InlineDialogUtility.isMobileClient()) window.parent[$v_0 + "_childDialogArguments"] = args;
    else
    {
        var $v_3 = window.parent,
            $v_4 = $v_3.parent;
        while($v_4 !== $v_3)
        {
            $v_3 = $v_4;
            $v_4 = $v_3.parent
        }
        $v_4[$v_0 + "_childDialogArguments"] = args
    }
};
Mscrm.InlineDialogUtility.obtainTopmostInlineDialogZIndex = function()
{
    var $v_0 = 1005,
        $v_1 = function($p1_0)
        {
            if(!IsNull($p1_0.id) && $p1_0.id.indexOf("InlineDialog") >= 0)
                if($p1_0.style.zIndex > $v_0) $v_0 = $p1_0.style.zIndex;
            return false
        };
    XUI.Html.DomUtils.ForEachChild(Mscrm.InlineDialogUtility.get_topWindow().document.body, $v_1);
    return $v_0
};
Mscrm.InlineDialogUtility.generateNextInlineDialogId = function(baseElementId)
{
    var $v_0 = Mscrm.InlineDialogUtility.get_topWindow().document.getElementById(baseElementId);
    if(!IsNull($v_0)) return Mscrm.InlineDialogUtility.generateNextInlineDialogId(baseElementId + "1");
    else return baseElementId
};
Mscrm.InlineDialogUtility.findFirstFocusableElement = function(container)
{
    var $v_0 = IsNull(container.attributes) ? null : container.getAttribute("tabindex", 2),
        $v_1 = IsNull($v_0) || $v_0 === 32768 || $v_0 === "-1" ? null : container;
    if(XUI.Html.DomUtils.HasChildElements(container))
    {
        var $v_2 = function($p1_0)
        {
            if(!IsNull($v_1) && $v_1.id !== "btnHelp" && $v_1.id !== "btnCross" && $v_1.clientHeight)
            {
                var $v_3 = $v_1.disabled;
                if(IsNull($v_3) || !$v_3) return true;
                else
                {
                    $v_1 = Mscrm.InlineDialogUtility.findFirstFocusableElement($p1_0);
                    return false
                }
            }
            else
            {
                $v_1 = Mscrm.InlineDialogUtility.findFirstFocusableElement($p1_0);
                return false
            }
        };
        XUI.Html.DomUtils.ForEachChild(container, $v_2)
    }
    return $v_1
};
Mscrm.InlineDialogUtility.overrideFocusOnTab = function(nextFocusableElement, domEvent)
{
    domEvent.stopPropagation();
    domEvent.preventDefault();
    !IsNull(nextFocusableElement) && window.setTimeout(function()
    {
        nextFocusableElement.focus()
    }, 0)
};
Mscrm.InlineDialogUtility.closeAllInlineDialogs = function()
{
    var $v_0 = window.top.document.getElementById("InlineDialog"),
        $v_1 = window.top.document.getElementById("InlineDialog1");
    if(IsNull($v_0) && IsNull($v_1)) return false;
    var $v_2 = "InlineDialog11";
    do {
        !IsNull($v_0) && Mscrm.InlineDialogUtility.close($v_0.id);
        $v_0 = $v_1;
        $v_1 = window.top.document.getElementById($v_2);
        $v_2 = $v_2 + "1"
    } while (!(IsNull($v_0) && IsNull($v_1)));
    return true
};
Mscrm.InlineDialogUtility.isMobileClient = function()
{
    var $v_0 = window.self.isMobileHosted;
    if(!IsNull($v_0)) return $v_0;
    var $v_1 = false,
        $v_2 = window.self.isMobileClient;
    if(IsNull($v_2))
    {
        var $v_3 = Mscrm.CrmUri.create(window.self.location.href),
            $v_4 = "dType" in $v_3.get_query() ? $v_3.get_query()["dType"] : null;
        $v_1 = $v_4 === "2"
    }
    else $v_1 = $v_2;
    window.self.isMobileHosted = $v_1;
    return $v_1
};
Mscrm.InlineDialogUtility.get_topWindow = function()
{
    return Mscrm.InlineDialogUtility.isMobileClient() ? window.parent : window.top
};
Mscrm.ReportViewType = function() {};
Mscrm.ReportUtil = function() {};
Mscrm.ReportUtil.downloadReport = function(id)
{
    var $v_0 = Mscrm.CrmUri.create("/CRMReports/download.aspx");
    $v_0.get_query()["id"] = id;
    var $v_1 = "frmRptDownload",
        $v_2 = $get($v_1);
    if(IsNull($v_2))
    {
        $v_2 = window.document.createElement("iframe");
        $v_2.style.display = "none";
        $v_2.id = $v_1;
        $v_2.setAttribute("name", $v_1);
        $v_2.src = Mscrm.CrmUri.create("/_static/blank.htm").toString();
        window.document.body.insertBefore($v_2, XUI.Html.DomUtils.GetFirstChild(window.document.body));
        $v_2.contentWindow.name = $v_1;
        var $v_3 = String.format("$get({0}).src = {1}", CrmEncodeDecode.CrmJavaScriptEncode($v_1), CrmEncodeDecode.CrmJavaScriptEncode($v_0.toString()));
        window.setTimeout($v_3, 10)
    }
    else $v_2.src = $v_0.toString()
};
Mscrm.ReportUtil.handleReportDoubleClick = function(sender, args)
{
    var $v_0 = args.objectRow,
        $v_1 = args.objectID;
    Mscrm.ReportUtil.viewReport(parseInt($v_0.getAttribute("reporttypecode"), 10), $v_1, $v_0.getAttribute("filename"), "dblclick", null);
    args.breakEvent = true
};
Mscrm.ReportUtil.isValidReportName = function(reportName)
{
    if(IsNull(reportName) || !reportName.length) return false;
    var $v_0 = new RegExp('[;\\?:@&=\\+\\$,\\\\\\*<>\\|"\\/]'),
        $v_1 = new RegExp("[^ .]");
    return !$v_0.test(reportName) && $v_1.test(reportName)
};
Mscrm.ReportUtil.runReportWizard = function(reportId, createOrgReport)
{
    var $v_0 = 800,
        $v_1 = 530,
        $v_2 = Mscrm.CrmUri.create("/WebWizard/WizardContainer.aspx");
    $v_2.get_query()["WizardId"] = "FD24E63E-421A-4b25-9E28-274B4B7A2263";
    if(!IsNull(reportId)) $v_2.get_query()["WizardInput"] = reportId;
    var $v_3 = {};
    $v_3["isOrgReport"] = createOrgReport;
    return openStdDlg($v_2, $v_3, $v_0, $v_1, true, false, null)
};
Mscrm.ReportUtil.viewReport = function(reportViewType, reportId, fileName, action, snapshotId)
{
    switch(reportViewType)
    {
        case 1:
            if(action === "dblclick") action = "filter";
            var $v_0 = Mscrm.CrmUri.create("");
            $v_0.get_query()["helpID"] = fileName;
            $v_0.get_query()["action"] = action;
            if(!IsNull(snapshotId)) $v_0.get_query()["snapshotID"] = snapshotId;
            openObj(9100, reportId, $v_0.toString(), "", 0, null);
            break;
        case 3:
            if(action === "filter" || action === "editfilter")
            {
                alert(window.LOCID_NON_SRS_FILTERSCHEDULE);
                return
            }
            Mscrm.ReportUtil.downloadReport(reportId);
            break;
        case 2:
        case 4:
            if(action === "filter" || action === "editfilter")
            {
                alert(window.LOCID_NON_SRS_FILTERSCHEDULE);
                return
            }
            var $v_1 = Mscrm.WindowInformation.getWindowInformation(9100);
            $v_1.Url.get_query()["id"] = reportId;
            openStdWin($v_1.Url, buildWinName(null), $v_1.Width, $v_1.Height, "scrollbars=1,toolbar=1,menubar=1,location=1");
            break
    }
};
Mscrm.ReportUtil.getReportCopySuffix = function(formatString)
{
    var $v_0 = Mscrm.DateTimeUtility.localDateTimeNow(),
        $v_1 = String.format(window.LOCID_DATE_TIME_ORDER_FORMAT, Mscrm.DateTimeUtility.formatDate($v_0), timeToString($v_0, 0)),
        $v_2 = String.format(formatString, "{0}", $v_1);
    return $v_2.replace(new RegExp('[;\\?:@&=\\+\\$,\\\\\\*<>\\|"\\/]', "g"), "_")
};
Mscrm.ReportUtil.get_reportInformation = function()
{
    return Mscrm.ReportUtil.$46
};
Mscrm.ReportUtil.generateReportMenuXml = function(commandProperties, entityLogicalName, isForm, ribbonSelectionControl)
{
    if(!Mscrm.ReportUtil.$31 || !Mscrm.ReportUtil.$3u || entityLogicalName !== Mscrm.ReportUtil.$3u)
    {
        Mscrm.ReportUtil.$46 = {};
        Mscrm.ReportUtil.$3u = entityLogicalName;
        var $v_1 = Mscrm.ReportUtil.$8s(entityLogicalName, isForm, ribbonSelectionControl),
            $v_2 = new RemoteCommand("Reports", "GenerateReportMenuXml", null);
        $v_2.SetParameter("entityLogicalName", entityLogicalName);
        $v_2.SetParameter("menuId", $v_1);
        $v_2.SetParameter("isForm", isForm.toString());
        $v_2.SetParameter("ribbonContext", ribbonSelectionControl.get_ribbonContextType());
        $v_2.SetParameter("ribbonRelationshipType", ribbonSelectionControl.get_ribbonRelationshipType());
        var $v_3 = $v_2.Execute();
        Mscrm.ReportUtil.$31 = $v_3.ReturnValue
    }
    var $v_0 = Mscrm.ReportUtil.$31.Reports.ReportInformation;
    if(!IsNull($v_0))
    {
        var $v_4;
        if(isArray($v_0)) $v_4 = $v_0;
        else $v_4 = [$v_0];
        for(var $v_5 = 0; $v_5 < $v_4.length; $v_5++)
        {
            var $v_6 = $v_4[$v_5];
            Mscrm.ReportUtil.$46[$v_6.ID] = $v_6
        }
    }
    commandProperties["PopulationXML"] = Mscrm.ReportUtil.$31.MenuXml;
    commandProperties["SuppressCommandIncludes"] = true
};
Mscrm.ReportUtil.$8s = function($p0, $p1, $p2)
{
    var $v_0 = "NoRelationship";
    switch($p2.get_ribbonRelationshipType())
    {
        case 1:
            $v_0 = "OneToMany";
            break;
        case 2:
            $v_0 = "ManyToMany";
            break
    }
    var $v_1;
    if($p1) $v_1 = "Form";
    else if($p2.get_ribbonContextType() === "HomePageGrid") $v_1 = "HomepageGrid";
    else $v_1 = "SubGrid";
    var $v_2 = String.format("{0}|{1}|{2}|Mscrm.{3}.{0}.{4}", $p0, $v_0, $p2.get_ribbonContextType(), $v_1, $p1 ? "Reports" : "RunReport");
    return $v_2
};

function refreshRibbon(mode, animate, xrmOnly)
{
    if(IsNull(mode)) mode = 3;
    if(IsNull(animate)) animate = false;
    if(IsNull(xrmOnly)) xrmOnly = false;
    var $v_0 = {};
    $v_0["mode"] = mode;
    $v_0["animate"] = animate;
    $v_0["XrmOnly"] = xrmOnly;
    Mscrm.RibbonUtility.$e(32, $v_0, null)
}

function raiseEvent(eventCode, parameters, sourceComponent)
{
    return Mscrm.RibbonUtility.$e(eventCode, parameters, sourceComponent)
}

function isRibbonControlVisible(command, id)
{
    return Mscrm.RibbonUtility.$6o(34, command, id)
}

function isRibbonControlEnabled(command, id)
{
    return Mscrm.RibbonUtility.$6o(33, command, id)
}

function executeRibbonCommand(command)
{
    var $v_0 = {};
    $v_0["command"] = command;
    Mscrm.RibbonUtility.$e(31, $v_0, null)
}

function getXmlFromExecuteRibbonCommand(command)
{
    var $v_0 = {};
    $v_0["command"] = command;
    $v_0["getRibbonXmlForOutlookClient"] = true;
    Mscrm.RibbonUtility.$e(31, $v_0, null);
    return $v_0["RibbonXmlForOutlookClientResult"]
}

function unloadRibbonData(rd)
{
    Mscrm.RibbonUtility.$e(36, null, rd)
}

function loadRibbonData(rd, ribbonDataParameters)
{
    if(!IsNull(ribbonDataParameters)) Mscrm.RibbonUtility.$e(35, ribbonDataParameters, rd);
    else
    {
        var $v_0 = {};
        Mscrm.RibbonUtility.$e(35, $v_0, rd)
    }
}

function raiseTabSwitchEvent(tabSwitchData)
{
    Mscrm.RibbonUtility.$e(39, tabSwitchData, null)
}

function raiseRibbonRootEvent(rootEventData)
{
    Mscrm.RibbonUtility.$e(37, rootEventData, null)
}

function setSelectedControl(control)
{
    var $v_0 = {};
    $v_0["selectedControl"] = control;
    Mscrm.RibbonUtility.$e(38, $v_0, null)
}

function setFocusOnRibbon(keyPressEventTarget)
{
    var $v_0 = new Mscrm.RibbonKeyPressParameters;
    $v_0.eventElement = keyPressEventTarget;
    Mscrm.RibbonUtility.$e(55, $v_0, null)
}

function setFocusOnLastRibbonControl(keyPressEventTarget)
{
    var $v_0 = new Mscrm.RibbonKeyPressParameters;
    $v_0.eventElement = keyPressEventTarget;
    Mscrm.RibbonUtility.$e(56, $v_0, null)
}

function ribbonDebugAlert(value)
{}
Mscrm.RibbonUtility = function() {};
Mscrm.RibbonUtility.$6o = function($p0, $p1, $p2)
{
    var $v_0 = {};
    $v_0["command"] = $p1;
    $v_0["id"] = $p2;
    for(var $v_1 = Mscrm.RibbonUtility.$e($p0, $v_0, null), $v_2 = false, $v_3 = 0; $v_3 < $v_1.length; $v_3++)
        if($v_1[$v_3]) $v_2 = true;
    return $v_2
};
Mscrm.RibbonUtility.$e = function($p0, $p1, $p2)
{
    var $v_0 = Mscrm.RibbonUtility.$9N();
    if(!IsNull($v_0))
    {
        var $v_1 = $v_0.$9_1;
        if(!IsNull($v_1)) return $v_1.raiseEvent($p0, $p1, $p2)
    }
    return []
};
Mscrm.RibbonUtility.$9N = function()
{
    var $v_0 = Mscrm.PageManager.get_instance();
    if(!IsNull($v_0)) return $v_0;
    var $v_1 = window.parent;
    while(!IsNull($v_1) && IsNull($v_0))
    {
        var $v_2 = $v_1.Mscrm.PageManager;
        if(!IsNull($v_2)) $v_0 = $v_2.get_instance();
        var $v_3 = $v_1.parent;
        $v_1 = $v_3 === $v_1 ? null : $v_3
    }
    return $v_0
};

function storeScriptCrashData(crashData)
{
    Mscrm.ScriptErrorReporting.$84(crashData)
}

function promptAndReportScriptErrors()
{
    Mscrm.ScriptErrorReporting.promptAndReport(null)
}

function reportScriptError(crashData, addServerInformation, synchronous)
{
    Mscrm.ScriptErrorReporting.$7q(crashData, addServerInformation, synchronous)
}

function catchError(message, url, line, reportToWatson, caller, exceptionNumber, reportFunctionBody)
{
    try
    {
        if(IsNull(reportFunctionBody)) reportFunctionBody = false;
        if(Number.isInstanceOfType(reportToWatson)) reportToWatson = true;
        var $v_0 = caller;
        if(window._DebugOnScriptError) debugger;
        if(!Mscrm.ScriptErrorReporting.$Ac() && (window.ScriptErrorReportingPreference === 1 || window.ScriptErrorReportingPreference === 2))
        {
            window.status = window.LOCID_SCRIPT_ERROR_STATUS_BAR;
            var $v_1 = "",
                $v_2 = "",
                $v_3 = "";
            if(!$v_0) $v_0 = arguments.callee.caller;
            if(typeof $v_0 !== "undefined" && $v_0)
            {
                var $v_5 = $v_0.callee;
                if(typeof $v_5 === "undefined") $v_5 = $v_0;
                var $v_6 = 0;
                while($v_5 && $v_6 < 20)
                {
                    var $v_7 = new RegExp("\\s", "g"),
                        $v_8 = $v_5.toString().substr(8).replace($v_7, ""),
                        $v_9 = $v_8.substring(0, $v_8.indexOf("(")),
                        $v_A = $v_8.substring($v_8.indexOf("("), $v_8.indexOf(")") + 1);
                    if(IsNull($v_9) || !$v_9.length || $v_9 === "anonymous") $v_9 = "anonymous" + $v_8;
                    else
                    {
                        $v_9 += $v_A;
                        $v_9 = reportFunctionBody ? $v_9 + $v_8 : $v_9
                    }
                    if(!$v_6)
                    {
                        $v_3 = $v_9.substring(0, 255);
                        $v_2 = $v_5.toString().substring(0, 255)
                    }
                    $v_1 += "    <Function>" + CrmEncodeDecode.CrmXmlEncode($v_9) + "</Function>\r\n";
                    $v_5 = $v_5.caller;
                    $v_6++
                }
            }
            var $v_4 = Mscrm.ScriptErrorReporting.$8Z(message, url, line, $v_3, $v_2, $v_1, reportToWatson, exceptionNumber);
            isOutlookHostedWindow() && getOutlookHostedWindow().reportCrash(message, url, line, $v_3, $v_1, reportToWatson);
            if(window.ScriptErrorReportingPreference === 1) exceptionNumber !== -2146823277 && message !== "Can't execute code from a freed script" && Mscrm.ScriptErrorReporting.$84($v_4);
            else
            {
                Mscrm.ScriptErrorReporting.$7q($v_4, true, false);
                window.status = ""
            }
            return true
        }
    }
    catch($$e_I)
    {}
    return false
}
Mscrm.ScriptErrorReporting = function()
{
    Mscrm.ScriptErrorReporting.initializeBase(this)
};
Mscrm.ScriptErrorReporting.$$cctor = function()
{
    var $v_0 = {};
    $v_0["subscribedEvents"] = [29];
    $create(Mscrm.ScriptErrorReporting, $v_0, null, null, null);
    window.onerror = window.catchError;
    $addHandler(window, "beforeunload", Mscrm.ScriptErrorReporting.promptAndReport)
};
Mscrm.ScriptErrorReporting.$84 = function($p0)
{
    if(window.parent !== window.self && window.parent.storeScriptCrashData)
    {
        window.parent.storeScriptCrashData($p0);
        return
    }
    if(!Mscrm.ScriptErrorReporting.$12) Mscrm.ScriptErrorReporting.$12 = new Array(0);
    if(Mscrm.ScriptErrorReporting.$12.length < 7) Mscrm.ScriptErrorReporting.$12[Mscrm.ScriptErrorReporting.$12.length] = $p0
};
Mscrm.ScriptErrorReporting.promptAndReport = function(ev, callback)
{
    try
    {
        try
        {
            if(window.parent !== window.self && window.parent.promptAndReportScriptErrors)
            {
                window.parent.promptAndReportScriptErrors();
                return
            }
        }
        catch($$e_2)
        {
            return
        }
        if(Mscrm.ScriptErrorReporting.$12 && window.ScriptErrorReportingPreference === 1)
        {
            var $v_0 = Mscrm.WindowInformation.getWindowInformation(9200),
                $v_1 = false;
            if(Mscrm.CrmBrowser.get_currentBrowser().$f_0 === 3) $v_1 = true;
            var $v_2 = Mscrm.CrmUri.create("/_common/error/dlg_scriptError.aspx");
            if(Mscrm.Utilities.isMobileRefresh() || !IsNull(callback))
            {
                var $v_3 = window.top.document.body.clientWidth,
                    $v_4 = window.top.document.body.clientHeight,
                    $v_5 = new Mscrm.CrmDialog($v_2, Mscrm.ScriptErrorReporting.$12, $v_3 - 8, $v_4 / 2, null);
                !IsNull(callback) && $v_5.setInternalCallbackReference(callback);
                $v_5.show()
            }
            else openStdDlg($v_2, Mscrm.ScriptErrorReporting.$12, $v_0.Width, $v_0.Height, true, $v_1, null);
            Mscrm.ScriptErrorReporting.$12 = null;
            window.status = ""
        }
        else !IsNull(callback) && Mscrm.Utilities.executeFunction(callback, null)
    }
    catch($$e_9)
    {
        !IsNull(callback) && Mscrm.Utilities.executeFunction(callback, null)
    }
};
Mscrm.ScriptErrorReporting.$8Z = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7)
{
    var $v_0 = new Mscrm.CrashData;
    $v_0.lineNumber = $p2;
    $v_0.func = $p3;
    $v_0.reportToWatson = IsNull($p6) ? true : $p6;
    var $v_1 = Mscrm.CrmUri.create($p1),
        $v_2 = Mscrm.CrmUri.create(window.location.href);
    $v_1.set_scheme($v_2.set_scheme(""));
    $v_1.set_host($v_2.set_host(""));
    $v_1.set_port($v_2.set_port(-1));
    $v_1.set_useOrganizationName($v_2.set_useOrganizationName(false));
    $v_0.fileName = $v_1.get_path();
    $v_0.report = "<CrmScriptErrorReport>\r\n  <ReportVersion>1.0</ReportVersion>\r\n  <ScriptErrorDetails>\r\n   <Message>" + CrmEncodeDecode.CrmXmlEncode($p0) + "</Message>\r\n" + (!IsNull($p7) ? "   <ExceptionNumber>" + CrmEncodeDecode.CrmXmlEncode($p7.toString()) + "</ExceptionNumber>\r\n" : "") + "   <Line>" + $p2 + "</Line>\r\n   <URL>" + CrmEncodeDecode.CrmXmlEncode($v_1.toString()) + "</URL>\r\n   <PageURL>" + CrmEncodeDecode.CrmXmlEncode($v_2.toString()) + "</PageURL>\r\n   <Function>" + CrmEncodeDecode.CrmXmlEncode($p3) + "</Function>\r\n   <FunctionRaw>" + CrmEncodeDecode.CrmXmlEncode($p4) + "</FunctionRaw>\r\n   <CallStack>\r\n" + $p5 + "   </CallStack>\r\n  </ScriptErrorDetails>\r\n  <ClientInformation>\r\n   <BrowserUserAgent>" + CrmEncodeDecode.CrmXmlEncode(window.navigator.userAgent) + "</BrowserUserAgent>\r\n   <BrowserLanguage>" + CrmEncodeDecode.CrmXmlEncode(window.navigator.browserLanguage) + "</BrowserLanguage>\r\n   <SystemLanguage>" + CrmEncodeDecode.CrmXmlEncode(window.navigator.systemLanguage) + "</SystemLanguage>\r\n   <UserLanguage>" + CrmEncodeDecode.CrmXmlEncode(window.navigator.userLanguage) + "</UserLanguage>\r\n   <ScreenResolution>" + window.screen.width + "x" + window.screen.height + "</ScreenResolution>\r\n   <ClientName>" + CrmEncodeDecode.CrmXmlEncode(Mscrm.XrmPage.context.client.getClient()) + "</ClientName>\r\n   <ClienState>" + CrmEncodeDecode.CrmXmlEncode(Mscrm.XrmPage.context.client.getClientState()) + "</ClienState>\r\n   <ClientTime>" + CrmEncodeDecode.CrmXmlEncode(FormatDateTime(new Date)) + "</ClientTime>\r\n  </ClientInformation>\r\n</CrmScriptErrorReport>\r\n";
    return $v_0
};
Mscrm.ScriptErrorReporting.$7q = function($p0, $p1, $p2)
{
    var $v_0 = new RemoteCommand("ScriptError", "SendScriptErrorReport", null);
    $v_0.SetParameter("fileName", $p0.fileName);
    $v_0.SetParameter("lineNumber", $p0.lineNumber.toString());
    $v_0.SetParameter("function", $p0.func);
    $v_0.SetParameter("errorReport", $p0.report);
    $v_0.SetParameter("addServerInformation", $p1.toString());
    $v_0.SetParameter("errorReportingPreference", Mscrm.ReportingPreference.toString(window.ScriptErrorReportingPreference));
    $v_0.SetParameter("reportToWatson", $p0.reportToWatson.toString());
    $v_0.ErrorHandler = function() {};
    if($p2) $v_0.Execute(null);
    else $v_0.Execute(Mscrm.ScriptErrorReporting.$8u)
};
Mscrm.ScriptErrorReporting.$Ac = function()
{
    var $v_0 = window.SUPPRESS_SCRIPT_ERRORS;
    return !!$v_0
};
Mscrm.ScriptErrorReporting.$8u = function($p0, $p1) {};
Mscrm.ScriptErrorReporting.prototype = {
    handleEvent: function(eventCode, parameters, sourceComponent)
    {
        switch(eventCode)
        {
            case 29:
                Mscrm.ScriptErrorReporting.promptAndReport(null);
                break
        }
        return Mscrm.CrmUIComponent.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent)
    },
    dispose: function()
    {
        if(this._disposed) return;
        Mscrm.ScriptErrorReporting.promptAndReport(null);
        $removeHandler(window, "beforeunload", Mscrm.ScriptErrorReporting.promptAndReport);
        Mscrm.CrmUIComponent.prototype.dispose.call(this)
    }
};
Mscrm.SessionInfo = function() {};
Mscrm.SessionInfo.isOutlookClient = function()
{
    return window.IS_OUTLOOK_CLIENT
};
Mscrm.SessionInfo.isOutlook14Client = function()
{
    return window.IS_OUTLOOK_14_CLIENT
};
Mscrm.SessionInfo.getClientMajorVersion = function()
{
    var $v_0 = window.CLIENT_MAJOR_VERSION;
    if(!$v_0) return null;
    else return $v_0
};
Mscrm.SessionInfo.getOutlookMajorVersion = function()
{
    var $v_0 = window.OUTLOOK_MAJOR_VERSION;
    if(!$v_0) return null;
    else return $v_0
};
Mscrm.SessionInfo.isOutlookWorkstationClient = function()
{
    return Mscrm.SessionInfo.isOutlookClient() && document.cookie.indexOf("LightClient") !== -1
};
Mscrm.SessionInfo.isOutlookLaptopClient = function()
{
    return window.IS_OUTLOOK_LAPTOP_CLIENT
};
Mscrm.SessionInfo.isOnline = function()
{
    return window.IS_ONLINE
};
Mscrm.SessionInfo.isHelpContext = function()
{
    return !(IsNull(window.HELP_CONTEXT) || window.HELP_CONTEXT !== 1)
};
Mscrm.SessionInfo.get_appendBaseSchemeAndHost = function()
{
    return Mscrm.SessionInfo.$2j
};
Mscrm.SessionInfo.set_appendBaseSchemeAndHost = function(value)
{
    Mscrm.SessionInfo.$2j = value;
    return value
};

function IsOutlookClient()
{
    return Mscrm.SessionInfo.isOutlookClient()
}

function IsOutlook14Client()
{
    return Mscrm.SessionInfo.isOutlook14Client()
}

function getOutlookMajorVersion()
{
    return Mscrm.SessionInfo.getOutlookMajorVersion()
}

function IsOutlookWorkstationClient()
{
    return Mscrm.SessionInfo.isOutlookWorkstationClient()
}

function IsOutlookLaptopClient()
{
    return Mscrm.SessionInfo.isOutlookLaptopClient()
}

function IsOnline()
{
    return Mscrm.SessionInfo.isOnline()
}

function IsHelpContext()
{
    return Mscrm.SessionInfo.isHelpContext()
}
Mscrm.Shortcuts = function() {};
Mscrm.Shortcuts.getViewUrl = function()
{
    var $v_0 = window.location.href,
        $v_1 = null;
    if(!Mscrm.SessionInfo.isOnline())
    {
        var $v_3 = window.location.pathname;
        $v_1 = Mscrm.CrmUri.create(Mscrm.Help.concatenateUrl(window.WEB_APP_URL, $v_0.substr($v_0.indexOf($v_3))));
        $v_1.set_useOrganizationName(false)
    }
    else
    {
        $v_0 = $v_0.substring(0, $v_0.indexOf(window.location.pathname));
        $v_1 = Mscrm.Utilities.getContentUrl(null)
    }
    if(Mscrm.Utilities.isHierarchyViewEnabled()) $v_1 = Mscrm.Utilities.getPageUrl($v_1, "hierarchypage");
    else $v_1 = Mscrm.Utilities.getPageUrl($v_1, "entitylist");
    var $v_2 = window._homepageParameterInfo;
    if(!IsNull($v_2))
    {
        for(var $v_5 = 0; $v_5 < $v_2.length; $v_5++)
        {
            var $v_6 = $v_2[$v_5],
                $v_7 = $get($v_6.controlId);
            if(!IsNull($v_7) && !IsNull($v_7.DataValue)) $v_1.get_query()[$v_6.parameterName] = $v_7.DataValue
        }
        var $v_4 = $get("crmGrid_SavedQuerySelector");
        if(!IsNull($v_4)) $v_1.get_query()["viewtype"] = getViewType($v_4)
    }
    if(Mscrm.SessionInfo.isOnline()) $v_1 = Mscrm.CrmUri.create(Mscrm.Help.concatenateUrl($v_0, $v_1.get_path() + $v_1.get_queryString()));
    return $v_1
};
Mscrm.Shortcuts.openEmailForm = function(to, subject, body, cc)
{
    var $v_0 = new Sys.StringBuilder;
    $v_0.append("mailto:");
    var $v_1 = to;
    if(!IsNull(to) && to.length > 0)
    {
        var $v_3 = to.lastIndexOf("@");
        if($v_3 >= 0 && $v_3 < to.length) $v_1 = CrmEncodeDecode.CrmUrlEncode(to.substr(0, $v_3)) + "@" + CrmEncodeDecode.CrmUrlEncode(to.substr($v_3 + 1));
        else $v_1 = CrmEncodeDecode.CrmUrlEncode(to)
    }
    $v_0.append($v_1);
    $v_0.append("?");
    if(!IsNull(subject) && subject.length > 0)
    {
        $v_0.append("subject=");
        $v_0.append(CrmEncodeDecode.CrmUrlEncode(subject));
        $v_0.append("&")
    }
    if(!IsNull(cc) && cc.length > 0)
    {
        $v_0.append("cc=");
        $v_0.append(CrmEncodeDecode.CrmUrlEncode(cc));
        $v_0.append("&")
    }
    if(!IsNull(body))
    {
        $v_0.append("body=");
        $v_0.append(CrmEncodeDecode.CrmUrlEncode(body))
    }
    var $v_2 = $v_0.toString();
    if($v_2.length > 2020) openErrorDlg("0x80044331", null, null, 0, 0);
    else if(window.UseTabletExperience && Mscrm.CrmBrowser.get_currentBrowser().$f_0 === 3)
    {
        var $v_4 = window.open($v_2);
        window.setTimeout(function()
        {
            !IsNull($v_4) && $v_4.close()
        }, 50)
    }
    else Xrm.Internal.openUrl($v_2)
};
Mscrm.Shortcuts.openPhoneWindow = function(phoneNumber, countryCode, useSkypeProtocol)
{
    var $v_0 = (new Mscrm.PhoneUriBuilder).buildUri(phoneNumber, countryCode, useSkypeProtocol),
        $v_1 = Mscrm.CrmUri.createForOrganization($v_0, null);
    $v_1.checkParamsNoEqual = true;
    safeWindowOpen($v_1, "", "")
};
Mscrm.Shortcuts.copyTextToClipboard = function(text, successMessage, failMessage)
{
    var $v_0 = new XUI.ClipboardManager,
        $v_1 = 2,
        $v_2 = null;
    while($v_1 > 0 && !$v_2)
    {
        $v_0.SetData(text);
        $v_2 = $v_0.GetData();
        $v_1--
    }
    if(!IsNull($v_2) && $v_2.length > 0) !IsNull(successMessage) && successMessage.length > 0 && alert(successMessage);
    else !IsNull(failMessage) && failMessage.length > 0 && alert(failMessage)
};
Mscrm.SolutionDecorater = function() {};
Mscrm.SolutionDecorater.setSolutionIdInRequestHeader = function(xmlHttp)
{
    var $v_0 = $get("crmFormSubmit");
    if(!IsNull($v_0)) !IsNull($v_0.appSolutionId) && $v_0.appSolutionId.value !== "" && xmlHttp.setRequestHeader($v_0.appSolutionId.id, $v_0.appSolutionId.value);
    else !IsNull(window.APP_SOLUTION_ID) && window.APP_SOLUTION_ID !== "" && xmlHttp.setRequestHeader(Mscrm.SolutionDecorater.solutionId, window.APP_SOLUTION_ID)
};
Mscrm.SolutionDecorater.setSolutionIdInQuerystring = function(url)
{
    if(!Mscrm.SolutionDecorater.$9p(url.get_path())) return;
    var $v_0 = $get("crmFormSubmit");
    if(!IsNull($v_0))
    {
        if(!IsNull($v_0.appSolutionId) && $v_0.appSolutionId.value !== "") url.get_query()[$v_0.appSolutionId.id] = $v_0.appSolutionId.value
    }
    else if(!IsNull(window.APP_SOLUTION_ID) && window.APP_SOLUTION_ID !== "") url.get_query()[Mscrm.SolutionDecorater.solutionId] = window.APP_SOLUTION_ID
};
Mscrm.SolutionDecorater.removeSolutionIdFromQuerystring = function(url)
{
    if(!IsNull(url) && !IsNull(url.get_query())) delete url.get_query()[Mscrm.SolutionDecorater.solutionId]
};
Mscrm.SolutionDecorater.$9p = function($p0)
{
    var $v_0 = $p0.toUpperCase(),
        $v_1 = $v_0.split("/");
    isNullOrEmptyString(Mscrm.SolutionDecorater.$4W) && Mscrm.SolutionDecorater.$9b();
    for(var $v_2 = "", $v_3 = 0; $v_3 < $v_1.length; $v_3++)
    {
        if(!$v_1[$v_3].length) continue;
        $v_2 += "/" + $v_1[$v_3];
        if(Mscrm.SolutionDecorater.$5e.indexOf($v_2 + "|") >= 0) return false
    }
    $v_2 = "";
    for(var $v_4 = 0; $v_4 < $v_1.length; $v_4++)
    {
        if(!$v_1[$v_4].length) continue;
        $v_2 += "/" + $v_1[$v_4];
        if(Mscrm.SolutionDecorater.$4W.indexOf($v_2 + "|") >= 0) return true
    }
    return false
};
Mscrm.SolutionDecorater.$9b = function()
{
    Mscrm.SolutionDecorater.$4W = "/TOOLS/CONTRACTTYPEMANAGER|\r\n\t\t\t\t\t\t\t\t/TOOLS/EMAILTEMPLATEEDITOR|\r\n\t\t\t\t\t\t\t\t/TOOLS/EMAILTEMPLATEMANAGER|\r\n\t\t\t\t\t\t\t\t/TOOLS/FORMEDITOR|\r\n\t\t\t\t\t\t\t\t/TOOLS/KBTEMPLATEEDITOR|\r\n\t\t\t\t\t\t\t\t/TOOLS/KBTEMPLATEMANAGER|\r\n\t\t\t\t\t\t\t\t/TOOLS/MAILMERGE|\r\n\t\t\t\t\t\t\t\t/TOOLS/MANAGEMAPS|\r\n\t\t\t\t\t\t\t\t/TOOLS/MUIPROVISIONING|\r\n\t\t\t\t\t\t\t\t/TOOLS/PUBLISHER|\r\n\t\t\t\t\t\t\t\t/TOOLS/RELATIONSHIPROLEEDITOR|\r\n\t\t\t\t\t\t\t\t/TOOLS/RELATIONSHIPROLEMANAGER|\r\n\t\t\t\t\t\t\t\t/TOOLS/SOLUTION|\r\n\t\t\t\t\t\t\t\t/TOOLS/SYSTEMCUSTOMIZATION|\r\n\t\t\t\t\t\t\t\t/TOOLS/TEMPLATES|\r\n\t\t\t\t\t\t\t\t/TOOLS/VIEWEDITOR|\r\n\t\t\t\t\t\t\t\t/SFA/WORKFLOW|\r\n\t\t\t\t\t\t\t\t/REPORTS|\r\n\t\t\t\t\t\t\t\t/BIZ/ROLES|\r\n\t\t\t\t\t\t\t\t/BIZ/USERS|\r\n\t\t\t\t\t\t\t\t/_GRID/CMDS/DLG_ACTIVATE.ASPX|\r\n\t\t\t\t\t\t\t\t/_GRID/CMDS/DLG_CONFIRM_DELETE.ASPX|\r\n\t\t\t\t\t\t\t\t/_GRID/CMDS/DLG_DEACTIVATE.ASPX|\r\n\t\t\t\t\t\t\t\t/_GRID/CMDS/DLG_DELETE.ASPX|\r\n\t\t\t\t\t\t\t\t/_GRID/CMDS/DLG_PUBLISHMAILMERGETEMPLATE.ASPX|\r\n\t\t\t\t\t\t\t\t/_GRID/CMDS/DLG_PUBLISHSOLUTION.ASPX|\r\n\t\t\t\t\t\t\t\t/_GRID/CMDS/DLG_ROLE.ASPX|\r\n\t\t\t\t\t\t\t\t/_GRID/CMDS/DLG_UNPUBLISH.ASPX|\r\n\t\t\t\t\t\t\t\t/_GRID/CMDS/DLG_UNPUBLISHMAILMERGETEMPLATE.ASPX|\r\n\t\t\t\t\t\t\t\t/_GRID/CMDS/DLG_WEBMAILMERGE.ASPX|\r\n\t\t\t\t\t\t\t\t/_GRID/CMDS/DLG_DELETEIMPORTEDRECORDS.ASPX|\r\n\t\t\t\t\t\t\t\t/_GRID/CMDS/DLG_UNPUBLISH.ASPX|\r\n\t\t\t\t\t\t\t\t/_GRID/CMDS/DLG_ADDSOLUTIONCOMPONENT.ASPX|\r\n\t\t\t\t\t\t\t\t/MAIN.ASPX|\r\n\t\t\t\t\t\t\t\t/CONNECTIONS/CONNECTIONROLES|\r\n\t\t\t\t\t\t\t\t/TOOLS/DEPENDENCY|\r\n\t\t\t\t\t\t\t\t/TOOLS/WEBRESOURCEEDITOR/WEBRESOURCEEDITOR.ASPX|\r\n\t\t\t\t\t\t\t\t/_CONTROLS/LOOKUP/LOOKUPINFO.ASPX|\r\n\t\t\t\t\t\t\t\t/_GRID/CMDS/DLG_ADDITEM.ASPX|\r\n\t\t\t\t\t\t\t\t/TOOLS/SOLUTION/MANAGEDPROPERTY/MANAGEDPROPERTYEDITOR.ASPX|\r\n\t\t\t\t\t\t\t\t/TOOLS/DASHBOARDEDITOR/DASHBOARDEDITOR.ASPX|\r\n\t\t\t\t\t\t\t\t/CRMREPORTS/REPORTPROPERTY.ASPX|\r\n\t\t\t\t\t\t\t\t/TOOLS/VISUALIZATIONDESIGNER/VISUALIZATIONDESIGNER.ASPX|\r\n\t\t\t\t\t\t\t\t/VISUALIZATION/CMDS/DLG_IMPORTVISUALIZATION.ASPX|\r\n\t\t\t\t\t\t\t\t/VISUALIZATION/SAVEVISUALIZATION.ASPX|\r\n\t\t\t\t\t\t\t\t/BIZ/FIELDSECURITYPROFILES|\r\n\t\t\t\t\t\t\t\t/WEBWIZARD/WIZARDCONTAINER.ASPX|\r\n\t\t\t\t\t\t\t\t/M/CONSOLE/ENTITYCONFIG.ASPX|\r\n\t\t\t\t\t\t\t\t/_GRID/CMDS/DLG_EDITATTRIBUTE.ASPX|";
    Mscrm.SolutionDecorater.$5e = "/TOOLS/SOLUTION/HOME_SOLUTION.ASPX|"
};

function GetWindowInformation(objectTypeCode)
{
    return Mscrm.WindowInformation.getWindowInformation(objectTypeCode)
}
Mscrm.WindowInformation = function() {};
Mscrm.WindowInformation.getWindowInformation = function(objectTypeCode)
{
    var $v_0 = Mscrm.CrmUri.create("/_common/windowinformation/windowinformation.js.aspx");
    $v_0.set_useCssLcid(true);
    $v_0.setQueryParameter("fcb", Mscrm.FeatureControl.$4n.isFeatureEnabled("FCB.LeoServiceFeatures") ? "1" : "0");
    Mscrm.CrmHeader.setScriptFile($v_0, true);
    var $v_1 = Mscrm.Imported.WindowInformationImplementation.getWindowInformationInternal(objectTypeCode);
    if(!$v_1.Height) $v_1.Height = parseInt(window.screen.availHeight * .9);
    return $v_1
};
Mscrm.WrpcTokenFuncs = function() {};
Mscrm.WrpcTokenFuncs.setTokenInHeader = function(xmlHttp, url)
{
    url = Mscrm.WrpcTokenFuncs.formatUrlForToken(url);
    var $v_0 = Mscrm.WrpcTokenFuncs.getCrmWrpcToken(url);
    if($v_0)
    {
        xmlHttp.setRequestHeader("CRMWRPCToken", $v_0.Token);
        xmlHttp.setRequestHeader("CRMWRPCTokenTimeStamp", $v_0.Timestamp.toString())
    }
};
Mscrm.WrpcTokenFuncs.getTokenAsQS = function(url)
{
    url = Mscrm.WrpcTokenFuncs.formatUrlForToken(url);
    var $v_0 = Mscrm.WrpcTokenFuncs.getCrmWrpcToken(url);
    if($v_0) return "CRMWRPCToken=" + CrmEncodeDecode.CrmUrlEncode($v_0.Token) + "&CRMWRPCTokenTimeStamp=" + CrmEncodeDecode.CrmUrlEncode($v_0.Timestamp.toString());
    return ""
};
Mscrm.WrpcTokenFuncs.setCrmWrpcToken = function(url, token, timestamp)
{
    var $v_0 = {};
    $v_0.Token = token;
    $v_0.Timestamp = timestamp;
    window._aWrpcTokens[url.toString().toUpperCase()] = $v_0
};
Mscrm.WrpcTokenFuncs.getCrmWrpcToken = function(url)
{
    if(IsNull(url)) return null;
    var $v_0 = window._aWrpcTokens[url.toString().toUpperCase()];
    if(IsNull($v_0)) return null;
    var $v_1 = $v_0.Token,
        $v_2 = $v_0.Timestamp,
        $v_3 = new Mscrm.WrpcToken;
    $v_3.Token = $v_1;
    $v_3.Timestamp = $v_2;
    $v_3.Url = url;
    return $v_3
};
Mscrm.WrpcTokenFuncs.formatUrlForToken = function(url)
{
    var $v_0 = IsNull(url) ? "" : url.toString();
    if(!$v_0.length)
    {
        $v_0 = window.location.pathname;
        if($v_0.length < 1 || $v_0.charAt(0) !== "/") $v_0 = "/" + $v_0
    }
    var $v_1 = Mscrm.CrmUri.create($v_0);
    $v_1.clearQuery();
    return $v_1
};

function SetTokenInHeader(xmlHttp, url)
{
    Mscrm.WrpcTokenFuncs.setTokenInHeader(xmlHttp, url)
}

function GetTokenAsQS(url)
{
    return Mscrm.WrpcTokenFuncs.getTokenAsQS(url)
}

function SetCrmWrpcToken(url, token, timestamp)
{
    Mscrm.WrpcTokenFuncs.setCrmWrpcToken(url, token, timestamp)
}

function GetCrmWrpcToken(url)
{
    return Mscrm.WrpcTokenFuncs.getCrmWrpcToken(url)
}

function formatUrlForToken(url)
{
    return Mscrm.WrpcTokenFuncs.formatUrlForToken(url)
}
Mscrm.WrpcToken = function() {};
Mscrm.WrpcToken.prototype = {
    Timestamp: 0,
    Token: null,
    Url: null
};
Mscrm.ContextMenuAction = function() {};
Mscrm.HelpEntryPoint = function() {};
Mscrm.Utilities = function() {};
Mscrm.Utilities.isMainApplicationPage = function()
{
    var $v_0 = false,
        $v_1 = Mscrm.CrmUri.create(window.location.href);
    if(isNullOrEmptyString($v_1.get_query()["pagetype"])) $v_0 = true;
    return $v_0
};
Mscrm.Utilities.compareGuids = function(guidA, guidB)
{
    if(!IsNull(guidA) && guidA.length === 36 && guidA.charAt(0) !== "{" && guidA.charAt(35) !== "}") guidA = "{" + guidA + "}";
    if(!IsNull(guidB) && guidB.length === 36 && guidB.charAt(0) !== "{" && guidB.charAt(35) !== "}") guidB = "{" + guidB + "}";
    return guidA.toUpperCase() === guidB.toUpperCase()
};
Mscrm.Utilities.getData = function(entityData, attribute, property, doNotDecodeData)
{
    return Mscrm.Utilities.getDataOrDefault(entityData, attribute, property, "", doNotDecodeData)
};
Mscrm.Utilities.getDataForTile = function(entityData, attribute, property, doNotDecodeData)
{
    return Mscrm.Utilities.getDataOrDefaultForTile(entityData, attribute, property, "", doNotDecodeData)
};
Mscrm.Utilities.showHierarchyImage = function(imageClass, isHover, element)
{
    if(!IsNull(element))
    {
        element.setAttribute("class", imageClass);
        if(isHover) element.style.cursor = "pointer";
        else element.style.cursor = "default"
    }
};
Mscrm.Utilities.showHierarchyPage = function(entityTypeCode, primaryFieldValue, element)
{
    var $v_0 = "",
        $v_1 = false;
    if(!IsNull(element))
    {
        $v_1 = true;
        var $v_4 = $P_CRM(element);
        $v_4.data("HierarchyIconClickTime", Date.now());
        $v_4.attr("HierarchyIconClickTime", Date.now().toString());
        setPerfMarkerTimestamp("HierarchyIconClickTime");
        if(!IsNull(element.getAttribute("formId")))
        {
            $v_0 = element.getAttribute("formId").toString();
            primaryFieldValue = $P_CRM("#hierarchyContainer").attr("heroNodeId")
        }
    }
    var $v_2;
    if(!isRichClient())
    {
        $v_2 = Mscrm.CrmUri.create("/_root/hierarchy.aspx");
        $v_2.get_query()["oId"] = primaryFieldValue
    }
    else
    {
        $v_2 = Mscrm.CrmUri.create("/main.aspx");
        $v_2.get_query()["Id"] = primaryFieldValue;
        $v_2.get_query()["pagetype"] = "hierarchypage"
    }
    $v_2.get_query()["etc"] = entityTypeCode.toString();
    if(!isNullOrEmptyString($v_0)) $v_2.get_query()["formId"] = $v_0;
    var $v_3 = Mscrm.Utilities.$7R();
    if(!isNullOrEmptyString($v_3)) $v_2.get_query()["sitemappath"] = $v_3;
    if(!isRichClient())
    {
        var $v_5 = {};
        $v_5["uri"] = $v_2.toString();
        $v_5["disposeQuickCreateObject"] = $v_1;
        var $v_6 = Mscrm.PageManager.get_instance();
        $v_6.raiseEvent(21, $v_5)
    }
    else
    {
        $v_2.get_query()["newWindow"] = true;
        var $v_7 = getOutlookHostedWindow().openInspector(entityTypeCode, $v_2.toString(), 300, 500);
        if(!IsNull($v_7))
        {
            $v_7._masterWindow = masterWindow();
            $v_7.opener = window.self
        }
    }
};
Mscrm.Utilities.$7R = function()
{
    var $v_0 = Mscrm.PageManager.get_instance();
    if($v_0)
    {
        var $v_1 = $v_0.raiseEvent(3, null);
        if(IsNull($v_1) || !$v_1.length) return null;
        var $v_2 = $v_1[0];
        if(!IsNull($v_2)) return $v_2["sitemappath"]
    }
    return null
};
Mscrm.Utilities.getDataOrDefaultForTile = function(entityData, attribute, property, defaultValue, doNotDecodeData)
{
    return Mscrm.Utilities.$7K(entityData, attribute, property, defaultValue, doNotDecodeData, true)
};
Mscrm.Utilities.getDataOrDefault = function(entityData, attribute, property, defaultValue, doNotDecodeData)
{
    return Mscrm.Utilities.$7K(entityData, attribute, property, defaultValue, doNotDecodeData, false)
};
Mscrm.Utilities.$7K = function($p0, $p1, $p2, $p3, $p4, $p5)
{
    if(IsNull($p4)) $p4 = false;
    var $v_0 = !IsNull($p0) ? $p0[$p1] : null,
        $v_1 = null;
    if(!IsNull($v_0) && !IsNull($v_0[$p2]))
    {
        $v_1 = $v_0[$p2].toString();
        if(!$p4) $v_1 = CrmEncodeDecode.CrmHtmlDecode($v_1);
        !$p5 && Mscrm.Utilities.$92($p1)
    }
    if($p1 === "entityimage_url" && isNullOrEmptyString($v_1)) $v_1 = Mscrm.Utilities.getDefaultEntityImage($p0);
    return isNullOrEmptyString($v_1) ? $p3 : $v_1
};
Mscrm.Utilities.$92 = function($p0)
{
    var $v_0 = XUI.Xml.SelectSingleNode(Mscrm.Utilities.get_mappedXml().documentElement, $p0, null);
    !IsNull($v_0) && $v_0.parentNode.removeChild($v_0)
};
Mscrm.Utilities.getDefaultEntityImage = function(entityData)
{
    var $v_0 = entityData._entity,
        $v_1 = $v_0.TypeCode.toString();
    if($v_1 === "1024") return "/_imgs/Image_Placeholder.png";
    else return "/_imgs/ContactPhoto.png"
};
Mscrm.Utilities.showHideHierarchyButton = function(showHierarchyButton)
{
    var $v_0 = window.parent.document.getElementById("hierarchyButton");
    if(!IsNull($v_0))
        if(showHierarchyButton)
        {
            $v_0.style.display = "";
            var $v_1 = Mscrm.CrmUri.create(window.location.href),
                $v_2 = $v_1.get_query()["etc"];
            if(!IsNull($v_2))
            {
                var $v_3 = window._id;
                $v_0.setAttribute("primaryEntityId", $v_3);
                $v_0.setAttribute("objectTypecode", $v_2)
            }
        }
        else
        {
            $v_0.style.display = "none";
            $v_0.removeAttribute("primaryEntityId");
            $v_0.removeAttribute("objectTypecode")
        }
};
Mscrm.Utilities.getProcessControlData = function(entityData, attribute, property, defaultValue)
{
    var $v_0 = entityData[attribute],
        $v_1 = null;
    if(!IsNull($v_0) && !IsNull($v_0[property]))
    {
        $v_1 = $v_0[property].toString();
        $v_1 = CrmEncodeDecode.CrmHtmlDecode($v_1)
    }
    defaultValue = Mscrm.Utilities.$9x(entityData, attribute, defaultValue) ? Mscrm.InlineEditConstants.DefaultEmptyValuePlaceholder : CrmEncodeDecode.CrmHtmlDecode(defaultValue);
    return isNullOrEmptyString($v_1) ? defaultValue : $v_1
};
Mscrm.Utilities.getProcessControlCollapsibleClass = function(entityData)
{
    var $v_0 = entityData._entity;
    if(IsNull($v_0)) return "hidden";
    var $v_1 = $v_0.Id;
    if(isNullOrEmptyString($v_1)) return "";
    for(var $v_2 = $v_0.TypeName, $v_3 = document.cookie.split(";"), $v_4 = String.format("{0}_{1}_process_hidden", $v_2, $v_1), $v_5 = 0; $v_5 < $v_3.length; $v_5++)
    {
        var $v_6 = $v_3[$v_5].substr(0, $v_3[$v_5].indexOf("="));
        $v_6 = $v_6.trimStart();
        if($v_6 === $v_4) return "hidden"
    }
    return ""
};
Mscrm.Utilities.$9x = function($p0, $p1, $p2)
{
    if(isNullOrEmptyString($p2)) return false;
    var $v_0 = $p0._entitydisabled;
    if(!IsNull($v_0) && $v_0 === "1") return true;
    var $v_1 = $p0._entity;
    if(IsNull($v_1)) return false;
    var $v_2 = $v_1.Id,
        $v_3 = $v_1.TypeName,
        $v_4 = isNullOrEmptyString($v_2);
    if(!$v_4 || isNullOrEmptyString($v_3)) return false;
    if($v_3 !== "lead") return false;
    return $p1 === "parentaccountid" || $p1 === "parentcontactid"
};
Mscrm.Utilities.getCssClass = function(entityData, attribute, property)
{
    var $v_0 = entityData[attribute],
        $v_1 = null;
    if(!IsNull($v_0) && !IsNull($v_0[property])) $v_1 = $v_0[property].toString();
    return isNullOrEmptyString($v_1) ? "ms-crm-Inline-EmptyValue" : ""
};
Mscrm.Utilities.getInnerDataObject = function(entityData, innerDataObjectKey)
{
    var $v_0 = entityData[innerDataObjectKey];
    if(!IsNull($v_0)) return $v_0;
    else return null
};
Mscrm.Utilities.get_mappedXml = function()
{
    if(IsNull(Mscrm.Utilities.$3w))
    {
        var $v_0 = _mappedXmlString;
        Mscrm.Utilities.$3w = XUI.Xml.LoadXml("<mapped>" + $v_0 + "</mapped>")
    }
    return Mscrm.Utilities.$3w
};
Mscrm.Utilities.initializeReadForm = function()
{
    window.setTimeout(Mscrm.Utilities.startReadForm, 0)
};
Mscrm.Utilities.tryParseGuid = function(guid)
{
    if(Mscrm.InternalUtilities._String.isNullOrEmpty(guid)) return null;
    var $v_0 = new RegExp("^(?:(?:\\{|%7b){0,1}((?:[0-9a-fA-F]){8}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){12})(?:\\}|%7d){0,1})$"),
        $v_1 = $v_0.exec(guid);
    if(IsNull($v_1) || $v_1.length < 2) return null;
    return $v_1[1].toLowerCase()
};
Mscrm.Utilities.startReadForm = function()
{
    setPerfMarkerTimestamp("DynamicPropertyFormLoadStartTime");
    setPerfMarkerTimestamp("HideLoadingScreenTimestamp");
    Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("Read-Ready", 1);
    var $v_0 = Mscrm.CrmUri.create(window.RecordData["_formlayoutUrl"]);
    Mscrm.PerceivedCommandBarHelper.addFormPerceivedCommandBar($v_0);
    var $v_1 = PageScriptIncludes;
    Mscrm.Utilities.loadScripts($v_1)
};
Mscrm.Utilities.loadScripts = function(scriptsToLoad)
{
    var $v_0 = Mscrm.Utilities.$8z(scriptsToLoad),
        $v_1 = new Array(0);
    Array.clear(Mscrm.Utilities.$2v);
    for(var $v_3 = 0; $v_3 < $v_0.length; $v_3++)
    {
        var $v_4 = $v_0[$v_3],
            $v_5 = Mscrm.Utilities.$5o($v_0[$v_3]);
        $v_5 = Mscrm.Utilities.$87($v_5);
        if($v_5.startsWith("/_static/") && $v_5.endsWith(".js")) Array.add($v_1, $v_5);
        else Array.add(Mscrm.Utilities.$2v, Mscrm.Utilities.$87($v_4))
    }
    var $v_2 = new Mscrm.MetricsStopwatch("Utilities.LoadScripts");
    $v_2.start();
    loadScriptsAdv($v_1);
    notifyOnAllScriptsLoaded(function()
    {
        $v_2.stop();
        Mscrm.Utilities.postPageStaticScriptsLoad()
    })
};
Mscrm.Utilities.postPageStaticScriptsLoad = function()
{
    var $v_0 = new Mscrm.MetricsStopwatch("LoadDynamicScripts");
    $v_0.start();
    for(var $v_2 = 0; $v_2 < Mscrm.Utilities.$2v.length; $v_2++) Mscrm.CrmHeader.get_scriptLoader().addIncludeExternalSync(null, Mscrm.CrmUri.create(Mscrm.Utilities.$2v[$v_2]));
    $v_0.stop();
    var $v_1 = new Mscrm.Performance.PerformanceStopwatch("Eval PageApplicationInitStatements");
    $v_1.start();
    Sys.Application.beginCreateComponents();
    eval(PageApplicationInitStatements);
    Sys.Application.endCreateComponents();
    $v_1.stop();
    Sys.Application.remove_load(HeaderWindowOnLoad);
    Mscrm.ReadFormUtilities.initializeReadForm();
    Sys.Application.raiseLoad();
    setPerfMarkerTimestamp("DynamicPropertyFormLoadEndTime")
};
Mscrm.Utilities.$5o = function($p0)
{
    return $p0.toLowerCase().trim()
};
Mscrm.Utilities.$87 = function($p0)
{
    var $v_0 = $p0.indexOf("?ver=");
    if($v_0 > 0) $p0 = $p0.substr(0, $v_0);
    return $p0
};
Mscrm.Utilities.$8z = function($p0)
{
    var $v_0 = {},
        $v_1 = new Array(0),
        $v_2 = $P_CRM("script");
    $v_2.each(function($p1_0, $p1_1)
    {
        var $v_5 = $P_CRM($p1_1).attr("src");
        if(!isNullOrEmptyString($v_5))
        {
            var $v_6 = Mscrm.Utilities.$5o($v_5);
            $v_0[$v_6] = true
        }
    });
    for(var $v_3 = 0; $v_3 < $p0.length; $v_3++)
    {
        var $v_4 = Mscrm.Utilities.$5o($p0[$v_3]);
        if(!IsNull($v_0[$v_4])) continue;
        Array.add($v_1, $p0[$v_3])
    }
    return $v_1
};
Mscrm.Utilities.loadFormLayout = function()
{
    setPerfMarkerTimestamp("StartLoadFormLayoutTimestamp");
    if(window.ShouldRequestEntityData)
    {
        var $v_7 = new Mscrm.Performance.PerformanceStopwatch("RetrieveData");
        $v_7.start();
        var $v_8 = new XMLHttpRequest,
            $v_9 = window.EntityDataUrl,
            $v_A = Mscrm.CrmUri.create($v_9);
        Mscrm.Utilities.$8x($v_8, $v_A);
        eval($v_8.responseText);
        $v_7.stop()
    }
    var $v_0 = new Mscrm.MetricsStopwatch("LoadFormLayout");
    $v_0.start();
    Mscrm.Utilities.$AG();
    var $v_1 = new Mscrm.Performance.PerformanceStopwatch("RetrieveLayout");
    $v_1.start();
    var $v_2 = Mscrm.CrmUri.create(window.RecordData["_formlayoutUrl"]),
        $v_3 = new XMLHttpRequest;
    Mscrm.Utilities.$8y($v_3, $v_2);
    var $v_4, $$t_C, $$t_D;
    $$t_D = Mscrm.JsonUtilities.tryGetParsedJson(Mscrm.JsonUtilities.getJsonString($v_3.responseText), $$t_C = {
        val: $v_4
    }), $v_4 = $$t_C.val, $$t_D;
    window.FormLayout = $v_4;
    $v_1.stop();
    var $v_5 = window.FormLayout["_error"];
    if(IsNull($v_5))
    {
        Mscrm.Utilities.$Ak();
        var $v_B = new Mscrm.Performance.PerformanceStopwatch("Bind FormData and Layout Template");
        $v_B.start();

        function myHelper(arg, arg1, arg2, arg3)
        {
            if(arg3 == "-") return Mscrm.Utilities.getDataOrDefault(arg, arg1, arg2, Mscrm.InlineEditConstants.DefaultEmptyValuePlaceHolder);
            else return Mscrm.Utilities.getDataOrDefault(arg, arg1, arg2, arg3)
        }
        $P_CRM.views.helpers(
        {
            getData: Mscrm.Utilities.getData,
            getCssClass: Mscrm.Utilities.getCssClass,
            getDataOrDefault: myHelper,
            getProcessControlData: Mscrm.Utilities.getProcessControlData,
            getProcessControlCollapsibleClass: Mscrm.Utilities.getProcessControlCollapsibleClass
        });
        document.getElementById("rofContainer").innerHTML = $P_CRM("#" + Mscrm.InlineEditConstants.JQueryTemplateNameForMainPage).render(window.RecordData);
        $v_B.stop()
    }
    Mscrm.Utilities.$AR();
    var $v_6 = $get("containerLoadingProgress");
    if(!IsNull($v_6)) $v_6.style.display = "none";
    $v_0.stop()
};
Mscrm.Utilities.$AG = function()
{
    var $v_0 = _entityData;
    if(!isNullOrEmptyString($v_0))
    {
        var $v_1, $$t_3, $$t_4, $v_2 = ($$t_4 = Mscrm.JsonUtilities.tryGetParsedJson(Mscrm.JsonUtilities.getJsonString($v_0), $$t_3 = {
            val: $v_1
        }), $v_1 = $$t_3.val, $$t_4);
        Mscrm.Utilities.fixCurrencyValue($v_1);
        window.RecordData = $v_1;
        if(!IsNull($v_2)) return;
        $v_2 = window.RecordData["_error"];
        if(!IsNull($v_2));
    }
};
Mscrm.Utilities.fixCurrencyValue = function(formData)
{
    if(!IsNull(formData))
    {
        var $$dict_1 = formData;
        for(var $$key_2 in $$dict_1)
        {
            var $v_0 = {
                    key: $$key_2,
                    value: $$dict_1[$$key_2]
                },
                $v_1 = $v_0.value;
            if(IsNull($v_1)) continue;
            if(IsNull($v_1["value"]) || IsNull($v_1["symbol"])) continue;
            var $v_2 = $v_1["value"],
                $v_3 = $v_1["symbol"];
            if(!isNullOrEmptyString($v_2) && !isNullOrEmptyString($v_3))
                if(window.SYMBOLPOISTION_CURRENCY)
                {
                    if(!$v_2.startsWith($v_3)) $v_1["value"] = $v_3 + $v_2
                }
                else if(!$v_2.endsWith($v_3)) $v_1["value"] = $v_2 + $v_3
        }
    }
};
Mscrm.Utilities.$8x = function($p0, $p1)
{
    var $v_0, $v_1;
    $v_0 = "GET";
    $v_1 = null;
    $p0.open($v_0, $p1.toString(), false);
    $p0.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    $p0.send($v_1)
};
Mscrm.Utilities.$8y = function($p0, $p1)
{
    var $v_0, $v_1;
    if(_isPreviewForm)
    {
        $v_0 = "POST";
        if(isOutlookHostedWindow()) $v_1 = window._formXml;
        else $v_1 = window.top.opener.oFormXml
    }
    else
    {
        $v_0 = "GET";
        $v_1 = null
    }
    $p0.open($v_0, $p1.toString(), false);
    $p0.send($v_1)
};
Mscrm.Utilities.$Ak = function()
{
    var $v_0 = window.FormLayout["header"]["JQueryTemplates"],
        $v_1 = window.FormLayout["header"]["StyleIncludes"],
        $v_2 = new Mscrm.Performance.PerformanceStopwatch("JQueryTemplates Load");
    $v_2.start();
    for(var $v_3 = 0; $v_3 < $v_0.length; $v_3++) Mscrm.Utilities.createScriptNodeForJQueryTemplate($v_0[$v_3]);
    $v_2.stop();
    $v_2 = new Mscrm.Performance.PerformanceStopwatch("StyleSheets Load");
    $v_2.start();
    for(var $v_4 = 0; $v_4 < $v_1.length; $v_4++) Mscrm.CrmHeader.setStyleSheetString($v_1[$v_4]);
    $v_2.stop()
};
Mscrm.Utilities.createScriptNodeForJQueryTemplate = function(template)
{
    var $v_0 = document.createElement("script");
    $v_0.id = template.Key;
    $v_0.type = "text/x-jsrender";
    var $v_1 = template.Value;
    $v_0.text = $v_1;
    document.body.appendChild($v_0)
};
Mscrm.Utilities.$AR = function()
{
    var $v_0 = window.top.document.getElementById("crmRibbonManager");
    if(!IsNull($v_0)) $v_0.style.height = "62px";
    if(Mscrm.Utilities.isRefreshForm())
    {
        if(!Mscrm.Utilities.hasProcessControl())
        {
            var $v_4 = $P_CRM("#processControlContainer");
            $v_4.length > 0 && $v_4.hide();
            var $v_5 = $P_CRM("#header_process_d");
            $v_5.length > 0 && $v_5.children(".processWarningBar").parents("tr").first().hide()
        }
        var $v_1 = $get("HeaderTilesWrapperLayoutElement"),
            $v_2 = $P_CRM(".ms-crm-HeaderTilesWrapperElement"),
            $v_3 = $P_CRM(".ms-crm-HeaderTileElement", $P_CRM($v_1));
        Mscrm.Utilities.$AP($v_1, $v_2, $v_3);
        Mscrm.Utilities.setRefreshHeaderLayout($v_1, $v_2, $v_3);
        Mscrm.Utilities.setRefreshFormLayout()
    }
};
Mscrm.Utilities.$AP = function($p0, $p1, $p2)
{
    if(!IsNull($p0) && !IsNull($p1) && $p1.length > 0 && !IsNull($p2) && $p2.length > 0)
    {
        var $v_0 = $get("HeaderTitleElement");
        if(!IsNull($p0))
        {
            $p1 = $P_CRM(".ms-crm-HeaderTilesWrapperElement");
            $p2 = $P_CRM(".ms-crm-HeaderTileElement", $P_CRM($p0));
            if($p2.length > 0)
            {
                Mscrm.Utilities.$2P = Mscrm.Utilities.getTitleMaxWidth();
                $v_0.style.maxWidth = Mscrm.Utilities.$2P.toString() + "px"
            }
        }
    }
};
Mscrm.Utilities.getTitleMaxWidth = function()
{
    var $v_0 = window.screen.availWidth;
    if($v_0 <= 1024) return 408;
    else
    {
        if($v_0 <= 1400) return 600;
        return 768
    }
};
Mscrm.Utilities.setRefreshHeaderLayout = function(headerTileWrapperLayoutElement, headerTileWrapperElement, headerTileElements)
{
    if(!IsNull(headerTileWrapperLayoutElement) && !IsNull(headerTileWrapperElement) && headerTileWrapperElement.length > 0 && !IsNull(headerTileElements) && headerTileElements.length > 0)
    {
        var $v_0 = $get("HeaderTitleElement"),
            $v_1 = $get("crmFormHeaderTop");
        if(!IsNull($v_1) && !IsNull($v_0))
        {
            var $v_2 = Mscrm.Utilities.$2P;
            if($v_0.clientWidth < Mscrm.Utilities.$2P) $v_2 = $v_0.clientWidth;
            Mscrm.Utilities.$7x(headerTileElements);
            var $v_3 = "0px";
            if($v_1.clientWidth <= $v_2 + Mscrm.Utilities.$2T)
            {
                headerTileWrapperLayoutElement.style.marginTop = "0px";
                headerTileElements.css("width", "auto");
                $v_0.style.maxWidth = "";
                $v_0.style.width = "100%";
                headerTileWrapperLayoutElement.clientHeight < headerTileWrapperLayoutElement.children[0].clientHeight && Mscrm.Utilities.$7x(headerTileElements);
                $v_3 = "auto"
            }
            else
            {
                headerTileWrapperLayoutElement.style.marginTop = "-56px";
                $v_0.style.maxWidth = Mscrm.Utilities.$2P.toString() + "px"
            }
            if(!IsNull(headerTileWrapperElement) && headerTileWrapperElement.length > 0)
            {
                if(Mscrm.Utilities.get_isLeftToRight()) headerTileWrapperElement.css("right", $v_3);
                else headerTileWrapperElement.css("left", $v_3);
                headerTileWrapperElement.css("min-width", Mscrm.Utilities.$2T.toString() + "px")
            }
        }
    }
};
Mscrm.Utilities.setRefreshFormLayout = function()
{
    var $v_0 = $get("rofContainer"),
        $v_1 = $get("tdAreas");
    if(!IsNull($v_0) && !IsNull($v_1))
    {
        var $v_2 = 0,
            $v_3 = $get("formHeaderContainer");
        if(!IsNull($v_3)) $v_2 = $v_3.clientHeight + 1;
        var $v_4 = 0,
            $v_5 = $get("formFootersContainer");
        if(!IsNull($v_5)) $v_4 = $v_5.clientHeight;
        if(!Mscrm.Utilities.isMobileRefresh())
        {
            var $v_6 = $v_0.clientHeight;
            $v_1.style.top = "0px";
            if(window.UseTabletExperience && Mscrm.CrmBrowser.get_currentBrowser().$f_0 === 3) $v_1.style.height = Mscrm.Utilities.$7U($v_6 - $v_2 - $v_4).toString() + "px";
            else $v_1.style.height = Mscrm.Utilities.$7U($v_6 - $v_2 - $v_4 - 8).toString() + "px"
        }
    }
};
Mscrm.Utilities.$7x = function($p0)
{
    var $v_0 = 3,
        $v_1 = 120;
    Mscrm.Utilities.$2T = $p0.length * $v_0;
    for(var $v_2 = 0; $v_2 < $p0.length; $v_2++)
    {
        var $v_3 = $P_CRM(".ms-crm-Field-DatePickerTimePicker-Print", $p0[$v_2]);
        if(!$v_3 || $v_3.length <= 0 || !$v_3[0])
        {
            $p0[$v_2].style.width = $v_1.toString() + "px";
            Mscrm.Utilities.$2T += $v_1
        }
        else
        {
            $p0[$v_2].style.width = "200px";
            Mscrm.Utilities.$2T += 200
        }
    }
};
Mscrm.Utilities.$7U = function($p0)
{
    if($p0 >= 0) return $p0;
    else return 0
};
Mscrm.Utilities.hasProcessControl = function()
{
    if(IsNull(window.RecordData) || !("_processControlDataKey" in window.RecordData)) return false;
    var $v_0 = window.RecordData["_processControlDataKey"];
    return !IsNull($v_0["_processStages"])
};
Mscrm.Utilities.getHomePageQueryStringParams = function()
{
    var $v_0 = ["etc", "etn", "viewid", "viewtype"];
    return $v_0
};
Mscrm.Utilities.getRecordPageQueryStringParams = function()
{
    var $v_0 = ["etc", "etn", "id"];
    return $v_0
};
Mscrm.Utilities.getHierarchyPageQueryStringParams = function()
{
    var $v_0 = ["etc", "etn", "id"];
    return $v_0
};
Mscrm.Utilities.assignInnerHtml = function(element, htmlContent)
{
    var $v_0 = 59000;
    if(Mscrm.Utilities.isIosDevice())
    {
        var $v_1 = 0;
        element.innerHTML = "";
        var $v_2 = htmlContent.length;
        while($v_1 < $v_2)
        {
            element.innerHTML += htmlContent.substr($v_1, $v_2 - $v_1 > $v_0 ? $v_0 : $v_2 - ($v_1 + 1));
            $v_1 += $v_0
        }
    }
    else element.innerHTML = htmlContent
};
Mscrm.Utilities.updateRecordId = function(pageUrl)
{
    if(!IsNull(pageUrl.get_query()["oId"]))
    {
        var $v_0 = "{" + $P_CRM(".inFocus").attr("data-recordid").toString() + "}";
        pageUrl.get_query()["oId"] = $v_0
    }
};
Mscrm.Utilities.getPageUrl = function(pageUrl, pageType)
{
    if(!Mscrm.PageManager.isOutlookProxyPage() && !Mscrm.Utilities.isNewPageModel(pageUrl)) return pageUrl;
    if(IsNull(pageType)) return pageUrl;
    var $v_0 = null;
    switch(pageType.toUpperCase())
    {
        case "ENTITYLIST":
            $v_0 = Mscrm.Utilities.getHomePageQueryStringParams();
            break;
        case "ENTITYRECORD":
            $v_0 = Mscrm.Utilities.getRecordPageQueryStringParams();
            break;
        case "HIERARCHYPAGE":
            $v_0 = Mscrm.Utilities.getHierarchyPageQueryStringParams();
            Mscrm.Utilities.updateRecordId(pageUrl);
            break;
        default:
            return pageUrl
    }
    var $v_1 = Mscrm.Utilities.removeExtraQSParameters(pageUrl, $v_0);
    $v_1.set_path("/main.aspx");
    $v_1.get_query()["pagetype"] = pageType;
    delete $v_1.get_query().pagemode;
    delete pageUrl.get_query().pagetype;
    var $v_2 = pageUrl.get_query()["extraqs"],
        $v_3 = Mscrm.CrmUri.create("");
    if(!IsNull($v_2))
    {
        $v_3.appendToQuery($v_2);
        delete pageUrl.get_query().extraqs
    }
    $v_3.appendToQuery(pageUrl.get_queryString());
    $v_2 = $v_3.toString();
    if($v_2.length > 0) $v_1.get_query()["extraqs"] = $v_2;
    return $v_1
};
Mscrm.Utilities.removeExtraQSParameters = function(pageUrl, qsParams)
{
    for(var $v_0 = Mscrm.CrmUri.create(pageUrl.toString().split("?")[0]), $v_1 = 0; $v_1 < qsParams.length; $v_1++)
    {
        var $v_2 = qsParams[$v_1];
        if(!IsNull(pageUrl.get_query()[$v_2]))
        {
            $v_0.get_query()[$v_2] = pageUrl.get_query()[$v_2];
            delete pageUrl.get_query()[$v_2]
        }
    }
    return $v_0
};
Mscrm.Utilities.getHomePageUrlForRecordPage = function(homepage, defaultUrl)
{
    var $v_0 = defaultUrl,
        $v_1;
    switch(homepage.get_path())
    {
        case "/sfa/accts/edit.aspx":
            $v_0 = Mscrm.CrmUri.create("/_root/homepage.aspx?etc=1");
            break;
        case "/sfa/conts/edit.aspx":
            $v_0 = Mscrm.CrmUri.create("/_root/homepage.aspx?etc=2");
            break;
        case "/sfa/leads/edit.aspx":
            $v_0 = Mscrm.CrmUri.create("/_root/homepage.aspx?etc=4");
            break;
        case "/sfa/opps/edit.aspx":
            $v_0 = Mscrm.CrmUri.create("/_root/homepage.aspx?etc=3");
            break;
        case "/cs/cases/edit.aspx":
            $v_0 = Mscrm.CrmUri.create("/_root/homepage.aspx?etc=112");
            break;
        case "/userdefined/edit.aspx":
            $v_1 = homepage.get_query()["etc"];
            $v_0 = Mscrm.CrmUri.create("/_root/homepage.aspx");
            $v_0.get_query()["etc"] = $v_1;
            break;
        case "/ma/camps/edit.aspx":
            $v_0 = Mscrm.CrmUri.create("homepage.aspx?etc=4400");
            break;
        case "/routingruleitem/edit.aspx":
        case "/convertruleitem/edit.aspx":
        case "/slaitem/edit.aspx":
            $v_1 = homepage.get_query()["etc"];
            $v_0 = Mscrm.CrmUri.create("/_root/homepage.aspx");
            $v_0.get_query()["etc"] = $v_1;
            break;
        default:
            break
    }
    return $v_0
};
Mscrm.Utilities.getResourceCenterUrlAndParams = function(strFwLink, httpsFwLink)
{
    var $v_0, $v_1;
    if(window.location.protocol === "http:")
    {
        $v_0 = "http://";
        $v_1 = strFwLink
    }
    else
    {
        $v_0 = "https://";
        $v_1 = httpsFwLink
    }
    var $v_2 = Mscrm.CrmUri.create($v_0 + "go.microsoft.com/fwlink/");
    $v_2.get_query()["LinkID"] = $v_1;
    $v_2.get_query()["clcid"] = "0x409";
    $v_2.get_query()["LangCode"] = window.USER_HELP_LCID;
    $v_2.get_query()["SkuType"] = window.HELP_CRM_SKU;
    $v_2.get_query()["Ver"] = window.APPLICATION_FULL_VERSION;
    if(!isNullOrEmptyString(window.ONLINE_TRANSACTION_TYPE)) $v_2.get_query()["tt"] = window.ONLINE_TRANSACTION_TYPE;
    return $v_2.toString()
};
Mscrm.Utilities.isNewPageModel = function(uri)
{
    var $v_0 = false;
    if(uri.get_path().toUpperCase().endsWith("/HOMEPAGE.ASPX")) $v_0 = true;
    else if(uri.get_path().toUpperCase().endsWith("/HIERARCHY.ASPX")) $v_0 = true;
    else if(uri.get_path().toUpperCase().endsWith("/USERDEFINED/EDIT.ASPX"))
    {
        var $v_1 = 0,
            $v_2 = uri.get_query()["etc"];
        if(!IsNull($v_2)) $v_1 = parseInt($v_2, 10);
        switch($v_1)
        {
            case 1:
            case 2:
            case 3:
            case 4:
            case 112:
                $v_0 = true;
                break;
            default:
                $v_0 = $v_1 >= 1e4;
                break
        }
    }
    else if(typeof _IsRefreshForm !== "undefined" && _IsRefreshForm === "1") $v_0 = true;
    return $v_0
};
Mscrm.Utilities.traceCurrentTime = function(tag) {};
Mscrm.Utilities.isGlobalQuickCreateForm = function()
{
    var $v_0 = window.self._globalQuickCreate;
    return IsNull($v_0) ? false : $v_0
};
Mscrm.Utilities.isUsdClient = function()
{
    var $v_0 = window.top.IsUSD;
    return IsNull($v_0) ? false : $v_0
};
Mscrm.Utilities.isProcessForm = function()
{
    return typeof _IsProcessForm !== "undefined" && _IsProcessForm === "1"
};
Mscrm.Utilities.isValidForStickyViews = function(areaId, subAreaId)
{
    if(isNullOrEmptyString(areaId) || isNullOrEmptyString(subAreaId)) return false;
    var $v_0 = false;
    switch(areaId.toUpperCase())
    {
        case "WORKPLACE":
        case "SFA":
        case "MA":
        case "CS":
        case "SETTINGS":
            $v_0 = true;
            break;
        default:
            $v_0 = false;
            break
    }
    if($v_0) switch(subAreaId.toUpperCase())
    {
        case "NAV_MINICAMPS":
            $v_0 = false;
            break;
        case "NAV_DASHBOARDS":
            $v_0 = false;
            break;
        default:
            $v_0 = true;
            break
    }
    return $v_0
};
Mscrm.Utilities.isDigit = function(s)
{
    var $v_0 = false;
    if(s.length === 1)
    {
        var $v_1 = s.charCodeAt(0);
        $v_0 = $v_1 >= 48 && $v_1 <= 57
    }
    return $v_0
};
Mscrm.Utilities.getMainPageManager = function()
{
    var $v_0 = null;
    try
    {
        var $v_1 = Mscrm.CrmUri.create(window.location.href),
            $v_2 = window.self;
        while($v_2 !== $v_2.parent)
        {
            $v_2 = $v_2.parent;
            var $v_3 = Mscrm.CrmUri.create($v_2.location.href);
            if($v_3.get_path().toUpperCase().endsWith("/MAIN.ASPX"))
            {
                $v_0 = $v_2.Sys.Application.findComponent("crmPageManager");
                break
            }
        }
    }
    catch($$e_4)
    {
        $v_0 = null
    }
    return $v_0
};
Mscrm.Utilities.emptyGuid = function()
{
    return "00000000-0000-0000-0000-000000000000"
};
Mscrm.Utilities.createGuid = function()
{
    for(var $v_0 = "", $v_1 = 0; $v_1 < 8; $v_1++) $v_0 += Math.floor(Math.random() * 15).toString(15);
    $v_0 += "-";
    for(var $v_2 = 0; $v_2 < 4; $v_2++) $v_0 += Math.floor(Math.random() * 15).toString(15);
    $v_0 += "-";
    for(var $v_3 = 0; $v_3 < 4; $v_3++) $v_0 += Math.floor(Math.random() * 15).toString(15);
    $v_0 += "-";
    for(var $v_4 = 0; $v_4 < 4; $v_4++) $v_0 += Math.floor(Math.random() * 15).toString(15);
    $v_0 += "-";
    for(var $v_5 = 0; $v_5 < 12; $v_5++) $v_0 += Math.floor(Math.random() * 15).toString(15);
    return "{" + $v_0 + "}"
};
Mscrm.Utilities.isModalDialogSupported = function()
{
    if(Mscrm.Utilities.isIosDevice()) return false;
    var $v_0 = window.showModalDialog;
    if(IsNull($v_0)) return false;
    else return !window.UseTabletExperience
};
Mscrm.Utilities.isModelessDialogSupported = function()
{
    if(Mscrm.Utilities.isIosDevice()) return false;
    var $v_0 = window.showModelessDialog;
    if(!IsNull($v_0)) return true;
    return false
};
Mscrm.Utilities.isFirefox = function()
{
    return Sys.Browser.agent === Sys.Browser.Firefox
};
Mscrm.Utilities.isIosDevice = function()
{
    return Mscrm.InternalUtilities.Utilities.isIosDevice()
};
Mscrm.Utilities.isIE = function()
{
    return Sys.Browser.agent === Sys.Browser.InternetExplorer || Mscrm.Utilities.isIE11StandardOrIE11CompatibleMode()
};
Mscrm.Utilities.executeFunctionIfModeless = function(callbackReference, value)
{
    !Mscrm.Utilities.isModalDialogSupported() && Mscrm.Utilities.executeFunction(callbackReference, value)
};
Mscrm.Utilities.executeFunction = function(callbackReference, value)
{
    if(IsNull(callbackReference)) return null;
    var $v_0 = callbackReference.callback;
    if(IsNull($v_0)) return null;
    var $v_1 = callbackReference.context,
        $v_2 = callbackReference.parameters,
        $v_3 = [value];
    if(!IsNull($v_2))
        for(var $v_4 = 0; $v_4 < $v_2.length; $v_4++) $v_3[$v_4 + 1] = $v_2[$v_4];
    try
    {
        return $v_0.apply($v_1, $v_3)
    }
    catch($$e_7)
    {
        alert(window.LOCID_IPADWINCLOSED)
    }
    return null
};
Mscrm.Utilities.getExternalIFrame = function(frameElement, frameId)
{
    try
    {
        return frameElement.contentWindow.frames[frameId]
    }
    catch($$e_2)
    {
        return null
    }
};
Mscrm.Utilities.setReturnValue = function(value)
{
    var $v_0 = window.isMobileClient,
        $v_1 = Mscrm.CrmUri.create(window.self.location.href),
        $v_2 = "dType" in $v_1.get_query() ? $v_1.get_query()["dType"] : null;
    if(!IsNull($v_0) && $v_0 && $v_2 === "2")
    {
        window.returnValue = value;
        return
    }
    window.returnValue = Sys.Serialization.JavaScriptSerializer.serialize(value);
    executeDialogCloseCallback(value)
};
Mscrm.Utilities.createCallbackFunctionObject = function(functionName, context, parameters, onlyForModeless)
{
    if(IsNull(onlyForModeless)) onlyForModeless = true;
    if(!onlyForModeless || !Mscrm.Utilities.isModalDialogSupported())
    {
        var $v_0 = {};
        if(IsNull(context)) context = window;
        $v_0.context = context;
        $v_0.callback = context[functionName];
        if(!IsNull(parameters)) $v_0.parameters = parameters;
        return $v_0
    }
    return null
};
Mscrm.Utilities.$1i = function($p0, $p1)
{
    if(isNullOrEmptyString($p0)) return $p1;
    if($p0.indexOf($p1) >= 0) return $p0;
    return $p0 + " " + $p1
};
Mscrm.Utilities.flipElementHorizontally = function(element)
{
    var $v_0 = element.style;
    $v_0["MozTransform"] = Mscrm.Utilities.$1i($v_0["MozTransform"], "scaleX(-1)");
    $v_0["WebkitTransform"] = Mscrm.Utilities.$1i($v_0["WebkitTransform"], "scaleX(-1)");
    $v_0["transform"] = Mscrm.Utilities.$1i($v_0["transform"], "scaleX(-1)");
    if(Mscrm.Utilities.get_ieBrowserVersion() > 0 && Mscrm.Utilities.get_ieBrowserVersion() <= 9) $v_0["filter"] = Mscrm.Utilities.$1i($v_0["filter"], "fliph")
};
Mscrm.Utilities.flipElementVertically = function(element)
{
    var $v_0 = element.style;
    $v_0["MozTransform"] = Mscrm.Utilities.$1i($v_0["MozTransform"], "scaleY(-1)");
    $v_0["WebkitTransform"] = Mscrm.Utilities.$1i($v_0["WebkitTransform"], "scaleY(-1)");
    $v_0["transform"] = Mscrm.Utilities.$1i($v_0["transform"], "scaleY(-1)");
    if(Mscrm.Utilities.get_ieBrowserVersion() > 0 && Mscrm.Utilities.get_ieBrowserVersion() <= 9) $v_0["filter"] = Mscrm.Utilities.$1i($v_0["filter"], "flipv")
};
Mscrm.Utilities.cancelElementFlipping = function(element)
{
    var $v_0 = element.style;
    $v_0["MozTransform"] = "";
    $v_0["WebkitTransform"] = "";
    $v_0["transform"] = "";
    $v_0["filter"] = ""
};
Mscrm.Utilities.removeAll = function(parentNode)
{
    for(var $v_0 = 0; $v_0 < parentNode.length; $v_0++)
    {
        var $v_1 = parentNode[$v_0];
        $v_1.parentNode.removeChild($v_1)
    }
};
Mscrm.Utilities.getCurrentContentWindow = function()
{
    var $v_0 = null,
        $v_1 = Mscrm.Utilities.getCurrentContentId();
    if(!isNullOrEmptyString($v_1))
    {
        var $v_2 = $get($v_1);
        if(!IsNull($v_2)) $v_0 = $v_2.contentWindow
    }
    return $v_0
};
Mscrm.Utilities.getCurrentContentId = function()
{
    var $v_0 = "",
        $v_1 = $get("crmContentPanel");
    if(!IsNull($v_1))
    {
        var $v_2 = $v_1.attributes.getNamedItem("currentContentId");
        if(!IsNull($v_2) && $v_2.specified) $v_0 = $v_2.value
    }
    return $v_0
};
Mscrm.Utilities.getCurrentFormIdForHierarchy = function()
{
    var $v_0 = "",
        $v_1 = Mscrm.Utilities.getCurrentContentId();
    if(!isNullOrEmptyString($v_1)) $v_0 = $P_CRM("#" + $v_1).contents().find("#tileFormSelector_hierarchyContainer .tileFormAnchor.selected").attr("formid");
    return $v_0
};
Mscrm.Utilities.getFinalCustomizedHelpUrl = function(customizedHelpGlobalUrl, entityName, addAdditionalParameters, helpEntryPoint)
{
    var $v_0 = null;
    if(!isNullOrEmptyString(entityName))
    {
        var $v_1 = Mscrm.EntitiesCustomizedHelpUtility.getEntityCustomizedHelpUrl(entityName);
        if(!isNullOrEmptyString($v_1)) $v_0 = Mscrm.CrmUri.create($v_1)
    }
    if(IsNull($v_0) && !isNullOrEmptyString(customizedHelpGlobalUrl)) $v_0 = Mscrm.CrmUri.create(customizedHelpGlobalUrl);
    if(!IsNull($v_0) && addAdditionalParameters)
    {
        $v_0.get_query()["userlcid"] = window.USER_HELP_LCID;
        if(!isNullOrEmptyString(entityName)) $v_0.get_query()["typename"] = entityName;
        if(!isNullOrEmptyString(helpEntryPoint))
        {
            $v_0.get_query()["entrypoint"] = helpEntryPoint;
            var $v_2 = Mscrm.Utilities.$9B(helpEntryPoint);
            if(!isNullOrEmptyString($v_2)) $v_0.get_query()["formid"] = $v_2
        }
    }
    return $v_0
};
Mscrm.Utilities.$9B = function($p0)
{
    if(isNullOrEmptyString($p0)) return null;
    var $v_0 = "";
    try
    {
        switch($p0)
        {
            case "form":
                var $v_1 = Mscrm.Utilities.getCurrentContentWindow();
                if(!IsNull($v_1)) $v_0 = $v_1.Xrm.Page.ui.formSelector.getCurrentItem().getId();
                break;
            case "hierarchychart":
                $v_0 = Mscrm.Utilities.getCurrentFormIdForHierarchy();
                break
        }
    }
    catch($$e_3)
    {
        return null
    }
    return $v_0
};
Mscrm.Utilities.getEventElement = function(rawEvent, tagName)
{
    var $v_0 = rawEvent.target || rawEvent.srcElement;
    if(isNullOrEmptyString(tagName)) return $v_0;
    while($v_0 && $v_0.tagName !== tagName) $v_0 = $v_0.parentNode;
    return $v_0
};
Mscrm.Utilities.eventToDomEvent = function(rawEvent)
{
    return new Sys.UI.DomEvent(rawEvent)
};
Mscrm.Utilities.getDomEventElement = function(domEvent, tagName)
{
    var $v_0 = domEvent.target;
    while($v_0 && $v_0.tagName !== tagName) $v_0 = $v_0.parentNode;
    return $v_0
};
Mscrm.Utilities.getParentElementByTagName = function(node, tagName)
{
    while(node && node.tagName !== tagName) node = node.parentNode;
    return node
};
Mscrm.Utilities.getAdoptedNode = function($sn_document, node)
{
    var $v_0 = node;
    if($sn_document.adoptNode) $v_0 = $sn_document.adoptNode(node);
    return $v_0
};
Mscrm.Utilities.getEventTarget = function(rawEvent)
{
    if(IsNull(rawEvent)) return null;
    return Mscrm.Utilities.eventToDomEvent(rawEvent).target
};
Mscrm.Utilities.isDefaultPrevented = function(browserEvent)
{
    if(IsNull(browserEvent)) throw Error.argumentNull("browserEvent", "browserEvent must be not null.");
    if("returnValue" in browserEvent)
        if(IsNull(browserEvent.returnValue)) return false;
        else return !browserEvent.returnValue;
    else if("defaultPrevented" in browserEvent) return browserEvent.defaultPrevented;
    else if("getPreventDefault" in browserEvent) return browserEvent.getPreventDefault();
    return false
};
Mscrm.Utilities.getDomEventKeyCode = function(domEvent)
{
    if(!IsNull(domEvent.keyCode)) return domEvent.keyCode;
    return domEvent.charCode
};
Mscrm.Utilities.preventDefault = function(rawEvent)
{
    if("preventDefault" in rawEvent)
    {
        rawEvent.preventDefault();
        return
    }
    rawEvent.returnValue = false;
    return
};
Mscrm.Utilities.stopPropagation = function(rawEvent)
{
    if("stopPropagation" in rawEvent)
    {
        rawEvent.stopPropagation();
        return
    }
    rawEvent.cancelBubble = true;
    return
};
Mscrm.Utilities.getLegacyEventHandler = function(element, eventAttributeName)
{
    var $v_0 = element.getAttribute(eventAttributeName);
    if(IsNull($v_0)) return null;
    if(isOfClass($v_0, "Function")) return $v_0;
    return new Function("eventObject", $v_0)
};
Mscrm.Utilities.removeLegacyEventHandler = function(element, eventAttributeName)
{
    element.setAttribute(eventAttributeName, null);
    element.removeAttribute(eventAttributeName)
};
Mscrm.Utilities.getXYPos = function(obj, rtl, parent)
{
    var $v_0 = {},
        $v_1 = 0,
        $v_2 = 0,
        $v_3 = 0,
        $v_4 = 0,
        $v_5 = obj;
    while(!IsNull(obj) && document.documentElement !== obj && !(!IsNull(parent) && parent === obj))
    {
        if(obj !== $v_5)
        {
            if(window.UseTabletExperience)
            {
                if(rtl) $v_3 += Mscrm.Utilities.$6n(obj);
                else $v_3 += obj.scrollLeft;
                $v_4 += obj.scrollTop
            }
            obj = obj.parentNode;
            continue
        }
        if(rtl) $v_1 += obj.offsetLeft - Mscrm.Utilities.$6n(obj);
        else $v_1 += obj.offsetLeft - obj.scrollLeft;
        $v_2 += obj.offsetTop - obj.scrollTop;
        $v_5 = obj.offsetParent;
        obj = obj.parentNode
    }
    $v_0["x"] = $v_1 - (isNaN($v_3) ? 0 : $v_3);
    $v_0["y"] = $v_2 - (isNaN($v_4) ? 0 : $v_4);
    return $v_0
};
Mscrm.Utilities.$6n = function($p0)
{
    var $v_0 = $p0.scrollWidth,
        $v_1 = $p0.clientWidth,
        $v_2 = $p0.scrollLeft;
    if($v_0 < $v_1) $v_0 = $v_1;
    if(!$v_1 && $v_0 > 0) $v_1 = $v_0;
    var $v_3 = 0;
    if($v_0 >= $v_1 + $v_2) $v_3 = -($v_0 - $v_1 - $v_2);
    else $v_3 = -($v_1 + $v_2 - $v_0);
    return $v_3
};
Mscrm.Utilities.getIconPath = function(entityTypeCode)
{
    return Mscrm.IconUtil.getIconPath(entityTypeCode, 0).toString()
};
Mscrm.Utilities.decorateAccessKey = function(text)
{
    var $v_0 = Mscrm.Utilities.getAccessKey(text);
    if(isNullOrEmptyString($v_0)) return text;
    var $v_1 = text.indexOf("&");
    if(text.length > $v_1 + 1)
    {
        var $v_2 = CrmEncodeDecode.CrmHtmlEncode(text.substring(0, $v_1)) + "<u>" + CrmEncodeDecode.CrmHtmlEncode(text.charAt($v_1 + 1).toString()) + "</u>";
        if(text.length > $v_1 + 2) $v_2 = $v_2 + CrmEncodeDecode.CrmHtmlEncode(text.substring($v_1 + 2, text.length));
        return $v_2
    }
    return text
};
Mscrm.Utilities.getAccessKey = function(text)
{
    if(isNullOrEmptyString(text)) return "";
    var $v_0 = text.indexOf("&");
    if($v_0 !== text.length - 1)
        if($v_0 >= 0) return text.substring($v_0 + 1, $v_0 + 2);
    return ""
};
Mscrm.Utilities.getGridId = function($sn_window)
{
    if(!IsNull($sn_window))
    {
        var $v_0 = $sn_window.GRID_ID;
        if(!isNullOrEmptyString($v_0)) return $v_0;
        return "crmGrid"
    }
    return null
};
Mscrm.Utilities.reloadPage = function()
{
    try
    {
        if(window.top !== window.self) window.top.location.reload();
        else window.location.reload()
    }
    catch($$e_0)
    {}
};
Mscrm.Utilities.getCrmGrid = function()
{
    var $v_0 = Mscrm.Utilities.getGridId(window.self);
    if(!IsNull($v_0)) return $find($v_0);
    return null
};
Mscrm.Utilities.getViewURL = function(entityTypeCode, viewId, qsParam)
{
    if(Mscrm.EntityPropUtil.isActivityTypeCode(entityTypeCode)) entityTypeCode = 4200;
    return String.format("_root/homepage.aspx?etc={0}&viewid={1}&{2}", CrmEncodeDecode.CrmUrlEncode(entityTypeCode.toString(10)), CrmEncodeDecode.CrmUrlEncode(viewId), qsParam)
};
Mscrm.Utilities.isHierarchyViewEnabled = function()
{
    var $v_0 = Mscrm.Utilities.getContentUrl(null);
    if(!$v_0.isEmpty() && $v_0.get_path().endsWith("/_root/hierarchy.aspx")) return true;
    return false
};
Mscrm.Utilities.refreshCurrentGrid = function(entityTypeCode)
{
    if(!Mscrm.PageManager.isFlatUIPage()) Mscrm.Grid.auto(entityTypeCode, null);
    else
    {
        var $v_0 = {};
        $v_0["etc"] = entityTypeCode;
        Mscrm.PageManager.get_instance().raiseEvent(50, $v_0)
    }
};
Mscrm.Utilities.refreshParentGrid = function(entityTypeCode, displayName, entityID)
{
    try
    {
        if(isOutlookHostedWindow())
        {
            var $v_2 = getOutlookHostedWindow();
            $v_2.notifyItemChanged(entityTypeCode, entityID)
        }
        var $v_0, $v_1;
        if(!IsNull(window.top.opener))
        {
            $v_1 = !IsNull(Mscrm.PageManager.get_instance()) && !IsNull(Mscrm.PageManager.get_instance().get_parentWindowPageManager()) ? Mscrm.PageManager.get_instance().get_parentWindowPageManager() : null;
            $v_0 = window.top.opener
        }
        else
        {
            $v_1 = !IsNull(Mscrm.PageManager.get_instance()) && !IsNull(Mscrm.PageManager.get_instance().$i_2) ? Mscrm.PageManager.get_instance().$i_2 : null;
            $v_0 = window.parent
        }
        $v_0.gridrefreshsource = "child";
        if(!IsNull($v_1))
        {
            var $v_3 = {};
            $v_3["etc"] = entityTypeCode;
            $v_3["async"] = true;
            $v_1.raiseEvent(50, $v_3)
        }
        else $v_0.auto(entityTypeCode, displayName, entityID)
    }
    catch($$e_7)
    {}
};
Mscrm.Utilities.refreshParentLookup = function(entityRecord)
{
    var $v_0 = null,
        $v_1 = Mscrm.CrmUri.create(window.location.search),
        $v_2 = $v_1.get_query()["parentLookupControlId"];
    if(IsNull($v_2))
    {
        var $v_3 = $v_1.get_query()["extraqs"];
        if(!IsNull($v_3))
        {
            var $v_4 = $v_3.toString();
            $v_4 = CrmEncodeDecode.CrmUrlDecode($v_4);
            $v_2 = Mscrm.CrmUri.create($v_4).get_query()["parentLookupControlId"];
            if(!IsNull($v_2)) $v_0 = $v_2.toString()
        }
    }
    else $v_0 = $v_2.toString();
    if($v_0)
    {
        var $v_5 = window.top.opener.updateParentLookupExtension;
        if(!IsNull($v_5))
            if(entityRecord)
            {
                var $v_6 = entityRecord;
                window.top.opener.updateParentLookupExtension($v_6["Id"], $v_6["TypeCode"], CrmEncodeDecode.CrmHtmlDecode($v_6["Name"]), $v_6["TypeName"], $v_0)
            }
    }
};
Mscrm.Utilities.closeCurrentWindow = function()
{
    if(!IsNull(Mscrm.PageManager.get_instance()))
    {
        var $v_0 = Mscrm.NavigationMode.DefaultNavigationMode === 1 ? 18 : 23;
        Mscrm.PageManager.get_instance().raiseEvent($v_0, null)
    }
    else closeWindow()
};
Mscrm.Utilities.raiseKeyPressEvent = function(eventCode, keyPressEventTarget)
{
    if(!IsNull(Mscrm.PageManager.get_instance()))
    {
        var $v_0 = {};
        $v_0["EventElement"] = keyPressEventTarget;
        Mscrm.PageManager.get_instance().raiseEvent(eventCode, $v_0)
    }
};
Mscrm.Utilities.isHomepageUrl = function(uri)
{
    var $v_0 = false,
        $v_1 = uri.get_path().toUpperCase();
    if($v_1.endsWith("/HOMEPAGE.ASPX") || $v_1.endsWith("/HOME_APPTBOOK.ASPX") || $v_1.endsWith("/HOME_RESOURCE.ASPX") || $v_1.endsWith("/HOME_SITE.ASPX") || $v_1.endsWith("/HOME_CAMPS.ASPX") || $v_1.endsWith("/HOME_TERRITORY.ASPX") || $v_1.endsWith("/HOME_USER.ASPX") || $v_1.endsWith("/HOME_TEAM.ASPX") || $v_1.endsWith("/HOME_ROLE.ASPX") || $v_1.endsWith("/HOME_DUPLICATEDETECTIONJOBS.ASPX") || $v_1.endsWith("/HOME.ASPX") || $v_1.endsWith("/HOME_PRODUCT.ASPX") || $v_1.endsWith("/HOME_ACTIVITIES.ASPX") || $v_1.endsWith("/HOME_IMPORT.ASPX") || $v_1.endsWith("/HOME_ANSWERS.ASPX") || $v_1.endsWith("/HOME_SOLUTION.ASPX") || $v_1.endsWith("/HOME_DASHBOARDS.ASPX")) $v_0 = true;
    return $v_0
};
Mscrm.Utilities.setElementSize = function(domElement, sizeMode, desiredHeight, desiredWidth)
{
    switch(sizeMode)
    {
        case "StretchToFit":
            var $v_0 = domElement.parentNode;
            domElement.style.height = "0px";
            domElement.style.width = "0px";
            while(!IsNull($v_0))
            {
                if($v_0.tagName.toUpperCase() === "TD")
                {
                    $v_0.style.width = "auto";
                    $v_0.style.height = "auto";
                    break
                }
                $v_0 = $v_0.parentNode
            }
            domElement.style.height = $v_0.offsetHeight + "px";
            domElement.style.width = $v_0.offsetWidth + "px";
            break;
        case "StretchMaintainAspectRatio":
            Mscrm.Utilities.setSizeMaintainRatio(domElement);
            break;
        case "Specific":
            domElement.style.height = desiredHeight + "px";
            domElement.style.width = desiredWidth + "px";
            break
    }
    domElement.style.visibility = "visible"
};
Mscrm.Utilities.setSizeMaintainRatio = function(domElement)
{
    var $v_0 = domElement.clientHeight,
        $v_1 = domElement.clientWidth;
    domElement.style.width = "0px";
    domElement.style.height = "0px";
    var $v_2 = domElement.parentNode,
        $v_3 = $v_2.offsetWidth,
        $v_4 = $v_2.offsetHeight;
    if(!$v_3 || !$v_4)
    {
        var $v_7 = $v_2.parentNode;
        if($v_7.tagName.toUpperCase() === "TD")
        {
            $v_7.style.height = "auto";
            $v_7.style.width = "auto"
        }
        $v_3 = $v_7.offsetWidth;
        $v_4 = $v_7.offsetHeight;
        if(!$v_3 || !$v_4) return
    }
    var $v_5 = $v_0 / $v_4,
        $v_6 = $v_1 / $v_3;
    if($v_5 > $v_6)
    {
        domElement.style.height = $v_4.toString() + "px";
        domElement.style.width = ($v_1 / $v_5).toString() + "px"
    }
    else
    {
        domElement.style.width = $v_3.toString() + "px";
        domElement.style.height = ($v_0 / $v_6).toString() + "px"
    }
};
Mscrm.Utilities.processImageWebResource = function(element)
{
    var $v_0 = element,
        $v_1 = $v_0.attributes.getNamedItem("resizeMode").value,
        $v_2 = "",
        $v_3 = "";
    if($v_1 === "Specific")
    {
        $v_2 = $v_0.attributes.getNamedItem("desiredHeight").value;
        $v_3 = $v_0.attributes.getNamedItem("desiredWidth").value
    }
    Mscrm.Utilities.setElementSize($v_0, $v_1, $v_2, $v_3);
    Mscrm.Utilities.$AQ($v_0);
    Mscrm.Utilities.$AX($v_0)
};
Mscrm.Utilities.$AQ = function($p0)
{
    var $v_0 = $p0.attributes.getNamedItem("horizontalAlignment").value;
    $p0.parentNode.parentNode.style.textAlign = $v_0
};
Mscrm.Utilities.$AX = function($p0)
{
    var $v_0 = $p0.attributes.getNamedItem("verticalAlignment").value;
    if($v_0 === "Bottom" || $v_0 === "Middle") $p0.parentNode.parentNode.style.verticalAlign = $v_0
};
Mscrm.Utilities.sendSelectedRecordsUrl = function(useEmail, records, entityTypeCode, writeUrlOnly)
{
    if(!useEmail && !Mscrm.Utilities.get_ieBrowserVersion())
    {
        alert(window.LOCID_UNSUPPORTED_RIBBONACTION);
        return
    }
    if(IsNull(records) || !records.length)
    {
        alert(window.LOCID_ACTION_NOITEMSELECTED);
        return
    }
    if(records.length > 10)
    {
        alert(window.LOCID_MAX_RECORDS_ERROR);
        return
    }
    var $v_0 = window.location.href;
    if(IsNull(writeUrlOnly)) writeUrlOnly = !useEmail && records.length === 1;
    var $v_1 = new Sys.StringBuilder,
        $v_2 = Mscrm.CrmUri.create(window.location.href),
        $v_3 = $v_2.get_query()["oId"],
        $v_4 = false,
        $v_5 = false;
    if(!IsNull($v_3) && entityTypeCode === 4003 && $v_3.toString() === "HolidaySchedule") $v_4 = true;
    else if(entityTypeCode === 4003) $v_5 = true;
    if(!Mscrm.SessionInfo.isOnline()) $v_0 = window.WEB_APP_URL;
    else if($v_4 || $v_5) $v_0 = $v_0.substring(0, $v_0.indexOf("_root"));
    else $v_0 = $v_0.substring(0, $v_0.indexOf(window.location.pathname));
    if($v_4)
    {
        $v_1 = Mscrm.Utilities.$9I(records, $v_0, writeUrlOnly);
        Mscrm.Utilities.$5y(useEmail, records, $v_1);
        return
    }
    else if($v_5)
    {
        $v_1 = Mscrm.Utilities.$9H(records, $v_0, writeUrlOnly);
        Mscrm.Utilities.$5y(useEmail, records, $v_1);
        return
    }
    else
        for(var $v_6 = 0; $v_6 < records.length; $v_6++)
        {
            var $v_7 = records[$v_6],
                $v_8 = null;
            if($v_7.TypeCode)
            {
                var $v_A = Mscrm.WindowInformation.getWindowInformation($v_7.TypeCode);
                $v_8 = IsNull($v_A) ? null : $v_A.Url
            }
            else $v_8 = Mscrm.CrmUri.create(IsNull($v_7.Action) ? "" : $v_7.Action);
            $v_8 = Mscrm.Utilities.getPageUrl($v_8, "entityrecord");
            if(IsNull($v_8)) continue;
            $v_1 = Mscrm.Utilities.$5X($v_1, $v_7.Name, writeUrlOnly, $v_6);
            switch($v_7.TypeCode)
            {
                case 4230:
                    var $v_9 = GetQueryData($v_7.TypeCode, $v_7.Id);
                    if(!IsNull($v_9)) $v_8.get_query()["etn"] = $v_9.ReturnType;
                    $v_8.get_query()["QueryId"] = $v_7.Id;
                    $v_8.get_query()["ViewType"] = $v_7.TypeCode;
                    $v_8.get_query()["AutoRun"] = "true";
                    break;
                default:
                    if(!isNullOrEmptyString($v_7.Id))
                    {
                        $v_8.get_query()["id"] = $v_7.Id;
                        if(Mscrm.EtcUtil.isUserDefinedEntityObjectTypeCode($v_7.TypeCode)) $v_8.get_query()["etc"] = $v_7.TypeCode
                    }
                    break
            }
            $v_1.append(Mscrm.Help.concatenateUrl($v_0, $v_8.toString()));
            $v_1 = Mscrm.Utilities.$5V($v_1, writeUrlOnly)
        }
    Mscrm.Utilities.$5y(useEmail, records, $v_1)
};
Mscrm.Utilities.sendViewUrl = function(useEmail, viewUri, viewTitle, viewId, viewTypeCode)
{
    var $v_0 = [],
        $v_1 = [];
    Array.add($v_0, "viewid");
    Array.add($v_1, viewId);
    if(!isNullOrEmptyString(viewTypeCode))
    {
        Array.add($v_0, "viewtype");
        Array.add($v_1, viewTypeCode)
    }
    viewUri = Mscrm.Utilities.getPageUrl(viewUri, "entitylist");
    Mscrm.Utilities.sendCustomViewUrl(useEmail, viewUri, viewTitle, $v_0, $v_1)
};
Mscrm.Utilities.sendCustomViewUrl = function(useEmail, uri, title, paramKey, paramValue)
{
    var $v_0 = new Sys.StringBuilder;
    $v_0.append(title);
    $v_0.append(" <");
    delete uri.get_query().pagemode;
    for(var $v_1 = 0; $v_1 < paramKey.length; $v_1++)
        if(!isNullOrEmptyString(paramKey[$v_1]) && !isNullOrEmptyString(paramValue[$v_1])) uri.get_query()[paramKey[$v_1]] = paramValue[$v_1];
    $v_0.append(uri.toString());
    $v_0.append(">");
    if(useEmail) Mscrm.Shortcuts.openEmailForm("", title, $v_0.toString());
    else Mscrm.Shortcuts.copyTextToClipboard($v_0.toString(), "", window.LOCID_COPY_SHORTCUT_ERROR)
};
Mscrm.Utilities.get_isStandardsMode = function()
{
    if(IsNull(Mscrm.Utilities.$3s)) Mscrm.Utilities.$3s = document.compatMode !== "BackCompat";
    return Mscrm.Utilities.$3s
};
Mscrm.Utilities.get_ieBrowserVersion = function()
{
    if(Sys.Browser.agent !== Sys.Browser.InternetExplorer) return 0;
    if(!Mscrm.Utilities.$1T)
    {
        Mscrm.Utilities.$1T = 7;
        if(Sys.Browser.version >= 8)
        {
            Mscrm.Utilities.$1T = Sys.Browser.version;
            return Mscrm.Utilities.$1T
        }
        var $v_0 = window.navigator.userAgent,
            $v_1 = new RegExp("Trident\\/([0-9]{1,}[\\.0-9]{0,})");
        if($v_1.test($v_0))
        {
            var $v_2 = $v_1.exec($v_0),
                $v_3 = $v_2.length >= 2 ? Number.parseInvariant($v_2[1]) : 3;
            Mscrm.Utilities.$1T = $v_3 >= 4 ? $v_3 + 4 : 7
        }
        else Mscrm.Utilities.$1T = Sys.Browser.version
    }
    return Mscrm.Utilities.$1T
};
Mscrm.Utilities.get_ieBrowserCompatibilityMode = function()
{
    if(Sys.Browser.agent !== Sys.Browser.InternetExplorer) return 0;
    var $v_0 = document.documentMode;
    if(!IsNull($v_0)) return $v_0;
    var $v_1 = document.compatMode;
    if($v_1 === "CSS1Compat") return 7;
    return 0
};
Mscrm.Utilities.get_isIEBrowserInOlderCompatibilityMode = function()
{
    var $v_0 = Mscrm.Utilities.get_ieBrowserVersion();
    if($v_0 > 0)
    {
        var $v_1 = Mscrm.Utilities.get_ieBrowserCompatibilityMode();
        if($v_1 > 0) return $v_1 !== $v_0
    }
    return false
};
Mscrm.Utilities.get_isLeftToRight = function()
{
    if(IsNull(Mscrm.Utilities.$3o)) Mscrm.Utilities.$3o = window.LOCID_UI_DIR !== "RTL";
    return Mscrm.Utilities.$3o
};
Mscrm.Utilities.parseInt = function(s, defaultValue)
{
    var $v_0 = parseInt(s, 10);
    return isNaN($v_0) ? IsNull(defaultValue) ? 0 : defaultValue : $v_0
};
Mscrm.Utilities.parseBoolean = function(value)
{
    return !isNullOrEmptyString(value) && !(value.toString().toLowerCase() === "false") && !(value.toString() === "0")
};
Mscrm.Utilities.setInnerHeight = function(e, height)
{
    e.style.height = (Mscrm.Utilities.get_isStandardsMode() ? height : height + Mscrm.Utilities.getVerticalBoxPadding(e)) + "px"
};
Mscrm.Utilities.getNonHiddenInnerText = function(e)
{
    var $v_0 = "",
        $v_1 = false;
    if(IsNull(e)) return $v_0;
    if(e.children.length === 2)
    {
        var $v_2 = function($p1_0)
        {
            if($p1_0.tagName !== "LABEL" && $p1_0.tagName !== "SPAN")
            {
                $v_1 = false;
                return true
            }
            if($p1_0.className !== "ms-crm-Hidden-NoBehavior") $v_0 += XUI.Html.GetText($p1_0);
            else $v_1 = true;
            return false
        };
        XUI.Html.DomUtils.ForEachChild(e, $v_2)
    }
    if(!$v_1) $v_0 = XUI.Html.GetText(e);
    return $v_0
};
Mscrm.Utilities.setNonHiddenLabelValue = function(label, value)
{
    for(var $v_0 = null, $v_2 = 0; $v_2 < label.children.length; $v_2++)
        if(label.children[$v_2].tagName === "LABEL" && label.children[$v_2].className !== "ms-crm-Hidden-NoBehavior")
        {
            $v_0 = label.children[$v_2];
            break
        }
    if(IsNull($v_0))
    {
        XUI.Html.SetText(label, value);
        return
    }
    for(var $v_1 = null, $v_3 = 0; $v_3 < $v_0.childNodes.length; $v_3++)
        if($v_0.childNodes[$v_3].nodeType === 3)
        {
            $v_1 = $v_0.childNodes[$v_3];
            break
        }
    if(IsNull($v_1))
    {
        XUI.Html.SetText(label, value);
        return
    }
    $v_1.nodeValue = value
};
Mscrm.Utilities.setOuterHeight = function(e, height)
{
    e.style.height = (Mscrm.Utilities.get_isStandardsMode() ? height - Mscrm.Utilities.getVerticalBoxPadding(e) : height) + "px"
};
Mscrm.Utilities.setInnerWidth = function(e, width)
{
    e.style.width = (Mscrm.Utilities.get_isStandardsMode() ? width : width + Mscrm.Utilities.getHorizontalBoxPadding(e)) + "px"
};
Mscrm.Utilities.setOuterWidth = function(e, width)
{
    e.style.width = (Mscrm.Utilities.get_isStandardsMode() ? width - Mscrm.Utilities.getHorizontalBoxPadding(e) : width) + "px"
};
Mscrm.Utilities.getVerticalBoxPadding = function(e)
{
    var $v_0 = XUI.Html.GetComputedStyle(e, "borderTopWidth"),
        $v_1 = XUI.Html.GetComputedStyle(e, "borderBottomWidth"),
        $v_2 = XUI.Html.GetComputedStyle(e, "paddingTop"),
        $v_3 = XUI.Html.GetComputedStyle(e, "paddingBottom");
    return Mscrm.Utilities.parseInt($v_0) + Mscrm.Utilities.parseInt($v_1) + Mscrm.Utilities.parseInt($v_2) + Mscrm.Utilities.parseInt($v_3)
};
Mscrm.Utilities.getHorizontalBoxPadding = function(e)
{
    var $v_0 = XUI.Html.GetComputedStyle(e, "borderLeftWidth"),
        $v_1 = XUI.Html.GetComputedStyle(e, "borderRightWidth"),
        $v_2 = XUI.Html.GetComputedStyle(e, "paddingLeft"),
        $v_3 = XUI.Html.GetComputedStyle(e, "paddingRight");
    return Mscrm.Utilities.parseInt($v_0) + Mscrm.Utilities.parseInt($v_1) + Mscrm.Utilities.parseInt($v_2) + Mscrm.Utilities.parseInt($v_3)
};
Mscrm.Utilities.handleHttpErr = function(httpStatusCode)
{
    if(httpStatusCode !== 200)
    {
        var $v_0 = Mscrm.ErrorInformation.createErrorInfo(httpStatusCode.toString(), "", "");
        openErrorDlg(httpStatusCode.toString(), "", $v_0, 0, 0);
        return false
    }
    return true
};
Mscrm.Utilities.safeHttpSend = function(httpRequest, xmlDoc)
{
    var $v_0 = true;
    try
    {
        httpRequest.send(XUI.Xml.XMLSerializer.serializeToString(xmlDoc))
    }
    catch($$e_3)
    {
        $v_0 = Mscrm.Utilities.handleHttpErr(httpRequest.status)
    }
    if($v_0) $v_0 = Mscrm.Utilities.handleHttpErr(httpRequest.status);
    return $v_0
};
Mscrm.Utilities.getChildElementsByClassName = function(parent, className, onlyGetFirst)
{
    if(!IsNull(parent.getElementsByClassName))
    {
        var $v_0 = parent.getElementsByClassName(className);
        if(onlyGetFirst)
        {
            if(IsNull($v_0) || $v_0.length <= 1) return $v_0;
            var $v_1 = [];
            $v_1[0] = $v_0[0];
            return $v_1
        }
        return $v_0
    }
    if(!IsNull(parent.querySelectorAll))
    {
        if(onlyGetFirst)
        {
            var $v_2 = parent.querySelector("." + className),
                $v_3 = [];
            if(!IsNull($v_2)) $v_3[0] = $v_2;
            return $v_3
        }
        return parent.querySelectorAll("." + className)
    }
    else return Mscrm.Utilities.getChildElementsByClassNameRecursive(parent, className, onlyGetFirst)
};
Mscrm.Utilities.validateVersion = function(version)
{
    var $v_0 = version,
        $v_1 = new RegExp("^[0-9]+$"),
        $v_2 = $v_1.test(version);
    if(!$v_2)
    {
        $v_1 = new RegExp("^[0-9]+([.][0-9]+){1,3}$");
        $v_2 = $v_1.test(version);
        if(!$v_2)
        {
            alert(window.LOCID_INVALID_VERSION_FORMAT);
            $v_0 = ""
        }
    }
    else $v_0 = $v_0 + ".0.0.0";
    return $v_0
};
Mscrm.Utilities.getChildElementsByClassNameRecursive = function(parent, className, onlyGetFirst)
{
    var $v_0 = [],
        $v_1 = 0,
        $v_2 = function($p1_0)
        {
            if(!IsNull($p1_0.className) && $p1_0.className.indexOf(className) >= 0)
            {
                $v_0[$v_1++] = $p1_0;
                if(onlyGetFirst) return true
            }
            $v_0 = $v_0.concat(Mscrm.Utilities.getChildElementsByClassNameRecursive($p1_0, className, onlyGetFirst));
            if($v_0.length > 0 && onlyGetFirst) return true;
            return false
        };
    XUI.Html.DomUtils.ForEachChild(parent, $v_2);
    return $v_0
};
Mscrm.Utilities.trim = function(s, extraChars)
{
    return Mscrm.Utilities.trimChars(s, extraChars, true, true)
};
Mscrm.Utilities.trimStart = function(s, extraChars)
{
    return Mscrm.Utilities.trimChars(s, extraChars, true, false)
};
Mscrm.Utilities.trimEnd = function(s, extraChars)
{
    return Mscrm.Utilities.trimChars(s, extraChars, false, true)
};
Mscrm.Utilities.trimChars = function(s, extraChars, begin, end)
{
    var $v_0 = "\\u0085|\\u00A0|\\u2028|\\u2029|\\u1680|\\u180E|\\u2000|\\u2001|\\u2002|\\u2003|\\u2004|\\u2005|\\u2006|\\u2007|\\u2008|\\u2009|\\u200A|\\u202F|\\u205F|\\u3000";
    if(!IsNull(extraChars))
        for(var $v_2 = 0; $v_2 < extraChars.length; $v_2++)
        {
            $v_0 += "|\\u";
            var $v_3 = extraChars[$v_2].charCodeAt(0);
            if($v_3 < 256) $v_0 += "00";
            else if($v_3 < 4096) $v_0 += "0";
            $v_0 += $v_3.toString(16)
        }
    var $v_1 = null;
    if(begin && end)
    {
        s = s.trim();
        $v_1 = "^(" + $v_0 + ")+|(" + $v_0 + ")+$"
    }
    else if(begin)
    {
        s = s.trimStart();
        $v_1 = "^(" + $v_0 + ")+"
    }
    else if(end)
    {
        s = s.trimEnd();
        $v_1 = "(" + $v_0 + ")+$"
    }
    if(!IsNull($v_1))
    {
        var $v_4 = new RegExp($v_1, "g");
        s = s.replace($v_4, "")
    }
    return s
};
Mscrm.Utilities.stringInjector = function(original, find, addToStart, addToEnd)
{
    if(find && find.length > 0)
    {
        var $v_0 = original.indexOf(find);
        if($v_0 > -1) original = original.substring(0, $v_0) + addToStart + find + addToEnd + original.substr($v_0 + find.length)
    }
    return original
};
Mscrm.Utilities.click = function(domElement)
{
    try
    {
        domElement.click()
    }
    catch($$e_1)
    {
        XUI.Html.DispatchDomEvent(domElement, XUI.Html.CreateDomEvent("click"))
    }
};
Mscrm.Utilities.trimSpaces = function(s)
{
    if(!IsNull(s))
    {
        s = Mscrm.Utilities.trim(s, null);
        return s.replace(new RegExp("\\s+", "g"), " ")
    }
    return null
};
Mscrm.Utilities.isUserUsingBaseLanguage = function()
{
    if(window.ORG_LANGUAGE_CODE === window.USER_LANGUAGE_CODE) return true;
    else return false
};
Mscrm.Utilities.isIE7 = function()
{
    return Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version === 7 && !window.document.documentMode
};
Mscrm.Utilities.isIE8 = function()
{
    return Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version === 8
};
Mscrm.Utilities.isIE8OrLower = function()
{
    return Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version <= 8
};
Mscrm.Utilities.isIE9 = function()
{
    return Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version === 9
};
Mscrm.Utilities.isIE10 = function()
{
    return Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version === 10
};
Mscrm.Utilities.isIE9OrHigher = function()
{
    return Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version >= 9
};
Mscrm.Utilities.isIE10OrHigher = function()
{
    return Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version >= 10
};
Mscrm.Utilities.isIE7OrIE7CompactMode = function()
{
    return window.navigator.userAgent.indexOf("MSIE 7") > -1
};
Mscrm.Utilities.isIE11StandardOrIE11CompatibleMode = function()
{
    return window.navigator.userAgent.indexOf("rv:11.0") > -1 || window.navigator.userAgent.indexOf("MSIE") > -1 && window.navigator.userAgent.indexOf("Trident/7.0") > -1
};
Mscrm.Utilities.safeDispose = function(disposable)
{
    if(IsNull(disposable)) return;
    disposable.dispose()
};
Mscrm.Utilities.destroyObject = function(value)
{
    for(var prop in value)
    {
        if(prop === "_disposed" || prop === "get_isDisposed" || prop === "dispose") continue;
        try
        {
            value[prop] = null
        }
        catch(e)
        {}
    }
};
Mscrm.Utilities.isChrome = function()
{
    if(navigator.userAgent.toLowerCase().indexOf("chrome") > -1) return true;
    else return false
};
Mscrm.Utilities.isIPad = function()
{
    if(window.navigator.userAgent.indexOf("iPad") > -1) return true;
    else return false
};
Mscrm.Utilities.destroyElement = function(element)
{
    if(IsNull(element)) return;
    Sys.Application.disposeElement(element);
    Mscrm.Utilities.clearAllHandlersInSubtree(element);
    if(window.jQuery) $P_CRM(element).remove();
    else
    {
        if(IsNull(Mscrm.Utilities.$1k))
        {
            Mscrm.Utilities.$1k = document.createElement("DIV");
            Mscrm.Utilities.$1k.id = "__trash";
            Mscrm.Utilities.$1k.style.display = "none";
            document.body.appendChild(Mscrm.Utilities.$1k)
        }
        Mscrm.Utilities.$1k.appendChild(element);
        Mscrm.Utilities.$1k.innerHTML = ""
    }
};
Mscrm.Utilities.clearAllHandlersInSubtree = function(node)
{
    $clearHandlers(node);
    for(var $v_0 = node.getElementsByTagName("*"), $v_1 = 0, $v_2 = $v_0.length; $v_1 < $v_2; $v_1++) $clearHandlers($v_0[$v_1])
};
Mscrm.Utilities.clearDisposedComponentsFromSysApplication = function()
{
    for(var $v_0 = Sys.Application._createdComponents, $v_1 = 0; $v_1 < $v_0.length; $v_1++)
        if(!IsNull($v_0[$v_1]) && $v_0[$v_1]._disposed) $v_0[$v_1] = null
};
Mscrm.Utilities.glowBackground = function(on, element, cssForOn, cssForOff)
{
    if(!IsNull(element))
        if(on) element.className = cssForOn;
        else element.className = cssForOff
};
Mscrm.Utilities.renderButtonForAccessibilityChecker = function() {};
Mscrm.Utilities.isDescendant = function(parent, child)
{
    var $v_0 = child.id;
    child.id = Math.random().toString();
    var $v_1 = !IsNull($get(child.id, parent));
    child.id = $v_0;
    return $v_1
};
Mscrm.Utilities.getContentUrl = function(component)
{
    var $v_0;
    if(IsNull(component) || IsNull(component.get_rootManager) || IsNull(component.get_rootManager()))
    {
        var $v_1 = $find("crmContentPanel");
        if(!IsNull($v_1)) $v_0 = $v_1.get_contentUrl();
        else $v_0 = Mscrm.CrmUri.create(window.location.href)
    }
    else
    {
        var $v_2 = component.get_rootManager();
        $v_0 = Mscrm.CrmUri.create($v_2.get_contentUrl())
    }
    return $v_0
};
Mscrm.Utilities.isJsonResponseSupported = function(uri)
{
    return false
};
Mscrm.Utilities.enableDisableDomElement = function(targetElement, disable)
{
    var $v_0 = targetElement.tagName.toUpperCase();
    if($v_0 === "INPUT" || $v_0 === "BUTTON" || $v_0 === "SELECT" || $v_0 === "TEXTAREA")
        if(disable)
        {
            targetElement.setAttribute("disabled", "true");
            return
        }
        else
        {
            targetElement.removeAttribute("disabled");
            return
        }
    var $v_1 = $get(targetElement.id + "_greyDiv");
    if(disable)
    {
        if(!IsNull($v_1)) return;
        var $v_3 = XUI.Html.GetComputedStyle(targetElement, "position").toUpperCase();
        if(!($v_3 === "ABSOLUTE" || $v_3 === "FIXED" || $v_3 === "RELATIVE")) targetElement.style.position = "relative";
        $v_1 = document.createElement("div");
        targetElement.appendChild($v_1);
        $v_1.id = targetElement.id + "_greyDiv";
        $v_1.className = "ms-crm-greyDiv";
        XUI.Html.SetOpacity($v_1, .35)
    }
    else
    {
        if(IsNull($v_1)) return;
        $v_1.parentNode.removeChild($v_1)
    }
    for(var $v_2 = targetElement.getElementsByTagName("*"), $v_4 = 0, $v_5 = $v_2.length; $v_4 < $v_5; $v_4++)
    {
        var $v_6 = $v_2[$v_4];
        Mscrm.Utilities.$7b($v_6, disable)
    }
    Mscrm.Utilities.$7b(targetElement, disable)
};
Mscrm.Utilities.$7b = function($p0, $p1)
{
    if($p1)
        if(!IsNull($p0.getAttribute("tabIndex")))
        {
            $p0.setAttribute("oldTabIndex", $p0.tabIndex);
            $p0.tabIndex = -1
        }
        else switch($p0.tagName.toUpperCase())
        {
            case "INPUT":
            case "A":
            case "AREA":
            case "TEXTAREA":
            case "SELECT":
            case "BUTTON":
                $p0.setAttribute("oldTabIndex", "");
                $p0.tabIndex = -1;
                break
        }
        else if(!IsNull($p0.getAttribute("oldTabIndex")))
    {
        if(isNullOrEmptyString($p0.getAttribute("oldTabIndex").toString())) $p0.removeAttribute("tabIndex");
        else $p0.tabIndex = $p0.getAttribute("oldTabIndex");
        $p0.removeAttribute("oldTabIndex")
    }
};
Mscrm.Utilities.addOption = function(option, selectControl, index)
{
    try
    {
        selectControl.add(option, selectControl.options[index])
    }
    catch($$e_3)
    {
        selectControl.add(option, index)
    }
};
Mscrm.Utilities.setResponseTypeToMSXml = function(request)
{
    if((Mscrm.Utilities.isIE() || window.IS_OUTLOOK_CLIENT) && typeof request.responseType === "string") request.responseType = "msxml-document"
};
Mscrm.Utilities.showInlineMenu = function(displayRecords, parameters)
{
    var $v_0 = parameters["inlineMenu"];
    if(IsNull($v_0)) $v_0 = Mscrm.Menu.createMenu();
    $v_0.set_stylePrefix("IL");
    $v_0.$p_2 = false;
    if(!IsNull(parameters["inlineMenuId"])) $v_0.$2Q_2 = parameters["inlineMenuId"];
    !IsNull(parameters["stylePrefix"]) && $v_0.set_stylePrefix(parameters["stylePrefix"]);
    $v_0.$M_2 = parameters["top"];
    $v_0.$R_2 = parameters["left"];
    $v_0.$C_2 = parameters["width"];
    if(!IsNull(parameters["height"])) $v_0.$A_2 = parameters["height"];
    if(!IsNull(parameters["maxHeight"])) $v_0.$X_2 = parameters["maxHeight"];
    if(!IsNull(parameters["inlineMenuHeaderDOM"])) $v_0.$J_2 = parameters["inlineMenuHeaderDOM"];
    if(!IsNull(parameters["inlineMenuFooterDOM"])) $v_0.$I_2 = parameters["inlineMenuFooterDOM"];
    !IsNull(parameters["focusElementOnShow"]) && $v_0.set_focusElementOnShow(parameters["focusElementOnShow"]);
    if(!IsNull(parameters["focusElementOnHide"])) $v_0.$l_2 = parameters["focusElementOnHide"];
    if(!IsNull(displayRecords))
    {
        if(displayRecords.length > 0)
            for(var $v_1 = 0; $v_1 < displayRecords.length; $v_1++)
            {
                var $v_2 = displayRecords[$v_1],
                    $v_3 = Mscrm.Utilities.$9S($v_2),
                    $v_4 = Mscrm.InlineMenuItem.createInlineMenuItem($v_3);
                $v_4.set_iconPath(Mscrm.Utilities.getIconPath($v_2.$3f_0));
                $v_4.set_tooltip($v_3);
                $v_4.$1I_2 = $v_1;
                $v_4.$a_3 = $v_2.$5H_0;
                $v_4.set_actionCallback(parameters["onClickCallback"]);
                $v_4.$a_3.length > 0 && !IsNull(parameters["itemHeight"]) && $v_4.setHeight(parameters["itemHeight"]);
                $v_0.addItem($v_4)
            }
        else if(!displayRecords.length)
        {
            var $v_5 = Mscrm.InlineMenuItem.createInlineMenuItem(LOCID_INLINELOOKUP_NO_RECORDS);
            $v_5.$4w_2 = false;
            $v_5.$2z_3 = true;
            $v_0.addItem($v_5)
        }
        if(!IsNull(parameters["enableShowMore"]) && parameters["enableShowMore"])
        {
            var $v_6 = Mscrm.InlineMenuItem.createInlineMenuItem(LOCID_INLINELOOKUP_SHOWMORE);
            $v_6.$3r_3 = true;
            $v_6.set_actionCallback(parameters["showMoreCallback"]);
            !IsNull(parameters["itemHeight"]) && $v_6.setHeight(parameters["itemHeight"]);
            $v_0.addItem($v_6)
        }
        $v_0.show();
        return $v_0
    }
    return null
};
Mscrm.Utilities.$9S = function($p0)
{
    if($p0.$3f_0 === 1026)
        for(var $v_0 = 0; $v_0 < $p0.$3k_0.length; $v_0++)
        {
            var $v_1 = $p0.$3k_0[$v_0];
            if($v_1.$2p_0 === "productid") return $v_1.$2f_0
        }
    return $p0.$21_0.$2f_0
};
Mscrm.Utilities.selectAddButton = function(entityLogicalName, controlId, createFromId, createFromType, searchText)
{
    var $v_0 = String.format("&parentLookupControlId={0}&_CreateFromId={1}&_CreateFromType={2}&_searchText={3}", CrmEncodeDecode.CrmUrlEncode(controlId), CrmEncodeDecode.CrmUrlEncode(createFromId), CrmEncodeDecode.CrmUrlEncode(createFromType.toString()), CrmEncodeDecode.CrmUrlEncode(searchText.toString())),
        $v_1 = Mscrm.EntityPropUtil.EntityTypeName2CodeMap[entityLogicalName.toLowerCase()];
    openObj($v_1, null, $v_0, null, 0, null)
};
Mscrm.Utilities.selectMenuItemOnNavigation = function(down, searchMenu, searchMenuItemIndex, typeOfMenu)
{
    var $v_0 = {};
    $v_0["itemtitle"] = null;
    $v_0["itemindex"] = searchMenuItemIndex;
    if(!searchMenu.get_isVisible() || searchMenu.get_menuItems().length < 1) return $v_0;
    if(searchMenuItemIndex > -1)
    {
        var $v_1 = searchMenu.get_menuItems()[searchMenuItemIndex];
        !IsNull($v_1) && $v_1.displayRestStyle()
    }
    searchMenuItemIndex = Mscrm.Utilities.getNextIndexOnNavigation(down, searchMenuItemIndex, searchMenu);
    $v_0["itemindex"] = searchMenuItemIndex;
    if(searchMenuItemIndex !== -1)
    {
        var $v_2 = searchMenu.get_menuItems()[searchMenuItemIndex];
        $v_2.displayHoverStyle();
        $v_2.get_itemContents().scrollIntoView(false);
        $v_2.get_itemContents().focus();
        if(typeOfMenu === "InlineLookupmenu" && $v_2.$2z_3) return Mscrm.Utilities.selectMenuItemOnNavigation(down, searchMenu, searchMenuItemIndex, typeOfMenu);
        if(searchMenuItemIndex === searchMenu.get_menuItems().length - 1) return $v_0;
        else
        {
            $v_0["itemtitle"] = $v_2.get_title();
            return $v_0
        }
    }
    return $v_0
};
Mscrm.Utilities.getNextIndexOnNavigation = function(down, searchMenuItemIndex, searchMenu)
{
    var $v_0 = 0;
    if(down)
        if(searchMenuItemIndex === -1 || searchMenuItemIndex === searchMenu.get_menuItems().length - 1) $v_0 = 0;
        else $v_0 = searchMenuItemIndex + 1;
    else if(searchMenuItemIndex === -1 || !searchMenuItemIndex) $v_0 = searchMenu.get_menuItems().length - 1;
    else if(searchMenuItemIndex > 0) $v_0 = searchMenuItemIndex - 1;
    return $v_0
};
Mscrm.Utilities.getILMenuWidth = function(rootElement)
{
    var $v_0 = XUI.Html.DomUtils.GetFirstChild(rootElement);
    return $v_0.scrollWidth
};
Mscrm.Utilities.getILMenuDimension = function(rootElement, isScrollVisible, menuHeight)
{
    var $v_0 = {},
        $v_1 = !rootElement.clientHeight;
    if($v_1)
    {
        $v_0["valid"] = false;
        return $v_0
    }
    var $v_2 = XUI.Html.DomUtils.GetFirstChild(rootElement),
        $v_3 = $P_CRM($v_2),
        $v_4 = $v_3.offset(),
        $v_5 = Mscrm.Utilities.getILMenuWidth(rootElement),
        $v_6 = $v_2.scrollHeight,
        $v_7 = 16,
        $v_8 = 50,
        $v_9 = $v_4.left,
        $v_A = $v_4.top;
    if($v_5 < 300 - $v_8) $v_5 = 300 - $v_8;
    if(Mscrm.Utilities.get_isLeftToRight())
    {
        if($v_9 + $v_5 > $P_CRM(document).width()) $v_9 -= $v_5 - $v_3.width() + 1
    }
    else
    {
        if($v_9 - $v_5 < 0) $v_9 += $v_5 + 1;
        else $v_9 += $v_3.width() - 2;
        if(isScrollVisible) $v_9 -= $v_7 + 1
    }
    if($v_A + $v_6 + menuHeight < $P_CRM(window).height()) $v_A = $v_A + $v_6;
    else $v_A = $v_A - menuHeight;
    $v_0["top"] = $v_A;
    $v_0["left"] = $v_9;
    $v_0["width"] = isScrollVisible ? $v_5 - $v_7 : $v_5;
    $v_0["valid"] = true;
    return $v_0
};
Mscrm.Utilities.partyListXml = function(fieldName, partyItems)
{
    for(var $v_0 = "<" + CrmEncodeDecode.CrmXmlEncode(fieldName) + ">", $v_1 = partyItems.length, $v_2 = 0; $v_2 < $v_1; $v_2++)
    {
        var $v_3 = partyItems[$v_2];
        $v_0 += "<activityparty>";
        if(!IsNull($v_3.id) && $v_3.id.toLowerCase() !== "null" && parseInt($v_3.type, 10) !== 9206 && (IsNull($v_3.category) || $v_3.category !== 3)) $v_0 += '<partyid name="' + CrmEncodeDecode.CrmXmlAttributeEncode($v_3.name) + '" type="' + CrmEncodeDecode.CrmXmlAttributeEncode($v_3.type) + '">' + CrmEncodeDecode.CrmXmlEncode($v_3.id) + "</partyid>";
        else $v_0 += "<addressused>" + CrmEncodeDecode.CrmXmlEncode($v_3.name) + "</addressused>";
        if(!IsNull($v_3.resourceSpecId)) $v_0 += "<resourcespecid>" + CrmEncodeDecode.CrmXmlEncode($v_3.resourceSpecId) + "</resourcespecid>";
        if(!IsNull($v_3.effort)) $v_0 += "<effort>" + CrmEncodeDecode.CrmXmlEncode($v_3.effort) + "</effort>";
        if(!IsNull($v_3.exchangeEntryId)) $v_0 += "<exchangeentryid>" + CrmEncodeDecode.CrmXmlEncode($v_3.exchangeEntryId) + "</exchangeentryid>";
        if(!isNullOrEmptyString($v_3.activityPartyId)) $v_0 += "<activitypartyid>" + CrmEncodeDecode.CrmXmlEncode($v_3.activityPartyId) + "</activitypartyid>";
        $v_0 += "</activityparty>"
    }
    $v_0 += "</" + CrmEncodeDecode.CrmXmlEncode(fieldName) + ">";
    return $v_0
};
Mscrm.Utilities.addControlMarker = function(controlId, category, markerName, value)
{
    if(!window.PerformanceMarkers) window.PerformanceMarkers = {};
    if(!(controlId in window.PerformanceMarkers))
    {
        var $v_0 = {};
        $v_0[markerName] = value;
        $v_0["ControlType"] = category;
        window.PerformanceMarkers[controlId] = $v_0
    }
    else
    {
        var $v_1 = window.PerformanceMarkers[controlId];
        $v_1[markerName] = value
    }
};
Mscrm.Utilities.tryInitOnDemandControl = function(id)
{
    if(Sys.Application.get_isCreatingComponents() || IsNull(window._aControlHeaderList)) return false;
    var $v_0 = window._aControlHeaderList[id];
    if(!IsNull($v_0))
    {
        var $v_1 = $v_0.State;
        if($v_1 === "loadingAsync") $v_0.CancelAsync = true;
        if(isNullOrEmptyString($v_1) || $v_1 === "loadingAsync")
        {
            var $v_2 = $get("controlHeaderContainer");
            Mscrm.InlineContentLoader.loadHeaderJson($v_0, $v_2, false)
        }
    }
    return true
};
Mscrm.Utilities.asyncInitAllControls = function()
{
    if(IsNull(window._aControlHeaderList)) return;
    var container = document.getElementById("controlHeaderContainer"),
        count = 0,
        bucketListIndex = 0,
        bucketList = [];
    bucketList[0] = [];
    for(var controlId in window._aControlHeaderList)
    {
        bucketList[bucketListIndex].push(window._aControlHeaderList[controlId]);
        count++;
        if(count >= 7)
        {
            count = 0;
            bucketListIndex++;
            bucketList[bucketListIndex] = []
        }
    }
    for(var i = 0; i <= bucketListIndex; i++)
    {
        var action = function()
        {
            var k = i;
            return function()
            {
                for(var j = 0; j < bucketList[k].length; j++) Mscrm.InlineContentLoader.loadHeaderJson(bucketList[k][j], container, false)
            }
        }();
        executeFunctionDeferred(action, true, false)
    }
    executeFunctionDeferred(function()
    {
        window._aControlHeaderList = null
    }, false, false)
};
Mscrm.Utilities.syncInitAllControls = function()
{
    if(IsNull(window._aControlHeaderList)) return;
    var container = document.getElementById("controlHeaderContainer");
    for(var controlId in window._aControlHeaderList) Mscrm.InlineContentLoader.loadHeaderJson(window._aControlHeaderList[controlId], container, false);
    window._aControlHeaderList = null
};
Mscrm.Utilities.isRefreshForm = function()
{
    return window._IsRefreshForm === "1" ? true : false
};
Mscrm.Utilities.isMobileRefresh = function()
{
    return window.IsMobileRefresh
};
Mscrm.Utilities.enforceStateTransitions = function()
{
    return window._EnforceStateTransitions === "1" ? true : false
};
Mscrm.Utilities.isDisabled = function(domElement)
{
    var $v_0 = false,
        $v_1 = "disabled";
    if(!IsNull(domElement.attributes.getNamedItem($v_1)))
    {
        var $v_2 = domElement.attributes.getNamedItem($v_1).value;
        if(isNullOrEmptyString($v_2) || Mscrm.Utilities.parseBoolean($v_2)) $v_0 = true
    }
    return $v_0
};
Mscrm.Utilities.flipImage = function(direction)
{
    var $v_0 = "",
        $v_1 = "scaleX(-1);",
        $v_2 = "FlipH();";
    if(direction.toUpperCase() === "H")
    {
        $v_1 = "scaleX(-1);";
        $v_2 = "FlipH();"
    }
    else if(direction.toUpperCase() === "V")
    {
        $v_1 = "scaleY(-1);";
        $v_2 = "FlipV();"
    }
    else if(direction.toUpperCase() === "HV")
    {
        $v_1 = "scale(-1);";
        $v_2 = "FlipH() FlipV();"
    }
    if(Mscrm.Utilities.get_ieBrowserVersion() >= 10) $v_0 += "-ms-transform:" + $v_1;
    else $v_0 += "filter:" + $v_2;
    $v_0 += "-webkit-transform:" + $v_1;
    $v_0 += "-moz-transform:" + $v_1;
    $v_0 += "-o-transform:" + $v_1;
    $v_0 += "transform:" + $v_1;
    return $v_0
};
Mscrm.Utilities.$95 = function()
{
    for(var $v_0 = document.getElementsByTagName("INPUT"), $v_1 = 0; $v_1 < $v_0.length; $v_1++)
        if($v_0[$v_1].getAttribute("type") === "text")
        {
            var $v_2 = $v_0[$v_1];
            if(!IsNull($v_2) && !IsNull($v_2.getAttribute("ValidationFailed"))) return $v_2
        }
    return null
};
Mscrm.Utilities.resetValidationFailedElement = function()
{
    if(Sys.Browser.agent === Sys.Browser.Safari || Mscrm.Utilities.isChrome())
    {
        var $v_0 = Mscrm.Utilities.$95();
        if(!IsNull($v_0))
        {
            $v_0.removeAttribute("ValidationFailed");
            return true
        }
        return false
    }
    return false
};
Mscrm.Utilities.getCookie = function(cookieName)
{
    return Mscrm.InternalUtilities.Utilities.getCookie(cookieName)
};
Mscrm.Utilities.setCookie = function(cookieName, cookieValue, expInMinutes)
{
    if(isNullOrEmptyString(cookieName)) return;
    var $v_0 = "";
    if(!IsNull(expInMinutes))
    {
        var $v_1 = new Date;
        $v_1.setTime($v_1.getTime() + expInMinutes * 60 * 1e3);
        $v_0 = "; expires=" + $v_1.toUTCString()
    }
    document.cookie = cookieName + "=" + CrmEncodeDecode.CrmNameValueEncode(cookieValue) + $v_0 + "; path=/"
};
Mscrm.Utilities.deleteCookie = function(cookieName)
{
    Mscrm.Utilities.setCookie(cookieName, "", -1)
};
Mscrm.Utilities.setDialogHeaderHeight = function(headerContainerId, bodyContainerId, headerTitleId, headerDescriptionId)
{
    if(window.UseTabletExperience && !IsNull($get(headerContainerId)) && !IsNull($get(bodyContainerId)))
    {
        var $v_0 = $get(headerContainerId),
            $v_1 = XUI.Html.GetComputedStyle($v_0, "padding-top"),
            $v_2 = XUI.Html.GetComputedStyle($v_0, "padding-bottom"),
            $v_3 = 5,
            $v_4 = 5;
        if(!IsNull($v_1) && !IsNull($v_2))
        {
            if($v_1.length > 2 && $v_1.endsWith("px")) $v_3 = parseInt($v_1.substr(0, $v_1.length - 2));
            if($v_2.length > 2 && $v_2.endsWith("px")) $v_4 = parseInt($v_2.substr(0, $v_2.length - 2))
        }
        var $v_5 = $v_3 + $v_4,
            $v_6 = $get(headerTitleId),
            $v_7 = $get(headerDescriptionId),
            $v_8 = 51;
        if(!IsNull($v_6) && !IsNull($v_7)) $v_8 = parseInt($v_6.offsetHeight) + parseInt($v_7.offsetHeight);
        var $v_9 = $v_8 + $v_5;
        $v_0.style.height = $v_9.toString() + "px";
        var $v_A = $get(bodyContainerId);
        $v_A.style.top = $v_9.toString() + "px"
    }
};
Mscrm.Utilities.setLookupDialogBodyLayout = function()
{
    var $v_0 = "DlgHdBodyContainer",
        $v_1 = "tblFind",
        $v_2 = "multiLookupControls",
        $v_3 = "tblFindGridContainer",
        $v_4 = "searchArea";
    if(window.UseTabletExperience && !IsNull($get($v_0)) && !IsNull($get($v_1)))
    {
        var $v_5 = $get($v_4),
            $v_6 = 0;
        if(!IsNull($v_5)) $v_6 = $v_5.offsetHeight;
        var $v_7 = 8,
            $v_8 = $get($v_1);
        $v_8.style.top = ($v_6 + $v_7).toString() + "px";
        var $v_9 = $get($v_2),
            $v_A = 20;
        if(!IsNull($v_9)) $v_A = $v_9.offsetHeight;
        var $v_B = $get($v_3),
            $v_C = $get($v_0);
        $v_B.style.height = ($v_C.offsetHeight - $v_6 - $v_7 - $v_A).toString() + "px"
    }
};
Mscrm.Utilities.isJQuerySupported = function()
{
    var $v_0 = false;
    try
    {
        $v_0 = typeof $ === "function"
    }
    catch($$e_1)
    {}
    return $v_0
};
Mscrm.Utilities.replaceWindowHash = function(newHash)
{
    if(!isNullOrEmptyString(newHash))
    {
        if(false === newHash.startsWith("#")) newHash = "#" + newHash;
        var $v_0 = window.top.location.toString(),
            $v_1 = window.top.location.hash;
        if($v_1.length > 0) $v_0 = $v_0.substr(0, $v_0.length - $v_1.length);
        $v_0 += newHash;
        window.top.location.replace($v_0);
        return true
    }
    return false
};
Mscrm.Utilities.getActiveElement = function()
{
    var $v_0 = null;
    try
    {
        $v_0 = document.activeElement
    }
    catch($$e_1)
    {}
    return $v_0
};
Mscrm.Utilities.getAttributeXmlForEntity = function(entityName)
{
    var $v_0 = XUI.Xml.CreateDocument(),
        $v_1 = $v_0.createElement(entityName);
    Xrm.Page.data.entity.attributes.forEach(function($p1_0, $p1_1)
    {
        var $v_2 = $p1_0,
            $v_3 = $v_2.getName(),
            $v_4 = $v_2.getValue(),
            $v_5 = $v_2.getAttributeType();
        if(!IsNull($v_4))
        {
            var $v_6 = null;
            if($v_5 === "lookup")
            {
                $v_6 = $v_0.createElement($v_3 + "s");
                for(var $v_7 = $v_4, $v_8 = 0; $v_8 < $v_7.length; $v_8++)
                {
                    var $v_9 = $v_0.createElement($v_3),
                        $v_A = $v_0.createAttribute("id");
                    $v_A.value = $v_7[$v_8].id;
                    var $v_B = $v_0.createAttribute("name");
                    $v_B.value = $v_7[$v_8].name;
                    var $v_C = $v_0.createAttribute("entityType");
                    $v_C.value = $v_7[$v_8].entityType;
                    $v_9.attributes.setNamedItem($v_A);
                    $v_9.attributes.setNamedItem($v_B);
                    $v_9.attributes.setNamedItem($v_C);
                    $v_6.appendChild($v_9)
                }
            }
            else
            {
                $v_6 = $v_0.createElement($v_3);
                $v_6.appendChild($v_0.createTextNode($v_4.toString()))
            }
            $v_1.appendChild($v_6)
        }
    });
    $v_0.appendChild($v_1);
    return XUI.Xml.XMLSerializer.serializeToString($v_0)
};
Mscrm.Utilities.getActivityId = function(dataXml, entityName)
{
    var $v_0 = "";
    if(!IsNull(dataXml))
    {
        var $v_1 = XUI.Xml.LoadXml(dataXml),
            $v_2 = XUI.Xml.SelectSingleNode($v_1, "/" + entityName + "/activityid", null);
        if(!IsNull($v_2)) $v_0 = XUI.Xml.GetText($v_2)
    }
    return $v_0
};
Mscrm.Utilities.setEntityAttributeValueFromXml = function(dataXml, entityName)
{
    if(!IsNull(dataXml))
    {
        var $v_0 = XUI.Xml.LoadXml(dataXml);
        Xrm.Page.data.entity.attributes.forEach(function($p1_0, $p1_1)
        {
            var $v_1 = $p1_0,
                $v_2 = $v_1.getName(),
                $v_3 = Xrm.Page.data.entity.attributes.get($v_2),
                $v_4 = $v_1.getAttributeType();
            if(IsNull($v_4))
            {
                $v_3.controls.get(0);
                $v_4 = $v_1.getAttributeType()
            }
            var $v_5 = null;
            switch($v_4)
            {
                case "boolean":
                case "integer":
                case "optionset":
                    $v_5 = XUI.Xml.SelectSingleNode($v_0, "/" + entityName + "/" + $v_2, null);
                    if(!IsNull($v_5))
                    {
                        var $v_7 = XUI.Xml.GetText($v_5);
                        $v_3.setValue(parseInt($v_7, 10));
                        $v_3.fireOnChange()
                    }
                    break;
                case "money":
                case "decimal":
                case "double":
                    $v_5 = XUI.Xml.SelectSingleNode($v_0, "/" + entityName + "/" + $v_2, null);
                    if(!IsNull($v_5))
                    {
                        var $v_8 = XUI.Xml.GetText($v_5);
                        $v_3.setValue(parseFloat($v_8));
                        $v_3.fireOnChange()
                    }
                    break;
                case "datetime":
                    $v_5 = XUI.Xml.SelectSingleNode($v_0, "/" + entityName + "/" + $v_2, null);
                    if(!IsNull($v_5))
                    {
                        var $v_9 = XUI.Xml.GetText($v_5),
                            $v_A = Date.parseInvariant($v_9);
                        $v_3.setValue($v_A);
                        $v_3.fireOnChange()
                    }
                    break;
                case "lookup":
                    var $v_6 = XUI.Xml.SelectNodes($v_0, "/" + entityName + "/" + $v_2 + "s/" + $v_2, null);
                    if(!IsNull($v_6))
                    {
                        for(var $v_B = new Array($v_6.length), $v_C = 0; $v_C < $v_6.length; $v_C++)
                        {
                            $v_B[$v_C] = new Xrm.LookupObject;
                            $v_B[$v_C].id = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_6[$v_C], "./@id", null));
                            $v_B[$v_C].name = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_6[$v_C], "./@name", null));
                            $v_B[$v_C].entityType = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_6[$v_C], "./@entityType", null))
                        }
                        try
                        {
                            $v_3.setValue($v_B);
                            $v_3.fireOnChange()
                        }
                        catch($$e_H)
                        {}
                    }
                    break;
                case "string":
                case "memo":
                    $v_5 = XUI.Xml.SelectSingleNode($v_0, "/" + entityName + "/" + $v_2, null);
                    if(!IsNull($v_5))
                    {
                        $v_3.setValue(XUI.Xml.GetText($v_5));
                        $v_3.fireOnChange()
                    }
                    break;
                default:
                    throw Error.create(String.format("attributeType '{0}' is not supported", $v_4))
            }
        })
    }
};
Mscrm.Utilities.isBusinessProcessPresent = function()
{
    if(IsNull(window.IsBusinessProcessPresent)) return false;
    return window.IsBusinessProcessPresent
};
Mscrm.Utilities.$5y = function($p0, $p1, $p2)
{
    if($p0)
    {
        var $v_0 = $p1.length === 1 ? $p1[0].Name : "";
        Mscrm.Shortcuts.openEmailForm("", $v_0, $p2.toString())
    }
    else Mscrm.Shortcuts.copyTextToClipboard($p2.toString(), "", window.LOCID_COPY_SHORTCUT_ERROR)
};
Mscrm.Utilities.$5X = function($p0, $p1, $p2, $p3)
{
    if(!$p2)
    {
        $p3 > 0 && $p0.append("\r\n\r\n");
        $p0.append($p1);
        $p0.append("\r\n");
        $p0.append(window.UseTabletExperience ? "[" : "<")
    }
    return $p0
};
Mscrm.Utilities.$5V = function($p0, $p1)
{
    !$p1 && $p0.append(window.UseTabletExperience ? "]" : ">");
    return $p0
};
Mscrm.Utilities.$9I = function($p0, $p1, $p2)
{
    for(var $v_0 = new Sys.StringBuilder, $v_1 = Mscrm.CrmUri.create($p1 + "Tools/business/home_bc.aspx"), $v_2 = 0; $v_2 < $p0.length; $v_2++)
    {
        var $v_3 = $p0[$v_2];
        $v_0 = Mscrm.Utilities.$5X($v_0, $v_3.Name, $p2, $v_2);
        $v_1.get_query()["cType"] = "hs";
        $v_1.get_query()["calendarId"] = $v_3.Id;
        $v_1.get_query()["oType"] = "8";
        $v_1.get_query()["pagemode"] = "iframe";
        $v_0.append($v_1.toString());
        $v_1.clearQuery();
        $v_0 = Mscrm.Utilities.$5V($v_0, $p2)
    }
    return $v_0
};
Mscrm.Utilities.$9H = function($p0, $p1, $p2)
{
    for(var $v_0 = new Sys.StringBuilder, $v_1 = Mscrm.CrmUri.create($p1 + "sm/workplans/edit.aspx"), $v_2 = 0; $v_2 < $p0.length; $v_2++)
    {
        var $v_3 = $p0[$v_2];
        $v_0 = Mscrm.Utilities.$5X($v_0, $v_3.Name, $p2, $v_2);
        $v_1.get_query()["calendarId"] = $v_3.Id;
        $v_1.get_query()["calendarType"] = "1";
        $v_1.get_query()["mode"] = "edit";
        $v_1.get_query()["oType"] = "8";
        $v_1.get_query()["resourceId"] = Xrm.Page.context.getUserId();
        $v_0.append($v_1.toString());
        $v_1.clearQuery();
        $v_0 = Mscrm.Utilities.$5V($v_0, $p2)
    }
    return $v_0
};
Mscrm.JsonUtilities = function() {};
Mscrm.JsonUtilities.getJsonString = function(responseText)
{
    var $v_0 = responseText;
    if(responseText.substr(0, 9) === "while(1);") $v_0 = responseText.substr(9);
    return $v_0
};
Mscrm.JsonUtilities.tryGetParsedJson = function(jsonString, jsonDictionary)
{
    jsonDictionary.val = null;
    var $v_0 = null;
    try
    {
        jsonDictionary.val = $P_CRM.parseJSON(jsonString)
    }
    catch($v_1)
    {
        $v_0 = new Mscrm.ExceptionInformation;
        $v_0.DisplayText = "Error while parsing Json \n" + $v_1.message;
        $v_0.RedirectToEdit = true
    }
    return $v_0
};
Mscrm.JsonUtilities.tryGetParsedJsonAsArray = function(jsonString, jsonArray)
{
    jsonArray.val = [];
    var $v_0 = null;
    try
    {
        jsonArray.val = $P_CRM.parseJSON(jsonString)
    }
    catch($v_1)
    {
        $v_0 = new Mscrm.ExceptionInformation;
        $v_0.DisplayText = "Error while parsing Json \n" + $v_1.message;
        $v_0.RedirectToEdit = true
    }
    return $v_0
};
Mscrm.JsonUtilities.getAttributeFromErrorJson = function(jsonData, attribute)
{
    var $v_0 = jsonData["_error"];
    if($v_0) return $v_0[attribute];
    else return ""
};

function compareGuids(guidA, guidB)
{
    return Mscrm.Utilities.compareGuids(guidA, guidB)
}

function getHomePageQueryStringParams()
{
    return Mscrm.Utilities.getHomePageQueryStringParams()
}

function getRecordPageQueryStringParams()
{
    return Mscrm.Utilities.getRecordPageQueryStringParams()
}

function getPageUrl(pageUrl, pageType)
{
    return Mscrm.Utilities.getPageUrl(pageUrl, pageType)
}

function getHomePageUrlForRecordPage(homepage, defaultUrl)
{
    return Mscrm.Utilities.getHomePageUrlForRecordPage(homepage, defaultUrl)
}

function isNewPageModel(uri)
{
    return Mscrm.Utilities.isNewPageModel(uri)
}

function isValidForStickyViews(areaId, subAreaId)
{
    return Mscrm.Utilities.isValidForStickyViews(areaId, subAreaId)
}

function isDigit(s)
{
    return Mscrm.Utilities.isDigit(s)
}

function getMainPageManager()
{
    return Mscrm.Utilities.getMainPageManager()
}

function createGuid()
{
    return Mscrm.Utilities.createGuid()
}

function getDomEventElement(e, tagName)
{
    return Mscrm.Utilities.getDomEventElement(e, tagName)
}

function getXYPos(obj, rtl)
{
    return Mscrm.Utilities.getXYPos(obj, rtl)
}

function getIconPath(entityTypeCode)
{
    return Mscrm.Utilities.getIconPath(entityTypeCode)
}

function getGridId($sn_window)
{
    return Mscrm.Utilities.getGridId($sn_window)
}

function getCrmGrid()
{
    return Mscrm.Utilities.getCrmGrid()
}

function getViewURL(entityTypeCode, viewId, qsParam)
{
    return Mscrm.Utilities.getViewURL(entityTypeCode, viewId, qsParam)
}

function refreshParentGrid(entityTypeCode, entityId)
{
    Mscrm.Utilities.refreshParentGrid(entityTypeCode, entityId)
}

function refreshCurrentGrid(entityTypeCode)
{
    Mscrm.Utilities.refreshCurrentGrid(entityTypeCode)
}

function closeCurrentWindow()
{
    Mscrm.Utilities.closeCurrentWindow()
}

function isHomepageUrl(uri)
{
    return Mscrm.Utilities.isHomepageUrl(uri)
}

function setElementSize(domElement, sizeMode, desiredHeight, desiredWidth)
{
    Mscrm.Utilities.setElementSize(domElement, sizeMode, desiredHeight, desiredWidth)
}

function setSizeMaintainRatio(domElement)
{
    Mscrm.Utilities.setSizeMaintainRatio(domElement)
}

function Trim(s)
{
    return Mscrm.Utilities.trim(s, null)
}

function TrimSpaces(s)
{
    return Mscrm.Utilities.trimSpaces(s)
}
Mscrm.RequiredLevelNumber = function() {};
Mscrm.XmlUtil = function() {};
Mscrm.XmlUtil.loadXmlDocument = function(xml)
{
    return XUI.Xml.LoadXml(xml)
};
Mscrm.XmlUtil.loadXmlDocumentAsFreeThreaded = function(xml)
{
    return XUI.Xml.LoadXml(xml)
};
Mscrm.XmlUtil.createXslTemplateByXml = function(xslString)
{
    var $v_0 = new Mscrm.XslTemplate;
    $v_0.stylesheet = XUI.Xml.LoadXml(xslString);
    return $v_0
};
Mscrm.XmlUtil.createXslTemplate = function()
{
    return new Mscrm.XslTemplate
};
Mscrm.XmlUtil.handleXMLErr = function(xml, shouldContinue)
{
    if(IsNull(shouldContinue)) shouldContinue = false;
    if(!IsNull(XUI.Xml.GetParserError(xml)))
    {
        alert(window.LOCID_XML_PROCESS_ERROR);
        return shouldContinue ? 2 : 0
    }
    var $v_0 = XUI.Xml.SelectSingleNode(xml, "/error", XUI.Xml.CreateNSDictionary(xml.documentElement));
    if(!IsNull($v_0))
        if(!shouldContinue)
        {
            var $v_1 = Mscrm.ErrorInformation.createFromDoc(xml),
                $v_2 = null,
                $v_3 = window.closeParent;
            if(!IsNull($v_3) && $v_3) $v_2 = Mscrm.Utilities.createCallbackFunctionObject("doErrorPostProcessing", Mscrm.XmlUtil, null, false);
            openErrorDlg(!IsNull($v_1.$2E_0) ? $v_1.$2E_0 : "", $v_1.$2s_0, $v_1, 0, 0, $v_2);
            return 0
        }
        else return 2;
    return 1
};
Mscrm.XmlUtil.doErrorPostProcessing = function()
{
    var $v_0 = window.closeParent;
    if(!IsNull($v_0)) window.closeParent = false;
    closeWindow()
};
Mscrm.XmlUtil.getNodeText = function(rootNode, nodeName, defaultValue)
{
    var $v_0 = XUI.Xml.SelectSingleNode(rootNode, nodeName, XUI.Xml.CreateNSDictionary(rootNode.ownerDocument.documentElement));
    if(!IsNull($v_0)) return XUI.Xml.GetText($v_0);
    return defaultValue
};
Mscrm.XmlUtil.viewXml = function(xml) {};
Mscrm.XmlUtil.downloadXml = function(xml, fileName)
{
    var $v_0 = Mscrm.CrmUri.create("/tools/_common/xmlviewer.aspx");
    $v_0.get_query()["download"] = "true";
    $v_0.get_query()["fileName"] = fileName;
    var $v_1 = "downloadXmlFrame",
        $v_2 = $get($v_1);
    if(IsNull($v_2))
    {
        $v_2 = document.createElement("iframe");
        $v_2.style.display = "none";
        $v_2.id = $v_1;
        $v_2.setAttribute("name", $v_1);
        $v_2.src = Mscrm.CrmUri.create("/_static/blank.htm").toString();
        window.document.body.appendChild($v_2);
        $v_2.contentWindow.name = $v_1
    }
    var $v_3 = "downloadXmlForm",
        $v_4 = $get($v_3);
    if(IsNull($v_4))
    {
        $v_4 = document.createElement("form");
        $v_4.id = $v_3;
        $v_4.innerHTML = '<input id="xml" name="xml" type="hidden">';
        window.document.body.appendChild($v_4)
    }
    var $v_5 = $get("xml", $v_4);
    $v_5.value = xml;
    $v_4.target = $v_1;
    $v_4.method = "post";
    $v_4.action = $v_0.toString();
    $v_4.submit()
};

function loadXmlDocument(xml)
{
    return Mscrm.XmlUtil.loadXmlDocument(xml)
}

function loadXmlDocumentAsFreeThreaded(xml)
{
    return Mscrm.XmlUtil.loadXmlDocumentAsFreeThreaded(xml)
}

function createXslTemplateByXml(xslString)
{
    return Mscrm.XmlUtil.createXslTemplateByXml(xslString)
}

function CreateXslTemplate()
{
    return Mscrm.XmlUtil.createXslTemplate()
}

function handleXMLErr(xml, shouldContinue)
{
    return Mscrm.XmlUtil.handleXMLErr(xml, shouldContinue)
}

function getNodeText(rootNode, nodeName, defaultValue)
{
    return Mscrm.XmlUtil.getNodeText(rootNode, nodeName, defaultValue)
}

function ViewXml(xml)
{
    Mscrm.XmlUtil.viewXml(xml)
}
Mscrm.XslTemplate = function() {};
Mscrm.XslTemplate.prototype = {
    stylesheet: null,
    createProcessor: function()
    {
        if(window.XSLTProcessor) return new Mscrm.XslProcessor(this.stylesheet);
        else return new Mscrm.InternetExplorerXslProcessor(this.stylesheet)
    }
};
Mscrm.XslProcessor = function($p0)
{
    this._parameters = {};
    this._stylesheet = $p0
};
Mscrm.XslProcessor.prototype = {
    input: null,
    output: null,
    _stylesheet: null,
    addParameter: function(name, value)
    {
        this._parameters[name] = value
    },
    transform: function()
    {
        var $v_0 = new XSLTProcessor;
        $v_0.importStylesheet(this._stylesheet);
        var $$dict_1 = this._parameters;
        for(var $$key_2 in $$dict_1)
        {
            var $v_2 = {
                key: $$key_2,
                value: $$dict_1[$$key_2]
            };
            $v_0.setParameter(null, $v_2.key, $v_2.value)
        }
        var $v_1 = $v_0.transformToFragment(this.input, this.input);
        this.output = XUI.Xml.XMLSerializer.serializeToString($v_1);
        return this.output
    }
};
Mscrm.InternetExplorerXslProcessor = function($p0)
{
    Mscrm.InternetExplorerXslProcessor.initializeBase(this, [$p0]);
    var $v_0 = XUI.Xml.XMLSerializer.serializeToString($p0);
    this._stylesheet = new ActiveXObject("Msxml2.FreeThreadedDOMDocument");
    this._stylesheet.async = false;
    this._stylesheet.resolveExternals = false;
    this._stylesheet.loadXML($v_0)
};
Mscrm.InternetExplorerXslProcessor.prototype = {
    transform: function()
    {
        var $v_0 = new ActiveXObject("Msxml2.XSLTemplate");
        $v_0.stylesheet = this._stylesheet;
        var $v_1 = $v_0.createProcessor();
        $v_1.input = this.input;
        var $$dict_2 = this._parameters;
        for(var $$key_3 in $$dict_2)
        {
            var $v_2 = {
                key: $$key_3,
                value: $$dict_2[$$key_3]
            };
            $v_1.addParameter($v_2.key, $v_2.value)
        }
        $v_1.transform();
        this.output = $v_1.output;
        return this.output
    }
};
Mscrm.MetricsReporting = function()
{
    this.$$d_$6h_0 = Function.createDelegate(this, this.$6h_0);
    this.$1j_0 = [];
    if(!IsNull(window.isMobileClient)) return;
    this.$7s_0();
    var $v_0 = null;
    try
    {
        $v_0 = window.opener
    }
    catch($$e_1)
    {}
    if(IsNull($v_0))
    {
        var $$t_2 = this;
        window.setInterval(function()
        {
            $$t_2.sendMetricsToServer(true)
        }, 9e5)
    }
    Sys.Application.add_unload(this.$$d_$6h_0)
};
Mscrm.MetricsReporting.$$cctor = function()
{
    window.setTimeout(function()
    {
        for(var $v_0 = Mscrm.MetricsReporting.$94(), $v_1 = 0; $v_1 < $v_0.length; $v_1++) Mscrm.MetricsReporting.$7v(true, $v_0[$v_1])
    }, 3e3)
};
Mscrm.MetricsReporting.instance = function()
{
    if(IsNull(Mscrm.MetricsReporting.$z)) Mscrm.MetricsReporting.$z = new Mscrm.MetricsReporting;
    return Mscrm.MetricsReporting.$z
};
Mscrm.MetricsReporting.$7v = function($p0, $p1)
{
    var $v_0 = new XMLHttpRequest,
        $v_1 = Mscrm.CrmUri.create("/AppWebServices/MetricsReportingService.asmx/Report");
    !window.IS_LIVE && !window.IS_SPLA && $v_1.set_useOrganizationName(true);
    $v_0.open("POST", $v_1.toString(), $p0);
    $v_0.setRequestHeader("content-type", "application/json; charset=utf-8");
    $v_0.send($p1)
};
Mscrm.MetricsReporting.$Ai = function($p0)
{
    var $v_0 = Mscrm.MetricsReporting.get_$4Z();
    if($v_0 > 100) return false;
    Mscrm.CrmLocalStorage.setItem("PendingMetricsBlobs.item_" + $v_0.toString(), $p0);
    Mscrm.MetricsReporting.set_$4Z($v_0 + 1);
    return true
};
Mscrm.MetricsReporting.$94 = function()
{
    var $v_0 = [],
        $v_1 = Mscrm.MetricsReporting.get_$4Z();
    if($v_1 > 0)
    {
        for(var $v_2 = 0; $v_2 < $v_1; $v_2++)
        {
            var $v_3 = "PendingMetricsBlobs.item_" + $v_2.toString();
            Array.add($v_0, Mscrm.CrmLocalStorage.getItem($v_3));
            Mscrm.CrmLocalStorage.removeItem($v_3)
        }
        Mscrm.MetricsReporting.set_$4Z(0)
    }
    return $v_0
};
Mscrm.MetricsReporting.get_$4Z = function()
{
    var $v_0 = Mscrm.CrmLocalStorage.getItem("PendingMetricsBlobs.length");
    if(!isNullOrEmptyString($v_0)) return parseInt($v_0);
    return 0
};
Mscrm.MetricsReporting.set_$4Z = function($p0)
{
    Mscrm.CrmLocalStorage.setItem("PendingMetricsBlobs.length", $p0.toString());
    return $p0
};
Mscrm.MetricsReporting.prototype = {
    $7s_0: function()
    {
        this.$1j_0 = []
    },
    addCounterMetric: function(metric, value)
    {
        if(!this.$4N_0()) return null;
        this.$4d_0();
        var $v_0 = this.$7O_0(metric);
        if(!IsNull($v_0.v)) $v_0.v = $v_0.v + value;
        else $v_0.v = value;
        return $v_0
    },
    addMetric: function(metric, value)
    {
        if(!this.$4N_0()) return null;
        this.$4d_0();
        var $v_0 = this.$4O_0(metric);
        $v_0.v = value;
        return $v_0
    },
    createRetroactiveMetric: function(metric, value, utcTime)
    {
        if(!this.$4N_0()) return null;
        this.$4d_0();
        var $v_0 = this.$4O_0(metric);
        $v_0.v = value;
        $v_0.t = utcTime;
        return $v_0
    },
    $7O_0: function($p0, $p1)
    {
        var $v_0 = window.self.masterWindow();
        if($v_0 !== window.self) try
        {
            var $v_1 = $v_0.Mscrm.MetricsReporting.instance();
            return $v_1.$7O_0($p0, this.$3I_0())
        }
        catch($$e_4)
        {}
        for(var $v_2 = 0; $v_2 < this.$1j_0.length; $v_2++)
        {
            var $v_3 = this.$1j_0[$v_2];
            if($v_3.n === $p0 && $v_3.rid === (isNullOrEmptyString($p1) ? this.$3I_0() : $p1)) return $v_3
        }
        return this.$4O_0($p0, $p1)
    },
    $4O_0: function($p0, $p1)
    {
        var $v_0 = window.self.masterWindow();
        if($v_0 !== window.self) try
        {
            var $v_2 = $v_0.Mscrm.MetricsReporting.instance();
            return $v_2.$4O_0($p0, this.$3I_0())
        }
        catch($$e_4)
        {}
        var $v_1 = new Mscrm.MetricObject;
        $v_1.n = $p0;
        $v_1.v = null;
        $v_1.rid = isNullOrEmptyString($p1) ? this.$3I_0() : $p1;
        $v_1.t = (new Date).getTime();
        $v_1.p = {};
        Array.add(this.$1j_0, $v_1);
        return $v_1
    },
    $4d_0: function()
    {
        var $v_0 = window.self.masterWindow();
        if($v_0 !== window.self) try
        {
            var $v_1 = $v_0.Mscrm.MetricsReporting.instance();
            $v_1.$4d_0();
            return
        }
        catch($$e_2)
        {}
        this.$5h_0() >= 150 && this.sendMetricsToServer(true)
    },
    $5h_0: function()
    {
        return this.$1j_0.length
    },
    sendMetricsToServer: function(async)
    {
        if(!this.$4N_0()) return;
        if(!this.$5h_0()) return;
        var $v_0 = this.$7M_0();
        Mscrm.MetricsReporting.$7v(async, $v_0)
    },
    $7M_0: function()
    {
        for(var $v_0 = {}, $v_1 = $v_0["request"] = {}, $v_2 = $v_1["MetricsCollections"] = [], $v_3 = {}, $v_4 = 0; $v_4 < this.$1j_0.length; $v_4++)
        {
            var $v_5 = this.$1j_0[$v_4];
            if(!$v_5.rid) continue;
            if(!$v_3[$v_5.rid]) $v_3[$v_5.rid] = [];
            Array.add($v_3[$v_5.rid], $v_5);
            delete $v_5.rid
        }
        var $$dict_6 = $v_3;
        for(var $$key_7 in $$dict_6)
        {
            var $v_6 = {
                key: $$key_7,
                value: $$dict_6[$$key_7]
            };
            Array.add($v_2,
            {
                RequestId: $v_6.key,
                Metrics: $v_6.value,
                IsExistingActivity: true
            })
        }
        this.$7s_0();
        return Sys.Serialization.JavaScriptSerializer.serialize($v_0)
    },
    $6h_0: function($p0, $p1)
    {
        Sys.Application.remove_unload(this.$$d_$6h_0);
        if(!this.$5h_0()) return;
        var $v_0 = this.$7M_0();
        Mscrm.MetricsReporting.$Ai($v_0)
    },
    $4N_0: function()
    {
        return IsNull(window.isMobileClient) && window.self.IS_UEIP_ENABLED
    },
    $3I_0: function()
    {
        return window.self.REQ_ID
    },
    addXMLHttpRequestHeaders: function(request)
    {
        if(IsNull(request)) return;
        var $v_0 = this.$3I_0();
        !isNullOrEmptyString($v_0) && request.setRequestHeader("ReferrerReqId", $v_0)
    }
};
Mscrm.MetricsCollector = function() {};
Mscrm.MetricsCollector.collectAndReportClientMetrics = function(pageType)
{
    var $v_0 = 0;
    switch(pageType)
    {
        case 0:
            break;
        case 1:
            $v_0 = Mscrm.MetricsCollector.$8Y();
            break;
        case 2:
            $v_0 = Mscrm.MetricsCollector.$8X();
            break;
        case 3:
            break;
        default:
            break
    }
    Mscrm.Performance.PerformanceMarkerManager.get_instance().clearAllMarkersCreatedBefore($v_0)
};
Mscrm.MetricsCollector.$8X = function()
{
    var $v_0 = Mscrm.Performance.PerformanceMarkerManager.get_instance(),
        $v_1 = window.top.StartInPageNavigationTimestamp,
        $v_2 = window.top.InnerIFrameSrcChangeTimestamp;
    if(!($v_1 > 0) || $v_2 - $v_1 > 1e3) $v_1 = $v_2;
    window.top.StartInPageNavigationTimestamp = 0;
    window.top.InnerIFrameSrcChangeTimestamp = 0;
    if(!($v_1 > 0)) return $v_1;
    $v_0.addRetroactiveMarker("Form Load Start", 1, $v_1);
    $v_0.addRetroactiveStopwatch("IFrame Init", $v_1, $v_2);
    var $v_3 = window.self.StartLoadFormLayoutTimestamp,
        $v_4 = window.self.LoadStartTime;
    Mscrm.MetricsStopwatch.createRetroactiveStopwatch("Main.aspx Load and Parse", $v_2, $v_4);
    Mscrm.MetricsStopwatch.createRetroactiveStopwatch("Main.aspx CSS and JS Load", $v_4, $v_3);
    var $v_5 = window.self.HideLoadingScreenTimestamp,
        $v_6 = window.self.FinishInlineEditPass1Timestamp,
        $v_7 = window.self.FinishInlineEditPass2Timestamp,
        $v_8 = window.self.InlineEditInitializationCompletedTimestamp;
    Mscrm.MetricsStopwatch.createRetroactiveStopwatch("Read-Ready", $v_1, $v_5);
    Mscrm.MetricsStopwatch.createRetroactiveStopwatch("Edit-Ready Pass 1", $v_1, $v_6);
    Mscrm.MetricsStopwatch.createRetroactiveStopwatch("Edit-Ready Pass 2", $v_1, $v_7);
    Mscrm.MetricsStopwatch.createRetroactiveStopwatch("Edit-Ready Full", $v_1, $v_8);
    return $v_1
};
Mscrm.MetricsCollector.$8Y = function()
{
    var $v_0 = Mscrm.Performance.PerformanceMarkerManager.get_instance(),
        $v_1 = window.top.StartInPageNavigationTimestamp,
        $v_2 = window.top.InnerIFrameSrcChangeTimestamp;
    if(!($v_1 > 0) || $v_2 - $v_1 > 1e3) $v_1 = $v_2;
    window.top.StartInPageNavigationTimestamp = 0;
    window.top.InnerIFrameSrcChangeTimestamp = 0;
    if(!($v_1 > 0)) return $v_1;
    $v_0.addRetroactiveMarker("Grid Load Start", 1, $v_1);
    $v_0.addRetroactiveStopwatch("IFrame Init", $v_1, $v_2);
    var $v_3 = window.self.LoadStartTime;
    Mscrm.MetricsStopwatch.createRetroactiveStopwatch("Load Page and Parse", $v_2, $v_3);
    var $v_4 = window.self.PostRenderTime;
    Mscrm.MetricsStopwatch.createRetroactiveStopwatch("CSS and JS Load", $v_3, $v_4);
    $v_0.addRetroactiveMarker("Read-Ready", 1, $v_4);
    Mscrm.MetricsStopwatch.createRetroactiveStopwatch("Read-Ready", $v_1, $v_4);
    var $v_5 = (new Date).getTime();
    Mscrm.MetricsStopwatch.createRetroactiveStopwatch("Initialize", $v_4, $v_5);
    $v_0.addRetroactiveMarker("All Controls Initialized", 1, $v_5);
    Mscrm.MetricsStopwatch.createRetroactiveStopwatch("All Controls Initialized", $v_1, $v_5);
    return $v_1
};
Mscrm.MetricsStopwatch = function(name)
{
    this.$5n_0 = name
};
Mscrm.MetricsStopwatch.createRetroactiveStopwatch = function(name, startTime, stopTime, properties)
{
    if(isNaN(startTime) || isNaN(stopTime)) return;
    var $v_0 = stopTime - startTime,
        $v_1 = Mscrm.MetricsReporting.instance().createRetroactiveMetric(name, $v_0, startTime);
    if($v_1 && properties) $v_1.p = properties;
    var $v_2 = Mscrm.Performance.PerformanceStopwatch.createRetroactiveStopwatch(name, startTime, stopTime);
    $v_2 && properties && $v_2.setParameter(Sys.Serialization.JavaScriptSerializer.serialize(properties))
};
Mscrm.MetricsStopwatch.prototype = {
    $5n_0: null,
    $3M_0: null,
    $5v_0: null,
    properties: null,
    start: function()
    {
        this.$3M_0 = new Date
    },
    stop: function()
    {
        if(!this.$3M_0) return;
        this.$5v_0 = new Date;
        var $v_0 = this.$5v_0.getTime() - this.$3M_0.getTime(),
            $v_1 = Mscrm.MetricsReporting.instance().createRetroactiveMetric(this.$5n_0, $v_0, this.$3M_0.getTime());
        if($v_1 && this.properties)
        {
            var $$dict_2 = this.properties;
            for(var $$key_3 in $$dict_2)
            {
                var $v_3 = {
                    key: $$key_3,
                    value: $$dict_2[$$key_3]
                };
                $v_1.p[$v_3.key] = $v_3.value
            }
        }
        var $v_2 = Mscrm.Performance.PerformanceStopwatch.createRetroactiveStopwatch(this.$5n_0, this.$3M_0.getTime(), this.$5v_0.getTime());
        $v_2 && this.properties && $v_2.setParameter(Sys.Serialization.JavaScriptSerializer.serialize(this.properties))
    }
};
Mscrm.CrmDialogReturnObject = function(command, id, $sn_arguments)
{
    this.$6t_0 = command;
    this.$6z_0 = id;
    this.$7j_0 = $sn_arguments
};
Mscrm.CrmDialogReturnObject.prototype = {
    $6t_0: null,
    $6z_0: null,
    $7j_0: null,
    get_commandObject: function()
    {
        var $v_0 = {};
        $v_0["command"] = this.$6t_0;
        $v_0["id"] = this.$6z_0;
        $v_0["params"] = this.$7j_0;
        return $v_0
    }
};
Mscrm.CrmLocalStorage = function() {};
Mscrm.CrmLocalStorage.get_$59 = function()
{
    if(IsNull(Mscrm.CrmLocalStorage.$32))
        if(Mscrm.CrmLocalStorage.$9i()) Mscrm.CrmLocalStorage.$32 = new Mscrm.LocalStorage;
        else Mscrm.CrmLocalStorage.$32 = new Mscrm.UserDataStorage;
    return Mscrm.CrmLocalStorage.$32
};
Mscrm.CrmLocalStorage.$9i = function()
{
    try
    {
        return "localStorage" in window && window["localStorage"] !== null && window["localStorage"] !== undefined
    }
    catch($$e_0)
    {
        return false
    }
};
Mscrm.CrmLocalStorage.getItem = function(key)
{
    return Mscrm.CrmLocalStorage.get_$59().getItem(key)
};
Mscrm.CrmLocalStorage.setItem = function(key, value)
{
    Mscrm.CrmLocalStorage.get_$59().setItem(key, value)
};
Mscrm.CrmLocalStorage.removeItem = function(key)
{
    Mscrm.CrmLocalStorage.get_$59().removeItem(key)
};
Mscrm.LocalStorage = function() {};
Mscrm.LocalStorage.prototype = {
    getItem: function($p0)
    {
        return localStorage.getItem($p0)
    },
    setItem: function($p0, $p1)
    {
        localStorage.setItem($p0, $p1)
    },
    removeItem: function($p0)
    {
        localStorage.removeItem($p0)
    }
};
Mscrm.UserDataStorage = function()
{
    this.$13_0 = $get(this.$6c_0);
    if(IsNull(this.$13_0))
    {
        this.$13_0 = document.createElement("<div style='behavior:url(#default#userData);display: none;' id='" + this.$6c_0 + "'></div>");
        document.body.appendChild(this.$13_0)
    }
};
Mscrm.UserDataStorage.prototype = {
    $13_0: null,
    $4k_0: "commonStore",
    $6c_0: "userDataElement",
    getItem: function($p0)
    {
        this.$13_0.load(this.$4k_0);
        return this.$13_0.getAttribute($p0)
    },
    setItem: function($p0, $p1)
    {
        this.$13_0.setAttribute($p0, $p1);
        this.$13_0.save(this.$4k_0)
    },
    removeItem: function($p0)
    {
        this.$13_0.removeAttribute($p0);
        this.$13_0.save(this.$4k_0)
    }
};
Mscrm.SearchRecordColumn = function() {};
Mscrm.SearchRecordColumn.prototype = {
    $2f_0: "",
    $3Y_0: 0,
    $2p_0: "",
    get_value: function()
    {
        return this.$2f_0
    },
    set_value: function(value)
    {
        this.$2f_0 = value;
        return value
    },
    get_columnWidth: function()
    {
        return this.$3Y_0
    },
    set_columnWidth: function(value)
    {
        this.$3Y_0 = value;
        return value
    },
    get_columnName: function()
    {
        return this.$2p_0
    },
    set_columnName: function(value)
    {
        this.$2p_0 = value;
        return value
    }
};
Mscrm.SearchRecord = function() {};
Mscrm.SearchRecord.prototype = {
    $5H_0: null,
    $3k_0: null,
    $21_0: null,
    $3f_0: 0,
    $6Y_0: null,
    $69_0: null,
    get_resultColumns: function()
    {
        return this.$5H_0
    },
    set_resultColumns: function(value)
    {
        this.$5H_0 = value;
        return value
    },
    get_hiddenColumns: function()
    {
        return this.$3k_0
    },
    set_hiddenColumns: function(value)
    {
        this.$3k_0 = value;
        return value
    },
    get_title: function()
    {
        return this.$21_0
    },
    set_title: function(value)
    {
        this.$21_0 = value;
        return value
    },
    get_entityTypeCode: function()
    {
        return this.$3f_0
    },
    set_entityTypeCode: function(value)
    {
        this.$3f_0 = value;
        return value
    },
    get_objectId: function()
    {
        return this.$6Y_0
    },
    set_objectId: function(value)
    {
        this.$6Y_0 = value;
        return value
    },
    get_entityLogicalName: function()
    {
        return this.$69_0
    },
    set_entityLogicalName: function(value)
    {
        this.$69_0 = value;
        return value
    }
};
Mscrm.FeatureControl = function() {};
Mscrm.FeatureControl.get_Current = function()
{
    return Mscrm.FeatureControl.$4n
};
Mscrm.DefaultFeatureControlChecks = function() {};
Mscrm.DefaultFeatureControlChecks.prototype = {
    isFeatureEnabled: function(featureName)
    {
        if(isNullOrEmptyString(featureName)) return false;
        if(!IsNull(window.FeatureControl))
            if(featureName in window.FeatureControl) return window.FeatureControl[featureName];
            else return false;
        return false
    }
};
Mscrm.FeatureNames = function() {};
Mscrm.MobileUtility = function() {};
Mscrm.MobileUtility.gotoMobileErrorPage = function(errorInfo)
{
    var $v_0 = Mscrm.CrmUri.create("/_common/error/err.aspx");
    $v_0.get_query()["ErrorCode"] = errorInfo.$2E_0;
    $v_0.get_query()["RequestUri"] = errorInfo.$42_0;
    $v_0.get_query()["BackUri"] = window.location.href;
    Mscrm.MobileUtility.$6u($v_0);
    window.location.href = $v_0.toString()
};
Mscrm.MobileUtility.getMobileUrl = function(mobilePage, entityName, entityId, formOnEdit)
{
    return Mscrm.MobileUtility.getMobileUrl2(mobilePage, entityName, entityId, null, null, null, formOnEdit, null, -1)
};
Mscrm.MobileUtility.getMobileUrl2 = function(mobilePage, entityName, entityId, relationshipId, parentType, parentId, formOnEdit, tabId, roleOrdinal)
{
    var $v_0 = "";
    switch(mobilePage)
    {
        case 4:
            $v_0 = "/m/ed.aspx";
            break;
        case 2:
            $v_0 = "/m/ef.aspx";
            break;
        case 1:
            $v_0 = "/m/eh.aspx";
            break;
        case 0:
            $v_0 = "/m/default.aspx";
            break;
        case 3:
            $v_0 = "/m/re.aspx";
            break
    }
    var $v_1 = Mscrm.CrmUri.create($v_0);
    if(entityName) $v_1.get_query()["etn"] = entityName;
    if(entityId) $v_1.get_query()["id"] = entityId;
    if(!isNullOrEmptyString(relationshipId)) $v_1.get_query()["rid"] = relationshipId;
    if(!isNullOrEmptyString(parentType)) $v_1.get_query()["pType"] = parentType;
    if(!isNullOrEmptyString(parentId)) $v_1.get_query()["pId"] = parentId;
    if(!isNullOrEmptyString(tabId)) $v_1.get_query()["tid"] = tabId;
    if(roleOrdinal !== -1) $v_1.get_query()["ord"] = roleOrdinal.toString();
    if(formOnEdit) $v_1.get_query()["ro"] = "0";
    if(window.UseTabletExperience && mobilePage === 2) $v_1.get_query()["aste"] = "true";
    Mscrm.MobileUtility.$6u($v_1);
    return $v_1
};
Mscrm.MobileUtility.handleItemClick = function(domEvent)
{
    var $v_0 = IsNull(window.isLookupPage) || window.isLookupPage == false ? false : true;
    if($v_0) return;
    var $v_1 = domEvent.target || domEvent.srcElement;
    while($v_1 && $v_1.tagName !== "A") $v_1 = $v_1.parentNode;
    var $v_2 = $v_1.getAttribute("data-href"),
        $v_3 = $v_1.getAttribute("data-needPerfMarker"),
        $v_4 = $v_3,
        $v_5 = true;
    if(!isNullOrEmptyString($v_4) && $v_4 === "0") $v_5 = false;
    if(Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2)) return;
    var $v_6 = Mscrm.CrmUri.create($v_2.toString());
    if($v_5) $v_6.get_query()["LoadStartTime"] = (new Date).getTime().toString();
    window.top.location.href = $v_6.toString();
    domEvent.stopPropagation()
};
Mscrm.MobileUtility.$6u = function($p0)
{
    var $v_0 = (new Mscrm.GlobalContext).getQueryStringParameters(),
        $v_1 = $v_0["client_type"],
        $v_2 = $v_0["user_lcid"];
    if(!Mscrm.InternalUtilities._String.isNullOrEmpty($v_1) && $v_1 === "MobileClient" && $v_2 > 0)
    {
        $p0.get_query()["client_type"] = $v_1;
        $p0.get_query()["user_lcid"] = $v_2
    }
    var $v_3 = $v_0["HideMasthead"];
    if(!Mscrm.InternalUtilities._String.isNullOrEmpty($v_3)) $p0.get_query()["HideMasthead"] = $v_3
};
Mscrm.MobileUtility.isMastheadHidden = function()
{
    var $v_0 = (new Mscrm.GlobalContext).getQueryStringParameters(),
        $v_1 = $v_0["HideMasthead"];
    return !Mscrm.InternalUtilities._String.isNullOrEmpty($v_1) && ($v_1 === "true" || $v_1 === "1")
};
Mscrm.MobileUtility.isHostedInWindowsPhoneApp = function()
{
    var $v_0 = Mscrm.CrmUri.create(window.location.search);
    if(!IsNull($v_0) && !IsNull($v_0.get_query()) && "HostedInWindowsPhoneApp" in $v_0.get_query() && ($v_0.get_query()["HostedInWindowsPhoneApp"] === "true" || $v_0.get_query()["HostedInWindowsPhoneApp"] === "1")) return true;
    return false
};
Mscrm.MobileUtility.PreparePageForWindowsPhoneApp = function()
{
    if(Mscrm.MobileUtility.isHostedInWindowsPhoneApp()) window.PreventNamespaceResolver = true
};
Mscrm.MobileUtility.viewAttachment = function(mimeType, documentBody, fileName, fileSize)
{
    var $v_0 = $get("MobileCommandBar");
    if(IsNull($v_0)) return;
    var $v_1 = $v_0.control;
    if(IsNull($v_1)) return;
    $v_1.viewAttachment(mimeType, documentBody, fileName, fileSize)
};
Mscrm.MediaQuery = function() {};
Mscrm.MediaQuery.prototype = {
    $6Z_0: null,
    get_query: function()
    {
        return this.$6Z_0
    },
    set_query: function(value)
    {
        this.$6Z_0 = value;
        var $v_0 = new RegExp(String.format("\\(\\s*{0}\\s*:\\s*(\\d+)px\\s*\\)", "min-width"), "i"),
            $v_1 = this.get_query().match($v_0);
        if(!IsNull($v_1) && $v_1.length === 2) this.$35_0 = parseInt($v_1[1], 10);
        var $v_2 = new RegExp(String.format("\\(\\s*{0}\\s*:\\s*(\\d+)px\\s*\\)", "max-width"), "i"),
            $v_3 = this.get_query().match($v_2);
        if(!IsNull($v_3) && $v_3.length === 2) this.$34_0 = parseInt($v_3[1], 10);
        return value
    },
    $1U_0: null,
    get_contextNode: function()
    {
        return this.$1U_0
    },
    set_contextNode: function(value)
    {
        this.$1U_0 = value;
        return value
    },
    $w_0: null,
    get_action: function()
    {
        return this.$w_0
    },
    set_action: function(value)
    {
        this.$w_0 = value;
        return value
    },
    $2F_0: null,
    get_cssAction: function()
    {
        return this.$2F_0
    },
    set_cssAction: function(value)
    {
        this.$2F_0 = value;
        return value
    },
    $35_0: 0,
    get_minWidth: function()
    {
        return this.$35_0
    },
    set_minWidth: function(value)
    {
        this.$35_0 = value;
        return value
    },
    $34_0: 0,
    get_maxWidth: function()
    {
        return this.$34_0
    },
    set_maxWidth: function(value)
    {
        this.$34_0 = value;
        return value
    },
    $1V_0: false,
    get_didMatch: function()
    {
        return this.$1V_0
    },
    set_didMatch: function(value)
    {
        this.$1V_0 = value;
        return value
    },
    $4B_0: false,
    get_stateChanged: function()
    {
        return this.$4B_0
    },
    set_stateChanged: function(value)
    {
        this.$4B_0 = value;
        return value
    }
};
Mscrm.MediaQueryAction = function() {};
Mscrm.MediaQueryAction.prototype = {
    $33_0: null,
    get_matchAction: function()
    {
        return this.$33_0
    },
    set_matchAction: function(value)
    {
        this.$33_0 = value;
        return value
    },
    $3B_0: null,
    get_unmatchAction: function()
    {
        return this.$3B_0
    },
    set_unmatchAction: function(value)
    {
        this.$3B_0 = value;
        return value
    }
};
Mscrm.CssMediaQueryEvaluator = function()
{
    Mscrm.CssMediaQueryEvaluator.initializeBase(this)
};
Mscrm.CssMediaQueryEvaluator.get_instance = function()
{
    if(IsNull(Mscrm.MediaQueryEvaluator._instance)) Mscrm.MediaQueryEvaluator._instance = new Mscrm.CssMediaQueryEvaluator;
    return Mscrm.MediaQueryEvaluator._instance
};
Mscrm.CssMediaQueryEvaluator.prototype = {
    getQueryList: function(forceGet)
    {
        if(forceGet)
            for(var $v_0 = this.$90_1(), $v_1 = 0; $v_1 < $v_0.length; $v_1++)
            {
                var $v_2 = this.$9A_1($v_0[$v_1]);
                Array.addRange(this.$q_0, this.$AD_1($v_2))
            }
        return this.$q_0
    },
    applyQueryAction: function(query)
    {
        if(query.$1V_0) this.$4J_1(query, true);
        else this.$4J_1(query, false)
    },
    $4J_1: function($p0, $p1)
    {
        if($p1)
        {
            var $v_0 = document.createElement("style");
            $v_0.type = "text/css";
            if($v_0.styleSheet) $v_0.styleSheet.cssText = $p0.$2F_0;
            else $v_0.appendChild(document.createTextNode($p0.$2F_0));
            $v_0.setAttribute("id", $p0.get_query());
            document.body.appendChild($v_0)
        }
        else
        {
            var $v_1 = $get($p0.get_query());
            !IsNull($v_1) && $v_1.parentNode.removeChild($v_1)
        }
    },
    $AD_1: function($p0)
    {
        var $v_0 = "([^{]+)",
            $v_1 = "([^@]+)",
            $v_2 = "@media\\(#(\\w+)\\)\\s+{0}\\s+{{{1}}}",
            $v_3 = "@media\\s+{0}\\s+{{{1}}}",
            $v_4 = [],
            $v_5 = new RegExp(String.format($v_2, $v_0, $v_1), "g"),
            $v_6 = $v_5.exec($p0);
        while(!IsNull($v_6))
        {
            var $v_8 = new Mscrm.MediaQuery;
            $v_8.set_query($v_6[2]);
            $v_8.$1U_0 = $get($v_6[1]);
            $v_8.$2F_0 = $v_6[3];
            Array.add($v_4, $v_8);
            $v_6 = $v_5.exec($p0)
        }
        var $v_7 = new RegExp(String.format($v_3, $v_0, $v_1), "g");
        $v_6 = $v_7.exec($p0);
        while(!IsNull($v_6))
        {
            var $v_9 = new Mscrm.MediaQuery;
            $v_9.set_query($v_6[1]);
            $v_9.$1U_0 = null;
            $v_9.$2F_0 = $v_6[2];
            Array.add($v_4, $v_9);
            $v_6 = $v_7.exec($p0)
        }
        return $v_4
    },
    $9A_1: function($p0)
    {
        var $v_0 = Mscrm.CrmUri.create($p0.getAttribute("href").toString());
        try
        {
            var $v_1 = new XMLHttpRequest;
            $v_1.open("GET", $v_0.toString(), false);
            $v_1.send(null);
            return $v_1.responseText
        }
        catch($$e_3)
        {
            return ""
        }
    },
    $90_1: function()
    {
        for(var $v_0 = [], $v_1 = document.getElementsByTagName("link"), $v_2 = 0; $v_2 < $v_1.length; $v_2++)
        {
            var $v_3 = $v_1[$v_2];
            $v_3.getAttribute("rel").toString().toUpperCase() === "STYLESHEET" && Array.add($v_0, $v_3)
        }
        return $v_0
    },
    restartEvaluation: function()
    {
        this.startEvaluation()
    },
    hasNativeBrowserSupport: function()
    {
        var $v_0 = false,
            $v_1 = document.createElement("div");
        $v_1.id = "mqTestDiv";
        $v_1.style.position = "absolute";
        $v_1.style.top = "-9999px";
        document.body.appendChild($v_1);
        var $v_2 = new Mscrm.MediaQuery;
        $v_2.$2F_0 = "@media (min-width:0px) { #mqTestDiv { display:none; } }";
        $v_2.set_query("testQuery");
        this.$4J_1($v_2, true);
        if(XUI.Html.GetComputedStyle($v_1, "display") === "none") $v_0 = true;
        this.$4J_1($v_2, false);
        document.body.removeChild($v_1);
        return $v_0
    }
};
Mscrm.JsMediaQueryEvaluator = function()
{
    Mscrm.JsMediaQueryEvaluator.initializeBase(this)
};
Mscrm.JsMediaQueryEvaluator.get_instance = function()
{
    if(IsNull(Mscrm.MediaQueryEvaluator._instance)) Mscrm.MediaQueryEvaluator._instance = new Mscrm.JsMediaQueryEvaluator;
    return Mscrm.MediaQueryEvaluator._instance
};
Mscrm.JsMediaQueryEvaluator.prototype = {
    register: function(context, query, match, unmatch)
    {
        var $v_0 = new Mscrm.MediaQuery;
        $v_0.set_query(query);
        $v_0.$1U_0 = context;
        $v_0.$w_0 = new Mscrm.MediaQueryAction;
        $v_0.$w_0.$33_0 = match;
        $v_0.$w_0.$3B_0 = unmatch;
        Array.add(this.$q_0, $v_0)
    },
    getQueryList: function(forceGet)
    {
        return this.$q_0
    },
    applyQueryAction: function(query)
    {
        if(query.$1V_0) query.$w_0.$33_0();
        else query.$w_0.$3B_0()
    }
};
Mscrm.MediaQueryEvaluator = function()
{
    this.$$d_$7t_0 = Function.createDelegate(this, this.$7t_0)
};
Mscrm.MediaQueryEvaluator.prototype = {
    $50_0: false,
    $68_0: false,
    $65_0: 0,
    $6P_0: 0,
    $q_0: null,
    get_registeredQueryList: function()
    {
        return this.$q_0
    },
    set_registeredQueryList: function(value)
    {
        this.$q_0 = value;
        return value
    },
    initialize: function()
    {
        var $v_0 = (new Date).getTime();
        if(this.$50_0) return;
        $addHandler(window, "resize", this.$$d_$7t_0);
        this.$q_0 = [];
        this.startEvaluation();
        this.$50_0 = true;
        var $v_1 = (new Date).getTime();
        window.self.MediaQueryInitializationTime = $v_1 - $v_0;
        window.self.MediaQueryStartTime = $v_0;
        window.self.MediaQueryEndTime = $v_1
    },
    dispose: function()
    {
        if(this.$68_0 || !this.$50_0) return;
        $removeHandler(window, "resize", this.$$d_$7t_0);
        if(!IsNull(this.$q_0))
            for(var $v_0 = 0; $v_0 < this.$q_0.length; $v_0++)
            {
                var $v_1 = this.$q_0[$v_0];
                $v_1.$1U_0 = null;
                if(!IsNull($v_1.$w_0))
                {
                    $v_1.$w_0.$33_0 = null;
                    $v_1.$w_0.$3B_0 = null
                }
            }
        this.$q_0 = null;
        Mscrm.MediaQueryEvaluator._instance = null;
        this.$68_0 = true
    },
    startEvaluation: function()
    {
        this.getQueryList(true);
        this.$7t_0(null)
    },
    $7t_0: function($p0)
    {
        var $v_0 = (new Date).getTime();
        if($v_0 - this.$6P_0 < 1e3) return;
        var $v_1 = (new Date).getTime(),
            $v_2 = this.getQueryList(false);
        this.$8v_0($v_2);
        this.$AM_0($v_2);
        var $v_3 = this.$6P_0 = (new Date).getTime();
        window.MediaQueryExecutionTime = window.MediaQueryExecutionTime || [];
        MediaQueryExecutionTime.push($v_3 - $v_1)
    },
    getQueryList: function(forceGet)
    {
        return null
    },
    applyQueryAction: function(query) {},
    $AM_0: function($p0)
    {
        for(var $v_0 = (new Date).getTime(), $v_3 = 0; $v_3 < $p0.length; $v_3++)
        {
            var $v_4 = $p0[$v_3];
            $v_4.$4B_0 && this.applyQueryAction($v_4)
        }
        var $v_1 = document.body.offsetWidth,
            $v_2 = (new Date).getTime();
        window.MediaQueryApplyTime = window.MediaQueryApplyTime || [];
        MediaQueryApplyTime.push($v_2 - $v_0)
    },
    $8v_0: function($p0)
    {
        this.$65_0 = document.documentElement.clientWidth;
        for(var $v_0 = 0; $v_0 < $p0.length; $v_0++) this.$8w_0($p0[$v_0])
    },
    $8w_0: function($p0)
    {
        var $v_0 = $p0.$1V_0,
            $v_1 = this.$65_0;
        if(!IsNull($p0.$1U_0)) $v_1 = $p0.$1U_0.clientWidth;
        if(!IsNull($p0.$35_0) && $v_1 < $p0.$35_0 || !IsNull($p0.$34_0) && $v_1 > $p0.$34_0) $p0.$1V_0 = false;
        else $p0.$1V_0 = true;
        $p0.$4B_0 = !($v_0 === $p0.$1V_0)
    }
};
Mscrm.OnLoadDeferredExecutor = function() {};
Mscrm.OnLoadDeferredExecutor.$3J = function($p0)
{
    switch($p0)
    {
        case 0:
            return "ASAP";
        case 1:
            return "PostViewPortInitialization";
        case 3:
            return "PostScriptLoad";
        default:
            return "PostInitialization"
    }
};
Mscrm.OnLoadDeferredExecutor.queueCallback = function(callback, executionType)
{
    if(!Mscrm.Utilities.isRefreshForm())
    {
        window.setTimeout(callback, 0);
        return
    }
    var $v_0 = Mscrm.OnLoadDeferredExecutor.$3J(executionType);
    if(!Mscrm.OnLoadDeferredExecutor.$t)
    {
        Mscrm.OnLoadDeferredExecutor.$t = {};
        Mscrm.OnLoadDeferredExecutor.$t[Mscrm.OnLoadDeferredExecutor.$3J(2)] = [];
        Mscrm.OnLoadDeferredExecutor.$t[Mscrm.OnLoadDeferredExecutor.$3J(1)] = [];
        Mscrm.OnLoadDeferredExecutor.$t[Mscrm.OnLoadDeferredExecutor.$3J(3)] = []
    }
    if(!Mscrm.OnLoadDeferredExecutor.$t[$v_0] || !executionType) window.setTimeout(callback, 0);
    else Array.add(Mscrm.OnLoadDeferredExecutor.$t[$v_0], callback)
};
Mscrm.OnLoadDeferredExecutor.releaseCallbacks = function(executionType)
{
    if(!Mscrm.OnLoadDeferredExecutor.$t) return;
    for(var $v_0 = Mscrm.OnLoadDeferredExecutor.$3J(executionType), $v_1 = Mscrm.OnLoadDeferredExecutor.$t[$v_0], $v_2 = 0; $v_2 < $v_1.length; $v_2++) window.setTimeout($v_1[$v_2], 0);
    Array.clear($v_1);
    Mscrm.OnLoadDeferredExecutor.$t[$v_0] = null
};
Type.registerNamespace("Mscrm.Imported");
Type.registerNamespace("Mscrm.Presence");
Mscrm.Presence.IPresenceLocation = function() {};
Mscrm.Presence.IPresenceLocation.registerInterface("Mscrm.Presence.IPresenceLocation");
Mscrm.Presence.IPresenceStatus = function() {};
Mscrm.Presence.IPresenceStatus.registerInterface("Mscrm.Presence.IPresenceStatus");
Mscrm.Presence.PresenceControlFactory = function() {};
Mscrm.Presence.PresenceControlFactory.get_instance = function()
{
    try
    {
        if(!Mscrm.Presence.PresenceControlFactory.$5E) Mscrm.Presence.PresenceControlFactory.$2V = Mscrm.Presence.PresenceControlFactory.get_presenceHelperProxy().createPresenceControlInstance()
    }
    catch($$e_0)
    {
        !IsNull(Mscrm.Presence.PresenceControlFactory.$2V) && Mscrm.Presence.PresenceControlFactory.$2V.set_element(null)
    }
    Mscrm.Presence.PresenceControlFactory.$5E = true;
    return Mscrm.Presence.PresenceControlFactory.$2V
};
Mscrm.Presence.PresenceControlFactory.get_presenceHelperProxy = function()
{
    if(IsNull(Mscrm.Presence.PresenceControlFactory.$2V)) Mscrm.Presence.PresenceControlFactory.$43 = new Mscrm.Proxies.PresenceHelperProxy;
    return Mscrm.Presence.PresenceControlFactory.$43
};
Mscrm.Presence.PresenceControlFactory.set_presenceHelperProxy = function(value)
{
    Mscrm.Presence.PresenceControlFactory.$43 = value;
    return value
};
Mscrm.Presence.PresenceLocation = function(presenceLocation)
{
    this.$5A_0 = presenceLocation.oouiX;
    this.$5B_0 = presenceLocation.oouiY
};
Mscrm.Presence.PresenceLocation.prototype = {
    $5A_0: 0,
    $5B_0: 0,
    get_locationX: function()
    {
        return this.$5A_0
    },
    set_locationX: function(value)
    {
        this.$5A_0 = value;
        return value
    },
    get_locationY: function()
    {
        return this.$5B_0
    },
    set_locationY: function(value)
    {
        this.$5B_0 = value;
        return value
    }
};
Mscrm.Presence.PresenceStatus = function() {};
Mscrm.Presence.PresenceStatus.prototype = {
    $2b_0: 0,
    $7_0: null,
    get_status: function()
    {
        return this.$2b_0
    },
    set_status: function(value)
    {
        this.$2b_0 = value;
        return value
    },
    get_description: function()
    {
        if(IsNull(this.$7_0))
        {
            this.$7_0 = new Array(20);
            this.$7_0[0] = window.LOCID_PRESENCE_AVAILABLE;
            this.$7_0[1] = window.LOCID_PRESENCE_OFFLINE;
            this.$7_0[2] = window.LOCID_PRESENCE_AWAY;
            this.$7_0[4] = this.$7_0[2];
            this.$7_0[6] = this.$7_0[2];
            this.$7_0[16] = this.$7_0[2];
            this.$7_0[3] = window.LOCID_PRESENCE_BUSY;
            this.$7_0[9] = this.$7_0[3];
            this.$7_0[10] = this.$7_0[3];
            this.$7_0[19] = this.$7_0[3];
            this.$7_0[5] = window.LOCID_PRESENCE_INCALL;
            this.$7_0[7] = window.LOCID_PRESENCE_INMEETING;
            this.$7_0[8] = window.LOCID_PRESENCE_OUTOFOFFICE;
            this.$7_0[11] = this.$7_0[8];
            this.$7_0[12] = this.$7_0[8];
            this.$7_0[13] = this.$7_0[8];
            this.$7_0[14] = this.$7_0[8];
            this.$7_0[15] = this.$7_0[8];
            this.$7_0[17] = this.$7_0[8];
            this.$7_0[20] = this.$7_0[8];
            this.$7_0[18] = window.LOCID_PRESENCE_UNKNOWN
        }
        return this.$7_0[this.$2b_0]
    },
    set_description: function(value)
    {
        throw Error.invalidOperation("Mscrm.Presence.PresenceStatus.Description.set: This is used for unit testing and should not be consumed by production code.");
        return value
    }
};
Mscrm.Presence.PresenceStatusChangeArgs = function()
{
    Mscrm.Presence.PresenceStatusChangeArgs.initializeBase(this)
};
Mscrm.Presence.PresenceStatusChangeArgs.prototype = {
    $5J_1: null,
    $2b_1: null,
    $4r_1: null,
    get_sipId: function()
    {
        return this.$5J_1
    },
    set_sipId: function(value)
    {
        this.$5J_1 = value;
        return value
    },
    get_status: function()
    {
        return this.$2b_1
    },
    set_status: function(value)
    {
        this.$2b_1 = value;
        return value
    },
    get_elementId: function()
    {
        return this.$4r_1
    },
    set_elementId: function(value)
    {
        this.$4r_1 = value;
        return value
    }
};
Type.registerNamespace("Mscrm.InternalUtilities");
Mscrm.InternalUtilities._Dictionary = function() {};
Mscrm.InternalUtilities._Dictionary.count = function(dictionary)
{
    var $v_0 = 0,
        $$dict_2 = dictionary;
    for(var $$key_3 in $$dict_2)
    {
        var $v_1 = {
            key: $$key_3,
            value: $$dict_2[$$key_3]
        };
        $v_0++
    }
    return $v_0
};
Mscrm.InternalUtilities._Script = function() {};
Mscrm.InternalUtilities._Script.isNullOrUndefined = function(value)
{
    return null === value || value === undefined
};
Mscrm.InternalUtilities._Script.alert = function(message)
{
    alert(message)
};
Mscrm.InternalUtilities._Script.confirm = function(message)
{
    return confirm(message)
};
Mscrm.InternalUtilities._Script.eval = function(value)
{
    return eval(value)
};
Mscrm.InternalUtilities._Script.prompt = function(message, defaultValue)
{
    return prompt(message, defaultValue)
};
Mscrm.InternalUtilities._String = function() {};
Mscrm.InternalUtilities._String.isNullOrEmpty = function(value)
{
    return null === value || Mscrm.InternalUtilities._String.isUndefined(value) || value === ""
};
Mscrm.InternalUtilities._String.isNullOrWhiteSpace = function(value)
{
    return Mscrm.InternalUtilities._String.isNullOrEmpty(value) || value.trim() === ""
};
Mscrm.InternalUtilities._String.hashCode = function(value)
{
    for(var $v_0 = 0, $v_1 = 0; $v_1 < value.length; ++$v_1)
    {
        var $v_2 = value.charCodeAt($v_1);
        $v_0 = ($v_0 << 5) - $v_0 + $v_2;
        $v_0 = $v_0 & $v_0
    }
    return $v_0
};
Mscrm.InternalUtilities._String.join = function(separator, values)
{
    return values.join(separator)
};
Mscrm.InternalUtilities._String.isUndefined = function(value)
{
    return value === undefined
};
Mscrm.InternalUtilities._String.format = function(value, arg0, arg1, arg2, arg3, arg4, arg5)
{
    if(Mscrm.InternalUtilities._String.isUndefined(arg0) && Mscrm.InternalUtilities._String.isUndefined(arg1) && Mscrm.InternalUtilities._String.isUndefined(arg2) && Mscrm.InternalUtilities._String.isUndefined(arg3) && Mscrm.InternalUtilities._String.isUndefined(arg4) && Mscrm.InternalUtilities._String.isUndefined(arg5)) return value;
    return String.format(value, arg0, arg1, arg2, arg3, arg4, arg5)
};
Mscrm.InternalUtilities._String.replaceNewLineWithEnding = function(text, ending)
{
    if(Mscrm.InternalUtilities._String.isNullOrEmpty(text)) return "";
    for(var $v_0 = new Sys.StringBuilder, $v_1 = text.split(Mscrm.InternalUtilities._String.$7c), $v_2 = 0; $v_2 < $v_1.length; $v_2++)
        if(!Mscrm.InternalUtilities._String.isNullOrWhiteSpace($v_1[$v_2]))
        {
            $v_0.append($v_1[$v_2]);
            $v_0.append(ending)
        }
    return $v_0.toString()
};
Mscrm.InternalUtilities._String.replaceAll = function(text, patternText, replaceText)
{
    var $v_0 = text;
    while($v_0.indexOf(patternText) >= 0) $v_0 = $v_0.replace(patternText, replaceText);
    return $v_0
};
Mscrm.InternalUtilities._String.replaceFirst = function(text, patternText, replaceText)
{
    var $v_0 = text,
        $v_1 = text.indexOf(patternText);
    if($v_1 >= 0)
    {
        $v_0 = Mscrm.InternalUtilities._String.remove($v_0, $v_1, patternText.length);
        $v_0 = Mscrm.InternalUtilities._String.insert($v_0, $v_1, replaceText)
    }
    return $v_0
};
Mscrm.InternalUtilities._String.remove = function(text, index, count)
{
    if(Mscrm.InternalUtilities._String.isNullOrEmpty(text)) return "";
    if(Mscrm.InternalUtilities.JSTypes.isNull(count) || index + count > text.length) return text.substr(0, index);
    return text.substr(0, index) + text.substr(index + count)
};
Mscrm.InternalUtilities._String.indexOfAny = function(text, values, startIndex, count)
{
    if(Mscrm.InternalUtilities.JSTypes.isNull(text)) return -1;
    if(Mscrm.InternalUtilities.JSTypes.isNull(values)) return -1;
    var $v_0 = text.length;
    if($v_0 <= 0) return -1;
    startIndex = Mscrm.InternalUtilities.JSTypes.isNull(startIndex) ? 0 : startIndex;
    count = Mscrm.InternalUtilities.JSTypes.isNull(count) ? 0 : count;
    var $v_1 = startIndex + count - 1;
    if($v_1 >= $v_0) $v_1 = $v_0 - 1;
    for(var $v_2 = startIndex; $v_2 <= $v_1; $v_2++)
        if(values.indexOf(text.charAt($v_2)) >= 0) return $v_2;
    return -1
};
Mscrm.InternalUtilities._String.insert = function(text, index, value)
{
    if(Mscrm.InternalUtilities._String.isNullOrEmpty(value)) return text;
    if(Mscrm.InternalUtilities.JSTypes.isNull(index)) return value + text;
    var $v_0 = text.substr(0, index),
        $v_1 = text.substr(index);
    return $v_0 + value + $v_1
};
Mscrm.InternalUtilities.EntityNames = function() {};
Mscrm.InternalUtilities.EntityTypeCode = function() {};
Mscrm.InternalUtilities.GridUtilities = function() {};
Mscrm.InternalUtilities.GridUtilities.executeStandardAction = function(actionUri, selectedRecords, dialogWidth, dialogHeight, callback, dialogArguments)
{
    if(Mscrm.InternalUtilities.JSTypes.isNull(selectedRecords) || !selectedRecords.length)
    {
        Mscrm.InternalUtilities._Script.alert(Xrm.Internal.getResourceString("Error_Message_Action_NoItemSelected"));
        return
    }
    if(Mscrm.InternalUtilities.JSTypes.isNull(dialogWidth)) dialogWidth = 400;
    if(Mscrm.InternalUtilities.JSTypes.isNull(dialogHeight)) dialogHeight = 200;
    if(Mscrm.InternalUtilities.JSTypes.isNull(dialogArguments))
    {
        for(var $v_1 = new Array(selectedRecords.length), $v_2 = 0; $v_2 < selectedRecords.length; $v_2++) $v_1[$v_2] = selectedRecords[$v_2].Id;
        dialogArguments = $v_1
    }
    var $v_0 = new Xrm.DialogOptions;
    $v_0.height = dialogHeight;
    $v_0.width = dialogWidth;
    Xrm.Internal.openDialog(actionUri.toString(), $v_0, dialogArguments, null, callback)
};
Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory = function(func, parameters)
{
    return function(retValue)
    {
        parameters.unshift(retValue);
        return func.apply(null, parameters)
    }
};
Mscrm.InternalUtilities.GridUtilities.generateStandardActionUri = function(actionName, entityTypeCode, selectedRecordCount)
{
    var $v_0 = Mscrm.CrmUri.create(String.format("/_grid/cmds/dlg_{0}.aspx", CrmEncodeDecode.CrmUrlEncode(actionName)));
    $v_0.get_query()["iObjType"] = entityTypeCode;
    $v_0.get_query()["iTotal"] = selectedRecordCount;
    return $v_0
};
Mscrm.InternalUtilities.JSTypes = function() {};
Mscrm.InternalUtilities.JSTypes.isNull = function(value)
{
    return typeof value === "undefined" || typeof value === "unknown" || value == null
};
Mscrm.InternalUtilities.JSTypes.isArray = function(item)
{
    return !!item && (Array.isInstanceOfType(item) || typeof item.splice === "function")
};
Mscrm.InternalUtilities.JSTypes.isInstanceOfTypeAcrossFrames = function(item, type)
{
    try
    {
        return Mscrm.InternalUtilities.JSTypes.isNull(item) || Mscrm.InternalUtilities.JSTypes.isNull(type) ? false : Object.getType(item).getName() === type.getName()
    }
    catch($$e_2)
    {
        return false
    }
};
Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString = function(value)
{
    return Mscrm.InternalUtilities.JSTypes.isNull(value) || typeof value === "string" && !value.length
};
Mscrm.InternalUtilities.JSTypes.getClass = function(value)
{
    return Object.prototype.toString.call(value).slice(8, -1)
};
Mscrm.InternalUtilities.JSTypes.isOfClass = function(value, soughtClass)
{
    return Mscrm.InternalUtilities.JSTypes.getClass(value) === soughtClass
};
Mscrm.InternalUtilities.TypeNames = function() {};
Mscrm.InternalUtilities.Utilities = function() {};
Mscrm.InternalUtilities.Utilities.createAndFilterXmlString = function(attributeName, fetchOperator, attributeValue)
{
    if(!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(attributeName) && !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(fetchOperator) && !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(attributeValue))
    {
        var $v_0 = '<filter type="and"><condition attribute="{0}" operator="{1}" value="{2}" /></filter>';
        return String.format($v_0, CrmEncodeDecode.CrmXmlAttributeEncode(attributeName), CrmEncodeDecode.CrmXmlAttributeEncode(fetchOperator), CrmEncodeDecode.CrmXmlAttributeEncode(attributeValue))
    }
    return ""
};
Mscrm.InternalUtilities.Utilities.isUserDefinedEntityObjectTypeCode = function(objectTypeCode)
{
    return objectTypeCode >= 1e4
};
Mscrm.InternalUtilities.Utilities.getCookie = function(cookieName)
{
    var $v_0 = null,
        $v_1 = document.cookie.indexOf(cookieName + "="),
        $v_2 = -1;
    if($v_1 !== -1)
    {
        $v_1 += cookieName.length + 1;
        $v_2 = document.cookie.indexOf(";", $v_1);
        if($v_2 === -1) $v_2 = document.cookie.length;
        $v_0 = document.cookie.substring($v_1, $v_2)
    }
    return CrmEncodeDecode.CrmNameValueDecode($v_0)
};
Mscrm.InternalUtilities.Utilities.isIosDevice = function()
{
    if(Mscrm.InternalUtilities.Utilities.getCookie("IsIPadDevice") === "1") return true;
    var uaString = navigator.userAgent;
    if(IsNull(uaString)) return false;
    uaString = uaString.toLowerCase();
    return uaString != "" && uaString.search("ipad|ipod|iphone") > -1
};
Mscrm.InternalUtilities.Utilities.isRefreshForm = function()
{
    var $v_0 = window.self._IsRefreshForm;
    return !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0) && "1" === $v_0
};
Mscrm.InternalUtilities.Utilities.isHighContrastEnabled = function()
{
    var $v_0 = window.self._highContrastEnabled;
    return Mscrm.InternalUtilities.JSTypes.isNull($v_0) ? false : $v_0
};
Mscrm.InternalUtilities.Utilities.enforceStateTransitions = function(entityName)
{
    var $v_0 = Xrm.Page.context.client.getClient() == Xrm.ClientNames.mobile,
        $v_1 = false;
    if($v_0) $v_1 = Xrm.Utility.AreStateTransitionsEnforced(entityName);
    else
    {
        var $v_2 = window.self._EnforceStateTransitions;
        $v_1 = !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2) && $v_2 === "1"
    }
    return $v_1
};
Type.registerNamespace("Mscrm.Performance");
Mscrm.Performance.PerformanceMarkerType = function() {};
Mscrm.Performance.PerformanceMarkerType.prototype = {
    undefined: 0,
    majorEvent: 1
};
Mscrm.Performance.PerformanceMarkerType.registerEnum("Mscrm.Performance.PerformanceMarkerType", false);
Mscrm.Performance.GlobalObjectTrackingManager = function() {};
Mscrm.Performance.GlobalObjectTrackingManager.get_trackingEnabled = function()
{
    return Mscrm.CrmLocalStorage.getItem("GlobalObjectTracking.isEnabled") === "1"
};
Mscrm.Performance.GlobalObjectTrackingManager.set_trackingEnabled = function(value)
{
    Mscrm.CrmLocalStorage.setItem("GlobalObjectTracking.isEnabled", value ? "1" : "0");
    return value
};
Mscrm.Performance.GlobalObjectTrackingManager.EnableGlobalObjectTracking = function(enable)
{
    Mscrm.Performance.GlobalObjectTrackingManager.set_trackingEnabled(enable)
};
Mscrm.Performance.GlobalObjectTrackingManager.CollectGlobalObjectCountsJsonString = function()
{
    return JSON.stringify(Mscrm.Performance.GlobalObjectTrackingManager.collectGlobalObjectCounts())
};
Mscrm.Performance.GlobalObjectTrackingManager.collectGlobalObjectCounts = function()
{
    var $v_0 = [],
        $v_1 = null;
    if(!Mscrm.Performance.GlobalObjectTrackingManager.get_trackingEnabled()) return $v_0;
    $v_1 = Mscrm.Performance.GlobalObjectTrackingManager.$8f();
    $v_1 && Array.add($v_0, $v_1);
    $v_1 = Mscrm.Performance.GlobalObjectTrackingManager.$8V();
    $v_1 && Array.add($v_0, $v_1);
    $v_1 = Mscrm.Performance.GlobalObjectTrackingManager.$8e("Microsoft AJAX Application.Events", Sys.Application._events);
    $v_1 && Array.add($v_0, $v_1);
    $v_1 = Mscrm.Performance.GlobalObjectTrackingManager.$8W();
    $v_1 && Array.add($v_0, $v_1);
    $v_1 = Mscrm.Performance.GlobalObjectTrackingManager.$8h();
    $v_1 && Array.add($v_0, $v_1);
    $v_1 = Mscrm.Performance.GlobalObjectTrackingManager.$8a();
    $v_1 && Array.add($v_0, $v_1);
    $v_1 = Mscrm.Performance.GlobalObjectTrackingManager.$8d();
    $v_1 && Array.add($v_0, $v_1);
    $v_1 = Mscrm.Performance.GlobalObjectTrackingManager.$8g();
    $v_1 && Array.add($v_0, $v_1);
    $v_1 = Mscrm.Performance.GlobalObjectTrackingManager.$8b();
    $v_1 && Array.add($v_0, $v_1);
    $v_1 = Mscrm.Performance.GlobalObjectTrackingManager.$8c();
    $v_1 && Array.add($v_0, $v_1);
    return $v_0
};
Mscrm.Performance.GlobalObjectTrackingManager.$8f = function()
{
    var $v_0 = null,
        $v_1 = document.getElementsByTagName("iframe");
    if($v_1)
    {
        $v_0 = new Mscrm.Performance.ObjectCountsInfo("IFrame");
        $v_0.ObjectCounts["Total Iframes"] = $v_1.length
    }
    return $v_0
};
Mscrm.Performance.GlobalObjectTrackingManager.$8V = function()
{
    var $v_0 = null,
        $v_1 = Sys.Application.getComponents();
    if(!IsNull($v_1))
    {
        $v_0 = new Mscrm.Performance.ObjectCountsInfo("Microsoft AJAX Application.Components");
        $v_0.ObjectCounts["Total Components"] = $v_1.length
    }
    return $v_0
};
Mscrm.Performance.GlobalObjectTrackingManager.$8W = function()
{
    var $v_0 = null,
        $v_1 = Mscrm.Performance.GlobalObjectTrackingManager.$6s(window.self);
    $v_0 = new Mscrm.Performance.ObjectCountsInfo("Microsoft AJAX Element._events");
    var $$dict_2 = $v_1;
    for(var $$key_3 in $$dict_2)
    {
        var $v_2 = {
                key: $$key_3,
                value: $$dict_2[$$key_3]
            },
            $v_3 = $v_2.key,
            $v_4 = $v_2.value;
        $v_0.ObjectCounts[$v_3] = $v_4
    }
    return $v_0
};
Mscrm.Performance.GlobalObjectTrackingManager.$6s = function($p0)
{
    var $v_0 = {},
        $v_1 = $P_CRM($p0.document.body).find("*");
    $v_1.each(function($p1_0, $p1_1)
    {
        if(!IsNull($p1_1._events))
        {
            var $v_8 = $p1_1._events,
                $$dict_F = $v_8;
            for(var $$key_G in $$dict_F)
            {
                var $v_9 = {
                        key: $$key_G,
                        value: $$dict_F[$$key_G]
                    },
                    $v_A = $v_9.key,
                    $v_B = $v_9.value;
                if(!IsNull($v_B))
                {
                    if(IsNull($v_0[$v_A])) $v_0[$v_A] = 0;
                    $v_0[$v_A] = $v_0[$v_A] + $v_B.length
                }
            }
        }
    });
    for(var $v_2 = $p0.frames, $v_3 = 0; $v_3 < $v_2.length; $v_3++) try
    {
        var $v_4 = Mscrm.Performance.GlobalObjectTrackingManager.$6s($v_2[$v_3]),
            $$dict_6 = $v_4;
        for(var $$key_7 in $$dict_6)
        {
            var $v_5 = {
                    key: $$key_7,
                    value: $$dict_6[$$key_7]
                },
                $v_6 = $v_5.key,
                $v_7 = $v_5.value;
            if(!IsNull($v_7))
            {
                if(IsNull($v_0[$v_6])) $v_0[$v_6] = 0;
                $v_0[$v_6] = $v_0[$v_6] + $v_7
            }
        }
    }
    catch($$e_B)
    {}
    return $v_0
};
Mscrm.Performance.GlobalObjectTrackingManager.$8h = function()
{
    var $v_0 = null,
        $v_1 = jQuery.cache;
    if($v_1)
    {
        $v_0 = new Mscrm.Performance.ObjectCountsInfo("jQuery Events");
        var $v_2 = 0,
            $v_3 = {},
            $$dict_4 = $v_1;
        for(var $$key_5 in $$dict_4)
        {
            var $v_4 = {
                    key: $$key_5,
                    value: $$dict_4[$$key_5]
                },
                $v_5 = $v_4.value.events;
            if($v_5)
            {
                var $$dict_8 = $v_5;
                for(var $$key_9 in $$dict_8)
                {
                    var $v_6 = {
                        key: $$key_9,
                        value: $$dict_8[$$key_9]
                    };
                    if(isNullOrEmptyString($v_6.key)) continue;
                    if(!($v_6.key in $v_3)) $v_3[$v_6.key] = 0;
                    $v_3[$v_6.key] = $v_3[$v_6.key] + $v_6.value.length
                }
                $v_2++
            }
        }
        $v_0.ObjectCounts["Total Objects With Events"] = $v_2;
        Mscrm.Performance.GlobalObjectTrackingManager.$7k($v_3, $v_0)
    }
    return $v_0
};
Mscrm.Performance.GlobalObjectTrackingManager.$8a = function()
{
    var $v_0 = null,
        $v_1 = $find("crmCacheManager");
    if(!IsNull($v_1))
    {
        var $v_2 = $v_1._data;
        if(!IsNull($v_2))
        {
            $v_0 = new Mscrm.Performance.ObjectCountsInfo("CRM Cache Objects");
            $v_0.ObjectCounts["Total Cache Objects"] = Mscrm.InternalUtilities._Dictionary.count($v_2)
        }
    }
    return $v_0
};
Mscrm.Performance.GlobalObjectTrackingManager.$8d = function()
{
    var $v_0 = null,
        $v_1 = $find("crmContentPanel");
    if(!IsNull($v_1))
    {
        var $v_2 = $v_1._iframeMgr,
            $v_3 = $v_2._frameList;
        if(!IsNull($v_3))
        {
            $v_0 = new Mscrm.Performance.ObjectCountsInfo("IFrameManager Frame List");
            $v_0.ObjectCounts["Total Iframes"] = Mscrm.InternalUtilities._Dictionary.count($v_3)
        }
    }
    return $v_0
};
Mscrm.Performance.GlobalObjectTrackingManager.$8g = function()
{
    var $v_0 = new Mscrm.Performance.ObjectCountsInfo("CRM InlineDialog");
    $v_0.ObjectCounts["Total InlineDialogs"] = Mscrm.InternalUtilities._Dictionary.count(Mscrm.InlineDialog.get_allInlineDialogs());
    return $v_0
};
Mscrm.Performance.GlobalObjectTrackingManager.$8b = function()
{
    var $v_0 = null,
        $v_1 = Mscrm.CommandBarControl.get_AllCommands();
    if($v_1)
    {
        $v_0 = new Mscrm.Performance.ObjectCountsInfo("CRM Commands");
        $v_0.ObjectCounts["Total CRM Commands"] = $v_1.length;
        for(var $v_2 = {}, $v_3 = 0; $v_3 < $v_1.length; $v_3++)
        {
            var $v_4 = Mscrm.Performance.GlobalObjectTrackingManager.inferClassName($v_1[$v_3]);
            if(Mscrm.InternalUtilities._String.isNullOrEmpty($v_4)) continue;
            if(!($v_4 in $v_2)) $v_2[$v_4] = 0;
            $v_2[$v_4] = $v_2[$v_4] + 1
        }
        var $$dict_5 = $v_2;
        for(var $$key_6 in $$dict_5)
        {
            var $v_5 = {
                key: $$key_6,
                value: $$dict_5[$$key_6]
            };
            $v_0.ObjectCounts[$v_5.key] = $v_5.value
        }
    }
    return $v_0
};
Mscrm.Performance.GlobalObjectTrackingManager.$8c = function()
{
    var $v_0 = new Mscrm.Performance.ObjectCountsInfo("CRM Event Subscribers"),
        $v_1 = Mscrm.PageManager.get_instance().$9_1._eventSubscribers,
        $v_2 = 0,
        $$dict_3 = $v_1;
    for(var $$key_4 in $$dict_3)
    {
        var $v_3 = {
                key: $$key_4,
                value: $$dict_3[$$key_4]
            },
            $v_4 = $v_3.value;
        $v_0.ObjectCounts[$v_3.key] = $v_4.length;
        $v_2 += $v_4.length
    }
    $v_0.ObjectCounts["Total CRM Event Subscribers"] = $v_2;
    return $v_0
};
Mscrm.Performance.GlobalObjectTrackingManager.$8e = function($p0, $p1)
{
    if(!$p1) return null;
    var $v_0 = Mscrm.Performance.GlobalObjectTrackingManager.$AF($p1);
    if(!$v_0 || !Mscrm.InternalUtilities._Dictionary.count($v_0)) return null;
    var $v_1 = new Mscrm.Performance.ObjectCountsInfo($p0);
    Mscrm.Performance.GlobalObjectTrackingManager.$7k($v_0, $v_1);
    return $v_1
};
Mscrm.Performance.GlobalObjectTrackingManager.$AF = function($p0)
{
    var $v_0 = {};
    if(!$p0) return $v_0;
    var $v_1 = $p0._list;
    if(!$v_1) return $v_0;
    var $$dict_3 = $v_1;
    for(var $$key_4 in $$dict_3)
    {
        var $v_2 = {
            key: $$key_4,
            value: $$dict_3[$$key_4]
        };
        if(Mscrm.InternalUtilities._String.isNullOrEmpty($v_2.key)) continue;
        if(!($v_2.key in $v_0)) $v_0[$v_2.key] = 0;
        $v_0[$v_2.key] = $v_0[$v_2.key] + $v_2.value.length
    }
    return $v_0
};
Mscrm.Performance.GlobalObjectTrackingManager.$7k = function($p0, $p1)
{
    if(!$p0 || !$p1) return;
    var $v_0 = 0,
        $$dict_3 = $p0;
    for(var $$key_4 in $$dict_3)
    {
        var $v_1 = {
            key: $$key_4,
            value: $$dict_3[$$key_4]
        };
        $p1.ObjectCounts[$v_1.key] = $v_1.value;
        $v_0 += $v_1.value
    }
    $p1.ObjectCounts["Total Handlers"] = $v_0
};
Mscrm.Performance.GlobalObjectTrackingManager.inferClassName = function(value)
{
    if(!value) return "";
    var $v_0 = Object.getType(value).toString();
    $v_0 = $v_0.substr($v_0.indexOf("{") + 1);
    $v_0 = $v_0.substr(0, $v_0.indexOf("("));
    return $v_0
};
Mscrm.Performance.ObjectCountsInfo = function(description)
{
    this.Description = description;
    this.ObjectCounts = {}
};
Mscrm.Performance.ObjectCountsInfo.prototype = {
    Description: null,
    ObjectCounts: null
};
Mscrm.Performance.PerformanceMarker = function()
{
    this.linkedMarkers = {};
    this.id = Mscrm.Performance.PerformanceMarker.$4Y.toString();
    Mscrm.Performance.PerformanceMarker.$4Y++
};
Mscrm.Performance.PerformanceMarker.prototype = {
    id: null,
    name: null,
    parameter: null,
    timestamp: 0,
    type: 0,
    toString: function()
    {
        var $v_0 = this.name;
        if(!isNullOrEmptyString(this.parameter)) $v_0 += String.format(" - {0}", this.parameter);
        return $v_0
    }
};
Mscrm.Performance.PerformanceStopwatch = function(name)
{
    this.name = name
};
Mscrm.Performance.PerformanceStopwatch.createRetroactiveStopwatch = function(name, startTime, stopTime)
{
    var $v_0 = new Mscrm.Performance.PerformanceStopwatch(name);
    $v_0.start();
    $v_0.stop();
    if($v_0.startMarker) $v_0.startMarker.timestamp = startTime;
    if($v_0.stopMarker) $v_0.stopMarker.timestamp = stopTime;
    return $v_0
};
Mscrm.Performance.PerformanceStopwatch.prototype = {
    name: null,
    startMarker: null,
    stopMarker: null,
    start: function()
    {
        this.startMarker = Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker(this.name);
        if(!this.startMarker) return
    },
    stop: function()
    {
        this.stopMarker = Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker(this.name);
        if(!this.stopMarker) return;
        if(!IsNull(this.startMarker))
        {
            this.stopMarker.linkedMarkers["StartMarker"] = this.startMarker.id;
            this.startMarker.linkedMarkers["StopMarker"] = this.stopMarker.id
        }
    },
    setParameter: function(parameter)
    {
        if(this.stopMarker) this.stopMarker.parameter = parameter
    },
    get_elapsedMilliseconds: function()
    {
        if(this.startMarker && this.stopMarker) return this.stopMarker.timestamp - this.startMarker.timestamp;
        return -1
    }
};
Mscrm.Performance.PerformanceMarkerManager = function()
{
    this.$18_0 = {};
    this.$4X_0 = Mscrm.CrmLocalStorage.getItem("PerformanceMarker.isEnabled") === "1"
};
Mscrm.Performance.PerformanceMarkerManager.get_instance = function()
{
    if(!Mscrm.Performance.PerformanceMarkerManager.$z)
    {
        if(window.top !== window.self) try
        {
            if(window.top.Mscrm && window.top.Mscrm.Performance)
            {
                var $v_0 = window.top.Mscrm.Performance.PerformanceMarkerManager;
                Mscrm.Performance.PerformanceMarkerManager.$z = $v_0.get_instance()
            }
        }
        catch($$e_1)
        {}
        if(!Mscrm.Performance.PerformanceMarkerManager.$z) Mscrm.Performance.PerformanceMarkerManager.$z = new Mscrm.Performance.PerformanceMarkerManager
    }
    return Mscrm.Performance.PerformanceMarkerManager.$z
};
Mscrm.Performance.PerformanceMarkerManager.prototype = {
    $4Y_0: 0,
    $5l_0: 3e3,
    $9u_0: 50,
    $4X_0: false,
    get_isEnabled: function()
    {
        return this.$4X_0
    },
    set_isEnabled: function(value)
    {
        Mscrm.CrmLocalStorage.setItem("PerformanceMarker.isEnabled", value ? "1" : "0");
        this.$4X_0 = value;
        return value
    },
    addMarker: function(key, type)
    {
        if(!this.$4X_0) return null;
        var $v_0 = (new Date).getTime(),
            $v_1 = new Mscrm.Performance.PerformanceMarker;
        $v_1.name = key;
        $v_1.timestamp = $v_0;
        $v_1.type = type;
        this.$18_0[$v_1.id] = $v_1;
        this.$Aj_0();
        return $v_1
    },
    addRetroactiveMarker: function(key, type, time)
    {
        if(IsNull(time) || !time) return null;
        var $v_0 = this.addMarker(key, type);
        if($v_0) $v_0.timestamp = time;
        return $v_0
    },
    addRetroactiveStopwatch: function(key, startTime, stopTime)
    {
        if(IsNull(startTime) || IsNull(stopTime) || !startTime || !stopTime || !(stopTime - startTime)) return null;
        return Mscrm.Performance.PerformanceStopwatch.createRetroactiveStopwatch(key, startTime, stopTime)
    },
    addUIMarker: function(key, type)
    {
        if(!this.get_isEnabled()) return null;
        var $v_0 = this.addMarker(key, type),
            $$t_4 = this,
            $v_1 = function()
            {
                $v_0.timestamp = (new Date).getTime()
            };
        window.setTimeout($v_1, 0);
        return $v_0
    },
    $Aj_0: function()
    {
        if(this.$5l_0 >= 0)
        {
            var $v_0 = this.count(),
                $v_1 = $v_0 - this.$5l_0;
            if($v_1 >= this.$9u_0)
                for(var $v_2 = this.$4Y_0 - this.$5l_0, $v_3 = $v_2 - $v_1, $v_4 = $v_3; $v_4 < $v_2; $v_4++) delete this.$18_0[$v_4.toString()]
        }
    },
    get_allMarkers: function()
    {
        return this.$18_0
    },
    get_allMarkersJson: function()
    {
        return Sys.Serialization.JavaScriptSerializer.serialize(this.$18_0)
    },
    count: function()
    {
        var $v_0 = 0,
            $$dict_1 = this.$18_0;
        for(var $$key_2 in $$dict_1)
        {
            var $v_1 = {
                key: $$key_2,
                value: $$dict_1[$$key_2]
            };
            $v_0++
        }
        return $v_0
    },
    getMarkerById: function(id)
    {
        return this.$18_0[id]
    },
    clearAllMarkers: function()
    {
        this.$18_0 = {}
    },
    clearAllMarkersCreatedBefore: function(timestamp)
    {
        var $v_0 = [],
            $$dict_2 = this.$18_0;
        for(var $$key_3 in $$dict_2)
        {
            var $v_1 = {
                    key: $$key_3,
                    value: $$dict_2[$$key_3]
                },
                $v_2 = $v_1.value;
            $v_2 && $v_2.timestamp < timestamp && Array.add($v_0, $v_1.key)
        }
        for(var $v_3 = 0; $v_3 < $v_0.length; $v_3++) delete this.$18_0[$v_0[$v_3]]
    }
};
Type.registerNamespace("Mscrm.Proxies");
Mscrm.Proxies.ICrmEncodeDecodeProxy = function() {};
Mscrm.Proxies.ICrmEncodeDecodeProxy.registerInterface("Mscrm.Proxies.ICrmEncodeDecodeProxy");
Mscrm.Proxies.ICrmUriProxy = function() {};
Mscrm.Proxies.ICrmUriProxy.registerInterface("Mscrm.Proxies.ICrmUriProxy");
Mscrm.Proxies.IDomElementProxy = function() {};
Mscrm.Proxies.IDomElementProxy.registerInterface("Mscrm.Proxies.IDomElementProxy");
Mscrm.Proxies.IDomHelperProxy = function() {};
Mscrm.Proxies.IDomHelperProxy.registerInterface("Mscrm.Proxies.IDomHelperProxy");
Mscrm.Proxies.IImageStripProxy = function() {};
Mscrm.Proxies.IImageStripProxy.registerInterface("Mscrm.Proxies.IImageStripProxy");
Mscrm.Proxies.ILookupControlItemProxy = function() {};
Mscrm.Proxies.ILookupControlItemProxy.registerInterface("Mscrm.Proxies.ILookupControlItemProxy");
Mscrm.Proxies.IPresenceControlProxy = function() {};
Mscrm.Proxies.IPresenceControlProxy.registerInterface("Mscrm.Proxies.IPresenceControlProxy");
Mscrm.Proxies.IPresenceHelperProxy = function() {};
Mscrm.Proxies.IPresenceHelperProxy.registerInterface("Mscrm.Proxies.IPresenceHelperProxy");
Mscrm.Proxies.IPresenceInfoProxy = function() {};
Mscrm.Proxies.IPresenceInfoProxy.registerInterface("Mscrm.Proxies.IPresenceInfoProxy");
Mscrm.Proxies.IRemoteCommandProxy = function() {};
Mscrm.Proxies.IRemoteCommandProxy.registerInterface("Mscrm.Proxies.IRemoteCommandProxy");
Mscrm.Proxies.IRemoteCommandResultProxy = function() {};
Mscrm.Proxies.IRemoteCommandResultProxy.registerInterface("Mscrm.Proxies.IRemoteCommandResultProxy");
Mscrm.Proxies.CrmEncodeDecodeProxy = function() {};
Mscrm.Proxies.CrmEncodeDecodeProxy.prototype = {
    crmHtmlAttributeEncode: function(attributeValue)
    {
        return CrmEncodeDecode.CrmHtmlAttributeEncode(attributeValue)
    },
    crmHtmlEncode: function(value)
    {
        return CrmEncodeDecode.CrmHtmlEncode(value)
    },
    crmUrlEncode: function(value)
    {
        return CrmEncodeDecode.CrmUrlEncode(value)
    },
    crmHtmlDecode: function(value)
    {
        return CrmEncodeDecode.CrmHtmlDecode(value)
    }
};
Mscrm.Proxies.CrmUriProxy = function() {};
Mscrm.Proxies.CrmUriProxy.prototype = {
    $0_0: null,
    get_element: function()
    {
        return this.$0_0
    },
    set_element: function(value)
    {
        this.$0_0 = value;
        return value
    },
    toString: function()
    {
        var $v_0 = null;
        if(!IsNull(this.$0_0)) $v_0 = this.$0_0.toString();
        return $v_0
    }
};
Mscrm.Proxies.DomElementProxy = function() {};
Mscrm.Proxies.DomElementProxy.prototype = {
    $0_0: null,
    get_element: function()
    {
        return this.$0_0
    },
    set_element: function(value)
    {
        this.$0_0 = value;
        return value
    },
    get_tagName: function()
    {
        if(IsNull(this.$0_0)) return "";
        return this.$0_0.tagName
    },
    set_tagName: function(value)
    {
        throw Error.invalidOperation("Mscrm.Proxies.DomElementProxy.TagName: Setter is used for unit testing and should not be consumed in production code.");
        return value
    },
    get_className: function()
    {
        if(IsNull(this.$0_0)) return "";
        return this.$0_0.className
    },
    set_className: function(value)
    {
        if(IsNull(this.$0_0)) return value;
        this.$0_0.className = value;
        return value
    },
    get_firstChild: function()
    {
        if(IsNull(this.$0_0)) return null;
        var $v_0 = new Mscrm.Proxies.DomElementProxy;
        $v_0.set_element(XUI.Html.DomUtils.GetFirstChild(this.$0_0));
        return $v_0
    },
    get_innerText: function()
    {
        if(IsNull(this.$0_0)) return "";
        return XUI.Html.GetText(this.$0_0)
    },
    set_innerText: function(value)
    {
        if(IsNull(this.$0_0)) return value;
        XUI.Html.SetText(this.$0_0, value);
        return value
    },
    get_parentNode: function()
    {
        if(IsNull(this.$0_0)) return null;
        var $v_0 = new Mscrm.Proxies.DomElementProxy;
        $v_0.set_element(this.$0_0.parentNode);
        return $v_0
    },
    set_parentNode: function(value)
    {
        throw Error.invalidOperation("Mscrm.Proxies.DomElementProxy.ParentNode: Setter is used for unit testing and should not be consumed in production code.");
        return value
    },
    get_title: function()
    {
        if(IsNull(this.$0_0)) return "";
        return this.$0_0.title
    },
    set_title: function(value)
    {
        if(IsNull(this.$0_0)) return value;
        this.$0_0.title = value;
        return value
    },
    get_tabIndex: function()
    {
        if(IsNull(this.$0_0)) return -1;
        return this.$0_0.tabIndex
    },
    set_tabIndex: function(value)
    {
        if(IsNull(this.$0_0)) return value;
        this.$0_0.tabIndex = value;
        return value
    },
    setAttribute: function(attributeName, attributeValue)
    {
        if(IsNull(this.$0_0)) return;
        this.$0_0.setAttribute(attributeName, attributeValue)
    },
    getAttribute: function(attributeName)
    {
        if(IsNull(this.$0_0)) return null;
        return this.$0_0.getAttribute(attributeName)
    },
    insertBefore: function(elementToInsert, childElement)
    {
        if(IsNull(this.$0_0) || IsNull(elementToInsert) || IsNull(elementToInsert.get_element())) return;
        if(IsNull(childElement)) this.$0_0.insertBefore(elementToInsert.get_element());
        else this.$0_0.insertBefore(elementToInsert.get_element(), childElement.get_element())
    },
    outerHtml: function()
    {
        if(IsNull(this.$0_0)) return "";
        return XUI.Html.GetOuterHTML(this.$0_0)
    },
    querySelector: function(selectors)
    {
        if(IsNull(this.$0_0)) return null;
        var $v_0 = this.$0_0.querySelector(selectors);
        if(IsNull($v_0)) return null;
        var $v_1 = new Mscrm.Proxies.DomElementProxy;
        $v_1.set_element($v_0);
        return $v_1
    },
    replaceChild: function(newChild, oldChild)
    {
        if(IsNull(this.$0_0)) return null;
        var $v_0 = this.$0_0.replaceChild(newChild.get_element(), oldChild.get_element()),
            $v_1 = new Mscrm.Proxies.DomElementProxy;
        $v_1.set_element($v_0);
        return $v_1
    }
};
Mscrm.Proxies.DomHelperProxy = function() {};
Mscrm.Proxies.DomHelperProxy.prototype = {
    getFirstChild: function(elementProxy)
    {
        if(IsNull(elementProxy) || IsNull(elementProxy.get_element())) return null;
        var $v_0 = new Mscrm.Proxies.DomElementProxy;
        $v_0.set_element(XUI.Html.DomUtils.GetFirstChild(elementProxy.get_element()));
        return $v_0
    },
    addEventHandler: function(elementProxy, eventName, eventHandler)
    {
        if(IsNull(elementProxy) || IsNull(elementProxy.get_element()) || isNullOrEmptyString(eventName) || IsNull(eventHandler)) return;
        $addHandler(elementProxy.get_element(), eventName, eventHandler)
    },
    clearEventHandlers: function(element)
    {
        $clearHandlers(element.get_element())
    },
    createElement: function(tagName)
    {
        if(isNullOrEmptyString(tagName)) return null;
        var $v_0 = new Mscrm.Proxies.DomElementProxy;
        $v_0.set_element(window.document.createElement(tagName));
        return $v_0
    }
};
Mscrm.Proxies.ImageStripProxy = function() {};
Mscrm.Proxies.ImageStripProxy.prototype = {
    getImage: function(imageUri)
    {
        var $v_0 = new Mscrm.Proxies.DomElementProxy;
        $v_0.set_element(Mscrm.ImageStrip.getImage(imageUri.get_element()));
        return $v_0
    },
    getImageFromPath: function(path)
    {
        var $v_0 = new Mscrm.Proxies.CrmUriProxy;
        $v_0.set_element(Mscrm.CrmUri.create(path));
        return this.getImage($v_0)
    },
    getIconPath: function(entityTypeCode)
    {
        var $v_0 = new Mscrm.Proxies.CrmUriProxy;
        $v_0.set_element(Mscrm.CrmUri.create(Mscrm.Utilities.getIconPath(entityTypeCode)));
        return $v_0
    }
};
Mscrm.Proxies.LookupControlItemProxy = function() {};
Mscrm.Proxies.LookupControlItemProxy.prototype = {
    $0_0: null,
    get_element: function()
    {
        return this.$0_0
    },
    set_element: function(value)
    {
        this.$0_0 = value;
        return value
    },
    get_displayClass: function()
    {
        if(IsNull(this.$0_0)) return "";
        return this.$0_0.displayClass
    },
    set_displayClass: function(value)
    {
        if(IsNull(this.$0_0)) return value;
        this.$0_0.displayClass = value;
        return value
    },
    get_name: function()
    {
        if(IsNull(this.$0_0)) return "";
        return this.$0_0.name
    },
    set_name: function(value)
    {
        if(IsNull(this.$0_0)) return value;
        this.$0_0.name = value;
        return value
    },
    get_callback: function()
    {
        if(IsNull(this.$0_0)) return "";
        return this.$0_0.callback
    },
    set_callback: function(value)
    {
        if(IsNull(this.$0_0)) return value;
        this.$0_0.callback = value;
        return value
    },
    get_typeName: function()
    {
        if(IsNull(this.$0_0)) return "";
        return this.$0_0.typename
    },
    set_typeName: function(value)
    {
        if(IsNull(this.$0_0)) return value;
        this.$0_0.typename = value;
        return value
    },
    get_type: function()
    {
        if(IsNull(this.$0_0)) return "";
        return this.$0_0.type
    },
    set_type: function(value)
    {
        if(IsNull(this.$0_0)) return value;
        this.$0_0.type = value;
        return value
    },
    get_id: function()
    {
        if(IsNull(this.$0_0)) return "";
        return this.$0_0.id
    },
    set_id: function(value)
    {
        if(IsNull(this.$0_0)) return value;
        this.$0_0.id = value;
        return value
    },
    get_category: function()
    {
        if(IsNull(this.$0_0)) return -1;
        return this.$0_0.category
    },
    set_category: function(value)
    {
        if(IsNull(this.$0_0)) return value;
        this.$0_0.category = value;
        return value
    }
};
Mscrm.Proxies.PresenceControlProxy = function()
{
    this.$$d_$A7_0 = Function.createDelegate(this, this.$A7_0);
    this.$3h_0 = new Sys.EventHandlerList
};
Mscrm.Proxies.PresenceControlProxy.prototype = {
    $0_0: null,
    add_onPresenceStatusChange: function(value)
    {
        this.$3h_0.addHandler("OnPresenceStatusChange", value)
    },
    remove_onPresenceStatusChange: function(value)
    {
        this.$3h_0.removeHandler("OnPresenceStatusChange", value)
    },
    get_element: function()
    {
        return this.$0_0
    },
    set_element: function(value)
    {
        if(IsNull(this.get_element()))
        {
            this.$0_0 = value;
            if(!IsNull(this.get_element()) && this.get_element().PresenceEnabled) this.get_element().OnStatusChange = this.$$d_$A7_0
        }
        return value
    },
    get_presenceEnabled: function()
    {
        if(IsNull(this.get_element())) return false;
        return this.get_element().PresenceEnabled
    },
    set_presenceEnabled: function(value)
    {
        throw Error.notImplemented();
        return value
    },
    getStatus: function(sipId, elementId)
    {
        var $v_0 = new Mscrm.Presence.PresenceStatus;
        $v_0.set_status(18);
        !IsNull(this.get_element()) && $v_0.set_status(this.get_element().GetStatus(sipId, elementId));
        return $v_0
    },
    showContactCard: function(sipId, inputType, locationX, locationY)
    {
        !IsNull(this.get_element()) && this.get_element().ShowOOUI(sipId, inputType, locationX, locationY)
    },
    hideContactCard: function()
    {
        !IsNull(this.get_element()) && this.get_element().HideOOUI()
    },
    focusContactCard: function()
    {
        !IsNull(this.get_element()) && this.get_element().DoAccelerator()
    },
    dispose: function()
    {
        if(!IsNull(this.get_element()))
        {
            this.get_element().OnStatusChange = null;
            this.set_element(null)
        }
    },
    $A7_0: function($p0, $p1, $p2)
    {
        var $v_0 = this.$3h_0.getHandler("OnPresenceStatusChange");
        if(!IsNull($v_0))
        {
            var $v_1 = new Mscrm.Presence.PresenceStatusChangeArgs;
            $v_1.$5J_1 = $p0;
            var $v_2 = new Mscrm.Presence.PresenceStatus;
            $v_2.set_status($p1);
            $v_1.$2b_1 = $v_2;
            $v_1.$4r_1 = $p2;
            $v_0(this, $v_1)
        }
    }
};
Mscrm.Proxies.PresenceHelperProxy = function() {};
Mscrm.Proxies.PresenceHelperProxy.prototype = {
    isPresenceType: function(entityTypeCode)
    {
        return IsPresenceType(entityTypeCode)
    },
    hasSipAttribute: function(elementProxy)
    {
        return hasSipAttribute(elementProxy.get_element())
    },
    createPresenceControlInstance: function()
    {
        var $v_0 = createPresenceControlInstance(),
            $v_1 = new Mscrm.Proxies.PresenceControlProxy;
        $v_1.set_element($v_0);
        return $v_1
    },
    getPresenceUri: function(state)
    {
        var $v_0 = Mscrm.CrmUri.create(state === -1 ? "/_imgs/imagestrips/transparent_spacer.gif" : getPresenceUri(state)),
            $v_1 = new Mscrm.Proxies.CrmUriProxy;
        $v_1.set_element($v_0);
        return $v_1
    },
    getImageLocation: function(imageElementProxy)
    {
        var $v_0 = getImageLocation(imageElementProxy.get_element()),
            $v_1 = new Mscrm.Presence.PresenceLocation($v_0);
        return $v_1
    },
    addSipRequest: function(recordId, entityTypeCode)
    {
        return addSipRequest(recordId, entityTypeCode)
    },
    createPresenceInfoArray: function(result)
    {
        var $v_0 = createPresenceInfoArray(result.get_element());
        if(IsNull($v_0)) return new Array(0);
        for(var $v_1 = new Array($v_0.length), $v_2 = 0; $v_2 < $v_0.length; $v_2++)
        {
            $v_1[$v_2] = new Mscrm.Proxies.PresenceInfoProxy;
            $v_1[$v_2].set_element($v_0[$v_2])
        }
        return $v_1
    }
};
Mscrm.Proxies.PresenceInfoProxy = function() {};
Mscrm.Proxies.PresenceInfoProxy.prototype = {
    $0_0: null,
    get_element: function()
    {
        return this.$0_0
    },
    set_element: function(value)
    {
        this.$0_0 = value;
        return value
    },
    get_recordId: function()
    {
        return IsNull(this.$0_0) ? null : this.$0_0.oid.toString()
    },
    set_recordId: function(value)
    {
        if(IsNull(this.$0_0)) return value;
        this.$0_0.oid = value;
        return value
    },
    get_sipId: function()
    {
        return IsNull(this.$0_0) ? null : this.$0_0.sipuri.toString()
    },
    set_sipId: function(value)
    {
        if(IsNull(this.$0_0)) return value;
        this.$0_0.sipuri = value;
        return value
    }
};
Mscrm.Proxies.RemoteCommandProxy = function() {};
Mscrm.Proxies.RemoteCommandProxy.prototype = {
    $0_0: null,
    get_element: function()
    {
        return this.$0_0
    },
    set_element: function(value)
    {
        this.$0_0 = value;
        return value
    },
    execute: function(callback)
    {
        if(IsNull(this.$0_0)) return;
        var $$t_4 = this;
        this.$0_0.Execute(function($p1_0, $p1_1)
        {
            var $v_0 = new Mscrm.Proxies.RemoteCommandResultProxy;
            $v_0.set_element($p1_0);
            callback($v_0, $$t_4)
        })
    },
    setParameter: function(name, value)
    {
        if(IsNull(this.$0_0)) return;
        this.$0_0.SetParameter(name, value)
    }
};
Mscrm.Proxies.RemoteCommandResultProxy = function() {};
Mscrm.Proxies.RemoteCommandResultProxy.prototype = {
    $0_0: null,
    get_element: function()
    {
        return this.$0_0
    },
    set_element: function(value)
    {
        this.$0_0 = value;
        return value
    },
    get_returnValue: function()
    {
        if(IsNull(this.$0_0)) return null;
        return this.$0_0.ReturnValue
    },
    set_returnValue: function(value)
    {
        throw Error.invalidOperation("Mscrm.Proxies.RemoteCommandResultProxy.ReturnValue: Setter is used for unit testing and should not be consumed in production code.");
        return value
    },
    get_success: function()
    {
        if(IsNull(this.$0_0)) return false;
        return this.$0_0.Success
    },
    set_success: function(value)
    {
        throw Error.invalidOperation("Mscrm.Proxies.RemoteCommandResultProxy.Success: Setter is used for unit testing and should not be consumed in production code.");
        return value
    }
};
Type.registerNamespace("Mscrm.Obsolete");

function getBrowserMajorVersion()
{
    return Sys.Browser.version
}

function getObjUrl(objectType)
{
    var $v_0 = Mscrm.WindowInformation.getWindowInformation(objectType);
    if(!IsNull($v_0)) return $v_0.Url;
    return null
}

function formatString()
{
    var $v_0 = arguments.length;
    if(!$v_0) return "";
    var $v_1 = arguments[0],
        $v_2;
    if($v_0 > 1 && isArray(arguments[1])) $v_2 = arguments[1];
    else
    {
        $v_2 = new Array($v_0 - 1);
        for(var $v_3 = 1; $v_3 < $v_0; $v_3++) $v_2[$v_3 - 1] = arguments[$v_3]
    }
    for(var $v_4 = 0; $v_4 < $v_2.length; $v_4++) $v_1 = $v_1.replace(new RegExp("\\{" + $v_4 + "\\}", "g"), $v_2[$v_4].toString());
    return $v_1
}

function StringBuilder()
{
    this.$48_0 = new Sys.StringBuilder;
    this.ToString = this.toString
}
StringBuilder.prototype = {
    Append: function(s)
    {
        this.$48_0.append(s)
    },
    Reset: function()
    {
        this.$48_0.clear()
    },
    toString: function()
    {
        return this.$48_0.toString()
    }
};
Mscrm.Obsolete.RenderVariables = function() {};
Mscrm.Obsolete.RenderVariables.$$cctor = function()
{
    var $$dict_0 = Mscrm.EntityTypeCode;
    for(var $$key_1 in $$dict_0)
    {
        var $v_0 = {
            key: $$key_1,
            value: $$dict_0[$$key_1]
        };
        window[$v_0.key] = $v_0.value
    }
    window.Import = 4410;
    var $$dict_3 = new Mscrm.FormFieldType;
    for(var $$key_4 in $$dict_3)
    {
        var $v_1 = {
            key: $$key_4,
            value: $$dict_3[$$key_4]
        };
        window[$v_1.key] = $v_1.value
    }
    var $$dict_6 = new Mscrm.KeyCode;
    for(var $$key_7 in $$dict_6)
    {
        var $v_2 = {
            key: $$key_7,
            value: $$dict_6[$$key_7]
        };
        window[$v_2.key] = $v_2.value
    }
    var $$dict_9 = new Mscrm.XmlError;
    for(var $$key_A in $$dict_9)
    {
        var $v_3 = {
            key: $$key_A,
            value: $$dict_9[$$key_A]
        };
        window[$v_3.key] = $v_3.value
    }
};
Mscrm.Obsolete.RenderVariables.removeVariables = function()
{
    var $$dict_0 = Mscrm.EntityTypeCode;
    for(var $$key_1 in $$dict_0)
    {
        var $v_0 = {
            key: $$key_1,
            value: $$dict_0[$$key_1]
        };
        window[$v_0.key] = null
    }
    window.Import = null;
    var $$dict_3 = new Mscrm.FormFieldType;
    for(var $$key_4 in $$dict_3)
    {
        var $v_1 = {
            key: $$key_4,
            value: $$dict_3[$$key_4]
        };
        window[$v_1.key] = null
    }
    var $$dict_6 = new Mscrm.KeyCode;
    for(var $$key_7 in $$dict_6)
    {
        var $v_2 = {
            key: $$key_7,
            value: $$dict_6[$$key_7]
        };
        window[$v_2.key] = null
    }
    var $$dict_9 = new Mscrm.XmlError;
    for(var $$key_A in $$dict_9)
    {
        var $v_3 = {
            key: $$key_A,
            value: $$dict_9[$$key_A]
        };
        window[$v_3.key] = null
    }
};
Type.registerNamespace("XUI");
Mscrm.DynamicMenuReturnValue.registerClass("Mscrm.DynamicMenuReturnValue");
Mscrm.EntityReference.registerClass("Mscrm.EntityReference");
Mscrm.Message.registerClass("Mscrm.Message");
Mscrm.ReportMenuReturnInformation.registerClass("Mscrm.ReportMenuReturnInformation");
Mscrm.ReportInformation.registerClass("Mscrm.ReportInformation");
Mscrm.ClientTabInfo.registerClass("Mscrm.ClientTabInfo");
Mscrm.RibbonDataInformation.registerClass("Mscrm.RibbonDataInformation");
Mscrm.RibbonDataTabInformation.registerClass("Mscrm.RibbonDataTabInformation");
Mscrm.RuleDefinition.registerClass("Mscrm.RuleDefinition");
Mscrm.RulePart.registerClass("Mscrm.RulePart");
Mscrm.OrBlockRulePart.registerClass("Mscrm.OrBlockRulePart");
Mscrm.OrGroup.registerClass("Mscrm.OrGroup");
Mscrm.EntityRulePart.registerClass("Mscrm.EntityRulePart");
Mscrm.EntityPropertyRulePart.registerClass("Mscrm.EntityPropertyRulePart");
Mscrm.FormEntityContextRulePart.registerClass("Mscrm.FormEntityContextRulePart");
Mscrm.PrivilegeRulePart.registerClass("Mscrm.PrivilegeRulePart");
Mscrm.MiscellaneousPrivilegeRulePart.registerClass("Mscrm.MiscellaneousPrivilegeRulePart");
Mscrm.FormStateRulePart.registerClass("Mscrm.FormStateRulePart");
Mscrm.FormTypeRulePart.registerClass("Mscrm.FormTypeRulePart");
Mscrm.OrganizationSettingRulePart.registerClass("Mscrm.OrganizationSettingRulePart");
Mscrm.ReferencingAttributeRequiredRulePart.registerClass("Mscrm.ReferencingAttributeRequiredRulePart");
Mscrm.ValueRulePart.registerClass("Mscrm.ValueRulePart");
Mscrm.ClientRulePart.registerClass("Mscrm.ClientRulePart");
Mscrm.CommandClientTypeRulePart.registerClass("Mscrm.CommandClientTypeRulePart");
Mscrm.OutlookClientRulePart.registerClass("Mscrm.OutlookClientRulePart");
Mscrm.OutlookVersionRulePart.registerClass("Mscrm.OutlookVersionRulePart");
Mscrm.CrmOutlookClientVersionRulePart.registerClass("Mscrm.CrmOutlookClientVersionRulePart");
Mscrm.OfflineAccessStateRulePart.registerClass("Mscrm.OfflineAccessStateRulePart");
Mscrm.OutlookRenderTypeRulePart.registerClass("Mscrm.OutlookRenderTypeRulePart");
Mscrm.OutlookItemTrackingRulePart.registerClass("Mscrm.OutlookItemTrackingRulePart");
Mscrm.RelationshipTypeRulePart.registerClass("Mscrm.RelationshipTypeRulePart");
Mscrm.SkuRulePart.registerClass("Mscrm.SkuRulePart");
Mscrm.SelectionCountRulePart.registerClass("Mscrm.SelectionCountRulePart");
Mscrm.JavaScriptRulePart.registerClass("Mscrm.JavaScriptRulePart");
Mscrm.PageRulePart.registerClass("Mscrm.PageRulePart");
Mscrm.OptionSetRulePart.registerClass("Mscrm.OptionSetRulePart");
Mscrm.RibbonActionHandler.registerClass("Mscrm.RibbonActionHandler");
Mscrm.UrlActionAttributes.registerClass("Mscrm.UrlActionAttributes");
Mscrm.JavaScriptActionAttributes.registerClass("Mscrm.JavaScriptActionAttributes");
Mscrm.JavaScriptFunctionAttributes.registerClass("Mscrm.JavaScriptFunctionAttributes");
Mscrm.OutlookActionAttributes.registerClass("Mscrm.OutlookActionAttributes");
Mscrm.RibbonParameter.registerClass("Mscrm.RibbonParameter");
Mscrm.NavigationAction.registerClass("Mscrm.NavigationAction");
Mscrm.NavigationNode.registerClass("Mscrm.NavigationNode");
Mscrm.LookupItemInfo.registerClass("Mscrm.LookupItemInfo");
Mscrm.NameValuePair.registerClass("Mscrm.NameValuePair");
Mscrm.Notification.registerClass("Mscrm.Notification");
Mscrm.PageHeaderData.registerClass("Mscrm.PageHeaderData");
Mscrm.MetricObject.registerClass("Mscrm.MetricObject");
Mscrm.ImageInfo.registerClass("Mscrm.ImageInfo");
Mscrm.TraceEntry.registerClass("Mscrm.TraceEntry");
Mscrm.RibbonKeyPressParameters.registerClass("Mscrm.RibbonKeyPressParameters");
Mscrm.CrashData.registerClass("Mscrm.CrashData");
Mscrm.ImageStripData.registerClass("Mscrm.ImageStripData");
Mscrm.AdvancedFindConstants.registerClass("Mscrm.AdvancedFindConstants");
Mscrm.SfaTabsConstants.registerClass("Mscrm.SfaTabsConstants");
Mscrm.RibbonCommandDefinition.registerClass("Mscrm.RibbonCommandDefinition");
Mscrm.ActionAttributes.registerClass("Mscrm.ActionAttributes");
Mscrm.RibbonSelectionDataType.registerClass("Mscrm.RibbonSelectionDataType");
Mscrm.NavigationMode.registerClass("Mscrm.NavigationMode");
Mscrm.NotificationSeverity.registerClass("Mscrm.NotificationSeverity");
Mscrm.NotificationSource.registerClass("Mscrm.NotificationSource");
Mscrm.RecordSetNavigation.registerClass("Mscrm.RecordSetNavigation");
Mscrm.ScriptEvents.registerClass("Mscrm.ScriptEvents");
Mscrm.InlineCommands.registerClass("Mscrm.InlineCommands");
Mscrm.InlineDataFormatTagName.registerClass("Mscrm.InlineDataFormatTagName");
Mscrm.RecordPrivilegeType.registerClass("Mscrm.RecordPrivilegeType");
Mscrm.RefreshCommandBarVisibilityRule.registerClass("Mscrm.RefreshCommandBarVisibilityRule");
Mscrm.RefreshFormMarker.registerClass("Mscrm.RefreshFormMarker");
Mscrm.IconUtil.registerClass("Mscrm.IconUtil");
Mscrm.InlineEditConstants.registerClass("Mscrm.InlineEditConstants");
Mscrm.NavBarSharedConstants.registerClass("Mscrm.NavBarSharedConstants");
Mscrm.RibbonConstants.registerClass("Mscrm.RibbonConstants");
Mscrm.RuleAppliesTo.registerClass("Mscrm.RuleAppliesTo");
Mscrm.RibbonRuleRelationshipType.registerClass("Mscrm.RibbonRuleRelationshipType");
Mscrm.RibbonContexts.registerClass("Mscrm.RibbonContexts");
Mscrm.BaseJsonResponse.registerClass("Mscrm.BaseJsonResponse");
Mscrm.ControlJsonResponse.registerClass("Mscrm.ControlJsonResponse", Mscrm.BaseJsonResponse);
Mscrm.PageJsonResponse.registerClass("Mscrm.PageJsonResponse", Mscrm.BaseJsonResponse);
Mscrm.HeaderJsonObject.registerClass("Mscrm.HeaderJsonObject");
Mscrm.ScriptJsonObject.registerClass("Mscrm.ScriptJsonObject");
Mscrm.StyleJsonObject.registerClass("Mscrm.StyleJsonObject");
Mscrm.TypeOfResource.registerClass("Mscrm.TypeOfResource");
Mscrm.AggregatePerformanceMarkers.registerClass("Mscrm.AggregatePerformanceMarkers");
Mscrm.AggregateMarker.registerClass("Mscrm.AggregateMarker");
Mscrm.ClientApiCollection.registerClass("Mscrm.ClientApiCollection");
Mscrm.GlobalContext.registerClass("Mscrm.GlobalContext", null, Xrm.Interfaces.IGlobalContext);
Mscrm.XrmPage.registerClass("Mscrm.XrmPage");
Mscrm.XrmSdkMessages.registerClass("Mscrm.XrmSdkMessages", null, Xrm.IXrmSdkMessages);
Mscrm.XrmPageContextClient.registerClass("Mscrm.XrmPageContextClient");
Mscrm.XrmUtility.registerClass("Mscrm.XrmUtility");
Mscrm.XrmInternal.registerClass("Mscrm.XrmInternal");
Mscrm.ClientApiEventHandlerList.registerClass("Mscrm.ClientApiEventHandlerList");
Mscrm.ClientApiEventHandlerListUtility.registerClass("Mscrm.ClientApiEventHandlerListUtility");
Mscrm.ExecutionContext.registerClass("Mscrm.ExecutionContext", null, Xrm.Interfaces.IExecutionContext);
Mscrm.DialogSize.registerClass("Mscrm.DialogSize");
Mscrm.EntityTypeCode.registerClass("Mscrm.EntityTypeCode");
Mscrm.EtcUtil.registerClass("Mscrm.EtcUtil");
Mscrm.ProductStructure.registerClass("Mscrm.ProductStructure");
Mscrm.DynamicPropertyDataType.registerClass("Mscrm.DynamicPropertyDataType");
Mscrm.DynamicPropertyIsReadOnly.registerClass("Mscrm.DynamicPropertyIsReadOnly");
Mscrm.DynamicPropertyIsRequired.registerClass("Mscrm.DynamicPropertyIsRequired");
Mscrm.DynamicPropertyIsHidden.registerClass("Mscrm.DynamicPropertyIsHidden");
Mscrm.ProductStatusCode.registerClass("Mscrm.ProductStatusCode");
Mscrm.ProductStateCode.registerClass("Mscrm.ProductStateCode");
Mscrm.ProductStateCodeDescription.registerClass("Mscrm.ProductStateCodeDescription");
Mscrm.EventKeys.registerClass("Mscrm.EventKeys");
Mscrm.LocaleIds.registerClass("Mscrm.LocaleIds");
Mscrm.NavBarStatusConstant.registerClass("Mscrm.NavBarStatusConstant");
Mscrm.SolutionComponentType.registerClass("Mscrm.SolutionComponentType");
Mscrm.WebResourceConstants.registerClass("Mscrm.WebResourceConstants");
Mscrm.CrmUIComponent.registerClass("Mscrm.CrmUIComponent", Sys.Component, Mscrm.ICrmEventableComponent);
Mscrm.DialogsControl.registerClass("Mscrm.DialogsControl", Mscrm.CrmUIComponent);
Mscrm.CrmHeader.registerClass("Mscrm.CrmHeader");
Mscrm.IncludeLoader.registerClass("Mscrm.IncludeLoader");
Mscrm.ScriptLoader.registerClass("Mscrm.ScriptLoader", Mscrm.IncludeLoader);
Mscrm.StyleLoader.registerClass("Mscrm.StyleLoader", Mscrm.IncludeLoader);
Mscrm.Dialog.registerClass("Mscrm.Dialog", Mscrm.CrmUIComponent, Mscrm.IDialog);
Mscrm.MenuItem.registerClass("Mscrm.MenuItem", Mscrm.CrmUIComponent, Mscrm.IMenuItem);
Mscrm.InlineMenuItem.registerClass("Mscrm.InlineMenuItem", Mscrm.MenuItem);
Mscrm.Menu.registerClass("Mscrm.Menu", Mscrm.CrmUIComponent, Mscrm.IMenu, Mscrm.IMenuItem);
Mscrm.MenuItemSeparator.registerClass("Mscrm.MenuItemSeparator", Mscrm.MenuItem);
Mscrm.MenuStyles.registerClass("Mscrm.MenuStyles");
Mscrm.AddActivity.registerClass("Mscrm.AddActivity");
Mscrm.CrmBrowser.registerClass("Mscrm.CrmBrowser");
Mscrm.BpfConfiguratorUtils.registerClass("Mscrm.BpfConfiguratorUtils");
Mscrm.RecentlyViewedItem.registerClass("Mscrm.RecentlyViewedItem");
Mscrm.CrmUIControl.registerClass("Mscrm.CrmUIControl", Sys.UI.Control, Mscrm.ICrmEventableComponent, Mscrm.ICrmResizeableControl);
Mscrm.UIControl.registerClass("Mscrm.UIControl", Mscrm.CrmUIControl, Mscrm.IUIControl);
Mscrm.CrmUIBehavior.registerClass("Mscrm.CrmUIBehavior", Sys.UI.Behavior, Mscrm.ICrmEventableComponent);
Mscrm.CurrencyValidator.registerClass("Mscrm.CurrencyValidator");
Mscrm.CrmEventArgs.registerClass("Mscrm.CrmEventArgs", Sys.EventArgs);
Mscrm.CrmUri.registerClass("Mscrm.CrmUri");
Mscrm.CrmOneNoteUri.registerClass("Mscrm.CrmOneNoteUri", Mscrm.CrmUri);
Mscrm.CallbackFunctionObject.registerClass("Mscrm.CallbackFunctionObject");
Mscrm.CrmWindow.registerClass("Mscrm.CrmWindow");
Mscrm.CrmDialog.registerClass("Mscrm.CrmDialog");
Mscrm.ReturnFunctionReference.registerClass("Mscrm.ReturnFunctionReference");
Mscrm.DateTimeUtility.registerClass("Mscrm.DateTimeUtility");
Mscrm.CrmDebug.registerClass("Mscrm.CrmDebug");
Mscrm.DeferredActionHandlerFactory.registerClass("Mscrm.DeferredActionHandlerFactory");
Mscrm.DefaultDeferredActionHandler.registerClass("Mscrm.DefaultDeferredActionHandler", null, Mscrm.ICrmDeferredActionHandler);
Mscrm.RecordUpdatedHandler.registerClass("Mscrm.RecordUpdatedHandler", null, Mscrm.ICrmDeferredActionHandler);
Mscrm.Display.registerClass("Mscrm.Display");
Mscrm.ErrorInformation.registerClass("Mscrm.ErrorInformation");
Mscrm.EventManager.registerClass("Mscrm.EventManager", Sys.Component);
Mscrm.ExceptionInformation.registerClass("Mscrm.ExceptionInformation");
Mscrm.FloatingDialog.registerClass("Mscrm.FloatingDialog");
Mscrm.Form.registerClass("Mscrm.Form");
Mscrm.FormControlInputBehavior.registerClass("Mscrm.FormControlInputBehavior", Mscrm.CrmUIBehavior, Mscrm.ICrmUIFormDataComponent);
Mscrm.ValidationResult.registerClass("Mscrm.ValidationResult");
Mscrm.ButtonUtils.registerClass("Mscrm.ButtonUtils");
Mscrm.FormEditor.registerClass("Mscrm.FormEditor");
Mscrm.Rte.registerClass("Mscrm.Rte");
Mscrm.WebResourceUtils.registerClass("Mscrm.WebResourceUtils");
Mscrm.ItemObject.registerClass("Mscrm.ItemObject");
Mscrm.GlobalEvents.registerClass("Mscrm.GlobalEvents");
Mscrm.Grid.registerClass("Mscrm.Grid");
Mscrm.Help.registerClass("Mscrm.Help");
Mscrm.ImageStrip.registerClass("Mscrm.ImageStrip");
Mscrm.TypeNames.registerClass("Mscrm.TypeNames");
Mscrm.ClassNames.registerClass("Mscrm.ClassNames");
Mscrm.InlineContentLoader.registerClass("Mscrm.InlineContentLoader");
Mscrm.NumberUtility.registerClass("Mscrm.NumberUtility");
Mscrm.PagePreloadInfo.registerClass("Mscrm.PagePreloadInfo");
Mscrm.PerformanceTracing.registerClass("Mscrm.PerformanceTracing");
Mscrm.OutlookUtil.registerClass("Mscrm.OutlookUtil");
Mscrm.CacheScope.registerClass("Mscrm.CacheScope");
Mscrm.ResponseType.registerClass("Mscrm.ResponseType");
Mscrm.PageManagerBase.registerClass("Mscrm.PageManagerBase", Mscrm.CrmUIComponent);
Mscrm.PageManager.registerClass("Mscrm.PageManager", Mscrm.PageManagerBase);
Mscrm.PerceivedCommandBarHelper.registerClass("Mscrm.PerceivedCommandBarHelper");
Mscrm.PhoneUriBuilder.registerClass("Mscrm.PhoneUriBuilder");
Mscrm.RemoteCommandXml.registerClass("Mscrm.RemoteCommandXml");
Mscrm.AsyncResultHandler.registerClass("Mscrm.AsyncResultHandler");
Mscrm.RemoteCommandXmlResult.registerClass("Mscrm.RemoteCommandXmlResult");
Mscrm.InlinePageManager.registerClass("Mscrm.InlinePageManager", Mscrm.PageManagerBase);
Mscrm.InlineDialog.registerClass("Mscrm.InlineDialog");
Mscrm.InlineDialogUtility.registerClass("Mscrm.InlineDialogUtility");
Mscrm.ReportViewType.registerClass("Mscrm.ReportViewType");
Mscrm.ReportUtil.registerClass("Mscrm.ReportUtil");
Mscrm.RibbonUtility.registerClass("Mscrm.RibbonUtility");
Mscrm.ScriptErrorReporting.registerClass("Mscrm.ScriptErrorReporting", Mscrm.CrmUIComponent);
Mscrm.SessionInfo.registerClass("Mscrm.SessionInfo");
Mscrm.Shortcuts.registerClass("Mscrm.Shortcuts");
Mscrm.SolutionDecorater.registerClass("Mscrm.SolutionDecorater");
Mscrm.WindowInformation.registerClass("Mscrm.WindowInformation");
Mscrm.WrpcTokenFuncs.registerClass("Mscrm.WrpcTokenFuncs");
Mscrm.WrpcToken.registerClass("Mscrm.WrpcToken");
Mscrm.ContextMenuAction.registerClass("Mscrm.ContextMenuAction");
Mscrm.HelpEntryPoint.registerClass("Mscrm.HelpEntryPoint");
Mscrm.Utilities.registerClass("Mscrm.Utilities");
Mscrm.JsonUtilities.registerClass("Mscrm.JsonUtilities");
Mscrm.RequiredLevelNumber.registerClass("Mscrm.RequiredLevelNumber");
Mscrm.XmlUtil.registerClass("Mscrm.XmlUtil");
Mscrm.XslTemplate.registerClass("Mscrm.XslTemplate");
Mscrm.XslProcessor.registerClass("Mscrm.XslProcessor");
Mscrm.InternetExplorerXslProcessor.registerClass("Mscrm.InternetExplorerXslProcessor", Mscrm.XslProcessor);
Mscrm.MetricsReporting.registerClass("Mscrm.MetricsReporting");
Mscrm.MetricsCollector.registerClass("Mscrm.MetricsCollector");
Mscrm.MetricsStopwatch.registerClass("Mscrm.MetricsStopwatch");
Mscrm.CrmDialogReturnObject.registerClass("Mscrm.CrmDialogReturnObject");
Mscrm.CrmLocalStorage.registerClass("Mscrm.CrmLocalStorage");
Mscrm.LocalStorage.registerClass("Mscrm.LocalStorage", null, Mscrm.ILocalStorage);
Mscrm.UserDataStorage.registerClass("Mscrm.UserDataStorage", null, Mscrm.ILocalStorage);
Mscrm.SearchRecordColumn.registerClass("Mscrm.SearchRecordColumn");
Mscrm.SearchRecord.registerClass("Mscrm.SearchRecord");
Mscrm.FeatureControl.registerClass("Mscrm.FeatureControl");
Mscrm.DefaultFeatureControlChecks.registerClass("Mscrm.DefaultFeatureControlChecks", null, Mscrm.IFeatureControlChecks);
Mscrm.FeatureNames.registerClass("Mscrm.FeatureNames");
Mscrm.MobileUtility.registerClass("Mscrm.MobileUtility");
Mscrm.MediaQuery.registerClass("Mscrm.MediaQuery");
Mscrm.MediaQueryAction.registerClass("Mscrm.MediaQueryAction");
Mscrm.MediaQueryEvaluator.registerClass("Mscrm.MediaQueryEvaluator");
Mscrm.CssMediaQueryEvaluator.registerClass("Mscrm.CssMediaQueryEvaluator", Mscrm.MediaQueryEvaluator);
Mscrm.JsMediaQueryEvaluator.registerClass("Mscrm.JsMediaQueryEvaluator", Mscrm.MediaQueryEvaluator);
Mscrm.OnLoadDeferredExecutor.registerClass("Mscrm.OnLoadDeferredExecutor");
Mscrm.Presence.PresenceControlFactory.registerClass("Mscrm.Presence.PresenceControlFactory");
Mscrm.Presence.PresenceLocation.registerClass("Mscrm.Presence.PresenceLocation", null, Mscrm.Presence.IPresenceLocation);
Mscrm.Presence.PresenceStatus.registerClass("Mscrm.Presence.PresenceStatus", null, Mscrm.Presence.IPresenceStatus);
Mscrm.Presence.PresenceStatusChangeArgs.registerClass("Mscrm.Presence.PresenceStatusChangeArgs", Sys.EventArgs);
Mscrm.InternalUtilities._Dictionary.registerClass("Mscrm.InternalUtilities._Dictionary");
Mscrm.InternalUtilities._Script.registerClass("Mscrm.InternalUtilities._Script");
Mscrm.InternalUtilities._String.registerClass("Mscrm.InternalUtilities._String");
Mscrm.InternalUtilities.EntityNames.registerClass("Mscrm.InternalUtilities.EntityNames");
Mscrm.InternalUtilities.EntityTypeCode.registerClass("Mscrm.InternalUtilities.EntityTypeCode");
Mscrm.InternalUtilities.GridUtilities.registerClass("Mscrm.InternalUtilities.GridUtilities");
Mscrm.InternalUtilities.JSTypes.registerClass("Mscrm.InternalUtilities.JSTypes");
Mscrm.InternalUtilities.TypeNames.registerClass("Mscrm.InternalUtilities.TypeNames");
Mscrm.InternalUtilities.Utilities.registerClass("Mscrm.InternalUtilities.Utilities");
Mscrm.Performance.GlobalObjectTrackingManager.registerClass("Mscrm.Performance.GlobalObjectTrackingManager");
Mscrm.Performance.ObjectCountsInfo.registerClass("Mscrm.Performance.ObjectCountsInfo");
Mscrm.Performance.PerformanceMarker.registerClass("Mscrm.Performance.PerformanceMarker");
Mscrm.Performance.PerformanceStopwatch.registerClass("Mscrm.Performance.PerformanceStopwatch");
Mscrm.Performance.PerformanceMarkerManager.registerClass("Mscrm.Performance.PerformanceMarkerManager");
Mscrm.Proxies.CrmEncodeDecodeProxy.registerClass("Mscrm.Proxies.CrmEncodeDecodeProxy", null, Mscrm.Proxies.ICrmEncodeDecodeProxy);
Mscrm.Proxies.CrmUriProxy.registerClass("Mscrm.Proxies.CrmUriProxy", null, Mscrm.Proxies.ICrmUriProxy);
Mscrm.Proxies.DomElementProxy.registerClass("Mscrm.Proxies.DomElementProxy", null, Mscrm.Proxies.IDomElementProxy);
Mscrm.Proxies.DomHelperProxy.registerClass("Mscrm.Proxies.DomHelperProxy", null, Mscrm.Proxies.IDomHelperProxy);
Mscrm.Proxies.ImageStripProxy.registerClass("Mscrm.Proxies.ImageStripProxy", null, Mscrm.Proxies.IImageStripProxy);
Mscrm.Proxies.LookupControlItemProxy.registerClass("Mscrm.Proxies.LookupControlItemProxy", null, Mscrm.Proxies.ILookupControlItemProxy);
Mscrm.Proxies.PresenceControlProxy.registerClass("Mscrm.Proxies.PresenceControlProxy", null, Mscrm.Proxies.IPresenceControlProxy, Sys.IDisposable);
Mscrm.Proxies.PresenceHelperProxy.registerClass("Mscrm.Proxies.PresenceHelperProxy", null, Mscrm.Proxies.IPresenceHelperProxy);
Mscrm.Proxies.PresenceInfoProxy.registerClass("Mscrm.Proxies.PresenceInfoProxy", null, Mscrm.Proxies.IPresenceInfoProxy);
Mscrm.Proxies.RemoteCommandProxy.registerClass("Mscrm.Proxies.RemoteCommandProxy", null, Mscrm.Proxies.IRemoteCommandProxy);
Mscrm.Proxies.RemoteCommandResultProxy.registerClass("Mscrm.Proxies.RemoteCommandResultProxy", null, Mscrm.Proxies.IRemoteCommandResultProxy);
StringBuilder.registerClass("StringBuilder");
Mscrm.Obsolete.RenderVariables.registerClass("Mscrm.Obsolete.RenderVariables");
Mscrm.AdvancedFindConstants.$4j = null;
Mscrm.AdvancedFindConstants.$$cctor();
Mscrm.SfaTabsConstants.ActivityFeedsTabId = "ActivityFeedsTab";
Mscrm.SfaTabsConstants.ActivitiesTabId = "ActivitiesTab";
Mscrm.SfaTabsConstants.NotesTabId = "NotesTab";
Mscrm.SfaTabsConstants.ActivityFeedsSystemTabId = "ActivityFeedsSystemTab";
Mscrm.RibbonSelectionDataType.recordCount = 0;
Mscrm.RibbonSelectionDataType.selectedRecordCount = 1;
Mscrm.RibbonSelectionDataType.allRecords = 2;
Mscrm.RibbonSelectionDataType.allRecordIds = 3;
Mscrm.RibbonSelectionDataType.selectedRecords = 4;
Mscrm.RibbonSelectionDataType.selectedIds = 5;
Mscrm.RibbonSelectionDataType.unselectedRecords = 6;
Mscrm.RibbonSelectionDataType.unselectedIds = 7;
Mscrm.RibbonSelectionDataType.gridXml = 8;
Mscrm.RibbonSelectionDataType.entityDisplayName = 9;
Mscrm.RibbonSelectionDataType.entityDisplayPluralName = 10;
Mscrm.RibbonSelectionDataType.viewTitle = 11;
Mscrm.RibbonSelectionDataType.viewIsUserOwned = 12;
Mscrm.RibbonSelectionDataType.totalRecordCount = 13;
Mscrm.RibbonSelectionDataType.pageNumber = 14;
Mscrm.RibbonSelectionDataType.pageSize = 15;
Mscrm.NavigationMode.NavigationModeNewWindow = 0;
Mscrm.NavigationMode.NavigationModeInline = 1;
Mscrm.NavigationMode.DefaultNavigationMode = 1;
Mscrm.NotificationSeverity.none = 0;
Mscrm.NotificationSeverity.error = 1;
Mscrm.NotificationSeverity.warning = 2;
Mscrm.NotificationSeverity.information = 3;
Mscrm.NotificationSeverity.userDefined = 4;
Mscrm.NotificationSource.server = "Server";
Mscrm.NotificationSource.strategy = "strategy";
Mscrm.NotificationSource.privilegeCheck = "PrivilegeCheck";
Mscrm.NotificationSource.validate = "Validate";
Mscrm.RecordSetNavigation.PrimaryFieldName = "primaryFieldColumnName";
Mscrm.RecordSetNavigation.PrimaryFieldColumnIndex = "primaryFieldColumnIndex";
Mscrm.RecordSetNavigation.DisplayFieldName = "displayFieldColumnName";
Mscrm.RecordSetNavigation.DisplayFieldLabel = "displayFieldColumnLabel";
Mscrm.RecordSetNavigation.DisplayFieldColumnIndex = "displayFieldColumnIndex";
Mscrm.RecordSetNavigation.PageNumber = "pageNumber";
Mscrm.RecordSetNavigation.LayoutXml = "layoutXml";
Mscrm.RecordSetNavigation.ViewName = "viewName";
Mscrm.RecordSetNavigation.RecordPosition = "rpos";
Mscrm.RecordSetNavigation.RecordsMask = "page_{0}_Records";
Mscrm.RecordSetNavigation.MoreRecordsMask = "page_{0}_moreRecords";
Mscrm.RecordSetNavigation.GridXmlMask = "page_{0}_gridXml";
Mscrm.RecordSetNavigation.RemoteCommandMask = "page_{0}_RemoteCommand";
Mscrm.RecordSetNavigation.RefreshDataMask = "page_{0}_RefreshData";
Mscrm.ScriptEvents.ShowEvents = 0;
Mscrm.ScriptEvents.AppNavGoTo = 1;
Mscrm.ScriptEvents.GetCache = 2;
Mscrm.ScriptEvents.GetSelectedAreaSubAreaIds = 3;
Mscrm.ScriptEvents.GetPageInfo = 4;
Mscrm.ScriptEvents.InsertCacheData = 5;
Mscrm.ScriptEvents.NavigateSaveState = 6;
Mscrm.ScriptEvents.NavigateRestoreState = 7;
Mscrm.ScriptEvents.Navigate = 8;
Mscrm.ScriptEvents.PageLoaded = 9;
Mscrm.ScriptEvents.RetrieveCacheData = 10;
Mscrm.ScriptEvents.SyncCache = 11;
Mscrm.ScriptEvents.ShowAppNav = 12;
Mscrm.ScriptEvents.UpdateViewUrl = 13;
Mscrm.ScriptEvents.WindowResize = 14;
Mscrm.ScriptEvents.GetContentUrl = 15;
Mscrm.ScriptEvents.NavigateBack = 16;
Mscrm.ScriptEvents.NavigateForward = 17;
Mscrm.ScriptEvents.NavigateBackCheckpoint = 18;
Mscrm.ScriptEvents.NavigateRetrieveDetails = 19;
Mscrm.ScriptEvents.RequestResize = 20;
Mscrm.ScriptEvents.NavigateRequest = 21;
Mscrm.ScriptEvents.NavigateRefresh = 22;
Mscrm.ScriptEvents.NavigateClose = 23;
Mscrm.ScriptEvents.SignOut = 24;
Mscrm.ScriptEvents.OnClick = 25;
Mscrm.ScriptEvents.OnGridReset = 26;
Mscrm.ScriptEvents.OnGridRefresh = 27;
Mscrm.ScriptEvents.OnGridResetComplete = 28;
Mscrm.ScriptEvents.PageUnloaded = 29;
Mscrm.ScriptEvents.RibbonSelectionChanged = 30;
Mscrm.ScriptEvents.RibbonExecuteCommand = 31;
Mscrm.ScriptEvents.RibbonRefresh = 32;
Mscrm.ScriptEvents.RibbonRequestEnabledState = 33;
Mscrm.ScriptEvents.RibbonRequestVisibleState = 34;
Mscrm.ScriptEvents.RibbonDataLoad = 35;
Mscrm.ScriptEvents.RibbonDataUnload = 36;
Mscrm.ScriptEvents.RibbonRootEvent = 37;
Mscrm.ScriptEvents.SetRibbonSelectedControl = 38;
Mscrm.ScriptEvents.RibbonTabSwitch = 39;
Mscrm.ScriptEvents.OnDocumentReady = 40;
Mscrm.ScriptEvents.OnKeyDown = 41;
Mscrm.ScriptEvents.ViewSelectorChanged = 42;
Mscrm.ScriptEvents.UpdatePageInformation = 43;
Mscrm.ScriptEvents.GetWindowSize = 44;
Mscrm.ScriptEvents.SelectionChanged = 45;
Mscrm.ScriptEvents.NavigateConfirm = 46;
Mscrm.ScriptEvents.GridViewChanged = 47;
Mscrm.ScriptEvents.GetStickyViewIdForSubAreaPage = 48;
Mscrm.ScriptEvents.RetrieveRecentData = 49;
Mscrm.ScriptEvents.RefreshGrid = 50;
Mscrm.ScriptEvents.RecordUpdated = 51;
Mscrm.ScriptEvents.RecentlyViewedAddItem = 52;
Mscrm.ScriptEvents.OnDashboardRefresh = 53;
Mscrm.ScriptEvents.OnPaneRefresh = 54;
Mscrm.ScriptEvents.RibbonSetFocusToSelf = 55;
Mscrm.ScriptEvents.RibbonSetFocusToLastControl = 56;
Mscrm.ScriptEvents.BeforePageLoaded = 57;
Mscrm.ScriptEvents.RecentlyViewedSetFocusOnViewedPagesIcon = 58;
Mscrm.ScriptEvents.SiteMapSetFocusOnFirstItem = 59;
Mscrm.ScriptEvents.UpdateVisualizationUrl = 60;
Mscrm.ScriptEvents.UpdateDashboardsUrl = 61;
Mscrm.ScriptEvents.NewViewCreated = 62;
Mscrm.ScriptEvents.RetrieveLookupMruData = 63;
Mscrm.ScriptEvents.AddLookupMruItems = 64;
Mscrm.ScriptEvents.UpdateLookupMruItems = 65;
Mscrm.ScriptEvents.RemoveLookupMruItems = 66;
Mscrm.ScriptEvents.RibbonMinimizeToggle = 67;
Mscrm.ScriptEvents.SignOutRequested = 68;
Mscrm.ScriptEvents.RibbonTabScalingComplete = 69;
Mscrm.ScriptEvents.TabExpended = 70;
Mscrm.ScriptEvents.InlinePageLoaded = 71;
Mscrm.ScriptEvents.DashboardViewChanged = 72;
Mscrm.ScriptEvents.ContentPanelSetFocusOnDivContentPanel = 73;
Mscrm.ScriptEvents.RibbonRendered = 74;
Mscrm.ScriptEvents.SignInRequested = 75;
Mscrm.ScriptEvents.RefreshActivitiesWall = 76;
Mscrm.ScriptEvents.RefreshTabsControl = 77;
Mscrm.ScriptEvents.RefreshNotesWall = 78;
Mscrm.ScriptEvents.GridRowPreview = 79;
Mscrm.ScriptEvents.RefreshActivityContainer = 80;
Mscrm.ScriptEvents.GridContextualAction = 81;
Mscrm.ScriptEvents.RemoveGroupsFromCache = 82;
Mscrm.ScriptEvents.ChangeWindowHash = 83;
Mscrm.ScriptEvents.RecordSetControlLoaded = 84;
Mscrm.ScriptEvents.RecordSetControlUnloaded = 85;
Mscrm.ScriptEvents.CacheCurrentGridView = 86;
Mscrm.ScriptEvents.IFrameReactivated = 87;
Mscrm.ScriptEvents.RecordSiteMapRequested = 88;
Mscrm.ScriptEvents.RecordSiteMapAvailable = 89;
Mscrm.ScriptEvents.RecordSiteMapAction = 90;
Mscrm.ScriptEvents.DefaultViewChanged = 91;
Mscrm.ScriptEvents.ToggledFilter = 92;
Mscrm.ScriptEvents.FormTitleUpdated = 93;
Mscrm.ScriptEvents.ReloadCommandBar = 94;
Mscrm.ScriptEvents.PrintPreviewGrid = 95;
Mscrm.ScriptEvents.PreserveCurrentIFrame = 96;
Mscrm.ScriptEvents.UpdateTopLocation = 97;
Mscrm.ScriptEvents.RefreshFormHeader = 98;
Mscrm.ScriptEvents.UpdateAppNotification = 99;
Mscrm.ScriptEvents.RemoveCacheData = 100;
Mscrm.ScriptEvents.StaticScriptsLoaded = 101;
Mscrm.ScriptEvents.PrintPreviewForm = 102;
Mscrm.ScriptEvents.RecordsDeleted = 103;
Mscrm.ScriptEvents.UpdateHierarchyPageHeader = 104;
Mscrm.ScriptEvents.HierarchyTileViewChanged = 105;
Mscrm.ScriptEvents.HierarchyFolderViewChanged = 106;
Mscrm.ScriptEvents.RefreshView = 107;
Mscrm.InlineCommands.Error = -1;
Mscrm.InlineCommands.None = 0;
Mscrm.InlineCommands.Save = 1;
Mscrm.InlineCommands.SaveAndClose = 2;
Mscrm.InlineCommands.DeleteRecord = 3;
Mscrm.InlineCommands.Deactivate = 5;
Mscrm.InlineCommands.Reactivate = 6;
Mscrm.InlineCommands.LeadQualify = 15;
Mscrm.InlineCommands.LeadDisqualify = 16;
Mscrm.InlineCommands.QuoteAccept = 17;
Mscrm.InlineCommands.QuoteCreateOrder = 18;
Mscrm.InlineCommands.OrderProcessOrder = 19;
Mscrm.InlineCommands.OpportunityAddRelatedOrder = 21;
Mscrm.InlineCommands.OpportunityAddRelatedQuote = 22;
Mscrm.InlineCommands.OpportunityAddRelatedInvoice = 23;
Mscrm.InlineCommands.QuoteCreateRevision = 24;
Mscrm.InlineCommands.QuoteCloseQuote = 25;
Mscrm.InlineCommands.OrderCancelOrder = 26;
Mscrm.InlineCommands.InvoiceCancel = 27;
Mscrm.InlineCommands.QuoteGetProducts = 28;
Mscrm.InlineCommands.QuoteActivate = 29;
Mscrm.InlineCommands.ContractHold = 31;
Mscrm.InlineCommands.ContractReleaseHold = 32;
Mscrm.InlineCommands.ContractCancel = 33;
Mscrm.InlineCommands.ContractRenew = 34;
Mscrm.InlineCommands.ProductConvertToKit = 35;
Mscrm.InlineCommands.ProductConvertFromKit = 36;
Mscrm.InlineCommands.ContractDetailCancel = 37;
Mscrm.InlineCommands.ContractInvoice = 38;
Mscrm.InlineCommands.ContractClone = 39;
Mscrm.InlineCommands.IncidentCancel = 40;
Mscrm.InlineCommands.ChangeSalesStage = 42;
Mscrm.InlineCommands.SalesOrderGetProducts = 43;
Mscrm.InlineCommands.InvoiceGetProducts = 44;
Mscrm.InlineCommands.Assign = 49;
Mscrm.InlineCommands.OrderLock = 50;
Mscrm.InlineCommands.OrderUnlock = 51;
Mscrm.InlineCommands.InvoiceLock = 52;
Mscrm.InlineCommands.InvoiceUnlock = 53;
Mscrm.InlineCommands.ConvertResponse = 54;
Mscrm.InlineCommands.FaxSend = 55;
Mscrm.InlineCommands.OrderFulfillOrder = 56;
Mscrm.InlineCommands.InvoicePaid = 57;
Mscrm.InlineCommands.SaveAsCompleted = 58;
Mscrm.InlineCommands.AddToQueue = 59;
Mscrm.InlineCommands.RecalculateRecord = 66;
Mscrm.InlineCommands.EmailSend = 67;
Mscrm.InlineCommands.RenewEntitlement = 68;
Mscrm.InlineCommands.OpenEditForm = 201;
Mscrm.InlineCommands.LoadHelp = 202;
Mscrm.InlineCommands.IncidentResolve = 203;
Mscrm.InlineCommands.ShareRecord = 204;
Mscrm.InlineCommands.OpportunityCloseAsWon = 205;
Mscrm.InlineCommands.OpportunityCloseAsLost = 206;
Mscrm.InlineCommands.CreateConnection = 207;
Mscrm.InlineCommands.Retrieve = 208;
Mscrm.InlineCommands.UpdateConnection = 209;
Mscrm.InlineCommands.AssociateToCompetitor = 210;
Mscrm.InlineCommands.SaveAndNew = 211;
Mscrm.InlineCommands.EmailLink = 212;
Mscrm.InlineCommands.OpportunityReopen = 213;
Mscrm.InlineCommands.FormEditor = 214;
Mscrm.InlineCommands.Follow = 215;
Mscrm.InlineCommands.UNFollow = 216;
Mscrm.InlineCommands.LaunchProcessControlConfiguration = 217;
Mscrm.InlineCommands.Create = 218;
Mscrm.InlineCommands.Close = 219;
Mscrm.InlineCommands.SwitchProcess = 220;
Mscrm.InlineCommands.CampaignResponseConvertAndQualifyLead = 221;
Mscrm.InlineCommands.CampaignResponseCloseAndDisqualifyLead = 222;
Mscrm.InlineCommands.CampaignResponseClose = 223;
Mscrm.InlineCommands.CampaignResponseCopy = 224;
Mscrm.InlineCommands.CreateProduct = 230;
Mscrm.InlineCommands.CreateEntitlementChannel = 231;
Mscrm.InlineCommands.CreateChild = 232;
Mscrm.InlineCommands.CreateDynamicPropertyOptionSetItem = 233;
Mscrm.InlineCommands.CreateRecordAccessTeamMember = 240;
Mscrm.InlineCommands.RemoveRecordAccessTeamMember = 250;
Mscrm.InlineCommands.IncidentCheckForOpenActivities = 260;
Mscrm.InlineCommands.UpdateSequenceNo = 270;
Mscrm.InlineDataFormatTagName.Input = "Input";
Mscrm.InlineDataFormatTagName.Id = "id";
Mscrm.InlineDataFormatTagName.EntityLogicalName = "name";
Mscrm.InlineDataFormatTagName.DataXml = "dataxml";
Mscrm.RecordPrivilegeType.None = 0;
Mscrm.RecordPrivilegeType.Create = 1;
Mscrm.RecordPrivilegeType.Read = 2;
Mscrm.RecordPrivilegeType.Write = 4;
Mscrm.RecordPrivilegeType.DeletePrivilege = 8;
Mscrm.RecordPrivilegeType.Assign = 16;
Mscrm.RecordPrivilegeType.Share = 32;
Mscrm.RecordPrivilegeType.Append = 64;
Mscrm.RecordPrivilegeType.AppendTo = 128;
Mscrm.RefreshCommandBarVisibilityRule.None = 0;
Mscrm.RefreshCommandBarVisibilityRule.NewRecord = 1;
Mscrm.RefreshCommandBarVisibilityRule.ExistingRecord = 2;
Mscrm.RefreshCommandBarVisibilityRule.PrimaryIsActive = 3;
Mscrm.RefreshCommandBarVisibilityRule.PrimaryIsInactive = 4;
Mscrm.RefreshCommandBarVisibilityRule.IsFollowed = 5;
Mscrm.RefreshCommandBarVisibilityRule.IsNotFollowed = 6;
Mscrm.RefreshCommandBarVisibilityRule.Offline = 7;
Mscrm.RefreshCommandBarVisibilityRule.Online = 8;
Mscrm.RefreshCommandBarVisibilityRule.FormDesignerNotValidForEntity = 9;
Mscrm.RefreshCommandBarVisibilityRule.CannotWritePrimary = 10;
Mscrm.RefreshCommandBarVisibilityRule.CannotDeletePrimary = 11;
Mscrm.RefreshCommandBarVisibilityRule.CannotSavePrimary = 12;
Mscrm.RefreshCommandBarVisibilityRule.CannotSharePrimary = 13;
Mscrm.RefreshCommandBarVisibilityRule.UserIsNotUsingBaseLanguage = 14;
Mscrm.RefreshFormMarker.StartPreload = "StartRefreshPreloadTimestamp";
Mscrm.RefreshFormMarker.FinishPreload = "FinishRefreshPreloadTimestamp";
Mscrm.RefreshFormMarker.BeforeWindowOpen = "BeforeWindowOpenTimestamp";
Mscrm.RefreshFormMarker.AfterWindowOpen = "AfterWindowOpenTimestamp";
Mscrm.RefreshFormMarker.StartLoadFormLayout = "StartLoadFormLayoutTimestamp";
Mscrm.RefreshFormMarker.HideLoadingScreenTimestampRaw = "HideLoadingScreenTimestampRaw";
Mscrm.RefreshFormMarker.HideLoadingScreenTimestamp = "HideLoadingScreenTimestamp";
Mscrm.RefreshFormMarker.StartRetrieveAttributesMetadata = "StartRetrieveAttributesMetadataTimestamp";
Mscrm.RefreshFormMarker.FinishRetrieveAttributesMetadata = "FinishRetrieveAttributesMetadataTimestamp";
Mscrm.RefreshFormMarker.StartProcessControlInitializer = "StartProcessControlInitializerTimestamp";
Mscrm.RefreshFormMarker.FinishProcessControlInitializer = "FinishProcessControlInitializerTimestamp";
Mscrm.RefreshFormMarker.StartLinkControlInitialization = "StartLinkControlInitTimestamp";
Mscrm.RefreshFormMarker.FinishLinkControlInitialization = "FinishLinkControlInitTimestamp";
Mscrm.RefreshFormMarker.StartLoadingProcessStageAdvance = "StartLoadingProcessStageAdvanceTimestamp";
Mscrm.RefreshFormMarker.FinishLoadingProcessStageAdvance = "FinishLoadingProcessStageAdvanceTimestamp";
Mscrm.RefreshFormMarker.StartLoadingProcessStageBack = "StartLoadingProcessStageBackTimestamp";
Mscrm.RefreshFormMarker.FinishLoadingProcessStageBack = "FinishLoadingProcessStageBackTimestamp";
Mscrm.RefreshFormMarker.StartLoadingNewProcessStage = "StartLoadingNewProcessStageTimestamp";
Mscrm.RefreshFormMarker.FinishLoadingNewProcessStage = "FinishLoadingNewProcessStageTimestamp";
Mscrm.RefreshFormMarker.StartSubjectLookupRetrieve = "StartSubjectLookupRetrieveTimestamp";
Mscrm.RefreshFormMarker.FinishSubjectLookupRetrieve = "FinishSubjectLookupRetrieveTimestamp";
Mscrm.RefreshFormMarker.StartSubjectLookupShow = "StartSubjectLookupShowTimestamp";
Mscrm.RefreshFormMarker.FinishSubjectLookupShow = "FinishSubjectLookupShowTimestamp";
Mscrm.RefreshFormMarker.StartOpenFlyOut = "StartOpenFlyOutTimestamp";
Mscrm.RefreshFormMarker.FinishOpenFlyOut = "FinishOpenFlyOutTimestamp";
Mscrm.RefreshFormMarker.StartCloseFlyOut = "StartCloseFlyOutTimestamp";
Mscrm.RefreshFormMarker.FinishCloseFlyOut = "FinishCloseFlyOutTimestamp";
Mscrm.RefreshFormMarker.StartCancelFlyOut = "StartCancelFlyOutTimestamp";
Mscrm.RefreshFormMarker.FinishCancelFlyOut = "FinishCancelFlyOutTimestamp";
Mscrm.RefreshFormMarker.StartNotesWallInitializeTime = "StartNotesWallInitializeTimestamp";
Mscrm.RefreshFormMarker.FinishNotesWallInitializeTime = "FinishNotesWallInitializeTimestamp";
Mscrm.RefreshFormMarker.StartNotesWallContentLoadTime = "StartNotesWallContentLoadTimestamp";
Mscrm.RefreshFormMarker.FinishNotesWallContentLoadTime = "FinishNotesWallContentLoadTimestamp";
Mscrm.RefreshFormMarker.StartNotesWallRefreshLoadTime = "StartNotesWallRefreshLoadTimestamp";
Mscrm.RefreshFormMarker.FinishNotesWallRefreshLoadTime = "FinishNotesWallRefreshLoadTimestamp";
Mscrm.RefreshFormMarker.StartPostNoteTime = "StartPostNoteTimestamp";
Mscrm.RefreshFormMarker.FinishPostNoteTime = "FinishPostNoteTimestamp";
Mscrm.RefreshFormMarker.StartDeleteNoteTime = "StartDeleteNoteTimestamp";
Mscrm.RefreshFormMarker.FinishDeleteNoteTime = "FinishDeleteNoteTimestamp";
Mscrm.RefreshFormMarker.StartDeleteNoteAttachmentTime = "StartDeleteNoteAttachmentTimestamp";
Mscrm.RefreshFormMarker.FinishDeleteNoteAttachmentTime = "FinishDeleteNoteAttachmentTimestamp";
Mscrm.RefreshFormMarker.StartLoadingScriptBlocks = "StartLoadingScriptBlocksTimestamp";
Mscrm.RefreshFormMarker.FinishLoadingScriptBlocks = "FinishLoadingScriptBlocksTimestamp";
Mscrm.RefreshFormMarker.StartOnPageRefreshed = "StartOnPageRefreshedTimestamp";
Mscrm.RefreshFormMarker.FinishOnPageRefreshed = "FinishOnPageRefreshedTimestamp";
Mscrm.RefreshFormMarker.StartPostInitialization = "StartPostInitializationTimestamp";
Mscrm.RefreshFormMarker.FinishPostInitialization = "FinishPostInitializationTimestamp";
Mscrm.RefreshFormMarker.StartPostInitializeProcessControl = "StartPostInitializeProcessControlTimestamp";
Mscrm.RefreshFormMarker.FinishPostInitializeProcessControl = "FinishPostInitializeProcessControlTimestamp";
Mscrm.RefreshFormMarker.StartInlineEditPass1 = "StartInlineEditPass1Timestamp";
Mscrm.RefreshFormMarker.FinishInlineEditPass1 = "FinishInlineEditPass1Timestamp";
Mscrm.RefreshFormMarker.StartInlineEditPass2 = "StartInlineEditPass2Timestamp";
Mscrm.RefreshFormMarker.FinishInlineEditPass2 = "FinishInlineEditPass2Timestamp";
Mscrm.RefreshFormMarker.InlineEditInitializationCompleted = "InlineEditInitializationCompletedTimestamp";
Mscrm.RefreshFormMarker.StartFinalizeProcessControl = "StartFinalizeProcessControlTimestamp";
Mscrm.RefreshFormMarker.FinishFinalizeProcessControl = "FinishFinalizeProcessControlTimestamp";
Mscrm.RefreshFormMarker.StartGetNavigateToEntities = "StartGetNavigateToEntitiesTimestamp";
Mscrm.RefreshFormMarker.FinishGetNavigateToEntities = "FinishGetNavigateToEntitiesTimestamp";
Mscrm.RefreshFormMarker.StartNavigateToEntity = "StartNavigateToEntityTimestamp";
Mscrm.RefreshFormMarker.FinishNavigateToEntity = "FinishNavigateToEntityTimestamp";
Mscrm.RefreshFormMarker.StartRenderCrmTile = "StartRenderCrmTileTimestamp";
Mscrm.RefreshFormMarker.StartAddingConnection = "StartAddingConnectionTimestamp";
Mscrm.RefreshFormMarker.StartAddingCompetitor = "StartAddingCompetitorTimestamp";
Mscrm.RefreshFormMarker.StartUpdatingConnection = "StartUpdatingConnectionTimestamp";
Mscrm.RefreshFormMarker.FinishAddingConnection = "FinishAddingConnectionTimestamp";
Mscrm.RefreshFormMarker.FinishAddingCompetitor = "FinishAddingCompetitorTimestamp";
Mscrm.RefreshFormMarker.FinishUpdatingConnection = "FinishUpdatingConnectionTimestamp";
Mscrm.RefreshFormMarker.FinishRefreshingSubGridLite = "FinishRefreshingSubGridLiteTimestamp";
Mscrm.RefreshFormMarker.BeginCreateFormNavControl = "BeginCreateFormNavControlTimestamp";
Mscrm.RefreshFormMarker.EndCreateFormNavControl = "EndCreateFormNavControlTimestamp";
Mscrm.RefreshFormMarker.StartDashboardLoad = "StartDashboardLoadTimeStamp";
Mscrm.RefreshFormMarker.FinishDashboardLoad = "FinishDashboardLoadTimeStamp";
Mscrm.RefreshFormMarker.ServiceRoundtrip = "ServiceRoundtrip";
Mscrm.RefreshFormMarker.ResetFormState = "ResetFormState";
Mscrm.RefreshFormMarker.ControlsInitializationComplete = "ControlsInitializationCompleteTimestamp";
Mscrm.RefreshFormMarker.InnerIFrameSrcChangeTimestamp = "InnerIFrameSrcChangeTimestamp";
Mscrm.RefreshFormMarker.StartInPageNavigationTimestamp = "StartInPageNavigationTimestamp";
Mscrm.RefreshFormMarker.FinishInPageNavigationTimestamp = "FinishInPageNavigationTimestamp";
Mscrm.RefreshFormMarker.StartMobileFirstControl = "StartMobileFirstControlTimestamp";
Mscrm.RefreshFormMarker.FinishMobileFirstControl = "FinishMobileFirstControlTimestamp";
Mscrm.RefreshFormMarker.StartSocialInsightsControlInitialization = "StartSocialInsightsControlInitializationTimestamp";
Mscrm.RefreshFormMarker.FinishSocialInsightsControlInitialization = "FinishSocialInsightsControlInitializationTimestamp";
Mscrm.RefreshFormMarker.StartSocialInsightsIFrameLoad = "StartSocialInsightsIFrameLoadTimestamp";
Mscrm.RefreshFormMarker.FinishSocialInsightsIFrameLoad = "FinishSocialInsightsIFrameLoadTimestamp";
Mscrm.IconUtil.maxIconSize = 10240;
Mscrm.IconUtil.defaultIcon = "/_imgs/ico_16.gif";
Mscrm.IconUtil.genericCustomEntityRibbonIconSuffix = "Custom.png";
Mscrm.InlineEditConstants.DefaultEmptyValuePlaceholder = "--";
Mscrm.InlineEditConstants.TextOverflowEllipsis = "...";
Mscrm.InlineEditConstants.SecuredReadMaskValue = "*******";
Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName = "data-attributename";
Mscrm.InlineEditConstants.HtmlAttributeForRelatedEntityLogicalName = "data-relatedentityname";
Mscrm.InlineEditConstants.HtmlAttributeForRelatedEntityPrimaryFieldName = "data-relatedentity-primaryfieldname";
Mscrm.InlineEditConstants.HtmlAttributeForFormDataEntityId = "data-fdeid";
Mscrm.InlineEditConstants.HtmlAttributeForFormId = "data-formid";
Mscrm.InlineEditConstants.HtmlAttributeForFormBegin = "data-formstart";
Mscrm.InlineEditConstants.HtmlAttributeForLinkControlBegin = "data-linkcontrolstart";
Mscrm.InlineEditConstants.HtmlAttributeForRelationshipName = "data-qfrelname";
Mscrm.InlineEditConstants.HtmlAttributeForRelationshipDirection = "data-qfreldirection";
Mscrm.InlineEditConstants.FormDataEntityIdPrefix = "qf_fde_";
Mscrm.InlineEditConstants.FormatStringForQuickFormJQueryTemplate = "quickFormTemplate_{0}";
Mscrm.InlineEditConstants.FormatStringForQuickFormDataObject = "quickFormData_{0}";
Mscrm.InlineEditConstants.JQueryTemplateNameForMainPage = "rootJQueryTemplate";
Mscrm.InlineEditConstants.JQueryTemplateNameForCommandBar = "commandBarTemplate";
Mscrm.InlineEditConstants.HtmlAttributeForUniqueId = "data-uniqueid";
Mscrm.InlineEditConstants.HtmlAttributeForControlMode = "data-controlmode";
Mscrm.InlineEditConstants.HtmlAttributeForLayout = "data-layout";
Mscrm.InlineEditConstants.HtmlAttributeForRelationshipRoleOrdinal = "data-relationshiproleordinal";
Mscrm.InlineEditConstants.HtmlAttributeForQuickFormAttributeLogicalName = "data-qfattribute";
Mscrm.InlineEditConstants.HtmlAttributeForParentFormDataEntityId = "data-parentfdeid";
Mscrm.InlineEditConstants.HtmlAttributeForRelatedEntityLookupType = "lookupType";
Mscrm.InlineEditConstants.IsDataUnboundControl = "isDataUnboundControl";
Mscrm.InlineEditConstants.IsInlineCheckBox = "isInlineCheckBox";
Mscrm.InlineEditConstants.IsEligibleForMarkComplete = "isEligibleForMarkComplete";
Mscrm.InlineEditConstants.HtmlAttributeForPicklistType = "data-picklisttype";
Mscrm.InlineEditConstants.HtmlAttributeForErrorDisplayContainer = "data-errorflyoutcontainer";
Mscrm.InlineEditConstants.HtmlAttributeForHasCompositeData = "hasCompositeData";
Mscrm.InlineEditConstants.HtmlAttributeForCompositionLinkControlId = "compositionLinkControlId";
Mscrm.InlineEditConstants.LinkControlFlyOutType = "viewportType";
Mscrm.InlineEditConstants.LinkControlDefinitionId = "linkcontroldefinitionid";
Mscrm.InlineEditConstants.HtmlAttributeForErrorIdentification = "hasError";
Mscrm.InlineEditConstants.HtmlAttributeForCompositeRequiredLevel = "compositeRequiredLevel";
Mscrm.InlineEditConstants.HtmlAttributeForQuickFormDefaultVisibility = "quickformdefaultvisibility";
Mscrm.InlineEditConstants.HtmlAttributeForQuickFormCollectionBegin = "data-qfccontrolstart";
Mscrm.InlineEditConstants.HtmlAttributeQuickFormChildIds = "data-qfchildids";
Mscrm.InlineEditConstants.HtmlAttributeFlyoutWidth = "flyoutWidthInPixels";
Mscrm.InlineEditConstants.HtmlAttributeFlyoutHeight = "flyoutHeightInPixels";
Mscrm.InlineEditConstants.HtmlAttributeQuickFormCollectionControlUniqueId = "data-qfcuniqueid";
Mscrm.InlineEditConstants.HtmlAttributeFlyoutViewportDom = "flyoutviewportdomid";
Mscrm.InlineEditConstants.HtmlAttributeForQuickCreateLinkControlBegin = "data-quickcreatelinkcontrolstart";
Mscrm.InlineEditConstants.UnboundControlIdPrefix = "unbound_";
Mscrm.InlineEditConstants.HtmlAttributeControlInitialized = "data-initialized";
Mscrm.InlineEditConstants.HtmlAttributeControlInitializing = "data-initializing";
Mscrm.InlineEditConstants.SecuredUpdate = "securedupdate";
Mscrm.InlineEditConstants.SecuredCreate = "securedcreate";
Mscrm.InlineEditConstants.SecuredRead = "securedread";
Mscrm.InlineEditConstants.NoFlsPermission = "1";
Mscrm.NavBarSharedConstants.printPreviewAvailable = "printPreviewAvailable";
Mscrm.RibbonConstants.jewelId = "Mscrm.Jewel";
Mscrm.RuleAppliesTo.none = 0;
Mscrm.RuleAppliesTo.primaryEntity = 1;
Mscrm.RuleAppliesTo.selectedEntity = 2;
Mscrm.RibbonRuleRelationshipType.noRelationship = 0;
Mscrm.RibbonRuleRelationshipType.oneToMany = 1;
Mscrm.RibbonRuleRelationshipType.manyToMany = 2;
Mscrm.RibbonContexts.form = "Form";
Mscrm.RibbonContexts.homepageGrid = "HomePageGrid";
Mscrm.RibbonContexts.subGridStandard = "SubGridStandard";
Mscrm.RibbonContexts.subGridAssociated = "SubGridAssociated";
Mscrm.TypeOfResource.Inline = "inline";
Mscrm.TypeOfResource.External = "external";
Mscrm.AggregatePerformanceMarkers.$3R = null;
Mscrm.XrmPage.data = null;
Mscrm.XrmPage.ui = null;
Mscrm.XrmPage.context = new Mscrm.GlobalContext;
Mscrm.XrmInternal.messages = new Mscrm.XrmSdkMessages;
Mscrm.DialogSize.imageUploadControlHeight = 390;
Mscrm.DialogSize.imageUploadControlWidth = 456;
Mscrm.EntityTypeCode.None = 0;
Mscrm.EntityTypeCode.Account = 1;
Mscrm.EntityTypeCode.ActivityMimeAttachment = 1001;
Mscrm.EntityTypeCode.ActivityParty = 135;
Mscrm.EntityTypeCode.ActivityPointer = 4200;
Mscrm.EntityTypeCode.Annotation = 5;
Mscrm.EntityTypeCode.AnnualFiscalCalendar = 2e3;
Mscrm.EntityTypeCode.Appointment = 4201;
Mscrm.EntityTypeCode.AsyncOperation = 4700;
Mscrm.EntityTypeCode.AttributeMap = 4601;
Mscrm.EntityTypeCode.Audit = 4567;
Mscrm.EntityTypeCode.BulkDeleteFailure = 4425;
Mscrm.EntityTypeCode.BulkDeleteOperation = 4424;
Mscrm.EntityTypeCode.BulkOperation = 4406;
Mscrm.EntityTypeCode.BulkOperationLog = 4405;
Mscrm.EntityTypeCode.BusinessUnit = 10;
Mscrm.EntityTypeCode.BusinessUnitNewsArticle = 132;
Mscrm.EntityTypeCode.Calendar = 4003;
Mscrm.EntityTypeCode.CalendarRule = 4004;
Mscrm.EntityTypeCode.Campaign = 4400;
Mscrm.EntityTypeCode.CampaignActivity = 4402;
Mscrm.EntityTypeCode.CampaignResponse = 4401;
Mscrm.EntityTypeCode.Competitor = 123;
Mscrm.EntityTypeCode.ResourceGroup = 4007;
Mscrm.EntityTypeCode.ConstraintBasedGroup = 4007;
Mscrm.EntityTypeCode.Connection = 3234;
Mscrm.EntityTypeCode.ConnectionRole = 3231;
Mscrm.EntityTypeCode.Contact = 2;
Mscrm.EntityTypeCode.Contract = 1010;
Mscrm.EntityTypeCode.ContractDetail = 1011;
Mscrm.EntityTypeCode.ContractTemplate = 2011;
Mscrm.EntityTypeCode.ConvertRule = 9300;
Mscrm.EntityTypeCode.ConvertRuleItem = 9301;
Mscrm.EntityTypeCode.CustomerAddress = 1071;
Mscrm.EntityTypeCode.CustomerOpportunityRole = 4503;
Mscrm.EntityTypeCode.CustomerRelationship = 4502;
Mscrm.EntityTypeCode.Dependency = 7105;
Mscrm.EntityTypeCode.Discount = 1013;
Mscrm.EntityTypeCode.Position = 50;
Mscrm.EntityTypeCode.DiscountType = 1080;
Mscrm.EntityTypeCode.DisplayString = 4102;
Mscrm.EntityTypeCode.DocumentIndex = 126;
Mscrm.EntityTypeCode.DuplicateRule = 4414;
Mscrm.EntityTypeCode.DynamicProperty = 1048;
Mscrm.EntityTypeCode.DynamicPropertyInstance = 1333;
Mscrm.EntityTypeCode.DynamicPropertyAssociation = 1235;
Mscrm.EntityTypeCode.DynamicPropertyOptionSetItem = 1049;
Mscrm.EntityTypeCode.Email = 4202;
Mscrm.EntityTypeCode.SocialActivity = 4216;
Mscrm.EntityTypeCode.SocialProfile = 99;
Mscrm.EntityTypeCode.Entitlement = 9700;
Mscrm.EntityTypeCode.EntitlementChannel = 9701;
Mscrm.EntityTypeCode.RoutingRule = 8181;
Mscrm.EntityTypeCode.RoutingRuleItem = 8199;
Mscrm.EntityTypeCode.EntitlementTemplate = 9702;
Mscrm.EntityTypeCode.EntitlementTemplateChannel = 9703;
Mscrm.EntityTypeCode.EmailServerProfile = 9605;
Mscrm.EntityTypeCode.Equipment = 4e3;
Mscrm.EntityTypeCode.Fax = 4204;
Mscrm.EntityTypeCode.FieldSecurityProfile = 1200;
Mscrm.EntityTypeCode.FieldPermission = 1201;
Mscrm.EntityTypeCode.FixedMonthlyFiscalCalendar = 2004;
Mscrm.EntityTypeCode.Goal = 9600;
Mscrm.EntityTypeCode.Mailbox = 9606;
Mscrm.EntityTypeCode.Metric = 9603;
Mscrm.EntityTypeCode.RollupField = 9604;
Mscrm.EntityTypeCode.GoalRollupQuery = 9602;
Mscrm.EntityTypeCode.ImportEntity = 4410;
Mscrm.EntityTypeCode.ImportFile = 4412;
Mscrm.EntityTypeCode.ImportJob = 9107;
Mscrm.EntityTypeCode.ImportLog = 4423;
Mscrm.EntityTypeCode.ImportMap = 4411;
Mscrm.EntityTypeCode.Incident = 112;
Mscrm.EntityTypeCode.IncidentResolution = 4206;
Mscrm.EntityTypeCode.Invoice = 1090;
Mscrm.EntityTypeCode.InvoiceDetail = 1091;
Mscrm.EntityTypeCode.KbArticle = 127;
Mscrm.EntityTypeCode.KbArticleComment = 1082;
Mscrm.EntityTypeCode.KbArticleTemplate = 1016;
Mscrm.EntityTypeCode.Lead = 4;
Mscrm.EntityTypeCode.Letter = 4207;
Mscrm.EntityTypeCode.List = 4300;
Mscrm.EntityTypeCode.ListMember = 4301;
Mscrm.EntityTypeCode.MailMergeTemplate = 9106;
Mscrm.EntityTypeCode.MonthlyFiscalCalendar = 2003;
Mscrm.EntityTypeCode.Opportunity = 3;
Mscrm.EntityTypeCode.OpportunityClose = 4208;
Mscrm.EntityTypeCode.OpportunityProduct = 1083;
Mscrm.EntityTypeCode.OrderClose = 4209;
Mscrm.EntityTypeCode.Organization = 1019;
Mscrm.EntityTypeCode.PhoneCall = 4210;
Mscrm.EntityTypeCode.PluginAssembly = 4605;
Mscrm.EntityTypeCode.PluginType = 4602;
Mscrm.EntityTypeCode.PluginTypeStatistic = 4603;
Mscrm.EntityTypeCode.Post = 8e3;
Mscrm.EntityTypeCode.PostFollow = 8003;
Mscrm.EntityTypeCode.PostLike = 8006;
Mscrm.EntityTypeCode.PriceLevel = 1022;
Mscrm.EntityTypeCode.Privilege = 1023;
Mscrm.EntityTypeCode.Product = 1024;
Mscrm.EntityTypeCode.ProductAssociate = 1025;
Mscrm.EntityTypeCode.ProductSubstitute = 1028;
Mscrm.EntityTypeCode.ProductPriceLevel = 1026;
Mscrm.EntityTypeCode.Publisher = 7101;
Mscrm.EntityTypeCode.QuarterlyFiscalCalendar = 2002;
Mscrm.EntityTypeCode.Queue = 2020;
Mscrm.EntityTypeCode.QueueItem = 2029;
Mscrm.EntityTypeCode.Quote = 1084;
Mscrm.EntityTypeCode.QuoteClose = 4211;
Mscrm.EntityTypeCode.QuoteDetail = 1085;
Mscrm.EntityTypeCode.RecurringAppointmentMaster = 4251;
Mscrm.EntityTypeCode.RelationshipRole = 4500;
Mscrm.EntityTypeCode.RelationshipRoleMap = 4501;
Mscrm.EntityTypeCode.SLA = 9750;
Mscrm.EntityTypeCode.SLAItem = 9751;
Mscrm.EntityTypeCode.SLAKPIInstance = 9752;
Mscrm.EntityTypeCode.Report = 9100;
Mscrm.EntityTypeCode.ResourceSpec = 4006;
Mscrm.EntityTypeCode.RibbonCommand = 1116;
Mscrm.EntityTypeCode.RibbonContextGroup = 1115;
Mscrm.EntityTypeCode.RibbonCustomization = 1120;
Mscrm.EntityTypeCode.RibbonDiff = 1130;
Mscrm.EntityTypeCode.RibbonRule = 1117;
Mscrm.EntityTypeCode.RibbonTabToCommandMap = 1113;
Mscrm.EntityTypeCode.SharePointSite = 9502;
Mscrm.EntityTypeCode.SharePointDocumentLocation = 9508;
Mscrm.EntityTypeCode.SharePointDocument = 9507;
Mscrm.EntityTypeCode.SharePointData = 9509;
Mscrm.EntityTypeCode.SystemApplicationMetadata = 7e3;
Mscrm.EntityTypeCode.SystemForm = 1030;
Mscrm.EntityTypeCode.UserForm = 1031;
Mscrm.EntityTypeCode.Role = 1036;
Mscrm.EntityTypeCode.SalesLiterature = 1038;
Mscrm.EntityTypeCode.SalesLiteratureItem = 1070;
Mscrm.EntityTypeCode.SalesOrder = 1088;
Mscrm.EntityTypeCode.SalesOrderDetail = 1089;
Mscrm.EntityTypeCode.SavedQuery = 1039;
Mscrm.EntityTypeCode.SavedQueryVisualization = 1111;
Mscrm.EntityTypeCode.SdkMessageProcessingStep = 4608;
Mscrm.EntityTypeCode.SdkMessageProcessingStepImage = 4615;
Mscrm.EntityTypeCode.SemiAnnualFiscalCalendar = 2001;
Mscrm.EntityTypeCode.Service = 4001;
Mscrm.EntityTypeCode.ServiceAppointment = 4214;
Mscrm.EntityTypeCode.ServiceEndpoint = 4618;
Mscrm.EntityTypeCode.Site = 4009;
Mscrm.EntityTypeCode.SiteMap = 4709;
Mscrm.EntityTypeCode.Solution = 7100;
Mscrm.EntityTypeCode.SolutionComponent = 7103;
Mscrm.EntityTypeCode.Subject = 129;
Mscrm.EntityTypeCode.SystemUser = 8;
Mscrm.EntityTypeCode.Task = 4212;
Mscrm.EntityTypeCode.Team = 9;
Mscrm.EntityTypeCode.Template = 2010;
Mscrm.EntityTypeCode.Territory = 2013;
Mscrm.EntityTypeCode.TraceLog = 8050;
Mscrm.EntityTypeCode.TransactionCurrency = 9105;
Mscrm.EntityTypeCode.UnresolvedAddress = 2012;
Mscrm.EntityTypeCode.UoM = 1055;
Mscrm.EntityTypeCode.UoMSchedule = 1056;
Mscrm.EntityTypeCode.UserApplicationMetadata = 7001;
Mscrm.EntityTypeCode.UserFiscalCalendar = 1086;
Mscrm.EntityTypeCode.UserQuery = 4230;
Mscrm.EntityTypeCode.UserQueryVisualization = 1112;
Mscrm.EntityTypeCode.UserSettings = 150;
Mscrm.EntityTypeCode.Workflow = 4703;
Mscrm.EntityTypeCode.WebResource = 9333;
Mscrm.EntityTypeCode.HierarchyRule = 8840;
Mscrm.EntityTypeCode.ServiceRestrictionCalendarRule = 5003;
Mscrm.EntityTypeCode.TimeOffCalendarRule = 5004;
Mscrm.EntityTypeCode.HolidayCalendarRule = 5005;
Mscrm.EntityTypeCode.OccurrenceCalendarRule = 5006;
Mscrm.EntityTypeCode.RecurrenceCalendarRule = 5007;
Mscrm.EntityTypeCode.OccurringWorkShift = 5008;
Mscrm.EntityTypeCode.RecurringWorkShift = 5009;
Mscrm.EntityTypeCode.NotWorkingWorkShift = 5010;
Mscrm.EntityTypeCode.ActivityScheduling = 5011;
Mscrm.EntityTypeCode.AppLicense = 9002;
Mscrm.EntityTypeCode.AppSalesPerson = 9003;
Mscrm.EntityTypeCode.AppOfflineFilter = 9004;
Mscrm.EntityTypeCode.AppWorkflowInstance = 9005;
Mscrm.EntityTypeCode.ReportPropertyDialog = 9099;
Mscrm.EntityTypeCode.ScriptErrorDialog = 9200;
Mscrm.EntityTypeCode.ScriptErrorDetailsDialog = 9201;
Mscrm.EntityTypeCode.DuplicateDetectionDialog = 9203;
Mscrm.EntityTypeCode.BulkDeleteWizardDialog = 9204;
Mscrm.EntityTypeCode.ImportWizardDialog = 9205;
Mscrm.EntityTypeCode.UnresolvedEmailParty = 9206;
Mscrm.EntityTypeCode.SolutionExportWizard = 9207;
Mscrm.EntityTypeCode.SolutionImportWizard = 9208;
Mscrm.EntityTypeCode.AccountAddress = 1e3;
Mscrm.EntityTypeCode.ContactAddress = 1008;
Mscrm.EntityTypeCode.NewKbArticle = 9202;
Mscrm.EntityTypeCode.Entity = 9801;
Mscrm.EntityTypeCode.Attribute = 9802;
Mscrm.EntityTypeCode.Relationship = 9803;
Mscrm.EntityTypeCode.OptionSet = 9804;
Mscrm.EntityTypeCode.EntityRelationship = 9805;
Mscrm.EntityTypeCode.AttributePicklistValue = 9806;
Mscrm.EntityTypeCode.EntityRelationshipRole = 9807;
Mscrm.EntityTypeCode.RolePrivileges = 9808;
Mscrm.EntityTypeCode.LocalizedLabel = 9809;
Mscrm.EntityTypeCode.ViewAttribute = 9810;
Mscrm.EntityTypeCode.RoleTemplatePrivileges = 9811;
Mscrm.EntityTypeCode.BaseAddEntityObjectTypeCode = 1e4;
Mscrm.EntityTypeCode.InternalAddress = 1003;
Mscrm.EntityTypeCode.CompetitorAddress = 1004;
Mscrm.EntityTypeCode.LeadAddress = 1017;
Mscrm.EntityTypeCode.OrganizationUI = 1021;
Mscrm.EntityTypeCode.RoleTemplate = 1037;
Mscrm.EntityTypeCode.License = 2027;
Mscrm.EntityTypeCode.IntegrationStatus = 3e3;
Mscrm.EntityTypeCode.SubscriptionSyncInfo = 33;
Mscrm.EntityTypeCode.EntityMap = 4600;
Mscrm.EntityTypeCode.Notification = 4110;
Mscrm.EntityTypeCode.BusinessUnitMap = 6;
Mscrm.EntityTypeCode.DisplayStringMap = 4101;
Mscrm.EntityTypeCode.Subscription = 29;
Mscrm.EntityTypeCode.FilterTemplate = 30;
Mscrm.EntityTypeCode.SubscriptionClients = 1072;
Mscrm.EntityTypeCode.ColumnMapping = 4417;
Mscrm.EntityTypeCode.SubscriptionManuallyTrackedObject = 34;
Mscrm.EntityTypeCode.DuplicateRecord = 4415;
Mscrm.EntityTypeCode.DuplicateRuleCondition = 4416;
Mscrm.EntityTypeCode.EmailHash = 4023;
Mscrm.EntityTypeCode.ImportData = 4413;
Mscrm.EntityTypeCode.IsvConfig = 4705;
Mscrm.EntityTypeCode.LookUpMapping = 4419;
Mscrm.EntityTypeCode.OwnerMapping = 4420;
Mscrm.EntityTypeCode.PickListMapping = 4418;
Mscrm.EntityTypeCode.SdkMessage = 4606;
Mscrm.EntityTypeCode.SdkMessageFilter = 4607;
Mscrm.EntityTypeCode.SdkMessagePair = 4613;
Mscrm.EntityTypeCode.SdkMessageRequest = 4609;
Mscrm.EntityTypeCode.SdkMessageRequestField = 4614;
Mscrm.EntityTypeCode.SdkMessageResponse = 4610;
Mscrm.EntityTypeCode.SdkMessageResponseField = 4611;
Mscrm.EntityTypeCode.TransformationMapping = 4426;
Mscrm.EntityTypeCode.WorkflowWaitSubscription = 4702;
Mscrm.EntityTypeCode.SystemUserPrincipals = 14;
Mscrm.EntityTypeCode.WorkflowDependency = 4704;
Mscrm.EntityTypeCode.TransformationParameterMapping = 4427;
Mscrm.EntityTypeCode.ApplicationFile = 4707;
Mscrm.EntityTypeCode.PrivilegeObjectTypeCodes = 31;
Mscrm.EntityTypeCode.ClientUpdate = 36;
Mscrm.EntityTypeCode.OrganizationStatistic = 4708;
Mscrm.EntityTypeCode.ResourceGroupExpansion = 4010;
Mscrm.EntityTypeCode.InterProcessLock = 4011;
Mscrm.EntityTypeCode.SdkMessageProcessingStepSecureConfig = 4616;
Mscrm.EntityTypeCode.TimeZoneDefinition = 4810;
Mscrm.EntityTypeCode.TimeZoneLocalizedName = 4812;
Mscrm.EntityTypeCode.TimeZoneRule = 4811;
Mscrm.EntityTypeCode.WebWizard = 4800;
Mscrm.EntityTypeCode.WizardAccessPrivilege = 4803;
Mscrm.EntityTypeCode.WizardPage = 4802;
Mscrm.EntityTypeCode.WorkflowLog = 4706;
Mscrm.EntityTypeCode.ProcessSession = 4710;
Mscrm.EntityTypeCode.AuthorizationServer = 1094;
Mscrm.EntityTypeCode.PartnerApplication = 1095;
Mscrm.ProductStructure.Product = 1;
Mscrm.ProductStructure.ProductFamily = 2;
Mscrm.ProductStructure.ProductBundle = 3;
Mscrm.DynamicPropertyDataType.OptionSet = 0;
Mscrm.DynamicPropertyDataType.Decimal = 1;
Mscrm.DynamicPropertyDataType.Double = 2;
Mscrm.DynamicPropertyDataType.String = 3;
Mscrm.DynamicPropertyDataType.Integer = 4;
Mscrm.DynamicPropertyIsReadOnly.No = 0;
Mscrm.DynamicPropertyIsReadOnly.Yes = 1;
Mscrm.DynamicPropertyIsRequired.No = 0;
Mscrm.DynamicPropertyIsRequired.Yes = 1;
Mscrm.DynamicPropertyIsHidden.No = 0;
Mscrm.DynamicPropertyIsHidden.Yes = 1;
Mscrm.ProductStatusCode.Draft = 0;
Mscrm.ProductStatusCode.Active = 1;
Mscrm.ProductStatusCode.Retired = 2;
Mscrm.ProductStatusCode.DraftActive = 3;
Mscrm.ProductStateCode.Active = 0;
Mscrm.ProductStateCode.Retired = 1;
Mscrm.ProductStateCode.Draft = 2;
Mscrm.ProductStateCode.DraftActive = 3;
Mscrm.ProductStateCodeDescription.Active = "Active";
Mscrm.ProductStateCodeDescription.Inactive = "Inactive";
Mscrm.ProductStateCodeDescription.Draft = "Draft";
Mscrm.ProductStateCodeDescription.UnderRevision = "Under Revision";
Mscrm.EventKeys.click = "click";
Mscrm.EventKeys.change = "change";
Mscrm.EventKeys.onChange = "onchange";
Mscrm.EventKeys.focus = "focus";
Mscrm.EventKeys.blur = "blur";
Mscrm.EventKeys.keyDown = "keydown";
Mscrm.EventKeys.mouseOut = "mouseout";
Mscrm.EventKeys.mouseOver = "mouseover";
Mscrm.EventKeys.mouseDown = "mousedown";
Mscrm.EventKeys.mouseUp = "mouseup";
Mscrm.LocaleIds.hebrew = 1037;
Mscrm.LocaleIds.englishUs = 1033;
Mscrm.NavBarStatusConstant.on = "on";
Mscrm.NavBarStatusConstant.off = "off";
Mscrm.NavBarStatusConstant.entity = "entity";
Mscrm.SolutionComponentType.None = 0;
Mscrm.SolutionComponentType.Entity = 1;
Mscrm.SolutionComponentType.Attribute = 2;
Mscrm.SolutionComponentType.Relationship = 3;
Mscrm.SolutionComponentType.OptionSet = 9;
Mscrm.SolutionComponentType.EntityRelationship = 10;
Mscrm.SolutionComponentType.EntityRelationshipRelationships = 12;
Mscrm.SolutionComponentType.Role = 20;
Mscrm.SolutionComponentType.Organization = 25;
Mscrm.SolutionComponentType.SavedQuery = 26;
Mscrm.SolutionComponentType.Workflow = 29;
Mscrm.SolutionComponentType.Template = 36;
Mscrm.SolutionComponentType.ContractTemplate = 37;
Mscrm.SolutionComponentType.KbArticleTemplate = 38;
Mscrm.SolutionComponentType.MailMergeTemplate = 39;
Mscrm.SolutionComponentType.DuplicateRule = 44;
Mscrm.SolutionComponentType.EntityMap = 46;
Mscrm.SolutionComponentType.AttributeMap = 47;
Mscrm.SolutionComponentType.SavedQueryVisualization = 59;
Mscrm.SolutionComponentType.SystemForm = 60;
Mscrm.SolutionComponentType.WebResource = 61;
Mscrm.SolutionComponentType.ConnectionRole = 63;
Mscrm.SolutionComponentType.HierarchyRule = 65;
Mscrm.WebResourceConstants.sizeModeStretchToFit = "StretchToFit";
Mscrm.WebResourceConstants.sizeModeStretchMaintainAspectRatio = "StretchMaintainAspectRatio";
Mscrm.WebResourceConstants.sizeModeSpecific = "Specific";
Mscrm.CrmHeader.$1J = null;
Mscrm.CrmHeader.$1d = null;
Mscrm.Dialog.auto = -1;
Mscrm.Dialog.numZLevels = 4;
Mscrm.Dialog.$7d = 0;
Mscrm.InlineMenuItem.$6 = {};
Mscrm.Menu.$1O = -1;
Mscrm.Menu.$3x = null;
Mscrm.MenuItem.$5m = 0;
Mscrm.MenuItem.defaultStylePrefix = "";
Mscrm.MenuItem.formaT_IMAGE_SEP_TITLE_AUX = 0;
Mscrm.MenuItem.formaT_AUX_IMAGE_SEP_TITLE = 1;
Mscrm.MenuItem.$5Z = {};
Mscrm.MenuStyles.defaultStylePrefix = "";
Mscrm.MenuStyles.recentlyViewedStylePrefix = "RV";
Mscrm.MenuStyles.recordSelectorStylePrefix = "RS";
Mscrm.MenuStyles.contextMenuStylePrefix = "CM";
Mscrm.MenuStyles.activityViewSelectorStylePrefix = "AVS";
Mscrm.MenuStyles.viewSelectorStylePrefix = "VS";
Mscrm.MenuStyles.viewSelectorHeaderStylePrefix = "VS-header";
Mscrm.MenuStyles.formSelectorStylePrefix = "FS";
Mscrm.MenuStyles.multiSelectStylePrefix = "MS";
Mscrm.MenuStyles.lookupMruStylePrefix = "LK";
Mscrm.MenuStyles.inlineLookupStylePrefix = "IL";
Mscrm.MenuStyles.notification = "Ntfc";
Mscrm.MenuStyles.popupStylePrefix = "POPUP";
Mscrm.MenuStyles.quirksSuffix = "-qrk";
Mscrm.MenuStyles.disabledStyle = "ms-crm-MenuItem-Disabled";
Mscrm.CrmBrowser.$3W = null;
Mscrm.CrmUIComponent.$$cctor();
Mscrm.CurrencyValidator.$8D = 4;
Mscrm.CurrencyValidator.$8E = 1;
Mscrm.CurrencyValidator.$8B = 100;
Mscrm.CurrencyValidator.$8C = 1;
Mscrm.CurrencyValidator.$4L = null;
Mscrm.CurrencyValidator.$3H = null;
Mscrm.CurrencyValidator.$4M = null;
Mscrm.CurrencyValidator.$4Q = null;
Mscrm.CurrencyValidator.$14 = null;
Mscrm.CurrencyValidator.$16 = null;
Mscrm.CurrencyValidator.$15 = null;
Mscrm.CurrencyValidator.$4c = null;
Mscrm.CurrencyValidator.$4S = null;
Mscrm.CurrencyValidator.$2h = null;
Mscrm.CurrencyValidator.$4P = null;
Mscrm.CurrencyValidator.$4b = null;
Mscrm.CurrencyValidator.$4e = null;
Mscrm.CurrencyValidator.$5d = null;
Mscrm.CrmUri.versionStampParameterName = "ver";
Mscrm.CrmUri.cssLcidParameterName = "lcid";
Mscrm.CrmUri.$8H = new RegExp("\\.bmp$|\\.css$|\\.css\\.aspx$|\\.gif$|\\.htc$|\\.htc\\.aspx$|\\.ico$|\\.jpg$|\\.js$|\\.js\\.aspx$|\\.png$|\\.xsl$|global\\.ashx$", "i");
Mscrm.CrmWindow.onBeforeUnloadHandler = null;
Mscrm.CrmWindow.onUnloadHandler = null;
Mscrm.CrmWindow.dialogRetryReturnValue = "___RETRY___";
Mscrm.CrmWindow.floatingDialogHostingElementId = "FloatingDialog";
Mscrm.CrmWindow.defaultDialogWidth = 500;
Mscrm.CrmWindow.defaultDialogHeight = 270;
Mscrm.CrmWindow.$1a = {};
Mscrm.CrmWindow.$6X = ["/_static/loading.htm"];
Mscrm.CrmWindow.$3e = {};
Mscrm.CrmWindow.$1M = {};
Mscrm.CrmWindow.$3A = true;
Mscrm.DateTimeUtility.$6S = new Date(9999, 11, 30);
Mscrm.DateTimeUtility.$6T = new Date(1900, 0, 1);
Mscrm.FloatingDialog.$3N = 0;
Mscrm.FloatingDialog.$k = null;
Mscrm.Form.formHeaderContainerId = "formHeaderContainer";
Mscrm.Form.formFooterContainerId = "formFooterContainer";
Mscrm.Form.refreshFormFooterContainerId = "refreshFormFooterContainer";
Mscrm.FormControlInputBehavior.dataValueChangeEventKey = "OnDataValueChange";
Mscrm.GlobalEvents.$W = null;
Mscrm.GlobalEvents.$4U = false;
Mscrm.GlobalEvents.$$cctor();
Mscrm.ImageStrip.$3m = null;
Mscrm.ImageStrip.$7V = new RegExp("(\\s|^)(ms-crm-ImageStrip-\\S+)(\\s|$)");
Mscrm.TypeNames.numberType = "number";
Mscrm.TypeNames.stringType = "string";
Mscrm.TypeNames.booleanType = "boolean";
Mscrm.TypeNames.objectType = "object";
Mscrm.TypeNames.functionType = "function";
Mscrm.TypeNames.undefinedType = "undefined";
Mscrm.TypeNames.unknownType = "unknown";
Mscrm.ClassNames.argumentsClass = "Arguments";
Mscrm.ClassNames.arrayClass = "Array";
Mscrm.ClassNames.booleanClass = "Boolean";
Mscrm.ClassNames.dateClass = "Date";
Mscrm.ClassNames.errorClass = "Error";
Mscrm.ClassNames.functionClass = "Function";
Mscrm.ClassNames.jsonClass = "JSON";
Mscrm.ClassNames.mathClass = "Math";
Mscrm.ClassNames.numberClass = "Number";
Mscrm.ClassNames.objectClass = "Object";
Mscrm.ClassNames.regExpClass = "RegExp";
Mscrm.ClassNames.stringClass = "String";
Mscrm.InlineContentLoader.$S = null;
Mscrm.InlineContentLoader.$1J = null;
Mscrm.InlineContentLoader.$1d = null;
Mscrm.InlineContentLoader.$$cctor();
Mscrm.NumberUtility.$4x = ["\uff41", "\uff4d", "\uff50", "\uff21", "\uff2d", "\uff30", "\u2019", "\u3000", "\uff1a", "\u3001", "\uff0c", "\uff0d", "\u30fc", "\u2015", "\u2010", "\uff0e", "\u3002", "\uff0f", "\uff10", "\uff11", "\uff12", "\uff13", "\uff14", "\uff15", "\uff16", "\uff17", "\uff18", "\uff19"];
Mscrm.NumberUtility.$6D = ["a", "m", "p", "A", "M", "P", "'", " ", ":", ",", ",", "-", "-", "-", "-", ".", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
Mscrm.PerformanceTracing.$3c = null;
Mscrm.OutlookUtil.$4F = null;
Mscrm.CacheScope.Local = 0;
Mscrm.CacheScope.Global = 1;
Mscrm.CacheScope.ChildOnly = 2;
Mscrm.ResponseType.Json = "Json";
Mscrm.ResponseType.Html = "Html";
Mscrm.PageManager.$3q = false;
Mscrm.PageManager.$1x = false;
Mscrm.PageManagerBase.$41 = false;
Mscrm.PerceivedCommandBarHelper.$24 = "perceivedRibbonManager";
Mscrm.PerceivedCommandBarHelper.$5w = "transparentCover";
Mscrm.PerceivedCommandBarHelper.$5c = "crmRibbonManager";
Mscrm.PerceivedCommandBarHelper.$5k = "key";
Mscrm.PerceivedCommandBarHelper.$4V = "make_commandbar_hidden";
Mscrm.PerceivedCommandBarHelper.$2A = null;
Mscrm.InlineDialog.$3S = null;
Mscrm.InlineDialogUtility.inlineDialogHostingElementId = "InlineDialog";
Mscrm.InlineDialogUtility.inlineDialogId = "InlineDialogId";
Mscrm.InlineDialogUtility.noTabIndex = 32768;
Mscrm.InlineDialogUtility.minimumInlineDialogZIndex = 1005;
Mscrm.InlineDialogUtility.helpButton = "btnHelp";
Mscrm.InlineDialogUtility.crossButton = "btnCross";
Mscrm.InlineDialogUtility.cancelButton = "cmdDialogCancel";
Mscrm.InlineDialogUtility.removeButton = "btnRemove";
Mscrm.InlineDialogUtility.okButton = "butBegin";
Mscrm.InlineDialogUtility.overrideDefaultFocusAttribute = "overrideDefaultFocus";
Mscrm.InlineDialogUtility.overriddenFirstFocusableOnLoadElementIdAttribute = "overriddenFirstFocusableOnLoadElementId";
Mscrm.InlineDialogUtility.overriddenFirstFocusableElementIdAttribute = "overriddenFirstFocusableElementId";
Mscrm.ReportViewType.none = 0;
Mscrm.ReportViewType.viewInSrs = 1;
Mscrm.ReportViewType.viewAtServer = 2;
Mscrm.ReportViewType.viewInApp = 3;
Mscrm.ReportViewType.viewLinked = 4;
Mscrm.ReportUtil.$46 = {};
Mscrm.ReportUtil.$3u = null;
Mscrm.ReportUtil.$31 = null;
Mscrm.ScriptErrorReporting.$12 = null;
Mscrm.ScriptErrorReporting.$$cctor();
Mscrm.SessionInfo.$2j = false;
Mscrm.SolutionDecorater.$4W = null;
Mscrm.SolutionDecorater.$5e = null;
Mscrm.SolutionDecorater.solutionId = "appSolutionId";
Mscrm.ContextMenuAction.open = 0;
Mscrm.ContextMenuAction.openInNewWindow = 1;
Mscrm.ContextMenuAction.copyShortcut = 2;
Mscrm.ContextMenuAction.sendShortcut = 3;
Mscrm.ContextMenuAction.pinItem = 4;
Mscrm.ContextMenuAction.unpinItem = 5;
Mscrm.ContextMenuAction.print = 6;
Mscrm.ContextMenuAction.refresh = 7;
Mscrm.ContextMenuAction.openSource = 8;
Mscrm.HelpEntryPoint.helpEntryPointForm = "form";
Mscrm.HelpEntryPoint.helpEntryPointHierarchyChart = "hierarchychart";
Mscrm.Utilities.$4i = new RegExp("(^/WEBRESOURCES/)|(^/(%7B|\\{)[0-9]{15,22}(%7D|\\})/WEBRESOURCES/)", "i");
Mscrm.Utilities.$82 = new RegExp("WEBWIZARD/WIZARDCONTAINER\\.ASPX\\?WIZARDID=2F705211-E38E-4CF8-A0E3-980FC83025C6", "i");
Mscrm.Utilities.emptyString = "";
Mscrm.Utilities.$3w = null;
Mscrm.Utilities.$2v = new Array(0);
Mscrm.Utilities.$2P = 0;
Mscrm.Utilities.$2T = 0;
Mscrm.Utilities.$3s = null;
Mscrm.Utilities.$1T = 0;
Mscrm.Utilities.$3o = null;
Mscrm.Utilities.$1k = null;
Mscrm.Utilities.inlineMenuMinWidth = 300;
Mscrm.RequiredLevelNumber.none = 0;
Mscrm.RequiredLevelNumber.systemRequired = 1;
Mscrm.RequiredLevelNumber.required = 2;
Mscrm.RequiredLevelNumber.recommended = 3;
Mscrm.MetricsReporting.$z = null;
Mscrm.MetricsReporting.$$cctor();
Mscrm.CrmLocalStorage.$32 = null;
Mscrm.FeatureControl.$4n = new Mscrm.DefaultFeatureControlChecks;
Mscrm.FeatureNames.RefreshFall = "FCB.Refresh.Fall";
Mscrm.FeatureNames.RefreshSales = "FCB.Refresh.Sales";
Mscrm.FeatureNames.RefreshService = "FCB.Refresh.Service";
Mscrm.FeatureNames.RefreshCommonInfrastructure = "FCB.Refresh.Common";
Mscrm.FeatureNames.OrionAir = "FCB.Orion.Air";
Mscrm.FeatureNames.HelpRedirect = "FCB.HelpRedirect";
Mscrm.FeatureNames.SharePointS2S = "FCB.SharePointS2S";
Mscrm.FeatureNames.SocialInsights = "FCB.SocialInsights";
Mscrm.FeatureNames.LeoServiceFeatures = "FCB.LeoServiceFeatures";
Mscrm.FeatureNames.CalculatedFields = "FCB.CalculatedFields";
Mscrm.FeatureNames.Rollups = "FCB.Rollups";
Mscrm.FeatureNames.RollupsPerformance = "FCB.RollupsPerformance";
Mscrm.FeatureNames.MocaMashups = "FCB.Moca.Mashups";
Mscrm.FeatureNames.FullTextSearch = "FCB.FullTextSearch";
Mscrm.MediaQueryEvaluator._instance = null;
Mscrm.OnLoadDeferredExecutor.$t = null;
Mscrm.Presence.PresenceControlFactory.$5E = false;
Mscrm.Presence.PresenceControlFactory.$2V = null;
Mscrm.Presence.PresenceControlFactory.$43 = null;
Mscrm.Presence.PresenceStatus.online = 0;
Mscrm.Presence.PresenceStatus.offline = 1;
Mscrm.Presence.PresenceStatus.away = 2;
Mscrm.Presence.PresenceStatus.busy = 3;
Mscrm.Presence.PresenceStatus.inCall = 5;
Mscrm.Presence.PresenceStatus.inMeeting = 7;
Mscrm.Presence.PresenceStatus.outOfOffice = 8;
Mscrm.Presence.PresenceStatus.unknown = 18;
Mscrm.InternalUtilities._String.Empty = "";
Mscrm.InternalUtilities._String.$7c = new RegExp("[\x0a\x0d]+");
Mscrm.InternalUtilities.EntityNames.None = "none";
Mscrm.InternalUtilities.EntityNames.Account = "account";
Mscrm.InternalUtilities.EntityNames.AccountLeads = "accountleads";
Mscrm.InternalUtilities.EntityNames.ActivityMimeAttachment = "activitymimeattachment";
Mscrm.InternalUtilities.EntityNames.ActivityParty = "activityparty";
Mscrm.InternalUtilities.EntityNames.ActivityPointer = "activitypointer";
Mscrm.InternalUtilities.EntityNames.Annotation = "annotation";
Mscrm.InternalUtilities.EntityNames.AnnualFiscalCalendar = "annualfiscalcalendar";
Mscrm.InternalUtilities.EntityNames.ApplicationFile = "applicationfile";
Mscrm.InternalUtilities.EntityNames.Appointment = "appointment";
Mscrm.InternalUtilities.EntityNames.AsyncOperation = "asyncoperation";
Mscrm.InternalUtilities.EntityNames.Attachment = "attachment";
Mscrm.InternalUtilities.EntityNames.AttributeMap = "attributemap";
Mscrm.InternalUtilities.EntityNames.Audit = "audit";
Mscrm.InternalUtilities.EntityNames.BulkDeleteFailure = "bulkdeletefailure";
Mscrm.InternalUtilities.EntityNames.BulkDeleteOperation = "bulkdeleteoperation";
Mscrm.InternalUtilities.EntityNames.BulkOperation = "bulkoperation";
Mscrm.InternalUtilities.EntityNames.BulkOperationLog = "bulkoperationlog";
Mscrm.InternalUtilities.EntityNames.BusinessUnit = "businessunit";
Mscrm.InternalUtilities.EntityNames.BusinessUnitMap = "businessunitmap";
Mscrm.InternalUtilities.EntityNames.BusinessUnitNewsArticle = "businessunitnewsarticle";
Mscrm.InternalUtilities.EntityNames.Calendar = "calendar";
Mscrm.InternalUtilities.EntityNames.CalendarRule = "calendarrule";
Mscrm.InternalUtilities.EntityNames.Campaign = "campaign";
Mscrm.InternalUtilities.EntityNames.CampaignActivity = "campaignactivity";
Mscrm.InternalUtilities.EntityNames.CampaignActivityItem = "campaignactivityitem";
Mscrm.InternalUtilities.EntityNames.CampaignItem = "campaignitem";
Mscrm.InternalUtilities.EntityNames.CampaignResponse = "campaignresponse";
Mscrm.InternalUtilities.EntityNames.ClientUpdate = "clientupdate";
Mscrm.InternalUtilities.EntityNames.ColumnMapping = "columnmapping";
Mscrm.InternalUtilities.EntityNames.Commitment = "commitment";
Mscrm.InternalUtilities.EntityNames.Competitor = "competitor";
Mscrm.InternalUtilities.EntityNames.CompetitorAddress = "competitoraddress";
Mscrm.InternalUtilities.EntityNames.CompetitorProduct = "competitorproduct";
Mscrm.InternalUtilities.EntityNames.CompetitorSalesLiterature = "competitorsalesliterature";
Mscrm.InternalUtilities.EntityNames.ComplexControl = "complexcontrol";
Mscrm.InternalUtilities.EntityNames.Connection = "connection";
Mscrm.InternalUtilities.EntityNames.ConnectionRole = "connectionrole";
Mscrm.InternalUtilities.EntityNames.ConnectionRoleAssociation = "connectionroleassociation";
Mscrm.InternalUtilities.EntityNames.ConnectionRoleObjectTypeCode = "connectionroleobjecttypecode";
Mscrm.InternalUtilities.EntityNames.ConvertRule = "convertrule";
Mscrm.InternalUtilities.EntityNames.ConvertRuleItem = "convertruleitem";
Mscrm.InternalUtilities.EntityNames.ConstraintBasedGroup = "constraintbasedgroup";
Mscrm.InternalUtilities.EntityNames.Contact = "contact";
Mscrm.InternalUtilities.EntityNames.ContactInvoices = "contactinvoices";
Mscrm.InternalUtilities.EntityNames.ContactLeads = "contactleads";
Mscrm.InternalUtilities.EntityNames.ContactOrders = "contactorders";
Mscrm.InternalUtilities.EntityNames.ContactQuotes = "contactquotes";
Mscrm.InternalUtilities.EntityNames.Contract = "contract";
Mscrm.InternalUtilities.EntityNames.ContractDetail = "contractdetail";
Mscrm.InternalUtilities.EntityNames.ContractTemplate = "contracttemplate";
Mscrm.InternalUtilities.EntityNames.CustomerAddress = "customeraddress";
Mscrm.InternalUtilities.EntityNames.CustomerOpportunityRole = "customeropportunityrole";
Mscrm.InternalUtilities.EntityNames.CustomerRelationship = "customerrelationship";
Mscrm.InternalUtilities.EntityNames.Dependency = "dependency";
Mscrm.InternalUtilities.EntityNames.DependencyNode = "dependencynode";
Mscrm.InternalUtilities.EntityNames.Discount = "discount";
Mscrm.InternalUtilities.EntityNames.DiscountType = "discounttype";
Mscrm.InternalUtilities.EntityNames.DisplayString = "displaystring";
Mscrm.InternalUtilities.EntityNames.DisplayStringMap = "displaystringmap";
Mscrm.InternalUtilities.EntityNames.DocumentIndex = "documentindex";
Mscrm.InternalUtilities.EntityNames.DuplicateRecord = "duplicaterecord";
Mscrm.InternalUtilities.EntityNames.DuplicateRule = "duplicaterule";
Mscrm.InternalUtilities.EntityNames.DuplicateRuleCondition = "duplicaterulecondition";
Mscrm.InternalUtilities.EntityNames.DynamicProperty = "dynamicproperty";
Mscrm.InternalUtilities.EntityNames.Email = "email";
Mscrm.InternalUtilities.EntityNames.EmailHash = "emailhash";
Mscrm.InternalUtilities.EntityNames.EmailSearch = "emailsearch";
Mscrm.InternalUtilities.EntityNames.Entitlement = "entitlement";
Mscrm.InternalUtilities.EntityNames.EntityMap = "entitymap";
Mscrm.InternalUtilities.EntityNames.Equipment = "equipment";
Mscrm.InternalUtilities.EntityNames.Fax = "fax";
Mscrm.InternalUtilities.EntityNames.FieldPermission = "fieldpermission";
Mscrm.InternalUtilities.EntityNames.FieldSecurityProfile = "fieldsecurityprofile";
Mscrm.InternalUtilities.EntityNames.FilterTemplate = "filtertemplate";
Mscrm.InternalUtilities.EntityNames.FixedMonthlyFiscalCalendar = "fixedmonthlyfiscalcalendar";
Mscrm.InternalUtilities.EntityNames.Goal = "goal";
Mscrm.InternalUtilities.EntityNames.GoalRollupQuery = "goalrollupquery";
Mscrm.InternalUtilities.EntityNames.Import = "import";
Mscrm.InternalUtilities.EntityNames.ImportData = "importdata";
Mscrm.InternalUtilities.EntityNames.ImportEntityMapping = "importentitymapping";
Mscrm.InternalUtilities.EntityNames.ImportFile = "importfile";
Mscrm.InternalUtilities.EntityNames.ImportJob = "importjob";
Mscrm.InternalUtilities.EntityNames.ImportLog = "importlog";
Mscrm.InternalUtilities.EntityNames.ImportMap = "importmap";
Mscrm.InternalUtilities.EntityNames.Incident = "incident";
Mscrm.InternalUtilities.EntityNames.IncidentResolution = "incidentresolution";
Mscrm.InternalUtilities.EntityNames.IntegrationStatus = "integrationstatus";
Mscrm.InternalUtilities.EntityNames.InternalAddress = "internaladdress";
Mscrm.InternalUtilities.EntityNames.InterProcessLock = "interprocesslock";
Mscrm.InternalUtilities.EntityNames.InvalidDependency = "invaliddependency";
Mscrm.InternalUtilities.EntityNames.Invoice = "invoice";
Mscrm.InternalUtilities.EntityNames.InvoiceDetail = "invoicedetail";
Mscrm.InternalUtilities.EntityNames.IsvConfig = "isvconfig";
Mscrm.InternalUtilities.EntityNames.KbArticle = "kbarticle";
Mscrm.InternalUtilities.EntityNames.KbArticleComment = "kbarticlecomment";
Mscrm.InternalUtilities.EntityNames.KbArticleTemplate = "kbarticletemplate";
Mscrm.InternalUtilities.EntityNames.Lead = "lead";
Mscrm.InternalUtilities.EntityNames.LeadAddress = "leadaddress";
Mscrm.InternalUtilities.EntityNames.LeadCompetitors = "leadcompetitors";
Mscrm.InternalUtilities.EntityNames.LeadProduct = "leadproduct";
Mscrm.InternalUtilities.EntityNames.Letter = "letter";
Mscrm.InternalUtilities.EntityNames.License = "license";
Mscrm.InternalUtilities.EntityNames.List = "list";
Mscrm.InternalUtilities.EntityNames.ListMember = "listmember";
Mscrm.InternalUtilities.EntityNames.LookUpMapping = "lookupmapping";
Mscrm.InternalUtilities.EntityNames.MailMergeTemplate = "mailmergetemplate";
Mscrm.InternalUtilities.EntityNames.Metric = "metric";
Mscrm.InternalUtilities.EntityNames.MonthlyFiscalCalendar = "monthlyfiscalcalendar";
Mscrm.InternalUtilities.EntityNames.Notification = "notification";
Mscrm.InternalUtilities.EntityNames.Opportunity = "opportunity";
Mscrm.InternalUtilities.EntityNames.OpportunityClose = "opportunityclose";
Mscrm.InternalUtilities.EntityNames.OpportunityCompetitors = "opportunitycompetitors";
Mscrm.InternalUtilities.EntityNames.OpportunityProduct = "opportunityproduct";
Mscrm.InternalUtilities.EntityNames.OrderClose = "orderclose";
Mscrm.InternalUtilities.EntityNames.Organization = "organization";
Mscrm.InternalUtilities.EntityNames.OrganizationStatistic = "organizationstatistic";
Mscrm.InternalUtilities.EntityNames.OrganizationUI = "organizationui";
Mscrm.InternalUtilities.EntityNames.Owner = "owner";
Mscrm.InternalUtilities.EntityNames.OwnerMapping = "ownermapping";
Mscrm.InternalUtilities.EntityNames.PhoneCall = "phonecall";
Mscrm.InternalUtilities.EntityNames.PickListMapping = "picklistmapping";
Mscrm.InternalUtilities.EntityNames.PluginAssembly = "pluginassembly";
Mscrm.InternalUtilities.EntityNames.PluginType = "plugintype";
Mscrm.InternalUtilities.EntityNames.PluginTypeStatistic = "plugintypestatistic";
Mscrm.InternalUtilities.EntityNames.Post = "post";
Mscrm.InternalUtilities.EntityNames.PostComment = "postcomment";
Mscrm.InternalUtilities.EntityNames.PostFollow = "postfollow";
Mscrm.InternalUtilities.EntityNames.PostLike = "postlike";
Mscrm.InternalUtilities.EntityNames.PostRegarding = "postregarding";
Mscrm.InternalUtilities.EntityNames.PostRole = "postrole";
Mscrm.InternalUtilities.EntityNames.PriceLevel = "pricelevel";
Mscrm.InternalUtilities.EntityNames.PrincipalAttributeAccessMap = "principalattributeaccessmap";
Mscrm.InternalUtilities.EntityNames.PrincipalEntityMap = "principalentitymap";
Mscrm.InternalUtilities.EntityNames.PrincipalObjectAccess = "principalobjectaccess";
Mscrm.InternalUtilities.EntityNames.PrincipalObjectAccessReadSnapshot = "principalobjectaccessreadsnapshot";
Mscrm.InternalUtilities.EntityNames.PrincipalObjectAttributeAccess = "principalobjectattributeaccess";
Mscrm.InternalUtilities.EntityNames.Privilege = "privilege";
Mscrm.InternalUtilities.EntityNames.PrivilegeObjectTypeCodes = "privilegeobjecttypecodes";
Mscrm.InternalUtilities.EntityNames.ProcessSession = "processsession";
Mscrm.InternalUtilities.EntityNames.Product = "product";
Mscrm.InternalUtilities.EntityNames.ProductAssociation = "productassociation";
Mscrm.InternalUtilities.EntityNames.ProductPriceLevel = "productpricelevel";
Mscrm.InternalUtilities.EntityNames.ProductSalesLiterature = "productsalesliterature";
Mscrm.InternalUtilities.EntityNames.ProductSubstitute = "productsubstitute";
Mscrm.InternalUtilities.EntityNames.Publisher = "publisher";
Mscrm.InternalUtilities.EntityNames.PublisherAddress = "publisheraddress";
Mscrm.InternalUtilities.EntityNames.QuarterlyFiscalCalendar = "quarterlyfiscalcalendar";
Mscrm.InternalUtilities.EntityNames.Queue = "queue";
Mscrm.InternalUtilities.EntityNames.QueueItem = "queueitem";
Mscrm.InternalUtilities.EntityNames.Quote = "quote";
Mscrm.InternalUtilities.EntityNames.QuoteClose = "quoteclose";
Mscrm.InternalUtilities.EntityNames.QuoteDetail = "quotedetail";
Mscrm.InternalUtilities.EntityNames.RecordCountSnapshot = "recordcountsnapshot";
Mscrm.InternalUtilities.EntityNames.RecurrenceRule = "recurrencerule";
Mscrm.InternalUtilities.EntityNames.RecurringAppointmentMaster = "recurringappointmentmaster";
Mscrm.InternalUtilities.EntityNames.RelationshipRole = "relationshiprole";
Mscrm.InternalUtilities.EntityNames.RelationshipRoleMap = "relationshiprolemap";
Mscrm.InternalUtilities.EntityNames.ReplicationBacklog = "replicationbacklog";
Mscrm.InternalUtilities.EntityNames.Report = "report";
Mscrm.InternalUtilities.EntityNames.ReportCategory = "reportcategory";
Mscrm.InternalUtilities.EntityNames.ReportEntity = "reportentity";
Mscrm.InternalUtilities.EntityNames.ReportLink = "reportlink";
Mscrm.InternalUtilities.EntityNames.ReportVisibility = "reportvisibility";
Mscrm.InternalUtilities.EntityNames.Resource = "resource";
Mscrm.InternalUtilities.EntityNames.ResourceGroup = "resourcegroup";
Mscrm.InternalUtilities.EntityNames.ResourceGroupExpansion = "resourcegroupexpansion";
Mscrm.InternalUtilities.EntityNames.ResourceSpec = "resourcespec";
Mscrm.InternalUtilities.EntityNames.RibbonCommand = "ribboncommand";
Mscrm.InternalUtilities.EntityNames.RibbonContextGroup = "ribboncontextgroup";
Mscrm.InternalUtilities.EntityNames.RibbonCustomization = "ribboncustomization";
Mscrm.InternalUtilities.EntityNames.RibbonDiff = "ribbondiff";
Mscrm.InternalUtilities.EntityNames.RibbonRule = "ribbonrule";
Mscrm.InternalUtilities.EntityNames.RibbonTabToCommandMap = "ribbontabtocommandmap";
Mscrm.InternalUtilities.EntityNames.Role = "role";
Mscrm.InternalUtilities.EntityNames.RolePrivileges = "roleprivileges";
Mscrm.InternalUtilities.EntityNames.RoleTemplate = "roletemplate";
Mscrm.InternalUtilities.EntityNames.RoleTemplatePrivileges = "roletemplateprivileges";
Mscrm.InternalUtilities.EntityNames.RollupField = "rollupfield";
Mscrm.InternalUtilities.EntityNames.SalesLiterature = "salesliterature";
Mscrm.InternalUtilities.EntityNames.SalesLiteratureItem = "salesliteratureitem";
Mscrm.InternalUtilities.EntityNames.SalesOrder = "salesorder";
Mscrm.InternalUtilities.EntityNames.SalesOrderDetail = "salesorderdetail";
Mscrm.InternalUtilities.EntityNames.SalesProcessInstance = "salesprocessinstance";
Mscrm.InternalUtilities.EntityNames.SavedQuery = "savedquery";
Mscrm.InternalUtilities.EntityNames.SavedQueryVisualization = "savedqueryvisualization";
Mscrm.InternalUtilities.EntityNames.SdkMessage = "sdkmessage";
Mscrm.InternalUtilities.EntityNames.SdkMessageFilter = "sdkmessagefilter";
Mscrm.InternalUtilities.EntityNames.SdkMessagePair = "sdkmessagepair";
Mscrm.InternalUtilities.EntityNames.SdkMessageProcessingStep = "sdkmessageprocessingstep";
Mscrm.InternalUtilities.EntityNames.SdkMessageProcessingStepImage = "sdkmessageprocessingstepimage";
Mscrm.InternalUtilities.EntityNames.SdkMessageProcessingStepSecureConfig = "sdkmessageprocessingstepsecureconfig";
Mscrm.InternalUtilities.EntityNames.SdkMessageRequest = "sdkmessagerequest";
Mscrm.InternalUtilities.EntityNames.SdkMessageRequestField = "sdkmessagerequestfield";
Mscrm.InternalUtilities.EntityNames.SdkMessageResponse = "sdkmessageresponse";
Mscrm.InternalUtilities.EntityNames.SdkMessageResponseField = "sdkmessageresponsefield";
Mscrm.InternalUtilities.EntityNames.SemiAnnualFiscalCalendar = "semiannualfiscalcalendar";
Mscrm.InternalUtilities.EntityNames.Service = "service";
Mscrm.InternalUtilities.EntityNames.ServiceAppointment = "serviceappointment";
Mscrm.InternalUtilities.EntityNames.ServiceContractContacts = "servicecontractcontacts";
Mscrm.InternalUtilities.EntityNames.ServiceEndpoint = "serviceendpoint";
Mscrm.InternalUtilities.EntityNames.SharePointDocumentLocation = "sharepointdocumentlocation";
Mscrm.InternalUtilities.EntityNames.SharePointData = "sharepointdata";
Mscrm.InternalUtilities.EntityNames.SharePointDocument = "sharepointdocument";
Mscrm.InternalUtilities.EntityNames.SharePointSite = "sharepointsite";
Mscrm.InternalUtilities.EntityNames.Site = "site";
Mscrm.InternalUtilities.EntityNames.SiteMap = "sitemap";
Mscrm.InternalUtilities.EntityNames.Solution = "solution";
Mscrm.InternalUtilities.EntityNames.SocialActivity = "socialactivity";
Mscrm.InternalUtilities.EntityNames.SocialProfile = "socialprofile";
Mscrm.InternalUtilities.EntityNames.SolutionComponent = "solutioncomponent";
Mscrm.InternalUtilities.EntityNames.StatusMap = "statusmap";
Mscrm.InternalUtilities.EntityNames.StringMap = "stringmap";
Mscrm.InternalUtilities.EntityNames.Subject = "subject";
Mscrm.InternalUtilities.EntityNames.Subscription = "subscription";
Mscrm.InternalUtilities.EntityNames.SubscriptionClients = "subscriptionclients";
Mscrm.InternalUtilities.EntityNames.SubscriptionManuallyTrackedObject = "subscriptionmanuallytrackedobject";
Mscrm.InternalUtilities.EntityNames.SubscriptionSyncInfo = "subscriptionsyncinfo";
Mscrm.InternalUtilities.EntityNames.SubscriptionTrackingDeletedObject = "subscriptiontrackingdeletedobject";
Mscrm.InternalUtilities.EntityNames.SystemForm = "systemform";
Mscrm.InternalUtilities.EntityNames.SystemUser = "systemuser";
Mscrm.InternalUtilities.EntityNames.Position = "position";
Mscrm.InternalUtilities.EntityNames.SystemUserBusinessUnitEntityMap = "systemuserbusinessunitentitymap";
Mscrm.InternalUtilities.EntityNames.SystemUserLicenses = "systemuserlicenses";
Mscrm.InternalUtilities.EntityNames.SystemUserPrincipals = "systemuserprincipals";
Mscrm.InternalUtilities.EntityNames.SystemUserProfiles = "systemuserprofiles";
Mscrm.InternalUtilities.EntityNames.SystemUserRoles = "systemuserroles";
Mscrm.InternalUtilities.EntityNames.Task = "task";
Mscrm.InternalUtilities.EntityNames.Team = "team";
Mscrm.InternalUtilities.EntityNames.TeamMembership = "teammembership";
Mscrm.InternalUtilities.EntityNames.TeamProfiles = "teamprofiles";
Mscrm.InternalUtilities.EntityNames.TeamRoles = "teamroles";
Mscrm.InternalUtilities.EntityNames.Template = "template";
Mscrm.InternalUtilities.EntityNames.Territory = "territory";
Mscrm.InternalUtilities.EntityNames.TimeZoneDefinition = "timezonedefinition";
Mscrm.InternalUtilities.EntityNames.TimeZoneLocalizedName = "timezonelocalizedname";
Mscrm.InternalUtilities.EntityNames.TimeZoneRule = "timezonerule";
Mscrm.InternalUtilities.EntityNames.TransactionCurrency = "transactioncurrency";
Mscrm.InternalUtilities.EntityNames.TransformationMapping = "transformationmapping";
Mscrm.InternalUtilities.EntityNames.TransformationParameterMapping = "transformationparametermapping";
Mscrm.InternalUtilities.EntityNames.UnresolvedAddress = "unresolvedaddress";
Mscrm.InternalUtilities.EntityNames.UoM = "uom";
Mscrm.InternalUtilities.EntityNames.UoMSchedule = "uomschedule";
Mscrm.InternalUtilities.EntityNames.UserEntityInstanceData = "userentityinstancedata";
Mscrm.InternalUtilities.EntityNames.UserEntityUISettings = "userentityuisettings";
Mscrm.InternalUtilities.EntityNames.UserFiscalCalendar = "userfiscalcalendar";
Mscrm.InternalUtilities.EntityNames.UserForm = "userform";
Mscrm.InternalUtilities.EntityNames.UserQuery = "userquery";
Mscrm.InternalUtilities.EntityNames.UserQueryVisualization = "userqueryvisualization";
Mscrm.InternalUtilities.EntityNames.UserSettings = "usersettings";
Mscrm.InternalUtilities.EntityNames.WebResource = "webresource";
Mscrm.InternalUtilities.EntityNames.WebWizard = "webwizard";
Mscrm.InternalUtilities.EntityNames.WizardAccessPrivilege = "wizardaccessprivilege";
Mscrm.InternalUtilities.EntityNames.WizardPage = "wizardpage";
Mscrm.InternalUtilities.EntityNames.Workflow = "workflow";
Mscrm.InternalUtilities.EntityNames.WorkflowDependency = "workflowdependency";
Mscrm.InternalUtilities.EntityNames.WorkflowLog = "workflowlog";
Mscrm.InternalUtilities.EntityNames.WorkflowWaitSubscription = "workflowwaitsubscription";
Mscrm.InternalUtilities.EntityNames.RoutingRule = "routingrule";
Mscrm.InternalUtilities.EntityNames.RoutingRuleItem = "routingruleitem";
Mscrm.InternalUtilities.EntityNames.HierarchyRule = "hiearchyrule";
Mscrm.InternalUtilities.EntityNames.SLA = "sla";
Mscrm.InternalUtilities.EntityNames.SLAItem = "slaitem";
Mscrm.InternalUtilities.EntityNames.SLAKPIInstance = "slakpiinstance";
Mscrm.InternalUtilities.EntityTypeCode.None = 0;
Mscrm.InternalUtilities.EntityTypeCode.Account = 1;
Mscrm.InternalUtilities.EntityTypeCode.AccountLeads = 16;
Mscrm.InternalUtilities.EntityTypeCode.ActivityMimeAttachment = 1001;
Mscrm.InternalUtilities.EntityTypeCode.ActivityParty = 135;
Mscrm.InternalUtilities.EntityTypeCode.ActivityPointer = 4200;
Mscrm.InternalUtilities.EntityTypeCode.Annotation = 5;
Mscrm.InternalUtilities.EntityTypeCode.AnnualFiscalCalendar = 2e3;
Mscrm.InternalUtilities.EntityTypeCode.ApplicationFile = 4707;
Mscrm.InternalUtilities.EntityTypeCode.Appointment = 4201;
Mscrm.InternalUtilities.EntityTypeCode.AsyncOperation = 4700;
Mscrm.InternalUtilities.EntityTypeCode.Attachment = 1002;
Mscrm.InternalUtilities.EntityTypeCode.AttributeMap = 4601;
Mscrm.InternalUtilities.EntityTypeCode.Audit = 4567;
Mscrm.InternalUtilities.EntityTypeCode.BulkDeleteFailure = 4425;
Mscrm.InternalUtilities.EntityTypeCode.BulkDeleteOperation = 4424;
Mscrm.InternalUtilities.EntityTypeCode.BulkOperation = 4406;
Mscrm.InternalUtilities.EntityTypeCode.BulkOperationLog = 4405;
Mscrm.InternalUtilities.EntityTypeCode.BusinessUnit = 10;
Mscrm.InternalUtilities.EntityTypeCode.BusinessUnitMap = 6;
Mscrm.InternalUtilities.EntityTypeCode.BusinessUnitNewsArticle = 132;
Mscrm.InternalUtilities.EntityTypeCode.Calendar = 4003;
Mscrm.InternalUtilities.EntityTypeCode.CalendarRule = 4004;
Mscrm.InternalUtilities.EntityTypeCode.Campaign = 4400;
Mscrm.InternalUtilities.EntityTypeCode.CampaignActivity = 4402;
Mscrm.InternalUtilities.EntityTypeCode.CampaignActivityItem = 4404;
Mscrm.InternalUtilities.EntityTypeCode.CampaignItem = 4403;
Mscrm.InternalUtilities.EntityTypeCode.CampaignResponse = 4401;
Mscrm.InternalUtilities.EntityTypeCode.ClientUpdate = 36;
Mscrm.InternalUtilities.EntityTypeCode.ColumnMapping = 4417;
Mscrm.InternalUtilities.EntityTypeCode.Commitment = 4215;
Mscrm.InternalUtilities.EntityTypeCode.Competitor = 123;
Mscrm.InternalUtilities.EntityTypeCode.CompetitorAddress = 1004;
Mscrm.InternalUtilities.EntityTypeCode.CompetitorProduct = 1006;
Mscrm.InternalUtilities.EntityTypeCode.CompetitorSalesLiterature = 26;
Mscrm.InternalUtilities.EntityTypeCode.ComplexControl = 9650;
Mscrm.InternalUtilities.EntityTypeCode.Connection = 3234;
Mscrm.InternalUtilities.EntityTypeCode.ConnectionRole = 3231;
Mscrm.InternalUtilities.EntityTypeCode.ConnectionRoleAssociation = 3232;
Mscrm.InternalUtilities.EntityTypeCode.ConnectionRoleObjectTypeCode = 3233;
Mscrm.InternalUtilities.EntityTypeCode.ConstraintBasedGroup = 4007;
Mscrm.InternalUtilities.EntityTypeCode.Contact = 2;
Mscrm.InternalUtilities.EntityTypeCode.ContactInvoices = 17;
Mscrm.InternalUtilities.EntityTypeCode.ContactLeads = 22;
Mscrm.InternalUtilities.EntityTypeCode.ContactOrders = 19;
Mscrm.InternalUtilities.EntityTypeCode.ContactQuotes = 18;
Mscrm.InternalUtilities.EntityTypeCode.Contract = 1010;
Mscrm.InternalUtilities.EntityTypeCode.ContractDetail = 1011;
Mscrm.InternalUtilities.EntityTypeCode.ContractTemplate = 2011;
Mscrm.InternalUtilities.EntityTypeCode.ConvertRule = 9300;
Mscrm.InternalUtilities.EntityTypeCode.ConvertRuleItem = 9301;
Mscrm.InternalUtilities.EntityTypeCode.CustomerAddress = 1071;
Mscrm.InternalUtilities.EntityTypeCode.CustomerOpportunityRole = 4503;
Mscrm.InternalUtilities.EntityTypeCode.CustomerRelationship = 4502;
Mscrm.InternalUtilities.EntityTypeCode.Dependency = 7105;
Mscrm.InternalUtilities.EntityTypeCode.DependencyNode = 7106;
Mscrm.InternalUtilities.EntityTypeCode.Discount = 1013;
Mscrm.InternalUtilities.EntityTypeCode.DiscountType = 1080;
Mscrm.InternalUtilities.EntityTypeCode.DisplayString = 4102;
Mscrm.InternalUtilities.EntityTypeCode.DisplayStringMap = 4101;
Mscrm.InternalUtilities.EntityTypeCode.DocumentIndex = 126;
Mscrm.InternalUtilities.EntityTypeCode.DuplicateRecord = 4415;
Mscrm.InternalUtilities.EntityTypeCode.DuplicateRule = 4414;
Mscrm.InternalUtilities.EntityTypeCode.DuplicateRuleCondition = 4416;
Mscrm.InternalUtilities.EntityTypeCode.DynamicProperty = 1048;
Mscrm.InternalUtilities.EntityTypeCode.DynamicPropertyAssociation = 1235;
Mscrm.InternalUtilities.EntityTypeCode.DynamicPropertyInstance = 1333;
Mscrm.InternalUtilities.EntityTypeCode.Email = 4202;
Mscrm.InternalUtilities.EntityTypeCode.SocialActivity = 4216;
Mscrm.InternalUtilities.EntityTypeCode.EmailHash = 4023;
Mscrm.InternalUtilities.EntityTypeCode.EmailSearch = 4299;
Mscrm.InternalUtilities.EntityTypeCode.Entitlement = 9700;
Mscrm.InternalUtilities.EntityTypeCode.EntitlementChannel = 9701;
Mscrm.InternalUtilities.EntityTypeCode.RoutingRule = 8181;
Mscrm.InternalUtilities.EntityTypeCode.RoutingRuleItem = 8199;
Mscrm.InternalUtilities.EntityTypeCode.SLA = 9750;
Mscrm.InternalUtilities.EntityTypeCode.SLAItem = 9751;
Mscrm.InternalUtilities.EntityTypeCode.SLAKPIInstance = 9752;
Mscrm.InternalUtilities.EntityTypeCode.EntitlementTemplate = 9702;
Mscrm.InternalUtilities.EntityTypeCode.EntitlementTemplateChannel = 9703;
Mscrm.InternalUtilities.EntityTypeCode.EntityMap = 4600;
Mscrm.InternalUtilities.EntityTypeCode.Equipment = 4e3;
Mscrm.InternalUtilities.EntityTypeCode.Fax = 4204;
Mscrm.InternalUtilities.EntityTypeCode.FieldPermission = 1201;
Mscrm.InternalUtilities.EntityTypeCode.FieldSecurityProfile = 1200;
Mscrm.InternalUtilities.EntityTypeCode.FilterTemplate = 30;
Mscrm.InternalUtilities.EntityTypeCode.FixedMonthlyFiscalCalendar = 2004;
Mscrm.InternalUtilities.EntityTypeCode.Goal = 9600;
Mscrm.InternalUtilities.EntityTypeCode.GoalRollupQuery = 9602;
Mscrm.InternalUtilities.EntityTypeCode.Import = 4410;
Mscrm.InternalUtilities.EntityTypeCode.ImportData = 4413;
Mscrm.InternalUtilities.EntityTypeCode.ImportEntityMapping = 4428;
Mscrm.InternalUtilities.EntityTypeCode.ImportFile = 4412;
Mscrm.InternalUtilities.EntityTypeCode.ImportJob = 9107;
Mscrm.InternalUtilities.EntityTypeCode.ImportLog = 4423;
Mscrm.InternalUtilities.EntityTypeCode.ImportMap = 4411;
Mscrm.InternalUtilities.EntityTypeCode.Incident = 112;
Mscrm.InternalUtilities.EntityTypeCode.IncidentResolution = 4206;
Mscrm.InternalUtilities.EntityTypeCode.IntegrationStatus = 3e3;
Mscrm.InternalUtilities.EntityTypeCode.InternalAddress = 1003;
Mscrm.InternalUtilities.EntityTypeCode.InterProcessLock = 4011;
Mscrm.InternalUtilities.EntityTypeCode.InvalidDependency = 7107;
Mscrm.InternalUtilities.EntityTypeCode.Invoice = 1090;
Mscrm.InternalUtilities.EntityTypeCode.InvoiceDetail = 1091;
Mscrm.InternalUtilities.EntityTypeCode.IsvConfig = 4705;
Mscrm.InternalUtilities.EntityTypeCode.KbArticle = 127;
Mscrm.InternalUtilities.EntityTypeCode.KbArticleComment = 1082;
Mscrm.InternalUtilities.EntityTypeCode.KbArticleTemplate = 1016;
Mscrm.InternalUtilities.EntityTypeCode.Lead = 4;
Mscrm.InternalUtilities.EntityTypeCode.LeadAddress = 1017;
Mscrm.InternalUtilities.EntityTypeCode.LeadCompetitors = 24;
Mscrm.InternalUtilities.EntityTypeCode.LeadProduct = 27;
Mscrm.InternalUtilities.EntityTypeCode.Letter = 4207;
Mscrm.InternalUtilities.EntityTypeCode.License = 2027;
Mscrm.InternalUtilities.EntityTypeCode.List = 4300;
Mscrm.InternalUtilities.EntityTypeCode.ListMember = 4301;
Mscrm.InternalUtilities.EntityTypeCode.LookUpMapping = 4419;
Mscrm.InternalUtilities.EntityTypeCode.MailMergeTemplate = 9106;
Mscrm.InternalUtilities.EntityTypeCode.Metric = 9603;
Mscrm.InternalUtilities.EntityTypeCode.MonthlyFiscalCalendar = 2003;
Mscrm.InternalUtilities.EntityTypeCode.Notification = 4110;
Mscrm.InternalUtilities.EntityTypeCode.Opportunity = 3;
Mscrm.InternalUtilities.EntityTypeCode.OpportunityClose = 4208;
Mscrm.InternalUtilities.EntityTypeCode.OpportunityCompetitors = 25;
Mscrm.InternalUtilities.EntityTypeCode.OpportunityProduct = 1083;
Mscrm.InternalUtilities.EntityTypeCode.OrderClose = 4209;
Mscrm.InternalUtilities.EntityTypeCode.Organization = 1019;
Mscrm.InternalUtilities.EntityTypeCode.OrganizationStatistic = 4708;
Mscrm.InternalUtilities.EntityTypeCode.OrganizationUI = 1021;
Mscrm.InternalUtilities.EntityTypeCode.Owner = 7;
Mscrm.InternalUtilities.EntityTypeCode.OwnerMapping = 4420;
Mscrm.InternalUtilities.EntityTypeCode.PhoneCall = 4210;
Mscrm.InternalUtilities.EntityTypeCode.PickListMapping = 4418;
Mscrm.InternalUtilities.EntityTypeCode.PluginAssembly = 4605;
Mscrm.InternalUtilities.EntityTypeCode.PluginType = 4602;
Mscrm.InternalUtilities.EntityTypeCode.PluginTypeStatistic = 4603;
Mscrm.InternalUtilities.EntityTypeCode.Post = 8e3;
Mscrm.InternalUtilities.EntityTypeCode.PostComment = 8005;
Mscrm.InternalUtilities.EntityTypeCode.PostFollow = 8003;
Mscrm.InternalUtilities.EntityTypeCode.PostLike = 8006;
Mscrm.InternalUtilities.EntityTypeCode.PostRegarding = 8002;
Mscrm.InternalUtilities.EntityTypeCode.PostRole = 8001;
Mscrm.InternalUtilities.EntityTypeCode.PriceLevel = 1022;
Mscrm.InternalUtilities.EntityTypeCode.PrincipalAttributeAccessMap = 43;
Mscrm.InternalUtilities.EntityTypeCode.PrincipalEntityMap = 41;
Mscrm.InternalUtilities.EntityTypeCode.PrincipalObjectAccess = 11;
Mscrm.InternalUtilities.EntityTypeCode.PrincipalObjectAccessReadSnapshot = 90;
Mscrm.InternalUtilities.EntityTypeCode.PrincipalObjectAttributeAccess = 44;
Mscrm.InternalUtilities.EntityTypeCode.Privilege = 1023;
Mscrm.InternalUtilities.EntityTypeCode.PrivilegeObjectTypeCodes = 31;
Mscrm.InternalUtilities.EntityTypeCode.ProcessSession = 4710;
Mscrm.InternalUtilities.EntityTypeCode.Product = 1024;
Mscrm.InternalUtilities.EntityTypeCode.ProductAssociation = 1025;
Mscrm.InternalUtilities.EntityTypeCode.ProductPriceLevel = 1026;
Mscrm.InternalUtilities.EntityTypeCode.ProductSalesLiterature = 21;
Mscrm.InternalUtilities.EntityTypeCode.ProductSubstitute = 1028;
Mscrm.InternalUtilities.EntityTypeCode.Publisher = 7101;
Mscrm.InternalUtilities.EntityTypeCode.PublisherAddress = 7102;
Mscrm.InternalUtilities.EntityTypeCode.QuarterlyFiscalCalendar = 2002;
Mscrm.InternalUtilities.EntityTypeCode.Queue = 2020;
Mscrm.InternalUtilities.EntityTypeCode.QueueItem = 2029;
Mscrm.InternalUtilities.EntityTypeCode.QueueMembership = 1213;
Mscrm.InternalUtilities.EntityTypeCode.Quote = 1084;
Mscrm.InternalUtilities.EntityTypeCode.QuoteClose = 4211;
Mscrm.InternalUtilities.EntityTypeCode.QuoteDetail = 1085;
Mscrm.InternalUtilities.EntityTypeCode.RecordCountSnapshot = 91;
Mscrm.InternalUtilities.EntityTypeCode.RecurrenceRule = 4250;
Mscrm.InternalUtilities.EntityTypeCode.RecurringAppointmentMaster = 4251;
Mscrm.InternalUtilities.EntityTypeCode.RelationshipRole = 4500;
Mscrm.InternalUtilities.EntityTypeCode.RelationshipRoleMap = 4501;
Mscrm.InternalUtilities.EntityTypeCode.ReplicationBacklog = 1140;
Mscrm.InternalUtilities.EntityTypeCode.Report = 9100;
Mscrm.InternalUtilities.EntityTypeCode.ReportCategory = 9102;
Mscrm.InternalUtilities.EntityTypeCode.ReportEntity = 9101;
Mscrm.InternalUtilities.EntityTypeCode.ReportLink = 9104;
Mscrm.InternalUtilities.EntityTypeCode.ReportVisibility = 9103;
Mscrm.InternalUtilities.EntityTypeCode.Resource = 4002;
Mscrm.InternalUtilities.EntityTypeCode.ResourceGroup = 4005;
Mscrm.InternalUtilities.EntityTypeCode.ResourceGroupExpansion = 4010;
Mscrm.InternalUtilities.EntityTypeCode.ResourceSpec = 4006;
Mscrm.InternalUtilities.EntityTypeCode.RibbonCommand = 1116;
Mscrm.InternalUtilities.EntityTypeCode.RibbonContextGroup = 1115;
Mscrm.InternalUtilities.EntityTypeCode.RibbonCustomization = 1120;
Mscrm.InternalUtilities.EntityTypeCode.RibbonDiff = 1130;
Mscrm.InternalUtilities.EntityTypeCode.RibbonRule = 1117;
Mscrm.InternalUtilities.EntityTypeCode.RibbonTabToCommandMap = 1113;
Mscrm.InternalUtilities.EntityTypeCode.Role = 1036;
Mscrm.InternalUtilities.EntityTypeCode.RolePrivileges = 12;
Mscrm.InternalUtilities.EntityTypeCode.RoleTemplate = 1037;
Mscrm.InternalUtilities.EntityTypeCode.RoleTemplatePrivileges = 28;
Mscrm.InternalUtilities.EntityTypeCode.RollupField = 9604;
Mscrm.InternalUtilities.EntityTypeCode.SalesLiterature = 1038;
Mscrm.InternalUtilities.EntityTypeCode.SalesLiteratureItem = 1070;
Mscrm.InternalUtilities.EntityTypeCode.SalesOrder = 1088;
Mscrm.InternalUtilities.EntityTypeCode.SalesOrderDetail = 1089;
Mscrm.InternalUtilities.EntityTypeCode.SalesProcessInstance = 32;
Mscrm.InternalUtilities.EntityTypeCode.SavedQuery = 1039;
Mscrm.InternalUtilities.EntityTypeCode.SavedQueryVisualization = 1111;
Mscrm.InternalUtilities.EntityTypeCode.SdkMessage = 4606;
Mscrm.InternalUtilities.EntityTypeCode.SdkMessageFilter = 4607;
Mscrm.InternalUtilities.EntityTypeCode.SdkMessagePair = 4613;
Mscrm.InternalUtilities.EntityTypeCode.SdkMessageProcessingStep = 4608;
Mscrm.InternalUtilities.EntityTypeCode.SdkMessageProcessingStepImage = 4615;
Mscrm.InternalUtilities.EntityTypeCode.SdkMessageProcessingStepSecureConfig = 4616;
Mscrm.InternalUtilities.EntityTypeCode.SdkMessageRequest = 4609;
Mscrm.InternalUtilities.EntityTypeCode.SdkMessageRequestField = 4614;
Mscrm.InternalUtilities.EntityTypeCode.SdkMessageResponse = 4610;
Mscrm.InternalUtilities.EntityTypeCode.SdkMessageResponseField = 4611;
Mscrm.InternalUtilities.EntityTypeCode.SemiAnnualFiscalCalendar = 2001;
Mscrm.InternalUtilities.EntityTypeCode.Service = 4001;
Mscrm.InternalUtilities.EntityTypeCode.ServiceAppointment = 4214;
Mscrm.InternalUtilities.EntityTypeCode.ServiceContractContacts = 20;
Mscrm.InternalUtilities.EntityTypeCode.ServiceEndpoint = 4618;
Mscrm.InternalUtilities.EntityTypeCode.SharePointDocumentLocation = 9508;
Mscrm.InternalUtilities.EntityTypeCode.SharePointDocument = 9507;
Mscrm.InternalUtilities.EntityTypeCode.SharePointData = 9509;
Mscrm.InternalUtilities.EntityTypeCode.SharePointSite = 9502;
Mscrm.InternalUtilities.EntityTypeCode.Site = 4009;
Mscrm.InternalUtilities.EntityTypeCode.SiteMap = 4709;
Mscrm.InternalUtilities.EntityTypeCode.Solution = 7100;
Mscrm.InternalUtilities.EntityTypeCode.SolutionComponent = 7103;
Mscrm.InternalUtilities.EntityTypeCode.StatusMap = 1075;
Mscrm.InternalUtilities.EntityTypeCode.StringMap = 1043;
Mscrm.InternalUtilities.EntityTypeCode.Subject = 129;
Mscrm.InternalUtilities.EntityTypeCode.Subscription = 29;
Mscrm.InternalUtilities.EntityTypeCode.SubscriptionClients = 1072;
Mscrm.InternalUtilities.EntityTypeCode.SubscriptionManuallyTrackedObject = 37;
Mscrm.InternalUtilities.EntityTypeCode.SubscriptionSyncInfo = 33;
Mscrm.InternalUtilities.EntityTypeCode.SubscriptionTrackingDeletedObject = 35;
Mscrm.InternalUtilities.EntityTypeCode.SystemForm = 1030;
Mscrm.InternalUtilities.EntityTypeCode.SystemUser = 8;
Mscrm.InternalUtilities.EntityTypeCode.SystemUserBusinessUnitEntityMap = 42;
Mscrm.InternalUtilities.EntityTypeCode.SystemUserLicenses = 13;
Mscrm.InternalUtilities.EntityTypeCode.SystemUserPrincipals = 14;
Mscrm.InternalUtilities.EntityTypeCode.SystemUserProfiles = 1202;
Mscrm.InternalUtilities.EntityTypeCode.SystemUserRoles = 15;
Mscrm.InternalUtilities.EntityTypeCode.Task = 4212;
Mscrm.InternalUtilities.EntityTypeCode.Team = 9;
Mscrm.InternalUtilities.EntityTypeCode.TeamMembership = 23;
Mscrm.InternalUtilities.EntityTypeCode.TeamProfiles = 1203;
Mscrm.InternalUtilities.EntityTypeCode.TeamRoles = 40;
Mscrm.InternalUtilities.EntityTypeCode.Template = 2010;
Mscrm.InternalUtilities.EntityTypeCode.Territory = 2013;
Mscrm.InternalUtilities.EntityTypeCode.TimeZoneDefinition = 4810;
Mscrm.InternalUtilities.EntityTypeCode.TimeZoneLocalizedName = 4812;
Mscrm.InternalUtilities.EntityTypeCode.TimeZoneRule = 4811;
Mscrm.InternalUtilities.EntityTypeCode.TransactionCurrency = 9105;
Mscrm.InternalUtilities.EntityTypeCode.TransformationMapping = 4426;
Mscrm.InternalUtilities.EntityTypeCode.TransformationParameterMapping = 4427;
Mscrm.InternalUtilities.EntityTypeCode.UnresolvedAddress = 2012;
Mscrm.InternalUtilities.EntityTypeCode.UoM = 1055;
Mscrm.InternalUtilities.EntityTypeCode.UoMSchedule = 1056;
Mscrm.InternalUtilities.EntityTypeCode.UserEntityInstanceData = 2501;
Mscrm.InternalUtilities.EntityTypeCode.UserEntityUISettings = 2500;
Mscrm.InternalUtilities.EntityTypeCode.UserFiscalCalendar = 1086;
Mscrm.InternalUtilities.EntityTypeCode.UserForm = 1031;
Mscrm.InternalUtilities.EntityTypeCode.UserQuery = 4230;
Mscrm.InternalUtilities.EntityTypeCode.UserQueryVisualization = 1112;
Mscrm.InternalUtilities.EntityTypeCode.UserSettings = 150;
Mscrm.InternalUtilities.EntityTypeCode.WebResource = 9333;
Mscrm.InternalUtilities.EntityTypeCode.WebWizard = 4800;
Mscrm.InternalUtilities.EntityTypeCode.WizardAccessPrivilege = 4803;
Mscrm.InternalUtilities.EntityTypeCode.WizardPage = 4802;
Mscrm.InternalUtilities.EntityTypeCode.Workflow = 4703;
Mscrm.InternalUtilities.EntityTypeCode.WorkflowDependency = 4704;
Mscrm.InternalUtilities.EntityTypeCode.WorkflowLog = 4706;
Mscrm.InternalUtilities.EntityTypeCode.WorkflowWaitSubscription = 4702;
Mscrm.InternalUtilities.EntityTypeCode.HierarchyRule = 8840;
Mscrm.InternalUtilities.TypeNames.NumberType = "number";
Mscrm.InternalUtilities.TypeNames.StringType = "string";
Mscrm.InternalUtilities.TypeNames.BooleanType = "boolean";
Mscrm.InternalUtilities.TypeNames.ObjectType = "object";
Mscrm.InternalUtilities.TypeNames.FunctionType = "function";
Mscrm.InternalUtilities.TypeNames.UndefinedType = "undefined";
Mscrm.InternalUtilities.TypeNames.UnknownType = "unknown";
Mscrm.Performance.PerformanceMarker.$4Y = 1;
Mscrm.Performance.PerformanceMarkerManager.$z = null;
Mscrm.Obsolete.RenderVariables.$$cctor();
Type.registerNamespace("XUI");
XUI.ClipboardManager = function()
{
    var _this = this,
        _mimeType = GetMimeType(),
        _clipboardContext;

    function GetMimeType()
    {
        if(Sys.Browser.agent == Sys.Browser.Safari || Sys.Browser.agent == Sys.Browser.AppleWebKit) return "text/plain";
        else if(Sys.Browser.agent == Sys.Browser.Firefox) return "text/unicode";
        else return "text"
    }
    var clipboardApi = {
            SetData: function(data)
            {
                window.clipboardData.setData(_mimeType, data);
                return true
            },
            GetData: function(data)
            {
                return window.clipboardData.getData(_mimeType)
            }
        },
        componentsApi = {
            SetData: function(data)
            {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                var stringComp = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString),
                    transfComp = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);
                transfComp.addDataFlavor(_mimeType);
                var clipboardService = Components.classes["@mozilla.org/widget/clipboard;1"].getService(Components.interfaces.nsIClipboard);
                stringComp.data = data;
                transfComp.setTransferData(_mimeType, stringComp, data.length * 2);
                clipboardService.setData(transfComp, null, Components.interfaces.nsIClipboard.kGlobalClipboard);
                return true
            },
            GetData: function(data)
            {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                var clipboardService = Components.classes["@mozilla.org/widget/clipboard;1"].getService(Components.interfaces.nsIClipboard),
                    transfComp = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);
                transfComp.addDataFlavor(_mimeType);
                var dataComp = {},
                    length = {};
                clipboardService.getData(transfComp, Components.interfaces.nsIClipboard.kGlobalClipboard);
                transfComp.getTransferData(_mimeType, dataComp, length);
                dataComp = dataComp && dataComp.value.QueryInterface(Components.interfaces.nsISupportsString);
                return dataComp && dataComp.data.substring(0, length.value / 2)
            }
        },
        internalApi = {
            SetData: function(data)
            {
                _clipboardContext = {};
                _clipboardContext[_mimeType] = data;
                return true
            },
            GetData: function(data)
            {
                return _clipboardContext && _clipboardContext[_mimeType]
            }
        };

    function SelectApi(apiName)
    {
        if(window.clipboardData && window.clipboardData.setData) return clipboardApi[apiName];
        else if(window.Components) try
        {
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            return componentsApi[apiName]
        }
        catch(e)
        {
            return internalApi[apiName]
        }
        else return internalApi[apiName]
    }
    this.SetData = function(data)
    {
        this.SetData = SelectApi("SetData");
        return this.SetData(data)
    };
    this.GetData = function()
    {
        this.GetData = SelectApi("GetData");
        return this.GetData()
    }
};
Type.registerNamespace("XUI");
XUI.DomUtilities = function()
{
    var NodeType = {
        Element: 1,
        TextNode: 3,
        Document: 9
    };

    function Trim(strValue)
    {
        if(strValue != null) return strValue.replace(/^\s*/, "").replace(/\s*$/, "");
        return strValue
    }

    function IsEnumerable(domNode)
    {
        var nodeType = domNode.nodeType;
        if(nodeType == NodeType.Element) return true;
        if(nodeType == NodeType.TextNode)
        {
            var textContent = domNode.nodeValue;
            return textContent && Trim(textContent).length > 0
        }
        return false
    }

    function FindEnumerableNode(domNode, sPrevNextSibling)
    {
        var r = domNode;
        while(r != null && !IsEnumerable(r)) r = r[sPrevNextSibling];
        return r
    }
    var functionsRequiringInit = [
    {
        name: "Contains",
        selector: function()
        {
            return document.body.contains != null ? function(domNode, otherDomNode)
            {
                return domNode && domNode.contains(otherDomNode)
            } : function(domNode, otherDomNode)
            {
                return domNode && domNode.compareDocumentPosition(otherDomNode) >= 16
            }
        }
    }];

    function UpdateStub(fnInfo)
    {
        api[fnInfo.name] = function()
        {
            api[fnInfo.name] = fnInfo.selector();
            return api[fnInfo.name].apply(api, arguments)
        }
    }
    for(var api = {
            NodeType: NodeType,
            HasChildElements: function(domNode, countEmptyNodes)
            {
                if(domNode.hasChildNodes())
                {
                    var childNodes = domNode.childNodes;
                    if(countEmptyNodes) return childNodes.length > 0;
                    else return this.GetFirstChild(domNode) != null
                }
                else return false
            },
            GetFirstChild: function(domNode)
            {
                return FindEnumerableNode(domNode.firstChild, "nextSibling")
            },
            GetLastChild: function(domNode)
            {
                return FindEnumerableNode(domNode.lastChild, "previousSibling")
            },
            GetNextSibling: function(domNode)
            {
                return FindEnumerableNode(domNode.nextSibling, "nextSibling")
            },
            GetPrevSibling: function(domNode)
            {
                return FindEnumerableNode(domNode.previousSibling, "previousSibling")
            },
            ForEachChild: function(domNode, fnProcessElement)
            {
                var curNode = this.GetFirstChild(domNode);
                while(curNode != null && !fnProcessElement(curNode)) curNode = this.GetNextSibling(curNode);
                return curNode
            },
            GetChildElementAt: function(domNode, index)
            {
                var idx = 0;

                function ProcessNode(node)
                {
                    return idx++ == index
                }
                return this.ForEachChild(domNode, ProcessNode)
            },
            GetBaseName: function(domNode)
            {
                return domNode.localName || domNode.baseName || domNode.nodeName
            },
            Contains: function(domNode, otherDomNode) {}
        }, i = 0; i < functionsRequiringInit.length; i++) UpdateStub(functionsRequiringInit[i]);
    return api
}();
Type.registerNamespace("XUI");
XUI.Html = function()
{
    var functionsRequiringInit = [
    {
        name: "SetText",
        selector: function()
        {
            return "textContent" in document.body ? function(domNode, newVal)
            {
                domNode.textContent = newVal
            } : function(domNode, newVal)
            {
                domNode.innerText = newVal
            }
        }
    },
    {
        name: "GetText",
        selector: function()
        {
            return "textContent" in document.body ? function(domNode)
            {
                return domNode.textContent
            } : function(domNode)
            {
                if(domNode.nodeName == "INPUT" && Sys.Browser.agent == Sys.Browser.InternetExplorer && Sys.Browser.version < 9) return domNode.value;
                else return domNode.innerText
            }
        }
    },
    {
        name: "GetOuterHTML",
        selector: function()
        {
            return "outerHTML" in document.body ? function(domNode)
            {
                return domNode.outerHTML
            } : function(domNode)
            {
                if("outerHTML" in domNode) return domNode.outerHTML;
                else
                {
                    var oDoc = domNode.ownerDocument,
                        oClone = domNode.cloneNode(true),
                        oTemp = oDoc.createElement("div");
                    oDoc.documentElement.appendChild(oTemp);
                    oTemp.appendChild(oClone);
                    var sHTML = oTemp.innerHTML;
                    oDoc.documentElement.removeChild(oTemp);
                    return sHTML
                }
            }
        }
    },
    {
        name: "SetOuterHTML",
        selector: function()
        {
            return "outerHTML" in document.body ? function(domNode, newVal)
            {
                domNode.outerHTML = newVal
            } : function(domNode, newVal)
            {
                var oTemp = document.createElement("div");
                document.body.appendChild(oTemp);
                oTemp.innerHTML = newVal;
                var parentNode = domNode.parentNode;
                parentNode.replaceChild(oTemp.firstChild.cloneNode(true), domNode);
                document.body.removeChild(oTemp)
            }
        }
    },
    {
        name: "GetComputedStyle",
        selector: function()
        {
            return document.body.currentStyle != null ? function(domNode, camelStyleName)
            {
                var temp = domNode.currentStyle == null ? domNode.children : null,
                    r = domNode.currentStyle[camelStyleName];
                if(r.indexOf("%") > 0 || r.indexOf("em") > 0) throw "RelativeMeasurementInComputedStyle";
                return r
            } : function(domNode, camelStyleName)
            {
                var computedStyle = document.defaultView.getComputedStyle(domNode, null);
                return computedStyle != null ? computedStyle[camelStyleName] : null
            }
        }
    },
    {
        name: "SetFloat",
        selector: function()
        {
            return document.body.style.styleFloat != null ? function(domNode, newVal)
            {
                domNode.style.styleFloat = newVal
            } : function(domNode, newVal)
            {
                domNode.style.cssFloat = newVal
            }
        }
    },
    {
        name: "SetOpacity",
        selector: function()
        {
            return document.body.style.opacity != null ? function(domNode, newVal)
            {
                domNode.style.opacity = newVal
            } : function(domNode, newVal)
            {
                domNode.style.filter = newVal == 1 ? "" : "alpha(opacity=" + newVal * 100 + ")"
            }
        }
    },
    {
        name: "GetOpacity",
        selector: function()
        {
            return document.body.style.opacity != null ? function(domNode)
            {
                var o = domNode.style.opacity;
                return o != null && o != "" ? parseFloat(o) : 1
            } : function(domNode)
            {
                var f = domNode.style.filter;
                return f != null && f != "" ? parseInt(f.replace("alpha(opacity=", "").replace(")", "")) / 100 : 1
            }
        }
    },
    {
        name: "RemoveOpacity",
        selector: function()
        {
            return document.body.style.opacity != null ? function(domNode)
            {
                domNode.style.opacity = ""
            } : function(domNode)
            {
                domNode.style.filter = ""
            }
        }
    },
    {
        name: "IsContentEditable",
        selector: function()
        {
            return document.body.isContentEditable != null ? function(domNode)
            {
                return domNode.isContentEditable
            } : function(domNode)
            {
                return domNode.contentEditable
            }
        }
    },
    {
        name: "RotateElement",
        selector: function()
        {
            if(document.body.style.MozTransform != null) return function(domNode, degrees, origXMid, origYMid, origWidth, origHeight)
            {
                domNode.style.MozTransform = "rotate(" + degrees + "deg)"
            };
            if(document.body.style.OTransform != null) return function(domNode, degrees, origXMid, origYMid, origWidth, origHeight)
            {
                domNode.style.OTransform = "rotate(" + degrees + "deg)"
            };
            if(document.body.style.WebkitTransform != null) return function(domNode, degrees, origXMid, origYMid, origWidth, origHeight)
            {
                domNode.style.WebkitTransform = "rotate(" + degrees + "deg)"
            };
            return function(domNode, degrees, origXMid, origYMid, origWidth, origHeight)
            {
                var deg2radians = Math.PI * 2 / 360,
                    radians = degrees * deg2radians,
                    costheta = Math.cos(radians),
                    sintheta = Math.sin(radians),
                    newHeight = origHeight * Math.abs(costheta) + origWidth * Math.abs(sintheta),
                    newWidth = origWidth * Math.abs(costheta) + origHeight * Math.abs(sintheta),
                    newXNear = origXMid - newWidth / 2,
                    newYTop = origYMid - newHeight / 2;
                domNode.style.left = newXNear + "px";
                domNode.style.top = newYTop + "px";
                domNode.filters.item(0).M11 = costheta;
                domNode.filters.item(0).M12 = -sintheta;
                domNode.filters.item(0).M21 = sintheta;
                domNode.filters.item(0).M22 = costheta
            }
        }
    },
    {
        name: "CreateDomEvent",
        selector: function()
        {
            return "createEvent" in document ? function(eventType)
            {
                var eventObj = document.createEvent("Event");
                eventObj.initEvent(eventType, true, true);
                return eventObj
            } : function(eventType)
            {
                var eventObj = document.createEventObject();
                eventObj.type = eventType;
                return eventObj
            }
        }
    },
    {
        name: "DispatchDomEvent",
        selector: function()
        {
            return "dispatchEvent" in document ? function(domNode, eventObj)
            {
                return domNode.dispatchEvent(eventObj)
            } : function(domNode, eventObj)
            {
                return domNode.fireEvent("on" + eventObj.type, eventObj)
            }
        }
    }];

    function UpdateStub(fnInfo)
    {
        api[fnInfo.name] = function()
        {
            api[fnInfo.name] = fnInfo.selector();
            return api[fnInfo.name].apply(api, arguments)
        }
    }
    for(var api = {
            DomUtils: XUI.DomUtilities,
            GetDirection: function()
            {
                return document.documentElement.getAttribute("dir")
            },
            SetText: function(domNode, newVal) {},
            GetText: function(domNode) {},
            GetOuterHTML: function(domNode) {},
            SetOuterHTML: function(domNode, newVal) {},
            GetComputedStyle: function(domNode, camelStyleName) {},
            SetFloat: function(domNode, newVal) {},
            SetOpacity: function(domNode, newVal) {},
            GetOpacity: function(domNode) {},
            RemoveOpacity: function(domNode) {},
            IsContentEditable: function(domNode) {},
            RotateElement: function(domNode, degrees, origXMid, origYMid, origWidth, origHeight) {},
            CreateDomEvent: function(eventType) {},
            DispatchDomEvent: function(domNode, eventObj) {}
        }, i = 0; i < functionsRequiringInit.length; i++) UpdateStub(functionsRequiringInit[i]);
    return api
}();
Type.registerNamespace("XUI");
XUI.Xml = function()
{
    function GetActiveXObject(progIDs)
    {
        for(var i = 0; i < progIDs.length; i++) try
        {
            var xmlDoc = new ActiveXObject(progIDs[i]);
            return xmlDoc
        }
        catch(ex)
        {}
        return null
    }
    MSXML_DOMParser = function() {};
    MSXML_DOMParser.prototype.parseFromString = function(sValue, contentType)
    {
        var xmlDoc = GetActiveXObject(["Msxml2.DOMDocument.3.0", "Msxml2.DOMDocument"]);
        if(xmlDoc != null) try
        {
            xmlDoc.async = false;
            xmlDoc.loadXML(sValue);
            xmlDoc.setProperty("SelectionLanguage", "XPath");
            return xmlDoc
        }
        catch(e)
        {}
        return null
    };
    MSXML_XMLSerializer = function() {};
    MSXML_XMLSerializer.prototype.serializeToString = function(node)
    {
        return node.xml || ""
    };
    MSXML_XPathResult = function()
    {
        this.singleNodeValue = null;
        this._resultNodes = null;
        var curItemIdx = 0;
        this.iterateNext = function()
        {
            return curItemIdx < this._resultNodes.length ? this._resultNodes[curItemIdx++] : null
        }
    };
    var ORDERED_NODE_ITERATOR_TYPE = window.XPathResult != null ? XPathResult.ORDERED_NODE_ITERATOR_TYPE : 5,
        FIRST_ORDERED_NODE_TYPE = window.XPathResult != null ? XPathResult.FIRST_ORDERED_NODE_TYPE : 9;
    MSXML_XPathEvaluator = function() {};
    MSXML_XPathEvaluator.prototype.evaluate = function(sXPath, contextNode, namespaceResolver, resultType, xPathResultObj)
    {
        var executeNamespaceResolver = typeof namespaceResolver === "undefined" || typeof window.PreventNamespaceResolver !== "undefined" && window.PreventNamespaceResolver == true ? false : true;
        executeNamespaceResolver && namespaceResolver();
        var result;
        if(resultType == ORDERED_NODE_ITERATOR_TYPE)
        {
            result = new MSXML_XPathResult;
            result._resultNodes = customSelectNodes(contextNode, sXPath)
        }
        else if(resultType == FIRST_ORDERED_NODE_TYPE)
        {
            result = new MSXML_XPathResult;
            result.singleNodeValue = customSelectSingleNode(contextNode, sXPath)
        }
        return result
    };

    function isPreventNamespaceResolver()
    {
        return typeof window.PreventNamespaceResolver !== "undefined" && window.PreventNamespaceResolver == true
    }

    function customSelectNodes(contextNode, sXPath)
    {
        if(!isPreventNamespaceResolver() && typeof contextNode.selectNodes !== "undefined") return contextNode.selectNodes(sXPath);
        else if(isPreventNamespaceResolver() || typeof isMobileClient !== "undefined" && isMobileClient)
        {
            var tag = selectTag(contextNode),
                cssSelector = transformXPathSelectorToCSSSelector(sXPath, tag);
            try
            {
                return $(contextNode).find(cssSelector)
            }
            catch(e)
            {
                return contextNode.getElementsByTagName(cssSelector)
            }
        }
        else return null
    }

    function customSelectSingleNode(contextNode, sXPath)
    {
        if(!isPreventNamespaceResolver() && typeof contextNode.selectSingleNode !== "undefined") return contextNode.selectSingleNode(sXPath);
        else if(isPreventNamespaceResolver() || typeof isMobileClient !== "undefined" && isMobileClient)
        {
            var tag = selectTag(contextNode),
                cssSelector = transformXPathSelectorToCSSSelector(sXPath, tag),
                selected;
            try
            {
                selected = $(contextNode).find(cssSelector)[0]
            }
            catch(e)
            {
                selected = contextNode.getElementsByTagName(cssSelector)[0]
            }
            if(typeof selected == "undefined")
            {
                var allNodes;
                try
                {
                    allNodes = $(contextNode).find("*")
                }
                catch(e)
                {
                    allNodes = contextNode.getElementsByTagName("*")
                }
                for(var searchTag = transformXPathSelectorToTagName(sXPath, tag), i = 0; i < allNodes.length; i++)
                    if(selectTag(allNodes[i]) == searchTag) return allNodes[i]
            }
            return selected
        }
        else return null
    }

    function selectTag(node)
    {
        var tag;
        if(!isNullOrEmptyString(node.tagName)) tag = node.tagName;
        else if(typeof node.documentElement !== "undefined" && !isNullOrEmptyString(node.documentElement.tagName)) tag = node.documentElement.tagName;
        return tag
    }

    function transformXPathSelectorToCSSSelector(sXPath, tag)
    {
        var cssSelector = sXPath;
        cssSelector = cssSelector.replace(new RegExp("default:", "g"), "");
        cssSelector = cssSelector.replace(new RegExp(":", "g"), "\\:");
        tag = tag.replace(new RegExp(":", "g"), "\\:");
        cssSelector = cssSelector.replace(new RegExp("/", "g"), " ");
        if(typeof Mscrm.MobileUtility !== "undefined" && Mscrm.MobileUtility.isHostedInWindowsPhoneApp())
        {
            cssSelector = cssSelector.replace(/\[@id='(.*)\'\]/g, "#$1");
            cssSelector = cssSelector.replace(new RegExp("@", "g"), "")
        }
        cssSelector = cssSelector.trim();
        if(cssSelector.charAt(0) == ".") cssSelector = cssSelector.substr(1);
        else if(!isNullOrEmptyString(tag) && cssSelector.substr(0, tag.length) == tag && cssSelector.length != tag.length) cssSelector = cssSelector.substr(tag.length);
        cssSelector = cssSelector.trim();
        return cssSelector
    }

    function transformXPathSelectorToTagName(sXPath, tag)
    {
        var tagName = sXPath;
        tagName = tagName.replace(new RegExp("default:", "g"), "");
        tagName = tagName.replace(new RegExp("/", "g"), " ");
        if(typeof Mscrm.MobileUtility !== "undefined" && Mscrm.MobileUtility.isHostedInWindowsPhoneApp())
        {
            tagName = tagName.replace(/\[@id='(.*)\'\]/g, "#$1");
            tagName = tagName.replace(new RegExp("@", "g"), "")
        }
        tagName = tagName.trim();
        if(tagName.charAt(0) == ".") tagName = tagName.substr(1);
        else if(!isNullOrEmptyString(tag) && tagName.substr(0, tag.length) == tag && tagName.length != tag.length) tagName = tagName.substr(tag.length);
        tagName = tagName.trim();
        return tagName
    }

    function GetDOMParser()
    {
        return window.ActiveXObject != null ? new MSXML_DOMParser : new DOMParser
    }

    function GetXMLSerializer()
    {
        return window.ActiveXObject != null ? new MSXML_XMLSerializer : new XMLSerializer
    }

    function GetXPathEvaluator()
    {
        if(window.ActiveXObject != null || !window.XPathEvaluator) return new MSXML_XPathEvaluator;
        else try
        {
            var evaluator = new XPathEvaluator,
                contextNode = GetDOMParser().parseFromString("<root />", "text/xml");
            evaluator.evaluate("/root", contextNode, null, FIRST_ORDERED_NODE_TYPE, null);
            return evaluator
        }
        catch(e)
        {
            return new MSXML_XPathEvaluator
        }
    }
    var reusableOjbects = {
        DOMParser:
        {
            instance: null,
            constructor: GetDOMParser
        },
        XMLSerializer:
        {
            instance: null,
            constructor: GetXMLSerializer
        },
        XPathEvaluator:
        {
            instance: null,
            constructor: GetXPathEvaluator
        }
    };

    function GetReusableObject(name)
    {
        if(reusableOjbects[name].instance == null) reusableOjbects[name].instance = reusableOjbects[name].constructor();
        return reusableOjbects[name].instance
    }
    var defaultReturnIfXmlDocNoSetproperty = function(contextNode, oNamespaces)
        {
            if(oNamespaces != null) return function(sPrefix)
            {
                return oNamespaces[sPrefix]
            }
        },
        functionsRequiringInit = [
        {
            name: "GetParserError",
            selector: function(xmlDoc)
            {
                var fnGetParserError;
                if(xmlDoc != null && xmlDoc.parseError != null) fnGetParserError = function(xmlDoc)
                {
                    var parserError;
                    if(xmlDoc.parseError != 0)
                    {
                        var props = ["errorCode", "reason", "line", "linepos", "srcText", "url", "filepos"];
                        parserError = "";
                        for(var i = 0; i < props.length; i++) parserError += props[i] + ": " + xmlDoc.parseError[props[i]] + "\n"
                    }
                    return parserError
                };
                else fnGetParserError = function(xmlDoc)
                {
                    var parserError;
                    if(xmlDoc.documentElement.namespaceURI == "http://www.mozilla.org/newlayout/xml/parsererror.xml" && xmlDoc.documentElement.tagName == "parsererror") parserError = xmlDoc.documentElement.textContent;
                    else if(xmlDoc.documentElement.firstChild && xmlDoc.documentElement.firstChild.tagName == "parsererror") parserError = xmlDoc.documentElement.firstChild.textContent;
                    return parserError
                };
                return fnGetParserError
            }
        },
        {
            name: "GetText",
            selector: function(contextNode)
            {
                return "textContent" in contextNode ? function(contextNode)
                {
                    return contextNode.textContent
                } : function(contextNode)
                {
                    return contextNode.text
                }
            }
        },
        {
            name: "SetText",
            selector: function(contextNode)
            {
                return "textContent" in contextNode ? function(contextNode, newValue)
                {
                    contextNode.textContent = newValue
                } : function(contextNode, newValue)
                {
                    contextNode.text = newValue
                }
            }
        },
        {
            name: "GetNamespaceResolver",
            selector: function(contextNode)
            {
                var xmlDoc = contextNode.nodeType == XUI.DomUtilities.NodeType.Document ? contextNode : contextNode.ownerDocument;
                return "setProperty" in xmlDoc ? function(contextNode, oNamespaces)
                {
                    return function(sPrefix)
                    {
                        var xmlDoc = contextNode.nodeType == XUI.DomUtilities.NodeType.Document ? contextNode : contextNode.ownerDocument;
                        try
                        {
                            xmlDoc.setProperty("SelectionLanguage", "XPath")
                        }
                        catch(ex)
                        {
                            Mscrm.CrmDebug.fail("Can't access setProperty method in XmlDoc");
                            return defaultReturnIfXmlDocNoSetproperty
                        }
                        if(oNamespaces != null)
                        {
                            var nsDeclarations = [],
                                nsString = "xmlns:{0}='{1}'";
                            for(var prefix in oNamespaces) nsDeclarations.push(String.format(nsString, prefix, oNamespaces[prefix]));
                            xmlDoc.setProperty("SelectionNamespaces", nsDeclarations.join(" "))
                        }
                    }
                } : defaultReturnIfXmlDocNoSetproperty
            }
        },
        {
            name: "CreateElementNS",
            selector: function(xmlDoc)
            {
                return "createElementNS" in xmlDoc ? function(xmlDoc, namespaceURI, qualifiedName)
                {
                    return xmlDoc.createElementNS(namespaceURI, qualifiedName)
                } : function(xmlDoc, namespaceURI, qualifiedName)
                {
                    return xmlDoc.createNode(1, qualifiedName, namespaceURI)
                }
            }
        },
        {
            name: "CreateDocument",
            selector: function()
            {
                return "implementation" in document && "createDocument" in document.implementation && window.ActiveXObject == null ? function()
                {
                    return document.implementation.createDocument(null, null, null)
                } : function()
                {
                    return GetActiveXObject(["Msxml2.DOMDocument.3.0", "Msxml2.DOMDocument"])
                }
            }
        }];

    function UpdateStub(fnInfo)
    {
        api[fnInfo.name] = function()
        {
            api[fnInfo.name] = fnInfo.selector(arguments[0]);
            return api[fnInfo.name].apply(api, arguments)
        }
    }
    for(var api = {
            DomUtils: XUI.DomUtilities,
            DOMParser: GetReusableObject("DOMParser"),
            XMLSerializer: GetReusableObject("XMLSerializer"),
            XPathEvaluator: GetReusableObject("XPathEvaluator"),
            Load: function(sUrl, bAsync, fnOnSuccess, fnOnFailure)
            {
                var xmlhttp = new XMLHttpRequest;
                if(bAsync) xmlhttp.onreadystatechange = WaitForReadyState;
                try
                {
                    xmlhttp.open("GET", sUrl, bAsync);
                    Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
                    xmlhttp.send()
                }
                catch(ex)
                {
                    fnOnFailure(400, null);
                    return null
                }!bAsync && CheckXmlHttpResult();

                function WaitForReadyState()
                {
                    if(xmlhttp.readyState == 4)
                    {
                        xmlhttp.onreadystatechange = function() {};
                        CheckXmlHttpResult()
                    }
                }

                function CheckXmlHttpResult()
                {
                    if(xmlhttp.status == 200) fnOnSuccess(xmlhttp.responseXML);
                    else fnOnFailure(xmlhttp.status, xmlhttp.responseXML)
                }
            },
            LoadXml: function(sXml)
            {
                return this.DOMParser.parseFromString(sXml, "text/xml")
            },
            SelectNodes: function(contextNode, sXPath, oNamespaces)
            {
                var result = [],
                    xPathNodes = this.XPathEvaluator.evaluate(sXPath, contextNode, this.GetNamespaceResolver(contextNode, oNamespaces), ORDERED_NODE_ITERATOR_TYPE, null);
                if(xPathNodes != null)
                {
                    var node = xPathNodes.iterateNext();
                    while(node != null)
                    {
                        result.push(node);
                        node = xPathNodes.iterateNext()
                    }
                }
                return result
            },
            SelectSingleNode: function(contextNode, sXPath, oNamespaces)
            {
                var xPathNode = this.XPathEvaluator.evaluate(sXPath, contextNode, this.GetNamespaceResolver(contextNode, oNamespaces), FIRST_ORDERED_NODE_TYPE, null);
                return xPathNode != null ? xPathNode.singleNodeValue : null
            },
            CreateNSDictionary: function(contextNode)
            {
                var resolver = {};
                if(contextNode)
                    for(var attribList = contextNode.attributes, attribLength = attribList.length, i = 0; i < attribLength; i++)
                    {
                        var attrib = attribList.item(i);
                        if(attrib.prefix == "xmlns") resolver[XUI.DomUtilities.GetBaseName(attrib)] = attrib.nodeValue;
                        else if(attrib.nodeName == "xmlns") resolver["default"] = attrib.nodeValue
                    }
                return resolver
            },
            GetParserError: function(xmlDoc) {},
            GetText: function(contextNode) {},
            SetText: function(contextNode, newValue) {},
            GetNamespaceResolver: function(contextNode, oNamespaces) {},
            CreateElementNS: function(xmlDoc, namespaceURI, qualifiedName) {},
            CreateDocument: function() {}
        }, i = 0; i < functionsRequiringInit.length; i++) UpdateStub(functionsRequiringInit[i]);
    return api
}();

function _crmUrlDecode(s)
{
    if(IsNull(s)) return s;
    else if(typeof s != "string") s = s.toString();
    s = s.replace(/%u[a-fA-F0-9]{4}/g, function($1)
    {
        return String.fromCharCode(parseInt($1.substr(2, $1.length - 2), 16))
    });
    return decodeURIComponent(s)
}

function _crmUrlEncode(s)
{
    if(IsNull(s)) return s;
    else if(typeof s != "string") s = s.toString();
    s = _UrlEncode(s);
    s = s.replace(/%u[dD][89aAbB][a-fA-F0-9]{2}%u[dD][cCdDeEfF][a-fA-F0-9]{2}/g, function($1)
    {
        return encodeURIComponent(String.fromCharCode(parseInt($1.substring(2, 6), 16)) + String.fromCharCode(parseInt($1.substring(8), 16)))
    });
    s = s.replace(/%u[a-fA-F0-9]{4}/g, function($1)
    {
        return encodeURIComponent(String.fromCharCode(parseInt($1.substr(2, $1.length - 2), 16)))
    });
    return s
}

function _crmUrlEncodeIE7(s)
{
    if(IsNull(s)) return s;
    else if(typeof s != "string") s = s.toString();
    s = _UrlEncodeIE7(s);
    s = s.replace(/%u[dD][89aAbB][a-fA-F0-9]{2}%u[dD][cCdDeEfF][a-fA-F0-9]{2}/g, function($1)
    {
        return encodeURIComponent(String.fromCharCode(parseInt($1.substring(2, 6), 16)) + String.fromCharCode(parseInt($1.substring(8), 16)))
    });
    s = s.replace(/%u[a-fA-F0-9]{4}/g, function($1)
    {
        return encodeURIComponent(String.fromCharCode(parseInt($1.substr(2, $1.length - 2), 16)))
    });
    return s
}

function _crmNameValueEncode(s)
{
    if(IsNull(s)) return s;
    else if(typeof s != "string") s = s.toString();
    return CrmEncodeDecode.CrmUrlEncode(s)
}

function _crmNameValueDecode(s)
{
    if(IsNull(s)) return s;
    else if(typeof s != "string") s = s.toString();
    return CrmEncodeDecode.CrmUrlDecode(s)
}

function _crmXmlDecode(s, charToDecode)
{
    if(IsNull(s)) return s;
    else if(typeof s != "string") s = s.toString();
    if(typeof charToDecode != "undefined" && charToDecode != null)
    {
        if(charToDecode.length > 1) charToDecode = charToDecode.charAt(0);
        var sEncodedChar = _XmlEncode(charToDecode),
            rex = new RegExp(sEncodedChar, "g");
        s = s.replace(rex, charToDecode);
        switch(charToDecode)
        {
            case "<":
                s = s.replace(/&lt;/g, "<");
                break;
            case ">":
                s = s.replace(/&gt;/g, ">");
                break;
            case "&":
                s = s.replace(/&amp;/g, "&");
                break;
            case '"':
                s = s.replace(/&quot;/g, '"');
                break;
            case "'":
                s = s.replace(/&apos;/g, "'");
                break
        }
        return s
    }
    s = s.replace(/&[^;]+;/g, function($1)
    {
        switch($1)
        {
            case "&lt;":
                return "<";
            case "&gt;":
                return ">";
            case "&amp;":
                return "&";
            case "&quot;":
                return '"';
            case "&apos;":
                return "'"
        }
        if($1.match(/&#[0-9]+;/g)) return _crmCharCodeToChar($1.substr(2, $1.length - 3));
        if($1.match(/&#x[a-fA-F0-9]+;/g)) return _crmCharCodeToChar(parseInt($1.substr(3, $1.length - 4), 16));
        return $1
    });
    return s
}

function _crmCharCodeToChar(charCode)
{
    if(charCode > 65535 && charCode < 1114112)
    {
        charCode -= 65536;
        return String.fromCharCode(55296 + (charCode >> 10), 56320 + (charCode & 1023))
    }
    else return String.fromCharCode(charCode)
}

function _crmXmlEncode(s, charToEncode)
{
    if(IsNull(s)) return s;
    else if(typeof s != "string") s = s.toString();
    if(typeof charToEncode != "undefined" && charToEncode != null)
    {
        if(charToEncode.length > 1) charToEncode = charToEncode.charAt(0);
        var sEncodedChar = _XmlEncode(charToEncode),
            rex = new RegExp(charToEncode, "g");
        return s.replace(rex, sEncodedChar)
    }
    return _surrogateAmpersandWorkaround(s, _XmlEncode)
}

function _crmHtmlEncode(s)
{
    if(IsNull(s)) return s;
    else if(typeof s != "string") s = s.toString();
    return _surrogateAmpersandWorkaround(s, _HtmlEncode)
}

function _crmHtmlEncodeForFormatString(s)
{
    if(IsNull(s)) return s;
    else if(typeof s != "string") s = s.toString();
    s = _surrogateAmpersandWorkaround(s, _HtmlEncode);
    return s.replace(/&#123;/g, "{").replace(/&#125;/g, "}")
}

function _crmPluginTraceHtmlEncode(s)
{
    if(IsNull(s)) return s;
    else if(typeof s != "string") s = s.toString();
    s = _crmHtmlEncode(s);
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/&#9;/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
    s = s.replace(/&#10;/g, "<br/>");
    s = s.replace(/&#20;/g, "&nbsp;");
    return s
}

function _crmHtmlAttributeEncode(s)
{
    if(IsNull(s)) return s;
    else if(typeof s != "string") s = s.toString();
    return _surrogateAmpersandWorkaround(s, _HtmlAttributeEncode)
}

function _crmXmlAttributeEncode(s)
{
    if(IsNull(s)) return s;
    else if(typeof s != "string") s = s.toString();
    return _surrogateAmpersandWorkaround(s, _XmlAttributeEncode)
}

function _crmJavaScriptEncode(s)
{
    if(IsNull(s)) return s;
    else if(typeof s != "string") s = s.toString();
    return _JavaScriptEncode(s)
}

function _crmVisualBasicScriptEncode(s)
{
    if(IsNull(s)) return s;
    else if(typeof s != "string") s = s.toString();
    return _VisualBasicScriptEncode(s)
}

function _surrogateAmpersandWorkaround(s, encodingFunction)
{
    s = s.replace(new RegExp("([\\uD800-\\uDBFF][\\uDC00-\\uDFFF])", "g"), function($1)
    {
        return "CRMEntityReferenceOpen" + (($1.charCodeAt(0) - 55296) * 1024 + ($1.charCodeAt(1) & 1023) + 65536).toString(16) + "CRMEntityReferenceClose"
    });
    s = s.replace(new RegExp("[\\uD800-\\uDFFF]", "g"), "\ufffd");
    s = encodingFunction(s);
    s = s.replace(/CRMEntityReferenceOpen/g, "&#x");
    s = s.replace(/CRMEntityReferenceClose/g, ";");
    return s
}

function CrmEncodeDecodeLibrary()
{
    this.CrmHtmlEncode = _crmHtmlEncode;
    this.CrmHtmlAttributeEncode = _crmHtmlAttributeEncode;
    this.CrmXmlEncode = _crmXmlEncode;
    this.CrmXmlAttributeEncode = _crmXmlAttributeEncode;
    this.CrmJavaScriptEncode = _crmJavaScriptEncode;
    this.CrmVisualBasicScriptEncode = _crmVisualBasicScriptEncode;
    this.CrmUrlEncode = _crmUrlEncode;
    this.CrmUrlEncodeIE7 = _crmUrlEncodeIE7;
    this.CrmNameValueEncode = _crmNameValueEncode;
    this.CrmHtmlEncodeForFormatString = _crmHtmlEncodeForFormatString;
    this.CrmPluginTraceHtmlEncode = _crmPluginTraceHtmlEncode;
    this.CrmXmlDecode = _crmXmlDecode;
    this.CrmHtmlDecode = _crmXmlDecode;
    this.CrmUrlDecode = _crmUrlDecode;
    this.CrmNameValueDecode = _crmNameValueDecode
}
var CrmEncodeDecode = new CrmEncodeDecodeLibrary;

function _HtmlEncode(strInput)
{
    var c, HtmlEncode = "",
        buffer = "",
        bufferLength = 500,
        count = 0;
    if(strInput == null) return null;
    if(strInput == "") return "";
    for(var cnt = 0; cnt < strInput.length; cnt++)
    {
        c = strInput.charCodeAt(cnt);
        if(c > 96 && c < 123 || c > 64 && c < 91 || c == 32 || c > 47 && c < 58 || c == 46 || c == 44 || c == 45 || c == 95) buffer += String.fromCharCode(c);
        else buffer += "&#" + c + ";";
        if(++count == bufferLength)
        {
            HtmlEncode += buffer;
            buffer = "";
            count = 0
        }
    }
    if(buffer.length) HtmlEncode += buffer;
    return HtmlEncode
}

function _HtmlAttributeEncode(strInput)
{
    var c, HtmlAttributeEncode = "";
    if(strInput == null) return null;
    if(strInput == "") return "";
    for(var cnt = 0; cnt < strInput.length; cnt++)
    {
        c = strInput.charCodeAt(cnt);
        if(c > 96 && c < 123 || c > 64 && c < 91 || c > 47 && c < 58 || c == 46 || c == 44 || c == 45 || c == 95) HtmlAttributeEncode = HtmlAttributeEncode + String.fromCharCode(c);
        else HtmlAttributeEncode = HtmlAttributeEncode + "&#" + c + ";"
    }
    return HtmlAttributeEncode
}

function _XmlEncode(strInput)
{
    return _HtmlEncode(strInput)
}

function _XmlAttributeEncode(strInput)
{
    return _HtmlAttributeEncode(strInput)
}

function _JavaScriptEncode(strInput)
{
    var c, EncodeJs = "";
    if(strInput == null) return null;
    if(strInput == "") return "";
    for(var cnt = 0; cnt < strInput.length; cnt++)
    {
        c = strInput.charCodeAt(cnt);
        if(c > 96 && c < 123 || c > 64 && c < 91 || c == 32 || c > 47 && c < 58 || c == 46 || c == 44 || c == 45 || c == 95) EncodeJs = EncodeJs + String.fromCharCode(c);
        else if(c > 127) EncodeJs = EncodeJs + "\\u" + OutputEncoder_TwoByteHex(c);
        else EncodeJs = EncodeJs + "\\x" + OutputEncoder_SingleByteHex(c)
    }
    return "'" + EncodeJs + "'"
}

function _VisualBasicScriptEncode(strInput)
{
    var c, EncodeVbs = "",
        bInQuotes = false;
    if(strInput == null) return null;
    if(strInput == "") return "";
    for(var cnt = 0; cnt < strInput.length; cnt++)
    {
        c = strInput.charCodeAt(cnt);
        if(c > 96 && c < 123 || c > 64 && c < 91 || c == 32 || c > 47 && c < 58 || c == 46 || c == 44 || c == 45 || c == 95)
        {
            if(!bInQuotes)
            {
                EncodeVbs = EncodeVbs + '&"';
                bInQuotes = true
            }
            EncodeVbs = EncodeVbs + String.fromCharCode(c)
        }
        else
        {
            if(bInQuotes)
            {
                EncodeVbs = EncodeVbs + '"';
                bInQuotes = false
            }
            EncodeVbs = EncodeVbs + "&chrw(" + c + ")"
        }
    }
    if(EncodeVbs.charAt(0) == "&") EncodeVbs = EncodeVbs.substring(1);
    if(EncodeVbs.length == 0) EncodeVbs = '""';
    if(bInQuotes) EncodeVbs = EncodeVbs + '"';
    return EncodeVbs
}

function _UrlEncode(strInput)
{
    var c, EncodeUrl = "";
    if(strInput == null) return null;
    if(strInput == "") return "";
    for(var cnt = 0; cnt < strInput.length; cnt++)
    {
        c = strInput.charCodeAt(cnt);
        if(c > 96 && c < 123 || c > 64 && c < 91 || c > 47 && c < 58 || c == 46 || c == 45 || c == 95) EncodeUrl = EncodeUrl + String.fromCharCode(c);
        else if(c > 127) EncodeUrl = EncodeUrl + "%u" + OutputEncoder_TwoByteHex(c);
        else EncodeUrl = EncodeUrl + "%" + OutputEncoder_SingleByteHex(c)
    }
    return EncodeUrl
}

function _UrlEncodeIE7(strInput)
{
    var c, EncodeUrl = "",
        buffer = [],
        count = 0;
    if(strInput == null) return null;
    if(strInput == "") return "";
    for(var cnt = 0; cnt < strInput.length; cnt++)
    {
        c = strInput.charCodeAt(cnt);
        if(c > 96 && c < 123 || c > 64 && c < 91 || c > 47 && c < 58 || c == 46 || c == 45 || c == 95) buffer[count++] = String.fromCharCode(c);
        else if(c > 127) buffer[count++] = "%u" + OutputEncoder_TwoByteHex(c);
        else buffer[count++] = "%" + OutputEncoder_SingleByteHex(c)
    }
    return buffer.join("")
}

function OutputEncoder_SingleByteHex(charC)
{
    if(charC == null) return "";
    for(var SingleByteHex = charC.toString(16), cnt = SingleByteHex.length; cnt < 2; cnt++) SingleByteHex = "0" + SingleByteHex;
    return SingleByteHex
}

function OutputEncoder_TwoByteHex(charC)
{
    if(charC == null) return "";
    for(var TwoByteHex = charC.toString(16), cnt = TwoByteHex.length; cnt < 4; cnt++) TwoByteHex = "0" + TwoByteHex;
    return TwoByteHex
}

function AntiXss()
{
    this.HtmlEncode = _HtmlEncode;
    this.HtmlAttributeEncode = _HtmlAttributeEncode;
    this.XmlEncode = _XmlEncode;
    this.XmlAttributeEncode = _XmlAttributeEncode;
    this.JavaScriptEncode = _JavaScriptEncode;
    this.VisualBasicScriptEncode = _VisualBasicScriptEncode;
    this.UrlEncode = _UrlEncode
}
var AntiXssLibrary = new AntiXss;

function RemoteCommand(sObject, sCommand, sUrlBase, commandNameSpace)
{
    this.Service = sObject;
    this.Command = sCommand;
    this.GetParameter = getParameter;
    this.ErrorHandler = RemoteCommandDefaultErrorHandler;
    this.Reference = null;
    this.Aborted = false;
    this.IgnoreCurrentSolutionContext = false;
    this.Query = null;
    var sXmlDocumentStart = "",
        sXmlDocumentEnd = "",
        oXmlHttp = new XMLHttpRequest,
        aParameters = [],
        sCommandNamespace = _sWebServicesNamespace;
    if(!IsNull(commandNameSpace)) sCommandNamespace = commandNameSpace;
    if(IsNull(sUrlBase)) sUrlBase = "/AppWebServices/";
    var sUrl = Mscrm.CrmUri.create(sUrlBase + sObject + ".asmx").toString();
    sXmlDocumentStart += '<?xml version="1.0" encoding="utf-8" ?>';
    sXmlDocumentStart += '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">';
    sXmlDocumentStart += "<soap:Body>";
    sXmlDocumentStart += "<" + CrmEncodeDecode.CrmXmlEncode(sCommand) + ' xmlns="' + sCommandNamespace + '">';
    sXmlDocumentEnd += "</" + CrmEncodeDecode.CrmXmlEncode(sCommand) + ">";
    sXmlDocumentEnd += "</soap:Body>";
    sXmlDocumentEnd += "</soap:Envelope>";
    this.Execute = execute;
    this.SetParameter = setParameter;
    this.SetXmlParameter = setXmlParameter;
    this.Abort = abort;

    function getParameter(sName)
    {
        var i = aParameters[sName];
        if(!IsNull(i)) return aParameters[i];
        return null
    }

    function setParameter(sName, oValue)
    {
        var sValue;
        if(IsNull(oValue)) sValue = "";
        else if(isArray(oValue))
        {
            var sType = oValue.type;
            if(IsNull(sType) && oValue.length > 0) sType = "object";
            sValue = "";
            for(var i = 0; i < oValue.length; i++) sValue += "<" + CrmEncodeDecode.CrmXmlEncode(sType) + ">" + CrmEncodeDecode.CrmXmlEncode(oValue[i]) + "</" + CrmEncodeDecode.CrmXmlEncode(sType) + ">"
        }
        else sValue = CrmEncodeDecode.CrmXmlEncode(oValue);
        var oParameter = new CommandParameter(sName, sValue);
        pushCommandParameter(oParameter)
    }

    function setXmlParameter(sName, sXmlValue)
    {
        var oParameter = new CommandParameter(sName, IsNull(sXmlValue) ? "" : sXmlValue);
        pushCommandParameter(oParameter)
    }

    function pushCommandParameter(oParameter)
    {
        if(!IsNull(aParameters[oParameter.Name])) aParameters[aParameters[oParameter.Name]] = oParameter;
        else
        {
            aParameters[oParameter.Name] = aParameters.length;
            aParameters.push(oParameter)
        }
    }

    function abort()
    {
        if(!this.Aborted)
        {
            this.Aborted = true;
            oXmlHttp.abort()
        }
    }

    function execute(funAsyncCallbackFunction, timeout, ignoreExceptions)
    {
        var sXmlDocument = sXmlDocumentStart,
            noEx = IsNull(ignoreExceptions) ? false : ignoreExceptions;
        oXmlHttp.readyState > 0 && oXmlHttp.readyState < 4 && this.Abort();
        oXmlHttp.onreadystatechange = null;
        for(var i = 0; i < aParameters.length; i++) sXmlDocument += aParameters[i].GetXml();
        sXmlDocument += sXmlDocumentEnd;
        var async = !IsNull(funAsyncCallbackFunction), requestSw = null;
        if(Mscrm.MetricsStopwatch)
        {
            requestSw = new Mscrm.MetricsStopwatch("RemoteCommand.Execute");
            requestSw.properties = {
                IsAsync: async,
                Service: this.Service
            };
            requestSw.start()
        }
        if(async)
        {
            var oAsyncResultHandler = new AsyncResultHandler(this, oXmlHttp, funAsyncCallbackFunction);
            oXmlHttp.onreadystatechange = oAsyncResultHandler.ReadyStateChanged;
            oXmlHttp.metricsStopwatch = requestSw
        }
        var bTryAgain, remoteCmdResult = null,
            fullUrl = IsNull(this.Query) ? sUrl : sUrl + "?" + this.Query;
        do {
            bTryAgain = false;
            oXmlHttp.open("POST", fullUrl, async);
            Mscrm.Utilities.setResponseTypeToMSXml(oXmlHttp);
            Mscrm.MetricsReporting && Mscrm.MetricsReporting.instance().addXMLHttpRequestHeaders(oXmlHttp);
            oXmlHttp.setRequestHeader("SOAPAction", sCommandNamespace + "/" + sCommand);
            oXmlHttp.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
            oXmlHttp.setRequestHeader("Content-Length", sXmlDocument.length);
            SetTokenInHeader(oXmlHttp, Mscrm.CrmUri.create(fullUrl));
            !this.IgnoreCurrentSolutionContext && Mscrm.SolutionDecorater.setSolutionIdInRequestHeader(oXmlHttp);
            this.Aborted = false;
            try
            {
                if(!IsNull(timeout) && timeout >= 0) try
                {
                    oXmlHttp.timeout = timeout
                }
                catch(e)
                {
                    if(!noEx) throw e
                }
                oXmlHttp.send(sXmlDocument);
                if(oXmlHttp.readyState == 0)
                {
                    oXmlHttp.onreadystatechange = function() {};
                    abort()
                }
                else if(!async)
                {
                    remoteCmdResult = new RemoteCommandResult(this, oXmlHttp, false);
                    if(remoteCmdResult.Success == false) bTryAgain = remoteCmdResult.Retry;
                    else if(requestSw != null)
                    {
                        var reqId = oXmlHttp.getResponseHeader("REQ_ID");
                        if(reqId != null) requestSw.properties["ReqId"] = reqId;
                        requestSw.stop()
                    }
                }
            }
            catch(e)
            {
                var sErrorText = LOCID_REMOTECOMMAND_ERROR;
                if(noEx) bTryAgain = false;
                else bTryAgain = window.confirm(sErrorText)
            }
            if(bTryAgain) oXmlHttp = new XMLHttpRequest
        } while (bTryAgain);
        if(!async) return remoteCmdResult
    }
}

function RemoteCommandDefaultErrorHandler(sHResult, oXmlNode)
{
    if(sHResult == null) sHResult = "Not available";
    var sErrMessage = "";
    if(oXmlNode != null)
    {
        var oDescription = XUI.Xml.SelectSingleNode(oXmlNode, "error/description", XUI.Xml.CreateNSDictionary(oXmlNode.ownerDocument.documentElement));
        if(!IsNull(oDescription)) sErrMessage = XUI.Xml.GetText(oDescription)
    }
    var errInfo = Mscrm.ErrorInformation.createFromDoc(oXmlNode),
        callbackFunction = null;
    if(!IsNull(window.closeParent) && window.closeParent == true) callbackFunction = Mscrm.Utilities.createCallbackFunctionObject("doErrorPostProcessing", window, null, false);
    openErrorDlg(sHResult, sErrMessage, errInfo, null, null, callbackFunction)
}

function doErrorPostProcessing()
{
    closeWindow()
}

function AsyncResultHandler(oRemoteCommand, oXmlHttp, functionCallback)
{
    this.ReadyStateChanged = readyStateChanged;
    this.metricsStopwatch = null;

    function readyStateChanged()
    {
        if(oXmlHttp.readyState == 4)
        {
            oXmlHttp.onreadystatechange = null;
            if(!oRemoteCommand.Aborted && oXmlHttp.status != 0)
            {
                if(this.metricsStopwatch != null)
                {
                    if(oXmlHttp != null)
                    {
                        var reqId = oXmlHttp.getResponseHeader("REQ_ID");
                        if(reqId != null)
                        {
                            if(this.metricsStopwatch.properties == null) this.metricsStopwatch.properties = {};
                            this.metricsStopwatch.properties["ReqId"] = reqId
                        }
                    }
                    this.metricsStopwatch.stop()
                }
                var result = new RemoteCommandResult(oRemoteCommand, oXmlHttp, true);
                if(Mscrm.Utilities.isIE11StandardOrIE11CompatibleMode()) window.setTimeout(function()
                {
                    functionCallback(result, oRemoteCommand)
                }, 0);
                else functionCallback(result, oRemoteCommand);
                oXmlHttp.abort()
            }
        }
    }
}

function CommandParameter(sName, sValue)
{
    this.Name = sName;
    this.Value = sValue;
    this.GetXml = getParameterXml;

    function getParameterXml()
    {
        var sXml = "<" + CrmEncodeDecode.CrmXmlEncode(this.Name) + ">";
        sXml += this.Value;
        sXml += "</" + CrmEncodeDecode.CrmXmlEncode(this.Name) + ">";
        return sXml
    }
}

function RemoteCommandResult(oRemoteCommand, oXmlHttp, bIsAsync)
{
    var sCommand = oRemoteCommand.Command,
        oXml = oXmlHttp.responseXML;
    this.RemoteCommand = oRemoteCommand;
    this.RawResponse = oXml;
    this.Xml = null;
    this.ReturnValue = null;
    var soapBodyNode = null,
        defaultNSName = null;
    if(!IsNull(oXml))
    {
        var sNamespace = "";
        if(XUI.DomUtilities.HasChildElements(oXml)) sNamespace = XUI.DomUtilities.GetLastChild(oXml).prefix + ":";
        var soapBodyNode = XUI.Xml.SelectSingleNode(oXml, "/" + sNamespace + "Envelope/" + sNamespace + "Body", XUI.Xml.CreateNSDictionary(oXml.documentElement)),
            soadpBodyFirstChild = soapBodyNode ? XUI.DomUtilities.GetFirstChild(soapBodyNode) : null,
            xmlNSAttribute = null;
        if(!IsNull(soadpBodyFirstChild)) xmlNSAttribute = soadpBodyFirstChild.attributes.getNamedItem("xmlns");
        var defaultNSName = xmlNSAttribute ? xmlNSAttribute.nodeValue : null;
        this.Xml = defaultNSName ? XUI.Xml.SelectSingleNode(soapBodyNode, "./default:" + sCommand + "Response/default:" + sCommand + "Result",
        {
            "default": defaultNSName
        }) : null;
        this.ReturnValue = ReadXml(this.Xml)
    }
    var oResult = handleSoapResponse(oXmlHttp, bIsAsync);
    this.Success = oResult.Success;
    this.Retry = oResult.Retry;
    this.ConvertToObject = ReadXml;

    function handleSoapResponse(oXmlHttp, bAsyncRequest)
    {
        var sHResult = null,
            oXmlNode = null,
            oErrorNode, bSuccess = true,
            oXml = oXmlHttp.responseXML,
            nsDictionary = null,
            sNamespace = "",
            parseError = null;
        if(!IsNull(oXml))
        {
            nsDictionary = XUI.Xml.CreateNSDictionary(oXml.documentElement);
            sNamespace = XUI.DomUtilities.HasChildElements(oXml) ? XUI.DomUtilities.GetLastChild(oXml).prefix + ":" : "";
            parseError = XUI.Xml.GetParserError(oXml)
        }
        if(parseError)
        {
            sHResult = "XmlParseError";
            bSuccess = false
        }
        else if(oXmlHttp.status == 401)
        {
            sHResult = "0x80040277";
            bSuccess = false
        }
        else if(oXmlHttp.status != 200)
        {
            oXmlNode = !IsNull(oXml) ? XUI.Xml.SelectSingleNode(oXml, "/" + sNamespace + "Envelope/" + sNamespace + "Body/" + sNamespace + "Fault", nsDictionary) : null;
            if(!IsNull(oXmlNode))
            {
                oErrorNode = XUI.Xml.SelectSingleNode(oXmlNode, "error/code", nsDictionary);
                if(!IsNull(oErrorNode)) sHResult = XUI.Xml.GetText(oErrorNode);
                else
                {
                    oErrorNode = XUI.Xml.SelectSingleNode(oXmlNode, "detail/error/code", nsDictionary);
                    if(!IsNull(oErrorNode)) sHResult = XUI.Xml.GetText(oErrorNode)
                }
            }
            else sHResult = "ServerError";
            bSuccess = false
        }
        if(bSuccess)
        {
            var soapBodyNode = XUI.Xml.SelectSingleNode(oXml, "/" + sNamespace + "Envelope/" + sNamespace + "Body", nsDictionary),
                soadpBodyFirstChild = soapBodyNode ? XUI.DomUtilities.GetFirstChild(soapBodyNode) : null,
                xmlNSAttribute = null;
            if(soadpBodyFirstChild != null) xmlNSAttribute = soadpBodyFirstChild.attributes.getNamedItem("xmlns");
            var defaultNSName = xmlNSAttribute ? xmlNSAttribute.nodeValue : null;
            oXmlNode = defaultNSName ? XUI.Xml.SelectSingleNode(soapBodyNode, "./default:" + sCommand + "Response",
            {
                "default": defaultNSName
            }) : null;
            if(IsNull(oXmlNode))
            {
                sHResult = "SoapError";
                bSuccess = false
            }
        }
        if(!bSuccess)
        {
            var bRetry = false;
            if(sHResult == ERRORCODE_ETM)
            {
                if(!bAsyncRequest) bRetry = window.confirm(LOCID_ERRMSG_ETM_RETRY)
            }
            else oRemoteCommand.ErrorHandler && oRemoteCommand.ErrorHandler(sHResult, oXmlNode)
        }
        return {
            Success: bSuccess,
            Retry: bRetry
        }
    }

    function ReadXml(oXml)
    {
        var oReturnFromLoop = false,
            oReturnValue = {};
        if(IsNull(oXml)) return oReturnValue;
        var sReturnValue = "";
        XUI.DomUtilities.ForEachChild(oXml, function(oChildNode)
        {
            var oChildNodeBaseName = XUI.DomUtilities.GetBaseName(oChildNode);
            switch(oChildNode.nodeType)
            {
                case 1:
                    var oChildObject = ReadXml(oChildNode);
                    if(IsNull(oReturnValue[oChildNodeBaseName])) oReturnValue[oChildNodeBaseName] = oChildObject;
                    else
                    {
                        if(!isArray(oReturnValue[oChildNodeBaseName]))
                        {
                            var property = oReturnValue[oChildNodeBaseName];
                            oReturnValue[oChildNodeBaseName] = [];
                            oReturnValue[oChildNodeBaseName].push(property)
                        }
                        oReturnValue[oChildNodeBaseName].push(oChildObject)
                    }
                    break;
                case 3:
                    var parsedValue = fromString(oChildNode.nodeValue);
                    if(sReturnValue.length > 0 || typeof parsedValue == "string")
                    {
                        sReturnValue += fromString(oChildNode.nodeValue);
                        oReturnFromLoop = true
                    }
                    else
                    {
                        oReturnValue = parsedValue;
                        oReturnFromLoop = true;
                        return true
                    }
                    break;
                case 4:
                    sReturnValue += XUI.Xml.GetText(oChildNode);
                    oReturnFromLoop = true;
                    break;
                default:
                    break
            }
            return false
        });
        if(sReturnValue.length > 0) oReturnValue = sReturnValue;
        if(oReturnFromLoop) return oReturnValue;
        if(IsNull(oReturnValue.xmlAttributes))
        {
            var attributes = oXml.attributes;
            if(attributes.length > 0)
            {
                oReturnValue.xmlAttributes = {};
                for(var i = 0; i < attributes.length; i++) oReturnValue.xmlAttributes[XUI.DomUtilities.GetBaseName(attributes.item(i))] = fromString(attributes.item(i).nodeValue)
            }
        }
        return oReturnValue
    }

    function fromString(sValue)
    {
        if(sValue.toLowerCase() == "true") return true;
        else if(sValue.toLowerCase() == "false") return false;
        var intValue = parseInt(sValue, 10);
        if(!isNaN(intValue) && intValue.toString() == sValue) return intValue;
        var floatValue = parseFloat(sValue);
        if(!isNaN(floatValue) && floatValue.toString() == sValue) return floatValue;
        if(sValue.length > 19) return sValue;
        var dateValue = new Date(sValue);
        if(isNaN(dateValue) && !Date.prototype.toISOString) dateValue = ParseUTCDateFromISOString(sValue);
        if(dateValue != null && !isNaN(dateValue) && dateValue.getFullYear() >= 1900 && dateValue.getFullYear() < 5e3) return dateValue;
        return sValue
    }

    function ParseUTCDateFromISOString(s)
    {
        var dateRegex = /^(\d{4}\-\d\d\-\d\d([tT]\d\d:\d\d:\d\d*)?)$/,
            dateValid = dateRegex.exec(s);
        if(dateValid == null) return null;
        if(s.length > 10) return new Date(Date.UTC(parseInt(s.substr(0, 4), 10), parseInt(s.substr(5, 2), 10) - 1, parseInt(s.substr(8, 2), 10), parseInt(s.substr(11, 2), 10), parseInt(s.substr(14, 2), 10), parseInt(s.substr(17, 2), 10)));
        else return new Date(Date.UTC(parseInt(s.substr(0, 4), 10), parseInt(s.substr(5, 2), 10) - 1, parseInt(s.substr(8, 2), 10)))
    }
}

function ConvertUserTypeToLike(searchValue)
{
    for(var s = "", sChar = "", iLength = searchValue.length, i = 0; i < iLength; i++)
    {
        sChar = searchValue.charAt(i);
        switch(sChar)
        {
            case "%":
                s += "[%]";
                break;
            case "_":
                s += "[_]";
                break;
            case "[":
                s += "[[]";
                break;
            case "*":
                s += "%";
                break;
            default:
                s += sChar;
                break
        }
    }
    return s
}

function GetNodeValue(input, searchName, bNoDecode)
{
    if(!input || !searchName) return "";
    var rootStart = input.indexOf("<" + searchName + ">");
    if(rootStart == -1)
    {
        rootStart = input.indexOf("<" + searchName + " ");
        if(rootStart == -1) return ""
    }
    var startIndex = input.indexOf(">", rootStart) + 1,
        endIndex = input.indexOf("</" + searchName + ">", startIndex);
    if(endIndex == -1) return "";
    else return bNoDecode ? input.substring(startIndex, endIndex) : CrmEncodeDecode.CrmXmlDecode(input.substring(startIndex, endIndex))
}

function GetCachedSetting(settingName, defaultValue)
{
    if(window.top.oSettingsCache != null)
    {
        var stateValue = window.top.oSettingsCache[settingName];
        if(stateValue != null) return stateValue
    }
    return defaultValue
}

function SetCachedSetting(settingName, stateValue)
{
    if(window.top.oSettingsCache == null) window.top.oSettingsCache = {};
    window.top.oSettingsCache[settingName] = stateValue
}

function ScrollVerticalList(oContainer, oSelected, iSelectedIndex, iNumItems, bAlignToTop)
{
    (oContainer.scrollTop > iSelectedIndex / iNumItems * oContainer.scrollHeight || oContainer.scrollTop + oContainer.clientHeight < (iSelectedIndex + 1) / iNumItems * oContainer.scrollHeight) && oSelected.scrollIntoView(bAlignToTop)
}

function getNumDigits(iVal)
{
    if(isNaN(iVal)) return -1;
    if(iVal == null) return 0;
    var tempVal = iVal,
        countDigits = 0;
    while(tempVal != 0)
    {
        tempVal = tempVal / 10;
        tempVal = parseInt(tempVal, 10);
        countDigits++
    }
    return countDigits
}

function GetEntityIdAndDisplayName(entityData)
{
    var resultsXmlDoc = null,
        entityId = "",
        displayName = "";
    try
    {
        resultsXmlDoc = XUI.Xml.LoadXml(entityData);
        var entityIdNode = XUI.Xml.SelectSingleNode(resultsXmlDoc, "//EntityId", null),
            displayNameNode = XUI.Xml.SelectSingleNode(resultsXmlDoc, "//DisplayName", null);
        entityId = IsNull(entityIdNode) ? "" : XUI.Xml.GetText(entityIdNode);
        displayName = IsNull(displayNameNode) ? "" : XUI.Xml.GetText(displayNameNode)
    }
    catch(e)
    {}
    return {
        EntityId: entityId,
        DisplayName: displayName
    }
}

function toBool(sValue)
{
    return sValue.toLowerCase() == "true"
}

function QualifyLeadSuppressDeDup()
{
    var leadQualifyDataXmlDoc = XUI.Xml.LoadXml(_qualifyLeadData),
        oShowNew = toBool(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(leadQualifyDataXmlDoc, "//qlShowNew", null))),
        oCreateAccount = toBool(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(leadQualifyDataXmlDoc, "//qlCreateAccount", null))),
        oCreateContact = toBool(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(leadQualifyDataXmlDoc, "//qlCreateContact", null))),
        oCreateOpportunity = toBool(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(leadQualifyDataXmlDoc, "//qlCreateOpportunity", null))),
        oNewStatus = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(leadQualifyDataXmlDoc, "//ulNewStatus", null)),
        oOppCurrencyId = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(leadQualifyDataXmlDoc, "//qlOppCurrencyId", null)),
        oOpportunityParentType = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(leadQualifyDataXmlDoc, "//qlOpportunityParentType", null)),
        oOpportunityParentId = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(leadQualifyDataXmlDoc, "//qlOpportunityParentId", null)),
        oLeadId = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(leadQualifyDataXmlDoc, "//qlLeadId", null)),
        ocampaignId = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(leadQualifyDataXmlDoc, "//qlCampaignId", null)),
        ocampaignType = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(leadQualifyDataXmlDoc, "//qlCampaignType", null)),
        formEntityOtc = parseInt(document.getElementById("crmFormSubmitObjectType").value, 10);
    if(formEntityOtc == Mscrm.EntityTypeCode.CampaignResponse) QualifyLead(oLeadId, oShowNew, oCreateAccount, oCreateContact, oCreateOpportunity, oOpportunityParentType, oOpportunityParentId, true);
    else formEntityOtc == Mscrm.EntityTypeCode.Lead && qualifyLead(oShowNew, oCreateAccount, oCreateContact, oCreateOpportunity, oOpportunityParentType, oOpportunityParentId, oOppCurrencyId, oNewStatus, true)
}

function CheckForDuplicates(iEventType, sRedirectUrl)
{
    var dataXml = "",
        crmFormCtrl = $find("crmForm"),
        success = crmFormCtrl.BuildXml(false, false, true),
        xml = window.document.getElementById("crmFormSubmitXml");
    dataXml = xml.value;
    var oUrl = Mscrm.CrmUri.create("/Tools/DuplicateDetection/ViewDuplicates/ViewDuplicatesOnline.aspx?source=1"),
        oid = window.document.getElementById("crmFormSubmitId");
    if(oid && oid.value && oid.value != "") oUrl.get_query()["oid"] = oid.value;
    var dataXmlObj = {};
    dataXmlObj.xml = dataXml;
    var changedDataXmlObj = {};
    changedDataXmlObj.xml = _changedFormData;
    var dataXmlArray;
    if(typeof _dupActionName != "undefined") dataXmlArray = [dataXmlObj, changedDataXmlObj, _dupActionName];
    else dataXmlArray = [dataXmlObj, changedDataXmlObj];
    var innerPageManager = $find("crmInlinePageManager");
    if(IsNull(innerPageManager)) innerPageManager = $find("crmPageManager");
    var parameters = [iEventType, sRedirectUrl, crmFormCtrl, innerPageManager],
        callbackFunction = Mscrm.Utilities.createCallbackFunctionObject("performActionAfterViewDuplicates", this, parameters),
        entityData = openStdDlgWithCallback(oUrl, dataXmlArray, 560, 560, callbackFunction, false, false);
    Mscrm.Utilities.isModalDialogSupported() && performActionAfterViewDuplicates(entityData, iEventType, sRedirectUrl, crmFormCtrl, innerPageManager)
}

function performActionAfterViewDuplicates(entityData, iEventType, sRedirectUrl, crmFormCtrl, innerPageManager)
{
    entityData == "QualifyLead" && QualifyLeadSuppressDeDup();
    var entityId = "",
        displayName = "",
        returnValues;
    if(entityData && entityData != "")
    {
        returnValues = GetEntityIdAndDisplayName(entityData);
        if(!IsNull(returnValues))
        {
            entityId = returnValues.EntityId;
            displayName = returnValues.DisplayName
        }
    }
    if(entityId && entityId != "")
    {
        crmFormCtrl.detachCloseAlert();
        if(iEventType == 2)
        {
            if(!IsNull(Mscrm.PageManager) && Mscrm.PageManager.isFlatUIPage() && !IsNull(Mscrm.PageManager.get_instance()))
            {
                innerPageManager.executeDeferredActions();
                return
            }
            var oType = window.document.getElementById("crmFormSubmitObjectType").value;
            try
            {
                if(window.opener.location.href.indexOf("resolve.aspx") > 0) window.opener.auto(oType, displayName, entityId);
                else window.opener.auto(oType)
            }
            catch(e)
            {}
            closeWindow()
        }
        else if(iEventType == 1)
        {
            if(!IsNull(Mscrm.PageManager) && Mscrm.PageManager.isFlatUIPage() && !IsNull(Mscrm.PageManager.get_instance()))
            {
                var parameters = {};
                parameters["newId"] = entityId;
                innerPageManager.executeDeferredActions(parameters);
                return
            }
            var sLocation = location.href,
                separator = sLocation.indexOf("?") != -1 ? "&" : "?",
                poundIndex = -1;
            if((poundIndex = sLocation.indexOf("#")) != -1) sLocation = sLocation.substr(0, poundIndex);
            if(sLocation.indexOf("?id=") == -1 && sLocation.indexOf("&id=") == -1)
            {
                sLocation = sLocation + separator + "id=" + entityId;
                separator = "&"
            }
            if(sLocation.indexOf("?refreshgrid=") == -1 && sLocation.indexOf("&refreshgrid=") == -1) sLocation = sLocation + separator + "refreshgrid=1";
            window.location.href = sLocation
        }
        else if(iEventType == 59)
        {
            if(!IsNull(Mscrm.PageManager) && Mscrm.PageManager.isFlatUIPage() && !IsNull(Mscrm.PageManager.get_instance()))
            {
                var parameters = {};
                parameters["newId"] = entityId;
                innerPageManager.executeDeferredActions(parameters);
                return
            }
            window.location.href = sRedirectUrl
        }
    }
}

function customErrorHandler(ex, iEventType, sUrl)
{
    if(ex == "0x80040333")
    {
        CheckForDuplicates(iEventType, sUrl);
        return true
    }
    return false
}

function escapeSingleQuotesAndBackSlashes(s)
{
    s = s.replace(/\\/g, "\\\\");
    return s.replace(/'/g, "\\'")
}

function FormatDateTime(dDateTime)
{
    var DATE_SEPARATOR = "-",
        DATETIME_SEPARATOR = "T",
        TIME_SEPARATOR = ":",
        oBuilder = new StringBuilder;
    oBuilder.Append(dDateTime.getFullYear());
    oBuilder.Append(DATE_SEPARATOR);
    oBuilder.Append(PadNumber(dDateTime.getMonth() + 1));
    oBuilder.Append(DATE_SEPARATOR);
    oBuilder.Append(PadNumber(dDateTime.getDate()));
    oBuilder.Append(DATETIME_SEPARATOR);
    oBuilder.Append(PadNumber(dDateTime.getHours()));
    oBuilder.Append(TIME_SEPARATOR);
    oBuilder.Append(PadNumber(dDateTime.getMinutes()));
    oBuilder.Append(TIME_SEPARATOR);
    oBuilder.Append(PadNumber(dDateTime.getSeconds()));
    return oBuilder.ToString()
}

function PadNumber(iNumber, iLength)
{
    var PAD_CHAR = "0",
        DEFAULT_LENGTH = 2;
    if(iLength == null) iLength = DEFAULT_LENGTH;
    for(var sNumber = new String(iNumber), oBuilder = new StringBuilder, i = 0; i < iLength - sNumber.length; i++) oBuilder.Append(PAD_CHAR);
    oBuilder.Append(sNumber);
    return oBuilder.ToString()
}

function isControlVisible(oElement)
{
    return XUI.Html.GetComputedStyle(oElement, "display") === "none" ? false : true
}