﻿using System;
using System.Collections.Generic;
using SDKore.Crm.Util;
using SDKore.DomainModel;
using Microsoft.Xrm.Sdk;
using Intelbras.CRM2013.Domain.Servicos;

namespace Intelbras.CRM2013.Domain.Model
{
    [LogicalEntity("itbc_processo")]
    public class Processo : DomainBase
    {
       #region Construtores

        private RepositoryService RepositoryService { get; set; }

        public Processo() { }

        public Processo(string organization, bool isOffline, object provider)
            : base(organization, isOffline, provider)
        {
            RepositoryService = new RepositoryService(organization, isOffline, provider);
        }

        public Processo(string organization, bool isOffline)
            : base(organization, isOffline)
        {
            RepositoryService = new RepositoryService(organization, isOffline);
        }
        #endregion

        #region Atributos
        [LogicalAttribute("itbc_processoid")]
        public Guid? ID { get; set; }

        [LogicalAttribute("itbc_tipodesolicitacaoid")]
        public Lookup TipoDeSolicitacao { get; set; }

        [LogicalAttribute("itbc_name")]
        public String Nome { get; set; }

        [LogicalAttribute("itbc_beneficiodoprogramaid")]
        public Lookup BeneficioDoPrograma { get; set; }

        #endregion
    }
}
