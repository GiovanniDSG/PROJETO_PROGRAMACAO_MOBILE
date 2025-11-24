import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  ScrollView,
} from "react-native";

/* IMPORTS DAS IMAGENS */
import coca2L from "./assets/Bebidas/Coca 2 Litros.webp";
import coca200 from "./assets/Bebidas/Coca 200ml.webp";
import cocaLata from "./assets/Bebidas/Coca Lata.jpg";
import copoCafe from "./assets/Bebidas/Copo de Cafe.webp";
import fanta200 from "./assets/Bebidas/Fanta Laranja 200ml.webp";
import fanta2L from "./assets/Bebidas/Fanta Laranja 2L.webp";
import fantaLata from "./assets/Bebidas/Fanta Laranja lata.webp";
import pepsi200 from "./assets/Bebidas/Pepsi 200ml.webp";
import pepsi2L from "./assets/Bebidas/Pepsi 2L.webp";
import pepsiLata from "./assets/Bebidas/Pepsi Lata.png";
import sprite200 from "./assets/Bebidas/Sprite 200ml.webp";
import sprite2L from "./assets/Bebidas/Sprite 2L.jpg";
import spriteLata from "./assets/Bebidas/Sprite Lata.webp";

import boloGranulado from "./assets/Bolos/Bolo Branco com granulado.jpg";
import boloMorango from "./assets/Bolos/Bolo Branco Morango.jpg";
import boloChocorango from "./assets/Bolos/Bolo Chocorango.jpg";
import boloFormigueiro from "./assets/Bolos/Bolo Formigueiro Granulado chocolate.jpg";
import fatiaBrigadeiro from "./assets/Bolos/Fatia Bolo Chocolate Brigadeiro.avif";
import fatiaChocolate from "./assets/Bolos/Fatia Bolo Chocolate.jfif";

import brownie from "./assets/Doces/Brownie.avif";
import cupcakeChoc from "./assets/Doces/Cupcake Chocolate.webp";
import cupcakeMorango from "./assets/Doces/Cupcake de Morango.webp";
import pudim from "./assets/Doces/Pudim.avif";
import sonho from "./assets/Doces/Sonho.jpg";

import manteigaClay from "./assets/Frios/Manteiga Claybom.webp";
import manteigaDoriana from "./assets/Frios/Manteiga Doriana.jpg";
import manteigaQualy from "./assets/Frios/Manteiga Qualy.webp";
import mortadela from "./assets/Frios/Mortadela.webp";
import mussarela from "./assets/Frios/Mussarela.jpg";

import leiteNinho from "./assets/Laticinios/Leite Ninho.webp";
import leiteSaquinho from "./assets/Laticinios/Leite Saquinho.jfif";
import leiteIntegral from "./assets/Laticinios/Leite.jpeg";
import queijoBranco from "./assets/Laticinios/Queijo Branco.avif";

import paoQueijo from "./assets/Paes/pao_de_queijo.png";
import paoDoce from "./assets/Paes/pao_doce.png";
import paoIntegral from "./assets/Paes/pao_integral.webp";
import paoFrances from "./assets/Paes/pao.webp";

import cigarrete from "./assets/Salgados/Cigarrete.webp";
import coxinha from "./assets/Salgados/Coxinha.jpg";
import kibe from "./assets/Salgados/kibe.jpg";
import pastel from "./assets/Salgados/Pastel.jpg";

/* LISTA SEPARADA POR CATEGORIA */
const categorias = {
  Bebidas: [
    { id: "1", nome: "Coca-Cola 2L", preco: 10.0, descricao: "Refrigerante 2L", imagem: coca2L },
    { id: "2", nome: "Coca-Cola 200ml", preco: 3.0, descricao: "Refrigerante pequeno", imagem: coca200 },
    { id: "3", nome: "Coca-Cola Lata", preco: 5.0, descricao: "Refrigerante gelado", imagem: cocaLata },
    { id: "4", nome: "Copo de Café", preco: 2.0, descricao: "Café quente", imagem: copoCafe },
    { id: "5", nome: "Fanta 200ml", preco: 3.0, descricao: "Refrigerante pequeno", imagem: fanta200 },
    { id: "6", nome: "Fanta 2L", preco: 9.5, descricao: "Refrigerante 2L", imagem: fanta2L },
    { id: "7", nome: "Fanta Lata", preco: 5.0, descricao: "Refrigerante gelado", imagem: fantaLata },
    { id: "8", nome: "Pepsi 200ml", preco: 3.0, descricao: "Refrigerante pequeno", imagem: pepsi200 },
    { id: "9", nome: "Pepsi 2L", preco: 9.0, descricao: "Refrigerante 2L", imagem: pepsi2L },
    { id: "10", nome: "Pepsi Lata", preco: 5.0, descricao: "Refrigerante gelado", imagem: pepsiLata },
    { id: "11", nome: "Sprite 200ml", preco: 3.0, descricao: "Refrigerante pequeno", imagem: sprite200 },
    { id: "12", nome: "Sprite 2L", preco: 9.0, descricao: "Refrigerante 2L", imagem: sprite2L },
    { id: "13", nome: "Sprite Lata", preco: 5.0, descricao: "Refrigerante gelado", imagem: spriteLata },
  ],

  Bolos: [
    { id: "14", nome: "Bolo Branco Granulado", preco: 6.0, descricao: "Bolo simples com granulado", imagem: boloGranulado },
    { id: "15", nome: "Bolo Branco Morango", preco: 6.0, descricao: "Bolo com cobertura de morango", imagem: boloMorango },
    { id: "16", nome: "Bolo Chocorango", preco: 6.5, descricao: "Chocolate e morango", imagem: boloChocorango },
    { id: "17", nome: "Bolo Formigueiro", preco: 6.5, descricao: "Bolo formigueiro tradicional", imagem: boloFormigueiro },
    { id: "18", nome: "Fatia Brigadeiro", preco: 5.0, descricao: "Fatia de bolo de brigadeiro", imagem: fatiaBrigadeiro },
    { id: "19", nome: "Fatia Chocolate", preco: 5.0, descricao: "Fatia de bolo de chocolate", imagem: fatiaChocolate },
  ],

  Doces: [
    { id: "20", nome: "Brownie", preco: 4.5, descricao: "Brownie macio", imagem: brownie },
    { id: "21", nome: "Cupcake Chocolate", preco: 4.0, descricao: "Cupcake sabor chocolate", imagem: cupcakeChoc },
    { id: "22", nome: "Cupcake Morango", preco: 4.0, descricao: "Cupcake sabor morango", imagem: cupcakeMorango },
    { id: "23", nome: "Pudim", preco: 4.0, descricao: "Pudim tradicional", imagem: pudim },
    { id: "24", nome: "Sonho", preco: 3.5, descricao: "Sonho recheado", imagem: sonho },
  ],

  Frios: [
    { id: "25", nome: "Manteiga Claybom", preco: 8.0, descricao: "Manteiga tradicional", imagem: manteigaClay },
    { id: "26", nome: "Manteiga Doriana", preco: 8.5, descricao: "Manteiga saborosa", imagem: manteigaDoriana },
    { id: "27", nome: "Manteiga Qualy", preco: 9.0, descricao: "Manteiga cremosa", imagem: manteigaQualy },
    { id: "28", nome: "Mortadela", preco: 3.0, descricao: "Porção de mortadela", imagem: mortadela },
    { id: "29", nome: "Mussarela", preco: 5.0, descricao: "Porção de mussarela", imagem: mussarela },
  ],

  Laticínios: [
    { id: "30", nome: "Leite Ninho", preco: 5.6, descricao: "Leite em pó Ninho", imagem: leiteNinho },
    { id: "31", nome: "Leite Saquinho", preco: 4.0, descricao: "Leite tipo C", imagem: leiteSaquinho },
    { id: "32", nome: "Leite Integral", preco: 5.6, descricao: "Leite integral tradicional", imagem: leiteIntegral },
    { id: "33", nome: "Queijo Branco", preco: 6.0, descricao: "Porção de queijo branco", imagem: queijoBranco },
  ],

  Pães: [
    { id: "34", nome: "Pão de Queijo", preco: 1.0, descricao: "Pão de queijo mineiro", imagem: paoQueijo },
    { id: "35", nome: "Pão Doce", preco: 1.5, descricao: "Pão doce tradicional", imagem: paoDoce },
    { id: "36", nome: "Pão Integral", preco: 1.5, descricao: "Pão integral saudável", imagem: paoIntegral },
    { id: "38", nome: "Pão Francês", preco: 0.95, descricao: "Pão francês tradicional", imagem: paoFrances },
  ],

  Salgados: [
    { id: "39", nome: "Cigarrete", preco: 6.0, descricao: "Salgado recheado", imagem: cigarrete },
    { id: "40", nome: "Coxinha", preco: 6.0, descricao: "Coxinha tradicional", imagem: coxinha },
    { id: "41", nome: "Kibe", preco: 6.0, descricao: "Kibe crocante", imagem: kibe },
    { id: "42", nome: "Pastel", preco: 6.5, descricao: "Pastel de feira", imagem: pastel },
  ],
};

export default function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Bebidas");
  const [modalCarrinho, setModalCarrinho] = useState(false);
  const [modalFinalizar, setModalFinalizar] = useState(false);
  const [carrinho, setCarrinho] = useState([]);

  function adicionarAoCarrinho(item) {
    setCarrinho([...carrinho, item]);
  }

  function removerDoCarrinho(index) {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
  }

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cardápio</Text>

      {/* CATEGORIAS */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 10 }}>
        {Object.keys(categorias).map((cat) => (
          <TouchableOpacity
            key={cat}
            onPress={() => setCategoriaSelecionada(cat)}
            style={[
              styles.catBotao,
              categoriaSelecionada === cat && styles.catSelecionada,
            ]}
          >
            <Text style={styles.catTexto}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* LISTA DE PRODUTOS */}
      <FlatList
        data={categorias[categoriaSelecionada]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.imagem} style={styles.imagem} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.descricao}>{item.descricao}</Text>
              <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>

              <TouchableOpacity style={styles.botao} onPress={() => adicionarAoCarrinho(item)}>
                <Text style={styles.botaoTexto}>Adicionar ao Carrinho</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* BOTÃO DO CARRINHO */}
      <TouchableOpacity style={styles.carrinhoBotao} onPress={() => setModalCarrinho(true)}>
        <Text style={styles.carrinhoTexto}>🛒 {carrinho.length}</Text>
      </TouchableOpacity>

      {/* MODAL DO CARRINHO */}
      <Modal visible={modalCarrinho} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitulo}>Carrinho</Text>

          <ScrollView style={{ width: "100%" }}>
            {carrinho.map((item, index) => (
              <View key={index} style={styles.carrinhoItem}>
                <Text style={styles.carrinhoNome}>{item.nome}</Text>
                <Text>R$ {item.preco.toFixed(2)}</Text>

                <TouchableOpacity onPress={() => removerDoCarrinho(index)}>
                  <Text style={styles.removerTexto}>Remover</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>

          <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>

          {/* BOTÃO FINALIZAR COMPRA */}
          <TouchableOpacity
            style={styles.finalizarBotao}
            onPress={() => {setModalCarrinho(false); // fecha o primeiro
            setModalFinalizar(true);     // abre o segundo
            }}

          >
            <Text style={styles.finalizarTexto}>Finalizar Compra</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fecharBotao} onPress={() => setModalCarrinho(false)}>
            <Text style={styles.fecharTexto}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* MODAL FINALIZAR */}
      <Modal visible={modalFinalizar} animationType="fade" transparent>
        <View style={styles.finalizarOverlay}>
          <View style={styles.finalizarBox}>
            <Text style={styles.finalizarTitulo}>Resumo da Compra</Text>

            <ScrollView>
              {carrinho.map((item, i) => (
                <Text key={i} style={styles.finalizarItem}>
                  • {item.nome} — R$ {item.preco.toFixed(2)}
                </Text>
              ))}
            </ScrollView>

            <Text style={styles.finalTotal}>TOTAL: R$ {total.toFixed(2)}</Text>

            <TouchableOpacity
              style={styles.finalizarOk}
              onPress={() => {
                setCarrinho([]);
                setModalFinalizar(false);
                setModalCarrinho(false);
              }}
            >
              <Text style={styles.okTexto}>Concluir Pedido</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

/* ESTILOS */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  /* CATEGORIAS */
  catBotao: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    backgroundColor: "#ddd",
    borderRadius: 20,
    marginRight: 10,
  },
  catSelecionada: {
    backgroundColor: "#007BFF",
  },
  catTexto: {
    color: "#000",
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 2,
  },
  imagem: { width: "100%", height: 320 },
  info: { padding: 10 },
  nome: { fontSize: 18, fontWeight: "bold" },
  descricao: { fontSize: 14, color: "#555", marginVertical: 4 },
  preco: { fontSize: 16, fontWeight: "bold", color: "#008000" },
  botao: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 10,
    marginTop: 8,
  },
  botaoTexto: { color: "#fff", textAlign: "center", fontWeight: "bold" },

  carrinhoBotao: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#FFD700",
    padding: 15,
    borderRadius: 50,
    elevation: 5,
  },
  carrinhoTexto: { fontSize: 20, fontWeight: "bold" },

  modalContainer: {
    flex: 1,
    paddingTop: 60,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  modalTitulo: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },

  carrinhoItem: {
    width: "90%",
    backgroundColor: "#eee",
    padding: 12,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  carrinhoNome: { fontSize: 16, fontWeight: "bold" },
  removerTexto: { color: "red", marginTop: 5 },
  total: { fontSize: 22, fontWeight: "bold", marginVertical: 20 },

  finalizarBotao: {
    backgroundColor: "#28A745",
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  finalizarTexto: { color: "#fff", fontSize: 16, fontWeight: "bold" },

  fecharBotao: {
    backgroundColor: "#333",
    padding: 12,
    borderRadius: 10,
  },
  fecharTexto: { color: "#fff", fontSize: 16 },

  /* MODAL FINALIZAR */
  finalizarOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  finalizarBox: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
  },
  finalizarTitulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  finalizarItem: {
    fontSize: 16,
    marginBottom: 8,
  },
  finalTotal: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  finalizarOk: {
    backgroundColor: "#28A745",
    padding: 12,
    borderRadius: 10,
  },
  okTexto: { color: "#fff", fontWeight: "bold", textAlign: "center" },
});
