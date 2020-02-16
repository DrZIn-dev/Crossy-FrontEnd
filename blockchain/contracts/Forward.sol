pragma solidity >=0.4.21 <0.7.0;

contract Forward {
    uint256 public count = 0;
    enum State {Ongoing, Rejected, Completed}

    struct Contract {
        uint256 id;
        string issuer; // Fixed to byte32
        uint256 amount;
        string duration;
        string purchaseName;
        uint256 purchaseAmount;
        uint256 initialDate;
        State state;
        uint256 currencyRate;
    }

    mapping(uint256 => Contract) public contracts;

    event ContractCreated(
        uint256 indexed id,
        string issuer,
        uint256 amount,
        string duration,
        string purchaseName,
        uint256 purchaseAmount,
        uint256 initialDate,
        State state,
        uint256 currencyRate
    );

    event UpdateState(uint256 indexed id, State state);

    function createContract(
        string memory _issuer,
        uint256 _amount,
        string memory _duration,
        string memory _purchase_name,
        uint256 _purchase_amount,
        uint256 _currencyRate
    ) public returns (uint256) {
        count++;
        uint256 initDate = now;
        State initState = State.Ongoing;
        _currencyRate = _currencyRate * 100;
        contracts[count] = Contract(
            count,
            _issuer,
            _amount,
            _duration,
            _purchase_name,
            _purchase_amount,
            initDate,
            initState,
            _currencyRate
        );
        emit ContractCreated(
            count,
            _issuer,
            _amount,
            _duration,
            _purchase_name,
            _purchase_amount,
            initDate,
            initState,
            _currencyRate
        );
        return count;
    }

    function setState(uint256 _id, uint256 _setState) public {
        require(contracts[_id].id != 0, "Contract is not existed.");
        contracts[_id].state = State(_setState);
        emit UpdateState(_id, contracts[_id].state);
    }

    function getContract(uint256 _id)
        public
        view
        returns (
            string memory issuer,
            string memory purchaseName,
            uint256 duration,
            string memory purchaseAmount,
            uint256 amount,
            uint256 initialDate
        )
    {
        Contract memory _contract = contracts[_id];
        return (
            _contract.issuer,
            _contract.purchaseName,
            _contract.purchaseAmount,
            _contract.duration,
            _contract.amount,
            _contract.initialDate
        );
    }

    function getContractState(uint256 _id) public view returns (State state) {
        Contract memory _contract = contracts[_id];
        return (_contract.state);
    }

    function getContractCurrency(uint256 _id)
        public
        view
        returns (uint256 currencyRate)
    {
        Contract memory _contract = contracts[_id];
        return (_contract.currencyRate);
    }

    function getCount() public view returns (uint256 length) {
        return count;
    }
}
