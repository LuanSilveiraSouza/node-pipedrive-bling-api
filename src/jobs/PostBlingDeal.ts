import BlingApi from '../services/BlingApi';

import { IDeal } from '../types/deal';

const PostBlingDeal = async (deal: IDeal): Promise<boolean> => {
	const xml = `<?xml version="1.0" encoding="utf-8"?><pedido><data>${new Date(
		deal.date
	).toLocaleDateString()}</data><cliente><nome>${
		deal.person_name
	}</nome><tipoPessoa>F</tipoPessoa><fone>${
		deal?.person_phone
	}</fone><email>${
		deal.person_email
	}</email></cliente><transporte><volumes><volume><servico>Servico</servico><codigoRastreamento></codigoRastreamento></volume></volumes></transporte><itens><item><codigo>001</codigo><descricao>Item</descricao><qtde>1</qtde><vlr_unit>${
		deal.price
	}</vlr_unit></item></itens><parcelas><parcela><vlr>${
		deal.price
	}</vlr></parcela></parcelas></pedido>`;

	try {
		const response = await BlingApi.post(
			`/pedido/json/?apikey=${process.env.BLING_KEY}&xml=${xml}`,
			{},
			{ headers: { 'Content-Type': 'x-www-form-urlencoded' } }
		);

		return response.status === 201;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export default PostBlingDeal;
