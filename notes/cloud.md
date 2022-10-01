---
id: nx2wuyeo5kgob0u4jucsers
title: Cloud Computing
desc: ''
updated: 1664547692534
created: 1663749154508
---

**Cloud computing** is the on-demand availability of computer system resources, especially data storage (cloud storage) and computing power, without direct active management by the user. It is a _pay-per-use_ model.

## Disadvantages of Cloud

1. It makes firms dependent on cloud providers
2. Firm's data is under control of cloud provider
3. Limited ability to move data from provider

## Virtualization

Virtualization or virtualisation (sometimes abbreviated `v12n`, a numeronym) is the act of creating a *virtual* (rather than actual) version of something at the same abstraction level, including virtual computer hardware platforms, storage devices, and computer network resources. With virtualisationit is possibleto manage hardware like software.

Virtual processing shares the cloud providers :

- Processing Hardware
- Disk & Storage
- Memory
- Networking
- Desktop

**Hypervisor** (also known as a _virtual machine monitor, VMM, or virtualizer_) is a type of computer software, firmware or hardware that creates and runs virtual machines. There are 2 types of hypervisor :

Type 1 - runs directly on the hardware. This hypervisor also provides the OS.  
Type 2 - hypervisor is managed by the OS like any other application

![types of hypervisor](/assets/images/20220917075011-1.png)

A distributed system is a system whose components are located on different networked computers, which communicate and coordinate their actions by passing messages to one another. The components interact with one another in order to achieve a common goal. Three significant characteristics of distributed systems are: concurrency of components, lack of a global clock, and independent failure of components. Examples of distributed systems vary from SOA-based systems to massively multiplayer online games to peer-to-peer applications.

A computer program that runs within a distributed system is called a distributed program (and distributed programming is the process of writing such programs). There are many different types of implementations for the message passing mechanism, including pure HTTP, RPC-like connectors and message queues.

## NIST

National Institute of Standards & Technology

### Service Models

- Infrastructure as a service or [[IAAS|cloud.service-models]]
- Platform as a service or [[PAAS|cloud.service-models#paas]]
- Software as a service or [[SAAS|cloud.service-models#saas]]
- Functions as a service or [[FAAS|cloud.service-models#faas]]

Read More about [[cloud.service-models]]

### Service Attributes

1. **On Demand Self Service**
   : consumers can unilaterally provision computing capabilities as needed automatically without requiring human interaction with each service provider.
2. **Broad Network Access**
   : capabilities are available over the network and accessed through standard mechanism that promote use by heterogeneous thin or thick client platforms.
3. **Resource Pooling**
   :The provider’s computing resources are pooled to serve multiple consumers using a multi-tenant model, with different physical and virtual resources dynamically assigned and reassigned according to consumer demand
4. **Rapid Elasticity**
   : capabilities can be elastically provisioned and released to scale rapidly outward and inward commensurate with demand.
5. **Measured Service**
   : cloud systems automatically control and optimize resource use by leveraging a metering capability at some level of abstraction appropriate to the type of service.

## Cloud Cube Model

Has 4 dimensions :

- _Physical Location of data_ : Internal/External
- _OwnerShip_ : Proprietary / Open
- _Security Range_ : DePerimeterized / Perimeterized
- _Dimension_ : Insourced/Outsourced

Read more from [here](https://data-flair.training/blogs/cloud-cube-model/)

## Deployment Models

- Community
- Hybrid
- Private
- Public

## Security

Security can be a issue if cloud providers do not take necessary actions to guard the data.

### Auditing & Compliances

**_Cloud Audit_** is a specification for the presentation of information about cloud service providers' address _control framework_.

_Control Framework_ - It is a data structure that organizes and categories organisation's internal control which are practices and procedures established to create business minimizes the risk.

The **goal of cloud audit** is to provide cloud service providers with a way to make their peroformance and security data available for potential customers. Specifications provides a standardway to present and share automated statics about performance & security.

**Cloud Compliance** menas rules & regulations enforced by governing bodies. Cloud Compliance Issue rises as soon as we make use of cloud storage or backup services. By moving data from pur internal storage to someone else we are forced to examine closely how the datat will be kept so that you remain compliant with laws and industry related organizations.

Audits & Compliances refers to all the internal and external process that an organization implements in order to :-

- **identify** compliances requirements such as corporate policies and standards laws and regulations as well as customer service level agreement (SLA)
- **implement** 3Ps (Policies,Procedures,Processes) and systems to satisfy those compliance requirements.
- **monitor** whether those 3Ps are followed dilligently (smoothly)

Although audit and compliances functions have always played on important role in every company,with cloud services. These functions become super critical.

- SLA -> data ownership , lifecycle , data destroy & verification proecess should be.
- Data Lock-In -> Obtain exit-strategy and options from cloud service provider.
- Regulatory compliances -> Include compliances officers & chief informationalofficers in auditing processes and the address privacy & security
