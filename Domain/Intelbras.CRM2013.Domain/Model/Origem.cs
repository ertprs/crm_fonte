﻿using System;
using System.Collections.Generic;
using SDKore.Crm.Util;
using SDKore.DomainModel;
using Intelbras.CRM2013.Domain.Servicos;

namespace Intelbras.CRM2013.Domain.Model
{
    [LogicalEntity("itbc_origem")]
    public class Origem:IntegracaoBase
    {
        #region Construtores

        private RepositoryService RepositoryService { get; set; }

        public Origem() { }
        public Origem(string organization, bool isOffline)
                : base(organization, isOffline)
            {
                RepositoryService = new RepositoryService(organization, isOffline);
            }

            public Origem(string organization, bool isOffline, object provider)
                : base(organization, isOffline, provider)
            {
                RepositoryService = new RepositoryService(organization, isOffline, provider);
            }

        #endregion

        #region Atributos
            [LogicalAttribute("itbc_origemid")]
            public Guid? ID { get; set; }

            [LogicalAttribute("itbc_codigo_origem")]
            public String Codigo { get; set; }

            [LogicalAttribute("itbc_name")]
            public String Nome { get; set; }

            [LogicalAttribute("itbc_subfamiliadeproduto")]
            public Lookup Subfamilia { get; set; }

            [LogicalAttribute("statecode")]
            public int? Status { get; set; }        
        #endregion
    }
}
