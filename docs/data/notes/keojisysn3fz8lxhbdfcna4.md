
## Syllabus

#### Approaches to AI: 

Turing Test and Rational Agent Approaches; State Space Representation of Problems, Heuristic Search Techniques, Game Playing, Min-Max Search, Alpha Beta Cutoff Procedures.

#### Knowledge Representation: 

Logic, Semantic Networks, Frames, Rules, Scripts, Conceptual Dependency and Ontologies; Expert Systems, Handling Uncertainty in Knowledge.

#### Planning:

Components of a Planning System, Linear and Non-Linear Planning; Goal Stack Planning, Hierarchical Planning, STRIPS, Partial Order Planning.

#### Natural Language Processing:

Grammar and Language; Parsing Techniques, Semantic Analysis and Pragmatics.

#### Multi-Agent Systems:

Agents and Objects; Agents and Expert Systems; Generic Structure of Multiagent System, Semantic Web, Agent Communication, Knowledge Sharing using Ontologies, Agent Development Tools.

#### Fuzzy Sets:

Notion of Fuzziness, Membership Functions, Fuzzification and Defuzzification; Operations on Fuzzy Sets, Fuzzy Functions and Linguistic Variables; Fuzzy Relations, Fuzzy Rules and Fuzzy Inference; Fuzzy Control System and Fuzzy Rule-Based Systems.

#### Genetic Algorithms (GA):

Encoding Strategies, Genetic Operators, Fitness Functions and GA Cycle; Problem Solving using GA.

#### Artificial Neural Networks :

Supervised, Unsupervised and Reinforcement Learning; Single Perceptron, Multi-Layer Perceptron, Self Organizing Maps, Hopfield Network.

---

## Machine Learning

Machine Learning is a iterative process.

**Supervised Learning** :
There is a direct relationship between input variable & output variable. Check the drawing below to understand more :
![](/assets/images/2022-09-21-14-39-10.png)

**Supervised learning** problems can be classified into :

- _regression problem_ : Data itself is predicted. Example :House price prediction

- _classification problem_ : Category is predicted by the data. Example : if we upload an image of an animal then whether that animal is cat or non cat .

**_Anomaly detection algorithm_** : Identify unusal data points. Example : Unusal traffic or strange patterns in network that can indicate network is hacked.

**_Clustering algorithm_** : Groups data based on similiar conditions. Example : what types of customer buys a certain product

**Overfitting Data** : When model tries to use all attributes (even the least important ones) due to excess knowledge of attributes training set score is increasing (or error is decreasing) while testing set score is decreasing (or error is increasing)

**Underfitting Data** : model doesn't has enough knowledge and gives results which have very less connections/harmony among each other , due to lack of enough attributes.

### Linear Algebra , Regression & Classification

Scalar,Vector,Matrix,Matrix Operations,Norms,Probaility,Joint Distribution,Bayes theorem , Expectation, COvariance.

Vector dot product = each row \* each column

### Linear Regression

---

## Neural Networks

Read this to learn more about [Why Virtual Environments](https://realpython.com/python-virtual-environments-a-primer/#why-do-you-need-virtual-environments)

### What is PyTorch Tensor ??

A Pytorch Tensor is just a generic **n-dimensional array** to be used for arbitrary numeric computation. It can run on either CPU or GPU.
Read this article to learn more : [Tensors in PyTorch](https://www.geeksforgeeks.org/tensors-in-pytorch/)

### Batch Sizes

For example I have 1000 samples of data for training & I set batch_size = 10 then first 10 data samples (i.e from 1 to 10 ) will be used to train. Then again next 10 data samples (i.e from 11 to 20) will be used to train. Simliarly all 100 datat samples will be trained by training 10 samples at once.
Gradient descent is an optimization algorithm used to find the values of parameters (coefficients) of a function (f) that minimizes a cost function (cost). Gradient descent is best used when the parameters cannot be calculated analytically (e.g. using linear algebra) and must be searched for by an optimization algorithm.

### In the neural network terminology:

- _one epoch_ = one forward pass and one backward pass of all the training examples
- _batch size_ = the number of training examples in one forward/backward pass. The higher the batch size, the more memory space you'll need.
- _number of iterations_ = number of passes, each pass using batch size as number of examples. To be clear, one pass = one forward pass + one backward pass (we do not count the forward pass and backward pass as two different passes).

Example: if you have 1000 training examples, and your batch size is 500, then it will take 2 iterations to complete 1 epoch.

### Shuffles

For Example ,We want our neural net to recognize each number from the hand drawings & we are using a dataset that has all handdrawn numbers form 0 to 9 to train the net. Now if we took a neural net & fed through a bunch of 0s 1st then the neural net will say all are 0s , then when we fed 1s then the neural net will say all are 1s & when we reach 9s then it will end saying all are 9s. Now it will only recognize 9s but not the previous numbers but we want the net to recognize each number. Shuffling will make sure it learns all the numbers by trying to learn all numbers together.

### Layers (Hand Drawn Numbers training)

We are trying to have 3 hidden layers of 64 neurons. First layer will have Input of `28*28` (image size) & out put will be 64.Then next 2 layers will have 64 as both input & output sizes. Then the last layer will have input of 64 but output will be 10 . The 2nd , 3rd ,4th layer's input is 64 because the prev layer outputs 64 & this 64 then gets inputted to this layer.The 4th layer outputs 10 beacuse hand drawn numbers have 0 to 9 numbers (10 numbers in total) so 10 classes will be outputted.

![](/assets/images/2022-09-21-14-41-30.png)

### Feed Forward

In the prev section we created some layers now we need a path to take data from each layer to another. A feedforward neural network (FNN) is an artificial neural network wherein connections between the nodes do not form a cycle. The feedforward neural network was the first and simplest type of artificial neural network devised.

![](/assets/images/2022-09-21-14-41-51.png)

![](/assets/images/2022-09-21-14-42-07.png)

X will be passed to each layer however our model wont learn much because data wont be scaled properly. Scaled properly means data is transformed such that the features are within a specific range e.g. [0, 1]. For proper data scaling we need [activation functions](https://towardsdatascience.com/activation-functions-neural-networks-1cbd9f8d91d6). So here we will use ReLU activation. Activation Functions work on output of layers. So for the 1st 3 layers we will use ReLU Activation Functions but for the 4th layer we will use something else.
4th layer has 10 neurons (0-9 numbers) so we want to optimize the output so that 1 neuron is fully fired than the other 9. For that we will use softmax.

![](/assets/images/2022-09-21-14-43-00.png)

Notice that in the above image I have a forward method. This forward is called when Net Model is called (in line : `output=net(X)` ) . When you call the model directly this Forward is called , the internal  `__call__`  function is used. This function manages all registered hooks and calls forward afterwards. That’s also the reason you should call the model directly, because otherwise your hooks might not work etc.

### Training Model

Loss & optimizer are needed to make sure the model is nearly accurate. Loss means how wrong the model is. Optimizer makes sure the loss is reduced slowly over time based on the learning rate.

When we pass data through the neural network , it incurs a loss. Now it is entirely calculable to get weights to make loss zero. If we do that then our model might. So we use learning rate to opimize to lower the loss but only take certain size steps to opimize(not gigantic steps because then the optimization might stuck).

![](/assets/images/2022-09-21-14-43-36.png)

### Neural net from scratch

Let A0 be the input layer, Z1 & Z2 be the unactivated hidden layer. We will get the dot product of W1 and A0. W1 is bunch of weights that correspond to each of the 7840 connections. b1 is a constant bias term added to each of the 10 nodes. Then we will add activation functions to Z1.
Without applying activation function each node in the 1st layer would be _a linear combination of nodes before it + bias term_ . Then the second layer will be a linear combo of 1st layer & finally the output layer will be linear combo of 2nd layer which is a linear combo of 1st layer which is linear combo of input layer. This is just a fancy linear regression & will not become a smart learner. For more info [read this](https://qr.ae/pvOVWB)

![](/assets/images/2022-09-21-14-44-02.png)

We will use Rectified Linear Unit. A1 is the ==output== of ReLU applied on Z1. Then in similiar fashion we will get Z2 which is the second layer of hidden layers. However we will use Softmax activation function on Z2 to get the output layer (A2) .

![](/assets/images/2022-09-21-14-44-34.png)
