class ContaCorrente extends Conta {
    atualiza (taxa) {
        this._saldo = taxa + this._saldo;
    }
}