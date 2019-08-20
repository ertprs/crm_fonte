﻿using System;
using NUnit.Framework;
using System.Web.Services.Protocols;
using Intelbras.CRM2013.Domain;
using System.Web;
using System.Web.Services;
using Intelbras.Message.Helper;
using itb = Intelbras.CRM2013.Domain.Enum.Sistemas;
using System.Collections.Generic;
using SDKore.Configuration;
using System.Text;
using System.Security.Cryptography;
using Intelbras.CRM2013.Domain.Model;
using System.ServiceModel;
using System.Xml.Linq;


namespace Intelbras.CRM2013.Tests
{
    [TestFixture]
    public class TestesObterPreco : Base
    {

        [Test]
        public void ObterPrecoProduto()
        {
            Domain.Servicos.Integracao integ = new Domain.Servicos.Integracao(OrganizationName, IsOffline);
            String teste = String.Empty;

            #region Msg0101

            StringBuilder sb = new StringBuilder();
            sb.AppendLine("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
            sb.AppendLine("<MENSAGEM>");
            sb.AppendLine("  <CABECALHO>");
            sb.AppendLine("    <IdentidadeEmissor>95061229-FF31-4FD1-A875-96A98D67280C</IdentidadeEmissor>");
            sb.AppendLine("    <NumeroOperacao>f7e8e1af-d500-e411-9420-00155d013d39</NumeroOperacao>");
            sb.AppendLine("    <CodigoMensagem>MSG0101</CodigoMensagem>");
            sb.AppendLine("    <LoginUsuario>BERNADETE </LoginUsuario>");
            sb.AppendLine("  </CABECALHO>");
            sb.AppendLine("  <CONTEUDO>");
            sb.AppendLine("    <MSG0101>");
            sb.AppendLine("      <Conta>f7e8e1af-d500-e411-9420-00155d013d39</Conta>");
            sb.AppendLine("      <ProdutosItens>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4563201</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4007207</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4563106</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580014</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580015</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4991111</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4007067</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580057</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580054</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580055</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580066</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580081</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580069</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580085</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580087</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580065</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580082</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580068</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580064</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580083</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580067</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580084</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580086</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580050</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580070</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580078</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580071</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580079</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4600034</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4600035</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4600036</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4600063</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4600064</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580016</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580088</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580017</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580089</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580073</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580074</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580075</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580001</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580003</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580021</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580022</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580063</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580062</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580061</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580000</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580011</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("        <ProdutoItem>");
            sb.AppendLine("          <CodigoProduto>4580012</CodigoProduto>");
            sb.AppendLine("          <Moeda>Real</Moeda>");
            sb.AppendLine("          <Quantidade>1</Quantidade>");
            sb.AppendLine("        </ProdutoItem>");
            sb.AppendLine("      </ProdutosItens>");
            sb.AppendLine("    </MSG0101>");
            sb.AppendLine("  </CONTEUDO>");
            sb.AppendLine("</MENSAGEM>");

            #endregion

            integ.Postar(usuario, senha, sb.ToString(), out teste);
        }
        

    }
}
