class RefineryMethodModel:
    def __init__(
            self,
            id: int|None,
            name: str,
            time: float,
            price: float
    ):

        self.id = id
        self.name = name
        self.time = time
        self.price = price