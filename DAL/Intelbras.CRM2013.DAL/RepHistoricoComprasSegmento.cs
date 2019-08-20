﻿using System;
using System.Collections.Generic;
using SDKore.Crm;
using Intelbras.CRM2013.Domain.IRepository;
using Microsoft.Xrm.Sdk.Query;
using System.Data;
using Intelbras.CRM2013.Domain.Model;
using System.Text;


namespace Intelbras.CRM2013.DAL
{

    public class RepHistoricoComprasSegmento<T> : CrmServiceRepository<T>, IHistoricoComprasSegmento<T>
    {
        #region Objeto Q obtem a conexao com o SQL
        private DataBaseSqlServer _DataBaseSqlServer = null;
        private DataBaseSqlServer DataBaseSqlServer
        {
            get
            {
                if (_DataBaseSqlServer == null)
                    _DataBaseSqlServer = new DataBaseSqlServer();

                return _DataBaseSqlServer;
            }
        }
        #endregion
        public DataTable ListarPor(string ano, string trimestre)
        {
            string commandIn = string.Empty;
            StringBuilder strSql = new StringBuilder();
            strSql.Append("Select CD_Unidade_Negocio, ");
            strSql.Append("cd_canal, ");
            strSql.Append("cd_ano, ");
            strSql.Append("cd_segmento, ");
            strSql.Append("cd_trimestre, ");
            strSql.Append(" sum([NM_Vl_Liquido_Total]) Valor, ");
            strSql.Append(" sum([NM_Quantidade_Total]) qtd ");
            strSql.Append(" From viewFaturamentoCRM ");
            strSql.AppendFormat(" Where CD_Ano = {0} ", ano);

            Intelbras.CRM2013.Domain.Servicos.RepositoryService RepositoryService = new Intelbras.CRM2013.Domain.Servicos.RepositoryService(this.OrganizationName, this.IsOffline);
            var parametroGlobal = RepositoryService.ParametroGlobal.ObterPorCodigoTipoParametroGlobal((int)Intelbras.CRM2013.Domain.Enum.ParametroGlobal.Parametrizar.GruposEstoqueGeracaoOrcamentosMeta);
            if (parametroGlobal == null || string.IsNullOrEmpty(parametroGlobal.Valor))
            {
                throw new ArgumentException("(CRM) Não foi encontrado Parametro Global [" + (int)Intelbras.CRM2013.Domain.Enum.ParametroGlobal.Parametrizar.GruposEstoqueGeracaoOrcamentosMeta + "].");
            }
            else
                strSql.AppendFormat(" And CD_Grupo_Estoque IN ({0}) ", parametroGlobal.Valor.Replace(';',','));

            strSql.AppendFormat(" And cd_trimestre = {0} ", trimestre);
            strSql.AppendLine(" AND CD_Canal = 1 ");
            strSql.Append(" group by CD_Unidade_Negocio, cd_canal, CD_Ano, cd_segmento, CD_Trimestre ");

            return DataBaseSqlServer.executeQuery(strSql.ToString());
        }

        public T ObterPor(Guid UnidadeNeg,Guid Segmento, Int32 ano, String Trimestre)
        {
            var query = GetQueryExpression<T>(true);

            #region Condições


            ConditionExpression cond1 = new ConditionExpression("itbc_unidadedenegocioid", Microsoft.Xrm.Sdk.Query.ConditionOperator.Equal, UnidadeNeg);
            query.Criteria.Conditions.Add(cond1);

            ConditionExpression cond4 = new ConditionExpression("itbc_segmentoid", Microsoft.Xrm.Sdk.Query.ConditionOperator.Equal, Segmento);
            query.Criteria.Conditions.Add(cond4);

            ConditionExpression cond2 = new ConditionExpression("itbc_ano", Microsoft.Xrm.Sdk.Query.ConditionOperator.Equal, ano);
            query.Criteria.Conditions.Add(cond2);

            ConditionExpression cond3 = new ConditionExpression("itbc_trimestrenew", Microsoft.Xrm.Sdk.Query.ConditionOperator.Equal, Trimestre);
            query.Criteria.Conditions.Add(cond3);
            
            #endregion

            #region Ordenação
            OrderExpression ord1 = new OrderExpression("itbc_name", Microsoft.Xrm.Sdk.Query.OrderType.Ascending);
            query.Orders.Add(ord1);
            #endregion

            var colecao = this.RetrieveMultiple(query);

            if (colecao.List.Count == 0)
                return default(T);

            return colecao.List[0];
        }

    }
}