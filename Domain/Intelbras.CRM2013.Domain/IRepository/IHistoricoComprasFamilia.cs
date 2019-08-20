﻿using System;
using System.Collections.Generic;
using SDKore.DomainModel;
using System.Data;

namespace Intelbras.CRM2013.Domain.IRepository
{
    public interface IHistoricoComprasFamilia<T> : IRepository<T>, IRepositoryBase
    {
        DataTable ListarPor(string ano, string trimestre);
        T ObterPor(Guid UnidadeNegocio, Guid Segmento, Guid FamiliaProduto, int ano, int trimestre);
    }
}
