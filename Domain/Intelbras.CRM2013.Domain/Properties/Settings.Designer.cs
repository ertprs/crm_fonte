﻿//------------------------------------------------------------------------------
// <auto-generated>
//     O código foi gerado por uma ferramenta.
//     Versão de Tempo de Execução:4.0.30319.42000
//
//     As alterações ao arquivo poderão causar comportamento incorreto e serão perdidas se
//     o código for gerado novamente.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Intelbras.CRM2013.Domain.Properties {
    
    
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.VisualStudio.Editors.SettingsDesigner.SettingsSingleFileGenerator", "15.9.0.0")]
    internal sealed partial class Settings : global::System.Configuration.ApplicationSettingsBase {
        
        private static Settings defaultInstance = ((Settings)(global::System.Configuration.ApplicationSettingsBase.Synchronized(new Settings())));
        
        public static Settings Default {
            get {
                return defaultInstance;
            }
        }
        
        [global::System.Configuration.ApplicationScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.SpecialSettingAttribute(global::System.Configuration.SpecialSetting.WebServiceUrl)]
        [global::System.Configuration.DefaultSettingValueAttribute("http://10.1.11.75:8080/sellout")]
        public string Intelbras_CRM2013_Domain_TabelaPrecoExtranet_SellOutServiceService {
            get {
                return ((string)(this["Intelbras_CRM2013_Domain_TabelaPrecoExtranet_SellOutServiceService"]));
            }
        }
        
        [global::System.Configuration.ApplicationScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.SpecialSettingAttribute(global::System.Configuration.SpecialSetting.WebServiceUrl)]
        [global::System.Configuration.DefaultSettingValueAttribute("https://sp2013dev.intelbras.com.br/_vti_bin/Lists.asmx")]
        public string Intelbras_CRM2013_Domain_br_com_intelbras_sp2013dev_Lists {
            get {
                return ((string)(this["Intelbras_CRM2013_Domain_br_com_intelbras_sp2013dev_Lists"]));
            }
        }
        
        [global::System.Configuration.ApplicationScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.SpecialSettingAttribute(global::System.Configuration.SpecialSetting.WebServiceUrl)]
        [global::System.Configuration.DefaultSettingValueAttribute("http://crm2013d.intelbras.com.br:5554/ISV/wssellout/selloutcrmws.asmx")]
        public string Intelbras_CRM2013_Domain_Sellout_SellOutCRMWS {
            get {
                return ((string)(this["Intelbras_CRM2013_Domain_Sellout_SellOutCRMWS"]));
            }
        }
        
        [global::System.Configuration.ApplicationScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.SpecialSettingAttribute(global::System.Configuration.SpecialSetting.WebServiceUrl)]
        [global::System.Configuration.DefaultSettingValueAttribute("http://wsa.intelbras.com.br:8080/wsa2/wsa2")]
        public string Intelbras_CRM2013_Domain_IntelbrasService_integracaoERPService {
            get {
                return ((string)(this["Intelbras_CRM2013_Domain_IntelbrasService_integracaoERPService"]));
            }
        }
        
        [global::System.Configuration.ApplicationScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.SpecialSettingAttribute(global::System.Configuration.SpecialSetting.WebServiceUrl)]
        [global::System.Configuration.DefaultSettingValueAttribute("http://wsa.intelbras.com.br:8080/wsa2/wsa2")]
        public string Intelbras_CRM2013_Domain_SharepointWebService_integracaoSPService {
            get {
                return ((string)(this["Intelbras_CRM2013_Domain_SharepointWebService_integracaoSPService"]));
            }
        }
        
        [global::System.Configuration.ApplicationScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.SpecialSettingAttribute(global::System.Configuration.SpecialSetting.WebServiceUrl)]
        [global::System.Configuration.DefaultSettingValueAttribute("https://api.walmartb2b.com.br/v1.0.14/ParceiroIntegracao.asmx")]
        public string Intelbras_CRM2013_Domain_WalMart_Service_ParceiroIntegracao {
            get {
                return ((string)(this["Intelbras_CRM2013_Domain_WalMart_Service_ParceiroIntegracao"]));
            }
        }
    }
}
