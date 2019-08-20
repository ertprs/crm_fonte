﻿using System;
using System.Collections.Generic;
using SDKore.Crm.Util;
using SDKore.DomainModel;
using Intelbras.CRM2013.Domain.Servicos;


namespace Intelbras.CRM2013.Domain.Model
{
    [LogicalEntity("itbc_municipios")]
    public class MunicipioUF : DomainBase
    {
        #region Construtores

        private RepositoryService RepositoryService { get; set; }

        public MunicipioUF() { }

        public MunicipioUF(string organization, bool isOffline)
            : base(organization, isOffline)
        {
            RepositoryService = new RepositoryService(organization, isOffline);
        }

        public MunicipioUF(string organization, bool isOffline, object provider)
            : base(organization, isOffline, provider)
        {
            RepositoryService = new RepositoryService(organization, isOffline, provider);
        }

        #endregion

        #region Atributos
        [LogicalAttribute("itbc_municipiosid")]
        public Lookup Municipio { get; set; }

        [LogicalAttribute("itbc_estadoid")]
        public Lookup Estado { get; set; }
        #endregion
    }
}
